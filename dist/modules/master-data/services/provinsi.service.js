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
exports.ProvinsiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const provinsi_entity_1 = require("../entities/provinsi.entity");
let ProvinsiService = class ProvinsiService {
    constructor(provinsiRepository) {
        this.provinsiRepository = provinsiRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.provinsiRepository.createQueryBuilder('provinsi');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('provinsi.isActive = :isActive', { isActive: filters.isActive });
        }
        return queryBuilder.orderBy('provinsi.namaProvinsi', 'ASC').getMany();
    }
    async findOne(id) {
        const provinsi = await this.provinsiRepository.findOne({ where: { id } });
        if (!provinsi) {
            throw new common_1.NotFoundException(`Provinsi dengan ID ${id} tidak ditemukan`);
        }
        return provinsi;
    }
    async create(createDto) {
        const existing = await this.provinsiRepository.findOne({
            where: { kodeProvinsi: createDto.kodeProvinsi }
        });
        if (existing) {
            throw new common_1.ConflictException(`Provinsi dengan kode ${createDto.kodeProvinsi} sudah ada`);
        }
        const provinsi = this.provinsiRepository.create(createDto);
        return this.provinsiRepository.save(provinsi);
    }
    async update(id, updateDto) {
        const provinsi = await this.findOne(id);
        if (updateDto.kodeProvinsi && updateDto.kodeProvinsi !== provinsi.kodeProvinsi) {
            const existing = await this.provinsiRepository.findOne({
                where: { kodeProvinsi: updateDto.kodeProvinsi }
            });
            if (existing) {
                throw new common_1.ConflictException(`Provinsi dengan kode ${updateDto.kodeProvinsi} sudah ada`);
            }
        }
        Object.assign(provinsi, updateDto);
        return this.provinsiRepository.save(provinsi);
    }
    async remove(id) {
        const provinsi = await this.findOne(id);
        await this.provinsiRepository.remove(provinsi);
    }
    async softDelete(id) {
        const provinsi = await this.findOne(id);
        provinsi.isActive = false;
        return this.provinsiRepository.save(provinsi);
    }
};
exports.ProvinsiService = ProvinsiService;
exports.ProvinsiService = ProvinsiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(provinsi_entity_1.Provinsi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProvinsiService);
//# sourceMappingURL=provinsi.service.js.map