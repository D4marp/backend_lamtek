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
exports.UppsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const upps_entity_1 = require("../entities/upps.entity");
let UppsService = class UppsService {
    constructor(uppsRepository) {
        this.uppsRepository = uppsRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.uppsRepository.createQueryBuilder('upps');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('upps.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.institusiId) {
            queryBuilder.andWhere('upps.institusiId = :institusiId', { institusiId: filters.institusiId });
        }
        return queryBuilder.orderBy('upps.namaUpps', 'ASC').getMany();
    }
    async findOne(id) {
        const upps = await this.uppsRepository.findOne({ where: { id } });
        if (!upps) {
            throw new common_1.NotFoundException(`UPPS dengan ID ${id} tidak ditemukan`);
        }
        return upps;
    }
    async create(createDto) {
        const existing = await this.uppsRepository.findOne({
            where: { kodeUpps: createDto.kodeUpps }
        });
        if (existing) {
            throw new common_1.ConflictException(`UPPS dengan kode ${createDto.kodeUpps} sudah ada`);
        }
        const upps = this.uppsRepository.create(createDto);
        return this.uppsRepository.save(upps);
    }
    async update(id, updateDto) {
        const upps = await this.findOne(id);
        if (updateDto.kodeUpps && updateDto.kodeUpps !== upps.kodeUpps) {
            const existing = await this.uppsRepository.findOne({
                where: { kodeUpps: updateDto.kodeUpps }
            });
            if (existing) {
                throw new common_1.ConflictException(`UPPS dengan kode ${updateDto.kodeUpps} sudah ada`);
            }
        }
        Object.assign(upps, updateDto);
        return this.uppsRepository.save(upps);
    }
    async remove(id) {
        const upps = await this.findOne(id);
        await this.uppsRepository.remove(upps);
    }
    async softDelete(id) {
        const upps = await this.findOne(id);
        upps.isActive = false;
        return this.uppsRepository.save(upps);
    }
};
exports.UppsService = UppsService;
exports.UppsService = UppsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(upps_entity_1.Upps)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UppsService);
//# sourceMappingURL=upps.service.js.map