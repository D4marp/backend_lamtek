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
exports.TipeInstitusiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const status_institusi_service_1 = require("../services/status-institusi.service");
const status_institusi_dto_1 = require("../dto/status-institusi.dto");
const status_institusi_entity_1 = require("../entities/status-institusi.entity");
let TipeInstitusiController = class TipeInstitusiController {
    constructor(tipeInstitusiService) {
        this.tipeInstitusiService = tipeInstitusiService;
    }
    create(createDto) {
        return this.tipeInstitusiService.create(createDto);
    }
    findAll() {
        return this.tipeInstitusiService.findAll();
    }
    findOne(id) {
        return this.tipeInstitusiService.findOne(id);
    }
    update(id, updateDto) {
        return this.tipeInstitusiService.update(id, updateDto);
    }
    remove(id) {
        return this.tipeInstitusiService.remove(id);
    }
};
exports.TipeInstitusiController = TipeInstitusiController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buat tipe institusi baru' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tipe institusi berhasil dibuat', type: status_institusi_entity_1.TipeInstitusi }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_institusi_dto_1.CreateTipeInstitusiDto]),
    __metadata("design:returntype", Promise)
], TipeInstitusiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil semua tipe institusi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar tipe institusi', type: [status_institusi_entity_1.TipeInstitusi] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipeInstitusiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil tipe institusi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Data tipe institusi', type: status_institusi_entity_1.TipeInstitusi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipeInstitusiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update tipe institusi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipe institusi berhasil diupdate', type: status_institusi_entity_1.TipeInstitusi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, status_institusi_dto_1.UpdateTipeInstitusiDto]),
    __metadata("design:returntype", Promise)
], TipeInstitusiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Hapus tipe institusi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipe institusi berhasil dihapus' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipeInstitusiController.prototype, "remove", null);
exports.TipeInstitusiController = TipeInstitusiController = __decorate([
    (0, swagger_1.ApiTags)('Tipe Institusi'),
    (0, common_1.Controller)('master-data/tipe-institusi'),
    __metadata("design:paramtypes", [status_institusi_service_1.TipeInstitusiService])
], TipeInstitusiController);
//# sourceMappingURL=status-institusi.controller.js.map