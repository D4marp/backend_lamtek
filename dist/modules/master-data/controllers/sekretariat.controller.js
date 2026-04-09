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
exports.SekretariatController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sekretariat_service_1 = require("../services/sekretariat.service");
const sekretariat_dto_1 = require("../dto/sekretariat.dto");
const sekretariat_entity_1 = require("../entities/sekretariat.entity");
let SekretariatController = class SekretariatController {
    constructor(sekretariatService) {
        this.sekretariatService = sekretariatService;
    }
    async findAll(isActive, jabatan) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
            jabatan,
        };
        return this.sekretariatService.findAll(filters);
    }
    async findOne(id) {
        return this.sekretariatService.findOne(id);
    }
    async create(createDto) {
        return this.sekretariatService.create(createDto);
    }
    async update(id, updateDto) {
        return this.sekretariatService.update(id, updateDto);
    }
    async remove(id) {
        return this.sekretariatService.remove(id);
    }
    async softDelete(id) {
        return this.sekretariatService.softDelete(id);
    }
};
exports.SekretariatController = SekretariatController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua sekretariat' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar sekretariat', type: [sekretariat_entity_1.Sekretariat] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    (0, swagger_1.ApiQuery)({ name: 'jabatan', required: false, type: String }),
    __param(0, (0, common_1.Query)('isActive')),
    __param(1, (0, common_1.Query)('jabatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SekretariatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan sekretariat berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail sekretariat', type: sekretariat_entity_1.Sekretariat }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Sekretariat tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SekretariatController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat sekretariat baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Sekretariat berhasil dibuat', type: sekretariat_entity_1.Sekretariat }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'NIP sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sekretariat_dto_1.CreateSekretariatDto]),
    __metadata("design:returntype", Promise)
], SekretariatController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui sekretariat' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Sekretariat berhasil diperbarui', type: sekretariat_entity_1.Sekretariat }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Sekretariat tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, sekretariat_dto_1.UpdateSekretariatDto]),
    __metadata("design:returntype", Promise)
], SekretariatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus sekretariat' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Sekretariat berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Sekretariat tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SekretariatController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete sekretariat' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Sekretariat berhasil dinonaktifkan', type: sekretariat_entity_1.Sekretariat }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SekretariatController.prototype, "softDelete", null);
exports.SekretariatController = SekretariatController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Sekretariat'),
    (0, common_1.Controller)('master-data/sekretariat'),
    __metadata("design:paramtypes", [sekretariat_service_1.SekretariatService])
], SekretariatController);
//# sourceMappingURL=sekretariat.controller.js.map