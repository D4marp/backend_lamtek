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
exports.ValidatorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const validator_entity_1 = require("../entities/validator.entity");
let ValidatorService = class ValidatorService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(filters) {
        const query = this.repository.createQueryBuilder('validator');
        if (filters?.registrasiProdiBaruId) {
            query.andWhere('validator.registrasiProdiBaru = :registrasiProdiBaruId', {
                registrasiProdiBaruId: filters.registrasiProdiBaruId
            });
        }
        if (filters?.validatorUserId) {
            query.andWhere('validator.validatorUserId = :validatorUserId', {
                validatorUserId: filters.validatorUserId
            });
        }
        if (filters?.status) {
            query.andWhere('validator.status = :status', { status: filters.status });
        }
        query.orderBy('validator.createdAt', 'DESC');
        return query.getMany();
    }
    async findOne(id) {
        const validator = await this.repository.findOne({ where: { id } });
        if (!validator) {
            throw new common_1.NotFoundException(`Validator dengan ID ${id} tidak ditemukan`);
        }
        return validator;
    }
    async findByRegistrasi(registrasiProdiBaruId) {
        return this.repository.find({
            where: { registrasiProdiBaru: registrasiProdiBaruId },
            order: { createdAt: 'DESC' },
        });
    }
    async create(dto) {
        const validator = this.repository.create(dto);
        return this.repository.save(validator);
    }
    async update(id, dto) {
        const validator = await this.findOne(id);
        Object.assign(validator, dto);
        return this.repository.save(validator);
    }
    async remove(id) {
        const validator = await this.findOne(id);
        await this.repository.remove(validator);
    }
    async assign(id, userId) {
        const validator = await this.findOne(id);
        validator.status = validator_entity_1.StatusValidator.ASSIGNED;
        validator.tanggalPenugasan = new Date();
        validator.ditugaskanOleh = userId;
        return this.repository.save(validator);
    }
    async startValidation(id) {
        const validator = await this.findOne(id);
        validator.status = validator_entity_1.StatusValidator.IN_PROGRESS;
        return this.repository.save(validator);
    }
    async complete(id, hasilValidasi, isValid, rekomendasi) {
        const validator = await this.findOne(id);
        validator.status = validator_entity_1.StatusValidator.COMPLETED;
        validator.tanggalSelesai = new Date();
        validator.hasilValidasi = hasilValidasi;
        validator.isValid = isValid;
        validator.rekomendasi = rekomendasi;
        return this.repository.save(validator);
    }
    async findByValidator(validatorUserId) {
        return this.repository.find({
            where: { validatorUserId },
            order: { createdAt: 'DESC' },
        });
    }
};
exports.ValidatorService = ValidatorService;
exports.ValidatorService = ValidatorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(validator_entity_1.Validator)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ValidatorService);
//# sourceMappingURL=validator.service.js.map