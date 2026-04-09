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
exports.UpdatePenawaranAsesorDto = exports.CreatePenawaranAsesorDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const penawaran_asesor_entity_1 = require("../entities/penawaran-asesor.entity");
class CreatePenawaranAsesorDto {
}
exports.CreatePenawaranAsesorDto = CreatePenawaranAsesorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePenawaranAsesorDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Asesor', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePenawaranAsesorDto.prototype, "asesorId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Jenis Asesmen', example: 'AK' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePenawaranAsesorDto.prototype, "jenisAsesmen", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: penawaran_asesor_entity_1.StatusPenawaran, description: 'Status penawaran' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(penawaran_asesor_entity_1.StatusPenawaran),
    __metadata("design:type", String)
], CreatePenawaranAsesorDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal penawaran', example: '2024-01-15T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePenawaranAsesorDto.prototype, "tanggalPenawaran", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal batas respon', example: '2024-01-22T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePenawaranAsesorDto.prototype, "tanggalBatasRespon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan tambahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePenawaranAsesorDto.prototype, "catatan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user yang menawarkan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePenawaranAsesorDto.prototype, "ditawarkanOleh", void 0);
class UpdatePenawaranAsesorDto extends (0, swagger_1.PartialType)(CreatePenawaranAsesorDto) {
}
exports.UpdatePenawaranAsesorDto = UpdatePenawaranAsesorDto;
//# sourceMappingURL=penawaran-asesor.dto.js.map