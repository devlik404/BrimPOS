import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696608398447 implements MigrationInterface {
    name = 'MyMigration1696608398447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image"`);
    }

}
