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
exports.KlasterProfesiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const klaster_profesi_service_1 = require("../services/klaster-profesi.service");
const klaster_profesi_dto_1 = require("../dto/klaster-profesi.dto");
const klaster_profesi_entity_1 = require("../entities/klaster-profesi.entity");
let KlasterProfesiController = class KlasterProfesiController {
    constructor(klasterProfesiService) {
        this.klasterProfesiService = klasterProfesiService;
    }
    async findAll(isActive) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
        };
        return this.klasterProfesiService.findAll(filters);
    }
    async findOne(id) {
        return this.klasterProfesiService.findOne(id);
    }
    async create(createDto) {
        return this.klasterProfesiService.create(createDto);
    }
    async update(id, updateDto) {
        return this.klasterProfesiService.update(id, updateDto);
    }
    async remove(id) {
        return this.klasterProfesiService.remove(id);
    }
    async softDelete(id) {
        return this.klasterProfesiService.softDelete(id);
    }
};
exports.KlasterProfesiController = KlasterProfesiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua klaster profesi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar klaster profesi', type: [klaster_profesi_entity_1.KlasterProfesi] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KlasterProfesiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan klaster profesi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail klaster profesi', type: klaster_profesi_entity_1.KlasterProfesi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster profesi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterProfesiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat klaster profesi baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Klaster profesi berhasil dibuat', type: klaster_profesi_entity_1.KlasterProfesi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode klaster sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [klaster_profesi_dto_1.CreateKlasterProfesiDto]),
    __metadata("design:returntype", Promise)
], KlasterProfesiController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui klaster profesi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster profesi berhasil diperbarui', type: klaster_profesi_entity_1.KlasterProfesi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster profesi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, klaster_profesi_dto_1.UpdateKlasterProfesiDto]),
    __metadata("design:returntype", Promise)
], KlasterProfesiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus klaster profesi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster profesi berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster profesi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterProfesiController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete klaster profesi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster profesi berhasil dinonaktifkan', type: klaster_profesi_entity_1.KlasterProfesi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterProfesiController.prototype, "softDelete", null);
exports.KlasterProfesiController = KlasterProfesiController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Klaster Profesi'),
    (0, common_1.Controller)('master-data/klaster-profesi'),
    __metadata("design:paramtypes", [klaster_profesi_service_1.KlasterProfesiService])
], KlasterProfesiController);
//# sourceMappingURL=klaster-profesi.controller.js.map