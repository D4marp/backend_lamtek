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
exports.AkreditasiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const akreditasi_entity_1 = require("./entities/akreditasi.entity");
const blockchain_service_1 = require("../blockchain/blockchain.service");
const ipfs_service_1 = require("../ipfs/ipfs.service");
let AkreditasiService = class AkreditasiService {
    constructor(akreditasiRepository, blockchainService, ipfsService) {
        this.akreditasiRepository = akreditasiRepository;
        this.blockchainService = blockchainService;
        this.ipfsService = ipfsService;
    }
    generateKodeAkreditasi(tipe, uppsId, prodiId, tahun) {
        const prefix = tipe.includes('PRODI_BARU') ? 'AKRB' : 'AKR';
        const random = Math.floor(Math.random() * 1000);
        return `${prefix}${uppsId}${random}${prodiId}${tahun.toString().slice(-2)}`;
    }
    async create(createDto, tenantId) {
        const kodeAkreditasi = this.generateKodeAkreditasi(createDto.tipe, createDto.uppsId, createDto.prodiId, createDto.tahun);
        const akreditasi = this.akreditasiRepository.create({
            ...createDto,
            kodeAkreditasi,
            tenantId,
            status: akreditasi_entity_1.StatusAkreditasi.REGISTRASI,
            progress: 0,
        });
        const saved = await this.akreditasiRepository.save(akreditasi);
        try {
            if (this.blockchainService) {
                const txHash = await this.blockchainService.registerAkreditasi({
                    kodeAkreditasi: saved.kodeAkreditasi,
                    institusiId: saved.institusiId,
                    prodiId: saved.prodiId,
                    uppsId: saved.uppsId,
                    tipe: saved.tipe,
                });
                saved.blockchainTxHash = txHash;
                saved.isOnBlockchain = true;
                await this.akreditasiRepository.save(saved);
            }
        }
        catch (error) {
            console.error('Failed to register to blockchain:', error);
        }
        return saved;
    }
    async findOne(id, tenantId) {
        const akreditasi = await this.akreditasiRepository.findOne({
            where: { id, tenantId, isActive: true }
        });
        if (!akreditasi) {
            throw new common_1.NotFoundException(`Akreditasi with ID ${id} not found`);
        }
        return akreditasi;
    }
    async findByKode(kodeAkreditasi) {
        const akreditasi = await this.akreditasiRepository.findOne({
            where: { kodeAkreditasi, isActive: true }
        });
        if (!akreditasi) {
            throw new common_1.NotFoundException(`Akreditasi with kode ${kodeAkreditasi} not found`);
        }
        return akreditasi;
    }
    async findAll(tenantId, options) {
        try {
            const { page = 1, limit = 10, status, tipe, tahun } = options;
            console.log('findAll called with:', { tenantId, page, limit, status, tipe, tahun });
            const queryBuilder = this.akreditasiRepository.createQueryBuilder('akreditasi')
                .where('akreditasi.tenantId = :tenantId', { tenantId })
                .andWhere('akreditasi.isActive = :isActive', { isActive: true });
            if (status) {
                queryBuilder.andWhere('akreditasi.status = :status', { status });
            }
            if (tipe) {
                queryBuilder.andWhere('akreditasi.tipe = :tipe', { tipe });
            }
            if (tahun) {
                queryBuilder.andWhere('akreditasi.tahun = :tahun', { tahun });
            }
            const query = queryBuilder
                .orderBy('akreditasi.createdAt', 'DESC')
                .skip((page - 1) * limit)
                .take(limit);
            console.log('Query SQL:', query.getSql());
            const [data, total] = await query.getManyAndCount();
            console.log('Query result:', { dataCount: data.length, total });
            return { data, total, page, limit };
        }
        catch (error) {
            console.error('Error in findAll:', error);
            return { data: [], total: 0, page: 1, limit: 10 };
        }
    }
    async updateStatus(id, tenantId, updateDto) {
        const akreditasi = await this.findOne(id, tenantId);
        if (!this.isValidStatusTransition(akreditasi.status, updateDto.status)) {
            throw new common_1.BadRequestException(`Invalid status transition from ${akreditasi.status} to ${updateDto.status}`);
        }
        const oldStatus = akreditasi.status;
        akreditasi.status = updateDto.status;
        akreditasi.progress = this.calculateProgress(updateDto.status);
        akreditasi.infoAkreditasi = updateDto.keterangan || akreditasi.infoAkreditasi;
        this.updateCompletionFlags(akreditasi, updateDto.status);
        const saved = await this.akreditasiRepository.save(akreditasi);
        try {
            await this.blockchainService.updateAkreditasiStatus({
                kodeAkreditasi: saved.kodeAkreditasi,
                oldStatus,
                newStatus: saved.status,
                ipfsHashBukti: updateDto.ipfsHashBukti,
                keterangan: updateDto.keterangan,
            });
        }
        catch (error) {
            console.error('Failed to update blockchain status:', error);
        }
        return saved;
    }
    async uploadDokumen(id, tenantId, file, tipeDokumen) {
        const akreditasi = await this.findOne(id, tenantId);
        const { ipfsHash, url } = await this.ipfsService.uploadFile(file);
        try {
            await this.blockchainService.uploadDokumen({
                kodeAkreditasi: akreditasi.kodeAkreditasi,
                ipfsHash,
                namaDokumen: file.originalname,
                tipeDokumen,
            });
        }
        catch (error) {
            console.error('Failed to record document to blockchain:', error);
        }
        return { ipfsHash, url };
    }
    async getBlockchainStatus(id, tenantId) {
        const akreditasi = await this.findOne(id, tenantId);
        if (!akreditasi.isOnBlockchain) {
            return {
                isOnBlockchain: false,
                message: 'Akreditasi belum tercatat di blockchain'
            };
        }
        const blockchainData = await this.blockchainService.getAkreditasi(akreditasi.kodeAkreditasi);
        const auditLogs = await this.blockchainService.getAuditLogs(akreditasi.kodeAkreditasi);
        return {
            isOnBlockchain: true,
            txHash: akreditasi.blockchainTxHash,
            blockNumber: akreditasi.blockchainBlockNumber,
            data: blockchainData,
            auditLogs,
        };
    }
    isValidStatusTransition(from, to) {
        const validTransitions = {
            [akreditasi_entity_1.StatusAkreditasi.REGISTRASI]: [akreditasi_entity_1.StatusAkreditasi.VERIFIKASI_DOKUMEN],
            [akreditasi_entity_1.StatusAkreditasi.VERIFIKASI_DOKUMEN]: [akreditasi_entity_1.StatusAkreditasi.PEMBAYARAN, akreditasi_entity_1.StatusAkreditasi.REGISTRASI],
            [akreditasi_entity_1.StatusAkreditasi.PEMBAYARAN]: [akreditasi_entity_1.StatusAkreditasi.PENAWARAN_ASESOR, akreditasi_entity_1.StatusAkreditasi.ASESMEN_KECUKUPAN],
            [akreditasi_entity_1.StatusAkreditasi.PENAWARAN_ASESOR]: [akreditasi_entity_1.StatusAkreditasi.ASESMEN_KECUKUPAN],
            [akreditasi_entity_1.StatusAkreditasi.ASESMEN_KECUKUPAN]: [akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AK],
            [akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AK]: [akreditasi_entity_1.StatusAkreditasi.ASESMEN_LAPANGAN],
            [akreditasi_entity_1.StatusAkreditasi.ASESMEN_LAPANGAN]: [akreditasi_entity_1.StatusAkreditasi.TANGGAPAN_AL],
            [akreditasi_entity_1.StatusAkreditasi.TANGGAPAN_AL]: [akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AL],
            [akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AL]: [akreditasi_entity_1.StatusAkreditasi.PENETAPAN_PERINGKAT],
            [akreditasi_entity_1.StatusAkreditasi.PENETAPAN_PERINGKAT]: [akreditasi_entity_1.StatusAkreditasi.SINKRONISASI_BANPT],
            [akreditasi_entity_1.StatusAkreditasi.SINKRONISASI_BANPT]: [akreditasi_entity_1.StatusAkreditasi.SELESAI],
            [akreditasi_entity_1.StatusAkreditasi.SELESAI]: [],
        };
        return validTransitions[from]?.includes(to) || from === to;
    }
    calculateProgress(status) {
        const progressMap = {
            [akreditasi_entity_1.StatusAkreditasi.REGISTRASI]: 5,
            [akreditasi_entity_1.StatusAkreditasi.VERIFIKASI_DOKUMEN]: 15,
            [akreditasi_entity_1.StatusAkreditasi.PEMBAYARAN]: 25,
            [akreditasi_entity_1.StatusAkreditasi.PENAWARAN_ASESOR]: 35,
            [akreditasi_entity_1.StatusAkreditasi.ASESMEN_KECUKUPAN]: 50,
            [akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AK]: 60,
            [akreditasi_entity_1.StatusAkreditasi.ASESMEN_LAPANGAN]: 70,
            [akreditasi_entity_1.StatusAkreditasi.TANGGAPAN_AL]: 80,
            [akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AL]: 85,
            [akreditasi_entity_1.StatusAkreditasi.PENETAPAN_PERINGKAT]: 95,
            [akreditasi_entity_1.StatusAkreditasi.SINKRONISASI_BANPT]: 99,
            [akreditasi_entity_1.StatusAkreditasi.SELESAI]: 100,
        };
        return progressMap[status] || 0;
    }
    async getStats(tenantId) {
        try {
            const totalCount = await this.akreditasiRepository.count({
                where: { tenantId, isActive: true },
            });
            const inProgressCount = await this.akreditasiRepository.count({
                where: {
                    tenantId,
                    isActive: true,
                    status: (0, typeorm_2.In)([
                        akreditasi_entity_1.StatusAkreditasi.REGISTRASI,
                        akreditasi_entity_1.StatusAkreditasi.VERIFIKASI_DOKUMEN,
                        akreditasi_entity_1.StatusAkreditasi.PEMBAYARAN,
                        akreditasi_entity_1.StatusAkreditasi.PENAWARAN_ASESOR,
                        akreditasi_entity_1.StatusAkreditasi.ASESMEN_KECUKUPAN,
                        akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AK,
                        akreditasi_entity_1.StatusAkreditasi.ASESMEN_LAPANGAN,
                        akreditasi_entity_1.StatusAkreditasi.TANGGAPAN_AL,
                        akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AL,
                    ]),
                },
            });
            const completedThisMonth = await this.akreditasiRepository.count({
                where: {
                    tenantId,
                    isActive: true,
                    status: akreditasi_entity_1.StatusAkreditasi.SELESAI,
                    wktTerakreditasi: (0, typeorm_2.MoreThan)(new Date(new Date().getFullYear(), new Date().getMonth(), 1)),
                },
            });
            const waitingAssessment = await this.akreditasiRepository.count({
                where: {
                    tenantId,
                    isActive: true,
                    status: (0, typeorm_2.In)([
                        akreditasi_entity_1.StatusAkreditasi.PENAWARAN_ASESOR,
                        akreditasi_entity_1.StatusAkreditasi.ASESMEN_KECUKUPAN,
                        akreditasi_entity_1.StatusAkreditasi.ASESMEN_LAPANGAN,
                    ]),
                },
            });
            return {
                totalCount,
                inProgressCount,
                completedThisMonth,
                waitingAssessment,
            };
        }
        catch (error) {
            console.error('Error in getStats:', error);
            return {
                totalCount: 0,
                inProgressCount: 0,
                completedThisMonth: 0,
                waitingAssessment: 0,
            };
        }
    }
    updateCompletionFlags(akreditasi, status) {
        const now = new Date();
        switch (status) {
            case akreditasi_entity_1.StatusAkreditasi.PEMBAYARAN:
                akreditasi.regAkreditasiSelesai = true;
                akreditasi.wktRegAkredSelesai = now;
                break;
            case akreditasi_entity_1.StatusAkreditasi.ASESMEN_KECUKUPAN:
                akreditasi.penentuanAsesorSelesai = true;
                akreditasi.wktPenentuanAsesorSelesai = now;
                break;
            case akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AK:
                akreditasi.akSelesai = true;
                akreditasi.wktAkSelesai = now;
                break;
            case akreditasi_entity_1.StatusAkreditasi.PENGESAHAN_AL:
                akreditasi.alSelesai = true;
                akreditasi.wktAlSelesai = now;
                break;
            case akreditasi_entity_1.StatusAkreditasi.SELESAI:
                akreditasi.terakreditasi = true;
                akreditasi.wktTerakreditasi = now;
                break;
        }
    }
};
exports.AkreditasiService = AkreditasiService;
exports.AkreditasiService = AkreditasiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(akreditasi_entity_1.Akreditasi)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        blockchain_service_1.BlockchainService,
        ipfs_service_1.IpfsService])
], AkreditasiService);
//# sourceMappingURL=akreditasi.service.js.map