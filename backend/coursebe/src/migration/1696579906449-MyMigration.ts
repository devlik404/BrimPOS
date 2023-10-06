import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696579906449 implements MigrationInterface {
    name = 'MyMigration1696579906449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "productFood" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "price" integer, CONSTRAINT "PK_f6787372072d01ff4baeaf921bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productBeverage" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "price" double precision, CONSTRAINT "PK_061287c73e87a5686f416ba030b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orderHistory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tableIdId" uuid, CONSTRAINT "PK_57222ef7564acdf537bc05dfd54" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "productIdId" uuid, CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "order_date" date, "tableIdId" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orderHistory" ADD CONSTRAINT "FK_504e3e8040d58d84f3e4f3ec8d4" FOREIGN KEY ("tableIdId") REFERENCES "table"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "table" ADD CONSTRAINT "FK_b86ccdc853fe5cf0e48c5aa2e19" FOREIGN KEY ("productIdId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_3ee0dfa50a0df214399f9601004" FOREIGN KEY ("tableIdId") REFERENCES "table"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_3ee0dfa50a0df214399f9601004"`);
        await queryRunner.query(`ALTER TABLE "table" DROP CONSTRAINT "FK_b86ccdc853fe5cf0e48c5aa2e19"`);
        await queryRunner.query(`ALTER TABLE "orderHistory" DROP CONSTRAINT "FK_504e3e8040d58d84f3e4f3ec8d4"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "table"`);
        await queryRunner.query(`DROP TABLE "orderHistory"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "productBeverage"`);
        await queryRunner.query(`DROP TABLE "productFood"`);
    }

}
