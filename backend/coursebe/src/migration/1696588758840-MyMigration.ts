import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696588758840 implements MigrationInterface {
    name = 'MyMigration1696588758840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_foods" ADD "image" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product_beverages" ADD "image" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_beverages" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "product_foods" DROP COLUMN "image"`);
    }

}
