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
exports.RegistrasiAkreditasi = exports.StatusRegistrasi = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
var StatusRegistrasi;
(function (StatusRegistrasi) {
    StatusRegistrasi["DRAFT"] = "draft";
    StatusRegistrasi["SUBMITTED"] = "submitted";
    StatusRegistrasi["VERIFIED"] = "verified";
    StatusRegistrasi["APPROVED"] = "approved";
    StatusRegistrasi["REJECTED"] = "rejected";
    StatusRegistrasi["CANCELLED"] = "cancelled";
})(StatusRegistrasi || (exports.StatusRegistrasi = StatusRegistrasi = {}));
let RegistrasiAkreditasi = class RegistrasiAkreditasi {
};
exports.RegistrasiAkreditasi = RegistrasiAkreditasi;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID registrasi akreditasi' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RegistrasiAkreditasi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID program studi' }),
    (0, typeorm_1.Column)({ name: 'prodi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RegistrasiAkreditasi.prototype, "prodiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID institusi' }),
    (0, typeorm_1.Column)({ name: 'institusi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RegistrasiAkreditasi.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tahun akademik' }),
    (0, typeorm_1.Column)({ name: 'tahun_akademik', type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], RegistrasiAkreditasi.prototype, "tahunAkademik", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal registrasi' }),
    (0, typeorm_1.Column)({ name: 'tanggal_registrasi', type: 'date' }),
    __metadata("design:type", Date)
], RegistrasiAkreditasi.prototype, "tanggalRegistrasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status registrasi', enum: StatusRegistrasi }),
    (0, typeorm_1.Column)({
        name: 'status',
        type: 'enum',
        enum: StatusRegistrasi,
        default: StatusRegistrasi.DRAFT
    }),
    __metadata("design:type", String)
], RegistrasiAkreditasi.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nomor registrasi', nullable: true }),
    (0, typeorm_1.Column)({ name: 'nomor_registrasi', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], RegistrasiAkreditasi.prototype, "nomorRegistrasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Jenis akreditasi (Akreditasi, Reakreditasi)' }),
    (0, typeorm_1.Column)({ name: 'jenis_akreditasi', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], RegistrasiAkreditasi.prototype, "jenisAkreditasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Keterangan', nullable: true }),
    (0, typeorm_1.Column)({ name: 'keterangan', type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegistrasiAkreditasi.prototype, "keterangan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID pengguna yang mendaftarkan', nullable: true }),
    (0, typeorm_1.Column)({ name: 'user_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], RegistrasiAkreditasi.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal verifikasi', nullable: true }),
    (0, typeorm_1.Column)({ name: 'tanggal_verifikasi', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RegistrasiAkreditasi.prototype, "tanggalVerifikasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID verifikator', nullable: true }),
    (0, typeorm_1.Column)({ name: 'verifikator_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], RegistrasiAkreditasi.prototype, "verifikatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Catatan verifikasi', nullable: true }),
    (0, typeorm_1.Column)({ name: 'catatan_verifikasi', type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegistrasiAkreditasi.prototype, "catatanVerifikasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal dibuat' }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], RegistrasiAkreditasi.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal diupdate' }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], RegistrasiAkreditasi.prototype, "updatedAt", void 0);
exports.RegistrasiAkreditasi = RegistrasiAkreditasi = __decorate([
    (0, typeorm_1.Entity)('registrasi_akreditasi')
], RegistrasiAkreditasi);
//# sourceMappingURL=registrasi-akreditasi.entity.js.map