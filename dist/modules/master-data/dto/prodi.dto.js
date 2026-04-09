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
exports.UpdateProdiDto = exports.CreateProdiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const prodi_entity_1 = require("../entities/prodi.entity");
class CreateProdiDto {
}
exports.CreateProdiDto = CreateProdiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Kode program studi unik', example: 'IF-001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "kodeProdi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama program studi', example: 'Teknik Informatika' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "namaProdi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID institusi' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProdiDto.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID jenjang' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProdiDto.prototype, "jenjangId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID klaster ilmu' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProdiDto.prototype, "klasterIlmuId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID klaster prodi' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProdiDto.prototype, "klasterProdiId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'SK pendirian' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "skPendirian", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal SK pendirian' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateProdiDto.prototype, "tanggalSkPendirian", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'SK operasional' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "skOperasional", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal SK operasional' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateProdiDto.prototype, "tanggalSkOperasional", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Alamat' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "alamat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Telepon' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "telepon", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Website' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nama Ketua Program Studi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "namaKaprodi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'NIDN Ketua Program Studi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "nidnKaprodi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Jumlah mahasiswa', default: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProdiDto.prototype, "jumlahMahasiswa", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Jumlah dosen', default: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProdiDto.prototype, "jumlahDosen", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: prodi_entity_1.StatusProdi, default: prodi_entity_1.StatusProdi.AKTIF }),
    (0, class_validator_1.IsEnum)(prodi_entity_1.StatusProdi),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Peringkat akreditasi terakhir' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateProdiDto.prototype, "peringkatAkreditasiTerakhir", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal akreditasi berakhir' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateProdiDto.prototype, "tanggalAkreditasiBerakhir", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateProdiDto.prototype, "isActive", void 0);
class UpdateProdiDto extends (0, swagger_1.PartialType)(CreateProdiDto) {
}
exports.UpdateProdiDto = UpdateProdiDto;
//# sourceMappingURL=prodi.dto.js.map