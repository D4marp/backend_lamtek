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
exports.SkemaPembayaranService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const skema_pembayaran_entity_1 = require("../entities/skema-pembayaran.entity");
let SkemaPembayaranService = class SkemaPembayaranService {
    constructor(skemaRepository) {
        this.skemaRepository = skemaRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.skemaRepository.createQueryBuilder('skema');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('skema.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.tipe) {
            queryBuilder.andWhere('skema.tipe = :tipe', { tipe: filters.tipe });
        }
        return queryBuilder.orderBy('skema.namaSkema', 'ASC').getMany();
    }
    async findOne(id) {
        const skema = await this.skemaRepository.findOne({ where: { id } });
        if (!skema) {
            throw new common_1.NotFoundException(`Skema Pembayaran dengan ID ${id} tidak ditemukan`);
        }
        return skema;
    }
    async create(createDto) {
        const existing = await this.skemaRepository.findOne({
            where: { kodeSkema: createDto.kodeSkema }
        });
        if (existing) {
            throw new common_1.ConflictException(`Skema Pembayaran dengan kode ${createDto.kodeSkema} sudah ada`);
        }
        const skema = this.skemaRepository.create(createDto);
        return this.skemaRepository.save(skema);
    }
    async update(id, updateDto) {
        const skema = await this.findOne(id);
        if (updateDto.kodeSkema && updateDto.kodeSkema !== skema.kodeSkema) {
            const existing = await this.skemaRepository.findOne({
                where: { kodeSkema: updateDto.kodeSkema }
            });
            if (existing) {
                throw new common_1.ConflictException(`Skema Pembayaran dengan kode ${updateDto.kodeSkema} sudah ada`);
            }
        }
        Object.assign(skema, updateDto);
        return this.skemaRepository.save(skema);
    }
    async remove(id) {
        const skema = await this.findOne(id);
        await this.skemaRepository.remove(skema);
    }
    async softDelete(id) {
        const skema = await this.findOne(id);
        skema.isActive = false;
        return this.skemaRepository.save(skema);
    }
};
exports.SkemaPembayaranService = SkemaPembayaranService;
exports.SkemaPembayaranService = SkemaPembayaranService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(skema_pembayaran_entity_1.SkemaPembayaran)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkemaPembayaranService);
//# sourceMappingURL=skema-pembayaran.service.js.map