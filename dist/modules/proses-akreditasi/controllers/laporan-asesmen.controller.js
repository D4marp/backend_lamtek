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
exports.LaporanAsesmenController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const laporan_asesmen_service_1 = require("../services/laporan-asesmen.service");
const laporan_asesmen_dto_1 = require("../dto/laporan-asesmen.dto");
const laporan_asesmen_entity_1 = require("../entities/laporan-asesmen.entity");
let LaporanAsesmenController = class LaporanAsesmenController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, asesorId, jenisLaporan, status) {
        return this.service.findAll({ akreditasiId, asesorId, jenisLaporan, status });
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
    async submit(id) {
        return this.service.submit(id);
    }
    async approve(id) {
        return this.service.approve(id);
    }
    async reject(id) {
        return this.service.reject(id);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.LaporanAsesmenController = LaporanAsesmenController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all laporan asesmen' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'asesorId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'jenisLaporan', required: false, enum: laporan_asesmen_entity_1.JenisLaporan }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: laporan_asesmen_entity_1.StatusLaporan }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List laporan asesmen', type: [laporan_asesmen_entity_1.LaporanAsesmen] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('asesorId')),
    __param(2, (0, common_1.Query)('jenisLaporan')),
    __param(3, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get laporan asesmen by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Laporan found', type: laporan_asesmen_entity_1.LaporanAsesmen }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get laporan by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List laporan', type: [laporan_asesmen_entity_1.LaporanAsesmen] }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create laporan asesmen' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Laporan created', type: laporan_asesmen_entity_1.LaporanAsesmen }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [laporan_asesmen_dto_1.CreateLaporanAsesmenDto]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update laporan asesmen' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Laporan updated', type: laporan_asesmen_entity_1.LaporanAsesmen }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, laporan_asesmen_dto_1.UpdateLaporanAsesmenDto]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/submit'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit laporan asesmen' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Laporan submitted', type: laporan_asesmen_entity_1.LaporanAsesmen }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "submit", null);
__decorate([
    (0, common_1.Put)(':id/approve'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve laporan asesmen' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Laporan approved', type: laporan_asesmen_entity_1.LaporanAsesmen }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "approve", null);
__decorate([
    (0, common_1.Put)(':id/reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reject laporan asesmen' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Laporan rejected', type: laporan_asesmen_entity_1.LaporanAsesmen }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "reject", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete laporan asesmen' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Laporan deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LaporanAsesmenController.prototype, "remove", null);
exports.LaporanAsesmenController = LaporanAsesmenController = __decorate([
    (0, swagger_1.ApiTags)('Laporan Asesmen'),
    (0, common_1.Controller)('proses-akreditasi/laporan-asesmen'),
    __metadata("design:paramtypes", [laporan_asesmen_service_1.LaporanAsesmenService])
], LaporanAsesmenController);
//# sourceMappingURL=laporan-asesmen.controller.js.map