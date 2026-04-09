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
exports.StatusSkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const status_sk_entity_1 = require("../entities/status-sk.entity");
let StatusSkService = class StatusSkService {
    constructor(statusSkRepository) {
        this.statusSkRepository = statusSkRepository;
    }
    async findAll(filters) {
        const queryBuilder = this.statusSkRepository.createQueryBuilder('status');
        if (filters?.isActive !== undefined) {
            queryBuilder.andWhere('status.isActive = :isActive', { isActive: filters.isActive });
        }
        return queryBuilder.orderBy('status.urutan', 'ASC').getMany();
    }
    async findOne(id) {
        const status = await this.statusSkRepository.findOne({ where: { id } });
        if (!status) {
            throw new common_1.NotFoundException(`Status SK dengan ID ${id} tidak ditemukan`);
        }
        return status;
    }
    async create(createDto) {
        const existing = await this.statusSkRepository.findOne({
            where: { kodeStatus: createDto.kodeStatus }
        });
        if (existing) {
            throw new common_1.ConflictException(`Status SK dengan kode ${createDto.kodeStatus} sudah ada`);
        }
        const status = this.statusSkRepository.create(createDto);
        return this.statusSkRepository.save(status);
    }
    async update(id, updateDto) {
        const status = await this.findOne(id);
        if (updateDto.kodeStatus && updateDto.kodeStatus !== status.kodeStatus) {
            const existing = await this.statusSkRepository.findOne({
                where: { kodeStatus: updateDto.kodeStatus }
            });
            if (existing) {
                throw new common_1.ConflictException(`Status SK dengan kode ${updateDto.kodeStatus} sudah ada`);
            }
        }
        Object.assign(status, updateDto);
        return this.statusSkRepository.save(status);
    }
    async remove(id) {
        const status = await this.findOne(id);
        await this.statusSkRepository.remove(status);
    }
    async softDelete(id) {
        const status = await this.findOne(id);
        status.isActive = false;
        return this.statusSkRepository.save(status);
    }
};
exports.StatusSkService = StatusSkService;
exports.StatusSkService = StatusSkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(status_sk_entity_1.StatusSk)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StatusSkService);
//# sourceMappingURL=status-sk.service.js.map