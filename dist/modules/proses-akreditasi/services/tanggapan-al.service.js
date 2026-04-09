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
exports.TanggapanAlService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tanggapan_al_entity_1 = require("../entities/tanggapan-al.entity");
let TanggapanAlService = class TanggapanAlService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('tanggapan');
        if (filters?.akreditasiId) {
            query.andWhere('tanggapan.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.laporanId) {
            query.andWhere('tanggapan.laporanId = :laporanId', { laporanId: filters.laporanId });
        }
        if (filters?.prodiId) {
            query.andWhere('tanggapan.prodiId = :prodiId', { prodiId: filters.prodiId });
        }
        if (filters?.status) {
            query.andWhere('tanggapan.status = :status', { status: filters.status });
        }
        query.orderBy('tanggapan.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const tanggapan = await this.repository.findOne({ where: { id } });
        if (!tanggapan) {
            throw new common_1.NotFoundException(`Tanggapan AL dengan ID ${id} tidak ditemukan`);
        }
        return tanggapan;
    }
    async findByLaporan(laporanId) {
        return this.repository.findOne({ where: { laporanId } });
    }
    async create(dto) {
        const tanggapan = this.repository.create(dto);
        return this.repository.save(tanggapan);
    }
    async update(id, dto) {
        const tanggapan = await this.findOne(id);
        Object.assign(tanggapan, dto);
        return this.repository.save(tanggapan);
    }
    async remove(id) {
        const tanggapan = await this.findOne(id);
        await this.repository.remove(tanggapan);
    }
    async submit(id, userId) {
        const tanggapan = await this.findOne(id);
        tanggapan.status = tanggapan_al_entity_1.StatusTanggapan.SUBMITTED;
        tanggapan.tanggalSubmit = new Date();
        tanggapan.submittedBy = userId;
        return this.repository.save(tanggapan);
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.find({
            where: { akreditasiId },
            order: { createdAt: 'DESC' },
        });
    }
};
exports.TanggapanAlService = TanggapanAlService;
exports.TanggapanAlService = TanggapanAlService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tanggapan_al_entity_1.TanggapanAl)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TanggapanAlService);
//# sourceMappingURL=tanggapan-al.service.js.map