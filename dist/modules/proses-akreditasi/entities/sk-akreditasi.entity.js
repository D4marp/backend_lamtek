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
exports.SkAkreditasi = exports.StatusSk = void 0;
const typeorm_1 = require("typeorm");
var StatusSk;
(function (StatusSk) {
    StatusSk["DRAFT"] = "DRAFT";
    StatusSk["GENERATED"] = "GENERATED";
    StatusSk["SIGNED"] = "SIGNED";
    StatusSk["PUBLISHED"] = "PUBLISHED";
    StatusSk["REVOKED"] = "REVOKED";
})(StatusSk || (exports.StatusSk = StatusSk = {}));
let SkAkreditasi = class SkAkreditasi {
};
exports.SkAkreditasi = SkAkreditasi;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], SkAkreditasi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], SkAkreditasi.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'keputusan_ma_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], SkAkreditasi.prototype, "keputusanMaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_sk', length: 100 }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "nomorSk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_sk', type: 'date' }),
    __metadata("design:type", Date)
], SkAkreditasi.prototype, "tanggalSk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_berlaku', type: 'date' }),
    __metadata("design:type", Date)
], SkAkreditasi.prototype, "tanggalBerlaku", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_berakhir', type: 'date' }),
    __metadata("design:type", Date)
], SkAkreditasi.prototype, "tanggalBerakhir", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "peringkat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nilai_akreditasi', type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], SkAkreditasi.prototype, "nilaiAkreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusSk, default: StatusSk.DRAFT }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'file_sk_url', length: 255, nullable: true }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "fileSkUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "ipfsHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'blockchain_tx_hash', length: 100, nullable: true }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "blockchainTxHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'blockchain_block_number', type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], SkAkreditasi.prototype, "blockchainBlockNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ditandatangani_oleh', length: 255, nullable: true }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "ditandatanganiOleh", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jabatan_penandatangan', length: 255, nullable: true }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "jabatanPenandatangan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkAkreditasi.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], SkAkreditasi.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], SkAkreditasi.prototype, "updatedAt", void 0);
exports.SkAkreditasi = SkAkreditasi = __decorate([
    (0, typeorm_1.Entity)('sk_akreditasi'),
    (0, typeorm_1.Index)(['akreditasiId']),
    (0, typeorm_1.Index)(['nomorSk'], { unique: true })
], SkAkreditasi);
//# sourceMappingURL=sk-akreditasi.entity.js.map