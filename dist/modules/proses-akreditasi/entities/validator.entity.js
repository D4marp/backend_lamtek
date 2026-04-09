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
exports.Validator = exports.StatusValidator = void 0;
const typeorm_1 = require("typeorm");
var StatusValidator;
(function (StatusValidator) {
    StatusValidator["PENDING"] = "PENDING";
    StatusValidator["ASSIGNED"] = "ASSIGNED";
    StatusValidator["IN_PROGRESS"] = "IN_PROGRESS";
    StatusValidator["COMPLETED"] = "COMPLETED";
})(StatusValidator || (exports.StatusValidator = StatusValidator = {}));
let Validator = class Validator {
};
exports.Validator = Validator;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Validator.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registrasi_prodi_baru_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Validator.prototype, "registrasiProdiBaru", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'validator_user_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Validator.prototype, "validatorUserId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusValidator, default: StatusValidator.PENDING }),
    __metadata("design:type", String)
], Validator.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_penugasan', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Validator.prototype, "tanggalPenugasan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_selesai', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Validator.prototype, "tanggalSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hasil_validasi', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Validator.prototype, "hasilValidasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Validator.prototype, "rekomendasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_valid', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], Validator.prototype, "isValid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Validator.prototype, "catatan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ditugaskan_oleh', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Validator.prototype, "ditugaskanOleh", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Validator.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Validator.prototype, "updatedAt", void 0);
exports.Validator = Validator = __decorate([
    (0, typeorm_1.Entity)('validator'),
    (0, typeorm_1.Index)(['registrasiProdiBaru']),
    (0, typeorm_1.Index)(['validatorUserId'])
], Validator);
//# sourceMappingURL=validator.entity.js.map