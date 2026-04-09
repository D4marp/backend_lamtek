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
exports.ProdiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prodi_entity_1 = require("../entities/prodi.entity");
let ProdiService = class ProdiService {
    constructor(prodiRepository) {
        this.prodiRepository = prodiRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.prodiRepository.createQueryBuilder('prodi');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('prodi.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.institusiId) {
            queryBuilder.andWhere('prodi.institusiId = :institusiId', { institusiId: filters.institusiId });
        }
        if (filters?.jenjangId) {
            queryBuilder.andWhere('prodi.jenjangId = :jenjangId', { jenjangId: filters.jenjangId });
        }
        return queryBuilder.orderBy('prodi.namaProdi', 'ASC').getMany();
    }
    async findOne(id) {
        const prodi = await this.prodiRepository.findOne({ where: { id } });
        if (!prodi) {
            throw new common_1.NotFoundException(`Program Studi dengan ID ${id} tidak ditemukan`);
        }
        return prodi;
    }
    async findByKode(kode) {
        const prodi = await this.prodiRepository.findOne({ where: { kodeProdi: kode } });
        if (!prodi) {
            throw new common_1.NotFoundException(`Program Studi dengan kode ${kode} tidak ditemukan`);
        }
        return prodi;
    }
    async create(createDto) {
        const existing = await this.prodiRepository.findOne({
            where: { kodeProdi: createDto.kodeProdi }
        });
        if (existing) {
            throw new common_1.ConflictException(`Program Studi dengan kode ${createDto.kodeProdi} sudah ada`);
        }
        const prodi = this.prodiRepository.create(createDto);
        return this.prodiRepository.save(prodi);
    }
    async update(id, updateDto) {
        const prodi = await this.findOne(id);
        if (updateDto.kodeProdi && updateDto.kodeProdi !== prodi.kodeProdi) {
            const existing = await this.prodiRepository.findOne({
                where: { kodeProdi: updateDto.kodeProdi }
            });
            if (existing) {
                throw new common_1.ConflictException(`Program Studi dengan kode ${updateDto.kodeProdi} sudah ada`);
            }
        }
        Object.assign(prodi, updateDto);
        return this.prodiRepository.save(prodi);
    }
    async remove(id) {
        const prodi = await this.findOne(id);
        await this.prodiRepository.remove(prodi);
    }
    async softDelete(id) {
        const prodi = await this.findOne(id);
        prodi.isActive = false;
        return this.prodiRepository.save(prodi);
    }
};
exports.ProdiService = ProdiService;
exports.ProdiService = ProdiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prodi_entity_1.Prodi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdiService);
//# sourceMappingURL=prodi.service.js.map