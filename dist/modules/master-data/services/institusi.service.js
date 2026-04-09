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
exports.InstitusiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const institusi_entity_1 = require("../entities/institusi.entity");
let InstitusiService = class InstitusiService {
    constructor(institusiRepository) {
        this.institusiRepository = institusiRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.institusiRepository.createQueryBuilder('institusi');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('institusi.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.jenisPt) {
            queryBuilder.andWhere('institusi.jenisPt = :jenisPt', { jenisPt: filters.jenisPt });
        }
        return queryBuilder.orderBy('institusi.namaInstitusi', 'ASC').getMany();
    }
    async findOne(id) {
        const institusi = await this.institusiRepository.findOne({ where: { id } });
        if (!institusi) {
            throw new common_1.NotFoundException(`Institusi dengan ID ${id} tidak ditemukan`);
        }
        return institusi;
    }
    async findByKode(kode) {
        const institusi = await this.institusiRepository.findOne({ where: { kodeInstitusi: kode } });
        if (!institusi) {
            throw new common_1.NotFoundException(`Institusi dengan kode ${kode} tidak ditemukan`);
        }
        return institusi;
    }
    async create(createDto) {
        const existing = await this.institusiRepository.findOne({
            where: { kodeInstitusi: createDto.kodeInstitusi }
        });
        if (existing) {
            throw new common_1.ConflictException(`Institusi dengan kode ${createDto.kodeInstitusi} sudah ada`);
        }
        const institusi = this.institusiRepository.create(createDto);
        return this.institusiRepository.save(institusi);
    }
    async update(id, updateDto) {
        const institusi = await this.findOne(id);
        if (updateDto.kodeInstitusi && updateDto.kodeInstitusi !== institusi.kodeInstitusi) {
            const existing = await this.institusiRepository.findOne({
                where: { kodeInstitusi: updateDto.kodeInstitusi }
            });
            if (existing) {
                throw new common_1.ConflictException(`Institusi dengan kode ${updateDto.kodeInstitusi} sudah ada`);
            }
        }
        Object.assign(institusi, updateDto);
        return this.institusiRepository.save(institusi);
    }
    async remove(id) {
        const institusi = await this.findOne(id);
        await this.institusiRepository.remove(institusi);
    }
    async softDelete(id) {
        const institusi = await this.findOne(id);
        institusi.isActive = false;
        return this.institusiRepository.save(institusi);
    }
};
exports.InstitusiService = InstitusiService;
exports.InstitusiService = InstitusiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(institusi_entity_1.Institusi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InstitusiService);
//# sourceMappingURL=institusi.service.js.map