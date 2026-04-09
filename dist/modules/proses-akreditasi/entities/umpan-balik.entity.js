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
exports.UmpanBalik = exports.JenisFeedback = void 0;
const typeorm_1 = require("typeorm");
var JenisFeedback;
(function (JenisFeedback) {
    JenisFeedback["PRODI_TO_ASESOR"] = "PRODI_TO_ASESOR";
    JenisFeedback["ASESOR_TO_PRODI"] = "ASESOR_TO_PRODI";
    JenisFeedback["PRODI_TO_LAMTEK"] = "PRODI_TO_LAMTEK";
})(JenisFeedback || (exports.JenisFeedback = JenisFeedback = {}));
let UmpanBalik = class UmpanBalik {
};
exports.UmpanBalik = UmpanBalik;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UmpanBalik.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UmpanBalik.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dari_user_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UmpanBalik.prototype, "dariUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'untuk_user_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], UmpanBalik.prototype, "untukUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenis_feedback', type: 'enum', enum: JenisFeedback }),
    __metadata("design:type", String)
], UmpanBalik.prototype, "jenisFeedback", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rating', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], UmpanBalik.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UmpanBalik.prototype, "komentar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aspek_profesionalisme', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UmpanBalik.prototype, "aspekProfesionalisme", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aspek_komunikasi', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UmpanBalik.prototype, "aspekKomunikasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aspek_kompetensi', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UmpanBalik.prototype, "aspekKompetensi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UmpanBalik.prototype, "saran", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_submit', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], UmpanBalik.prototype, "tanggalSubmit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_anonymous', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], UmpanBalik.prototype, "isAnonymous", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], UmpanBalik.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], UmpanBalik.prototype, "updatedAt", void 0);
exports.UmpanBalik = UmpanBalik = __decorate([
    (0, typeorm_1.Entity)('umpan_balik'),
    (0, typeorm_1.Index)(['akreditasiId'])
], UmpanBalik);
//# sourceMappingURL=umpan-balik.entity.js.map