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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AkreditasiController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const akreditasi_service_1 = require("./akreditasi.service");
const create_akreditasi_dto_1 = require("./dto/create-akreditasi.dto");
const update_status_dto_1 = require("./dto/update-status.dto");
const akreditasi_entity_1 = require("./entities/akreditasi.entity");
let AkreditasiController = class AkreditasiController {
    constructor(akreditasiService) {
        this.akreditasiService = akreditasiService;
    }
    async create(createDto) {
        const tenantId = 1;
        return this.akreditasiService.create(createDto, tenantId);
    }
    async findAll(page, limit, status, tipe, tahun) {
        try {
            const tenantId = 1;
            return await this.akreditasiService.findAll(tenantId, { page, limit, status, tipe, tahun });
        }
        catch (error) {
            console.error('Error in GET /akreditasi:', error);
            return { data: [], total: 0, page: page || 1, limit: limit || 10 };
        }
    }
    async getStats() {
        try {
            const tenantId = 1;
            return await this.akreditasiService.getStats(tenantId);
        }
        catch (error) {
            console.error('Error in GET /akreditasi/stats:', error);
            return {
                totalCount: 0,
                inProgressCount: 0,
                completedThisMonth: 0,
                waitingAssessment: 0,
            };
        }
    }
    async findOne(id) {
        try {
            const tenantId = 1;
            return await this.akreditasiService.findOne(id, tenantId);
        }
        catch (error) {
            console.error(`Error in GET /akreditasi/${id}:`, error);
            throw error;
        }
    }
    async findByKode(kodeAkreditasi) {
        return this.akreditasiService.findByKode(kodeAkreditasi);
    }
    async updateStatus(id, updateDto) {
        const tenantId = 1;
        return this.akreditasiService.updateStatus(id, tenantId, updateDto);
    }
    async uploadDokumen(id, file, tipeDokumen) {
        const tenantId = 1;
        return this.akreditasiService.uploadDokumen(id, tenantId, file, tipeDokumen);
    }
    async getBlockchainStatus(id) {
        const tenantId = 1;
        return this.akreditasiService.getBlockchainStatus(id, tenantId);
    }
};
exports.AkreditasiController = AkreditasiController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrasi akreditasi baru' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Akreditasi berhasil didaftarkan' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_akreditasi_dto_1.CreateAkreditasiDto]),
    __metadata("design:returntype", Promise)
], AkreditasiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get semua akreditasi' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: akreditasi_entity_1.StatusAkreditasi }),
    (0, swagger_1.ApiQuery)({ name: 'tipe', required: false, enum: akreditasi_entity_1.TipeAkreditasi }),
    (0, swagger_1.ApiQuery)({ name: 'tahun', required: false, type: Number }),
    __param(0, (0, common_1.Query)('page', new common_1.ParseIntPipe({ optional: true }))),
    __param(1, (0, common_1.Query)('limit', new common_1.ParseIntPipe({ optional: true }))),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('tipe')),
    __param(4, (0, common_1.Query)('tahun', new common_1.ParseIntPipe({ optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, Number]),
    __metadata("design:returntype", Promise)
], AkreditasiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get dashboard statistics' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AkreditasiController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get akreditasi by ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Detail akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Akreditasi tidak ditemukan' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AkreditasiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('kode/:kodeAkreditasi'),
    (0, swagger_1.ApiOperation)({ summary: 'Get akreditasi by kode' }),
    __param(0, (0, common_1.Param)('kodeAkreditasi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AkreditasiController.prototype, "findByKode", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update status akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Status berhasil diupdate' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_dto_1.UpdateStatusDto]),
    __metadata("design:returntype", Promise)
], AkreditasiController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Post)(':id/dokumen'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload dokumen akreditasi ke IPFS' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)('tipeDokumen')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object, String]),
    __metadata("design:returntype", Promise)
], AkreditasiController.prototype, "uploadDokumen", null);
__decorate([
    (0, common_1.Get)(':id/blockchain'),
    (0, swagger_1.ApiOperation)({ summary: 'Get status blockchain akreditasi' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AkreditasiController.prototype, "getBlockchainStatus", null);
exports.AkreditasiController = AkreditasiController = __decorate([
    (0, swagger_1.ApiTags)('akreditasi'),
    (0, common_1.Controller)('akreditasi'),
    __metadata("design:paramtypes", [akreditasi_service_1.AkreditasiService])
], AkreditasiController);
//# sourceMappingURL=akreditasi.controller.js.map