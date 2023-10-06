import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696607940640 implements MigrationInterface {
    name = 'MyMigration1696607940640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "price" integer, "category" character varying, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tables" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tableName" character varying, "orderIdId" uuid, CONSTRAINT "PK_7cf2aca7af9550742f855d4eb69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_histories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying, "total" integer, "date" TIMESTAMP, "orderIdId" uuid, CONSTRAINT "PK_b8d817ffe8ddb13748291024593" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" integer, "productIdId" uuid, "tableIdId" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying, "password" character varying, "email" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tables" ADD CONSTRAINT "FK_b1acd0795ce9b2d830261e47820" FOREIGN KEY ("orderIdId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_histories" ADD CONSTRAINT "FK_93761c61a0cd3a6273ab0a6ceb1" FOREIGN KEY ("orderIdId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_bf6f2aacd6c2b7711d75207da26" FOREIGN KEY ("productIdId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_04b2cd4f044a8e5f7673aa69b57" FOREIGN KEY ("tableIdId") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_04b2cd4f044a8e5f7673aa69b57"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_bf6f2aacd6c2b7711d75207da26"`);
        await queryRunner.query(`ALTER TABLE "payment_histories" DROP CONSTRAINT "FK_93761c61a0cd3a6273ab0a6ceb1"`);
        await queryRunner.query(`ALTER TABLE "tables" DROP CONSTRAINT "FK_b1acd0795ce9b2d830261e47820"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "payment_histories"`);
        await queryRunner.query(`DROP TABLE "tables"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
