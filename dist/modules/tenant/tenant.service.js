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
exports.TenantService = void 0;
const common_1 = require("@nestjs/common");
const blockchain_service_1 = require("../blockchain/blockchain.service");
let TenantService = class TenantService {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.tenants = new Map();
    }
    async registerTenant(institusiId, nama) {
        let blockchainRegistered = false;
        try {
            await this.blockchainService.registerTenant(institusiId, nama);
            blockchainRegistered = true;
        }
        catch (error) {
            console.error('Failed to register tenant on blockchain:', error);
        }
        const tenant = {
            id: institusiId,
            nama,
            isActive: true,
            blockchainRegistered,
        };
        this.tenants.set(institusiId, tenant);
        return tenant;
    }
    async getTenant(institusiId) {
        return this.tenants.get(institusiId);
    }
    async getAllTenants() {
        return Array.from(this.tenants.values());
    }
    async deactivateTenant(institusiId) {
        const tenant = this.tenants.get(institusiId);
        if (tenant) {
            tenant.isActive = false;
            return true;
        }
        return false;
    }
};
exports.TenantService = TenantService;
exports.TenantService = TenantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [blockchain_service_1.BlockchainService])
], TenantService);
//# sourceMappingURL=tenant.service.js.map