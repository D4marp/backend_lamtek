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
exports.PenawaranAsesorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const penawaran_asesor_entity_1 = require("../entities/penawaran-asesor.entity");
let PenawaranAsesorService = class PenawaranAsesorService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('penawaran');
        if (filters?.akreditasiId) {
            query.andWhere('penawaran.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.asesorId) {
            query.andWhere('penawaran.asesorId = :asesorId', { asesorId: filters.asesorId });
        }
        if (filters?.status) {
            query.andWhere('penawaran.status = :status', { status: filters.status });
        }
        if (filters?.jenisAsesmen) {
            query.andWhere('penawaran.jenisAsesmen = :jenisAsesmen', { jenisAsesmen: filters.jenisAsesmen });
        }
        query.orderBy('penawaran.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const penawaran = await this.repository.findOne({ where: { id } });
        if (!penawaran) {
            throw new common_1.NotFoundException(`Penawaran Asesor dengan ID ${id} tidak ditemukan`);
        }
        return penawaran;
    }
    async create(dto) {
        const existing = await this.repository.findOne({
            where: {
                akreditasiId: dto.akreditasiId,
                asesorId: dto.asesorId,
                jenisAsesmen: dto.jenisAsesmen || 'AK',
            },
        });
        if (existing && existing.status !== penawaran_asesor_entity_1.StatusPenawaran.DITOLAK && existing.status !== penawaran_asesor_entity_1.StatusPenawaran.EXPIRED) {
            throw new common_1.ConflictException('Penawaran untuk asesor ini sudah ada');
        }
        const penawaran = this.repository.create(dto);
        return this.repository.save(penawaran);
    }
    async update(id, dto) {
        const penawaran = await this.findOne(id);
        Object.assign(penawaran, dto);
        return this.repository.save(penawaran);
    }
    async remove(id) {
        const penawaran = await this.findOne(id);
        await this.repository.remove(penawaran);
    }
    async updateStatus(id, status) {
        const penawaran = await this.findOne(id);
        penawaran.status = status;
        return this.repository.save(penawaran);
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.find({
            where: { akreditasiId },
            order: { createdAt: 'DESC' },
        });
    }
    async findByAsesor(asesorId) {
        return this.repository.find({
            where: { asesorId },
            order: { createdAt: 'DESC' },
        });
    }
};
exports.PenawaranAsesorService = PenawaranAsesorService;
exports.PenawaranAsesorService = PenawaranAsesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(penawaran_asesor_entity_1.PenawaranAsesor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PenawaranAsesorService);
//# sourceMappingURL=penawaran-asesor.service.js.map