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
exports.UpdateSkDto = exports.CreateSkDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSkDto {
}
exports.CreateSkDto = CreateSkDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID program studi' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSkDto.prototype, "prodiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID institusi' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSkDto.prototype, "institusiId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID jenjang' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSkDto.prototype, "jenjangId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nomor SK' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSkDto.prototype, "noSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tahun SK' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSkDto.prototype, "tahunSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Jenis SK' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSkDto.prototype, "jenisSk", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Peringkat akreditasi' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSkDto.prototype, "peringkat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal berlaku mulai' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateSkDto.prototype, "berlakuMulai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tanggal berakhir', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateSkDto.prototype, "berakhirPada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Kode PT', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSkDto.prototype, "kodePt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID SP (DIKTI)', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSkDto.prototype, "idSp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Kode PS', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSkDto.prototype, "kodePs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID SMS (DIKTI)', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSkDto.prototype, "idSms", void 0);
class UpdateSkDto extends (0, swagger_1.PartialType)(CreateSkDto) {
}
exports.UpdateSkDto = UpdateSkDto;
//# sourceMappingURL=sk.dto.js.map