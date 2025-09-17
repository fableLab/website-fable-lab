import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__pages_v_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_projects_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__projects_v_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TABLE "pages_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_spacer_block_size" DEFAULT 'md',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_spacer_block_size" DEFAULT 'md',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_projects_blocks_spacer_block_size" DEFAULT 'md',
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__projects_v_blocks_spacer_block_size" DEFAULT 'md',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_spacer_block" ADD CONSTRAINT "pages_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_spacer_block" ADD CONSTRAINT "_pages_v_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_spacer_block" ADD CONSTRAINT "projects_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_spacer_block" ADD CONSTRAINT "_projects_v_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_spacer_block_order_idx" ON "pages_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_spacer_block_parent_id_idx" ON "pages_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_spacer_block_path_idx" ON "pages_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_spacer_block_order_idx" ON "_pages_v_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_spacer_block_parent_id_idx" ON "_pages_v_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_spacer_block_path_idx" ON "_pages_v_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_spacer_block_order_idx" ON "projects_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_spacer_block_parent_id_idx" ON "projects_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_spacer_block_path_idx" ON "projects_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_spacer_block_order_idx" ON "_projects_v_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_spacer_block_parent_id_idx" ON "_projects_v_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_spacer_block_path_idx" ON "_projects_v_blocks_spacer_block" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_spacer_block" CASCADE;
  DROP TABLE "_pages_v_blocks_spacer_block" CASCADE;
  DROP TABLE "projects_blocks_spacer_block" CASCADE;
  DROP TABLE "_projects_v_blocks_spacer_block" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_spacer_block_size";
  DROP TYPE "public"."enum__pages_v_blocks_spacer_block_size";
  DROP TYPE "public"."enum_projects_blocks_spacer_block_size";
  DROP TYPE "public"."enum__projects_v_blocks_spacer_block_size";`)
}
