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
exports.TanggapanAlController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tanggapan_al_service_1 = require("../services/tanggapan-al.service");
const tanggapan_al_dto_1 = require("../dto/tanggapan-al.dto");
const tanggapan_al_entity_1 = require("../entities/tanggapan-al.entity");
let TanggapanAlController = class TanggapanAlController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, laporanId, prodiId, status) {
        return this.service.findAll({ akreditasiId, laporanId, prodiId, status });
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByLaporan(laporanId) {
        return this.service.findByLaporan(laporanId);
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
    async submit(id, userId) {
        return this.service.submit(id, userId);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.TanggapanAlController = TanggapanAlController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tanggapan AL' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'laporanId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'prodiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: tanggapan_al_entity_1.StatusTanggapan }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List tanggapan AL', type: [tanggapan_al_entity_1.TanggapanAl] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('laporanId')),
    __param(2, (0, common_1.Query)('prodiId')),
    __param(3, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String]),
    __metadata("design:returntype", Promise)
], TanggapanAlController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get tanggapan AL by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tanggapan found', type: tanggapan_al_entity_1.TanggapanAl }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TanggapanAlController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('laporan/:laporanId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get tanggapan by laporan ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tanggapan found', type: tanggapan_al_entity_1.TanggapanAl }),
    __param(0, (0, common_1.Param)('laporanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TanggapanAlController.prototype, "findByLaporan", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get tanggapan by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List tanggapan', type: [tanggapan_al_entity_1.TanggapanAl] }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TanggapanAlController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create tanggapan AL' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tanggapan created', type: tanggapan_al_entity_1.TanggapanAl }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tanggapan_al_dto_1.CreateTanggapanAlDto]),
    __metadata("design:returntype", Promise)
], TanggapanAlController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update tanggapan AL' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tanggapan updated', type: tanggapan_al_entity_1.TanggapanAl }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tanggapan_al_dto_1.UpdateTanggapanAlDto]),
    __metadata("design:returntype", Promise)
], TanggapanAlController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/submit'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit tanggapan AL' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tanggapan submitted', type: tanggapan_al_entity_1.TanggapanAl }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TanggapanAlController.prototype, "submit", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete tanggapan AL' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tanggapan deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TanggapanAlController.prototype, "remove", null);
exports.TanggapanAlController = TanggapanAlController = __decorate([
    (0, swagger_1.ApiTags)('Tanggapan AL'),
    (0, common_1.Controller)('proses-akreditasi/tanggapan-al'),
    __metadata("design:paramtypes", [tanggapan_al_service_1.TanggapanAlService])
], TanggapanAlController);
//# sourceMappingURL=tanggapan-al.controller.js.map