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
exports.SkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sk_service_1 = require("../services/sk.service");
const sk_dto_1 = require("../dto/sk.dto");
const sk_entity_1 = require("../entities/sk.entity");
let SkController = class SkController {
    constructor(skService) {
        this.skService = skService;
    }
    create(createDto) {
        return this.skService.create(createDto);
    }
    findAll(prodiId, institusiId, tahunSk) {
        return this.skService.findAll({ prodiId, institusiId, tahunSk });
    }
    findOne(id) {
        return this.skService.findOne(id);
    }
    findByNoSk(noSk) {
        return this.skService.findByNoSk(noSk);
    }
    findByProdi(prodiId) {
        return this.skService.findByProdi(prodiId);
    }
    findByKodePt(kodePt) {
        return this.skService.findByKodePt(kodePt);
    }
    update(id, updateDto) {
        return this.skService.update(id, updateDto);
    }
    remove(id) {
        return this.skService.remove(id);
    }
};
exports.SkController = SkController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buat SK baru' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'SK berhasil dibuat', type: sk_entity_1.Sk }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sk_dto_1.CreateSkDto]),
    __metadata("design:returntype", Promise)
], SkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil semua SK' }),
    (0, swagger_1.ApiQuery)({ name: 'prodiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'institusiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'tahunSk', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar SK', type: [sk_entity_1.Sk] }),
    __param(0, (0, common_1.Query)('prodiId')),
    __param(1, (0, common_1.Query)('institusiId')),
    __param(2, (0, common_1.Query)('tahunSk')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], SkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil SK berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Data SK', type: sk_entity_1.Sk }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('no-sk/:noSk'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil SK berdasarkan nomor SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Data SK', type: sk_entity_1.Sk }),
    __param(0, (0, common_1.Param)('noSk')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkController.prototype, "findByNoSk", null);
__decorate([
    (0, common_1.Get)('prodi/:prodiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil SK berdasarkan prodi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar SK', type: [sk_entity_1.Sk] }),
    __param(0, (0, common_1.Param)('prodiId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkController.prototype, "findByProdi", null);
__decorate([
    (0, common_1.Get)('kode-pt/:kodePt'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil SK berdasarkan kode PT' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar SK', type: [sk_entity_1.Sk] }),
    __param(0, (0, common_1.Param)('kodePt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkController.prototype, "findByKodePt", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK berhasil diupdate', type: sk_entity_1.Sk }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, sk_dto_1.UpdateSkDto]),
    __metadata("design:returntype", Promise)
], SkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Hapus SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK berhasil dihapus' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkController.prototype, "remove", null);
exports.SkController = SkController = __decorate([
    (0, swagger_1.ApiTags)('SK Akreditasi'),
    (0, common_1.Controller)('master-data/sk'),
    __metadata("design:paramtypes", [sk_service_1.SkService])
], SkController);
//# sourceMappingURL=sk.controller.js.map