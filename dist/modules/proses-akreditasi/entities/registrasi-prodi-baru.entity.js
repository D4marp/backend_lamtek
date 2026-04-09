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
exports.RegistrasiProdiBaru = exports.JenisProdi = exports.StatusRegistrasiProdiBaru = void 0;
const typeorm_1 = require("typeorm");
var StatusRegistrasiProdiBaru;
(function (StatusRegistrasiProdiBaru) {
    StatusRegistrasiProdiBaru["DRAFT"] = "DRAFT";
    StatusRegistrasiProdiBaru["SUBMITTED"] = "SUBMITTED";
    StatusRegistrasiProdiBaru["VALIDASI"] = "VALIDASI";
    StatusRegistrasiProdiBaru["DITERIMA"] = "DITERIMA";
    StatusRegistrasiProdiBaru["DITOLAK"] = "DITOLAK";
})(StatusRegistrasiProdiBaru || (exports.StatusRegistrasiProdiBaru = StatusRegistrasiProdiBaru = {}));
var JenisProdi;
(function (JenisProdi) {
    JenisProdi["REGULER"] = "REGULER";
    JenisProdi["PJJ"] = "PJJ";
    JenisProdi["PTNBH"] = "PTNBH";
    JenisProdi["NON_PTNBH"] = "NON_PTNBH";
})(JenisProdi || (exports.JenisProdi = JenisProdi = {}));
let RegistrasiProdiBaru = class RegistrasiProdiBaru {
};
exports.RegistrasiProdiBaru = RegistrasiProdiBaru;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RegistrasiProdiBaru.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'institusi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RegistrasiProdiBaru.prototype, "institusiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_prodi', length: 255 }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "namaProdi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenjang_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RegistrasiProdiBaru.prototype, "jenjangId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'klaster_ilmu_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], RegistrasiProdiBaru.prototype, "klasterIlmuId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenis_prodi', type: 'enum', enum: JenisProdi, default: JenisProdi.REGULER }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "jenisProdi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusRegistrasiProdiBaru, default: StatusRegistrasiProdiBaru.DRAFT }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_pengajuan', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], RegistrasiProdiBaru.prototype, "tanggalPengajuan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sk_pendirian', length: 255, nullable: true }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "skPendirian", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_sk_pendirian', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], RegistrasiProdiBaru.prototype, "tanggalSkPendirian", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_kaprodi', length: 255, nullable: true }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "namaKaprodi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nidn_kaprodi', length: 50, nullable: true }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "nidnKaprodi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "deskripsi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'file_dokumen_url', length: 255, nullable: true }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "fileDokumenUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'diajukan_oleh', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], RegistrasiProdiBaru.prototype, "diajukanOleh", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], RegistrasiProdiBaru.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], RegistrasiProdiBaru.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], RegistrasiProdiBaru.prototype, "updatedAt", void 0);
exports.RegistrasiProdiBaru = RegistrasiProdiBaru = __decorate([
    (0, typeorm_1.Entity)('registrasi_prodi_baru'),
    (0, typeorm_1.Index)(['institusiId'])
], RegistrasiProdiBaru);
//# sourceMappingURL=registrasi-prodi-baru.entity.js.map