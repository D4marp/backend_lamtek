"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesmenLapanganModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const asesmen_lapangan_controller_1 = require("./asesmen-lapangan.controller");
const asesmen_lapangan_service_1 = require("./asesmen-lapangan.service");
const asesmen_lapangan_entity_1 = require("./entities/asesmen-lapangan.entity");
const blockchain_module_1 = require("../blockchain/blockchain.module");
const ipfs_module_1 = require("../ipfs/ipfs.module");
let AsesmenLapanganModule = class AsesmenLapanganModule {
};
exports.AsesmenLapanganModule = AsesmenLapanganModule;
exports.AsesmenLapanganModule = AsesmenLapanganModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([asesmen_lapangan_entity_1.AsesmenLapangan]),
            blockchain_module_1.BlockchainModule,
            ipfs_module_1.IpfsModule,
        ],
        controllers: [asesmen_lapangan_controller_1.AsesmenLapanganController],
        providers: [asesmen_lapangan_service_1.AsesmenLapanganService],
        exports: [asesmen_lapangan_service_1.AsesmenLapanganService],
    })
], AsesmenLapanganModule);
//# sourceMappingURL=asesmen-lapangan.module.js.map