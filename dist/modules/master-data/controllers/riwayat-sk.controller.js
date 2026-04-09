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
exports.RiwayatSkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const riwayat_sk_service_1 = require("../services/riwayat-sk.service");
const riwayat_sk_dto_1 = require("../dto/riwayat-sk.dto");
const riwayat_sk_entity_1 = require("../entities/riwayat-sk.entity");
let RiwayatSkController = class RiwayatSkController {
    constructor(riwayatSkService) {
        this.riwayatSkService = riwayatSkService;
    }
    create(createDto) {
        return this.riwayatSkService.create(createDto);
    }
    findAll(prodiId, institusiId, statusSkId) {
        return this.riwayatSkService.findAll({ prodiId, institusiId, statusSkId });
    }
    findOne(id) {
        return this.riwayatSkService.findOne(id);
    }
    findByProdi(prodiId) {
        return this.riwayatSkService.findByProdi(prodiId);
    }
    findByNoSk(noSk) {
        return this.riwayatSkService.findByNoSk(noSk);
    }
    update(id, updateDto) {
        return this.riwayatSkService.update(id, updateDto);
    }
    remove(id) {
        return this.riwayatSkService.remove(id);
    }
};
exports.RiwayatSkController = RiwayatSkController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buat riwayat SK baru' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Riwayat SK berhasil dibuat', type: riwayat_sk_entity_1.RiwayatSk }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [riwayat_sk_dto_1.CreateRiwayatSkDto]),
    __metadata("design:returntype", Promise)
], RiwayatSkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil semua riwayat SK' }),
    (0, swagger_1.ApiQuery)({ name: 'prodiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'institusiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'statusSkId', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar riwayat SK', type: [riwayat_sk_entity_1.RiwayatSk] }),
    __param(0, (0, common_1.Query)('prodiId')),
    __param(1, (0, common_1.Query)('institusiId')),
    __param(2, (0, common_1.Query)('statusSkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], RiwayatSkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil riwayat SK berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Data riwayat SK', type: riwayat_sk_entity_1.RiwayatSk }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RiwayatSkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('prodi/:prodiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil riwayat SK berdasarkan prodi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar riwayat SK', type: [riwayat_sk_entity_1.RiwayatSk] }),
    __param(0, (0, common_1.Param)('prodiId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RiwayatSkController.prototype, "findByProdi", null);
__decorate([
    (0, common_1.Get)('no-sk/:noSk'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil riwayat SK berdasarkan nomor SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Data riwayat SK', type: riwayat_sk_entity_1.RiwayatSk }),
    __param(0, (0, common_1.Param)('noSk')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RiwayatSkController.prototype, "findByNoSk", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update riwayat SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Riwayat SK berhasil diupdate', type: riwayat_sk_entity_1.RiwayatSk }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, riwayat_sk_dto_1.UpdateRiwayatSkDto]),
    __metadata("design:returntype", Promise)
], RiwayatSkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Hapus riwayat SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Riwayat SK berhasil dihapus' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RiwayatSkController.prototype, "remove", null);
exports.RiwayatSkController = RiwayatSkController = __decorate([
    (0, swagger_1.ApiTags)('Riwayat SK'),
    (0, common_1.Controller)('master-data/riwayat-sk'),
    __metadata("design:paramtypes", [riwayat_sk_service_1.RiwayatSkService])
], RiwayatSkController);
//# sourceMappingURL=riwayat-sk.controller.js.map