"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AkreditasiModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const akreditasi_controller_1 = require("./akreditasi.controller");
const akreditasi_service_1 = require("./akreditasi.service");
const akreditasi_entity_1 = require("./entities/akreditasi.entity");
const blockchain_module_1 = require("../blockchain/blockchain.module");
const ipfs_module_1 = require("../ipfs/ipfs.module");
let AkreditasiModule = class AkreditasiModule {
};
exports.AkreditasiModule = AkreditasiModule;
exports.AkreditasiModule = AkreditasiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([akreditasi_entity_1.Akreditasi]),
            blockchain_module_1.BlockchainModule,
            ipfs_module_1.IpfsModule,
        ],
        controllers: [akreditasi_controller_1.AkreditasiController],
        providers: [akreditasi_service_1.AkreditasiService],
        exports: [akreditasi_service_1.AkreditasiService],
    })
], AkreditasiModule);
//# sourceMappingURL=akreditasi.module.js.map