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
exports.SkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sk_entity_1 = require("../entities/sk.entity");
let SkService = class SkService {
    constructor(skRepository) {
        this.skRepository = skRepository;
    }
    async create(createDto) {
        const entity = this.skRepository.create(createDto);
        return this.skRepository.save(entity);
    }
    async findAll(filter) {
        const queryBuilder = this.skRepository.createQueryBuilder('sk');
        if (filter?.prodiId) {
            queryBuilder.andWhere('sk.prodi_id = :prodiId', { prodiId: filter.prodiId });
        }
        if (filter?.institusiId) {
            queryBuilder.andWhere('sk.institusi_id = :institusiId', { institusiId: filter.institusiId });
        }
        if (filter?.tahunSk) {
            queryBuilder.andWhere('sk.tahun_sk = :tahunSk', { tahunSk: filter.tahunSk });
        }
        return queryBuilder.orderBy('sk.tahun_sk', 'DESC').getMany();
    }
    async findOne(id) {
        const entity = await this.skRepository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.NotFoundException(`SK dengan ID ${id} tidak ditemukan`);
        }
        return entity;
    }
    async findByNoSk(noSk) {
        const entity = await this.skRepository.findOne({ where: { noSk } });
        if (!entity) {
            throw new common_1.NotFoundException(`SK dengan nomor ${noSk} tidak ditemukan`);
        }
        return entity;
    }
    async findByProdi(prodiId) {
        return this.skRepository.find({
            where: { prodiId },
            order: { tahunSk: 'DESC' },
        });
    }
    async findByKodePt(kodePt) {
        return this.skRepository.find({
            where: { kodePt },
            order: { tahunSk: 'DESC' },
        });
    }
    async update(id, updateDto) {
        const entity = await this.findOne(id);
        Object.assign(entity, updateDto);
        return this.skRepository.save(entity);
    }
    async remove(id) {
        const entity = await this.findOne(id);
        await this.skRepository.remove(entity);
    }
};
exports.SkService = SkService;
exports.SkService = SkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sk_entity_1.Sk)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkService);
//# sourceMappingURL=sk.service.js.map