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
var IpfsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpfsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
let IpfsService = IpfsService_1 = class IpfsService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(IpfsService_1.name);
        this.isConnected = false;
        this.apiUrl = this.configService.get('IPFS_API_URL', 'http://localhost:5001');
        this.gatewayUrl = this.configService.get('IPFS_GATEWAY_URL', 'http://localhost:8080');
    }
    async onModuleInit() {
        await this.checkConnection();
    }
    async checkConnection() {
        try {
            const response = await fetch(`${this.apiUrl}/api/v0/id`, { method: 'POST' });
            if (response.ok) {
                const data = (await response.json());
                this.logger.log(`Connected to IPFS node: ${data.ID}`);
                this.isConnected = true;
                return true;
            }
            return false;
        }
        catch (error) {
            this.logger.error('Failed to connect to IPFS:', error);
            this.isConnected = false;
            return false;
        }
    }
    isIpfsConnected() {
        return this.isConnected;
    }
    async getNodeInfo() {
        try {
            const response = await fetch(`${this.apiUrl}/api/v0/id`, { method: 'POST' });
            if (response.ok) {
                return await response.json();
            }
            throw new Error('Failed to get node info');
        }
        catch (error) {
            this.logger.error('Failed to get IPFS node info:', error);
            throw error;
        }
    }
    async uploadFile(file) {
        try {
            const formData = new FormData();
            const uint8Array = new Uint8Array(file.buffer);
            const blob = new Blob([uint8Array], { type: file.mimetype });
            formData.append('file', blob, file.originalname);
            const response = await fetch(`${this.apiUrl}/api/v0/add?pin=true`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`IPFS upload failed: ${response.statusText}`);
            }
            const result = (await response.json());
            const ipfsHash = result.Hash;
            const sha256 = (0, crypto_1.createHash)('sha256').update(file.buffer).digest('hex');
            this.logger.log(`File uploaded to IPFS: ${ipfsHash}`);
            return {
                ipfsHash,
                url: `${this.gatewayUrl}/ipfs/${ipfsHash}`,
                size: file.size,
                sha256,
            };
        }
        catch (error) {
            this.logger.error('Failed to upload file to IPFS:', error);
            throw error;
        }
    }
    async uploadJson(data) {
        try {
            const jsonString = JSON.stringify(data);
            const formData = new FormData();
            const blob = new Blob([jsonString], { type: 'application/json' });
            formData.append('file', blob, 'data.json');
            const response = await fetch(`${this.apiUrl}/api/v0/add?pin=true`, {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`IPFS upload failed: ${response.statusText}`);
            }
            const result = (await response.json());
            const ipfsHash = result.Hash;
            this.logger.log(`JSON uploaded to IPFS: ${ipfsHash}`);
            return {
                ipfsHash,
                url: `${this.gatewayUrl}/ipfs/${ipfsHash}`,
            };
        }
        catch (error) {
            this.logger.error('Failed to upload JSON to IPFS:', error);
            throw error;
        }
    }
    async getFile(ipfsHash) {
        try {
            const response = await fetch(`${this.gatewayUrl}/ipfs/${ipfsHash}`);
            if (!response.ok) {
                throw new Error(`Failed to get file from IPFS: ${response.statusText}`);
            }
            const arrayBuffer = await response.arrayBuffer();
            return Buffer.from(arrayBuffer);
        }
        catch (error) {
            this.logger.error(`Failed to get file ${ipfsHash} from IPFS:`, error);
            throw error;
        }
    }
    async getJson(ipfsHash) {
        try {
            const response = await fetch(`${this.gatewayUrl}/ipfs/${ipfsHash}`);
            if (!response.ok) {
                throw new Error(`Failed to get JSON from IPFS: ${response.statusText}`);
            }
            return await response.json();
        }
        catch (error) {
            this.logger.error(`Failed to get JSON ${ipfsHash} from IPFS:`, error);
            throw error;
        }
    }
    async pinFile(ipfsHash) {
        try {
            const response = await fetch(`${this.apiUrl}/api/v0/pin/add?arg=${ipfsHash}`, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error(`Failed to pin file: ${response.statusText}`);
            }
            this.logger.log(`File pinned: ${ipfsHash}`);
            return true;
        }
        catch (error) {
            this.logger.error(`Failed to pin file ${ipfsHash}:`, error);
            return false;
        }
    }
    async unpinFile(ipfsHash) {
        try {
            const response = await fetch(`${this.apiUrl}/api/v0/pin/rm?arg=${ipfsHash}`, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error(`Failed to unpin file: ${response.statusText}`);
            }
            this.logger.log(`File unpinned: ${ipfsHash}`);
            return true;
        }
        catch (error) {
            this.logger.error(`Failed to unpin file ${ipfsHash}:`, error);
            return false;
        }
    }
    async getPinnedFiles() {
        try {
            const response = await fetch(`${this.apiUrl}/api/v0/pin/ls`, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error(`Failed to get pinned files: ${response.statusText}`);
            }
            const result = (await response.json());
            return Object.keys(result.Keys || {});
        }
        catch (error) {
            this.logger.error('Failed to get pinned files:', error);
            return [];
        }
    }
    getGatewayUrl(ipfsHash) {
        return `${this.gatewayUrl}/ipfs/${ipfsHash}`;
    }
    async verifyFileIntegrity(ipfsHash, expectedSha256) {
        try {
            const fileBuffer = await this.getFile(ipfsHash);
            const actualSha256 = (0, crypto_1.createHash)('sha256').update(fileBuffer).digest('hex');
            return actualSha256 === expectedSha256;
        }
        catch (error) {
            this.logger.error(`Failed to verify file integrity for ${ipfsHash}:`, error);
            return false;
        }
    }
};
exports.IpfsService = IpfsService;
exports.IpfsService = IpfsService = IpfsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], IpfsService);
//# sourceMappingURL=ipfs.service.js.map