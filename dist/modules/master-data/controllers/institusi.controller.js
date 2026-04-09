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
exports.InstitusiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const institusi_service_1 = require("../services/institusi.service");
const institusi_dto_1 = require("../dto/institusi.dto");
const institusi_entity_1 = require("../entities/institusi.entity");
let InstitusiController = class InstitusiController {
    constructor(institusiService) {
        this.institusiService = institusiService;
    }
    async findAll(isActive, jenisPt) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            jenisPt,
        };
        return this.institusiService.findAll(filters);
    }
    async findOne(id) {
        return this.institusiService.findOne(id);
    }
    async findByKode(kode) {
        return this.institusiService.findByKode(kode);
    }
    async create(createDto) {
        return this.institusiService.create(createDto);
    }
    async update(id, updateDto) {
        return this.institusiService.update(id, updateDto);
    }
    async remove(id) {
        return this.institusiService.remove(id);
    }
    async softDelete(id) {
        return this.institusiService.softDelete(id);
    }
};
exports.InstitusiController = InstitusiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua institusi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar institusi', type: [institusi_entity_1.Institusi] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'jenisPt', required: false, type: String }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('jenisPt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], InstitusiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan institusi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail institusi', type: institusi_entity_1.Institusi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Institusi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitusiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('kode/:kode'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan institusi berdasarkan kode' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail institusi', type: institusi_entity_1.Institusi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Institusi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('kode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstitusiController.prototype, "findByKode", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat institusi baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Institusi berhasil dibuat', type: institusi_entity_1.Institusi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode institusi sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [institusi_dto_1.CreateInstitusiDto]),
    __metadata("design:returntype", Promise)
], InstitusiController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui institusi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Institusi berhasil diperbarui', type: institusi_entity_1.Institusi }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Institusi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, institusi_dto_1.UpdateInstitusiDto]),
    __metadata("design:returntype", Promise)
], InstitusiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus institusi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Institusi berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Institusi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitusiController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete institusi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Institusi berhasil dinonaktifkan', type: institusi_entity_1.Institusi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstitusiController.prototype, "softDelete", null);
exports.InstitusiController = InstitusiController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Institusi'),
    (0, common_1.Controller)('master-data/institusi'),
    __metadata("design:paramtypes", [institusi_service_1.InstitusiService])
], InstitusiController);
//# sourceMappingURL=institusi.controller.js.map