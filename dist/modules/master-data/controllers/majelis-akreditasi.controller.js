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
exports.MajelisAkreditasiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const majelis_akreditasi_service_1 = require("../services/majelis-akreditasi.service");
const majelis_akreditasi_dto_1 = require("../dto/majelis-akreditasi.dto");
const majelis_akreditasi_entity_1 = require("../entities/majelis-akreditasi.entity");
let MajelisAkreditasiController = class MajelisAkreditasiController {
    constructor(majelisService) {
        this.majelisService = majelisService;
    }
    async findAll(isActive, jabatan) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            jabatan,
        };
        return this.majelisService.findAll(filters);
    }
    async findOne(id) {
        return this.majelisService.findOne(id);
    }
    async create(createDto) {
        return this.majelisService.create(createDto);
    }
    async update(id, updateDto) {
        return this.majelisService.update(id, updateDto);
    }
    async remove(id) {
        return this.majelisService.remove(id);
    }
    async softDelete(id) {
        return this.majelisService.softDelete(id);
    }
};
exports.MajelisAkreditasiController = MajelisAkreditasiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua majelis akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar majelis akreditasi', type: [majelis_akreditasi_entity_1.MajelisAkreditasi] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'jabatan', required: false, type: String }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('jabatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MajelisAkreditasiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan majelis akreditasi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail majelis akreditasi', type: majelis_akreditasi_entity_1.MajelisAkreditasi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Majelis akreditasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MajelisAkreditasiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat majelis akreditasi baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Majelis akreditasi berhasil dibuat', type: majelis_akreditasi_entity_1.MajelisAkreditasi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'NIP sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [majelis_akreditasi_dto_1.CreateMajelisAkreditasiDto]),
    __metadata("design:returntype", Promise)
], MajelisAkreditasiController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui majelis akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Majelis akreditasi berhasil diperbarui', type: majelis_akreditasi_entity_1.MajelisAkreditasi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Majelis akreditasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, majelis_akreditasi_dto_1.UpdateMajelisAkreditasiDto]),
    __metadata("design:returntype", Promise)
], MajelisAkreditasiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus majelis akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Majelis akreditasi berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Majelis akreditasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MajelisAkreditasiController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete majelis akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Majelis akreditasi berhasil dinonaktifkan', type: majelis_akreditasi_entity_1.MajelisAkreditasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MajelisAkreditasiController.prototype, "softDelete", null);
exports.MajelisAkreditasiController = MajelisAkreditasiController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Majelis Akreditasi'),
    (0, common_1.Controller)('master-data/majelis-akreditasi'),
    __metadata("design:paramtypes", [majelis_akreditasi_service_1.MajelisAkreditasiService])
], MajelisAkreditasiController);
//# sourceMappingURL=majelis-akreditasi.controller.js.map