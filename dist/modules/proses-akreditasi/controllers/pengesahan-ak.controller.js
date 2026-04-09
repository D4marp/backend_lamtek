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
exports.PengesahanAkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pengesahan_ak_service_1 = require("../services/pengesahan-ak.service");
const pengesahan_ak_dto_1 = require("../dto/pengesahan-ak.dto");
const pengesahan_ak_entity_1 = require("../entities/pengesahan-ak.entity");
let PengesahanAkController = class PengesahanAkController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, status) {
        return this.service.findAll({ akreditasiId, status });
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByAkreditasi(akreditasiId) {
        return this.service.findByAkreditasi(akreditasiId);
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async sahkan(id, userId) {
        return this.service.sahkan(id, userId);
    }
    async tolak(id, catatan) {
        return this.service.tolak(id, catatan);
    }
    async revisi(id, catatan) {
        return this.service.revisi(id, catatan);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.PengesahanAkController = PengesahanAkController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all pengesahan AK' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: pengesahan_ak_entity_1.StatusPengesahan }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List pengesahan AK', type: [pengesahan_ak_entity_1.PengesahanAk] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pengesahan AK by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan found', type: pengesahan_ak_entity_1.PengesahanAk }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pengesahan by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan found', type: pengesahan_ak_entity_1.PengesahanAk }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create pengesahan AK' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pengesahan created', type: pengesahan_ak_entity_1.PengesahanAk }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pengesahan_ak_dto_1.CreatePengesahanAkDto]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update pengesahan AK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan updated', type: pengesahan_ak_entity_1.PengesahanAk }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pengesahan_ak_dto_1.UpdatePengesahanAkDto]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/sahkan'),
    (0, swagger_1.ApiOperation)({ summary: 'Sahkan pengesahan AK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan disahkan', type: pengesahan_ak_entity_1.PengesahanAk }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "sahkan", null);
__decorate([
    (0, common_1.Put)(':id/tolak'),
    (0, swagger_1.ApiOperation)({ summary: 'Tolak pengesahan AK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan ditolak', type: pengesahan_ak_entity_1.PengesahanAk }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "tolak", null);
__decorate([
    (0, common_1.Put)(':id/revisi'),
    (0, swagger_1.ApiOperation)({ summary: 'Minta revisi pengesahan AK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan perlu revisi', type: pengesahan_ak_entity_1.PengesahanAk }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "revisi", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete pengesahan AK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengesahanAkController.prototype, "remove", null);
exports.PengesahanAkController = PengesahanAkController = __decorate([
    (0, swagger_1.ApiTags)('Pengesahan AK'),
    (0, common_1.Controller)('proses-akreditasi/pengesahan-ak'),
    __metadata("design:paramtypes", [pengesahan_ak_service_1.PengesahanAkService])
], PengesahanAkController);
//# sourceMappingURL=pengesahan-ak.controller.js.map