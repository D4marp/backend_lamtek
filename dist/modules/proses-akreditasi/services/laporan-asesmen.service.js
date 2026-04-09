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
exports.LaporanAsesmenService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const laporan_asesmen_entity_1 = require("../entities/laporan-asesmen.entity");
let LaporanAsesmenService = class LaporanAsesmenService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('laporan');
        if (filters?.akreditasiId) {
            query.andWhere('laporan.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.asesorId) {
            query.andWhere('laporan.asesorId = :asesorId', { asesorId: filters.asesorId });
        }
        if (filters?.jenisLaporan) {
            query.andWhere('laporan.jenisLaporan = :jenisLaporan', { jenisLaporan: filters.jenisLaporan });
        }
        if (filters?.status) {
            query.andWhere('laporan.status = :status', { status: filters.status });
        }
        query.orderBy('laporan.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const laporan = await this.repository.findOne({ where: { id } });
        if (!laporan) {
            throw new common_1.NotFoundException(`Laporan Asesmen dengan ID ${id} tidak ditemukan`);
        }
        return laporan;
    }
    async findByNomor(nomorLaporan) {
        return this.repository.findOne({ where: { nomorLaporan } });
    }
    async create(dto) {
        const laporan = this.repository.create(dto);
        return this.repository.save(laporan);
    }
    async update(id, dto) {
        const laporan = await this.findOne(id);
        Object.assign(laporan, dto);
        return this.repository.save(laporan);
    }
    async remove(id) {
        const laporan = await this.findOne(id);
        await this.repository.remove(laporan);
    }
    async submit(id) {
        const laporan = await this.findOne(id);
        laporan.status = laporan_asesmen_entity_1.StatusLaporan.SUBMITTED;
        return this.repository.save(laporan);
    }
    async approve(id) {
        const laporan = await this.findOne(id);
        laporan.status = laporan_asesmen_entity_1.StatusLaporan.APPROVED;
        return this.repository.save(laporan);
    }
    async reject(id) {
        const laporan = await this.findOne(id);
        laporan.status = laporan_asesmen_entity_1.StatusLaporan.REJECTED;
        return this.repository.save(laporan);
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.find({
            where: { akreditasiId },
            order: { createdAt: 'DESC' },
        });
    }
};
exports.LaporanAsesmenService = LaporanAsesmenService;
exports.LaporanAsesmenService = LaporanAsesmenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(laporan_asesmen_entity_1.LaporanAsesmen)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LaporanAsesmenService);
//# sourceMappingURL=laporan-asesmen.service.js.map