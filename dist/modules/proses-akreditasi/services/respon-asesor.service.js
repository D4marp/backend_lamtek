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
exports.ResponAsesorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const respon_asesor_entity_1 = require("../entities/respon-asesor.entity");
let ResponAsesorService = class ResponAsesorService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('respon');
        if (filters?.penawaranId) {
            query.andWhere('respon.penawaranId = :penawaranId', { penawaranId: filters.penawaranId });
        }
        if (filters?.asesorId) {
            query.andWhere('respon.asesorId = :asesorId', { asesorId: filters.asesorId });
        }
        if (filters?.status) {
            query.andWhere('respon.status = :status', { status: filters.status });
        }
        query.orderBy('respon.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const respon = await this.repository.findOne({ where: { id } });
        if (!respon) {
            throw new common_1.NotFoundException(`Respon Asesor dengan ID ${id} tidak ditemukan`);
        }
        return respon;
    }
    async findByPenawaran(penawaranId) {
        return this.repository.findOne({ where: { penawaranId } });
    }
    async create(dto) {
        const respon = this.repository.create(dto);
        return this.repository.save(respon);
    }
    async update(id, dto) {
        const respon = await this.findOne(id);
        Object.assign(respon, dto);
        return this.repository.save(respon);
    }
    async remove(id) {
        const respon = await this.findOne(id);
        await this.repository.remove(respon);
    }
    async terima(id) {
        const respon = await this.findOne(id);
        respon.status = respon_asesor_entity_1.StatusRespon.DITERIMA;
        respon.tanggalRespon = new Date();
        respon.konfirmasiKetersediaan = true;
        return this.repository.save(respon);
    }
    async tolak(id, alasan) {
        const respon = await this.findOne(id);
        respon.status = respon_asesor_entity_1.StatusRespon.DITOLAK;
        respon.tanggalRespon = new Date();
        respon.alasanPenolakan = alasan;
        return this.repository.save(respon);
    }
};
exports.ResponAsesorService = ResponAsesorService;
exports.ResponAsesorService = ResponAsesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(respon_asesor_entity_1.ResponAsesor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResponAsesorService);
//# sourceMappingURL=respon-asesor.service.js.map