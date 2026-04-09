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
exports.Akreditasi = exports.PeringkatAkreditasi = exports.StatusAkreditasi = exports.TipeAkreditasi = void 0;
const typeorm_1 = require("typeorm");
var TipeAkreditasi;
(function (TipeAkreditasi) {
    TipeAkreditasi["REGULER"] = "REGULER";
    TipeAkreditasi["PJJ"] = "PJJ";
    TipeAkreditasi["PRODI_BARU_PTNBH"] = "PRODI_BARU_PTNBH";
    TipeAkreditasi["PRODI_BARU_NON_PTNBH"] = "PRODI_BARU_NON_PTNBH";
})(TipeAkreditasi || (exports.TipeAkreditasi = TipeAkreditasi = {}));
var StatusAkreditasi;
(function (StatusAkreditasi) {
    StatusAkreditasi["REGISTRASI"] = "REGISTRASI";
    StatusAkreditasi["VERIFIKASI_DOKUMEN"] = "VERIFIKASI_DOKUMEN";
    StatusAkreditasi["PEMBAYARAN"] = "PEMBAYARAN";
    StatusAkreditasi["PENAWARAN_ASESOR"] = "PENAWARAN_ASESOR";
    StatusAkreditasi["ASESMEN_KECUKUPAN"] = "ASESMEN_KECUKUPAN";
    StatusAkreditasi["PENGESAHAN_AK"] = "PENGESAHAN_AK";
    StatusAkreditasi["ASESMEN_LAPANGAN"] = "ASESMEN_LAPANGAN";
    StatusAkreditasi["TANGGAPAN_AL"] = "TANGGAPAN_AL";
    StatusAkreditasi["PENGESAHAN_AL"] = "PENGESAHAN_AL";
    StatusAkreditasi["PENETAPAN_PERINGKAT"] = "PENETAPAN_PERINGKAT";
    StatusAkreditasi["SINKRONISASI_BANPT"] = "SINKRONISASI_BANPT";
    StatusAkreditasi["SELESAI"] = "SELESAI";
})(StatusAkreditasi || (exports.StatusAkreditasi = StatusAkreditasi = {}));
var PeringkatAkreditasi;
(function (PeringkatAkreditasi) {
    PeringkatAkreditasi["BELUM_TERAKREDITASI"] = "BELUM_TERAKREDITASI";
    PeringkatAkreditasi["BAIK"] = "BAIK";
    PeringkatAkreditasi["BAIK_SEKALI"] = "BAIK_SEKALI";
    PeringkatAkreditasi["UNGGUL"] = "UNGGUL";
})(PeringkatAkreditasi || (exports.PeringkatAkreditasi = PeringkatAkreditasi = {}));
let Akreditasi = class Akreditasi {
};
exports.Akreditasi = Akreditasi;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_akreditasi', length: 50 }),
    __metadata("design:type", String)
], Akreditasi.prototype, "kodeAkreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tenant_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "tenantId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'upps_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "uppsId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prodi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "prodiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'institusi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "institusiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'jenjang_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "jenjangId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'batch_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "batchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'year' }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "tahun", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: TipeAkreditasi,
        default: TipeAkreditasi.REGULER
    }),
    __metadata("design:type", String)
], Akreditasi.prototype, "tipe", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: StatusAkreditasi,
        default: StatusAkreditasi.REGISTRASI
    }),
    __metadata("design:type", String)
], Akreditasi.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "progress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'info_akreditasi', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "infoAkreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reg_akreditasi_selesai', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Akreditasi.prototype, "regAkreditasiSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wkt_reg_akred_selesai', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "wktRegAkredSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'penentuan_asesor_selesai', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Akreditasi.prototype, "penentuanAsesorSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wkt_penentuan_asesor_selesai', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "wktPenentuanAsesorSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ak_selesai', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Akreditasi.prototype, "akSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wkt_ak_selesai', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "wktAkSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'al_selesai', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Akreditasi.prototype, "alSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wkt_al_selesai', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "wktAlSelesai", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Akreditasi.prototype, "terakreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'peringkat_akred',
        type: 'enum',
        enum: PeringkatAkreditasi,
        nullable: true
    }),
    __metadata("design:type", String)
], Akreditasi.prototype, "peringkatAkred", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nilai_akreditasi', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "nilaiAkreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wkt_terakreditasi', type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "wktTerakreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_berlaku_mulai', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "akreditasiBerlakuMulai", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_berakhir_pada', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "akreditasiBerakhirPada", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_sk', length: 100, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "nomorSk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tgl_sk', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "tglSk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sk_akreditasi', length: 255, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "skAkreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nomor_sertifikat', length: 100, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "nomorSertifikat", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "sertifikat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_dokumen', length: 100, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "ipfsHashDokumen", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_sk', length: 100, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "ipfsHashSk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_sertifikat', length: 100, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "ipfsHashSertifikat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'blockchain_tx_hash', length: 100, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "blockchainTxHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'blockchain_block_number', type: 'bigint', nullable: true }),
    __metadata("design:type", Number)
], Akreditasi.prototype, "blockchainBlockNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_on_blockchain', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Akreditasi.prototype, "isOnBlockchain", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'uuid_sk_akreditasi', length: 50, nullable: true }),
    __metadata("design:type", String)
], Akreditasi.prototype, "uuidSkAkreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Akreditasi.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Akreditasi.prototype, "updatedAt", void 0);
exports.Akreditasi = Akreditasi = __decorate([
    (0, typeorm_1.Entity)('akreditasi'),
    (0, typeorm_1.Index)(['kodeAkreditasi'], { unique: true }),
    (0, typeorm_1.Index)(['institusiId']),
    (0, typeorm_1.Index)(['prodiId']),
    (0, typeorm_1.Index)(['tenantId'])
], Akreditasi);
//# sourceMappingURL=akreditasi.entity.js.map