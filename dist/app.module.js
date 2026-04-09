"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const akreditasi_module_1 = require("./modules/akreditasi/akreditasi.module");
const asesmen_kecukupan_module_1 = require("./modules/asesmen-kecukupan/asesmen-kecukupan.module");
const asesmen_lapangan_module_1 = require("./modules/asesmen-lapangan/asesmen-lapangan.module");
const dokumen_module_1 = require("./modules/dokumen/dokumen.module");
const blockchain_module_1 = require("./modules/blockchain/blockchain.module");
const ipfs_module_1 = require("./modules/ipfs/ipfs.module");
const auth_module_1 = require("./modules/auth/auth.module");
const tenant_module_1 = require("./modules/tenant/tenant.module");
const health_module_1 = require("./modules/health/health.module");
const master_data_module_1 = require("./modules/master-data/master-data.module");
const proses_akreditasi_module_1 = require("./modules/proses-akreditasi/proses-akreditasi.module");
const users_module_1 = require("./modules/users/users.module");
const pembayaran_module_1 = require("./modules/pembayaran/pembayaran.module");
const kafka_module_1 = require("./modules/kafka/kafka.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', '.env.local'],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    url: configService.get('DATABASE_URL'),
                    host: configService.get('DB_HOST', 'localhost'),
                    port: configService.get('DB_PORT', 3306),
                    username: configService.get('DB_USERNAME', 'lamtek'),
                    password: configService.get('DB_PASSWORD', 'lamtek123'),
                    database: configService.get('DB_DATABASE', 'lamtek_db'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: configService.get('NODE_ENV') !== 'production',
                    logging: configService.get('NODE_ENV') === 'development',
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            tenant_module_1.TenantModule,
            users_module_1.UsersModule,
            pembayaran_module_1.PembayaranModule,
            master_data_module_1.MasterDataModule,
            proses_akreditasi_module_1.ProsesAkreditasiModule,
            akreditasi_module_1.AkreditasiModule,
            asesmen_kecukupan_module_1.AsesmenKecukupanModule,
            asesmen_lapangan_module_1.AsesmenLapanganModule,
            dokumen_module_1.DokumenModule,
            blockchain_module_1.BlockchainModule,
            ipfs_module_1.IpfsModule,
            health_module_1.HealthModule,
            kafka_module_1.KafkaModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map