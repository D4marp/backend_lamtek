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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DokumenService = exports.TipeDokumen = void 0;
const common_1 = require("@nestjs/common");
const ipfs_service_1 = require("../ipfs/ipfs.service");
const blockchain_service_1 = require("../blockchain/blockchain.service");
var TipeDokumen;
(function (TipeDokumen) {
    TipeDokumen["DOKUMEN_REGISTRASI"] = "DOKUMEN_REGISTRASI";
    TipeDokumen["BUKTI_PEMBAYARAN"] = "BUKTI_PEMBAYARAN";
    TipeDokumen["LAPORAN_EVALUASI_DIRI"] = "LAPORAN_EVALUASI_DIRI";
    TipeDokumen["LAPORAN_KINERJA"] = "LAPORAN_KINERJA";
    TipeDokumen["LAPORAN_AK"] = "LAPORAN_AK";
    TipeDokumen["LAPORAN_AL"] = "LAPORAN_AL";
    TipeDokumen["BERITA_ACARA"] = "BERITA_ACARA";
    TipeDokumen["SURAT_TUGAS"] = "SURAT_TUGAS";
    TipeDokumen["UMPAN_BALIK"] = "UMPAN_BALIK";
    TipeDokumen["TANGGAPAN"] = "TANGGAPAN";
    TipeDokumen["SK_AKREDITASI"] = "SK_AKREDITASI";
    TipeDokumen["SERTIFIKAT"] = "SERTIFIKAT";
    TipeDokumen["LAINNYA"] = "LAINNYA";
})(TipeDokumen || (exports.TipeDokumen = TipeDokumen = {}));
let DokumenService = class DokumenService {
    constructor(ipfsService, blockchainService) {
        this.ipfsService = ipfsService;
        this.blockchainService = blockchainService;
    }
    async uploadDokumen(kodeAkreditasi, file, tipeDokumen, metadata) {
        const { ipfsHash, url, sha256 } = await this.ipfsService.uploadFile(file);
        let blockchainTxHash;
        try {
            blockchainTxHash = await this.blockchainService.uploadDokumen({
                kodeAkreditasi,
                ipfsHash,
                namaDokumen: file.originalname,
                tipeDokumen,
            });
        }
        catch (error) {
            console.error('Failed to record document to blockchain:', error);
        }
        return {
            ipfsHash,
            url,
            sha256,
            blockchainTxHash,
        };
    }
    async getDokumenByAkreditasi(kodeAkreditasi) {
        return this.blockchainService.getDokumen(kodeAkreditasi);
    }
    async verifyDokumen(ipfsHash, expectedSha256) {
        const valid = await this.ipfsService.verifyFileIntegrity(ipfsHash, expectedSha256);
        return { valid, ipfsHash };
    }
    async getDokumenFromIpfs(ipfsHash) {
        return this.ipfsService.getFile(ipfsHash);
    }
};
exports.DokumenService = DokumenService;
exports.DokumenService = DokumenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ipfs_service_1.IpfsService,
        blockchain_service_1.BlockchainService])
], DokumenService);
//# sourceMappingURL=dokumen.service.js.map