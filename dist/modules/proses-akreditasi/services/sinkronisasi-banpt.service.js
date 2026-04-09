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
exports.SinkronisasiBanptService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sinkronisasi_banpt_entity_1 = require("../entities/sinkronisasi-banpt.entity");
let SinkronisasiBanptService = class SinkronisasiBanptService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('sync');
        if (filters?.akreditasiId) {
            query.andWhere('sync.akreditasiId = :akreditasiId', { akreditasiId: filters.akreditasiId });
        }
        if (filters?.skId) {
            query.andWhere('sync.skId = :skId', { skId: filters.skId });
        }
        if (filters?.status) {
            query.andWhere('sync.status = :status', { status: filters.status });
        }
        query.orderBy('sync.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const sync = await this.repository.findOne({ where: { id } });
        if (!sync) {
            throw new common_1.NotFoundException(`Sinkronisasi BAN-PT dengan ID ${id} tidak ditemukan`);
        }
        return sync;
    }
    async findByAkreditasi(akreditasiId) {
        return this.repository.findOne({
            where: { akreditasiId },
            order: { createdAt: 'DESC' },
        });
    }
    async create(dto) {
        const sync = this.repository.create(dto);
        return this.repository.save(sync);
    }
    async update(id, dto) {
        const sync = await this.findOne(id);
        Object.assign(sync, dto);
        return this.repository.save(sync);
    }
    async remove(id) {
        const sync = await this.findOne(id);
        await this.repository.remove(sync);
    }
    async startSync(id, userId) {
        const sync = await this.findOne(id);
        sync.status = sinkronisasi_banpt_entity_1.StatusSinkronisasi.SYNCING;
        sync.syncedBy = userId;
        return this.repository.save(sync);
    }
    async syncSuccess(id, nomorRegistrasi, response) {
        const sync = await this.findOne(id);
        sync.status = sinkronisasi_banpt_entity_1.StatusSinkronisasi.SYNCED;
        sync.tanggalSinkronisasi = new Date();
        sync.nomorRegistrasiBanpt = nomorRegistrasi;
        sync.responseBanpt = response;
        return this.repository.save(sync);
    }
    async syncFailed(id, errorMessage) {
        const sync = await this.findOne(id);
        sync.status = sinkronisasi_banpt_entity_1.StatusSinkronisasi.FAILED;
        sync.errorMessage = errorMessage;
        sync.retryCount += 1;
        sync.lastRetryAt = new Date();
        return this.repository.save(sync);
    }
    async retry(id) {
        const sync = await this.findOne(id);
        sync.status = sinkronisasi_banpt_entity_1.StatusSinkronisasi.SYNCING;
        sync.retryCount += 1;
        sync.lastRetryAt = new Date();
        return this.repository.save(sync);
    }
};
exports.SinkronisasiBanptService = SinkronisasiBanptService;
exports.SinkronisasiBanptService = SinkronisasiBanptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sinkronisasi_banpt_entity_1.SinkronisasiBanpt)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SinkronisasiBanptService);
//# sourceMappingURL=sinkronisasi-banpt.service.js.map