import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1696609344596 implements MigrationInterface {
    name = 'MyMigration1696609344596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment_histories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying, "total" integer, "date" TIMESTAMP NOT NULL DEFAULT now(), "orderIdId" uuid, CONSTRAINT "PK_b8d817ffe8ddb13748291024593" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "payment_histories" ADD CONSTRAINT "FK_93761c61a0cd3a6273ab0a6ceb1" FOREIGN KEY ("orderIdId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment_histories" DROP CONSTRAINT "FK_93761c61a0cd3a6273ab0a6ceb1"`);
        await queryRunner.query(`DROP TABLE "payment_histories"`);
    }

}
