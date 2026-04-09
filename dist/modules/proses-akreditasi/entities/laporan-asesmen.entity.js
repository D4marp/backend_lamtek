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
exports.LaporanAsesmen = exports.JenisLaporan = exports.StatusLaporan = void 0;
const typeorm_1 = require("typeorm");
var StatusLaporan;
(function (StatusLaporan) {
    StatusLaporan["DRAFT"] = "DRAFT";
    StatusLaporan["SUBMITTED"] = "SUBMITTED";
    StatusLaporan["REVIEWED"] = "REVIEWED";
    StatusLaporan["APPROVED"] = "APPROVED";
    StatusLaporan["REJECTED"] = "REJECTED";
})(StatusLaporan || (exports.StatusLaporan = StatusLaporan = {}));
var JenisLaporan;
(function (JenisLaporan) {
    JenisLaporan["ASESMEN_KECUKUPAN"] = "ASESMEN_KECUKUPAN";
    JenisLaporan["ASESMEN_LAPANGAN"] = "ASESMEN_LAPANGAN";
    JenisLaporan["BERITA_ACARA"] = "BERITA_ACARA";
})(JenisLaporan || (exports.JenisLaporan = JenisLaporan = {}));
let LaporanAsesmen = class LaporanAsesmen {
};
exports.LaporanAsesmen = LaporanAsesmen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], LaporanAsesmen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], LaporanAsesmen.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asesor_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], LaporanAsesmen.prototype, "asesorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenis_laporan', type: 'enum', enum: JenisLaporan }),
    __metadata("design:type", String)
], LaporanAsesmen.prototype, "jenisLaporan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_laporan', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaporanAsesmen.prototype, "nomorLaporan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_laporan', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], LaporanAsesmen.prototype, "tanggalLaporan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaporanAsesmen.prototype, "ringkasan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], LaporanAsesmen.prototype, "rekomendasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nilai_total', type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], LaporanAsesmen.prototype, "nilaiTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusLaporan, default: StatusLaporan.DRAFT }),
    __metadata("design:type", String)
], LaporanAsesmen.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'file_url', length: 255, nullable: true }),
    __metadata("design:type", String)
], LaporanAsesmen.prototype, "fileUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash', length: 100, nullable: true }),
    __metadata("design:type", String)
], LaporanAsesmen.prototype, "ipfsHash", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], LaporanAsesmen.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], LaporanAsesmen.prototype, "updatedAt", void 0);
exports.LaporanAsesmen = LaporanAsesmen = __decorate([
    (0, typeorm_1.Entity)('laporan_asesmen'),
    (0, typeorm_1.Index)(['akreditasiId']),
    (0, typeorm_1.Index)(['asesorId'])
], LaporanAsesmen);
//# sourceMappingURL=laporan-asesmen.entity.js.map