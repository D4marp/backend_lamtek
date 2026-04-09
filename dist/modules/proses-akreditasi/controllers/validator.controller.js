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
exports.ValidatorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const validator_service_1 = require("../services/validator.service");
const validator_dto_1 = require("../dto/validator.dto");
const validator_entity_1 = require("../entities/validator.entity");
let ValidatorController = class ValidatorController {
    constructor(service) {
        this.service = service;
    }
    async findAll(registrasiProdiBaruId, validatorUserId, status) {
        return this.service.findAll({ registrasiProdiBaruId, validatorUserId, status });
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByRegistrasi(registrasiProdiBaruId) {
        return this.service.findByRegistrasi(registrasiProdiBaruId);
    }
    async findByValidator(validatorUserId) {
        return this.service.findByValidator(validatorUserId);
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async assign(id, userId) {
        return this.service.assign(id, userId);
    }
    async startValidation(id) {
        return this.service.startValidation(id);
    }
    async complete(id, hasilValidasi, isValid, rekomendasi) {
        return this.service.complete(id, hasilValidasi, isValid, rekomendasi);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.ValidatorController = ValidatorController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all validator assignments' }),
    (0, swagger_1.ApiQuery)({ name: 'registrasiProdiBaruId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'validatorUserId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: validator_entity_1.StatusValidator }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List validator', type: [validator_entity_1.Validator] }),
    __param(0, (0, common_1.Query)('registrasiProdiBaruId')),
    __param(1, (0, common_1.Query)('validatorUserId')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get validator by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Validator found', type: validator_entity_1.Validator }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('registrasi/:registrasiProdiBaruId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get validators by registrasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List validators', type: [validator_entity_1.Validator] }),
    __param(0, (0, common_1.Param)('registrasiProdiBaruId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "findByRegistrasi", null);
__decorate([
    (0, common_1.Get)('user/:validatorUserId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get validator assignments by user ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List validator assignments', type: [validator_entity_1.Validator] }),
    __param(0, (0, common_1.Param)('validatorUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "findByValidator", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create validator assignment' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Validator created', type: validator_entity_1.Validator }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validator_dto_1.CreateValidatorDto]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update validator' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Validator updated', type: validator_entity_1.Validator }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, validator_dto_1.UpdateValidatorDto]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/assign'),
    (0, swagger_1.ApiOperation)({ summary: 'Assign validator' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Validator assigned', type: validator_entity_1.Validator }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "assign", null);
__decorate([
    (0, common_1.Put)(':id/start'),
    (0, swagger_1.ApiOperation)({ summary: 'Start validation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Validation started', type: validator_entity_1.Validator }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "startValidation", null);
__decorate([
    (0, common_1.Put)(':id/complete'),
    (0, swagger_1.ApiOperation)({ summary: 'Complete validation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Validation completed', type: validator_entity_1.Validator }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('hasilValidasi')),
    __param(2, (0, common_1.Body)('isValid')),
    __param(3, (0, common_1.Body)('rekomendasi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Boolean, String]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "complete", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete validator assignment' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Validator deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValidatorController.prototype, "remove", null);
exports.ValidatorController = ValidatorController = __decorate([
    (0, swagger_1.ApiTags)('Validator'),
    (0, common_1.Controller)('proses-akreditasi/validator'),
    __metadata("design:paramtypes", [validator_service_1.ValidatorService])
], ValidatorController);
//# sourceMappingURL=validator.controller.js.map