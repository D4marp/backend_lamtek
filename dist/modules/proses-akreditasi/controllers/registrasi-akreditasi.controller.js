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
exports.RegistrasiAkreditasiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const registrasi_akreditasi_service_1 = require("../services/registrasi-akreditasi.service");
const registrasi_akreditasi_dto_1 = require("../dto/registrasi-akreditasi.dto");
const registrasi_akreditasi_entity_1 = require("../entities/registrasi-akreditasi.entity");
let RegistrasiAkreditasiController = class RegistrasiAkreditasiController {
    constructor(registrasiService) {
        this.registrasiService = registrasiService;
    }
    create(createDto) {
        return this.registrasiService.create(createDto);
    }
    findAll(prodiId, institusiId, status, tahunAkademik) {
        return this.registrasiService.findAll({ prodiId, institusiId, status, tahunAkademik });
    }
    findOne(id) {
        return this.registrasiService.findOne(id);
    }
    findByNomorRegistrasi(nomorRegistrasi) {
        return this.registrasiService.findByNomorRegistrasi(nomorRegistrasi);
    }
    findByProdi(prodiId) {
        return this.registrasiService.findByProdi(prodiId);
    }
    update(id, updateDto) {
        return this.registrasiService.update(id, updateDto);
    }
    submit(id) {
        return this.registrasiService.submit(id);
    }
    verify(id, verifikatorId, catatan) {
        return this.registrasiService.verify(id, verifikatorId, catatan);
    }
    approve(id) {
        return this.registrasiService.approve(id);
    }
    reject(id, catatan) {
        return this.registrasiService.reject(id, catatan);
    }
    cancel(id) {
        return this.registrasiService.cancel(id);
    }
    remove(id) {
        return this.registrasiService.remove(id);
    }
};
exports.RegistrasiAkreditasiController = RegistrasiAkreditasiController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buat registrasi akreditasi baru' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Registrasi akreditasi berhasil dibuat', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrasi_akreditasi_dto_1.CreateRegistrasiAkreditasiDto]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil semua registrasi akreditasi' }),
    (0, swagger_1.ApiQuery)({ name: 'prodiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'institusiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: registrasi_akreditasi_entity_1.StatusRegistrasi }),
    (0, swagger_1.ApiQuery)({ name: 'tahunAkademik', required: false, type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar registrasi akreditasi', type: [registrasi_akreditasi_entity_1.RegistrasiAkreditasi] }),
    __param(0, (0, common_1.Query)('prodiId')),
    __param(1, (0, common_1.Query)('institusiId')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('tahunAkademik')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil registrasi akreditasi berdasarkan ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Data registrasi akreditasi', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('nomor/:nomorRegistrasi'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil registrasi berdasarkan nomor registrasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Data registrasi akreditasi', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Param)('nomorRegistrasi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "findByNomorRegistrasi", null);
__decorate([
    (0, common_1.Get)('prodi/:prodiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Ambil registrasi berdasarkan prodi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Daftar registrasi akreditasi', type: [registrasi_akreditasi_entity_1.RegistrasiAkreditasi] }),
    __param(0, (0, common_1.Param)('prodiId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "findByProdi", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update registrasi akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi akreditasi berhasil diupdate', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, registrasi_akreditasi_dto_1.UpdateRegistrasiAkreditasiDto]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/submit'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit registrasi akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi berhasil disubmit', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "submit", null);
__decorate([
    (0, common_1.Post)(':id/verify'),
    (0, swagger_1.ApiOperation)({ summary: 'Verifikasi registrasi akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi berhasil diverifikasi', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('verifikatorId')),
    __param(2, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)(':id/approve'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve registrasi akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi berhasil diapprove', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "approve", null);
__decorate([
    (0, common_1.Post)(':id/reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reject registrasi akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi berhasil direject', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "reject", null);
__decorate([
    (0, common_1.Post)(':id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Batalkan registrasi akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi berhasil dibatalkan', type: registrasi_akreditasi_entity_1.RegistrasiAkreditasi }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "cancel", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Hapus registrasi akreditasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi akreditasi berhasil dihapus' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiAkreditasiController.prototype, "remove", null);
exports.RegistrasiAkreditasiController = RegistrasiAkreditasiController = __decorate([
    (0, swagger_1.ApiTags)('Registrasi Akreditasi'),
    (0, common_1.Controller)('proses-akreditasi/registrasi-akreditasi'),
    __metadata("design:paramtypes", [registrasi_akreditasi_service_1.RegistrasiAkreditasiService])
], RegistrasiAkreditasiController);
//# sourceMappingURL=registrasi-akreditasi.controller.js.map