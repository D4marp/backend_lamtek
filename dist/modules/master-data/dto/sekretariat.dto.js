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
exports.UpdateSekretariatDto = exports.CreateSekretariatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const sekretariat_entity_1 = require("../entities/sekretariat.entity");
class CreateSekretariatDto {
}
exports.CreateSekretariatDto = CreateSekretariatDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'NIP' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateSekretariatDto.prototype, "nip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama lengkap', example: 'Ahmad Firmansyah' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSekretariatDto.prototype, "namaLengkap", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: sekretariat_entity_1.JabatanSekretariat, default: sekretariat_entity_1.JabatanSekretariat.STAFF }),
    (0, class_validator_1.IsEnum)(sekretariat_entity_1.JabatanSekretariat),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSekretariatDto.prototype, "jabatan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateSekretariatDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor HP' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateSekretariatDto.prototype, "noHp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Divisi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateSekretariatDto.prototype, "divisi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal bergabung' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateSekretariatDto.prototype, "tanggalBergabung", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateSekretariatDto.prototype, "isActive", void 0);
class UpdateSekretariatDto extends (0, swagger_1.PartialType)(CreateSekretariatDto) {
}
exports.UpdateSekretariatDto = UpdateSekretariatDto;
//# sourceMappingURL=sekretariat.dto.js.map