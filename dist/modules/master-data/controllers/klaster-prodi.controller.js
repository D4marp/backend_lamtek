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
exports.KlasterProdiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const klaster_prodi_service_1 = require("../services/klaster-prodi.service");
const klaster_prodi_dto_1 = require("../dto/klaster-prodi.dto");
const klaster_prodi_entity_1 = require("../entities/klaster-prodi.entity");
let KlasterProdiController = class KlasterProdiController {
    constructor(klasterProdiService) {
        this.klasterProdiService = klasterProdiService;
    }
    async findAll(isActive, klasterIlmuId) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            klasterIlmuId: klasterIlmuId ? parseInt(klasterIlmuId) : undefined,
        };
        return this.klasterProdiService.findAll(filters);
    }
    async findOne(id) {
        return this.klasterProdiService.findOne(id);
    }
    async create(createDto) {
        return this.klasterProdiService.create(createDto);
    }
    async update(id, updateDto) {
        return this.klasterProdiService.update(id, updateDto);
    }
    async remove(id) {
        return this.klasterProdiService.remove(id);
    }
    async softDelete(id) {
        return this.klasterProdiService.softDelete(id);
    }
};
exports.KlasterProdiController = KlasterProdiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua klaster prodi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar klaster prodi', type: [klaster_prodi_entity_1.KlasterProdi] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'klasterIlmuId', required: false, type: Number }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('klasterIlmuId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], KlasterProdiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan klaster prodi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail klaster prodi', type: klaster_prodi_entity_1.KlasterProdi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster prodi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterProdiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat klaster prodi baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Klaster prodi berhasil dibuat', type: klaster_prodi_entity_1.KlasterProdi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode klaster sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [klaster_prodi_dto_1.CreateKlasterProdiDto]),
    __metadata("design:returntype", Promise)
], KlasterProdiController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui klaster prodi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster prodi berhasil diperbarui', type: klaster_prodi_entity_1.KlasterProdi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster prodi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, klaster_prodi_dto_1.UpdateKlasterProdiDto]),
    __metadata("design:returntype", Promise)
], KlasterProdiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus klaster prodi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster prodi berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Klaster prodi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterProdiController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete klaster prodi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Klaster prodi berhasil dinonaktifkan', type: klaster_prodi_entity_1.KlasterProdi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KlasterProdiController.prototype, "softDelete", null);
exports.KlasterProdiController = KlasterProdiController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Klaster Prodi'),
    (0, common_1.Controller)('master-data/klaster-prodi'),
    __metadata("design:paramtypes", [klaster_prodi_service_1.KlasterProdiService])
], KlasterProdiController);
//# sourceMappingURL=klaster-prodi.controller.js.map