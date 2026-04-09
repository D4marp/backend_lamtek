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
exports.SinkronisasiBanptController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sinkronisasi_banpt_service_1 = require("../services/sinkronisasi-banpt.service");
const sinkronisasi_banpt_dto_1 = require("../dto/sinkronisasi-banpt.dto");
const sinkronisasi_banpt_entity_1 = require("../entities/sinkronisasi-banpt.entity");
let SinkronisasiBanptController = class SinkronisasiBanptController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, skId, status) {
        return this.service.findAll({ akreditasiId, skId, status });
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
    async startSync(id, userId) {
        return this.service.startSync(id, userId);
    }
    async syncSuccess(id, nomorRegistrasi, response) {
        return this.service.syncSuccess(id, nomorRegistrasi, response);
    }
    async syncFailed(id, errorMessage) {
        return this.service.syncFailed(id, errorMessage);
    }
    async retry(id) {
        return this.service.retry(id);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.SinkronisasiBanptController = SinkronisasiBanptController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all sinkronisasi BAN-PT' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'skId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: sinkronisasi_banpt_entity_1.StatusSinkronisasi }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List sinkronisasi', type: [sinkronisasi_banpt_entity_1.SinkronisasiBanpt] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('skId')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sinkronisasi by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sinkronisasi found', type: sinkronisasi_banpt_entity_1.SinkronisasiBanpt }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sinkronisasi by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sinkronisasi found', type: sinkronisasi_banpt_entity_1.SinkronisasiBanpt }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create sinkronisasi' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Sinkronisasi created', type: sinkronisasi_banpt_entity_1.SinkronisasiBanpt }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sinkronisasi_banpt_dto_1.CreateSinkronisasiBanptDto]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update sinkronisasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sinkronisasi updated', type: sinkronisasi_banpt_entity_1.SinkronisasiBanpt }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, sinkronisasi_banpt_dto_1.UpdateSinkronisasiBanptDto]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/start'),
    (0, swagger_1.ApiOperation)({ summary: 'Start sinkronisasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sinkronisasi started', type: sinkronisasi_banpt_entity_1.SinkronisasiBanpt }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "startSync", null);
__decorate([
    (0, common_1.Put)(':id/success'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark sinkronisasi success' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sinkronisasi success', type: sinkronisasi_banpt_entity_1.SinkronisasiBanpt }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('nomorRegistrasi')),
    __param(2, (0, common_1.Body)('response')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "syncSuccess", null);
__decorate([
    (0, common_1.Put)(':id/failed'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark sinkronisasi failed' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sinkronisasi failed', type: sinkronisasi_banpt_entity_1.SinkronisasiBanpt }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('errorMessage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "syncFailed", null);
__decorate([
    (0, common_1.Put)(':id/retry'),
    (0, swagger_1.ApiOperation)({ summary: 'Retry sinkronisasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sinkronisasi retrying', type: sinkronisasi_banpt_entity_1.SinkronisasiBanpt }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "retry", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete sinkronisasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sinkronisasi deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SinkronisasiBanptController.prototype, "remove", null);
exports.SinkronisasiBanptController = SinkronisasiBanptController = __decorate([
    (0, swagger_1.ApiTags)('Sinkronisasi BAN-PT'),
    (0, common_1.Controller)('proses-akreditasi/sinkronisasi-banpt'),
    __metadata("design:paramtypes", [sinkronisasi_banpt_service_1.SinkronisasiBanptService])
], SinkronisasiBanptController);
//# sourceMappingURL=sinkronisasi-banpt.controller.js.map