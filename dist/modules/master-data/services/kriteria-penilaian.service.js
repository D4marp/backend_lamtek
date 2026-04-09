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
exports.KriteriaPenilaianService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const kriteria_penilaian_entity_1 = require("../entities/kriteria-penilaian.entity");
let KriteriaPenilaianService = class KriteriaPenilaianService {
    constructor(kriteriaRepository) {
        this.kriteriaRepository = kriteriaRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.kriteriaRepository.createQueryBuilder('kriteria');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('kriteria.isActive = :isActive', { isActive: filters.isActive });
        }
        return queryBuilder.orderBy('kriteria.urutan', 'ASC').getMany();
    }
    async findOne(id) {
        const kriteria = await this.kriteriaRepository.findOne({ where: { id } });
        if (!kriteria) {
            throw new common_1.NotFoundException(`Kriteria Penilaian dengan ID ${id} tidak ditemukan`);
        }
        return kriteria;
    }
    async create(createDto) {
        const existing = await this.kriteriaRepository.findOne({
            where: { kodeKriteria: createDto.kodeKriteria }
        });
        if (existing) {
            throw new common_1.ConflictException(`Kriteria Penilaian dengan kode ${createDto.kodeKriteria} sudah ada`);
        }
        const kriteria = this.kriteriaRepository.create(createDto);
        return this.kriteriaRepository.save(kriteria);
    }
    async update(id, updateDto) {
        const kriteria = await this.findOne(id);
        if (updateDto.kodeKriteria && updateDto.kodeKriteria !== kriteria.kodeKriteria) {
            const existing = await this.kriteriaRepository.findOne({
                where: { kodeKriteria: updateDto.kodeKriteria }
            });
            if (existing) {
                throw new common_1.ConflictException(`Kriteria Penilaian dengan kode ${updateDto.kodeKriteria} sudah ada`);
            }
        }
        Object.assign(kriteria, updateDto);
        return this.kriteriaRepository.save(kriteria);
    }
    async remove(id) {
        const kriteria = await this.findOne(id);
        await this.kriteriaRepository.remove(kriteria);
    }
    async softDelete(id) {
        const kriteria = await this.findOne(id);
        kriteria.isActive = false;
        return this.kriteriaRepository.save(kriteria);
    }
};
exports.KriteriaPenilaianService = KriteriaPenilaianService;
exports.KriteriaPenilaianService = KriteriaPenilaianService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(kriteria_penilaian_entity_1.KriteriaPenilaian)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KriteriaPenilaianService);
//# sourceMappingURL=kriteria-penilaian.service.js.map