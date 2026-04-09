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
exports.UpdateUppsDto = exports.CreateUppsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUppsDto {
}
exports.CreateUppsDto = CreateUppsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Kode UPPS unik', example: 'UPPS-001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUppsDto.prototype, "kodeUpps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama UPPS', example: 'Fakultas Teknik' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateUppsDto.prototype, "namaUpps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID institusi' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateUppsDto.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nama pimpinan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateUppsDto.prototype, "namaPimpinan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Jabatan pimpinan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateUppsDto.prototype, "jabatanPimpinan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alamat' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateUppsDto.prototype, "alamat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Telepon' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUppsDto.prototype, "telepon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateUppsDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Website' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateUppsDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateUppsDto.prototype, "isActive", void 0);
class UpdateUppsDto extends (0, swagger_1.PartialType)(CreateUppsDto) {
}
exports.UpdateUppsDto = UpdateUppsDto;
//# sourceMappingURL=upps.dto.js.map