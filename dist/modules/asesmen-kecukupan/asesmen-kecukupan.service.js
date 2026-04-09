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
exports.AsesmenKecukupanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asesmen_kecukupan_entity_1 = require("./entities/asesmen-kecukupan.entity");
const blockchain_service_1 = require("../blockchain/blockchain.service");
const ipfs_service_1 = require("../ipfs/ipfs.service");
let AsesmenKecukupanService = class AsesmenKecukupanService {
    constructor(asesmenRepository, blockchainService, ipfsService) {
        this.asesmenRepository = asesmenRepository;
        this.blockchainService = blockchainService;
        this.ipfsService = ipfsService;
    }
    async create(data) {
        const asesmen = this.asesmenRepository.create(data);
        return this.asesmenRepository.save(asesmen);
    }
    async findOne(id) {
        const asesmen = await this.asesmenRepository.findOne({ where: { id } });
        if (!asesmen) {
            throw new common_1.NotFoundException(`Asesmen Kecukupan with ID ${id} not found`);
        }
        return asesmen;
    }
    async findByAkreditasi(akreditasiId) {
        const asesmen = await this.asesmenRepository.findOne({
            where: { akreditasiId }
        });
        if (!asesmen) {
            throw new common_1.NotFoundException(`Asesmen Kecukupan for akreditasi ${akreditasiId} not found`);
        }
        return asesmen;
    }
    async submitLaporan(id, file, deskripsi) {
        const asesmen = await this.findOne(id);
        const { ipfsHash } = await this.ipfsService.uploadFile(file);
        asesmen.ipfsHashLaporanAK = ipfsHash;
        asesmen.deskripsiLapAK = deskripsi;
        return this.asesmenRepository.save(asesmen);
    }
    async tetapkanHasil(id, data) {
        const asesmen = await this.findOne(id);
        asesmen.lapAKKonsisten = data.konsisten;
        asesmen.skorAkhir = data.skorAkhir;
        asesmen.notePenetapanHasilAKKEA = data.notePenetapan;
        asesmen.hasilDitetapkanKEA = true;
        asesmen.terkonsolidasi = true;
        return this.asesmenRepository.save(asesmen);
    }
    async findAll(options) {
        const { page = 1, limit = 10 } = options;
        const [data, total] = await this.asesmenRepository.findAndCount({
            order: { createdAt: 'DESC' },
            skip: (page - 1) * limit,
            take: limit,
        });
        return { data, total };
    }
};
exports.AsesmenKecukupanService = AsesmenKecukupanService;
exports.AsesmenKecukupanService = AsesmenKecukupanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asesmen_kecukupan_entity_1.AsesmenKecukupan)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        blockchain_service_1.BlockchainService,
        ipfs_service_1.IpfsService])
], AsesmenKecukupanService);
//# sourceMappingURL=asesmen-kecukupan.service.js.map