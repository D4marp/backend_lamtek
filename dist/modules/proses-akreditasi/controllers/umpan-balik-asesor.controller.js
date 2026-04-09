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
exports.UmpanBalikAsesorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const umpan_balik_asesor_service_1 = require("../services/umpan-balik-asesor.service");
const umpan_balik_asesor_dto_1 = require("../dto/umpan-balik-asesor.dto");
const umpan_balik_asesor_entity_1 = require("../entities/umpan-balik-asesor.entity");
let UmpanBalikAsesorController = class UmpanBalikAsesorController {
    constructor(umpanBalikAsesorService) {
        this.umpanBalikAsesorService = umpanBalikAsesorService;
    }
    create(createDto) {
        return this.umpanBalikAsesorService.create(createDto);
    }
    findAll(alId, asesorId) {
        return this.umpanBalikAsesorService.findAll({ alId, asesorId });
    }
    findOne(id) {
        return this.umpanBalikAsesorService.findOne(id);
    }
    findByAsesmenLapangan(alId) {
        return this.umpanBalikAsesorService.findByAsesmenLapangan(alId);
    }
    findByAsesor(asesorId) {
        return this.umpanBalikAsesorService.findByAsesor(asesorId);
    }
    update(id, updateDto) {
        return this.umpanBalikAsesorService.update(id, updateDto);
    }
    submitFeedback(id, syaratKetentuanDisetujui) {
        return this.umpanBalikAsesorService.submitFeedback(id, syaratKetentuanDisetujui);
    }
    remove(id) {
        return this.umpanBalikAsesorService.remove(id);
    }
};
exports.UmpanBalikAsesorController = UmpanBalikAsesorController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buat umpan balik asesor baru' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Umpan balik asesor berhasil dibuat', type: umpan_balik_asesor_entity_1.UmpanBalikAsesor }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [umpan_balik_asesor_dto_1.CreateUmpanBalikAsesorDto]),
    __metadata("design:returntype", Promise)
], UmpanBalikAsesorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil semua umpan balik asesor' }),
    (0, swagger_1.ApiQuery)({ name: 'alId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'asesorId', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar umpan balik asesor', type: [umpan_balik_asesor_entity_1.UmpanBalikAsesor] }),
    __param(0, (0, common_1.Query)('alId')),
    __param(1, (0, common_1.Query)('asesorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikAsesorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil umpan balik asesor berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Data umpan balik asesor', type: umpan_balik_asesor_entity_1.UmpanBalikAsesor }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikAsesorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('asesmen-lapangan/:alId'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil umpan balik berdasarkan asesmen lapangan' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar umpan balik asesor', type: [umpan_balik_asesor_entity_1.UmpanBalikAsesor] }),
    __param(0, (0, common_1.Param)('alId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikAsesorController.prototype, "findByAsesmenLapangan", null);
__decorate([
    (0, common_1.Get)('asesor/:asesorId'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil umpan balik berdasarkan asesor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar umpan balik asesor', type: [umpan_balik_asesor_entity_1.UmpanBalikAsesor] }),
    __param(0, (0, common_1.Param)('asesorId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikAsesorController.prototype, "findByAsesor", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update umpan balik asesor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Umpan balik asesor berhasil diupdate', type: umpan_balik_asesor_entity_1.UmpanBalikAsesor }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, umpan_balik_asesor_dto_1.UpdateUmpanBalikAsesorDto]),
    __metadata("design:returntype", Promise)
], UmpanBalikAsesorController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/submit'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit umpan balik asesor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Umpan balik asesor berhasil disubmit', type: umpan_balik_asesor_entity_1.UmpanBalikAsesor }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('syaratKetentuanDisetujui')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], UmpanBalikAsesorController.prototype, "submitFeedback", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Hapus umpan balik asesor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Umpan balik asesor berhasil dihapus' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikAsesorController.prototype, "remove", null);
exports.UmpanBalikAsesorController = UmpanBalikAsesorController = __decorate([
    (0, swagger_1.ApiTags)('Umpan Balik Asesor'),
    (0, common_1.Controller)('proses-akreditasi/umpan-balik-asesor'),
    __metadata("design:paramtypes", [umpan_balik_asesor_service_1.UmpanBalikAsesorService])
], UmpanBalikAsesorController);
//# sourceMappingURL=umpan-balik-asesor.controller.js.map