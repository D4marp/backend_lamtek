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
var KafkaController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const kafka_service_1 = require("./kafka.service");
let KafkaController = KafkaController_1 = class KafkaController {
    constructor() {
        this.logger = new common_1.Logger(KafkaController_1.name);
    }
    async handleBlockchainTransaction(message, context) {
        const topic = context.getTopic();
        const partition = context.getPartition();
        const offset = context.getMessage().offset;
        this.logger.log(`Received blockchain transaction: topic=${topic}, partition=${partition}, offset=${offset}`);
        try {
            const data = typeof message === 'string' ? JSON.parse(message) : message;
            this.logger.debug(`Transaction data: ${JSON.stringify(data)}`);
        }
        catch (error) {
            this.logger.error(`Error processing blockchain transaction: ${error.message}`);
        }
    }
    async handleContractEvent(message, context) {
        this.logger.log('Received contract event');
        try {
            const data = typeof message === 'string' ? JSON.parse(message) : message;
            switch (data.eventName) {
                case 'AkreditasiRegistered':
                    await this.handleAkreditasiRegisteredEvent(data);
                    break;
                case 'DocumentVerified':
                    await this.handleDocumentVerifiedEvent(data);
                    break;
                case 'AsesmenCompleted':
                    await this.handleAsesmenCompletedEvent(data);
                    break;
                default:
                    this.logger.debug(`Unhandled contract event: ${data.eventName}`);
            }
        }
        catch (error) {
            this.logger.error(`Error processing contract event: ${error.message}`);
        }
    }
    async handleAkreditasiStatusChanged(message, context) {
        this.logger.log('Received akreditasi status change event');
        try {
            const data = typeof message === 'string' ? JSON.parse(message) : message;
            this.logger.log(`Akreditasi ${data.akreditasiId} status changed from ${data.oldStatus} to ${data.newStatus}`);
        }
        catch (error) {
            this.logger.error(`Error processing status change: ${error.message}`);
        }
    }
    async handleDocumentUploaded(message, context) {
        this.logger.log('Received document uploaded event');
        try {
            const data = typeof message === 'string' ? JSON.parse(message) : message;
            this.logger.log(`Document ${data.documentId} uploaded by user ${data.uploadedBy}`);
        }
        catch (error) {
            this.logger.error(`Error processing document upload: ${error.message}`);
        }
    }
    async handleDocumentIpfsStored(message, context) {
        this.logger.log('Received IPFS storage event');
        try {
            const data = typeof message === 'string' ? JSON.parse(message) : message;
            this.logger.log(`Document ${data.documentId} stored in IPFS: ${data.ipfsHash}`);
        }
        catch (error) {
            this.logger.error(`Error processing IPFS storage: ${error.message}`);
        }
    }
    async handlePaymentCompleted(message, context) {
        this.logger.log('Received payment completed event');
        try {
            const data = typeof message === 'string' ? JSON.parse(message) : message;
            this.logger.log(`Payment ${data.paymentId} completed for akreditasi ${data.akreditasiId}`);
        }
        catch (error) {
            this.logger.error(`Error processing payment completion: ${error.message}`);
        }
    }
    async handleAuditLog(message, context) {
        try {
            const data = typeof message === 'string' ? JSON.parse(message) : message;
            this.logger.debug(`Audit: ${data.action} on ${data.entityType}:${data.entityId} by user ${data.userId}`);
        }
        catch (error) {
            this.logger.error(`Error processing audit log: ${error.message}`);
        }
    }
    async handleAkreditasiRegisteredEvent(data) {
        this.logger.log(`Akreditasi registered on blockchain: ${JSON.stringify(data.args)}`);
    }
    async handleDocumentVerifiedEvent(data) {
        this.logger.log(`Document verified on blockchain: ${JSON.stringify(data.args)}`);
    }
    async handleAsesmenCompletedEvent(data) {
        this.logger.log(`Asesmen completed on blockchain: ${JSON.stringify(data.args)}`);
    }
};
exports.KafkaController = KafkaController;
__decorate([
    (0, microservices_1.EventPattern)(kafka_service_1.KafkaTopic.BLOCKCHAIN_TRANSACTION),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.KafkaContext]),
    __metadata("design:returntype", Promise)
], KafkaController.prototype, "handleBlockchainTransaction", null);
__decorate([
    (0, microservices_1.EventPattern)(kafka_service_1.KafkaTopic.BLOCKCHAIN_CONTRACT_EVENT),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.KafkaContext]),
    __metadata("design:returntype", Promise)
], KafkaController.prototype, "handleContractEvent", null);
__decorate([
    (0, microservices_1.EventPattern)(kafka_service_1.KafkaTopic.AKREDITASI_STATUS_CHANGED),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.KafkaContext]),
    __metadata("design:returntype", Promise)
], KafkaController.prototype, "handleAkreditasiStatusChanged", null);
__decorate([
    (0, microservices_1.EventPattern)(kafka_service_1.KafkaTopic.DOCUMENT_UPLOADED),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.KafkaContext]),
    __metadata("design:returntype", Promise)
], KafkaController.prototype, "handleDocumentUploaded", null);
__decorate([
    (0, microservices_1.EventPattern)(kafka_service_1.KafkaTopic.DOCUMENT_IPFS_STORED),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.KafkaContext]),
    __metadata("design:returntype", Promise)
], KafkaController.prototype, "handleDocumentIpfsStored", null);
__decorate([
    (0, microservices_1.EventPattern)(kafka_service_1.KafkaTopic.PAYMENT_COMPLETED),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.KafkaContext]),
    __metadata("design:returntype", Promise)
], KafkaController.prototype, "handlePaymentCompleted", null);
__decorate([
    (0, microservices_1.EventPattern)(kafka_service_1.KafkaTopic.AUDIT_LOG),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.KafkaContext]),
    __metadata("design:returntype", Promise)
], KafkaController.prototype, "handleAuditLog", null);
exports.KafkaController = KafkaController = KafkaController_1 = __decorate([
    (0, common_1.Controller)()
], KafkaController);
//# sourceMappingURL=kafka.controller.js.map