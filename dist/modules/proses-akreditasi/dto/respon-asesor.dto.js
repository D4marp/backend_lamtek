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
exports.UpdateResponAsesorDto = exports.CreateResponAsesorDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const respon_asesor_entity_1 = require("../entities/respon-asesor.entity");
class CreateResponAsesorDto {
}
exports.CreateResponAsesorDto = CreateResponAsesorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Penawaran', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateResponAsesorDto.prototype, "penawaranId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Asesor', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateResponAsesorDto.prototype, "asesorId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: respon_asesor_entity_1.StatusRespon, description: 'Status respon' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(respon_asesor_entity_1.StatusRespon),
    __metadata("design:type", String)
], CreateResponAsesorDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal respon', example: '2024-01-20T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateResponAsesorDto.prototype, "tanggalRespon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alasan penolakan jika ditolak' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateResponAsesorDto.prototype, "alasanPenolakan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Konfirmasi ketersediaan', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateResponAsesorDto.prototype, "konfirmasiKetersediaan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan tambahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateResponAsesorDto.prototype, "catatan", void 0);
class UpdateResponAsesorDto extends (0, swagger_1.PartialType)(CreateResponAsesorDto) {
}
exports.UpdateResponAsesorDto = UpdateResponAsesorDto;
//# sourceMappingURL=respon-asesor.dto.js.map