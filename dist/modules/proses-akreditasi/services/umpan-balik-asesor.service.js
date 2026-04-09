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
exports.UmpanBalikAsesorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const umpan_balik_asesor_entity_1 = require("../entities/umpan-balik-asesor.entity");
let UmpanBalikAsesorService = class UmpanBalikAsesorService {
    constructor(umpanBalikAsesorRepository) {
        this.umpanBalikAsesorRepository = umpanBalikAsesorRepository;
    }
    async create(createDto) {
        const entity = this.umpanBalikAsesorRepository.create(createDto);
        return this.umpanBalikAsesorRepository.save(entity);
    }
    async findAll(filter) {
        const queryBuilder = this.umpanBalikAsesorRepository.createQueryBuilder('umpan_balik_asesor');
        if (filter?.alId) {
            queryBuilder.andWhere('umpan_balik_asesor.al_id = :alId', { alId: filter.alId });
        }
        if (filter?.asesorId) {
            queryBuilder.andWhere('umpan_balik_asesor.asesor_id = :asesorId', { asesorId: filter.asesorId });
        }
        return queryBuilder.orderBy('umpan_balik_asesor.created_at', 'DESC').getMany();
    }
    async findOne(id) {
        const entity = await this.umpanBalikAsesorRepository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.NotFoundException(`Umpan Balik Asesor dengan ID ${id} tidak ditemukan`);
        }
        return entity;
    }
    async findByAsesmenLapangan(alId) {
        return this.umpanBalikAsesorRepository.find({
            where: { alId },
            order: { createdAt: 'DESC' },
        });
    }
    async findByAsesor(asesorId) {
        return this.umpanBalikAsesorRepository.find({
            where: { asesorId },
            order: { createdAt: 'DESC' },
        });
    }
    async update(id, updateDto) {
        const entity = await this.findOne(id);
        Object.assign(entity, updateDto);
        return this.umpanBalikAsesorRepository.save(entity);
    }
    async submitFeedback(id, syaratKetentuanDisetujui) {
        const entity = await this.findOne(id);
        entity.syaratKetentuanDisetujui = syaratKetentuanDisetujui;
        entity.wktSyaratKetentuanDisetujui = new Date();
        return this.umpanBalikAsesorRepository.save(entity);
    }
    async remove(id) {
        const entity = await this.findOne(id);
        await this.umpanBalikAsesorRepository.remove(entity);
    }
};
exports.UmpanBalikAsesorService = UmpanBalikAsesorService;
exports.UmpanBalikAsesorService = UmpanBalikAsesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(umpan_balik_asesor_entity_1.UmpanBalikAsesor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UmpanBalikAsesorService);
//# sourceMappingURL=umpan-balik-asesor.service.js.map