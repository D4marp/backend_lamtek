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
exports.UmpanBalikService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const umpan_balik_entity_1 = require("../entities/umpan-balik.entity");
let UmpanBalikService = class UmpanBalikService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('umpan');
        if (filters?.akreditasiId) {
            query.andWhere('umpan.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.dariUserId) {
            query.andWhere('umpan.dariUserId = :dariUserId', { dariUserId: filters.dariUserId });
        }
        if (filters?.untukUserId) {
            query.andWhere('umpan.untukUserId = :untukUserId', { untukUserId: filters.untukUserId });
        }
        if (filters?.jenisFeedback) {
            query.andWhere('umpan.jenisFeedback = :jenisFeedback', { jenisFeedback: filters.jenisFeedback });
        }
        query.orderBy('umpan.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const umpan = await this.repository.findOne({ where: { id } });
        if (!umpan) {
            throw new common_1.NotFoundException(`Umpan Balik dengan ID ${id} tidak ditemukan`);
        }
        return umpan;
    }
    async create(dto) {
        const umpan = this.repository.create({
            ...dto,
            tanggalSubmit: new Date(),
        });
        return this.repository.save(umpan);
    }
    async update(id, dto) {
        const umpan = await this.findOne(id);
        Object.assign(umpan, dto);
        return this.repository.save(umpan);
    }
    async remove(id) {
        const umpan = await this.findOne(id);
        await this.repository.remove(umpan);
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.find({
            where: { akreditasiId },
            order: { createdAt: 'DESC' },
        });
    }
    async getAverageRating(untukUserId) {
        const result = await this.repository
            .createQueryBuilder('umpan')
            .select('AVG(umpan.rating)', 'avgRating')
            .where('umpan.untukUserId = :untukUserId', { untukUserId })
            .getRawOne();
        return result?.avgRating || 0;
    }
};
exports.UmpanBalikService = UmpanBalikService;
exports.UmpanBalikService = UmpanBalikService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(umpan_balik_entity_1.UmpanBalik)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UmpanBalikService);
//# sourceMappingURL=umpan-balik.service.js.map