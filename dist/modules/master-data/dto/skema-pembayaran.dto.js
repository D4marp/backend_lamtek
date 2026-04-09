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
exports.UpdateSkemaPembayaranDto = exports.CreateSkemaPembayaranDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const skema_pembayaran_entity_1 = require("../entities/skema-pembayaran.entity");
class CreateSkemaPembayaranDto {
}
exports.CreateSkemaPembayaranDto = CreateSkemaPembayaranDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Kode skema', example: 'SKM-001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateSkemaPembayaranDto.prototype, "kodeSkema", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama skema', example: 'Skema S1 Reguler' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSkemaPembayaranDto.prototype, "namaSkema", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: skema_pembayaran_entity_1.TipeSkema, default: skema_pembayaran_entity_1.TipeSkema.REGULER }),
    (0, class_validator_1.IsEnum)(skema_pembayaran_entity_1.TipeSkema),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSkemaPembayaranDto.prototype, "tipe", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID jenjang' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateSkemaPembayaranDto.prototype, "jenjangId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Biaya pendaftaran', default: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateSkemaPembayaranDto.prototype, "biayaPendaftaran", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Biaya asesmen kecukupan', default: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateSkemaPembayaranDto.prototype, "biayaAsesmenKecukupan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Biaya asesmen lapangan', default: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateSkemaPembayaranDto.prototype, "biayaAsesmenLapangan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Biaya SK', default: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateSkemaPembayaranDto.prototype, "biayaSk", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Total biaya', default: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateSkemaPembayaranDto.prototype, "totalBiaya", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Keterangan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSkemaPembayaranDto.prototype, "keterangan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal berlaku mulai' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateSkemaPembayaranDto.prototype, "berlakuMulai", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal berlaku sampai' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateSkemaPembayaranDto.prototype, "berlakuSampai", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateSkemaPembayaranDto.prototype, "isActive", void 0);
class UpdateSkemaPembayaranDto extends (0, swagger_1.PartialType)(CreateSkemaPembayaranDto) {
}
exports.UpdateSkemaPembayaranDto = UpdateSkemaPembayaranDto;
//# sourceMappingURL=skema-pembayaran.dto.js.map