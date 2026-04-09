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
exports.KlasterProfesi = void 0;
const typeorm_1 = require("typeorm");
let KlasterProfesi = class KlasterProfesi {
};
exports.KlasterProfesi = KlasterProfesi;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], KlasterProfesi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_klaster', length: 20 }),
    __metadata("design:type", String)
], KlasterProfesi.prototype, "kodeKlaster", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_klaster', length: 255 }),
    __metadata("design:type", String)
], KlasterProfesi.prototype, "namaKlaster", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], KlasterProfesi.prototype, "deskripsi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], KlasterProfesi.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], KlasterProfesi.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], KlasterProfesi.prototype, "updatedAt", void 0);
exports.KlasterProfesi = KlasterProfesi = __decorate([
    (0, typeorm_1.Entity)('klaster_profesi'),
    (0, typeorm_1.Index)(['kodeKlaster'], { unique: true })
], KlasterProfesi);
//# sourceMappingURL=klaster-profesi.entity.js.map