import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696579610667 implements MigrationInterface {
    name = 'MyMigration1696579610667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_food" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "price" double precision, CONSTRAINT "PK_b8a0f9dd5d33f8fb2421b3db67d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_beverage" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "price" double precision, CONSTRAINT "PK_31fff08b43d2a8246f9833f4697" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "foodIdId" uuid, "beverageIdId" uuid, CONSTRAINT "REL_150412545ca5c75184120e8783" UNIQUE ("foodIdId"), CONSTRAINT "REL_41ef61548281f81828ac0e36b1" UNIQUE ("beverageIdId"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "order_date" TIMESTAMP, "tableIdId" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "productIdId" uuid, CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tableIdId" uuid, CONSTRAINT "PK_cc71513680d03ecb01b96655b0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_150412545ca5c75184120e87832" FOREIGN KEY ("foodIdId") REFERENCES "product_food"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_41ef61548281f81828ac0e36b19" FOREIGN KEY ("beverageIdId") REFERENCES "product_beverage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_3ee0dfa50a0df214399f9601004" FOREIGN KEY ("tableIdId") REFERENCES "table"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "table" ADD CONSTRAINT "FK_b86ccdc853fe5cf0e48c5aa2e19" FOREIGN KEY ("productIdId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_history" ADD CONSTRAINT "FK_0801233c968698eb12cad773c03" FOREIGN KEY ("tableIdId") REFERENCES "table"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_history" DROP CONSTRAINT "FK_0801233c968698eb12cad773c03"`);
        await queryRunner.query(`ALTER TABLE "table" DROP CONSTRAINT "FK_b86ccdc853fe5cf0e48c5aa2e19"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_3ee0dfa50a0df214399f9601004"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_41ef61548281f81828ac0e36b19"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_150412545ca5c75184120e87832"`);
        await queryRunner.query(`DROP TABLE "order_history"`);
        await queryRunner.query(`DROP TABLE "table"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "product_beverage"`);
        await queryRunner.query(`DROP TABLE "product_food"`);
    }

}
