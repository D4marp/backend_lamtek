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
exports.TanggapanAl = exports.StatusTanggapan = void 0;
const typeorm_1 = require("typeorm");
var StatusTanggapan;
(function (StatusTanggapan) {
    StatusTanggapan["DRAFT"] = "DRAFT";
    StatusTanggapan["SUBMITTED"] = "SUBMITTED";
    StatusTanggapan["REVIEWED"] = "REVIEWED";
})(StatusTanggapan || (exports.StatusTanggapan = StatusTanggapan = {}));
let TanggapanAl = class TanggapanAl {
};
exports.TanggapanAl = TanggapanAl;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], TanggapanAl.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], TanggapanAl.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'laporan_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], TanggapanAl.prototype, "laporanId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prodi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], TanggapanAl.prototype, "prodiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], TanggapanAl.prototype, "tanggapan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bukti_pendukung', type: 'text', nullable: true }),
    __metadata("design:type", String)
], TanggapanAl.prototype, "buktiPendukung", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_submit', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], TanggapanAl.prototype, "tanggalSubmit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusTanggapan, default: StatusTanggapan.DRAFT }),
    __metadata("design:type", String)
], TanggapanAl.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'file_url', length: 255, nullable: true }),
    __metadata("design:type", String)
], TanggapanAl.prototype, "fileUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash', length: 100, nullable: true }),
    __metadata("design:type", String)
], TanggapanAl.prototype, "ipfsHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'submitted_by', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], TanggapanAl.prototype, "submittedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], TanggapanAl.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], TanggapanAl.prototype, "updatedAt", void 0);
exports.TanggapanAl = TanggapanAl = __decorate([
    (0, typeorm_1.Entity)('tanggapan_al'),
    (0, typeorm_1.Index)(['akreditasiId']),
    (0, typeorm_1.Index)(['laporanId'])
], TanggapanAl);
//# sourceMappingURL=tanggapan-al.entity.js.map