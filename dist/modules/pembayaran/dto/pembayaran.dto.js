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
exports.UpdatePembayaranDto = exports.CreatePembayaranDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const pembayaran_entity_1 = require("../entities/pembayaran.entity");
class CreatePembayaranDto {
}
exports.CreatePembayaranDto = CreatePembayaranDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Akreditasi', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePembayaranDto.prototype, "akreditasiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Skema Pembayaran' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePembayaranDto.prototype, "skemaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nomor invoice', example: 'INV/2024/001' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePembayaranDto.prototype, "nomorInvoice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal invoice', example: '2024-01-15' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePembayaranDto.prototype, "tanggalInvoice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal jatuh tempo', example: '2024-02-15' }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreatePembayaranDto.prototype, "tanggalJatuhTempo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Jumlah tagihan', example: 5000000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePembayaranDto.prototype, "jumlahTagihan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Jumlah dibayar', example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePembayaranDto.prototype, "jumlahDibayar", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: pembayaran_entity_1.StatusPembayaran, description: 'Status pembayaran' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(pembayaran_entity_1.StatusPembayaran),
    __metadata("design:type", String)
], CreatePembayaranDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: pembayaran_entity_1.MetodePembayaran, description: 'Metode pembayaran' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(pembayaran_entity_1.MetodePembayaran),
    __metadata("design:type", String)
], CreatePembayaranDto.prototype, "metodePembayaran", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Bank' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePembayaranDto.prototype, "bankId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor rekening tujuan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePembayaranDto.prototype, "nomorRekeningTujuan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Catatan' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePembayaranDto.prototype, "catatan", void 0);
class UpdatePembayaranDto extends (0, swagger_1.PartialType)(CreatePembayaranDto) {
}
exports.UpdatePembayaranDto = UpdatePembayaranDto;
//# sourceMappingURL=pembayaran.dto.js.map