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
exports.Jenjang = void 0;
const typeorm_1 = require("typeorm");
let Jenjang = class Jenjang {
};
exports.Jenjang = Jenjang;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Jenjang.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_jenjang', length: 10 }),
    __metadata("design:type", String)
], Jenjang.prototype, "kodeJenjang", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_jenjang', length: 50 }),
    __metadata("design:type", String)
], Jenjang.prototype, "namaJenjang", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Jenjang.prototype, "deskripsi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Jenjang.prototype, "urutan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Jenjang.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Jenjang.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Jenjang.prototype, "updatedAt", void 0);
exports.Jenjang = Jenjang = __decorate([
    (0, typeorm_1.Entity)('jenjang'),
    (0, typeorm_1.Index)(['kodeJenjang'], { unique: true })
], Jenjang);
//# sourceMappingURL=jenjang.entity.js.map