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
exports.UpdateAsesorDto = exports.CreateAsesorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const asesor_entity_1 = require("../entities/asesor.entity");
class CreateAsesorDto {
}
exports.CreateAsesorDto = CreateAsesorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'NIDN asesor', example: '0123456789' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "nidn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama lengkap asesor', example: 'Dr. John Doe, M.T.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "namaLengkap", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gelar depan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "gelarDepan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gelar belakang' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "gelarBelakang", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email asesor' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor HP' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "noHp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Institusi asal' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "institusiAsal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fakultas asal' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "fakultasAsal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Prodi asal' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "prodiAsal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Jabatan fungsional' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "jabatanFungsional", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Pendidikan terakhir' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "pendidikanTerakhir", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bidang keahlian' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "bidangKeahlian", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID klaster ilmu' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAsesorDto.prototype, "klasterIlmuId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID klaster profesi' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAsesorDto.prototype, "klasterProfesiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor sertifikat' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "noSertifikat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal sertifikat' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateAsesorDto.prototype, "tanggalSertifikat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Masa berlaku sertifikat' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateAsesorDto.prototype, "masaBerlakuSertifikat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: asesor_entity_1.JenisAsesor, default: asesor_entity_1.JenisAsesor.ASESOR_AK_AL }),
    (0, class_validator_1.IsEnum)(asesor_entity_1.JenisAsesor),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "jenisAsesor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: asesor_entity_1.StatusAsesor, default: asesor_entity_1.StatusAsesor.AKTIF }),
    (0, class_validator_1.IsEnum)(asesor_entity_1.StatusAsesor),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alamat lengkap' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "alamat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL foto' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "fotoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL CV' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAsesorDto.prototype, "cvUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateAsesorDto.prototype, "isActive", void 0);
class UpdateAsesorDto extends (0, swagger_1.PartialType)(CreateAsesorDto) {
}
exports.UpdateAsesorDto = UpdateAsesorDto;
//# sourceMappingURL=asesor.dto.js.map