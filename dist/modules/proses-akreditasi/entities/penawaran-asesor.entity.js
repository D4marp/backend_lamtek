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
exports.PenawaranAsesor = exports.StatusPenawaran = void 0;
const typeorm_1 = require("typeorm");
var StatusPenawaran;
(function (StatusPenawaran) {
    StatusPenawaran["DRAFT"] = "DRAFT";
    StatusPenawaran["DIKIRIM"] = "DIKIRIM";
    StatusPenawaran["DITERIMA"] = "DITERIMA";
    StatusPenawaran["DITOLAK"] = "DITOLAK";
    StatusPenawaran["EXPIRED"] = "EXPIRED";
})(StatusPenawaran || (exports.StatusPenawaran = StatusPenawaran = {}));
let PenawaranAsesor = class PenawaranAsesor {
};
exports.PenawaranAsesor = PenawaranAsesor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PenawaranAsesor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PenawaranAsesor.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asesor_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], PenawaranAsesor.prototype, "asesorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenis_asesmen', length: 50, default: 'AK' }),
    __metadata("design:type", String)
], PenawaranAsesor.prototype, "jenisAsesmen", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusPenawaran, default: StatusPenawaran.DRAFT }),
    __metadata("design:type", String)
], PenawaranAsesor.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_penawaran', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PenawaranAsesor.prototype, "tanggalPenawaran", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_batas_respon', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], PenawaranAsesor.prototype, "tanggalBatasRespon", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'catatan', type: 'text', nullable: true }),
    __metadata("design:type", String)
], PenawaranAsesor.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ditawarkan_oleh', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], PenawaranAsesor.prototype, "ditawarkanOleh", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], PenawaranAsesor.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], PenawaranAsesor.prototype, "updatedAt", void 0);
exports.PenawaranAsesor = PenawaranAsesor = __decorate([
    (0, typeorm_1.Entity)('penawaran_asesor'),
    (0, typeorm_1.Index)(['akreditasiId']),
    (0, typeorm_1.Index)(['asesorId'])
], PenawaranAsesor);
//# sourceMappingURL=penawaran-asesor.entity.js.map