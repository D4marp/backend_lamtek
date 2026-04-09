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
exports.MajelisAkreditasi = exports.JabatanMajelis = void 0;
const typeorm_1 = require("typeorm");
var JabatanMajelis;
(function (JabatanMajelis) {
    JabatanMajelis["KETUA"] = "KETUA";
    JabatanMajelis["WAKIL_KETUA"] = "WAKIL_KETUA";
    JabatanMajelis["SEKRETARIS"] = "SEKRETARIS";
    JabatanMajelis["ANGGOTA"] = "ANGGOTA";
})(JabatanMajelis || (exports.JabatanMajelis = JabatanMajelis = {}));
let MajelisAkreditasi = class MajelisAkreditasi {
};
exports.MajelisAkreditasi = MajelisAkreditasi;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], MajelisAkreditasi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "nip", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_lengkap', length: 255 }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "namaLengkap", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gelar_depan', length: 50, nullable: true }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "gelarDepan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gelar_belakang', length: 100, nullable: true }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "gelarBelakang", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: JabatanMajelis, default: JabatanMajelis.ANGGOTA }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "jabatan", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'no_hp', length: 20, nullable: true }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "noHp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'institusi_asal', length: 255, nullable: true }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "institusiAsal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bidang_keahlian', length: 255, nullable: true }),
    __metadata("design:type", String)
], MajelisAkreditasi.prototype, "bidangKeahlian", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_mulai', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], MajelisAkreditasi.prototype, "tanggalMulai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_berakhir', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], MajelisAkreditasi.prototype, "tanggalBerakhir", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], MajelisAkreditasi.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], MajelisAkreditasi.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], MajelisAkreditasi.prototype, "updatedAt", void 0);
exports.MajelisAkreditasi = MajelisAkreditasi = __decorate([
    (0, typeorm_1.Entity)('majelis_akreditasi'),
    (0, typeorm_1.Index)(['nip'], { unique: true })
], MajelisAkreditasi);
//# sourceMappingURL=majelis-akreditasi.entity.js.map