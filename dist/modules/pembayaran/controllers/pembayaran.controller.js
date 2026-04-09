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
exports.PembayaranController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pembayaran_service_1 = require("../services/pembayaran.service");
const pembayaran_dto_1 = require("../dto/pembayaran.dto");
const pembayaran_entity_1 = require("../entities/pembayaran.entity");
let PembayaranController = class PembayaranController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, status) {
        return this.service.findAll({ akreditasiId, status });
    }
    async findPending() {
        return this.service.findPending();
    }
    async findOverdue() {
        return this.service.findOverdue();
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
    async pay(id, jumlah, buktiBayarUrl) {
        return this.service.pay(id, jumlah, buktiBayarUrl);
    }
    async verify(id, userId) {
        return this.service.verify(id, userId);
    }
    async reject(id, catatan) {
        return this.service.reject(id, catatan);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.PembayaranController = PembayaranController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all pembayaran' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: pembayaran_entity_1.StatusPembayaran }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List pembayaran', type: [pembayaran_entity_1.Pembayaran] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pending pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List pending pembayaran', type: [pembayaran_entity_1.Pembayaran] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "findPending", null);
__decorate([
    (0, common_1.Get)('overdue'),
    (0, swagger_1.ApiOperation)({ summary: 'Get overdue pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List overdue pembayaran', type: [pembayaran_entity_1.Pembayaran] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "findOverdue", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pembayaran by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pembayaran found', type: pembayaran_entity_1.Pembayaran }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pembayaran by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List pembayaran', type: [pembayaran_entity_1.Pembayaran] }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pembayaran created', type: pembayaran_entity_1.Pembayaran }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pembayaran_dto_1.CreatePembayaranDto]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pembayaran updated', type: pembayaran_entity_1.Pembayaran }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pembayaran_dto_1.UpdatePembayaranDto]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/pay'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pembayaran submitted', type: pembayaran_entity_1.Pembayaran }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('jumlah')),
    __param(2, (0, common_1.Body)('buktiBayarUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "pay", null);
__decorate([
    (0, common_1.Put)(':id/verify'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pembayaran verified', type: pembayaran_entity_1.Pembayaran }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "verify", null);
__decorate([
    (0, common_1.Put)(':id/reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reject pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pembayaran rejected', type: pembayaran_entity_1.Pembayaran }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "reject", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete pembayaran' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pembayaran deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PembayaranController.prototype, "remove", null);
exports.PembayaranController = PembayaranController = __decorate([
    (0, swagger_1.ApiTags)('Pembayaran'),
    (0, common_1.Controller)('pembayaran'),
    __metadata("design:paramtypes", [pembayaran_service_1.PembayaranService])
], PembayaranController);
//# sourceMappingURL=pembayaran.controller.js.map