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
exports.UpdateLaporanAsesmenDto = exports.CreateLaporanAsesmenDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const laporan_asesmen_entity_1 = require("../entities/laporan-asesmen.entity");
class CreateLaporanAsesmenDto {
}
exports.CreateLaporanAsesmenDto = CreateLaporanAsesmenDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLaporanAsesmenDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Asesor', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLaporanAsesmenDto.prototype, "asesorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: laporan_asesmen_entity_1.JenisLaporan, description: 'Jenis laporan' }),
    (0, class_validator_1.IsEnum)(laporan_asesmen_entity_1.JenisLaporan),
    __metadata("design:type", String)
], CreateLaporanAsesmenDto.prototype, "jenisLaporan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor laporan', example: 'LAP/AK/2024/001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLaporanAsesmenDto.prototype, "nomorLaporan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal laporan', example: '2024-02-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateLaporanAsesmenDto.prototype, "tanggalLaporan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Ringkasan laporan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLaporanAsesmenDto.prototype, "ringkasan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rekomendasi dari asesor' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLaporanAsesmenDto.prototype, "rekomendasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nilai total', example: 85.5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateLaporanAsesmenDto.prototype, "nilaiTotal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: laporan_asesmen_entity_1.StatusLaporan, description: 'Status laporan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(laporan_asesmen_entity_1.StatusLaporan),
    __metadata("design:type", String)
], CreateLaporanAsesmenDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL file laporan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLaporanAsesmenDto.prototype, "fileUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'IPFS hash untuk file' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateLaporanAsesmenDto.prototype, "ipfsHash", void 0);
class UpdateLaporanAsesmenDto extends (0, swagger_1.PartialType)(CreateLaporanAsesmenDto) {
}
exports.UpdateLaporanAsesmenDto = UpdateLaporanAsesmenDto;
//# sourceMappingURL=laporan-asesmen.dto.js.map