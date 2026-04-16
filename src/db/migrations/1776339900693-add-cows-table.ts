import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCowsTable1776339900693 implements MigrationInterface {
    name = 'AddCowsTable1776339900693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cow" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "breed" character varying NOT NULL, CONSTRAINT "PK_f55020fa93d34b979d6c89c3aca" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cow"`);
    }

}
