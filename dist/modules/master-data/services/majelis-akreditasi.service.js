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
exports.MajelisAkreditasiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const majelis_akreditasi_entity_1 = require("../entities/majelis-akreditasi.entity");
let MajelisAkreditasiService = class MajelisAkreditasiService {
    constructor(majelisRepository) {
        this.majelisRepository = majelisRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.majelisRepository.createQueryBuilder('majelis');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('majelis.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.jabatan) {
            queryBuilder.andWhere('majelis.jabatan = :jabatan', { jabatan: filters.jabatan });
        }
        return queryBuilder.orderBy('majelis.namaLengkap', 'ASC').getMany();
    }
    async findOne(id) {
        const majelis = await this.majelisRepository.findOne({ where: { id } });
        if (!majelis) {
            throw new common_1.NotFoundException(`Majelis Akreditasi dengan ID ${id} tidak ditemukan`);
        }
        return majelis;
    }
    async create(createDto) {
        if (createDto.nip) {
            const existing = await this.majelisRepository.findOne({
                where: { nip: createDto.nip }
            });
            if (existing) {
                throw new common_1.ConflictException(`Majelis Akreditasi dengan NIP ${createDto.nip} sudah ada`);
            }
        }
        const majelis = this.majelisRepository.create(createDto);
        return this.majelisRepository.save(majelis);
    }
    async update(id, updateDto) {
        const majelis = await this.findOne(id);
        if (updateDto.nip && updateDto.nip !== majelis.nip) {
            const existing = await this.majelisRepository.findOne({
                where: { nip: updateDto.nip }
            });
            if (existing) {
                throw new common_1.ConflictException(`Majelis Akreditasi dengan NIP ${updateDto.nip} sudah ada`);
            }
        }
        Object.assign(majelis, updateDto);
        return this.majelisRepository.save(majelis);
    }
    async remove(id) {
        const majelis = await this.findOne(id);
        await this.majelisRepository.remove(majelis);
    }
    async softDelete(id) {
        const majelis = await this.findOne(id);
        majelis.isActive = false;
        return this.majelisRepository.save(majelis);
    }
};
exports.MajelisAkreditasiService = MajelisAkreditasiService;
exports.MajelisAkreditasiService = MajelisAkreditasiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(majelis_akreditasi_entity_1.MajelisAkreditasi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MajelisAkreditasiService);
//# sourceMappingURL=majelis-akreditasi.service.js.map