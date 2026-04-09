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
exports.KomiteEvaluasiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const komite_evaluasi_entity_1 = require("../entities/komite-evaluasi.entity");
let KomiteEvaluasiService = class KomiteEvaluasiService {
    constructor(komiteRepository) {
        this.komiteRepository = komiteRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.komiteRepository.createQueryBuilder('komite');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('komite.isActive = :isActive', { isActive: filters.isActive });
        }
        if (filters?.jabatan) {
            queryBuilder.andWhere('komite.jabatan = :jabatan', { jabatan: filters.jabatan });
        }
        return queryBuilder.orderBy('komite.namaLengkap', 'ASC').getMany();
    }
    async findOne(id) {
        const komite = await this.komiteRepository.findOne({ where: { id } });
        if (!komite) {
            throw new common_1.NotFoundException(`Komite Evaluasi dengan ID ${id} tidak ditemukan`);
        }
        return komite;
    }
    async create(createDto) {
        if (createDto.nip) {
            const existing = await this.komiteRepository.findOne({
                where: { nip: createDto.nip }
            });
            if (existing) {
                throw new common_1.ConflictException(`Komite Evaluasi dengan NIP ${createDto.nip} sudah ada`);
            }
        }
        const komite = this.komiteRepository.create(createDto);
        return this.komiteRepository.save(komite);
    }
    async update(id, updateDto) {
        const komite = await this.findOne(id);
        if (updateDto.nip && updateDto.nip !== komite.nip) {
            const existing = await this.komiteRepository.findOne({
                where: { nip: updateDto.nip }
            });
            if (existing) {
                throw new common_1.ConflictException(`Komite Evaluasi dengan NIP ${updateDto.nip} sudah ada`);
            }
        }
        Object.assign(komite, updateDto);
        return this.komiteRepository.save(komite);
    }
    async remove(id) {
        const komite = await this.findOne(id);
        await this.komiteRepository.remove(komite);
    }
    async softDelete(id) {
        const komite = await this.findOne(id);
        komite.isActive = false;
        return this.komiteRepository.save(komite);
    }
};
exports.KomiteEvaluasiService = KomiteEvaluasiService;
exports.KomiteEvaluasiService = KomiteEvaluasiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(komite_evaluasi_entity_1.KomiteEvaluasi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KomiteEvaluasiService);
//# sourceMappingURL=komite-evaluasi.service.js.map