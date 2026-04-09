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
exports.SkemaPembayaran = exports.TipeSkema = void 0;
const typeorm_1 = require("typeorm");
var TipeSkema;
(function (TipeSkema) {
    TipeSkema["REGULER"] = "REGULER";
    TipeSkema["PJJ"] = "PJJ";
    TipeSkema["PRODI_BARU"] = "PRODI_BARU";
})(TipeSkema || (exports.TipeSkema = TipeSkema = {}));
let SkemaPembayaran = class SkemaPembayaran {
};
exports.SkemaPembayaran = SkemaPembayaran;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], SkemaPembayaran.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_skema', length: 20 }),
    __metadata("design:type", String)
], SkemaPembayaran.prototype, "kodeSkema", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_skema', length: 255 }),
    __metadata("design:type", String)
], SkemaPembayaran.prototype, "namaSkema", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: TipeSkema, default: TipeSkema.REGULER }),
    __metadata("design:type", String)
], SkemaPembayaran.prototype, "tipe", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenjang_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], SkemaPembayaran.prototype, "jenjangId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'biaya_pendaftaran', type: 'decimal', precision: 15, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], SkemaPembayaran.prototype, "biayaPendaftaran", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'biaya_asesmen_kecukupan', type: 'decimal', precision: 15, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], SkemaPembayaran.prototype, "biayaAsesmenKecukupan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'biaya_asesmen_lapangan', type: 'decimal', precision: 15, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], SkemaPembayaran.prototype, "biayaAsesmenLapangan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'biaya_sk', type: 'decimal', precision: 15, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], SkemaPembayaran.prototype, "biayaSk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_biaya', type: 'decimal', precision: 15, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], SkemaPembayaran.prototype, "totalBiaya", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], SkemaPembayaran.prototype, "keterangan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'berlaku_mulai', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], SkemaPembayaran.prototype, "berlakuMulai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'berlaku_sampai', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], SkemaPembayaran.prototype, "berlakuSampai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], SkemaPembayaran.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], SkemaPembayaran.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], SkemaPembayaran.prototype, "updatedAt", void 0);
exports.SkemaPembayaran = SkemaPembayaran = __decorate([
    (0, typeorm_1.Entity)('skema_pembayaran'),
    (0, typeorm_1.Index)(['kodeSkema'], { unique: true })
], SkemaPembayaran);
//# sourceMappingURL=skema-pembayaran.entity.js.map