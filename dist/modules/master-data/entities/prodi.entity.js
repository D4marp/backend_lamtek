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
exports.Prodi = exports.StatusProdi = void 0;
const typeorm_1 = require("typeorm");
var StatusProdi;
(function (StatusProdi) {
    StatusProdi["AKTIF"] = "AKTIF";
    StatusProdi["TIDAK_AKTIF"] = "TIDAK_AKTIF";
    StatusProdi["PEMBINAAN"] = "PEMBINAAN";
})(StatusProdi || (exports.StatusProdi = StatusProdi = {}));
let Prodi = class Prodi {
};
exports.Prodi = Prodi;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Prodi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_prodi', length: 50 }),
    __metadata("design:type", String)
], Prodi.prototype, "kodeProdi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_prodi', length: 255 }),
    __metadata("design:type", String)
], Prodi.prototype, "namaProdi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'institusi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Prodi.prototype, "institusiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenjang_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Prodi.prototype, "jenjangId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'klaster_ilmu_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Prodi.prototype, "klasterIlmuId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'klaster_prodi_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Prodi.prototype, "klasterProdiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sk_pendirian', length: 255, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "skPendirian", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_sk_pendirian', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Prodi.prototype, "tanggalSkPendirian", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sk_operasional', length: 255, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "skOperasional", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_sk_operasional', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Prodi.prototype, "tanggalSkOperasional", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "alamat", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "telepon", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_kaprodi', length: 255, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "namaKaprodi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nidn_kaprodi', length: 50, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "nidnKaprodi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jumlah_mahasiswa', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Prodi.prototype, "jumlahMahasiswa", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jumlah_dosen', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Prodi.prototype, "jumlahDosen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusProdi, default: StatusProdi.AKTIF }),
    __metadata("design:type", String)
], Prodi.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'peringkat_akreditasi_terakhir', length: 50, nullable: true }),
    __metadata("design:type", String)
], Prodi.prototype, "peringkatAkreditasiTerakhir", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_akreditasi_berakhir', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Prodi.prototype, "tanggalAkreditasiBerakhir", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Prodi.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Prodi.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Prodi.prototype, "updatedAt", void 0);
exports.Prodi = Prodi = __decorate([
    (0, typeorm_1.Entity)('prodi'),
    (0, typeorm_1.Index)(['kodeProdi'], { unique: true }),
    (0, typeorm_1.Index)(['institusiId'])
], Prodi);
//# sourceMappingURL=prodi.entity.js.map