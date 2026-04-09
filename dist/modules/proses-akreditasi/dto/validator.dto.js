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
exports.UpdateValidatorDto = exports.CreateValidatorDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const validator_entity_1 = require("../entities/validator.entity");
class CreateValidatorDto {
}
exports.CreateValidatorDto = CreateValidatorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Registrasi Prodi Baru', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateValidatorDto.prototype, "registrasiProdiBaru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID User Validator', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateValidatorDto.prototype, "validatorUserId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: validator_entity_1.StatusValidator, description: 'Status validasi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(validator_entity_1.StatusValidator),
    __metadata("design:type", String)
], CreateValidatorDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal penugasan', example: '2024-01-10T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateValidatorDto.prototype, "tanggalPenugasan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal selesai validasi', example: '2024-01-20T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateValidatorDto.prototype, "tanggalSelesai", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hasil validasi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateValidatorDto.prototype, "hasilValidasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rekomendasi validator' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateValidatorDto.prototype, "rekomendasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Apakah valid', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateValidatorDto.prototype, "isValid", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan tambahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateValidatorDto.prototype, "catatan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user yang menugaskan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateValidatorDto.prototype, "ditugaskanOleh", void 0);
class UpdateValidatorDto extends (0, swagger_1.PartialType)(CreateValidatorDto) {
}
exports.UpdateValidatorDto = UpdateValidatorDto;
//# sourceMappingURL=validator.dto.js.map