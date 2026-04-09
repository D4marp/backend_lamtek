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
exports.Bank = void 0;
const typeorm_1 = require("typeorm");
let Bank = class Bank {
};
exports.Bank = Bank;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Bank.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_bank', length: 20 }),
    __metadata("design:type", String)
], Bank.prototype, "kodeBank", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_bank', length: 100 }),
    __metadata("design:type", String)
], Bank.prototype, "namaBank", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_rekening', length: 255, nullable: true }),
    __metadata("design:type", String)
], Bank.prototype, "namaRekening", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_rekening', length: 50, nullable: true }),
    __metadata("design:type", String)
], Bank.prototype, "nomorRekening", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cabang', length: 100, nullable: true }),
    __metadata("design:type", String)
], Bank.prototype, "cabang", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Bank.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Bank.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Bank.prototype, "updatedAt", void 0);
exports.Bank = Bank = __decorate([
    (0, typeorm_1.Entity)('bank'),
    (0, typeorm_1.Index)(['kodeBank'], { unique: true })
], Bank);
//# sourceMappingURL=bank.entity.js.map