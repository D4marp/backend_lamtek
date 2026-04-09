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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const asesor_service_1 = require("../services/asesor.service");
const asesor_dto_1 = require("../dto/asesor.dto");
const asesor_entity_1 = require("../entities/asesor.entity");
let AsesorController = class AsesorController {
    constructor(asesorService) {
        this.asesorService = asesorService;
    }
    async findAll(isActive, jenisAsesor, status) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            jenisAsesor,
            status,
        };
        return this.asesorService.findAll(filters);
    }
    async findOne(id) {
        return this.asesorService.findOne(id);
    }
    async findByNidn(nidn) {
        return this.asesorService.findByNidn(nidn);
    }
    async create(createDto) {
        return this.asesorService.create(createDto);
    }
    async update(id, updateDto) {
        return this.asesorService.update(id, updateDto);
    }
    async remove(id) {
        return this.asesorService.remove(id);
    }
    async softDelete(id) {
        return this.asesorService.softDelete(id);
    }
};
exports.AsesorController = AsesorController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua asesor' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar asesor', type: [asesor_entity_1.Asesor] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'jenisAsesor', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, type: String }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('jenisAsesor')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AsesorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan asesor berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail asesor', type: asesor_entity_1.Asesor }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Asesor tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsesorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('nidn/:nidn'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan asesor berdasarkan NIDN' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail asesor', type: asesor_entity_1.Asesor }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Asesor tidak ditemukan' }),
    __param(0, (0, common_1.Param)('nidn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AsesorController.prototype, "findByNidn", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat asesor baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Asesor berhasil dibuat', type: asesor_entity_1.Asesor }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'NIDN atau email sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [asesor_dto_1.CreateAsesorDto]),
    __metadata("design:returntype", Promise)
], AsesorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui asesor' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Asesor berhasil diperbarui', type: asesor_entity_1.Asesor }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Asesor tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, asesor_dto_1.UpdateAsesorDto]),
    __metadata("design:returntype", Promise)
], AsesorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus asesor' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Asesor berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Asesor tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsesorController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete asesor' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Asesor berhasil dinonaktifkan', type: asesor_entity_1.Asesor }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsesorController.prototype, "softDelete", null);
exports.AsesorController = AsesorController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Asesor'),
    (0, common_1.Controller)('master-data/asesor'),
    __metadata("design:paramtypes", [asesor_service_1.AsesorService])
], AsesorController);
//# sourceMappingURL=asesor.controller.js.map