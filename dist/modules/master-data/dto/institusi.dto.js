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
exports.UpdateInstitusiDto = exports.CreateInstitusiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const institusi_entity_1 = require("../entities/institusi.entity");
class CreateInstitusiDto {
}
exports.CreateInstitusiDto = CreateInstitusiDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Kode institusi unik (max 50 karakter)',
        example: 'ITB',
        minLength: 1,
        maxLength: 50
    }),
    (0, class_validator_1.IsString)({ message: 'kodeInstitusi harus berupa string' }),
    (0, class_validator_1.MinLength)(1, { message: 'kodeInstitusi tidak boleh kosong' }),
    (0, class_validator_1.MaxLength)(50, { message: 'kodeInstitusi harus lebih pendek atau sama dengan 50 karakter' }),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "kodeInstitusi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nama lengkap institusi (max 255 karakter)',
        example: 'Institut Teknologi Bandung',
        minLength: 1,
        maxLength: 255
    }),
    (0, class_validator_1.IsString)({ message: 'namaInstitusi harus berupa string' }),
    (0, class_validator_1.MinLength)(1, { message: 'namaInstitusi tidak boleh kosong' }),
    (0, class_validator_1.MaxLength)(255, { message: 'namaInstitusi harus lebih pendek atau sama dengan 255 karakter' }),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "namaInstitusi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nama singkat institusi', example: 'ITB' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "namaSingkat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: institusi_entity_1.JenisPT, default: institusi_entity_1.JenisPT.PTS }),
    (0, class_validator_1.IsEnum)(institusi_entity_1.JenisPT),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "jenisPt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID provinsi' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateInstitusiDto.prototype, "provinsiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alamat lengkap' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "alamat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Kota' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "kota", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Kode pos' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "kodePos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor telepon' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "telepon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor fax' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "fax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email institusi' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Website institusi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nama rektor' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "namaRektor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'SK pendirian' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "skPendirian", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal SK pendirian' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateInstitusiDto.prototype, "tanggalSkPendirian", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: institusi_entity_1.StatusInstitusi, default: institusi_entity_1.StatusInstitusi.AKTIF }),
    (0, class_validator_1.IsEnum)(institusi_entity_1.StatusInstitusi),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInstitusiDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateInstitusiDto.prototype, "isActive", void 0);
class UpdateInstitusiDto extends (0, swagger_1.PartialType)(CreateInstitusiDto) {
}
exports.UpdateInstitusiDto = UpdateInstitusiDto;
//# sourceMappingURL=institusi.dto.js.map