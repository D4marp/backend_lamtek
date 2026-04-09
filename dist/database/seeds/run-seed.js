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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../../app.module");
const typeorm_1 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("../../modules/auth/entities/user.entity");
const TEST_USERS = [
    {
        name: 'Admin LAM Teknik',
        email: 'admin@lamtek.ac.id',
        password: 'password123',
        role: 'ADMIN',
        tenantId: null,
    },
    {
        name: 'Test User',
        email: 'demo@test.com',
        password: 'admin123',
        role: 'USER',
        tenantId: null,
    },
    {
        name: 'Validator Asesmen',
        email: 'validator@test.com',
        password: 'validator123',
        role: 'VALIDATOR',
        tenantId: null,
    },
    {
        name: 'Institution Admin',
        email: 'institution@test.com',
        password: 'institution123',
        role: 'INSTITUTION',
        tenantId: null,
    },
];
async function seedDatabase() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    try {
        console.log('\n🌱 Starting database seeding...\n');
        const userRepository = dataSource.getRepository(user_entity_1.User);
        for (const testUser of TEST_USERS) {
            const existingUser = await userRepository.findOne({
                where: { email: testUser.email },
            });
            if (existingUser) {
                console.log(`✅ User already exists: ${testUser.email}`);
            }
            else {
                const hashedPassword = await bcrypt.hash(testUser.password, 10);
                const user = userRepository.create({
                    ...testUser,
                    password: hashedPassword,
                });
                await userRepository.save(user);
                console.log(`✅ Created user: ${testUser.email} (Password: ${testUser.password})`);
            }
        }
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📋 AVAILABLE TEST ACCOUNTS FOR LOGIN');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        TEST_USERS.forEach((user) => {
            console.log(`\n📧 Email:    ${user.email}`);
            console.log(`🔐 Password: ${user.password}`);
            console.log(`👤 Role:     ${user.role}`);
        });
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('\n🌐 Access the application at:');
        console.log('   Login:     http://localhost:3002/login');
        console.log('   Dashboard: http://localhost:3002/dashboard');
        console.log('   API Docs:  http://localhost:3003/api/docs');
        console.log('   Swagger:   http://localhost:3003/api/docs\n');
        console.log('✨ Database seeding completed!\n');
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
    finally {
        await app.close();
    }
}
seedDatabase();
//# sourceMappingURL=run-seed.js.map