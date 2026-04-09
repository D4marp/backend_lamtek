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
exports.KriteriaPenilaian = void 0;
const typeorm_1 = require("typeorm");
let KriteriaPenilaian = class KriteriaPenilaian {
};
exports.KriteriaPenilaian = KriteriaPenilaian;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], KriteriaPenilaian.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_kriteria', length: 20 }),
    __metadata("design:type", String)
], KriteriaPenilaian.prototype, "kodeKriteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_kriteria', length: 255 }),
    __metadata("design:type", String)
], KriteriaPenilaian.prototype, "namaKriteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], KriteriaPenilaian.prototype, "deskripsi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], KriteriaPenilaian.prototype, "urutan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], KriteriaPenilaian.prototype, "bobot", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'parent_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], KriteriaPenilaian.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], KriteriaPenilaian.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], KriteriaPenilaian.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], KriteriaPenilaian.prototype, "updatedAt", void 0);
exports.KriteriaPenilaian = KriteriaPenilaian = __decorate([
    (0, typeorm_1.Entity)('kriteria_penilaian'),
    (0, typeorm_1.Index)(['kodeKriteria'], { unique: true })
], KriteriaPenilaian);
//# sourceMappingURL=kriteria-penilaian.entity.js.map