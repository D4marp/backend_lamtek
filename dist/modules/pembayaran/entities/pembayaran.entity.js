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
exports.Pembayaran = exports.MetodePembayaran = exports.StatusPembayaran = void 0;
const typeorm_1 = require("typeorm");
var StatusPembayaran;
(function (StatusPembayaran) {
    StatusPembayaran["PENDING"] = "PENDING";
    StatusPembayaran["PAID"] = "PAID";
    StatusPembayaran["VERIFIED"] = "VERIFIED";
    StatusPembayaran["REJECTED"] = "REJECTED";
    StatusPembayaran["REFUNDED"] = "REFUNDED";
})(StatusPembayaran || (exports.StatusPembayaran = StatusPembayaran = {}));
var MetodePembayaran;
(function (MetodePembayaran) {
    MetodePembayaran["BANK_TRANSFER"] = "BANK_TRANSFER";
    MetodePembayaran["VIRTUAL_ACCOUNT"] = "VIRTUAL_ACCOUNT";
    MetodePembayaran["QRIS"] = "QRIS";
})(MetodePembayaran || (exports.MetodePembayaran = MetodePembayaran = {}));
let Pembayaran = class Pembayaran {
};
exports.Pembayaran = Pembayaran;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Pembayaran.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Pembayaran.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'skema_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Pembayaran.prototype, "skemaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_invoice', length: 100 }),
    __metadata("design:type", String)
], Pembayaran.prototype, "nomorInvoice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_invoice', type: 'date' }),
    __metadata("design:type", Date)
], Pembayaran.prototype, "tanggalInvoice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_jatuh_tempo', type: 'date' }),
    __metadata("design:type", Date)
], Pembayaran.prototype, "tanggalJatuhTempo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jumlah_tagihan', type: 'decimal', precision: 15, scale: 2 }),
    __metadata("design:type", Number)
], Pembayaran.prototype, "jumlahTagihan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jumlah_dibayar', type: 'decimal', precision: 15, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Pembayaran.prototype, "jumlahDibayar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusPembayaran, default: StatusPembayaran.PENDING }),
    __metadata("design:type", String)
], Pembayaran.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metode_pembayaran', type: 'enum', enum: MetodePembayaran, nullable: true }),
    __metadata("design:type", String)
], Pembayaran.prototype, "metodePembayaran", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Pembayaran.prototype, "bankId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_rekening_tujuan', length: 50, nullable: true }),
    __metadata("design:type", String)
], Pembayaran.prototype, "nomorRekeningTujuan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_bayar', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Pembayaran.prototype, "tanggalBayar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bukti_bayar_url', length: 255, nullable: true }),
    __metadata("design:type", String)
], Pembayaran.prototype, "buktiBayarUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'verified_by', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Pembayaran.prototype, "verifiedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'verified_at', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Pembayaran.prototype, "verifiedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Pembayaran.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Pembayaran.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Pembayaran.prototype, "updatedAt", void 0);
exports.Pembayaran = Pembayaran = __decorate([
    (0, typeorm_1.Entity)('pembayaran'),
    (0, typeorm_1.Index)(['akreditasiId']),
    (0, typeorm_1.Index)(['nomorInvoice'], { unique: true })
], Pembayaran);
//# sourceMappingURL=pembayaran.entity.js.map