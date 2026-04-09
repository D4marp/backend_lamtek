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
exports.KlasterProdiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const klaster_prodi_entity_1 = require("../entities/klaster-prodi.entity");
let KlasterProdiService = class KlasterProdiService {
    constructor(klasterProdiRepository) {
        this.klasterProdiRepository = klasterProdiRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.klasterProdiRepository.createQueryBuilder('klaster');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('klaster.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.klasterIlmuId) {
            queryBuilder.andWhere('klaster.klasterIlmuId = :klasterIlmuId', { klasterIlmuId: filters.klasterIlmuId });
        }
        return queryBuilder.orderBy('klaster.namaKlaster', 'ASC').getMany();
    }
    async findOne(id) {
        const klaster = await this.klasterProdiRepository.findOne({ where: { id } });
        if (!klaster) {
            throw new common_1.NotFoundException(`Klaster Prodi dengan ID ${id} tidak ditemukan`);
        }
        return klaster;
    }
    async create(createDto) {
        const existing = await this.klasterProdiRepository.findOne({
            where: { kodeKlaster: createDto.kodeKlaster }
        });
        if (existing) {
            throw new common_1.ConflictException(`Klaster Prodi dengan kode ${createDto.kodeKlaster} sudah ada`);
        }
        const klaster = this.klasterProdiRepository.create(createDto);
        return this.klasterProdiRepository.save(klaster);
    }
    async update(id, updateDto) {
        const klaster = await this.findOne(id);
        if (updateDto.kodeKlaster && updateDto.kodeKlaster !== klaster.kodeKlaster) {
            const existing = await this.klasterProdiRepository.findOne({
                where: { kodeKlaster: updateDto.kodeKlaster }
            });
            if (existing) {
                throw new common_1.ConflictException(`Klaster Prodi dengan kode ${updateDto.kodeKlaster} sudah ada`);
            }
        }
        Object.assign(klaster, updateDto);
        return this.klasterProdiRepository.save(klaster);
    }
    async remove(id) {
        const klaster = await this.findOne(id);
        await this.klasterProdiRepository.remove(klaster);
    }
    async softDelete(id) {
        const klaster = await this.findOne(id);
        klaster.isActive = false;
        return this.klasterProdiRepository.save(klaster);
    }
};
exports.KlasterProdiService = KlasterProdiService;
exports.KlasterProdiService = KlasterProdiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(klaster_prodi_entity_1.KlasterProdi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KlasterProdiService);
//# sourceMappingURL=klaster-prodi.service.js.map