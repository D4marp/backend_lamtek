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
exports.RegistrasiProdiBaruController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const registrasi_prodi_baru_service_1 = require("../services/registrasi-prodi-baru.service");
const registrasi_prodi_baru_dto_1 = require("../dto/registrasi-prodi-baru.dto");
const registrasi_prodi_baru_entity_1 = require("../entities/registrasi-prodi-baru.entity");
let RegistrasiProdiBaruController = class RegistrasiProdiBaruController {
    constructor(service) {
        this.service = service;
    }
    async findAll(institusiId, jenjangId, jenisProdi, status) {
        return this.service.findAll({ institusiId, jenjangId, jenisProdi, status });
    }
    async findPending() {
        return this.service.findPending();
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByInstitusi(institusiId) {
        return this.service.findByInstitusi(institusiId);
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async submit(id, userId) {
        return this.service.submit(id, userId);
    }
    async startValidation(id) {
        return this.service.startValidation(id);
    }
    async approve(id) {
        return this.service.approve(id);
    }
    async reject(id, catatan) {
        return this.service.reject(id, catatan);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.RegistrasiProdiBaruController = RegistrasiProdiBaruController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all registrasi prodi baru' }),
    (0, swagger_1.ApiQuery)({ name: 'institusiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'jenjangId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'jenisProdi', required: false, enum: registrasi_prodi_baru_entity_1.JenisProdi }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: registrasi_prodi_baru_entity_1.StatusRegistrasiProdiBaru }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List registrasi', type: [registrasi_prodi_baru_entity_1.RegistrasiProdiBaru] }),
    __param(0, (0, common_1.Query)('institusiId')),
    __param(1, (0, common_1.Query)('jenjangId')),
    __param(2, (0, common_1.Query)('jenisProdi')),
    __param(3, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pending registrations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List pending registrations', type: [registrasi_prodi_baru_entity_1.RegistrasiProdiBaru] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "findPending", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get registrasi by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi found', type: registrasi_prodi_baru_entity_1.RegistrasiProdiBaru }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('institusi/:institusiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get registrasi by institusi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List registrasi', type: [registrasi_prodi_baru_entity_1.RegistrasiProdiBaru] }),
    __param(0, (0, common_1.Param)('institusiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "findByInstitusi", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create registrasi prodi baru' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Registrasi created', type: registrasi_prodi_baru_entity_1.RegistrasiProdiBaru }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registrasi_prodi_baru_dto_1.CreateRegistrasiProdiBaruDto]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update registrasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi updated', type: registrasi_prodi_baru_entity_1.RegistrasiProdiBaru }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, registrasi_prodi_baru_dto_1.UpdateRegistrasiProdiBaruDto]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/submit'),
    (0, swagger_1.ApiOperation)({ summary: 'Submit registrasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi submitted', type: registrasi_prodi_baru_entity_1.RegistrasiProdiBaru }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "submit", null);
__decorate([
    (0, common_1.Put)(':id/validate'),
    (0, swagger_1.ApiOperation)({ summary: 'Start validation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Validation started', type: registrasi_prodi_baru_entity_1.RegistrasiProdiBaru }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "startValidation", null);
__decorate([
    (0, common_1.Put)(':id/approve'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve registrasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi approved', type: registrasi_prodi_baru_entity_1.RegistrasiProdiBaru }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "approve", null);
__decorate([
    (0, common_1.Put)(':id/reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reject registrasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi rejected', type: registrasi_prodi_baru_entity_1.RegistrasiProdiBaru }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('catatan')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "reject", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete registrasi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registrasi deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistrasiProdiBaruController.prototype, "remove", null);
exports.RegistrasiProdiBaruController = RegistrasiProdiBaruController = __decorate([
    (0, swagger_1.ApiTags)('Registrasi Prodi Baru'),
    (0, common_1.Controller)('proses-akreditasi/registrasi-prodi-baru'),
    __metadata("design:paramtypes", [registrasi_prodi_baru_service_1.RegistrasiProdiBaruService])
], RegistrasiProdiBaruController);
//# sourceMappingURL=registrasi-prodi-baru.controller.js.map