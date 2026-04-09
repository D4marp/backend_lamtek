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
exports.ResponAsesorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const respon_asesor_service_1 = require("../services/respon-asesor.service");
const respon_asesor_dto_1 = require("../dto/respon-asesor.dto");
const respon_asesor_entity_1 = require("../entities/respon-asesor.entity");
let ResponAsesorController = class ResponAsesorController {
    constructor(service) {
        this.service = service;
    }
    async findAll(penawaranId, asesorId, status) {
        return this.service.findAll({ penawaranId, asesorId, status });
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByPenawaran(penawaranId) {
        return this.service.findByPenawaran(penawaranId);
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async terima(id) {
        return this.service.terima(id);
    }
    async tolak(id, alasan) {
        return this.service.tolak(id, alasan);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.ResponAsesorController = ResponAsesorController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all respon asesor' }),
    (0, swagger_1.ApiQuery)({ name: 'penawaranId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'asesorId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: respon_asesor_entity_1.StatusRespon }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List respon asesor', type: [respon_asesor_entity_1.ResponAsesor] }),
    __param(0, (0, common_1.Query)('penawaranId')),
    __param(1, (0, common_1.Query)('asesorId')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], ResponAsesorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get respon asesor by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Respon found', type: respon_asesor_entity_1.ResponAsesor }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponAsesorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('penawaran/:penawaranId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get respon by penawaran ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Respon found', type: respon_asesor_entity_1.ResponAsesor }),
    __param(0, (0, common_1.Param)('penawaranId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponAsesorController.prototype, "findByPenawaran", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create respon asesor' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Respon created', type: respon_asesor_entity_1.ResponAsesor }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [respon_asesor_dto_1.CreateResponAsesorDto]),
    __metadata("design:returntype", Promise)
], ResponAsesorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update respon asesor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Respon updated', type: respon_asesor_entity_1.ResponAsesor }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, respon_asesor_dto_1.UpdateResponAsesorDto]),
    __metadata("design:returntype", Promise)
], ResponAsesorController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/terima'),
    (0, swagger_1.ApiOperation)({ summary: 'Terima penawaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Penawaran diterima', type: respon_asesor_entity_1.ResponAsesor }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponAsesorController.prototype, "terima", null);
__decorate([
    (0, common_1.Put)(':id/tolak'),
    (0, swagger_1.ApiOperation)({ summary: 'Tolak penawaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Penawaran ditolak', type: respon_asesor_entity_1.ResponAsesor }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('alasan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ResponAsesorController.prototype, "tolak", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete respon asesor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Respon deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResponAsesorController.prototype, "remove", null);
exports.ResponAsesorController = ResponAsesorController = __decorate([
    (0, swagger_1.ApiTags)('Respon Asesor'),
    (0, common_1.Controller)('proses-akreditasi/respon-asesor'),
    __metadata("design:paramtypes", [respon_asesor_service_1.ResponAsesorService])
], ResponAsesorController);
//# sourceMappingURL=respon-asesor.controller.js.map