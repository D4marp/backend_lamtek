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
exports.SkAkreditasiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sk_akreditasi_service_1 = require("../services/sk-akreditasi.service");
const sk_akreditasi_dto_1 = require("../dto/sk-akreditasi.dto");
const sk_akreditasi_entity_1 = require("../entities/sk-akreditasi.entity");
let SkAkreditasiController = class SkAkreditasiController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, status, peringkat) {
        return this.service.findAll({ akreditasiId, status, peringkat });
    }
    async findActive() {
        return this.service.findActive();
    }
    async findExpiringSoon(days) {
        return this.service.findExpiringSoon(days || 90);
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByAkreditasi(akreditasiId) {
        return this.service.findByAkreditasi(akreditasiId);
    }
    async findByNomorSk(nomorSk) {
        return this.service.findByNomorSk(nomorSk);
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async generate(id) {
        return this.service.generate(id);
    }
    async sign(id, penandatangan, jabatan) {
        return this.service.sign(id, penandatangan, jabatan);
    }
    async publish(id, ipfsHash, blockchainTxHash, blockNumber) {
        return this.service.publish(id, ipfsHash, blockchainTxHash, blockNumber);
    }
    async revoke(id, catatan) {
        return this.service.revoke(id, catatan);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.SkAkreditasiController = SkAkreditasiController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all SK akreditasi' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: sk_akreditasi_entity_1.StatusSk }),
    (0, swagger_1.ApiQuery)({ name: 'peringkat', required: false, type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List SK akreditasi', type: [sk_akreditasi_entity_1.SkAkreditasi] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('peringkat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active SK akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List active SK', type: [sk_akreditasi_entity_1.SkAkreditasi] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)('expiring'),
    (0, swagger_1.ApiOperation)({ summary: 'Get SK expiring soon' }),
    (0, swagger_1.ApiQuery)({ name: 'days', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List expiring SK', type: [sk_akreditasi_entity_1.SkAkreditasi] }),
    __param(0, (0, common_1.Query)('days')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "findExpiringSoon", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get SK by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK found', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get SK by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK found', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Get)('nomor/:nomorSk'),
    (0, swagger_1.ApiOperation)({ summary: 'Get SK by nomor SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK found', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Param)('nomorSk')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "findByNomorSk", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create SK akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'SK created', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sk_akreditasi_dto_1.CreateSkAkreditasiDto]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update SK akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK updated', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, sk_akreditasi_dto_1.UpdateSkAkreditasiDto]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/generate'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK generated', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "generate", null);
__decorate([
    (0, common_1.Put)(':id/sign'),
    (0, swagger_1.ApiOperation)({ summary: 'Sign SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK signed', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('penandatangan')),
    __param(2, (0, common_1.Body)('jabatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "sign", null);
__decorate([
    (0, common_1.Put)(':id/publish'),
    (0, swagger_1.ApiOperation)({ summary: 'Publish SK to blockchain' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK published', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('ipfsHash')),
    __param(2, (0, common_1.Body)('blockchainTxHash')),
    __param(3, (0, common_1.Body)('blockNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Number]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "publish", null);
__decorate([
    (0, common_1.Put)(':id/revoke'),
    (0, swagger_1.ApiOperation)({ summary: 'Revoke SK' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK revoked', type: sk_akreditasi_entity_1.SkAkreditasi }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "revoke", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete SK akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SK deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkAkreditasiController.prototype, "remove", null);
exports.SkAkreditasiController = SkAkreditasiController = __decorate([
    (0, swagger_1.ApiTags)('SK Akreditasi'),
    (0, common_1.Controller)('proses-akreditasi/sk-akreditasi'),
    __metadata("design:paramtypes", [sk_akreditasi_service_1.SkAkreditasiService])
], SkAkreditasiController);
//# sourceMappingURL=sk-akreditasi.controller.js.map