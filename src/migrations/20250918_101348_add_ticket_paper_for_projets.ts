import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__projects_v_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TABLE "projects_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_projects_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__projects_v_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "projects_blocks_ticket_paper_block" ADD CONSTRAINT "projects_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_ticket_paper_block" ADD CONSTRAINT "_projects_v_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_blocks_ticket_paper_block_order_idx" ON "projects_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_ticket_paper_block_parent_id_idx" ON "projects_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_ticket_paper_block_path_idx" ON "projects_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_ticket_paper_block_order_idx" ON "_projects_v_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_ticket_paper_block_parent_id_idx" ON "_projects_v_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_ticket_paper_block_path_idx" ON "_projects_v_blocks_ticket_paper_block" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "projects_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "_projects_v_blocks_ticket_paper_block" CASCADE;
  DROP TYPE "public"."enum_projects_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum__projects_v_blocks_ticket_paper_block_color";`)
}
