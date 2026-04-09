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
exports.UmpanBalikAsesor = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let UmpanBalikAsesor = class UmpanBalikAsesor {
};
exports.UmpanBalikAsesor = UmpanBalikAsesor;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID umpan balik asesor' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UmpanBalikAsesor.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID asesmen lapangan' }),
    (0, typeorm_1.Column)({ name: 'al_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UmpanBalikAsesor.prototype, "alId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID asesor' }),
    (0, typeorm_1.Column)({ name: 'asesor_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], UmpanBalikAsesor.prototype, "asesorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_1', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan1_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_2', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan1_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_3', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan1_3", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_4', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan1_4", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_5_1', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan1_5_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_5_2', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan1_5_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_6_1', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan1_6_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_6_2', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan1_6_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_7', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan1_7", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_8', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan1_8", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_9', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan1_9", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_10', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan1_10", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_11', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan1_11", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '1_12', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan1_12", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_1_1', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan2_1_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_1_2', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan2_1_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_3', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan2_3", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_4', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan2_4", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_5', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan2_5", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_6', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan2_6", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_7', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan2_7", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_8', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan2_8", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_9', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan2_9", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_10_1', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan2_10_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '2_10_2', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan2_10_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '3_1', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan3_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '3_2', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan3_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '3_3', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan3_3", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '3_4', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "pertanyaan3_4", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '3_5_1', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UmpanBalikAsesor.prototype, "pertanyaan3_5_1", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '3_5_2', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan3_5_2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: '3_6', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "pertanyaan3_6", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_fakultas', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "namaFakultas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lokasi_pengisi', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "lokasiPengisi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_pengisi', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "namaPengisi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jabatan_pengisi', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "jabatanPengisi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_pengisian', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], UmpanBalikAsesor.prototype, "tanggalPengisian", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rekomendasi_dewan_pengawas', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "rekomendasiDewanPengawas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'catatan_dewan_pengawas', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UmpanBalikAsesor.prototype, "catatanDewanPengawas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'syarat_ketentuan_disetujui', type: 'boolean', nullable: true }),
    __metadata("design:type", Boolean)
], UmpanBalikAsesor.prototype, "syaratKetentuanDisetujui", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wkt_syarat_ketentuan_disetujui', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], UmpanBalikAsesor.prototype, "wktSyaratKetentuanDisetujui", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal dibuat' }),
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], UmpanBalikAsesor.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal diupdate' }),
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], UmpanBalikAsesor.prototype, "updatedAt", void 0);
exports.UmpanBalikAsesor = UmpanBalikAsesor = __decorate([
    (0, typeorm_1.Entity)('umpan_balik_asesor')
], UmpanBalikAsesor);
//# sourceMappingURL=umpan-balik-asesor.entity.js.map