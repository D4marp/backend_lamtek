"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const typeorm_1 = require("typeorm");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    let app;
    try {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
        const dataSource = app.get(typeorm_1.DataSource);
        if (dataSource.isInitialized) {
            const queryRunner = dataSource.createQueryRunner();
            try {
                await queryRunner.connect();
                const result = await queryRunner.query('SELECT VERSION() as version');
                const dbVersion = result[0]?.version || 'Unknown';
                logger.log(`✅ Database connected successfully: ${dbVersion}`);
            }
            finally {
                await queryRunner.release();
            }
        }
        else {
            logger.warn('⚠️  Database not initialized yet');
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        logger.error(`❌ Application startup failed: ${errorMessage}`);
        logger.error('Ensure MySQL is running and database credentials in .env are correct');
        process.exit(1);
    }
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    const corsOrigins = process.env.CORS_ORIGINS || '*';
    let allowedOrigins;
    if (corsOrigins === '*') {
        allowedOrigins = '*';
        logger.log(`🔐 CORS: WILDCARD (*) - Accepting all origins`);
    }
    else if (corsOrigins.includes('localhost') || corsOrigins.includes('127.0.0.1')) {
        logger.log(`🔐 CORS: DEVELOPMENT MODE - Accepting all origins (localhost detected)`);
        allowedOrigins = '*';
    }
    else {
        allowedOrigins = corsOrigins
            .split(',')
            .map(origin => origin.trim())
            .filter(origin => origin.length > 0);
        logger.log(`🔐 CORS Configuration:`);
        logger.log(`   Allowed Origins: ${Array.isArray(allowedOrigins) ? allowedOrigins.join(', ') : allowedOrigins}`);
    }
    app.enableCors({
        origin: allowedOrigins,
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        credentials: typeof allowedOrigins === 'string' && allowedOrigins === '*' ? false : true,
        allowedHeaders: ['Content-Type', 'Authorization', 'x-tenant-id', 'Accept', 'X-Requested-With'],
        exposedHeaders: ['X-Total-Count', 'X-Page-Number', 'X-Total-Pages'],
        preflightContinue: false,
        optionsSuccessStatus: 200,
        maxAge: 3600,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('LAM Teknik SaaS API')
        .setDescription('API untuk sistem akreditasi LAM Teknik berbasis Blockchain')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('auth', 'Authentication & Authorization')
        .addTag('tenant', 'Multi-tenant Management')
        .addTag('akreditasi', 'Modul Akreditasi')
        .addTag('asesmen-kecukupan', 'Modul Asesmen Kecukupan')
        .addTag('asesmen-lapangan', 'Modul Asesmen Lapangan')
        .addTag('dokumen', 'Manajemen Dokumen IPFS')
        .addTag('ipfs', 'IPFS Storage Operations')
        .addTag('blockchain', 'Blockchain Operations')
        .addTag('health', 'Health Check')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = parseInt(process.env.PORT || '3000', 10);
    const host = process.env.HOST || '0.0.0.0';
    await app.listen(port, host);
    logger.log(`🚀 LAM Teknik SaaS API running on: http://localhost:${port}`);
    logger.log(`📚 Swagger docs: http://localhost:${port}/api/docs`);
    logger.log(`🔐 Auth endpoints: POST /api/v1/auth/login, POST /api/v1/auth/register`);
}
bootstrap().catch((error) => {
    const logger = new common_1.Logger('Bootstrap');
    logger.error('Failed to start application:', error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map