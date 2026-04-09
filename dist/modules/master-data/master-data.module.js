"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDataModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const services_1 = require("./services");
const status_institusi_service_1 = require("./services/status-institusi.service");
const riwayat_sk_service_1 = require("./services/riwayat-sk.service");
const sk_service_1 = require("./services/sk.service");
const controllers_1 = require("./controllers");
const status_institusi_controller_1 = require("./controllers/status-institusi.controller");
const riwayat_sk_controller_1 = require("./controllers/riwayat-sk.controller");
const sk_controller_1 = require("./controllers/sk.controller");
let MasterDataModule = class MasterDataModule {
};
exports.MasterDataModule = MasterDataModule;
exports.MasterDataModule = MasterDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.Institusi,
                entities_1.Prodi,
                entities_1.Asesor,
                entities_1.Upps,
                entities_1.KomiteEvaluasi,
                entities_1.MajelisAkreditasi,
                entities_1.Sekretariat,
                entities_1.Provinsi,
                entities_1.Jenjang,
                entities_1.KlasterIlmu,
                entities_1.KlasterProdi,
                entities_1.KlasterProfesi,
                entities_1.Bank,
                entities_1.SkemaPembayaran,
                entities_1.KriteriaPenilaian,
                entities_1.StatusSk,
                entities_1.TipeInstitusi,
                entities_1.RiwayatSk,
                entities_1.Sk,
            ]),
        ],
        controllers: [
            controllers_1.InstitusiController,
            controllers_1.ProdiController,
            controllers_1.AsesorController,
            controllers_1.UppsController,
            controllers_1.KomiteEvaluasiController,
            controllers_1.MajelisAkreditasiController,
            controllers_1.SekretariatController,
            controllers_1.ProvinsiController,
            controllers_1.JenjangController,
            controllers_1.KlasterIlmuController,
            controllers_1.KlasterProdiController,
            controllers_1.KlasterProfesiController,
            controllers_1.BankController,
            controllers_1.SkemaPembayaranController,
            controllers_1.KriteriaPenilaianController,
            controllers_1.StatusSkController,
            status_institusi_controller_1.TipeInstitusiController,
            riwayat_sk_controller_1.RiwayatSkController,
            sk_controller_1.SkController,
        ],
        providers: [
            services_1.InstitusiService,
            services_1.ProdiService,
            services_1.AsesorService,
            services_1.UppsService,
            services_1.KomiteEvaluasiService,
            services_1.MajelisAkreditasiService,
            services_1.SekretariatService,
            services_1.ProvinsiService,
            services_1.JenjangService,
            services_1.KlasterIlmuService,
            services_1.KlasterProdiService,
            services_1.KlasterProfesiService,
            services_1.BankService,
            services_1.SkemaPembayaranService,
            services_1.KriteriaPenilaianService,
            services_1.StatusSkService,
            status_institusi_service_1.TipeInstitusiService,
            riwayat_sk_service_1.RiwayatSkService,
            sk_service_1.SkService,
        ],
        exports: [
            services_1.InstitusiService,
            services_1.ProdiService,
            services_1.AsesorService,
            services_1.UppsService,
            services_1.KomiteEvaluasiService,
            services_1.MajelisAkreditasiService,
            services_1.SekretariatService,
            services_1.ProvinsiService,
            services_1.JenjangService,
            services_1.KlasterIlmuService,
            services_1.KlasterProdiService,
            services_1.KlasterProfesiService,
            services_1.BankService,
            services_1.SkemaPembayaranService,
            services_1.KriteriaPenilaianService,
            services_1.StatusSkService,
            status_institusi_service_1.TipeInstitusiService,
            riwayat_sk_service_1.RiwayatSkService,
            sk_service_1.SkService,
        ],
    })
], MasterDataModule);
//# sourceMappingURL=master-data.module.js.map