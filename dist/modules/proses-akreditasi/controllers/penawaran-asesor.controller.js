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
exports.PenawaranAsesorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const penawaran_asesor_service_1 = require("../services/penawaran-asesor.service");
const penawaran_asesor_dto_1 = require("../dto/penawaran-asesor.dto");
const penawaran_asesor_entity_1 = require("../entities/penawaran-asesor.entity");
let PenawaranAsesorController = class PenawaranAsesorController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, asesorId, status, jenisAsesmen) {
        return this.service.findAll({ akreditasiId, asesorId, status, jenisAsesmen });
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByAkreditasi(akreditasiId) {
        return this.service.findByAkreditasi(akreditasiId);
    }
    async findByAsesor(asesorId) {
        return this.service.findByAsesor(asesorId);
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async updateStatus(id, status) {
        return this.service.updateStatus(id, status);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.PenawaranAsesorController = PenawaranAsesorController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all penawaran asesor' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'asesorId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: penawaran_asesor_entity_1.StatusPenawaran }),
    (0, swagger_1.ApiQuery)({ name: 'jenisAsesmen', required: false, type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List penawaran asesor', type: [penawaran_asesor_entity_1.PenawaranAsesor] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('asesorId')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('jenisAsesmen')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], PenawaranAsesorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get penawaran asesor by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Penawaran asesor found', type: penawaran_asesor_entity_1.PenawaranAsesor }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Penawaran not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PenawaranAsesorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get penawaran by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List penawaran', type: [penawaran_asesor_entity_1.PenawaranAsesor] }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PenawaranAsesorController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Get)('asesor/:asesorId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get penawaran by asesor ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List penawaran', type: [penawaran_asesor_entity_1.PenawaranAsesor] }),
    __param(0, (0, common_1.Param)('asesorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PenawaranAsesorController.prototype, "findByAsesor", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create penawaran asesor' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Penawaran created', type: penawaran_asesor_entity_1.PenawaranAsesor }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [penawaran_asesor_dto_1.CreatePenawaranAsesorDto]),
    __metadata("design:returntype", Promise)
], PenawaranAsesorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update penawaran asesor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Penawaran updated', type: penawaran_asesor_entity_1.PenawaranAsesor }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, penawaran_asesor_dto_1.UpdatePenawaranAsesorDto]),
    __metadata("design:returntype", Promise)
], PenawaranAsesorController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update status penawaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Status updated', type: penawaran_asesor_entity_1.PenawaranAsesor }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PenawaranAsesorController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete penawaran asesor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Penawaran deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PenawaranAsesorController.prototype, "remove", null);
exports.PenawaranAsesorController = PenawaranAsesorController = __decorate([
    (0, swagger_1.ApiTags)('Penawaran Asesor'),
    (0, common_1.Controller)('proses-akreditasi/penawaran-asesor'),
    __metadata("design:paramtypes", [penawaran_asesor_service_1.PenawaranAsesorService])
], PenawaranAsesorController);
//# sourceMappingURL=penawaran-asesor.controller.js.map