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
exports.ProvinsiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const provinsi_service_1 = require("../services/provinsi.service");
const provinsi_dto_1 = require("../dto/provinsi.dto");
const provinsi_entity_1 = require("../entities/provinsi.entity");
let ProvinsiController = class ProvinsiController {
    constructor(provinsiService) {
        this.provinsiService = provinsiService;
    }
    async findAll(isActive) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
        };
        return this.provinsiService.findAll(filters);
    }
    async findOne(id) {
        return this.provinsiService.findOne(id);
    }
    async create(createDto) {
        return this.provinsiService.create(createDto);
    }
    async update(id, updateDto) {
        return this.provinsiService.update(id, updateDto);
    }
    async remove(id) {
        return this.provinsiService.remove(id);
    }
    async softDelete(id) {
        return this.provinsiService.softDelete(id);
    }
};
exports.ProvinsiController = ProvinsiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua provinsi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar provinsi', type: [provinsi_entity_1.Provinsi] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan provinsi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail provinsi', type: provinsi_entity_1.Provinsi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Provinsi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat provinsi baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Provinsi berhasil dibuat', type: provinsi_entity_1.Provinsi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode provinsi sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provinsi_dto_1.CreateProvinsiDto]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui provinsi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Provinsi berhasil diperbarui', type: provinsi_entity_1.Provinsi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Provinsi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, provinsi_dto_1.UpdateProvinsiDto]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus provinsi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Provinsi berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Provinsi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete provinsi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Provinsi berhasil dinonaktifkan', type: provinsi_entity_1.Provinsi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProvinsiController.prototype, "softDelete", null);
exports.ProvinsiController = ProvinsiController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Provinsi'),
    (0, common_1.Controller)('master-data/provinsi'),
    __metadata("design:paramtypes", [provinsi_service_1.ProvinsiService])
], ProvinsiController);
//# sourceMappingURL=provinsi.controller.js.map