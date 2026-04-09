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
exports.PengesahanAk = exports.StatusPengesahan = void 0;
const typeorm_1 = require("typeorm");
var StatusPengesahan;
(function (StatusPengesahan) {
    StatusPengesahan["PENDING"] = "PENDING";
    StatusPengesahan["DISAHKAN"] = "DISAHKAN";
    StatusPengesahan["DITOLAK"] = "DITOLAK";
    StatusPengesahan["REVISI"] = "REVISI";
})(StatusPengesahan || (exports.StatusPengesahan = StatusPengesahan = {}));
let PengesahanAk = class PengesahanAk {
};
exports.PengesahanAk = PengesahanAk;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PengesahanAk.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PengesahanAk.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'laporan_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], PengesahanAk.prototype, "laporanId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_pengesahan', length: 100, nullable: true }),
    __metadata("design:type", String)
], PengesahanAk.prototype, "nomorPengesahan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_pengesahan', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PengesahanAk.prototype, "tanggalPengesahan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusPengesahan, default: StatusPengesahan.PENDING }),
    __metadata("design:type", String)
], PengesahanAk.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nilai_ak', type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], PengesahanAk.prototype, "nilaiAk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hasil_evaluasi', type: 'text', nullable: true }),
    __metadata("design:type", String)
], PengesahanAk.prototype, "hasilEvaluasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], PengesahanAk.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'disahkan_oleh', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], PengesahanAk.prototype, "disahkanOleh", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lanjut_ke_al', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PengesahanAk.prototype, "lanjutKeAl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], PengesahanAk.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], PengesahanAk.prototype, "updatedAt", void 0);
exports.PengesahanAk = PengesahanAk = __decorate([
    (0, typeorm_1.Entity)('pengesahan_ak'),
    (0, typeorm_1.Index)(['akreditasiId'])
], PengesahanAk);
//# sourceMappingURL=pengesahan-ak.entity.js.map