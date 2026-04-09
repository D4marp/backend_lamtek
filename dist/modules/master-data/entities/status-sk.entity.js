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
exports.StatusSk = void 0;
const typeorm_1 = require("typeorm");
let StatusSk = class StatusSk {
};
exports.StatusSk = StatusSk;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], StatusSk.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_status', length: 20 }),
    __metadata("design:type", String)
], StatusSk.prototype, "kodeStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_status', length: 100 }),
    __metadata("design:type", String)
], StatusSk.prototype, "namaStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], StatusSk.prototype, "deskripsi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'warna', length: 20, nullable: true }),
    __metadata("design:type", String)
], StatusSk.prototype, "warna", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], StatusSk.prototype, "urutan", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], StatusSk.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], StatusSk.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], StatusSk.prototype, "updatedAt", void 0);
exports.StatusSk = StatusSk = __decorate([
    (0, typeorm_1.Entity)('status_sk'),
    (0, typeorm_1.Index)(['kodeStatus'], { unique: true })
], StatusSk);
//# sourceMappingURL=status-sk.entity.js.map