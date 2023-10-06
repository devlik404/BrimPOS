import { MigrationInterface, QueryRunner } from "typeorm";

export class Mymigration1696527051108 implements MigrationInterface {
    name = 'Mymigration1696527051108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mhs" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "nim" character varying NOT NULL, "email" character varying NOT NULL, "prodi" character varying NOT NULL, "jurusan" character varying NOT NULL, CONSTRAINT "PK_ee0d221a09dcd03d3a6b9176b06" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mhs"`);
    }

}
