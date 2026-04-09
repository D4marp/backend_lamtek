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
exports.AsesmenKecukupanController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const asesmen_kecukupan_service_1 = require("./asesmen-kecukupan.service");
let AsesmenKecukupanController = class AsesmenKecukupanController {
    constructor(service) {
        this.service = service;
    }
    async create(data) {
        return this.service.create(data);
    }
    async findAll(page, limit) {
        return this.service.findAll({ page, limit });
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByAkreditasi(akreditasiId) {
        return this.service.findByAkreditasi(akreditasiId);
    }
    async submitLaporan(id, file, deskripsi) {
        return this.service.submitLaporan(id, file, deskripsi);
    }
    async tetapkanHasil(id, data) {
        return this.service.tetapkanHasil(id, data);
    }
};
exports.AsesmenKecukupanController = AsesmenKecukupanController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buat asesmen kecukupan baru' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AsesmenKecukupanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get semua asesmen kecukupan' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AsesmenKecukupanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get asesmen kecukupan by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsesmenKecukupanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get asesmen kecukupan by akreditasi ID' }),
    __param(0, (0, common_1.Param)('akreditasiId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsesmenKecukupanController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Post)(':id/laporan'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit laporan AK' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)('deskripsi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof Express !== "undefined" && (_a = Express.Multer) !== void 0 && _a.File) === "function" ? _b : Object, String]),
    __metadata("design:returntype", Promise)
], AsesmenKecukupanController.prototype, "submitLaporan", null);
__decorate([
    (0, common_1.Put)(':id/hasil'),
    (0, swagger_1.ApiOperation)({ summary: 'Tetapkan hasil AK oleh KEA' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AsesmenKecukupanController.prototype, "tetapkanHasil", null);
exports.AsesmenKecukupanController = AsesmenKecukupanController = __decorate([
    (0, swagger_1.ApiTags)('asesmen-kecukupan'),
    (0, common_1.Controller)('asesmen-kecukupan'),
    __metadata("design:paramtypes", [asesmen_kecukupan_service_1.AsesmenKecukupanService])
], AsesmenKecukupanController);
//# sourceMappingURL=asesmen-kecukupan.controller.js.map