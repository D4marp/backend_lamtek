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
exports.DokumenController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const dokumen_service_1 = require("./dokumen.service");
let DokumenController = class DokumenController {
    constructor(service) {
        this.service = service;
    }
    async uploadDokumen(kodeAkreditasi, file, tipeDokumen, metadata) {
        const parsedMetadata = metadata ? JSON.parse(metadata) : undefined;
        return this.service.uploadDokumen(kodeAkreditasi, file, tipeDokumen, parsedMetadata);
    }
    async getDokumenByAkreditasi(kodeAkreditasi) {
        return this.service.getDokumenByAkreditasi(kodeAkreditasi);
    }
    async getDokumen(hash, res) {
        try {
            const buffer = await this.service.getDokumenFromIpfs(hash);
            res.send(buffer);
        }
        catch (error) {
            res.status(common_1.HttpStatus.NOT_FOUND).json({ error: 'Document not found' });
        }
    }
    async verifyDokumen(hash, sha256) {
        return this.service.verifyDokumen(hash, sha256);
    }
};
exports.DokumenController = DokumenController;
__decorate([
    (0, common_1.Post)('upload/:kodeAkreditasi'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload dokumen ke IPFS dan blockchain' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('kodeAkreditasi')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)('tipeDokumen')),
    __param(3, (0, common_1.Body)('metadata')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object, String, String]),
    __metadata("design:returntype", Promise)
], DokumenController.prototype, "uploadDokumen", null);
__decorate([
    (0, common_1.Get)('akreditasi/:kodeAkreditasi'),
    (0, swagger_1.ApiOperation)({ summary: 'Get semua dokumen untuk akreditasi' }),
    __param(0, (0, common_1.Param)('kodeAkreditasi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DokumenController.prototype, "getDokumenByAkreditasi", null);
__decorate([
    (0, common_1.Get)('ipfs/:hash'),
    (0, swagger_1.ApiOperation)({ summary: 'Download dokumen dari IPFS' }),
    __param(0, (0, common_1.Param)('hash')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DokumenController.prototype, "getDokumen", null);
__decorate([
    (0, common_1.Post)('verify/:hash'),
    (0, swagger_1.ApiOperation)({ summary: 'Verifikasi integritas dokumen' }),
    __param(0, (0, common_1.Param)('hash')),
    __param(1, (0, common_1.Body)('sha256')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DokumenController.prototype, "verifyDokumen", null);
exports.DokumenController = DokumenController = __decorate([
    (0, swagger_1.ApiTags)('dokumen'),
    (0, common_1.Controller)('dokumen'),
    __metadata("design:paramtypes", [dokumen_service_1.DokumenService])
], DokumenController);
//# sourceMappingURL=dokumen.controller.js.map