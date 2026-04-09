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
exports.User = exports.RoleUser = void 0;
const typeorm_1 = require("typeorm");
var RoleUser;
(function (RoleUser) {
    RoleUser["ADMIN"] = "ADMIN";
    RoleUser["SEKRETARIAT"] = "SEKRETARIAT";
    RoleUser["KOMITE_EVALUASI"] = "KOMITE_EVALUASI";
    RoleUser["MAJELIS_AKREDITASI"] = "MAJELIS_AKREDITASI";
    RoleUser["ASESOR"] = "ASESOR";
    RoleUser["PRODI"] = "PRODI";
    RoleUser["UPPS"] = "UPPS";
    RoleUser["VALIDATOR"] = "VALIDATOR";
})(RoleUser || (exports.RoleUser = RoleUser = {}));
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], User.prototype, "nama", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: RoleUser, default: RoleUser.PRODI }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tenant_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "tenantId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prodi_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "prodiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'institusi_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "institusiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asesor_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "asesorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_login', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "lastLogin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'avatar_url', length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatarUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users'),
    (0, typeorm_1.Index)(['email'], { unique: true })
], User);
//# sourceMappingURL=user.entity.js.map