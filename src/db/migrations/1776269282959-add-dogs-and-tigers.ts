import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDogsAndTigers1776269282959 implements MigrationInterface {
    name = 'AddDogsAndTigers1776269282959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tiger" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "species" character varying NOT NULL, CONSTRAINT "PK_ea07dfdf6812110e9379820be1e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tiger"`);
    }

}
