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
exports.TipeInstitusi = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let TipeInstitusi = class TipeInstitusi {
};
exports.TipeInstitusi = TipeInstitusi;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID tipe institusi' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], TipeInstitusi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama tipe institusi (PTN, PTS, Perusahaan, dll)' }),
    (0, typeorm_1.Column)({ name: 'status_institusi', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TipeInstitusi.prototype, "statusInstitusi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal dibuat' }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], TipeInstitusi.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal diupdate' }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], TipeInstitusi.prototype, "updatedAt", void 0);
exports.TipeInstitusi = TipeInstitusi = __decorate([
    (0, typeorm_1.Entity)('status_institusi')
], TipeInstitusi);
//# sourceMappingURL=status-institusi.entity.js.map