import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDogsTable1776268175276 implements MigrationInterface {
    name = 'AddDogsTable1776268175276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dog" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "breed" character varying NOT NULL, CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dog"`);
    }

}
