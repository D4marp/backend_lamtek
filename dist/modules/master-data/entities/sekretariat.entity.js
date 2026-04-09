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
exports.Sekretariat = exports.JabatanSekretariat = void 0;
const typeorm_1 = require("typeorm");
var JabatanSekretariat;
(function (JabatanSekretariat) {
    JabatanSekretariat["KEPALA"] = "KEPALA";
    JabatanSekretariat["WAKIL_KEPALA"] = "WAKIL_KEPALA";
    JabatanSekretariat["STAFF"] = "STAFF";
    JabatanSekretariat["ADMIN"] = "ADMIN";
})(JabatanSekretariat || (exports.JabatanSekretariat = JabatanSekretariat = {}));
let Sekretariat = class Sekretariat {
};
exports.Sekretariat = Sekretariat;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Sekretariat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Sekretariat.prototype, "nip", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_lengkap', length: 255 }),
    __metadata("design:type", String)
], Sekretariat.prototype, "namaLengkap", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: JabatanSekretariat, default: JabatanSekretariat.STAFF }),
    __metadata("design:type", String)
], Sekretariat.prototype, "jabatan", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Sekretariat.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'no_hp', length: 20, nullable: true }),
    __metadata("design:type", String)
], Sekretariat.prototype, "noHp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'divisi', length: 100, nullable: true }),
    __metadata("design:type", String)
], Sekretariat.prototype, "divisi", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tanggal_bergabung', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Sekretariat.prototype, "tanggalBergabung", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Sekretariat.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Sekretariat.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Sekretariat.prototype, "updatedAt", void 0);
exports.Sekretariat = Sekretariat = __decorate([
    (0, typeorm_1.Entity)('sekretariat'),
    (0, typeorm_1.Index)(['nip'], { unique: true })
], Sekretariat);
//# sourceMappingURL=sekretariat.entity.js.map