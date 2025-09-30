import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_pages_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_pages_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__pages_v_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__pages_v_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__pages_v_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_projects_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_projects_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_projects_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__projects_v_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__projects_v_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__projects_v_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_resources_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_resources_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_resources_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__resources_v_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__resources_v_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__resources_v_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TABLE "pages_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_pages_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum_pages_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum_pages_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__pages_v_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum__pages_v_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum__pages_v_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_projects_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum_projects_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum_projects_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__projects_v_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum__projects_v_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum__projects_v_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_resources_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum_resources_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum_resources_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__resources_v_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum__resources_v_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum__resources_v_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_image_block" ADD COLUMN "link" varchar;
  ALTER TABLE "_pages_v_blocks_image_block" ADD COLUMN "link" varchar;
  ALTER TABLE "projects_blocks_image_block" ADD COLUMN "link" varchar;
  ALTER TABLE "_projects_v_blocks_image_block" ADD COLUMN "link" varchar;
  ALTER TABLE "resources_blocks_image_block" ADD COLUMN "link" varchar;
  ALTER TABLE "_resources_v_blocks_image_block" ADD COLUMN "link" varchar;
  ALTER TABLE "pages_blocks_card_block" ADD CONSTRAINT "pages_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_grid_block" ADD CONSTRAINT "pages_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_block" ADD CONSTRAINT "_pages_v_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_grid_block" ADD CONSTRAINT "_pages_v_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_card_block" ADD CONSTRAINT "projects_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_grid_block" ADD CONSTRAINT "projects_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_card_block" ADD CONSTRAINT "_projects_v_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_grid_block" ADD CONSTRAINT "_projects_v_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_card_block" ADD CONSTRAINT "resources_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_grid_block" ADD CONSTRAINT "resources_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_card_block" ADD CONSTRAINT "_resources_v_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_grid_block" ADD CONSTRAINT "_resources_v_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_card_block_order_idx" ON "pages_blocks_card_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_block_parent_id_idx" ON "pages_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_block_path_idx" ON "pages_blocks_card_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_grid_block_order_idx" ON "pages_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_grid_block_parent_id_idx" ON "pages_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_grid_block_path_idx" ON "pages_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_card_block_order_idx" ON "_pages_v_blocks_card_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_block_parent_id_idx" ON "_pages_v_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_block_path_idx" ON "_pages_v_blocks_card_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_grid_block_order_idx" ON "_pages_v_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_grid_block_parent_id_idx" ON "_pages_v_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_grid_block_path_idx" ON "_pages_v_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_card_block_order_idx" ON "projects_blocks_card_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_card_block_parent_id_idx" ON "projects_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_card_block_path_idx" ON "projects_blocks_card_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_grid_block_order_idx" ON "projects_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_grid_block_parent_id_idx" ON "projects_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_grid_block_path_idx" ON "projects_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_card_block_order_idx" ON "_projects_v_blocks_card_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_card_block_parent_id_idx" ON "_projects_v_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_card_block_path_idx" ON "_projects_v_blocks_card_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_grid_block_order_idx" ON "_projects_v_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_grid_block_parent_id_idx" ON "_projects_v_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_grid_block_path_idx" ON "_projects_v_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_card_block_order_idx" ON "resources_blocks_card_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_card_block_parent_id_idx" ON "resources_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_card_block_path_idx" ON "resources_blocks_card_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_grid_block_order_idx" ON "resources_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_grid_block_parent_id_idx" ON "resources_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_grid_block_path_idx" ON "resources_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_card_block_order_idx" ON "_resources_v_blocks_card_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_card_block_parent_id_idx" ON "_resources_v_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_card_block_path_idx" ON "_resources_v_blocks_card_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_grid_block_order_idx" ON "_resources_v_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_grid_block_parent_id_idx" ON "_resources_v_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_grid_block_path_idx" ON "_resources_v_blocks_grid_block" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_card_block" CASCADE;
  DROP TABLE "pages_blocks_grid_block" CASCADE;
  DROP TABLE "_pages_v_blocks_card_block" CASCADE;
  DROP TABLE "_pages_v_blocks_grid_block" CASCADE;
  DROP TABLE "projects_blocks_card_block" CASCADE;
  DROP TABLE "projects_blocks_grid_block" CASCADE;
  DROP TABLE "_projects_v_blocks_card_block" CASCADE;
  DROP TABLE "_projects_v_blocks_grid_block" CASCADE;
  DROP TABLE "resources_blocks_card_block" CASCADE;
  DROP TABLE "resources_blocks_grid_block" CASCADE;
  DROP TABLE "_resources_v_blocks_card_block" CASCADE;
  DROP TABLE "_resources_v_blocks_grid_block" CASCADE;
  ALTER TABLE "pages_blocks_image_block" DROP COLUMN "link";
  ALTER TABLE "_pages_v_blocks_image_block" DROP COLUMN "link";
  ALTER TABLE "projects_blocks_image_block" DROP COLUMN "link";
  ALTER TABLE "_projects_v_blocks_image_block" DROP COLUMN "link";
  ALTER TABLE "resources_blocks_image_block" DROP COLUMN "link";
  ALTER TABLE "_resources_v_blocks_image_block" DROP COLUMN "link";
  DROP TYPE "public"."enum_pages_blocks_card_block_color";
  DROP TYPE "public"."enum_pages_blocks_card_block_text_color";
  DROP TYPE "public"."enum_pages_blocks_card_block_border_color";
  DROP TYPE "public"."enum__pages_v_blocks_card_block_color";
  DROP TYPE "public"."enum__pages_v_blocks_card_block_text_color";
  DROP TYPE "public"."enum__pages_v_blocks_card_block_border_color";
  DROP TYPE "public"."enum_projects_blocks_card_block_color";
  DROP TYPE "public"."enum_projects_blocks_card_block_text_color";
  DROP TYPE "public"."enum_projects_blocks_card_block_border_color";
  DROP TYPE "public"."enum__projects_v_blocks_card_block_color";
  DROP TYPE "public"."enum__projects_v_blocks_card_block_text_color";
  DROP TYPE "public"."enum__projects_v_blocks_card_block_border_color";
  DROP TYPE "public"."enum_resources_blocks_card_block_color";
  DROP TYPE "public"."enum_resources_blocks_card_block_text_color";
  DROP TYPE "public"."enum_resources_blocks_card_block_border_color";
  DROP TYPE "public"."enum__resources_v_blocks_card_block_color";
  DROP TYPE "public"."enum__resources_v_blocks_card_block_text_color";
  DROP TYPE "public"."enum__resources_v_blocks_card_block_border_color";`)
}
