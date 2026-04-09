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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinkronisasiBanpt = exports.StatusSinkronisasi = void 0;
const typeorm_1 = require("typeorm");
var StatusSinkronisasi;
(function (StatusSinkronisasi) {
    StatusSinkronisasi["PENDING"] = "PENDING";
    StatusSinkronisasi["SYNCING"] = "SYNCING";
    StatusSinkronisasi["SYNCED"] = "SYNCED";
    StatusSinkronisasi["FAILED"] = "FAILED";
})(StatusSinkronisasi || (exports.StatusSinkronisasi = StatusSinkronisasi = {}));
let SinkronisasiBanpt = class SinkronisasiBanpt {
};
exports.SinkronisasiBanpt = SinkronisasiBanpt;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], SinkronisasiBanpt.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], SinkronisasiBanpt.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sk_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], SinkronisasiBanpt.prototype, "skId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusSinkronisasi, default: StatusSinkronisasi.PENDING }),
    __metadata("design:type", String)
], SinkronisasiBanpt.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_sinkronisasi', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], SinkronisasiBanpt.prototype, "tanggalSinkronisasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'response_banpt', type: 'text', nullable: true }),
    __metadata("design:type", String)
], SinkronisasiBanpt.prototype, "responseBanpt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_registrasi_banpt', length: 100, nullable: true }),
    __metadata("design:type", String)
], SinkronisasiBanpt.prototype, "nomorRegistrasiBanpt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'error_message', type: 'text', nullable: true }),
    __metadata("design:type", String)
], SinkronisasiBanpt.prototype, "errorMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'retry_count', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SinkronisasiBanpt.prototype, "retryCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_retry_at', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], SinkronisasiBanpt.prototype, "lastRetryAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'synced_by', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], SinkronisasiBanpt.prototype, "syncedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], SinkronisasiBanpt.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], SinkronisasiBanpt.prototype, "updatedAt", void 0);
exports.SinkronisasiBanpt = SinkronisasiBanpt = __decorate([
    (0, typeorm_1.Entity)('sinkronisasi_banpt'),
    (0, typeorm_1.Index)(['akreditasiId']),
    (0, typeorm_1.Index)(['skId'])
], SinkronisasiBanpt);
//# sourceMappingURL=sinkronisasi-banpt.entity.js.map