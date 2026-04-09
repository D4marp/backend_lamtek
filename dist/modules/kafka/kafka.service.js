"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var KafkaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaService = exports.KafkaTopic = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
var KafkaTopic;
(function (KafkaTopic) {
    KafkaTopic["BLOCKCHAIN_TRANSACTION"] = "lamtek.blockchain.transaction";
    KafkaTopic["BLOCKCHAIN_BLOCK"] = "lamtek.blockchain.block";
    KafkaTopic["BLOCKCHAIN_CONTRACT_EVENT"] = "lamtek.blockchain.contract.event";
    KafkaTopic["AKREDITASI_CREATED"] = "lamtek.akreditasi.created";
    KafkaTopic["AKREDITASI_UPDATED"] = "lamtek.akreditasi.updated";
    KafkaTopic["AKREDITASI_STATUS_CHANGED"] = "lamtek.akreditasi.status.changed";
    KafkaTopic["ASESMEN_KECUKUPAN_COMPLETED"] = "lamtek.asesmen.kecukupan.completed";
    KafkaTopic["ASESMEN_LAPANGAN_COMPLETED"] = "lamtek.asesmen.lapangan.completed";
    KafkaTopic["ASESMEN_ASSIGNED"] = "lamtek.asesmen.assigned";
    KafkaTopic["DOCUMENT_UPLOADED"] = "lamtek.document.uploaded";
    KafkaTopic["DOCUMENT_VERIFIED"] = "lamtek.document.verified";
    KafkaTopic["DOCUMENT_IPFS_STORED"] = "lamtek.document.ipfs.stored";
    KafkaTopic["USER_REGISTERED"] = "lamtek.user.registered";
    KafkaTopic["USER_ACTIVATED"] = "lamtek.user.activated";
    KafkaTopic["USER_DEACTIVATED"] = "lamtek.user.deactivated";
    KafkaTopic["PAYMENT_CREATED"] = "lamtek.payment.created";
    KafkaTopic["PAYMENT_COMPLETED"] = "lamtek.payment.completed";
    KafkaTopic["PAYMENT_VERIFIED"] = "lamtek.payment.verified";
    KafkaTopic["PAYMENT_REJECTED"] = "lamtek.payment.rejected";
    KafkaTopic["NOTIFICATION_EMAIL"] = "lamtek.notification.email";
    KafkaTopic["NOTIFICATION_PUSH"] = "lamtek.notification.push";
    KafkaTopic["NOTIFICATION_SMS"] = "lamtek.notification.sms";
    KafkaTopic["AUDIT_LOG"] = "lamtek.audit.log";
})(KafkaTopic || (exports.KafkaTopic = KafkaTopic = {}));
let KafkaService = KafkaService_1 = class KafkaService {
    constructor(kafkaClient) {
        this.kafkaClient = kafkaClient;
        this.logger = new common_1.Logger(KafkaService_1.name);
        this.isConnected = false;
    }
    async onModuleInit() {
        try {
            const responseTopics = [
                KafkaTopic.BLOCKCHAIN_TRANSACTION,
                KafkaTopic.BLOCKCHAIN_CONTRACT_EVENT,
                KafkaTopic.AKREDITASI_STATUS_CHANGED,
                KafkaTopic.DOCUMENT_VERIFIED,
                KafkaTopic.PAYMENT_COMPLETED,
            ];
            for (const topic of responseTopics) {
                this.kafkaClient.subscribeToResponseOf(topic);
            }
            await this.kafkaClient.connect();
            this.isConnected = true;
            this.logger.log('Kafka client connected successfully');
        }
        catch (error) {
            this.logger.warn(`Kafka connection failed: ${error.message}. Running without Kafka.`);
            this.isConnected = false;
        }
    }
    async onModuleDestroy() {
        if (this.isConnected) {
            await this.kafkaClient.close();
            this.logger.log('Kafka client disconnected');
        }
    }
    async publish(message) {
        if (!this.isConnected) {
            this.logger.warn(`Kafka not connected. Skipping message to ${message.topic}`);
            return;
        }
        try {
            const payload = {
                ...message.value,
                _metadata: {
                    timestamp: message.timestamp || new Date(),
                    source: 'lamtek-backend',
                },
            };
            this.kafkaClient.emit(message.topic, {
                key: message.key,
                value: JSON.stringify(payload),
                headers: message.headers,
            });
            this.logger.debug(`Published message to ${message.topic}`);
        }
        catch (error) {
            this.logger.error(`Failed to publish to ${message.topic}: ${error.message}`);
            throw error;
        }
    }
    async send(message) {
        if (!this.isConnected) {
            throw new Error('Kafka client not connected');
        }
        return this.kafkaClient
            .send(message.topic, {
            key: message.key,
            value: JSON.stringify(message.value),
            headers: message.headers,
        })
            .toPromise();
    }
    async publishBlockchainTransaction(data) {
        await this.publish({
            topic: KafkaTopic.BLOCKCHAIN_TRANSACTION,
            key: data.txHash,
            value: data,
        });
    }
    async publishContractEvent(data) {
        await this.publish({
            topic: KafkaTopic.BLOCKCHAIN_CONTRACT_EVENT,
            key: data.txHash,
            value: data,
        });
    }
    async publishAkreditasiCreated(data) {
        await this.publish({
            topic: KafkaTopic.AKREDITASI_CREATED,
            key: String(data.akreditasiId),
            value: data,
        });
    }
    async publishAkreditasiStatusChanged(data) {
        await this.publish({
            topic: KafkaTopic.AKREDITASI_STATUS_CHANGED,
            key: String(data.akreditasiId),
            value: data,
        });
    }
    async publishDocumentUploaded(data) {
        await this.publish({
            topic: KafkaTopic.DOCUMENT_UPLOADED,
            key: String(data.documentId),
            value: data,
        });
    }
    async publishDocumentIpfsStored(data) {
        await this.publish({
            topic: KafkaTopic.DOCUMENT_IPFS_STORED,
            key: data.ipfsHash,
            value: data,
        });
    }
    async publishPaymentCreated(data) {
        await this.publish({
            topic: KafkaTopic.PAYMENT_CREATED,
            key: String(data.paymentId),
            value: data,
        });
    }
    async publishPaymentCompleted(data) {
        await this.publish({
            topic: KafkaTopic.PAYMENT_COMPLETED,
            key: String(data.paymentId),
            value: data,
        });
    }
    async publishUserRegistered(data) {
        await this.publish({
            topic: KafkaTopic.USER_REGISTERED,
            key: String(data.userId),
            value: data,
        });
    }
    async publishAuditLog(data) {
        await this.publish({
            topic: KafkaTopic.AUDIT_LOG,
            key: `${data.entityType}-${data.entityId}`,
            value: {
                ...data,
                timestamp: new Date(),
            },
        });
    }
    async sendEmailNotification(data) {
        await this.publish({
            topic: KafkaTopic.NOTIFICATION_EMAIL,
            key: data.to,
            value: data,
        });
    }
    async sendPushNotification(data) {
        await this.publish({
            topic: KafkaTopic.NOTIFICATION_PUSH,
            key: String(data.userId),
            value: data,
        });
    }
};
exports.KafkaService = KafkaService;
exports.KafkaService = KafkaService = KafkaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KAFKA_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], KafkaService);
//# sourceMappingURL=kafka.service.js.map