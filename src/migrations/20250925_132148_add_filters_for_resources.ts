import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_resources_creators" AS ENUM('fable-Lab', 'external');
  CREATE TYPE "public"."enum_resources_needs" AS ENUM('Accompagner', 'Animer un atelier', 'Animer une formation', 'Apprendre une langue', 'Communiquer', 'Écrire', 'Fabriquer', 'Se former', 'S’informer', 'Sensibiliser', 'Traduire');
  CREATE TYPE "public"."enum_resources_linguistics" AS ENUM('Analphabétisme', 'Illettrisme', 'Langage clair', 'Multilingue');
  CREATE TYPE "public"."enum__resources_v_version_creators" AS ENUM('fable-Lab', 'external');
  CREATE TYPE "public"."enum__resources_v_version_needs" AS ENUM('Accompagner', 'Animer un atelier', 'Animer une formation', 'Apprendre une langue', 'Communiquer', 'Écrire', 'Fabriquer', 'Se former', 'S’informer', 'Sensibiliser', 'Traduire');
  CREATE TYPE "public"."enum__resources_v_version_linguistics" AS ENUM('Analphabétisme', 'Illettrisme', 'Langage clair', 'Multilingue');
  CREATE TABLE "resources_creators" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_resources_creators",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_needs" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_resources_needs",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_linguistics" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_resources_linguistics",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "resources_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"languages_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_resources_v_version_creators" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_version_creators",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_version_needs" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_version_needs",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_version_linguistics" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__resources_v_version_linguistics",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_resources_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"languages_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "languages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"code" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "languages_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "categories_id" integer;
  ALTER TABLE "resources_creators" ADD CONSTRAINT "resources_creators_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_needs" ADD CONSTRAINT "resources_needs_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_linguistics" ADD CONSTRAINT "resources_linguistics_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_languages_fk" FOREIGN KEY ("languages_id") REFERENCES "public"."languages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_version_creators" ADD CONSTRAINT "_resources_v_version_creators_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_version_needs" ADD CONSTRAINT "_resources_v_version_needs_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_version_linguistics" ADD CONSTRAINT "_resources_v_version_linguistics_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_languages_fk" FOREIGN KEY ("languages_id") REFERENCES "public"."languages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_rels" ADD CONSTRAINT "_resources_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "resources_creators_order_idx" ON "resources_creators" USING btree ("order");
  CREATE INDEX "resources_creators_parent_idx" ON "resources_creators" USING btree ("parent_id");
  CREATE INDEX "resources_needs_order_idx" ON "resources_needs" USING btree ("order");
  CREATE INDEX "resources_needs_parent_idx" ON "resources_needs" USING btree ("parent_id");
  CREATE INDEX "resources_linguistics_order_idx" ON "resources_linguistics" USING btree ("order");
  CREATE INDEX "resources_linguistics_parent_idx" ON "resources_linguistics" USING btree ("parent_id");
  CREATE INDEX "resources_rels_order_idx" ON "resources_rels" USING btree ("order");
  CREATE INDEX "resources_rels_parent_idx" ON "resources_rels" USING btree ("parent_id");
  CREATE INDEX "resources_rels_path_idx" ON "resources_rels" USING btree ("path");
  CREATE INDEX "resources_rels_languages_id_idx" ON "resources_rels" USING btree ("languages_id");
  CREATE INDEX "resources_rels_categories_id_idx" ON "resources_rels" USING btree ("categories_id");
  CREATE INDEX "_resources_v_version_creators_order_idx" ON "_resources_v_version_creators" USING btree ("order");
  CREATE INDEX "_resources_v_version_creators_parent_idx" ON "_resources_v_version_creators" USING btree ("parent_id");
  CREATE INDEX "_resources_v_version_needs_order_idx" ON "_resources_v_version_needs" USING btree ("order");
  CREATE INDEX "_resources_v_version_needs_parent_idx" ON "_resources_v_version_needs" USING btree ("parent_id");
  CREATE INDEX "_resources_v_version_linguistics_order_idx" ON "_resources_v_version_linguistics" USING btree ("order");
  CREATE INDEX "_resources_v_version_linguistics_parent_idx" ON "_resources_v_version_linguistics" USING btree ("parent_id");
  CREATE INDEX "_resources_v_rels_order_idx" ON "_resources_v_rels" USING btree ("order");
  CREATE INDEX "_resources_v_rels_parent_idx" ON "_resources_v_rels" USING btree ("parent_id");
  CREATE INDEX "_resources_v_rels_path_idx" ON "_resources_v_rels" USING btree ("path");
  CREATE INDEX "_resources_v_rels_languages_id_idx" ON "_resources_v_rels" USING btree ("languages_id");
  CREATE INDEX "_resources_v_rels_categories_id_idx" ON "_resources_v_rels" USING btree ("categories_id");
  CREATE UNIQUE INDEX "languages_code_idx" ON "languages" USING btree ("code");
  CREATE INDEX "languages_updated_at_idx" ON "languages" USING btree ("updated_at");
  CREATE INDEX "languages_created_at_idx" ON "languages" USING btree ("created_at");
  CREATE UNIQUE INDEX "categories_name_idx" ON "categories" USING btree ("name");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_languages_fk" FOREIGN KEY ("languages_id") REFERENCES "public"."languages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_languages_id_idx" ON "payload_locked_documents_rels" USING btree ("languages_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "resources_creators" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_needs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_linguistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_version_creators" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_version_needs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_version_linguistics" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "languages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "categories" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "resources_creators" CASCADE;
  DROP TABLE "resources_needs" CASCADE;
  DROP TABLE "resources_linguistics" CASCADE;
  DROP TABLE "resources_rels" CASCADE;
  DROP TABLE "_resources_v_version_creators" CASCADE;
  DROP TABLE "_resources_v_version_needs" CASCADE;
  DROP TABLE "_resources_v_version_linguistics" CASCADE;
  DROP TABLE "_resources_v_rels" CASCADE;
  DROP TABLE "languages" CASCADE;
  DROP TABLE "categories" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_languages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_categories_fk";
  
  DROP INDEX "payload_locked_documents_rels_languages_id_idx";
  DROP INDEX "payload_locked_documents_rels_categories_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "languages_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "categories_id";
  DROP TYPE "public"."enum_resources_creators";
  DROP TYPE "public"."enum_resources_needs";
  DROP TYPE "public"."enum_resources_linguistics";
  DROP TYPE "public"."enum__resources_v_version_creators";
  DROP TYPE "public"."enum__resources_v_version_needs";
  DROP TYPE "public"."enum__resources_v_version_linguistics";`)
}
