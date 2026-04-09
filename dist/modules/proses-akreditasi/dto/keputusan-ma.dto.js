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
exports.UpdateKeputusanMaDto = exports.CreateKeputusanMaDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const keputusan_ma_entity_1 = require("../entities/keputusan-ma.entity");
class CreateKeputusanMaDto {
}
exports.CreateKeputusanMaDto = CreateKeputusanMaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateKeputusanMaDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Pengesahan AL' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateKeputusanMaDto.prototype, "pengesahanAlId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor sidang', example: 'MA/SIDANG/2024/001' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKeputusanMaDto.prototype, "nomorSidang", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal sidang', example: '2024-04-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateKeputusanMaDto.prototype, "tanggalSidang", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: keputusan_ma_entity_1.StatusKeputusan, description: 'Status keputusan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(keputusan_ma_entity_1.StatusKeputusan),
    __metadata("design:type", String)
], CreateKeputusanMaDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Peringkat final', example: 'Unggul' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKeputusanMaDto.prototype, "peringkatFinal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nilai final', example: 365.5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateKeputusanMaDto.prototype, "nilaiFinal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Masa berlaku (tahun)', example: 5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateKeputusanMaDto.prototype, "masaBerlaku", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hasil keputusan sidang' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKeputusanMaDto.prototype, "hasilKeputusan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Rekomendasi MA' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKeputusanMaDto.prototype, "rekomendasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan tambahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKeputusanMaDto.prototype, "catatan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user yang memutuskan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateKeputusanMaDto.prototype, "diputuskanOleh", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notulen sidang' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateKeputusanMaDto.prototype, "notulenSidang", void 0);
class UpdateKeputusanMaDto extends (0, swagger_1.PartialType)(CreateKeputusanMaDto) {
}
exports.UpdateKeputusanMaDto = UpdateKeputusanMaDto;
//# sourceMappingURL=keputusan-ma.dto.js.map