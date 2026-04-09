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
exports.ProdiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prodi_service_1 = require("../services/prodi.service");
const prodi_dto_1 = require("../dto/prodi.dto");
const prodi_entity_1 = require("../entities/prodi.entity");
let ProdiController = class ProdiController {
    constructor(prodiService) {
        this.prodiService = prodiService;
    }
    async findAll(isActive, institusiId, jenjangId) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            institusiId: institusiId ? parseInt(institusiId) : undefined,
            jenjangId: jenjangId ? parseInt(jenjangId) : undefined,
        };
        return this.prodiService.findAll(filters);
    }
    async findOne(id) {
        return this.prodiService.findOne(id);
    }
    async findByKode(kode) {
        return this.prodiService.findByKode(kode);
    }
    async create(createDto) {
        return this.prodiService.create(createDto);
    }
    async update(id, updateDto) {
        return this.prodiService.update(id, updateDto);
    }
    async remove(id) {
        return this.prodiService.remove(id);
    }
    async softDelete(id) {
        return this.prodiService.softDelete(id);
    }
};
exports.ProdiController = ProdiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua program studi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar program studi', type: [prodi_entity_1.Prodi] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'institusiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'jenjangId', required: false, type: Number }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('institusiId')),
    __param(2, (0, common_1.Query)('jenjangId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ProdiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan program studi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail program studi', type: prodi_entity_1.Prodi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Program studi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('kode/:kode'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan program studi berdasarkan kode' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail program studi', type: prodi_entity_1.Prodi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Program studi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('kode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdiController.prototype, "findByKode", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat program studi baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Program studi berhasil dibuat', type: prodi_entity_1.Prodi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode program studi sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prodi_dto_1.CreateProdiDto]),
    __metadata("design:returntype", Promise)
], ProdiController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui program studi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Program studi berhasil diperbarui', type: prodi_entity_1.Prodi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Program studi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, prodi_dto_1.UpdateProdiDto]),
    __metadata("design:returntype", Promise)
], ProdiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus program studi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Program studi berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Program studi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdiController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete program studi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Program studi berhasil dinonaktifkan', type: prodi_entity_1.Prodi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdiController.prototype, "softDelete", null);
exports.ProdiController = ProdiController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Program Studi'),
    (0, common_1.Controller)('master-data/prodi'),
    __metadata("design:paramtypes", [prodi_service_1.ProdiService])
], ProdiController);
//# sourceMappingURL=prodi.controller.js.map