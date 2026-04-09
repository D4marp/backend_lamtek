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
exports.JenjangController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jenjang_service_1 = require("../services/jenjang.service");
const jenjang_dto_1 = require("../dto/jenjang.dto");
const jenjang_entity_1 = require("../entities/jenjang.entity");
let JenjangController = class JenjangController {
    constructor(jenjangService) {
        this.jenjangService = jenjangService;
    }
    async findAll(isActive) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
        };
        return this.jenjangService.findAll(filters);
    }
    async findOne(id) {
        return this.jenjangService.findOne(id);
    }
    async create(createDto) {
        return this.jenjangService.create(createDto);
    }
    async update(id, updateDto) {
        return this.jenjangService.update(id, updateDto);
    }
    async remove(id) {
        return this.jenjangService.remove(id);
    }
    async softDelete(id) {
        return this.jenjangService.softDelete(id);
    }
};
exports.JenjangController = JenjangController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua jenjang' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar jenjang', type: [jenjang_entity_1.Jenjang] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JenjangController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan jenjang berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail jenjang', type: jenjang_entity_1.Jenjang }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Jenjang tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JenjangController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat jenjang baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Jenjang berhasil dibuat', type: jenjang_entity_1.Jenjang }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode jenjang sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jenjang_dto_1.CreateJenjangDto]),
    __metadata("design:returntype", Promise)
], JenjangController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui jenjang' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Jenjang berhasil diperbarui', type: jenjang_entity_1.Jenjang }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Jenjang tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, jenjang_dto_1.UpdateJenjangDto]),
    __metadata("design:returntype", Promise)
], JenjangController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus jenjang' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Jenjang berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Jenjang tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JenjangController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete jenjang' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Jenjang berhasil dinonaktifkan', type: jenjang_entity_1.Jenjang }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JenjangController.prototype, "softDelete", null);
exports.JenjangController = JenjangController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Jenjang'),
    (0, common_1.Controller)('master-data/jenjang'),
    __metadata("design:paramtypes", [jenjang_service_1.JenjangService])
], JenjangController);
//# sourceMappingURL=jenjang.controller.js.map