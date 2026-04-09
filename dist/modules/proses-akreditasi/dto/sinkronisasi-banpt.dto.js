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
exports.UpdateSinkronisasiBanptDto = exports.CreateSinkronisasiBanptDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const sinkronisasi_banpt_entity_1 = require("../entities/sinkronisasi-banpt.entity");
class CreateSinkronisasiBanptDto {
}
exports.CreateSinkronisasiBanptDto = CreateSinkronisasiBanptDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSinkronisasiBanptDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID SK Akreditasi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSinkronisasiBanptDto.prototype, "skId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: sinkronisasi_banpt_entity_1.StatusSinkronisasi, description: 'Status sinkronisasi' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(sinkronisasi_banpt_entity_1.StatusSinkronisasi),
    __metadata("design:type", String)
], CreateSinkronisasiBanptDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal sinkronisasi', example: '2024-04-15T10:00:00Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSinkronisasiBanptDto.prototype, "tanggalSinkronisasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Response dari BAN-PT' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSinkronisasiBanptDto.prototype, "responseBanpt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor registrasi BAN-PT' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSinkronisasiBanptDto.prototype, "nomorRegistrasiBanpt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pesan error jika gagal' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSinkronisasiBanptDto.prototype, "errorMessage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Jumlah retry', example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSinkronisasiBanptDto.prototype, "retryCount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID user yang melakukan sync' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSinkronisasiBanptDto.prototype, "syncedBy", void 0);
class UpdateSinkronisasiBanptDto extends (0, swagger_1.PartialType)(CreateSinkronisasiBanptDto) {
}
exports.UpdateSinkronisasiBanptDto = UpdateSinkronisasiBanptDto;
//# sourceMappingURL=sinkronisasi-banpt.dto.js.map