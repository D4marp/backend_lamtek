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
exports.PengesahanAl = exports.StatusPengesahanAl = void 0;
const typeorm_1 = require("typeorm");
var StatusPengesahanAl;
(function (StatusPengesahanAl) {
    StatusPengesahanAl["PENDING"] = "PENDING";
    StatusPengesahanAl["DISAHKAN"] = "DISAHKAN";
    StatusPengesahanAl["DITOLAK"] = "DITOLAK";
    StatusPengesahanAl["REVISI"] = "REVISI";
})(StatusPengesahanAl || (exports.StatusPengesahanAl = StatusPengesahanAl = {}));
let PengesahanAl = class PengesahanAl {
};
exports.PengesahanAl = PengesahanAl;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PengesahanAl.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PengesahanAl.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'laporan_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], PengesahanAl.prototype, "laporanId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggapan_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], PengesahanAl.prototype, "tanggapanId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_pengesahan', length: 100, nullable: true }),
    __metadata("design:type", String)
], PengesahanAl.prototype, "nomorPengesahan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_pengesahan', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PengesahanAl.prototype, "tanggalPengesahan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusPengesahanAl, default: StatusPengesahanAl.PENDING }),
    __metadata("design:type", String)
], PengesahanAl.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nilai_al', type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PengesahanAl.prototype, "nilaiAl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nilai_final', type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PengesahanAl.prototype, "nilaiFinal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hasil_evaluasi', type: 'text', nullable: true }),
    __metadata("design:type", String)
], PengesahanAl.prototype, "hasilEvaluasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PengesahanAl.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rekomendasi_peringkat', length: 50, nullable: true }),
    __metadata("design:type", String)
], PengesahanAl.prototype, "rekomendasiPeringkat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'disahkan_oleh', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], PengesahanAl.prototype, "disahkanOleh", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], PengesahanAl.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], PengesahanAl.prototype, "updatedAt", void 0);
exports.PengesahanAl = PengesahanAl = __decorate([
    (0, typeorm_1.Entity)('pengesahan_al'),
    (0, typeorm_1.Index)(['akreditasiId'])
], PengesahanAl);
//# sourceMappingURL=pengesahan-al.entity.js.map