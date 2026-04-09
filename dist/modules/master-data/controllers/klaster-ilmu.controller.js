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
exports.KlasterIlmuController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const klaster_ilmu_service_1 = require("../services/klaster-ilmu.service");
const klaster_ilmu_dto_1 = require("../dto/klaster-ilmu.dto");
const klaster_ilmu_entity_1 = require("../entities/klaster-ilmu.entity");
let KlasterIlmuController = class KlasterIlmuController {
    constructor(klasterIlmuService) {
        this.klasterIlmuService = klasterIlmuService;
    }
    async findAll(isActive) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
        };
        return this.klasterIlmuService.findAll(filters);
    }
    async findOne(id) {
        return this.klasterIlmuService.findOne(id);
    }
    async create(createDto) {
        return this.klasterIlmuService.create(createDto);
    }
    async update(id, updateDto) {
        return this.klasterIlmuService.update(id, updateDto);
    }
    async remove(id) {
        return this.klasterIlmuService.remove(id);
    }
    async softDelete(id) {
        return this.klasterIlmuService.softDelete(id);
    }
};
exports.KlasterIlmuController = KlasterIlmuController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua klaster ilmu' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar klaster ilmu', type: [klaster_ilmu_entity_1.KlasterIlmu] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KlasterIlmuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan klaster ilmu berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail klaster ilmu', type: klaster_ilmu_entity_1.KlasterIlmu }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster ilmu tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterIlmuController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat klaster ilmu baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Klaster ilmu berhasil dibuat', type: klaster_ilmu_entity_1.KlasterIlmu }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode klaster sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [klaster_ilmu_dto_1.CreateKlasterIlmuDto]),
    __metadata("design:returntype", Promise)
], KlasterIlmuController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui klaster ilmu' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster ilmu berhasil diperbarui', type: klaster_ilmu_entity_1.KlasterIlmu }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster ilmu tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, klaster_ilmu_dto_1.UpdateKlasterIlmuDto]),
    __metadata("design:returntype", Promise)
], KlasterIlmuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus klaster ilmu' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster ilmu berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster ilmu tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterIlmuController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete klaster ilmu' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster ilmu berhasil dinonaktifkan', type: klaster_ilmu_entity_1.KlasterIlmu }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterIlmuController.prototype, "softDelete", null);
exports.KlasterIlmuController = KlasterIlmuController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Klaster Ilmu'),
    (0, common_1.Controller)('master-data/klaster-ilmu'),
    __metadata("design:paramtypes", [klaster_ilmu_service_1.KlasterIlmuService])
], KlasterIlmuController);
//# sourceMappingURL=klaster-ilmu.controller.js.map