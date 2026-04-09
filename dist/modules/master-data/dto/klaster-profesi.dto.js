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
exports.UpdateKlasterProfesiDto = exports.CreateKlasterProfesiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateKlasterProfesiDto {
}
exports.CreateKlasterProfesiDto = CreateKlasterProfesiDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Kode klaster', example: 'KPF-001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateKlasterProfesiDto.prototype, "kodeKlaster", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nama klaster', example: 'Insinyur Profesional' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateKlasterProfesiDto.prototype, "namaKlaster", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Deskripsi' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateKlasterProfesiDto.prototype, "deskripsi", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateKlasterProfesiDto.prototype, "isActive", void 0);
class UpdateKlasterProfesiDto extends (0, swagger_1.PartialType)(CreateKlasterProfesiDto) {
}
exports.UpdateKlasterProfesiDto = UpdateKlasterProfesiDto;
//# sourceMappingURL=klaster-profesi.dto.js.map