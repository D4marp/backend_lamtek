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
exports.KomiteEvaluasiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const komite_evaluasi_service_1 = require("../services/komite-evaluasi.service");
const komite_evaluasi_dto_1 = require("../dto/komite-evaluasi.dto");
const komite_evaluasi_entity_1 = require("../entities/komite-evaluasi.entity");
let KomiteEvaluasiController = class KomiteEvaluasiController {
    constructor(komiteService) {
        this.komiteService = komiteService;
    }
    async findAll(isActive, jabatan) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            jabatan,
        };
        return this.komiteService.findAll(filters);
    }
    async findOne(id) {
        return this.komiteService.findOne(id);
    }
    async create(createDto) {
        return this.komiteService.create(createDto);
    }
    async update(id, updateDto) {
        return this.komiteService.update(id, updateDto);
    }
    async remove(id) {
        return this.komiteService.remove(id);
    }
    async softDelete(id) {
        return this.komiteService.softDelete(id);
    }
};
exports.KomiteEvaluasiController = KomiteEvaluasiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua komite evaluasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar komite evaluasi', type: [komite_evaluasi_entity_1.KomiteEvaluasi] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'jabatan', required: false, type: String }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('jabatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], KomiteEvaluasiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan komite evaluasi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail komite evaluasi', type: komite_evaluasi_entity_1.KomiteEvaluasi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Komite evaluasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KomiteEvaluasiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat komite evaluasi baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Komite evaluasi berhasil dibuat', type: komite_evaluasi_entity_1.KomiteEvaluasi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'NIP sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [komite_evaluasi_dto_1.CreateKomiteEvaluasiDto]),
    __metadata("design:returntype", Promise)
], KomiteEvaluasiController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui komite evaluasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Komite evaluasi berhasil diperbarui', type: komite_evaluasi_entity_1.KomiteEvaluasi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Komite evaluasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, komite_evaluasi_dto_1.UpdateKomiteEvaluasiDto]),
    __metadata("design:returntype", Promise)
], KomiteEvaluasiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus komite evaluasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Komite evaluasi berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Komite evaluasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KomiteEvaluasiController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete komite evaluasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Komite evaluasi berhasil dinonaktifkan', type: komite_evaluasi_entity_1.KomiteEvaluasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KomiteEvaluasiController.prototype, "softDelete", null);
exports.KomiteEvaluasiController = KomiteEvaluasiController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Komite Evaluasi'),
    (0, common_1.Controller)('master-data/komite-evaluasi'),
    __metadata("design:paramtypes", [komite_evaluasi_service_1.KomiteEvaluasiService])
], KomiteEvaluasiController);
//# sourceMappingURL=komite-evaluasi.controller.js.map