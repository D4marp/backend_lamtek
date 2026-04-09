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
exports.AsesmenKecukupan = void 0;
const typeorm_1 = require("typeorm");
let AsesmenKecukupan = class AsesmenKecukupan {
};
exports.AsesmenKecukupan = AsesmenKecukupan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], AsesmenKecukupan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'akreditasi_id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], AsesmenKecukupan.prototype, "akreditasiId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kode_akreditasi', length: 50 }),
    __metadata("design:type", String)
], AsesmenKecukupan.prototype, "kodeAkreditasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kea_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], AsesmenKecukupan.prototype, "keaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'validator_id', type: 'bigint', unsigned: true, nullable: true }),
    __metadata("design:type", Number)
], AsesmenKecukupan.prototype, "validatorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tgt_wkt_ak', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AsesmenKecukupan.prototype, "targetWaktuAK", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'lak_konsisten', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenKecukupan.prototype, "lapAKKonsisten", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'deskripsi_lap_ak', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AsesmenKecukupan.prototype, "deskripsiLapAK", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hasil_ditetapkan_kea', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenKecukupan.prototype, "hasilDitetapkanKEA", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'note_penetapan_hasil_ak_kea', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AsesmenKecukupan.prototype, "notePenetapanHasilAKKEA", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'skor_asesmen_konsisten', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenKecukupan.prototype, "skorAsesmenKonsisten", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'skor_per_butir_konsisten', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenKecukupan.prototype, "skorPerButirKonsisten", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'terkonsolidasi', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenKecukupan.prototype, "terkonsolidasi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'skor_akhir', type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], AsesmenKecukupan.prototype, "skorAkhir", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ipfs_hash_laporan_ak', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenKecukupan.prototype, "ipfsHashLaporanAK", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'blockchain_tx_hash', length: 100, nullable: true }),
    __metadata("design:type", String)
], AsesmenKecukupan.prototype, "blockchainTxHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_on_blockchain', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], AsesmenKecukupan.prototype, "isOnBlockchain", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], AsesmenKecukupan.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], AsesmenKecukupan.prototype, "updatedAt", void 0);
exports.AsesmenKecukupan = AsesmenKecukupan = __decorate([
    (0, typeorm_1.Entity)('asesmen_kecukupan'),
    (0, typeorm_1.Index)(['akreditasiId'])
], AsesmenKecukupan);
//# sourceMappingURL=asesmen-kecukupan.entity.js.map