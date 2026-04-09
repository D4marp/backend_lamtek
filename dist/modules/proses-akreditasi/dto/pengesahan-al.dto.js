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
exports.UpdatePengesahanAlDto = exports.CreatePengesahanAlDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const pengesahan_al_entity_1 = require("../entities/pengesahan-al.entity");
class CreatePengesahanAlDto {
}
exports.CreatePengesahanAlDto = CreatePengesahanAlDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAlDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Laporan Asesmen AL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAlDto.prototype, "laporanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Tanggapan AL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAlDto.prototype, "tanggapanId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor pengesahan', example: 'SAH/AL/2024/001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePengesahanAlDto.prototype, "nomorPengesahan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal pengesahan', example: '2024-03-15T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePengesahanAlDto.prototype, "tanggalPengesahan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: pengesahan_al_entity_1.StatusPengesahanAl, description: 'Status pengesahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(pengesahan_al_entity_1.StatusPengesahanAl),
    __metadata("design:type", String)
], CreatePengesahanAlDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nilai AL', example: 88.5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAlDto.prototype, "nilaiAl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nilai final gabungan', example: 86.25 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAlDto.prototype, "nilaiFinal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hasil evaluasi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePengesahanAlDto.prototype, "hasilEvaluasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan tambahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePengesahanAlDto.prototype, "catatan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rekomendasi peringkat', example: 'Unggul' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePengesahanAlDto.prototype, "rekomendasiPeringkat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user yang mengesahkan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePengesahanAlDto.prototype, "disahkanOleh", void 0);
class UpdatePengesahanAlDto extends (0, swagger_1.PartialType)(CreatePengesahanAlDto) {
}
exports.UpdatePengesahanAlDto = UpdatePengesahanAlDto;
//# sourceMappingURL=pengesahan-al.dto.js.map