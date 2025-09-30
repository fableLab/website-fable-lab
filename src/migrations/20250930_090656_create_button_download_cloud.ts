import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_button_download_cloud_block" ADD CONSTRAINT "pages_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_button_download_cloud_block" ADD CONSTRAINT "_pages_v_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_button_download_cloud_block" ADD CONSTRAINT "projects_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_button_download_cloud_block" ADD CONSTRAINT "_projects_v_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_button_download_cloud_block" ADD CONSTRAINT "resources_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_button_download_cloud_block" ADD CONSTRAINT "_resources_v_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_button_download_cloud_block_order_idx" ON "pages_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_button_download_cloud_block_parent_id_idx" ON "pages_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_button_download_cloud_block_path_idx" ON "pages_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_button_download_cloud_block_order_idx" ON "_pages_v_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_button_download_cloud_block_parent_id_idx" ON "_pages_v_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_button_download_cloud_block_path_idx" ON "_pages_v_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_button_download_cloud_block_order_idx" ON "projects_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_button_download_cloud_block_parent_id_idx" ON "projects_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_button_download_cloud_block_path_idx" ON "projects_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_button_download_cloud_block_order_idx" ON "_projects_v_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_button_download_cloud_block_parent_id_idx" ON "_projects_v_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_button_download_cloud_block_path_idx" ON "_projects_v_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_button_download_cloud_block_order_idx" ON "resources_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_button_download_cloud_block_parent_id_idx" ON "resources_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_button_download_cloud_block_path_idx" ON "resources_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_button_download_cloud_block_order_idx" ON "_resources_v_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_button_download_cloud_block_parent_id_idx" ON "_resources_v_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_button_download_cloud_block_path_idx" ON "_resources_v_blocks_button_download_cloud_block" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "_pages_v_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "projects_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "_projects_v_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "resources_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "_resources_v_blocks_button_download_cloud_block" CASCADE;`)
}
