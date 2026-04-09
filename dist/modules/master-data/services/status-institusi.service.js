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
exports.TipeInstitusiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const status_institusi_entity_1 = require("../entities/status-institusi.entity");
let TipeInstitusiService = class TipeInstitusiService {
    constructor(tipeInstitusiRepository) {
        this.tipeInstitusiRepository = tipeInstitusiRepository;
    }
    async create(createDto) {
        const entity = this.tipeInstitusiRepository.create(createDto);
        return this.tipeInstitusiRepository.save(entity);
    }
    async findAll() {
        return this.tipeInstitusiRepository.find({
            order: { id: 'ASC' },
        });
    }
    async findOne(id) {
        const entity = await this.tipeInstitusiRepository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.NotFoundException(`Tipe Institusi dengan ID ${id} tidak ditemukan`);
        }
        return entity;
    }
    async update(id, updateDto) {
        const entity = await this.findOne(id);
        Object.assign(entity, updateDto);
        return this.tipeInstitusiRepository.save(entity);
    }
    async remove(id) {
        const entity = await this.findOne(id);
        await this.tipeInstitusiRepository.remove(entity);
    }
};
exports.TipeInstitusiService = TipeInstitusiService;
exports.TipeInstitusiService = TipeInstitusiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(status_institusi_entity_1.TipeInstitusi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipeInstitusiService);
//# sourceMappingURL=status-institusi.service.js.map