import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696660224325 implements MigrationInterface {
    name = 'MyMigration1696660224325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "price" integer, "category" character varying, "image" character varying, "ordersId" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tables" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tableName" character varying, CONSTRAINT "PK_7cf2aca7af9550742f855d4eb69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_histories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying, "total" integer, "date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b8d817ffe8ddb13748291024593" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" integer, "tableId" uuid, "paymentHistoryId" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying, "password" character varying, "email" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_5e47f94f1353b902908e359e476" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_2a7fdd7af437285a3ef0fc8b64f" FOREIGN KEY ("tableId") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_2bd3c3e5f47e48d8c0d2f8a2d4c" FOREIGN KEY ("paymentHistoryId") REFERENCES "payment_histories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_2bd3c3e5f47e48d8c0d2f8a2d4c"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_2a7fdd7af437285a3ef0fc8b64f"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_5e47f94f1353b902908e359e476"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "payment_histories"`);
        await queryRunner.query(`DROP TABLE "tables"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
