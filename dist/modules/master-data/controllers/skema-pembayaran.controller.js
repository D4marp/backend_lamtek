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
exports.SkemaPembayaranController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const skema_pembayaran_service_1 = require("../services/skema-pembayaran.service");
const skema_pembayaran_dto_1 = require("../dto/skema-pembayaran.dto");
const skema_pembayaran_entity_1 = require("../entities/skema-pembayaran.entity");
let SkemaPembayaranController = class SkemaPembayaranController {
    constructor(skemaService) {
        this.skemaService = skemaService;
    }
    async findAll(isActive, tipe) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            tipe,
        };
        return this.skemaService.findAll(filters);
    }
    async findOne(id) {
        return this.skemaService.findOne(id);
    }
    async create(createDto) {
        return this.skemaService.create(createDto);
    }
    async update(id, updateDto) {
        return this.skemaService.update(id, updateDto);
    }
    async remove(id) {
        return this.skemaService.remove(id);
    }
    async softDelete(id) {
        return this.skemaService.softDelete(id);
    }
};
exports.SkemaPembayaranController = SkemaPembayaranController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua skema pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar skema pembayaran', type: [skema_pembayaran_entity_1.SkemaPembayaran] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'tipe', required: false, type: String }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('tipe')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SkemaPembayaranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan skema pembayaran berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail skema pembayaran', type: skema_pembayaran_entity_1.SkemaPembayaran }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Skema pembayaran tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkemaPembayaranController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat skema pembayaran baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Skema pembayaran berhasil dibuat', type: skema_pembayaran_entity_1.SkemaPembayaran }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode skema sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [skema_pembayaran_dto_1.CreateSkemaPembayaranDto]),
    __metadata("design:returntype", Promise)
], SkemaPembayaranController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui skema pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Skema pembayaran berhasil diperbarui', type: skema_pembayaran_entity_1.SkemaPembayaran }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Skema pembayaran tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, skema_pembayaran_dto_1.UpdateSkemaPembayaranDto]),
    __metadata("design:returntype", Promise)
], SkemaPembayaranController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus skema pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Skema pembayaran berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Skema pembayaran tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkemaPembayaranController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete skema pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Skema pembayaran berhasil dinonaktifkan', type: skema_pembayaran_entity_1.SkemaPembayaran }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkemaPembayaranController.prototype, "softDelete", null);
exports.SkemaPembayaranController = SkemaPembayaranController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Skema Pembayaran'),
    (0, common_1.Controller)('master-data/skema-pembayaran'),
    __metadata("design:paramtypes", [skema_pembayaran_service_1.SkemaPembayaranService])
], SkemaPembayaranController);
//# sourceMappingURL=skema-pembayaran.controller.js.map