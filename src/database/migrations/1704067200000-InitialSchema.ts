import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

/**
 * Initial database schema migration for LAM Teknik SaaS
 * Creates all core tables with relationships and indices
 * 
 * Tables:
 * - users: User accounts and authentication
 * - tenants: Multi-tenant support
 * - akreditasi: Main accreditation process
 * - asesmen_kecukupan: Document assessment
 * - asesmen_lapangan: Field assessment
 * - dokumen: Document storage with IPFS/blockchain tracking
 * - pembayaran: Payment transactions
 */
export class InitialSchema1704067200000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // ============================================
    // USERS & AUTHENTICATION
    // ============================================
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'firstName',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'lastName',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'role',
            type: 'enum',
            enum: ['admin', 'user', 'assessor', 'reviewer'],
            default: "'user'",
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['active', 'inactive', 'suspended'],
            default: "'active'",
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        indices: [
          new TableIndex({ name: 'IDX_users_email', columnNames: ['email'] }),
          new TableIndex({ name: 'IDX_users_role', columnNames: ['role'] }),
          new TableIndex({ name: 'IDX_users_status', columnNames: ['status'] }),
        ],
      }),
      true,
    );

    // ============================================
    // TENANTS (Multi-tenant)
    // ============================================
    await queryRunner.createTable(
      new Table({
        name: 'tenants',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'slug',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['active', 'inactive'],
            default: "'active'",
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );

    // ============================================
    // AKREDITASI (Main Module)
    // ============================================
    await queryRunner.createTable(
      new Table({
        name: 'akreditasi',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'tenantId',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['draft', 'submitted', 'in_review', 'approved', 'rejected'],
            default: "'draft'",
          },
          {
            name: 'createdBy',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        indices: [
          new TableIndex({ name: 'IDX_akreditasi_tenantId', columnNames: ['tenantId'] }),
          new TableIndex({ name: 'IDX_akreditasi_status', columnNames: ['status'] }),
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'akreditasi',
      new TableForeignKey({
        name: 'FK_akreditasi_tenantId',
        columnNames: ['tenantId'],
        referencedTableName: 'tenants',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );

    // ============================================
    // ASESMEN KECUKUPAN (Document Assessment)
    // ============================================
    await queryRunner.createTable(
      new Table({
        name: 'asesmen_kecukupan',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'akreditasiId',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'completed', 'approved', 'rejected'],
            default: "'pending'",
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        indices: [
          new TableIndex({ name: 'IDX_asesmen_kecukupan_akreditasiId', columnNames: ['akreditasiId'] }),
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'asesmen_kecukupan',
      new TableForeignKey({
        name: 'FK_asesmen_kecukupan_akreditasiId',
        columnNames: ['akreditasiId'],
        referencedTableName: 'akreditasi',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );

    // ============================================
    // ASESMEN LAPANGAN (Field Assessment)
    // ============================================
    await queryRunner.createTable(
      new Table({
        name: 'asesmen_lapangan',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'akreditasiId',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'location',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'completed', 'approved', 'rejected'],
            default: "'pending'",
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        indices: [
          new TableIndex({ name: 'IDX_asesmen_lapangan_akreditasiId', columnNames: ['akreditasiId'] }),
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'asesmen_lapangan',
      new TableForeignKey({
        name: 'FK_asesmen_lapangan_akreditasiId',
        columnNames: ['akreditasiId'],
        referencedTableName: 'akreditasi',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );

    // ============================================
    // DOCUMENTS & BLOCKCHAIN
    // ============================================
    await queryRunner.createTable(
      new Table({
        name: 'dokumen',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'akreditasiId',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'fileName',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'ipfsHash',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'blockchainHash',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'ipfs_stored', 'blockchain_recorded', 'verified'],
            default: "'pending'",
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        indices: [
          new TableIndex({ name: 'IDX_dokumen_akreditasiId', columnNames: ['akreditasiId'] }),
          new TableIndex({ name: 'IDX_dokumen_ipfsHash', columnNames: ['ipfsHash'] }),
          new TableIndex({ name: 'IDX_dokumen_blockchainHash', columnNames: ['blockchainHash'] }),
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'dokumen',
      new TableForeignKey({
        name: 'FK_dokumen_akreditasiId',
        columnNames: ['akreditasiId'],
        referencedTableName: 'akreditasi',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );

    // ============================================
    // PEMBAYARAN (Payment Module)
    // ============================================
    await queryRunner.createTable(
      new Table({
        name: 'pembayaran',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            length: '36',
            isPrimary: true,
          },
          {
            name: 'akreditasiId',
            type: 'varchar',
            length: '36',
            isNullable: false,
          },
          {
            name: 'amount',
            type: 'decimal',
            precision: 12,
            scale: 2,
            isNullable: false,
          },
          {
            name: 'currency',
            type: 'varchar',
            length: '3',
            default: "'IDR'",
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'completed', 'failed', 'cancelled'],
            default: "'pending'",
          },
          {
            name: 'transactionHash',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
        indices: [
          new TableIndex({ name: 'IDX_pembayaran_akreditasiId', columnNames: ['akreditasiId'] }),
          new TableIndex({ name: 'IDX_pembayaran_status', columnNames: ['status'] }),
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'pembayaran',
      new TableForeignKey({
        name: 'FK_pembayaran_akreditasiId',
        columnNames: ['akreditasiId'],
        referencedTableName: 'akreditasi',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop foreign keys first
    await queryRunner.dropForeignKey('pembayaran', 'FK_pembayaran_akreditasiId');
    await queryRunner.dropForeignKey('dokumen', 'FK_dokumen_akreditasiId');
    await queryRunner.dropForeignKey('asesmen_lapangan', 'FK_asesmen_lapangan_akreditasiId');
    await queryRunner.dropForeignKey('asesmen_kecukupan', 'FK_asesmen_kecukupan_akreditasiId');
    await queryRunner.dropForeignKey('akreditasi', 'FK_akreditasi_tenantId');

    // Drop tables
    await queryRunner.dropTable('pembayaran', true);
    await queryRunner.dropTable('dokumen', true);
    await queryRunner.dropTable('asesmen_lapangan', true);
    await queryRunner.dropTable('asesmen_kecukupan', true);
    await queryRunner.dropTable('akreditasi', true);
    await queryRunner.dropTable('tenants', true);
    await queryRunner.dropTable('users', true);
  }
}
