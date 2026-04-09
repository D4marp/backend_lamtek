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
exports.KriteriaPenilaianController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const kriteria_penilaian_service_1 = require("../services/kriteria-penilaian.service");
const kriteria_penilaian_dto_1 = require("../dto/kriteria-penilaian.dto");
const kriteria_penilaian_entity_1 = require("../entities/kriteria-penilaian.entity");
let KriteriaPenilaianController = class KriteriaPenilaianController {
    constructor(kriteriaService) {
        this.kriteriaService = kriteriaService;
    }
    async findAll(isActive) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
        };
        return this.kriteriaService.findAll(filters);
    }
    async findOne(id) {
        return this.kriteriaService.findOne(id);
    }
    async create(createDto) {
        return this.kriteriaService.create(createDto);
    }
    async update(id, updateDto) {
        return this.kriteriaService.update(id, updateDto);
    }
    async remove(id) {
        return this.kriteriaService.remove(id);
    }
    async softDelete(id) {
        return this.kriteriaService.softDelete(id);
    }
};
exports.KriteriaPenilaianController = KriteriaPenilaianController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua kriteria penilaian' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar kriteria penilaian', type: [kriteria_penilaian_entity_1.KriteriaPenilaian] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KriteriaPenilaianController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan kriteria penilaian berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail kriteria penilaian', type: kriteria_penilaian_entity_1.KriteriaPenilaian }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Kriteria penilaian tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KriteriaPenilaianController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat kriteria penilaian baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Kriteria penilaian berhasil dibuat', type: kriteria_penilaian_entity_1.KriteriaPenilaian }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode kriteria sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kriteria_penilaian_dto_1.CreateKriteriaPenilaianDto]),
    __metadata("design:returntype", Promise)
], KriteriaPenilaianController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui kriteria penilaian' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Kriteria penilaian berhasil diperbarui', type: kriteria_penilaian_entity_1.KriteriaPenilaian }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Kriteria penilaian tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, kriteria_penilaian_dto_1.UpdateKriteriaPenilaianDto]),
    __metadata("design:returntype", Promise)
], KriteriaPenilaianController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus kriteria penilaian' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Kriteria penilaian berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Kriteria penilaian tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KriteriaPenilaianController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete kriteria penilaian' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Kriteria penilaian berhasil dinonaktifkan', type: kriteria_penilaian_entity_1.KriteriaPenilaian }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KriteriaPenilaianController.prototype, "softDelete", null);
exports.KriteriaPenilaianController = KriteriaPenilaianController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Kriteria Penilaian'),
    (0, common_1.Controller)('master-data/kriteria-penilaian'),
    __metadata("design:paramtypes", [kriteria_penilaian_service_1.KriteriaPenilaianService])
], KriteriaPenilaianController);
//# sourceMappingURL=kriteria-penilaian.controller.js.map