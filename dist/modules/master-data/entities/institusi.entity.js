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
exports.Institusi = exports.JenisPT = exports.StatusInstitusi = void 0;
const typeorm_1 = require("typeorm");
var StatusInstitusi;
(function (StatusInstitusi) {
    StatusInstitusi["AKTIF"] = "AKTIF";
    StatusInstitusi["TIDAK_AKTIF"] = "TIDAK_AKTIF";
    StatusInstitusi["MERGER"] = "MERGER";
})(StatusInstitusi || (exports.StatusInstitusi = StatusInstitusi = {}));
var JenisPT;
(function (JenisPT) {
    JenisPT["PTN"] = "PTN";
    JenisPT["PTS"] = "PTS";
    JenisPT["PTN_BH"] = "PTN_BH";
    JenisPT["POLITEKNIK"] = "POLITEKNIK";
})(JenisPT || (exports.JenisPT = JenisPT = {}));
let Institusi = class Institusi {
};
exports.Institusi = Institusi;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Institusi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_institusi', length: 50 }),
    __metadata("design:type", String)
], Institusi.prototype, "kodeInstitusi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_institusi', length: 255 }),
    __metadata("design:type", String)
], Institusi.prototype, "namaInstitusi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_singkat', length: 50, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "namaSingkat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenis_pt', type: 'enum', enum: JenisPT, default: JenisPT.PTS }),
    __metadata("design:type", String)
], Institusi.prototype, "jenisPt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provinsi_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Institusi.prototype, "provinsiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "alamat", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "kota", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_pos', length: 10, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "kodePos", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "telepon", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "fax", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_rektor', length: 255, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "namaRektor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sk_pendirian', length: 255, nullable: true }),
    __metadata("design:type", String)
], Institusi.prototype, "skPendirian", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_sk_pendirian', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Institusi.prototype, "tanggalSkPendirian", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusInstitusi, default: StatusInstitusi.AKTIF }),
    __metadata("design:type", String)
], Institusi.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Institusi.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Institusi.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Institusi.prototype, "updatedAt", void 0);
exports.Institusi = Institusi = __decorate([
    (0, typeorm_1.Entity)('institusi'),
    (0, typeorm_1.Index)(['kodeInstitusi'], { unique: true })
], Institusi);
//# sourceMappingURL=institusi.entity.js.map