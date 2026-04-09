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
const app_module_1 = require("./app.module");
const typeorm_1 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
const user_entity_1 = require("./modules/auth/entities/user.entity");
async function seedDatabase() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    try {
        console.log('🌱 Seeding database...');
        const userRepository = dataSource.getRepository(user_entity_1.User);
        const hashedPassword = await bcrypt.hash('password123', 10);
        const testUsers = [
            {
                id: 1,
                name: 'Admin LAM Teknik',
                email: 'admin@lamtek.ac.id',
                role: 'ADMIN',
                password: hashedPassword,
            },
            {
                id: 2,
                name: 'Demo User',
                email: 'demo@test.com',
                role: 'PRODI',
                password: hashedPassword,
            },
            {
                id: 3,
                name: 'Validator User',
                email: 'validator@test.com',
                role: 'VALIDATOR',
                password: hashedPassword,
            },
            {
                id: 4,
                name: 'Institution User',
                email: 'institution@test.com',
                role: 'KOMITE_EVALUASI',
                password: hashedPassword,
            },
        ];
        for (const userData of testUsers) {
            const existing = await userRepository.findOne({
                where: { email: userData.email },
            });
            if (!existing) {
                const user = userRepository.create(userData);
                await userRepository.save(user);
                console.log(`✅ Created user: ${userData.email} (${userData.role})`);
            }
            else {
                existing.name = userData.name;
                existing.role = userData.role;
                existing.password = hashedPassword;
                await userRepository.save(existing);
                console.log(`✏️  Updated user: ${userData.email} (${userData.role})`);
            }
        }
        console.log('\n📋 Test Users Created/Updated:');
        console.log('================================');
        testUsers.forEach((user) => {
            console.log(`\n📧 ${user.email}`);
            console.log(`   Name: ${user.name}`);
            console.log(`   Role: ${user.role}`);
            console.log(`   Password: password123`);
        });
        console.log('\n🌐 Login at: http://localhost:3000/login');
        console.log('✨ Database seeding completed!');
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
    }
    finally {
        await app.close();
    }
}
seedDatabase();
//# sourceMappingURL=seed.js.map