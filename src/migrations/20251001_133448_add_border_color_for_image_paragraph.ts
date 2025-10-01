import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__pages_v_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum_projects_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__projects_v_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum_resources_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__resources_v_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  ALTER TABLE "pages_blocks_image_paragraph_block" ADD COLUMN "border_color" "enum_pages_blocks_image_paragraph_block_border_color" DEFAULT 'prune';
  ALTER TABLE "_pages_v_blocks_image_paragraph_block" ADD COLUMN "border_color" "enum__pages_v_blocks_image_paragraph_block_border_color" DEFAULT 'prune';
  ALTER TABLE "projects_blocks_image_paragraph_block" ADD COLUMN "border_color" "enum_projects_blocks_image_paragraph_block_border_color" DEFAULT 'prune';
  ALTER TABLE "_projects_v_blocks_image_paragraph_block" ADD COLUMN "border_color" "enum__projects_v_blocks_image_paragraph_block_border_color" DEFAULT 'prune';
  ALTER TABLE "resources_blocks_image_paragraph_block" ADD COLUMN "border_color" "enum_resources_blocks_image_paragraph_block_border_color" DEFAULT 'prune';
  ALTER TABLE "_resources_v_blocks_image_paragraph_block" ADD COLUMN "border_color" "enum__resources_v_blocks_image_paragraph_block_border_color" DEFAULT 'prune';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_image_paragraph_block" DROP COLUMN "border_color";
  ALTER TABLE "_pages_v_blocks_image_paragraph_block" DROP COLUMN "border_color";
  ALTER TABLE "projects_blocks_image_paragraph_block" DROP COLUMN "border_color";
  ALTER TABLE "_projects_v_blocks_image_paragraph_block" DROP COLUMN "border_color";
  ALTER TABLE "resources_blocks_image_paragraph_block" DROP COLUMN "border_color";
  ALTER TABLE "_resources_v_blocks_image_paragraph_block" DROP COLUMN "border_color";
  DROP TYPE "public"."enum_pages_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum__pages_v_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum_projects_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum__projects_v_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum_resources_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum__resources_v_blocks_image_paragraph_block_border_color";`)
}
