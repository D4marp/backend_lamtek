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
exports.RegistrasiProdiBaruService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const registrasi_prodi_baru_entity_1 = require("../entities/registrasi-prodi-baru.entity");
let RegistrasiProdiBaruService = class RegistrasiProdiBaruService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('registrasi');
        if (filters?.institusiId) {
            query.andWhere('registrasi.institusiId = :institusiId', { institusiId: filters.institusiId });
        }
        if (filters?.jenjangId) {
            query.andWhere('registrasi.jenjangId = :jenjangId', { jenjangId: filters.jenjangId });
        }
        if (filters?.jenisProdi) {
            query.andWhere('registrasi.jenisProdi = :jenisProdi', { jenisProdi: filters.jenisProdi });
        }
        if (filters?.status) {
            query.andWhere('registrasi.status = :status', { status: filters.status });
        }
        query.orderBy('registrasi.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const registrasi = await this.repository.findOne({ where: { id } });
        if (!registrasi) {
            throw new common_1.NotFoundException(`Registrasi Prodi Baru dengan ID ${id} tidak ditemukan`);
        }
        return registrasi;
    }
    async findByInstitusi(institusiId) {
        return this.repository.find({
            where: { institusiId },
            order: { createdAt: 'DESC' },
        });
    }
    async create(dto) {
        const registrasi = this.repository.create(dto);
        return this.repository.save(registrasi);
    }
    async update(id, dto) {
        const registrasi = await this.findOne(id);
        Object.assign(registrasi, dto);
        return this.repository.save(registrasi);
    }
    async remove(id) {
        const registrasi = await this.findOne(id);
        await this.repository.remove(registrasi);
    }
    async submit(id, userId) {
        const registrasi = await this.findOne(id);
        registrasi.status = registrasi_prodi_baru_entity_1.StatusRegistrasiProdiBaru.SUBMITTED;
        registrasi.tanggalPengajuan = new Date();
        registrasi.diajukanOleh = userId;
        return this.repository.save(registrasi);
    }
    async startValidation(id) {
        const registrasi = await this.findOne(id);
        registrasi.status = registrasi_prodi_baru_entity_1.StatusRegistrasiProdiBaru.VALIDASI;
        return this.repository.save(registrasi);
    }
    async approve(id) {
        const registrasi = await this.findOne(id);
        registrasi.status = registrasi_prodi_baru_entity_1.StatusRegistrasiProdiBaru.DITERIMA;
        return this.repository.save(registrasi);
    }
    async reject(id, catatan) {
        const registrasi = await this.findOne(id);
        registrasi.status = registrasi_prodi_baru_entity_1.StatusRegistrasiProdiBaru.DITOLAK;
        registrasi.catatan = catatan;
        return this.repository.save(registrasi);
    }
    async findPending() {
        return this.repository.find({
            where: { status: registrasi_prodi_baru_entity_1.StatusRegistrasiProdiBaru.SUBMITTED },
            order: { tanggalPengajuan: 'ASC' },
        });
    }
};
exports.RegistrasiProdiBaruService = RegistrasiProdiBaruService;
exports.RegistrasiProdiBaruService = RegistrasiProdiBaruService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registrasi_prodi_baru_entity_1.RegistrasiProdiBaru)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegistrasiProdiBaruService);
//# sourceMappingURL=registrasi-prodi-baru.service.js.map