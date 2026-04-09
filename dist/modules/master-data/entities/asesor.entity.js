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
exports.Asesor = exports.JenisAsesor = exports.StatusAsesor = void 0;
const typeorm_1 = require("typeorm");
var StatusAsesor;
(function (StatusAsesor) {
    StatusAsesor["AKTIF"] = "AKTIF";
    StatusAsesor["TIDAK_AKTIF"] = "TIDAK_AKTIF";
    StatusAsesor["PENSIUN"] = "PENSIUN";
})(StatusAsesor || (exports.StatusAsesor = StatusAsesor = {}));
var JenisAsesor;
(function (JenisAsesor) {
    JenisAsesor["ASESOR_AK"] = "ASESOR_AK";
    JenisAsesor["ASESOR_AL"] = "ASESOR_AL";
    JenisAsesor["ASESOR_AK_AL"] = "ASESOR_AK_AL";
})(JenisAsesor || (exports.JenisAsesor = JenisAsesor = {}));
let Asesor = class Asesor {
};
exports.Asesor = Asesor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Asesor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Asesor.prototype, "nidn", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_lengkap', length: 255 }),
    __metadata("design:type", String)
], Asesor.prototype, "namaLengkap", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gelar_depan', length: 50, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "gelarDepan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gelar_belakang', length: 100, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "gelarBelakang", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Asesor.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'no_hp', length: 20, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "noHp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'institusi_asal', length: 255, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "institusiAsal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fakultas_asal', length: 255, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "fakultasAsal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prodi_asal', length: 255, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "prodiAsal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jabatan_fungsional', length: 100, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "jabatanFungsional", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pendidikan_terakhir', length: 50, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "pendidikanTerakhir", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bidang_keahlian', length: 255, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "bidangKeahlian", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'klaster_ilmu_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Asesor.prototype, "klasterIlmuId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'klaster_profesi_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Asesor.prototype, "klasterProfesiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'no_sertifikat', length: 100, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "noSertifikat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_sertifikat', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Asesor.prototype, "tanggalSertifikat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'masa_berlaku_sertifikat', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Asesor.prototype, "masaBerlakuSertifikat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenis_asesor', type: 'enum', enum: JenisAsesor, default: JenisAsesor.ASESOR_AK_AL }),
    __metadata("design:type", String)
], Asesor.prototype, "jenisAsesor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusAsesor, default: StatusAsesor.AKTIF }),
    __metadata("design:type", String)
], Asesor.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "alamat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_url', length: 255, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "fotoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cv_url', length: 255, nullable: true }),
    __metadata("design:type", String)
], Asesor.prototype, "cvUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Asesor.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Asesor.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Asesor.prototype, "updatedAt", void 0);
exports.Asesor = Asesor = __decorate([
    (0, typeorm_1.Entity)('asesor'),
    (0, typeorm_1.Index)(['nidn'], { unique: true }),
    (0, typeorm_1.Index)(['email'], { unique: true })
], Asesor);
//# sourceMappingURL=asesor.entity.js.map