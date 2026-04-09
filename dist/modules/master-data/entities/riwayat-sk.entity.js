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
exports.RiwayatSk = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let RiwayatSk = class RiwayatSk {
};
exports.RiwayatSk = RiwayatSk;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID riwayat SK' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RiwayatSk.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID program studi' }),
    (0, typeorm_1.Column)({ name: 'prodi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RiwayatSk.prototype, "prodiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID institusi' }),
    (0, typeorm_1.Column)({ name: 'institusi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RiwayatSk.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID jenjang' }),
    (0, typeorm_1.Column)({ name: 'jenjang_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], RiwayatSk.prototype, "jenjangId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nomor SK' }),
    (0, typeorm_1.Column)({ name: 'no_sk', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], RiwayatSk.prototype, "noSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tahun SK' }),
    (0, typeorm_1.Column)({ name: 'tahun_sk', type: 'smallint', unsigned: true }),
    __metadata("design:type", Number)
], RiwayatSk.prototype, "tahunSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Jenis SK (Akreditasi, Reakreditasi, dll)' }),
    (0, typeorm_1.Column)({ name: 'jenis_sk', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], RiwayatSk.prototype, "jenisSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Peringkat akreditasi (Unggul, Baik Sekali, Baik, dll)' }),
    (0, typeorm_1.Column)({ name: 'peringkat', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], RiwayatSk.prototype, "peringkat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal berlaku mulai' }),
    (0, typeorm_1.Column)({ name: 'berlaku_mulai', type: 'date' }),
    __metadata("design:type", Date)
], RiwayatSk.prototype, "berlakuMulai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal berakhir', nullable: true }),
    (0, typeorm_1.Column)({ name: 'berakhir_pada', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], RiwayatSk.prototype, "berakhirPada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID status SK', nullable: true }),
    (0, typeorm_1.Column)({ name: 'status_sk_id', type: 'tinyint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], RiwayatSk.prototype, "statusSkId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal dibuat' }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], RiwayatSk.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal diupdate' }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], RiwayatSk.prototype, "updatedAt", void 0);
exports.RiwayatSk = RiwayatSk = __decorate([
    (0, typeorm_1.Entity)('riwayat_sk')
], RiwayatSk);
//# sourceMappingURL=riwayat-sk.entity.js.map