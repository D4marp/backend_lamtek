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
exports.PembayaranService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pembayaran_entity_1 = require("../entities/pembayaran.entity");
let PembayaranService = class PembayaranService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('pembayaran');
        if (filters?.akreditasiId) {
            query.andWhere('pembayaran.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.status) {
            query.andWhere('pembayaran.status = :status', { status: filters.status });
        }
        query.orderBy('pembayaran.tanggalInvoice', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const pembayaran = await this.repository.findOne({ where: { id } });
        if (!pembayaran) {
            throw new common_1.NotFoundException(`Pembayaran dengan ID ${id} tidak ditemukan`);
        }
        return pembayaran;
    }
    async findByNomorInvoice(nomorInvoice) {
        return this.repository.findOne({ where: { nomorInvoice } });
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.find({
            where: { akreditasiId },
            order: { tanggalInvoice: 'DESC' },
        });
    }
    async create(dto) {
        const existing = await this.findByNomorInvoice(dto.nomorInvoice);
        if (existing) {
            throw new common_1.ConflictException(`Invoice ${dto.nomorInvoice} sudah ada`);
        }
        const pembayaran = this.repository.create(dto);
        return this.repository.save(pembayaran);
    }
    async update(id, dto) {
        const pembayaran = await this.findOne(id);
        if (dto.nomorInvoice && dto.nomorInvoice !== pembayaran.nomorInvoice) {
            const existing = await this.findByNomorInvoice(dto.nomorInvoice);
            if (existing) {
                throw new common_1.ConflictException(`Invoice ${dto.nomorInvoice} sudah ada`);
            }
        }
        Object.assign(pembayaran, dto);
        return this.repository.save(pembayaran);
    }
    async remove(id) {
        const pembayaran = await this.findOne(id);
        await this.repository.remove(pembayaran);
    }
    async pay(id, jumlah, buktiBayarUrl) {
        const pembayaran = await this.findOne(id);
        pembayaran.jumlahDibayar = jumlah;
        pembayaran.tanggalBayar = new Date();
        pembayaran.buktiBayarUrl = buktiBayarUrl;
        pembayaran.status = pembayaran_entity_1.StatusPembayaran.PAID;
        return this.repository.save(pembayaran);
    }
    async verify(id, userId) {
        const pembayaran = await this.findOne(id);
        pembayaran.status = pembayaran_entity_1.StatusPembayaran.VERIFIED;
        pembayaran.verifiedBy = userId;
        pembayaran.verifiedAt = new Date();
        return this.repository.save(pembayaran);
    }
    async reject(id, catatan) {
        const pembayaran = await this.findOne(id);
        pembayaran.status = pembayaran_entity_1.StatusPembayaran.REJECTED;
        pembayaran.catatan = catatan;
        return this.repository.save(pembayaran);
    }
    async findPending() {
        return this.repository.find({
            where: { status: pembayaran_entity_1.StatusPembayaran.PENDING },
            order: { tanggalJatuhTempo: 'ASC' },
        });
    }
    async findOverdue() {
        const today = new Date();
        return this.repository
            .createQueryBuilder('pembayaran')
            .where('pembayaran.status = :status', { status: pembayaran_entity_1.StatusPembayaran.PENDING })
            .andWhere('pembayaran.tanggalJatuhTempo < :today', { today })
            .orderBy('pembayaran.tanggalJatuhTempo', 'ASC')
            .getMany();
    }
};
exports.PembayaranService = PembayaranService;
exports.PembayaranService = PembayaranService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pembayaran_entity_1.Pembayaran)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PembayaranService);
//# sourceMappingURL=pembayaran.service.js.map