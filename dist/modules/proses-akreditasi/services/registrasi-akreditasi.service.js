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
exports.RegistrasiAkreditasiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const registrasi_akreditasi_entity_1 = require("../entities/registrasi-akreditasi.entity");
let RegistrasiAkreditasiService = class RegistrasiAkreditasiService {
    constructor(registrasiRepository) {
        this.registrasiRepository = registrasiRepository;
    }
    async create(createDto) {
        const entity = this.registrasiRepository.create(createDto);
        return this.registrasiRepository.save(entity);
    }
    async findAll(filter) {
        const queryBuilder = this.registrasiRepository.createQueryBuilder('registrasi');
        if (filter?.prodiId) {
            queryBuilder.andWhere('registrasi.prodi_id = :prodiId', { prodiId: filter.prodiId });
        }
        if (filter?.institusiId) {
            queryBuilder.andWhere('registrasi.institusi_id = :institusiId', { institusiId: filter.institusiId });
        }
        if (filter?.status) {
            queryBuilder.andWhere('registrasi.status = :status', { status: filter.status });
        }
        if (filter?.tahunAkademik) {
            queryBuilder.andWhere('registrasi.tahun_akademik = :tahunAkademik', { tahunAkademik: filter.tahunAkademik });
        }
        return queryBuilder.orderBy('registrasi.tanggal_registrasi', 'DESC').getMany();
    }
    async findOne(id) {
        const entity = await this.registrasiRepository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.NotFoundException(`Registrasi Akreditasi dengan ID ${id} tidak ditemukan`);
        }
        return entity;
    }
    async findByNomorRegistrasi(nomorRegistrasi) {
        const entity = await this.registrasiRepository.findOne({ where: { nomorRegistrasi } });
        if (!entity) {
            throw new common_1.NotFoundException(`Registrasi dengan nomor ${nomorRegistrasi} tidak ditemukan`);
        }
        return entity;
    }
    async findByProdi(prodiId) {
        return this.registrasiRepository.find({
            where: { prodiId },
            order: { tanggalRegistrasi: 'DESC' },
        });
    }
    async update(id, updateDto) {
        const entity = await this.findOne(id);
        Object.assign(entity, updateDto);
        return this.registrasiRepository.save(entity);
    }
    async submit(id) {
        const entity = await this.findOne(id);
        if (entity.status !== registrasi_akreditasi_entity_1.StatusRegistrasi.DRAFT) {
            throw new common_1.BadRequestException('Registrasi hanya bisa disubmit dari status draft');
        }
        entity.status = registrasi_akreditasi_entity_1.StatusRegistrasi.SUBMITTED;
        return this.registrasiRepository.save(entity);
    }
    async verify(id, verifikatorId, catatan) {
        const entity = await this.findOne(id);
        if (entity.status !== registrasi_akreditasi_entity_1.StatusRegistrasi.SUBMITTED) {
            throw new common_1.BadRequestException('Registrasi hanya bisa diverifikasi dari status submitted');
        }
        entity.status = registrasi_akreditasi_entity_1.StatusRegistrasi.VERIFIED;
        entity.verifikatorId = verifikatorId;
        entity.tanggalVerifikasi = new Date();
        if (catatan) {
            entity.catatanVerifikasi = catatan;
        }
        return this.registrasiRepository.save(entity);
    }
    async approve(id) {
        const entity = await this.findOne(id);
        if (entity.status !== registrasi_akreditasi_entity_1.StatusRegistrasi.VERIFIED) {
            throw new common_1.BadRequestException('Registrasi hanya bisa diapprove dari status verified');
        }
        entity.status = registrasi_akreditasi_entity_1.StatusRegistrasi.APPROVED;
        return this.registrasiRepository.save(entity);
    }
    async reject(id, catatan) {
        const entity = await this.findOne(id);
        entity.status = registrasi_akreditasi_entity_1.StatusRegistrasi.REJECTED;
        entity.catatanVerifikasi = catatan;
        return this.registrasiRepository.save(entity);
    }
    async cancel(id) {
        const entity = await this.findOne(id);
        if (entity.status === registrasi_akreditasi_entity_1.StatusRegistrasi.APPROVED) {
            throw new common_1.BadRequestException('Registrasi yang sudah diapprove tidak bisa dibatalkan');
        }
        entity.status = registrasi_akreditasi_entity_1.StatusRegistrasi.CANCELLED;
        return this.registrasiRepository.save(entity);
    }
    async remove(id) {
        const entity = await this.findOne(id);
        if (entity.status !== registrasi_akreditasi_entity_1.StatusRegistrasi.DRAFT) {
            throw new common_1.BadRequestException('Hanya registrasi dengan status draft yang bisa dihapus');
        }
        await this.registrasiRepository.remove(entity);
    }
};
exports.RegistrasiAkreditasiService = RegistrasiAkreditasiService;
exports.RegistrasiAkreditasiService = RegistrasiAkreditasiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registrasi_akreditasi_entity_1.RegistrasiAkreditasi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegistrasiAkreditasiService);
//# sourceMappingURL=registrasi-akreditasi.service.js.map