import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCatsTable1776266955576 implements MigrationInterface {
    name = 'AddCatsTable1776266955576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cat" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "color" character varying NOT NULL, CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cat"`);
    }

}
