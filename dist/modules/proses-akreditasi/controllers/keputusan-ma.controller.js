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
exports.KeputusanMaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const keputusan_ma_service_1 = require("../services/keputusan-ma.service");
const keputusan_ma_dto_1 = require("../dto/keputusan-ma.dto");
const keputusan_ma_entity_1 = require("../entities/keputusan-ma.entity");
let KeputusanMaController = class KeputusanMaController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, status, peringkatFinal) {
        return this.service.findAll({ akreditasiId, status, peringkatFinal });
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
    async setujui(id, userId, peringkat, nilai, masaBerlaku) {
        return this.service.setujui(id, userId, peringkat, nilai, masaBerlaku);
    }
    async tolak(id, catatan) {
        return this.service.tolak(id, catatan);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.KeputusanMaController = KeputusanMaController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all keputusan MA' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: keputusan_ma_entity_1.StatusKeputusan }),
    (0, swagger_1.ApiQuery)({ name: 'peringkatFinal', required: false, type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List keputusan MA', type: [keputusan_ma_entity_1.KeputusanMa] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('peringkatFinal')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], KeputusanMaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get keputusan MA by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Keputusan found', type: keputusan_ma_entity_1.KeputusanMa }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KeputusanMaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get keputusan by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Keputusan found', type: keputusan_ma_entity_1.KeputusanMa }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KeputusanMaController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create keputusan MA' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Keputusan created', type: keputusan_ma_entity_1.KeputusanMa }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [keputusan_ma_dto_1.CreateKeputusanMaDto]),
    __metadata("design:returntype", Promise)
], KeputusanMaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update keputusan MA' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Keputusan updated', type: keputusan_ma_entity_1.KeputusanMa }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, keputusan_ma_dto_1.UpdateKeputusanMaDto]),
    __metadata("design:returntype", Promise)
], KeputusanMaController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/setujui'),
    (0, swagger_1.ApiOperation)({ summary: 'Setujui keputusan MA' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Keputusan disetujui', type: keputusan_ma_entity_1.KeputusanMa }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __param(2, (0, common_1.Body)('peringkat')),
    __param(3, (0, common_1.Body)('nilai')),
    __param(4, (0, common_1.Body)('masaBerlaku')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number, Number]),
    __metadata("design:returntype", Promise)
], KeputusanMaController.prototype, "setujui", null);
__decorate([
    (0, common_1.Put)(':id/tolak'),
    (0, swagger_1.ApiOperation)({ summary: 'Tolak keputusan MA' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Keputusan ditolak', type: keputusan_ma_entity_1.KeputusanMa }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], KeputusanMaController.prototype, "tolak", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete keputusan MA' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Keputusan deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KeputusanMaController.prototype, "remove", null);
exports.KeputusanMaController = KeputusanMaController = __decorate([
    (0, swagger_1.ApiTags)('Keputusan MA'),
    (0, common_1.Controller)('proses-akreditasi/keputusan-ma'),
    __metadata("design:paramtypes", [keputusan_ma_service_1.KeputusanMaService])
], KeputusanMaController);
//# sourceMappingURL=keputusan-ma.controller.js.map