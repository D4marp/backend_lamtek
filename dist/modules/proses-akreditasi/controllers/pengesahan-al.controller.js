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
exports.PengesahanAlController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pengesahan_al_service_1 = require("../services/pengesahan-al.service");
const pengesahan_al_dto_1 = require("../dto/pengesahan-al.dto");
const pengesahan_al_entity_1 = require("../entities/pengesahan-al.entity");
let PengesahanAlController = class PengesahanAlController {
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
    async sahkan(id, userId, rekomendasiPeringkat) {
        return this.service.sahkan(id, userId, rekomendasiPeringkat);
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
exports.PengesahanAlController = PengesahanAlController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all pengesahan AL' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: pengesahan_al_entity_1.StatusPengesahanAl }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List pengesahan AL', type: [pengesahan_al_entity_1.PengesahanAl] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pengesahan AL by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan found', type: pengesahan_al_entity_1.PengesahanAl }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pengesahan by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan found', type: pengesahan_al_entity_1.PengesahanAl }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create pengesahan AL' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pengesahan created', type: pengesahan_al_entity_1.PengesahanAl }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pengesahan_al_dto_1.CreatePengesahanAlDto]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update pengesahan AL' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan updated', type: pengesahan_al_entity_1.PengesahanAl }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pengesahan_al_dto_1.UpdatePengesahanAlDto]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/sahkan'),
    (0, swagger_1.ApiOperation)({ summary: 'Sahkan pengesahan AL' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan disahkan', type: pengesahan_al_entity_1.PengesahanAl }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __param(2, (0, common_1.Body)('rekomendasiPeringkat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "sahkan", null);
__decorate([
    (0, common_1.Put)(':id/tolak'),
    (0, swagger_1.ApiOperation)({ summary: 'Tolak pengesahan AL' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan ditolak', type: pengesahan_al_entity_1.PengesahanAl }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "tolak", null);
__decorate([
    (0, common_1.Put)(':id/revisi'),
    (0, swagger_1.ApiOperation)({ summary: 'Minta revisi pengesahan AL' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan perlu revisi', type: pengesahan_al_entity_1.PengesahanAl }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "revisi", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete pengesahan AL' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pengesahan deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PengesahanAlController.prototype, "remove", null);
exports.PengesahanAlController = PengesahanAlController = __decorate([
    (0, swagger_1.ApiTags)('Pengesahan AL'),
    (0, common_1.Controller)('proses-akreditasi/pengesahan-al'),
    __metadata("design:paramtypes", [pengesahan_al_service_1.PengesahanAlService])
], PengesahanAlController);
//# sourceMappingURL=pengesahan-al.controller.js.map