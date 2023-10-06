import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696581225293 implements MigrationInterface {
    name = 'MyMigration1696581225293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" double precision NOT NULL, "tableId" uuid, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD "quantity" integer`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_95330eef4fb160d10f545ba13aa" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_95330eef4fb160d10f545ba13aa"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "quantity"`);
        await queryRunner.query(`DROP TABLE "payment"`);
    }

}
