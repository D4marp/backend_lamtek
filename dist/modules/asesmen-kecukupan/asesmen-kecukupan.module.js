"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesmenKecukupanModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const asesmen_kecukupan_controller_1 = require("./asesmen-kecukupan.controller");
const asesmen_kecukupan_service_1 = require("./asesmen-kecukupan.service");
const asesmen_kecukupan_entity_1 = require("./entities/asesmen-kecukupan.entity");
const blockchain_module_1 = require("../blockchain/blockchain.module");
const ipfs_module_1 = require("../ipfs/ipfs.module");
let AsesmenKecukupanModule = class AsesmenKecukupanModule {
};
exports.AsesmenKecukupanModule = AsesmenKecukupanModule;
exports.AsesmenKecukupanModule = AsesmenKecukupanModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([asesmen_kecukupan_entity_1.AsesmenKecukupan]),
            blockchain_module_1.BlockchainModule,
            ipfs_module_1.IpfsModule,
        ],
        controllers: [asesmen_kecukupan_controller_1.AsesmenKecukupanController],
        providers: [asesmen_kecukupan_service_1.AsesmenKecukupanService],
        exports: [asesmen_kecukupan_service_1.AsesmenKecukupanService],
    })
], AsesmenKecukupanModule);
//# sourceMappingURL=asesmen-kecukupan.module.js.map