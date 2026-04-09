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
exports.AsesmenLapanganService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const asesmen_lapangan_entity_1 = require("./entities/asesmen-lapangan.entity");
const blockchain_service_1 = require("../blockchain/blockchain.service");
const ipfs_service_1 = require("../ipfs/ipfs.service");
let AsesmenLapanganService = class AsesmenLapanganService {
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
            throw new common_1.NotFoundException(`Asesmen Lapangan with ID ${id} not found`);
        }
        return asesmen;
    }
    async findByAkreditasi(akreditasiId) {
        const asesmen = await this.asesmenRepository.findOne({
            where: { akreditasiId }
        });
        if (!asesmen) {
            throw new common_1.NotFoundException(`Asesmen Lapangan for akreditasi ${akreditasiId} not found`);
        }
        return asesmen;
    }
    async setJadwalVisitasi(id, data) {
        const asesmen = await this.findOne(id);
        asesmen.tglVisitasiAwal = data.tglVisitasiAwal;
        asesmen.tglVisitasiAkhir = data.tglVisitasiAkhir;
        asesmen.noSuratTugasAL = data.noSuratTugas;
        asesmen.jadwalDisetujui = true;
        if (data.suratTugasFile) {
            const { ipfsHash } = await this.ipfsService.uploadFile(data.suratTugasFile);
            asesmen.ipfsHashSuratTugas = ipfsHash;
        }
        return this.asesmenRepository.save(asesmen);
    }
    async submitLaporan(id, files) {
        const asesmen = await this.findOne(id);
        if (files.laporanAL) {
            const { ipfsHash } = await this.ipfsService.uploadFile(files.laporanAL);
            asesmen.ipfsHashLaporanAL = ipfsHash;
        }
        if (files.beritaAcara) {
            const { ipfsHash } = await this.ipfsService.uploadFile(files.beritaAcara);
            asesmen.ipfsHashBeritaAcara = ipfsHash;
        }
        if (files.umpanBalik) {
            const { ipfsHash } = await this.ipfsService.uploadFile(files.umpanBalik);
            asesmen.ipfsHashUmpanBalik = ipfsHash;
            asesmen.umpanBalikAsesorDiisi = true;
        }
        asesmen.lapALSubmitted = true;
        return this.asesmenRepository.save(asesmen);
    }
    async submitTanggapan(id, file, dariUPPS) {
        const asesmen = await this.findOne(id);
        const { ipfsHash } = await this.ipfsService.uploadFile(file);
        asesmen.ipfsHashTanggapanAL = ipfsHash;
        asesmen.tanggapanAL = true;
        if (dariUPPS) {
            asesmen.uppsMenanggapiAL = true;
        }
        else {
            asesmen.asesorMenanggapiAL = true;
        }
        return this.asesmenRepository.save(asesmen);
    }
    async tetapkanHasil(id, data) {
        const asesmen = await this.findOne(id);
        asesmen.rekomendasiPeringkatKEA = data.rekomendasiPeringkat;
        asesmen.notePenetapanHasilALKEA = data.notePenetapan;
        asesmen.catatanAsesor = data.catatanAsesor;
        asesmen.hasilDitetapkanKEA = true;
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
exports.AsesmenLapanganService = AsesmenLapanganService;
exports.AsesmenLapanganService = AsesmenLapanganService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(asesmen_lapangan_entity_1.AsesmenLapangan)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        blockchain_service_1.BlockchainService,
        ipfs_service_1.IpfsService])
], AsesmenLapanganService);
//# sourceMappingURL=asesmen-lapangan.service.js.map