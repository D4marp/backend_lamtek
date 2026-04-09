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
exports.Sk = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Sk = class Sk {
};
exports.Sk = Sk;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID SK' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Sk.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID program studi' }),
    (0, typeorm_1.Column)({ name: 'prodi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Sk.prototype, "prodiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID institusi' }),
    (0, typeorm_1.Column)({ name: 'institusi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Sk.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID jenjang' }),
    (0, typeorm_1.Column)({ name: 'jenjang_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Sk.prototype, "jenjangId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nomor SK' }),
    (0, typeorm_1.Column)({ name: 'no_sk', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Sk.prototype, "noSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tahun SK' }),
    (0, typeorm_1.Column)({ name: 'tahun_sk', type: 'smallint', unsigned: true }),
    __metadata("design:type", Number)
], Sk.prototype, "tahunSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Jenis SK' }),
    (0, typeorm_1.Column)({ name: 'jenis_sk', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Sk.prototype, "jenisSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Peringkat akreditasi' }),
    (0, typeorm_1.Column)({ name: 'peringkat', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Sk.prototype, "peringkat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal berlaku mulai' }),
    (0, typeorm_1.Column)({ name: 'berlaku_mulai', type: 'date' }),
    __metadata("design:type", Date)
], Sk.prototype, "berlakuMulai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal berakhir', nullable: true }),
    (0, typeorm_1.Column)({ name: 'berakhir_pada', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Sk.prototype, "berakhirPada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Kode PT', nullable: true }),
    (0, typeorm_1.Column)({ name: 'kode_pt', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Sk.prototype, "kodePt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID SP (DIKTI)', nullable: true }),
    (0, typeorm_1.Column)({ name: 'id_sp', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Sk.prototype, "idSp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Kode PS', nullable: true }),
    (0, typeorm_1.Column)({ name: 'kode_ps', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Sk.prototype, "kodePs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID SMS (DIKTI)', nullable: true }),
    (0, typeorm_1.Column)({ name: 'id_sms', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Sk.prototype, "idSms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal dibuat' }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Sk.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal diupdate' }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Sk.prototype, "updatedAt", void 0);
exports.Sk = Sk = __decorate([
    (0, typeorm_1.Entity)('sk')
], Sk);
//# sourceMappingURL=sk.entity.js.map