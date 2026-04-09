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
exports.UpdatePengesahanAkDto = exports.CreatePengesahanAkDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const pengesahan_ak_entity_1 = require("../entities/pengesahan-ak.entity");
class CreatePengesahanAkDto {
}
exports.CreatePengesahanAkDto = CreatePengesahanAkDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAkDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Laporan Asesmen' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAkDto.prototype, "laporanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor pengesahan', example: 'SAH/AK/2024/001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePengesahanAkDto.prototype, "nomorPengesahan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal pengesahan', example: '2024-02-20T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePengesahanAkDto.prototype, "tanggalPengesahan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: pengesahan_ak_entity_1.StatusPengesahan, description: 'Status pengesahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(pengesahan_ak_entity_1.StatusPengesahan),
    __metadata("design:type", String)
], CreatePengesahanAkDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nilai AK', example: 350.75 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAkDto.prototype, "nilaiAk", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hasil evaluasi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePengesahanAkDto.prototype, "hasilEvaluasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan tambahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePengesahanAkDto.prototype, "catatan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user yang mengesahkan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAkDto.prototype, "disahkanOleh", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Lanjut ke asesmen lapangan', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePengesahanAkDto.prototype, "lanjutKeAl", void 0);
class UpdatePengesahanAkDto extends (0, swagger_1.PartialType)(CreatePengesahanAkDto) {
}
exports.UpdatePengesahanAkDto = UpdatePengesahanAkDto;
//# sourceMappingURL=pengesahan-ak.dto.js.map