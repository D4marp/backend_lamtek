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
exports.UpdateSkAkreditasiDto = exports.CreateSkAkreditasiDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const sk_akreditasi_entity_1 = require("../entities/sk-akreditasi.entity");
class CreateSkAkreditasiDto {
}
exports.CreateSkAkreditasiDto = CreateSkAkreditasiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSkAkreditasiDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Keputusan MA' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSkAkreditasiDto.prototype, "keputusanMaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nomor SK', example: 'SK/LAM-TEKNIK/2024/001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "nomorSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal SK', example: '2024-04-20' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "tanggalSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal berlaku SK', example: '2024-04-20' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "tanggalBerlaku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal berakhir SK', example: '2029-04-20' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "tanggalBerakhir", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Peringkat akreditasi', example: 'Unggul' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "peringkat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nilai akreditasi', example: 365.5 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSkAkreditasiDto.prototype, "nilaiAkreditasi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: sk_akreditasi_entity_1.StatusSk, description: 'Status SK' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(sk_akreditasi_entity_1.StatusSk),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL file SK' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "fileSkUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'IPFS hash file SK' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "ipfsHash", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Blockchain transaction hash' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "blockchainTxHash", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Blockchain block number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSkAkreditasiDto.prototype, "blockchainBlockNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nama penandatangan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "ditandatanganiOleh", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Jabatan penandatangan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "jabatanPenandatangan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan tambahan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSkAkreditasiDto.prototype, "catatan", void 0);
class UpdateSkAkreditasiDto extends (0, swagger_1.PartialType)(CreateSkAkreditasiDto) {
}
exports.UpdateSkAkreditasiDto = UpdateSkAkreditasiDto;
//# sourceMappingURL=sk-akreditasi.dto.js.map