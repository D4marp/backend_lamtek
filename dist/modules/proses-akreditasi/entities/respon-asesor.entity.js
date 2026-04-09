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
exports.ResponAsesor = exports.StatusRespon = void 0;
const typeorm_1 = require("typeorm");
var StatusRespon;
(function (StatusRespon) {
    StatusRespon["PENDING"] = "PENDING";
    StatusRespon["DITERIMA"] = "DITERIMA";
    StatusRespon["DITOLAK"] = "DITOLAK";
})(StatusRespon || (exports.StatusRespon = StatusRespon = {}));
let ResponAsesor = class ResponAsesor {
};
exports.ResponAsesor = ResponAsesor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ResponAsesor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'penawaran_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ResponAsesor.prototype, "penawaranId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asesor_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], ResponAsesor.prototype, "asesorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusRespon, default: StatusRespon.PENDING }),
    __metadata("design:type", String)
], ResponAsesor.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_respon', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], ResponAsesor.prototype, "tanggalRespon", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'alasan_penolakan', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ResponAsesor.prototype, "alasanPenolakan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'konfirmasi_ketersediaan', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], ResponAsesor.prototype, "konfirmasiKetersediaan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'catatan', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ResponAsesor.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ResponAsesor.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ResponAsesor.prototype, "updatedAt", void 0);
exports.ResponAsesor = ResponAsesor = __decorate([
    (0, typeorm_1.Entity)('respon_asesor'),
    (0, typeorm_1.Index)(['penawaranId']),
    (0, typeorm_1.Index)(['asesorId'])
], ResponAsesor);
//# sourceMappingURL=respon-asesor.entity.js.map