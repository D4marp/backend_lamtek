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
exports.KeputusanMa = exports.StatusKeputusan = void 0;
const typeorm_1 = require("typeorm");
var StatusKeputusan;
(function (StatusKeputusan) {
    StatusKeputusan["PENDING"] = "PENDING";
    StatusKeputusan["DIBAHAS"] = "DIBAHAS";
    StatusKeputusan["DISETUJUI"] = "DISETUJUI";
    StatusKeputusan["DITOLAK"] = "DITOLAK";
})(StatusKeputusan || (exports.StatusKeputusan = StatusKeputusan = {}));
let KeputusanMa = class KeputusanMa {
};
exports.KeputusanMa = KeputusanMa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], KeputusanMa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], KeputusanMa.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pengesahan_al_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], KeputusanMa.prototype, "pengesahanAlId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_sidang', length: 100, nullable: true }),
    __metadata("design:type", String)
], KeputusanMa.prototype, "nomorSidang", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_sidang', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], KeputusanMa.prototype, "tanggalSidang", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusKeputusan, default: StatusKeputusan.PENDING }),
    __metadata("design:type", String)
], KeputusanMa.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'peringkat_final', length: 50, nullable: true }),
    __metadata("design:type", String)
], KeputusanMa.prototype, "peringkatFinal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nilai_final', type: 'decimal', precision: 5, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], KeputusanMa.prototype, "nilaiFinal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'masa_berlaku', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], KeputusanMa.prototype, "masaBerlaku", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hasil_keputusan', type: 'text', nullable: true }),
    __metadata("design:type", String)
], KeputusanMa.prototype, "hasilKeputusan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], KeputusanMa.prototype, "rekomendasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], KeputusanMa.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'diputuskan_oleh', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], KeputusanMa.prototype, "diputuskanOleh", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'notulen_sidang', type: 'text', nullable: true }),
    __metadata("design:type", String)
], KeputusanMa.prototype, "notulenSidang", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], KeputusanMa.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], KeputusanMa.prototype, "updatedAt", void 0);
exports.KeputusanMa = KeputusanMa = __decorate([
    (0, typeorm_1.Entity)('keputusan_ma'),
    (0, typeorm_1.Index)(['akreditasiId'])
], KeputusanMa);
//# sourceMappingURL=keputusan-ma.entity.js.map