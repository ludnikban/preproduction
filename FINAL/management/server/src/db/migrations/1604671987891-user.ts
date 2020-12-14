import {MigrationInterface, QueryRunner} from "typeorm";

export class user1604671987891 implements MigrationInterface {
    name = 'user1604671987891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "nick_Name" character varying,
        "last_Name" character varying, "first_Name" character varying, "email" character varying NOT NULL, 
        "password" character varying NOT NULL, "phone_Number" integer NOT NULL DEFAULT '0',  
        "description" character varying, "position" character varying, "deleted_at" TIMESTAMP,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), 
        CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), 
        CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`)
    }

}
