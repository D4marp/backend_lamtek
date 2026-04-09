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
exports.SkAkreditasiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sk_akreditasi_entity_1 = require("../entities/sk-akreditasi.entity");
let SkAkreditasiService = class SkAkreditasiService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('sk');
        if (filters?.akreditasiId) {
            query.andWhere('sk.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.status) {
            query.andWhere('sk.status = :status', { status: filters.status });
        }
        if (filters?.peringkat) {
            query.andWhere('sk.peringkat = :peringkat', { peringkat: filters.peringkat });
        }
        query.orderBy('sk.tanggalSk', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const sk = await this.repository.findOne({ where: { id } });
        if (!sk) {
            throw new common_1.NotFoundException(`SK Akreditasi dengan ID ${id} tidak ditemukan`);
        }
        return sk;
    }
    async findByNomorSk(nomorSk) {
        return this.repository.findOne({ where: { nomorSk } });
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.findOne({ where: { akreditasiId } });
    }
    async create(dto) {
        const existing = await this.findByNomorSk(dto.nomorSk);
        if (existing) {
            throw new common_1.ConflictException(`SK dengan nomor ${dto.nomorSk} sudah ada`);
        }
        const sk = this.repository.create(dto);
        return this.repository.save(sk);
    }
    async update(id, dto) {
        const sk = await this.findOne(id);
        if (dto.nomorSk && dto.nomorSk !== sk.nomorSk) {
            const existing = await this.findByNomorSk(dto.nomorSk);
            if (existing) {
                throw new common_1.ConflictException(`SK dengan nomor ${dto.nomorSk} sudah ada`);
            }
        }
        Object.assign(sk, dto);
        return this.repository.save(sk);
    }
    async remove(id) {
        const sk = await this.findOne(id);
        await this.repository.remove(sk);
    }
    async generate(id) {
        const sk = await this.findOne(id);
        sk.status = sk_akreditasi_entity_1.StatusSk.GENERATED;
        return this.repository.save(sk);
    }
    async sign(id, penandatangan, jabatan) {
        const sk = await this.findOne(id);
        sk.status = sk_akreditasi_entity_1.StatusSk.SIGNED;
        sk.ditandatanganiOleh = penandatangan;
        sk.jabatanPenandatangan = jabatan;
        return this.repository.save(sk);
    }
    async publish(id, ipfsHash, blockchainTxHash, blockNumber) {
        const sk = await this.findOne(id);
        sk.status = sk_akreditasi_entity_1.StatusSk.PUBLISHED;
        sk.ipfsHash = ipfsHash;
        sk.blockchainTxHash = blockchainTxHash;
        sk.blockchainBlockNumber = blockNumber;
        return this.repository.save(sk);
    }
    async revoke(id, catatan) {
        const sk = await this.findOne(id);
        sk.status = sk_akreditasi_entity_1.StatusSk.REVOKED;
        sk.catatan = catatan;
        return this.repository.save(sk);
    }
    async findActive() {
        const today = new Date();
        return this.repository
            .createQueryBuilder('sk')
            .where('sk.status = :status', { status: sk_akreditasi_entity_1.StatusSk.PUBLISHED })
            .andWhere('sk.tanggalBerakhir >= :today', { today })
            .orderBy('sk.tanggalSk', 'DESC')
            .getMany();
    }
    async findExpiringSoon(days = 90) {
        const today = new Date();
        const futureDate = new Date();
        futureDate.setDate(today.getDate() + days);
        return this.repository
            .createQueryBuilder('sk')
            .where('sk.status = :status', { status: sk_akreditasi_entity_1.StatusSk.PUBLISHED })
            .andWhere('sk.tanggalBerakhir BETWEEN :today AND :futureDate', { today, futureDate })
            .orderBy('sk.tanggalBerakhir', 'ASC')
            .getMany();
    }
};
exports.SkAkreditasiService = SkAkreditasiService;
exports.SkAkreditasiService = SkAkreditasiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sk_akreditasi_entity_1.SkAkreditasi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkAkreditasiService);
//# sourceMappingURL=sk-akreditasi.service.js.map