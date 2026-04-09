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
exports.KeputusanMaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const keputusan_ma_entity_1 = require("../entities/keputusan-ma.entity");
let KeputusanMaService = class KeputusanMaService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('keputusan');
        if (filters?.akreditasiId) {
            query.andWhere('keputusan.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.status) {
            query.andWhere('keputusan.status = :status', { status: filters.status });
        }
        if (filters?.peringkatFinal) {
            query.andWhere('keputusan.peringkatFinal = :peringkatFinal', { peringkatFinal: filters.peringkatFinal });
        }
        query.orderBy('keputusan.tanggalSidang', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const keputusan = await this.repository.findOne({ where: { id } });
        if (!keputusan) {
            throw new common_1.NotFoundException(`Keputusan MA dengan ID ${id} tidak ditemukan`);
        }
        return keputusan;
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.findOne({ where: { akreditasiId } });
    }
    async findByNomorSidang(nomorSidang) {
        return this.repository.findOne({ where: { nomorSidang } });
    }
    async create(dto) {
        const keputusan = this.repository.create(dto);
        return this.repository.save(keputusan);
    }
    async update(id, dto) {
        const keputusan = await this.findOne(id);
        Object.assign(keputusan, dto);
        return this.repository.save(keputusan);
    }
    async remove(id) {
        const keputusan = await this.findOne(id);
        await this.repository.remove(keputusan);
    }
    async setujui(id, userId, peringkat, nilai, masaBerlaku) {
        const keputusan = await this.findOne(id);
        keputusan.status = keputusan_ma_entity_1.StatusKeputusan.DISETUJUI;
        keputusan.peringkatFinal = peringkat;
        keputusan.nilaiFinal = nilai;
        keputusan.masaBerlaku = masaBerlaku;
        keputusan.diputuskanOleh = userId;
        return this.repository.save(keputusan);
    }
    async tolak(id, catatan) {
        const keputusan = await this.findOne(id);
        keputusan.status = keputusan_ma_entity_1.StatusKeputusan.DITOLAK;
        keputusan.catatan = catatan;
        return this.repository.save(keputusan);
    }
};
exports.KeputusanMaService = KeputusanMaService;
exports.KeputusanMaService = KeputusanMaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(keputusan_ma_entity_1.KeputusanMa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KeputusanMaService);
//# sourceMappingURL=keputusan-ma.service.js.map