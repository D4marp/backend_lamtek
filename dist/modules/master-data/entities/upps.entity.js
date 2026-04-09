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
exports.Upps = void 0;
const typeorm_1 = require("typeorm");
let Upps = class Upps {
};
exports.Upps = Upps;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Upps.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_upps', length: 50 }),
    __metadata("design:type", String)
], Upps.prototype, "kodeUpps", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_upps', length: 255 }),
    __metadata("design:type", String)
], Upps.prototype, "namaUpps", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'institusi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Upps.prototype, "institusiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_pimpinan', length: 255, nullable: true }),
    __metadata("design:type", String)
], Upps.prototype, "namaPimpinan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jabatan_pimpinan', length: 100, nullable: true }),
    __metadata("design:type", String)
], Upps.prototype, "jabatanPimpinan", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Upps.prototype, "alamat", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Upps.prototype, "telepon", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Upps.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Upps.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Upps.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Upps.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Upps.prototype, "updatedAt", void 0);
exports.Upps = Upps = __decorate([
    (0, typeorm_1.Entity)('upps'),
    (0, typeorm_1.Index)(['kodeUpps'], { unique: true }),
    (0, typeorm_1.Index)(['institusiId'])
], Upps);
//# sourceMappingURL=upps.entity.js.map