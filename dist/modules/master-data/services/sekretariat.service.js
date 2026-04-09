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
exports.SekretariatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sekretariat_entity_1 = require("../entities/sekretariat.entity");
let SekretariatService = class SekretariatService {
    constructor(sekretariatRepository) {
        this.sekretariatRepository = sekretariatRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.sekretariatRepository.createQueryBuilder('sekretariat');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('sekretariat.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.jabatan) {
            queryBuilder.andWhere('sekretariat.jabatan = :jabatan', { jabatan: filters.jabatan });
        }
        return queryBuilder.orderBy('sekretariat.namaLengkap', 'ASC').getMany();
    }
    async findOne(id) {
        const sekretariat = await this.sekretariatRepository.findOne({ where: { id } });
        if (!sekretariat) {
            throw new common_1.NotFoundException(`Sekretariat dengan ID ${id} tidak ditemukan`);
        }
        return sekretariat;
    }
    async create(createDto) {
        if (createDto.nip) {
            const existing = await this.sekretariatRepository.findOne({
                where: { nip: createDto.nip }
            });
            if (existing) {
                throw new common_1.ConflictException(`Sekretariat dengan NIP ${createDto.nip} sudah ada`);
            }
        }
        const sekretariat = this.sekretariatRepository.create(createDto);
        return this.sekretariatRepository.save(sekretariat);
    }
    async update(id, updateDto) {
        const sekretariat = await this.findOne(id);
        if (updateDto.nip && updateDto.nip !== sekretariat.nip) {
            const existing = await this.sekretariatRepository.findOne({
                where: { nip: updateDto.nip }
            });
            if (existing) {
                throw new common_1.ConflictException(`Sekretariat dengan NIP ${updateDto.nip} sudah ada`);
            }
        }
        Object.assign(sekretariat, updateDto);
        return this.sekretariatRepository.save(sekretariat);
    }
    async remove(id) {
        const sekretariat = await this.findOne(id);
        await this.sekretariatRepository.remove(sekretariat);
    }
    async softDelete(id) {
        const sekretariat = await this.findOne(id);
        sekretariat.isActive = false;
        return this.sekretariatRepository.save(sekretariat);
    }
};
exports.SekretariatService = SekretariatService;
exports.SekretariatService = SekretariatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sekretariat_entity_1.Sekretariat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SekretariatService);
//# sourceMappingURL=sekretariat.service.js.map