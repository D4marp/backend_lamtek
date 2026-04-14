"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("./entities/user.entity");
const institusi_entity_1 = require("../master-data/entities/institusi.entity");
let AuthService = AuthService_1 = class AuthService {
    constructor(userRepository, institusiRepository, jwtService) {
        this.userRepository = userRepository;
        this.institusiRepository = institusiRepository;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async register(registerDto) {
        try {
            this.logger.debug(`[REGISTER] Attempting registration for email: ${registerDto.email}`);
            const existingUser = await this.userRepository.findOne({
                where: { email: registerDto.email },
            });
            if (existingUser) {
                this.logger.warn(`[REGISTER] User already exists with email: ${registerDto.email}`);
                throw new common_1.BadRequestException('Email sudah terdaftar');
            }
            let institusiId = registerDto.tenantId || null;
            if (registerDto.tenant) {
                this.logger.debug(`[REGISTER] Creating new institution: ${registerDto.tenant.name}`);
                const institusi = await this.createInstitusi(registerDto.tenant);
                institusiId = institusi.id;
                this.logger.log(`[REGISTER] Institution created successfully: ${institusi.id} - ${institusi.namaInstitusi}`);
            }
            const hashedPassword = await bcrypt.hash(registerDto.password, 10);
            this.logger.debug(`[REGISTER] Password hashed successfully for ${registerDto.email}`);
            const user = this.userRepository.create({
                name: registerDto.name,
                email: registerDto.email,
                password: hashedPassword,
                role: 'PRODI',
                tenantId: institusiId,
                isActive: true,
                nama: registerDto.name,
            });
            const savedUser = await this.userRepository.save(user);
            this.logger.log(`[REGISTER] User registered successfully: ${savedUser.id} - ${savedUser.email}`);
            const token = this.jwtService.sign({
                id: savedUser.id,
                email: savedUser.email,
                institusiId: institusiId,
            });
            const response = {
                user: this.formatUser(savedUser),
                token,
            };
            if (registerDto.tenant && institusiId) {
                const institusi = await this.institusiRepository.findOne({ where: { id: institusiId } });
                if (institusi) {
                    response.institusi = {
                        id: institusi.id,
                        name: institusi.namaInstitusi,
                        type: institusi.jenisPt,
                        address: institusi.alamat,
                    };
                }
            }
            return response;
        }
        catch (error) {
            this.logger.error(`[REGISTER] Registration failed: ${error.message}`, error.stack);
            throw error;
        }
    }
    async createInstitusi(tenantData) {
        const kode = this.generateInstitusiCode(tenantData.name);
        const existing = await this.institusiRepository.findOne({
            where: { kodeInstitusi: kode },
        });
        if (existing) {
            throw new common_1.ConflictException(`Institusi dengan kode ${kode} sudah ada`);
        }
        const institusi = this.institusiRepository.create({
            kodeInstitusi: kode,
            namaInstitusi: tenantData.name,
            jenisPt: this.mapJenisPt(tenantData.type),
            alamat: tenantData.address || null,
            namaSingkat: this.generateShortName(tenantData.name),
            isActive: true,
        });
        return this.institusiRepository.save(institusi);
    }
    mapJenisPt(type) {
        const mapping = {
            'PERGURUAN_TINGGI': institusi_entity_1.JenisPT.PTS,
            'PTS': institusi_entity_1.JenisPT.PTS,
            'PTN': institusi_entity_1.JenisPT.PTN,
            'PTN_BH': institusi_entity_1.JenisPT.PTN_BH,
            'POLITEKNIK': institusi_entity_1.JenisPT.POLITEKNIK,
            'AKADEMI': institusi_entity_1.JenisPT.PTS,
        };
        return mapping[type] || institusi_entity_1.JenisPT.PTS;
    }
    generateInstitusiCode(name) {
        const base = name.substring(0, 3).toUpperCase();
        const suffix = Date.now().toString().slice(-4);
        return `${base}${suffix}`;
    }
    generateShortName(name) {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 10);
    }
    async login(loginDto) {
        try {
            this.logger.debug(`[LOGIN] Login attempt for email: ${loginDto.email}`);
            const user = await this.userRepository.findOne({
                where: { email: loginDto.email },
            });
            if (!user) {
                this.logger.warn(`[LOGIN] User not found with email: ${loginDto.email}`);
                throw new common_1.UnauthorizedException('Email atau password salah');
            }
            this.logger.debug(`[LOGIN] User found: ${user.id}, checking password...`);
            const passwordMatches = await bcrypt.compare(loginDto.password, user.password);
            if (!passwordMatches) {
                this.logger.warn(`[LOGIN] Password mismatch for user: ${loginDto.email}`);
                throw new common_1.UnauthorizedException('Email atau password salah');
            }
            this.logger.debug(`[LOGIN] Password verified for user: ${loginDto.email}`);
            if (!user.isActive) {
                this.logger.warn(`[LOGIN] User account is inactive: ${loginDto.email}`);
                throw new common_1.UnauthorizedException('Akun Anda tidak aktif');
            }
            const token = this.jwtService.sign({
                id: user.id,
                email: user.email,
                tenantId: user.tenantId,
            });
            this.logger.log(`[LOGIN] Login successful for user: ${user.id} - ${user.email}`);
            return {
                user: this.formatUser(user),
                token,
            };
        }
        catch (error) {
            this.logger.error(`[LOGIN] Login failed: ${error.message}`, error.stack);
            throw error;
        }
    }
    async validateUser(id) {
        try {
            this.logger.debug(`[VALIDATE] Validating user: ${id}`);
            const user = await this.userRepository.findOne({
                where: { id, isActive: true },
            });
            if (!user) {
                this.logger.warn(`[VALIDATE] User not found or inactive: ${id}`);
                throw new common_1.UnauthorizedException('User tidak ditemukan');
            }
            this.logger.debug(`[VALIDATE] User validated successfully: ${id}`);
            return this.formatUser(user);
        }
        catch (error) {
            this.logger.error(`[VALIDATE] Validation failed: ${error.message}`, error.stack);
            throw error;
        }
    }
    async updateProfile(id, data) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.UnauthorizedException('User tidak ditemukan');
        }
        Object.assign(user, data);
        const updatedUser = await this.userRepository.save(user);
        return this.formatUser(updatedUser);
    }
    formatUser(user) {
        const { password, ...result } = user;
        return {
            id: result.id,
            name: result.name,
            email: result.email,
            role: result.role,
            tenantId: result.tenantId,
            noIdentitas: result.noIdentitas,
            noSertifikatEdukatif: result.noSertifikatEdukatif,
            isActive: result.isActive,
            createdAt: result.createdAt,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(institusi_entity_1.Institusi)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map