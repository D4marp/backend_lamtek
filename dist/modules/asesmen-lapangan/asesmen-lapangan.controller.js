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
exports.AsesmenLapanganController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const asesmen_lapangan_service_1 = require("./asesmen-lapangan.service");
let AsesmenLapanganController = class AsesmenLapanganController {
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
    async setJadwal(id, data, suratTugasFile) {
        return this.service.setJadwalVisitasi(id, {
            ...data,
            suratTugasFile,
        });
    }
    async submitLaporan(id, files) {
        return this.service.submitLaporan(id, {
            laporanAL: files.laporanAL?.[0],
            beritaAcara: files.beritaAcara?.[0],
            umpanBalik: files.umpanBalik?.[0],
        });
    }
    async submitTanggapan(id, file, dariUPPS) {
        return this.service.submitTanggapan(id, file, dariUPPS === 'true');
    }
    async tetapkanHasil(id, data) {
        return this.service.tetapkanHasil(id, data);
    }
};
exports.AsesmenLapanganController = AsesmenLapanganController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buat asesmen lapangan baru' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AsesmenLapanganController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get semua asesmen lapangan' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AsesmenLapanganController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get asesmen lapangan by ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsesmenLapanganController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get asesmen lapangan by akreditasi ID' }),
    __param(0, (0, common_1.Param)('akreditasiId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AsesmenLapanganController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Put)(':id/jadwal'),
    (0, swagger_1.ApiOperation)({ summary: 'Set jadwal visitasi' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('suratTugas')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], AsesmenLapanganController.prototype, "setJadwal", null);
__decorate([
    (0, common_1.Post)(':id/laporan'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit laporan AL' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'laporanAL', maxCount: 1 },
        { name: 'beritaAcara', maxCount: 1 },
        { name: 'umpanBalik', maxCount: 1 },
    ])),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AsesmenLapanganController.prototype, "submitLaporan", null);
__decorate([
    (0, common_1.Post)(':id/tanggapan'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit tanggapan AL' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)('dariUPPS')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, String]),
    __metadata("design:returntype", Promise)
], AsesmenLapanganController.prototype, "submitTanggapan", null);
__decorate([
    (0, common_1.Put)(':id/hasil'),
    (0, swagger_1.ApiOperation)({ summary: 'Tetapkan hasil AL oleh KEA' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AsesmenLapanganController.prototype, "tetapkanHasil", null);
exports.AsesmenLapanganController = AsesmenLapanganController = __decorate([
    (0, swagger_1.ApiTags)('asesmen-lapangan'),
    (0, common_1.Controller)('asesmen-lapangan'),
    __metadata("design:paramtypes", [asesmen_lapangan_service_1.AsesmenLapanganService])
], AsesmenLapanganController);
//# sourceMappingURL=asesmen-lapangan.controller.js.map