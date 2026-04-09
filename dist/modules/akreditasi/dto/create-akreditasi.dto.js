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
exports.CreateAkreditasiDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const akreditasi_entity_1 = require("../entities/akreditasi.entity");
class CreateAkreditasiDto {
}
exports.CreateAkreditasiDto = CreateAkreditasiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID UPPS' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAkreditasiDto.prototype, "uppsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Program Studi' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAkreditasiDto.prototype, "prodiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Institusi' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAkreditasiDto.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID Jenjang' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAkreditasiDto.prototype, "jenjangId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID Batch' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAkreditasiDto.prototype, "batchId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tahun akreditasi' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateAkreditasiDto.prototype, "tahun", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: akreditasi_entity_1.TipeAkreditasi, description: 'Tipe akreditasi' }),
    (0, class_validator_1.IsEnum)(akreditasi_entity_1.TipeAkreditasi),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAkreditasiDto.prototype, "tipe", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'IPFS hash dokumen registrasi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAkreditasiDto.prototype, "ipfsHashDokumen", void 0);
//# sourceMappingURL=create-akreditasi.dto.js.map