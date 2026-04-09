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
exports.KlasterIlmuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const klaster_ilmu_entity_1 = require("../entities/klaster-ilmu.entity");
let KlasterIlmuService = class KlasterIlmuService {
    constructor(klasterIlmuRepository) {
        this.klasterIlmuRepository = klasterIlmuRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.klasterIlmuRepository.createQueryBuilder('klaster');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('klaster.isActive = :isActive', { isActive: filters.isActive });
        }
        return queryBuilder.orderBy('klaster.namaKlaster', 'ASC').getMany();
    }
    async findOne(id) {
        const klaster = await this.klasterIlmuRepository.findOne({ where: { id } });
        if (!klaster) {
            throw new common_1.NotFoundException(`Klaster Ilmu dengan ID ${id} tidak ditemukan`);
        }
        return klaster;
    }
    async create(createDto) {
        const existing = await this.klasterIlmuRepository.findOne({
            where: { kodeKlaster: createDto.kodeKlaster }
        });
        if (existing) {
            throw new common_1.ConflictException(`Klaster Ilmu dengan kode ${createDto.kodeKlaster} sudah ada`);
        }
        const klaster = this.klasterIlmuRepository.create(createDto);
        return this.klasterIlmuRepository.save(klaster);
    }
    async update(id, updateDto) {
        const klaster = await this.findOne(id);
        if (updateDto.kodeKlaster && updateDto.kodeKlaster !== klaster.kodeKlaster) {
            const existing = await this.klasterIlmuRepository.findOne({
                where: { kodeKlaster: updateDto.kodeKlaster }
            });
            if (existing) {
                throw new common_1.ConflictException(`Klaster Ilmu dengan kode ${updateDto.kodeKlaster} sudah ada`);
            }
        }
        Object.assign(klaster, updateDto);
        return this.klasterIlmuRepository.save(klaster);
    }
    async remove(id) {
        const klaster = await this.findOne(id);
        await this.klasterIlmuRepository.remove(klaster);
    }
    async softDelete(id) {
        const klaster = await this.findOne(id);
        klaster.isActive = false;
        return this.klasterIlmuRepository.save(klaster);
    }
};
exports.KlasterIlmuService = KlasterIlmuService;
exports.KlasterIlmuService = KlasterIlmuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(klaster_ilmu_entity_1.KlasterIlmu)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KlasterIlmuService);
//# sourceMappingURL=klaster-ilmu.service.js.map