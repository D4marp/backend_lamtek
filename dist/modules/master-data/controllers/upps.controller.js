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
exports.UppsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const upps_service_1 = require("../services/upps.service");
const upps_dto_1 = require("../dto/upps.dto");
const upps_entity_1 = require("../entities/upps.entity");
let UppsController = class UppsController {
    constructor(uppsService) {
        this.uppsService = uppsService;
    }
    async findAll(isActive, institusiId) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            institusiId: institusiId ? parseInt(institusiId) : undefined,
        };
        return this.uppsService.findAll(filters);
    }
    async findOne(id) {
        return this.uppsService.findOne(id);
    }
    async create(createDto) {
        return this.uppsService.create(createDto);
    }
    async update(id, updateDto) {
        return this.uppsService.update(id, updateDto);
    }
    async remove(id) {
        return this.uppsService.remove(id);
    }
    async softDelete(id) {
        return this.uppsService.softDelete(id);
    }
};
exports.UppsController = UppsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua UPPS' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar UPPS', type: [upps_entity_1.Upps] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'institusiId', required: false, type: Number }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('institusiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UppsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan UPPS berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail UPPS', type: upps_entity_1.Upps }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'UPPS tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UppsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat UPPS baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'UPPS berhasil dibuat', type: upps_entity_1.Upps }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode UPPS sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upps_dto_1.CreateUppsDto]),
    __metadata("design:returntype", Promise)
], UppsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui UPPS' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'UPPS berhasil diperbarui', type: upps_entity_1.Upps }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'UPPS tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, upps_dto_1.UpdateUppsDto]),
    __metadata("design:returntype", Promise)
], UppsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus UPPS' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'UPPS berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'UPPS tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UppsController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete UPPS' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'UPPS berhasil dinonaktifkan', type: upps_entity_1.Upps }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UppsController.prototype, "softDelete", null);
exports.UppsController = UppsController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - UPPS'),
    (0, common_1.Controller)('master-data/upps'),
    __metadata("design:paramtypes", [upps_service_1.UppsService])
], UppsController);
//# sourceMappingURL=upps.controller.js.map