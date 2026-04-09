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
exports.UmpanBalikController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const umpan_balik_service_1 = require("../services/umpan-balik.service");
const umpan_balik_dto_1 = require("../dto/umpan-balik.dto");
const umpan_balik_entity_1 = require("../entities/umpan-balik.entity");
let UmpanBalikController = class UmpanBalikController {
    constructor(service) {
        this.service = service;
    }
    async findAll(akreditasiId, dariUserId, untukUserId, jenisFeedback) {
        return this.service.findAll({ akreditasiId, dariUserId, untukUserId, jenisFeedback });
    }
    async findOne(id) {
        return this.service.findOne(id);
    }
    async findByAkreditasi(akreditasiId) {
        return this.service.findByAkreditasi(akreditasiId);
    }
    async getAverageRating(untukUserId) {
        const rating = await this.service.getAverageRating(untukUserId);
        return { averageRating: rating };
    }
    async create(dto) {
        return this.service.create(dto);
    }
    async update(id, dto) {
        return this.service.update(id, dto);
    }
    async remove(id) {
        return this.service.remove(id);
    }
};
exports.UmpanBalikController = UmpanBalikController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all umpan balik' }),
    (0, swagger_1.ApiQuery)({ name: 'akreditasiId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'dariUserId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'untukUserId', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'jenisFeedback', required: false, enum: umpan_balik_entity_1.JenisFeedback }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List umpan balik', type: [umpan_balik_entity_1.UmpanBalik] }),
    __param(0, (0, common_1.Query)('akreditasiId')),
    __param(1, (0, common_1.Query)('dariUserId')),
    __param(2, (0, common_1.Query)('untukUserId')),
    __param(3, (0, common_1.Query)('jenisFeedback')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String]),
    __metadata("design:returntype", Promise)
], UmpanBalikController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get umpan balik by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Umpan balik found', type: umpan_balik_entity_1.UmpanBalik }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('akreditasi/:akreditasiId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get umpan balik by akreditasi ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List umpan balik', type: [umpan_balik_entity_1.UmpanBalik] }),
    __param(0, (0, common_1.Param)('akreditasiId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikController.prototype, "findByAkreditasi", null);
__decorate([
    (0, common_1.Get)('rating/:untukUserId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get average rating for user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Average rating', type: Number }),
    __param(0, (0, common_1.Param)('untukUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikController.prototype, "getAverageRating", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create umpan balik' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Umpan balik created', type: umpan_balik_entity_1.UmpanBalik }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [umpan_balik_dto_1.CreateUmpanBalikDto]),
    __metadata("design:returntype", Promise)
], UmpanBalikController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update umpan balik' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Umpan balik updated', type: umpan_balik_entity_1.UmpanBalik }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, umpan_balik_dto_1.UpdateUmpanBalikDto]),
    __metadata("design:returntype", Promise)
], UmpanBalikController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete umpan balik' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Umpan balik deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UmpanBalikController.prototype, "remove", null);
exports.UmpanBalikController = UmpanBalikController = __decorate([
    (0, swagger_1.ApiTags)('Umpan Balik'),
    (0, common_1.Controller)('proses-akreditasi/umpan-balik'),
    __metadata("design:paramtypes", [umpan_balik_service_1.UmpanBalikService])
], UmpanBalikController);
//# sourceMappingURL=umpan-balik.controller.js.map