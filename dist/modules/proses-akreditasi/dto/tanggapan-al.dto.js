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
exports.UpdateTanggapanAlDto = exports.CreateTanggapanAlDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const tanggapan_al_entity_1 = require("../entities/tanggapan-al.entity");
class CreateTanggapanAlDto {
}
exports.CreateTanggapanAlDto = CreateTanggapanAlDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTanggapanAlDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Laporan Asesmen', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTanggapanAlDto.prototype, "laporanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Prodi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTanggapanAlDto.prototype, "prodiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Isi tanggapan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTanggapanAlDto.prototype, "tanggapan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bukti pendukung' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTanggapanAlDto.prototype, "buktiPendukung", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal submit', example: '2024-02-15T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateTanggapanAlDto.prototype, "tanggalSubmit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: tanggapan_al_entity_1.StatusTanggapan, description: 'Status tanggapan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(tanggapan_al_entity_1.StatusTanggapan),
    __metadata("design:type", String)
], CreateTanggapanAlDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL file tanggapan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTanggapanAlDto.prototype, "fileUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'IPFS hash' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTanggapanAlDto.prototype, "ipfsHash", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user yang submit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTanggapanAlDto.prototype, "submittedBy", void 0);
class UpdateTanggapanAlDto extends (0, swagger_1.PartialType)(CreateTanggapanAlDto) {
}
exports.UpdateTanggapanAlDto = UpdateTanggapanAlDto;
//# sourceMappingURL=tanggapan-al.dto.js.map