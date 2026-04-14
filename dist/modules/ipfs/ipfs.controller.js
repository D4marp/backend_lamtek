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
exports.IpfsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const ipfs_service_1 = require("./ipfs.service");
let IpfsController = class IpfsController {
    constructor(ipfsService) {
        this.ipfsService = ipfsService;
    }
    async getInfo() {
        const connected = this.ipfsService.isIpfsConnected();
        if (!connected) {
            return { connected: false };
        }
        const nodeInfo = await this.ipfsService.getNodeInfo();
        return {
            connected: true,
            ...nodeInfo,
        };
    }
    async uploadFile(file) {
        return this.ipfsService.uploadFile(file);
    }
    async uploadJson(data) {
        return this.ipfsService.uploadJson(data);
    }
    async getFile(hash, res) {
        try {
            const buffer = await this.ipfsService.getFile(hash);
            res.send(buffer);
        }
        catch (error) {
            res.status(common_1.HttpStatus.NOT_FOUND).json({ error: 'File not found' });
        }
    }
    async getJson(hash) {
        return this.ipfsService.getJson(hash);
    }
    async pinFile(hash) {
        const success = await this.ipfsService.pinFile(hash);
        return { success, hash };
    }
    async unpinFile(hash) {
        const success = await this.ipfsService.unpinFile(hash);
        return { success, hash };
    }
    async getPinnedFiles() {
        const files = await this.ipfsService.getPinnedFiles();
        return { count: files.length, files };
    }
    async verifyIntegrity(hash, sha256) {
        const valid = await this.ipfsService.verifyFileIntegrity(hash, sha256);
        return { hash, sha256, valid };
    }
};
exports.IpfsController = IpfsController;
__decorate([
    (0, common_1.Get)('info'),
    (0, swagger_1.ApiOperation)({ summary: 'Get IPFS node info' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "getInfo", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload file to IPFS' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('upload-json'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload JSON data to IPFS' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "uploadJson", null);
__decorate([
    (0, common_1.Get)('file/:hash'),
    (0, swagger_1.ApiOperation)({ summary: 'Get file from IPFS' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'File content' }),
    __param(0, (0, common_1.Param)('hash')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)('json/:hash'),
    (0, swagger_1.ApiOperation)({ summary: 'Get JSON from IPFS' }),
    __param(0, (0, common_1.Param)('hash')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "getJson", null);
__decorate([
    (0, common_1.Post)('pin/:hash'),
    (0, swagger_1.ApiOperation)({ summary: 'Pin file to IPFS' }),
    __param(0, (0, common_1.Param)('hash')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "pinFile", null);
__decorate([
    (0, common_1.Post)('unpin/:hash'),
    (0, swagger_1.ApiOperation)({ summary: 'Unpin file from IPFS' }),
    __param(0, (0, common_1.Param)('hash')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "unpinFile", null);
__decorate([
    (0, common_1.Get)('pinned'),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of pinned files' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "getPinnedFiles", null);
__decorate([
    (0, common_1.Post)('verify/:hash'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify file integrity' }),
    __param(0, (0, common_1.Param)('hash')),
    __param(1, (0, common_1.Body)('sha256')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], IpfsController.prototype, "verifyIntegrity", null);
exports.IpfsController = IpfsController = __decorate([
    (0, swagger_1.ApiTags)('ipfs'),
    (0, common_1.Controller)('ipfs'),
    __metadata("design:paramtypes", [ipfs_service_1.IpfsService])
], IpfsController);
//# sourceMappingURL=ipfs.controller.js.map