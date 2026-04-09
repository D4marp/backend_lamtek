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
exports.UpdateRegistrasiAkreditasiDto = exports.CreateRegistrasiAkreditasiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const registrasi_akreditasi_entity_1 = require("../entities/registrasi-akreditasi.entity");
class CreateRegistrasiAkreditasiDto {
}
exports.CreateRegistrasiAkreditasiDto = CreateRegistrasiAkreditasiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID program studi' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistrasiAkreditasiDto.prototype, "prodiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID institusi' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistrasiAkreditasiDto.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tahun akademik' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateRegistrasiAkreditasiDto.prototype, "tahunAkademik", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal registrasi' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateRegistrasiAkreditasiDto.prototype, "tanggalRegistrasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status registrasi', enum: registrasi_akreditasi_entity_1.StatusRegistrasi, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(registrasi_akreditasi_entity_1.StatusRegistrasi),
    __metadata("design:type", String)
], CreateRegistrasiAkreditasiDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nomor registrasi', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateRegistrasiAkreditasiDto.prototype, "nomorRegistrasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Jenis akreditasi (Akreditasi, Reakreditasi)' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateRegistrasiAkreditasiDto.prototype, "jenisAkreditasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Keterangan', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistrasiAkreditasiDto.prototype, "keterangan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID pengguna yang mendaftarkan', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistrasiAkreditasiDto.prototype, "userId", void 0);
class UpdateRegistrasiAkreditasiDto extends (0, swagger_1.PartialType)(CreateRegistrasiAkreditasiDto) {
}
exports.UpdateRegistrasiAkreditasiDto = UpdateRegistrasiAkreditasiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal verifikasi', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], UpdateRegistrasiAkreditasiDto.prototype, "tanggalVerifikasi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID verifikator', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateRegistrasiAkreditasiDto.prototype, "verifikatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Catatan verifikasi', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateRegistrasiAkreditasiDto.prototype, "catatanVerifikasi", void 0);
//# sourceMappingURL=registrasi-akreditasi.dto.js.map