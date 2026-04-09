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
exports.UpdateUmpanBalikDto = exports.CreateUmpanBalikDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const umpan_balik_entity_1 = require("../entities/umpan-balik.entity");
class CreateUmpanBalikDto {
}
exports.CreateUmpanBalikDto = CreateUmpanBalikDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUmpanBalikDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID user pemberi feedback', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUmpanBalikDto.prototype, "dariUserId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user penerima feedback' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUmpanBalikDto.prototype, "untukUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: umpan_balik_entity_1.JenisFeedback, description: 'Jenis feedback' }),
    (0, class_validator_1.IsEnum)(umpan_balik_entity_1.JenisFeedback),
    __metadata("design:type", String)
], CreateUmpanBalikDto.prototype, "jenisFeedback", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rating keseluruhan (1-5)', example: 4 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUmpanBalikDto.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Komentar feedback' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUmpanBalikDto.prototype, "komentar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nilai aspek profesionalisme (1-5)', example: 4 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUmpanBalikDto.prototype, "aspekProfesionalisme", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nilai aspek komunikasi (1-5)', example: 5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUmpanBalikDto.prototype, "aspekKomunikasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nilai aspek kompetensi (1-5)', example: 4 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUmpanBalikDto.prototype, "aspekKompetensi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Saran perbaikan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUmpanBalikDto.prototype, "saran", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal submit', example: '2024-03-01T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateUmpanBalikDto.prototype, "tanggalSubmit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Apakah anonymous', example: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateUmpanBalikDto.prototype, "isAnonymous", void 0);
class UpdateUmpanBalikDto extends (0, swagger_1.PartialType)(CreateUmpanBalikDto) {
}
exports.UpdateUmpanBalikDto = UpdateUmpanBalikDto;
//# sourceMappingURL=umpan-balik.dto.js.map