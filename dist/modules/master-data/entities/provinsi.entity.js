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
exports.Provinsi = void 0;
const typeorm_1 = require("typeorm");
let Provinsi = class Provinsi {
};
exports.Provinsi = Provinsi;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Provinsi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_provinsi', length: 10 }),
    __metadata("design:type", String)
], Provinsi.prototype, "kodeProvinsi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_provinsi', length: 100 }),
    __metadata("design:type", String)
], Provinsi.prototype, "namaProvinsi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Provinsi.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Provinsi.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Provinsi.prototype, "updatedAt", void 0);
exports.Provinsi = Provinsi = __decorate([
    (0, typeorm_1.Entity)('provinsi'),
    (0, typeorm_1.Index)(['kodeProvinsi'], { unique: true })
], Provinsi);
//# sourceMappingURL=provinsi.entity.js.map