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
exports.AsesorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asesor_entity_1 = require("../entities/asesor.entity");
let AsesorService = class AsesorService {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.asesorRepository.createQueryBuilder('asesor');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('asesor.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.jenisAsesor) {
            queryBuilder.andWhere('asesor.jenisAsesor = :jenisAsesor', { jenisAsesor: filters.jenisAsesor });
        }
        if (filters?.status) {
            queryBuilder.andWhere('asesor.status = :status', { status: filters.status });
        }
        return queryBuilder.orderBy('asesor.namaLengkap', 'ASC').getMany();
    }
    async findOne(id) {
        const asesor = await this.asesorRepository.findOne({ where: { id } });
        if (!asesor) {
            throw new common_1.NotFoundException(`Asesor dengan ID ${id} tidak ditemukan`);
        }
        return asesor;
    }
    async findByNidn(nidn) {
        const asesor = await this.asesorRepository.findOne({ where: { nidn } });
        if (!asesor) {
            throw new common_1.NotFoundException(`Asesor dengan NIDN ${nidn} tidak ditemukan`);
        }
        return asesor;
    }
    async create(createDto) {
        const existingNidn = await this.asesorRepository.findOne({
            where: { nidn: createDto.nidn }
        });
        if (existingNidn) {
            throw new common_1.ConflictException(`Asesor dengan NIDN ${createDto.nidn} sudah ada`);
        }
        const existingEmail = await this.asesorRepository.findOne({
            where: { email: createDto.email }
        });
        if (existingEmail) {
            throw new common_1.ConflictException(`Asesor dengan email ${createDto.email} sudah ada`);
        }
        const asesor = this.asesorRepository.create(createDto);
        return this.asesorRepository.save(asesor);
    }
    async update(id, updateDto) {
        const asesor = await this.findOne(id);
        if (updateDto.nidn && updateDto.nidn !== asesor.nidn) {
            const existing = await this.asesorRepository.findOne({
                where: { nidn: updateDto.nidn }
            });
            if (existing) {
                throw new common_1.ConflictException(`Asesor dengan NIDN ${updateDto.nidn} sudah ada`);
            }
        }
        if (updateDto.email && updateDto.email !== asesor.email) {
            const existing = await this.asesorRepository.findOne({
                where: { email: updateDto.email }
            });
            if (existing) {
                throw new common_1.ConflictException(`Asesor dengan email ${updateDto.email} sudah ada`);
            }
        }
        Object.assign(asesor, updateDto);
        return this.asesorRepository.save(asesor);
    }
    async remove(id) {
        const asesor = await this.findOne(id);
        await this.asesorRepository.remove(asesor);
    }
    async softDelete(id) {
        const asesor = await this.findOne(id);
        asesor.isActive = false;
        return this.asesorRepository.save(asesor);
    }
};
exports.AsesorService = AsesorService;
exports.AsesorService = AsesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asesor_entity_1.Asesor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AsesorService);
//# sourceMappingURL=asesor.service.js.map