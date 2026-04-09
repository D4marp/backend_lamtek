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
exports.UpdateRegistrasiProdiBaruDto = exports.CreateRegistrasiProdiBaruDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const registrasi_prodi_baru_entity_1 = require("../entities/registrasi-prodi-baru.entity");
class CreateRegistrasiProdiBaruDto {
}
exports.CreateRegistrasiProdiBaruDto = CreateRegistrasiProdiBaruDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Institusi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistrasiProdiBaruDto.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama Program Studi', example: 'Teknik Informatika' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "namaProdi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Jenjang', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistrasiProdiBaruDto.prototype, "jenjangId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Klaster Ilmu' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistrasiProdiBaruDto.prototype, "klasterIlmuId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: registrasi_prodi_baru_entity_1.JenisProdi, description: 'Jenis program studi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(registrasi_prodi_baru_entity_1.JenisProdi),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "jenisProdi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: registrasi_prodi_baru_entity_1.StatusRegistrasiProdiBaru, description: 'Status registrasi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(registrasi_prodi_baru_entity_1.StatusRegistrasiProdiBaru),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal pengajuan', example: '2024-01-05T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "tanggalPengajuan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'SK Pendirian' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "skPendirian", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal SK Pendirian', example: '2024-01-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "tanggalSkPendirian", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nama Kepala Program Studi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "namaKaprodi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'NIDN Kepala Program Studi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "nidnKaprodi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Deskripsi program studi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "deskripsi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL file dokumen' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "fileDokumenUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user yang mengajukan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistrasiProdiBaruDto.prototype, "diajukanOleh", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan tambahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrasiProdiBaruDto.prototype, "catatan", void 0);
class UpdateRegistrasiProdiBaruDto extends (0, swagger_1.PartialType)(CreateRegistrasiProdiBaruDto) {
}
exports.UpdateRegistrasiProdiBaruDto = UpdateRegistrasiProdiBaruDto;
//# sourceMappingURL=registrasi-prodi-baru.dto.js.map