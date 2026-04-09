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
exports.StatusSkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const status_sk_service_1 = require("../services/status-sk.service");
const status_sk_dto_1 = require("../dto/status-sk.dto");
const status_sk_entity_1 = require("../entities/status-sk.entity");
let StatusSkController = class StatusSkController {
    constructor(statusSkService) {
        this.statusSkService = statusSkService;
    }
    async findAll(isActive) {
        const filters = {
            isActive: isActive === 'true' ? true : isActive === 'false' ? false : undefined,
        };
        return this.statusSkService.findAll(filters);
    }
    async findOne(id) {
        return this.statusSkService.findOne(id);
    }
    async create(createDto) {
        return this.statusSkService.create(createDto);
    }
    async update(id, updateDto) {
        return this.statusSkService.update(id, updateDto);
    }
    async remove(id) {
        return this.statusSkService.remove(id);
    }
    async softDelete(id) {
        return this.statusSkService.softDelete(id);
    }
};
exports.StatusSkController = StatusSkController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan semua status SK' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Daftar status SK', type: [status_sk_entity_1.StatusSk] }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    __param(0, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusSkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mendapatkan status SK berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail status SK', type: status_sk_entity_1.StatusSk }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Status SK tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusSkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Membuat status SK baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Status SK berhasil dibuat', type: status_sk_entity_1.StatusSk }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CONFLICT, description: 'Kode status sudah ada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_sk_dto_1.CreateStatusSkDto]),
    __metadata("design:returntype", Promise)
], StatusSkController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Memperbarui status SK' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Status SK berhasil diperbarui', type: status_sk_entity_1.StatusSk }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Status SK tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, status_sk_dto_1.UpdateStatusSkDto]),
    __metadata("design:returntype", Promise)
], StatusSkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghapus status SK' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Status SK berhasil dihapus' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Status SK tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusSkController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/soft-delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft delete status SK' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Status SK berhasil dinonaktifkan', type: status_sk_entity_1.StatusSk }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusSkController.prototype, "softDelete", null);
exports.StatusSkController = StatusSkController = __decorate([
    (0, swagger_1.ApiTags)('Master Data - Status SK'),
    (0, common_1.Controller)('master-data/status-sk'),
    __metadata("design:paramtypes", [status_sk_service_1.StatusSkService])
], StatusSkController);
//# sourceMappingURL=status-sk.controller.js.map