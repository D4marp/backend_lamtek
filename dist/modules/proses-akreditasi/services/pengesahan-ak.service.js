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
exports.PengesahanAkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pengesahan_ak_entity_1 = require("../entities/pengesahan-ak.entity");
let PengesahanAkService = class PengesahanAkService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('pengesahan');
        if (filters?.akreditasiId) {
            query.andWhere('pengesahan.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.status) {
            query.andWhere('pengesahan.status = :status', { status: filters.status });
        }
        query.orderBy('pengesahan.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const pengesahan = await this.repository.findOne({ where: { id } });
        if (!pengesahan) {
            throw new common_1.NotFoundException(`Pengesahan AK dengan ID ${id} tidak ditemukan`);
        }
        return pengesahan;
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.findOne({ where: { akreditasiId } });
    }
    async create(dto) {
        const pengesahan = this.repository.create(dto);
        return this.repository.save(pengesahan);
    }
    async update(id, dto) {
        const pengesahan = await this.findOne(id);
        Object.assign(pengesahan, dto);
        return this.repository.save(pengesahan);
    }
    async remove(id) {
        const pengesahan = await this.findOne(id);
        await this.repository.remove(pengesahan);
    }
    async sahkan(id, userId) {
        const pengesahan = await this.findOne(id);
        pengesahan.status = pengesahan_ak_entity_1.StatusPengesahan.DISAHKAN;
        pengesahan.tanggalPengesahan = new Date();
        pengesahan.disahkanOleh = userId;
        return this.repository.save(pengesahan);
    }
    async tolak(id, catatan) {
        const pengesahan = await this.findOne(id);
        pengesahan.status = pengesahan_ak_entity_1.StatusPengesahan.DITOLAK;
        pengesahan.catatan = catatan;
        return this.repository.save(pengesahan);
    }
    async revisi(id, catatan) {
        const pengesahan = await this.findOne(id);
        pengesahan.status = pengesahan_ak_entity_1.StatusPengesahan.REVISI;
        pengesahan.catatan = catatan;
        return this.repository.save(pengesahan);
    }
};
exports.PengesahanAkService = PengesahanAkService;
exports.PengesahanAkService = PengesahanAkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pengesahan_ak_entity_1.PengesahanAk)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PengesahanAkService);
//# sourceMappingURL=pengesahan-ak.service.js.map