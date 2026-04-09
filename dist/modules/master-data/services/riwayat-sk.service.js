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
exports.RiwayatSkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const riwayat_sk_entity_1 = require("../entities/riwayat-sk.entity");
let RiwayatSkService = class RiwayatSkService {
    constructor(riwayatSkRepository) {
        this.riwayatSkRepository = riwayatSkRepository;
    }
    async create(createDto) {
        const entity = this.riwayatSkRepository.create(createDto);
        return this.riwayatSkRepository.save(entity);
    }
    async findAll(filter) {
        const queryBuilder = this.riwayatSkRepository.createQueryBuilder('riwayat_sk');
        if (filter?.prodiId) {
            queryBuilder.andWhere('riwayat_sk.prodi_id = :prodiId', { prodiId: filter.prodiId });
        }
        if (filter?.institusiId) {
            queryBuilder.andWhere('riwayat_sk.institusi_id = :institusiId', { institusiId: filter.institusiId });
        }
        if (filter?.statusSkId) {
            queryBuilder.andWhere('riwayat_sk.status_sk_id = :statusSkId', { statusSkId: filter.statusSkId });
        }
        return queryBuilder.orderBy('riwayat_sk.tahun_sk', 'DESC').getMany();
    }
    async findOne(id) {
        const entity = await this.riwayatSkRepository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.NotFoundException(`Riwayat SK dengan ID ${id} tidak ditemukan`);
        }
        return entity;
    }
    async findByProdi(prodiId) {
        return this.riwayatSkRepository.find({
            where: { prodiId },
            order: { tahunSk: 'DESC' },
        });
    }
    async findByNoSk(noSk) {
        const entity = await this.riwayatSkRepository.findOne({ where: { noSk } });
        if (!entity) {
            throw new common_1.NotFoundException(`Riwayat SK dengan nomor ${noSk} tidak ditemukan`);
        }
        return entity;
    }
    async update(id, updateDto) {
        const entity = await this.findOne(id);
        Object.assign(entity, updateDto);
        return this.riwayatSkRepository.save(entity);
    }
    async remove(id) {
        const entity = await this.findOne(id);
        await this.riwayatSkRepository.remove(entity);
    }
};
exports.RiwayatSkService = RiwayatSkService;
exports.RiwayatSkService = RiwayatSkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(riwayat_sk_entity_1.RiwayatSk)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RiwayatSkService);
//# sourceMappingURL=riwayat-sk.service.js.map