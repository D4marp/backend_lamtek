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
exports.UpdateKomiteEvaluasiDto = exports.CreateKomiteEvaluasiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const komite_evaluasi_entity_1 = require("../entities/komite-evaluasi.entity");
class CreateKomiteEvaluasiDto {
}
exports.CreateKomiteEvaluasiDto = CreateKomiteEvaluasiDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'NIP' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "nip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama lengkap', example: 'Prof. Dr. Jane Doe, M.Sc.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "namaLengkap", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gelar depan' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "gelarDepan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Gelar belakang' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "gelarBelakang", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: komite_evaluasi_entity_1.JabatanKomite, default: komite_evaluasi_entity_1.JabatanKomite.ANGGOTA }),
    (0, class_validator_1.IsEnum)(komite_evaluasi_entity_1.JabatanKomite),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "jabatan", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nomor HP' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "noHp", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Institusi asal' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "institusiAsal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Bidang keahlian' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateKomiteEvaluasiDto.prototype, "bidangKeahlian", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID klaster ilmu' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateKomiteEvaluasiDto.prototype, "klasterIlmuId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal mulai' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateKomiteEvaluasiDto.prototype, "tanggalMulai", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tanggal berakhir' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateKomiteEvaluasiDto.prototype, "tanggalBerakhir", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateKomiteEvaluasiDto.prototype, "isActive", void 0);
class UpdateKomiteEvaluasiDto extends (0, swagger_1.PartialType)(CreateKomiteEvaluasiDto) {
}
exports.UpdateKomiteEvaluasiDto = UpdateKomiteEvaluasiDto;
//# sourceMappingURL=komite-evaluasi.dto.js.map