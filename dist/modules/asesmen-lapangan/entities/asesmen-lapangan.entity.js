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
exports.AsesmenLapangan = void 0;
const typeorm_1 = require("typeorm");
let AsesmenLapangan = class AsesmenLapangan {
};
exports.AsesmenLapangan = AsesmenLapangan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], AsesmenLapangan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], AsesmenLapangan.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_akreditasi', length: 50 }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "kodeAkreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kea_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], AsesmenLapangan.prototype, "keaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tgl_visitasi_awal', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AsesmenLapangan.prototype, "tglVisitasiAwal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tgl_visitasi_akhir', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AsesmenLapangan.prototype, "tglVisitasiAkhir", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jadwal_disetujui', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenLapangan.prototype, "jadwalDisetujui", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tgt_wkt_al', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AsesmenLapangan.prototype, "targetWaktuAL", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lal_submitted', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenLapangan.prototype, "lapALSubmitted", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hasil_ditetapkan_kea', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenLapangan.prototype, "hasilDitetapkanKEA", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'note_penetapan_hasil_al_kea', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "notePenetapanHasilALKEA", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'no_surat_tugas_al', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "noSuratTugasAL", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rekomendasi_peringkat_kea', length: 50, nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "rekomendasiPeringkatKEA", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'catatan_asesor', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "catatanAsesor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'catatan_lain', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "catatanLain", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggapan_al', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenLapangan.prototype, "tanggapanAL", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'upps_menanggapi_al', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenLapangan.prototype, "uppsMenanggapiAL", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asesor_menanggapi_al', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenLapangan.prototype, "asesorMenanggapiAL", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deadline_tanggapan_al', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AsesmenLapangan.prototype, "deadlineTanggapanAL", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'umpan_balik_asesor_diisi', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenLapangan.prototype, "umpanBalikAsesorDiisi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_surat_tugas', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "ipfsHashSuratTugas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_berita_acara', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "ipfsHashBeritaAcara", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_umpan_balik', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "ipfsHashUmpanBalik", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_laporan_al', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "ipfsHashLaporanAL", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_tanggapan_al', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "ipfsHashTanggapanAL", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'blockchain_tx_hash', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenLapangan.prototype, "blockchainTxHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_on_blockchain', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenLapangan.prototype, "isOnBlockchain", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], AsesmenLapangan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], AsesmenLapangan.prototype, "updatedAt", void 0);
exports.AsesmenLapangan = AsesmenLapangan = __decorate([
    (0, typeorm_1.Entity)('asesmen_lapangan'),
    (0, typeorm_1.Index)(['akreditasiId'])
], AsesmenLapangan);
//# sourceMappingURL=asesmen-lapangan.entity.js.map