"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProsesAkreditasiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const services_1 = require("./services");
const umpan_balik_asesor_service_1 = require("./services/umpan-balik-asesor.service");
const registrasi_akreditasi_service_1 = require("./services/registrasi-akreditasi.service");
const controllers_1 = require("./controllers");
const umpan_balik_asesor_controller_1 = require("./controllers/umpan-balik-asesor.controller");
const registrasi_akreditasi_controller_1 = require("./controllers/registrasi-akreditasi.controller");
let ProsesAkreditasiModule = class ProsesAkreditasiModule {
};
exports.ProsesAkreditasiModule = ProsesAkreditasiModule;
exports.ProsesAkreditasiModule = ProsesAkreditasiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.PenawaranAsesor,
                entities_1.ResponAsesor,
                entities_1.LaporanAsesmen,
                entities_1.TanggapanAl,
                entities_1.UmpanBalik,
                entities_1.PengesahanAk,
                entities_1.PengesahanAl,
                entities_1.KeputusanMa,
                entities_1.SinkronisasiBanpt,
                entities_1.SkAkreditasi,
                entities_1.Validator,
                entities_1.RegistrasiProdiBaru,
                entities_1.UmpanBalikAsesor,
                entities_1.RegistrasiAkreditasi,
            ]),
        ],
        controllers: [
            controllers_1.PenawaranAsesorController,
            controllers_1.ResponAsesorController,
            controllers_1.LaporanAsesmenController,
            controllers_1.TanggapanAlController,
            controllers_1.UmpanBalikController,
            controllers_1.PengesahanAkController,
            controllers_1.PengesahanAlController,
            controllers_1.KeputusanMaController,
            controllers_1.SinkronisasiBanptController,
            controllers_1.SkAkreditasiController,
            controllers_1.ValidatorController,
            controllers_1.RegistrasiProdiBaruController,
            umpan_balik_asesor_controller_1.UmpanBalikAsesorController,
            registrasi_akreditasi_controller_1.RegistrasiAkreditasiController,
        ],
        providers: [
            services_1.PenawaranAsesorService,
            services_1.ResponAsesorService,
            services_1.LaporanAsesmenService,
            services_1.TanggapanAlService,
            services_1.UmpanBalikService,
            services_1.PengesahanAkService,
            services_1.PengesahanAlService,
            services_1.KeputusanMaService,
            services_1.SinkronisasiBanptService,
            services_1.SkAkreditasiService,
            services_1.ValidatorService,
            services_1.RegistrasiProdiBaruService,
            umpan_balik_asesor_service_1.UmpanBalikAsesorService,
            registrasi_akreditasi_service_1.RegistrasiAkreditasiService,
        ],
        exports: [
            services_1.PenawaranAsesorService,
            services_1.ResponAsesorService,
            services_1.LaporanAsesmenService,
            services_1.TanggapanAlService,
            services_1.UmpanBalikService,
            services_1.PengesahanAkService,
            services_1.PengesahanAlService,
            services_1.KeputusanMaService,
            services_1.SinkronisasiBanptService,
            services_1.SkAkreditasiService,
            services_1.ValidatorService,
            services_1.RegistrasiProdiBaruService,
            umpan_balik_asesor_service_1.UmpanBalikAsesorService,
            registrasi_akreditasi_service_1.RegistrasiAkreditasiService,
        ],
    })
], ProsesAkreditasiModule);
//# sourceMappingURL=proses-akreditasi.module.js.map