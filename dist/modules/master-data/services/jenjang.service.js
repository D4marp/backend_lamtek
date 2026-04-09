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
exports.JenjangService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jenjang_entity_1 = require("../entities/jenjang.entity");
let JenjangService = class JenjangService {
    constructor(jenjangRepository) {
        this.jenjangRepository = jenjangRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.jenjangRepository.createQueryBuilder('jenjang');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('jenjang.isActive = :isActive', { isActive: filters.isActive });
        }
        return queryBuilder.orderBy('jenjang.urutan', 'ASC').getMany();
    }
    async findOne(id) {
        const jenjang = await this.jenjangRepository.findOne({ where: { id } });
        if (!jenjang) {
            throw new common_1.NotFoundException(`Jenjang dengan ID ${id} tidak ditemukan`);
        }
        return jenjang;
    }
    async create(createDto) {
        const existing = await this.jenjangRepository.findOne({
            where: { kodeJenjang: createDto.kodeJenjang }
        });
        if (existing) {
            throw new common_1.ConflictException(`Jenjang dengan kode ${createDto.kodeJenjang} sudah ada`);
        }
        const jenjang = this.jenjangRepository.create(createDto);
        return this.jenjangRepository.save(jenjang);
    }
    async update(id, updateDto) {
        const jenjang = await this.findOne(id);
        if (updateDto.kodeJenjang && updateDto.kodeJenjang !== jenjang.kodeJenjang) {
            const existing = await this.jenjangRepository.findOne({
                where: { kodeJenjang: updateDto.kodeJenjang }
            });
            if (existing) {
                throw new common_1.ConflictException(`Jenjang dengan kode ${updateDto.kodeJenjang} sudah ada`);
            }
        }
        Object.assign(jenjang, updateDto);
        return this.jenjangRepository.save(jenjang);
    }
    async remove(id) {
        const jenjang = await this.findOne(id);
        await this.jenjangRepository.remove(jenjang);
    }
    async softDelete(id) {
        const jenjang = await this.findOne(id);
        jenjang.isActive = false;
        return this.jenjangRepository.save(jenjang);
    }
};
exports.JenjangService = JenjangService;
exports.JenjangService = JenjangService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(jenjang_entity_1.Jenjang)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JenjangService);
//# sourceMappingURL=jenjang.service.js.map