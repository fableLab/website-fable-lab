import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_image_block_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__pages_v_blocks_image_block_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__pages_v_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum_projects_blocks_image_block_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_projects_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_projects_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__projects_v_blocks_image_block_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__projects_v_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__projects_v_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  ALTER TABLE "pages_blocks_image_block" ADD COLUMN "align" "enum_pages_blocks_image_block_align" DEFAULT 'center';
  ALTER TABLE "pages_blocks_image_block" ADD COLUMN "size" "enum_pages_blocks_image_block_size" DEFAULT 'md';
  ALTER TABLE "pages_blocks_image_block" ADD COLUMN "border_color" "enum_pages_blocks_image_block_border_color" DEFAULT 'prune';
  ALTER TABLE "_pages_v_blocks_image_block" ADD COLUMN "align" "enum__pages_v_blocks_image_block_align" DEFAULT 'center';
  ALTER TABLE "_pages_v_blocks_image_block" ADD COLUMN "size" "enum__pages_v_blocks_image_block_size" DEFAULT 'md';
  ALTER TABLE "_pages_v_blocks_image_block" ADD COLUMN "border_color" "enum__pages_v_blocks_image_block_border_color" DEFAULT 'prune';
  ALTER TABLE "projects_blocks_image_block" ADD COLUMN "align" "enum_projects_blocks_image_block_align" DEFAULT 'center';
  ALTER TABLE "projects_blocks_image_block" ADD COLUMN "size" "enum_projects_blocks_image_block_size" DEFAULT 'md';
  ALTER TABLE "projects_blocks_image_block" ADD COLUMN "border_color" "enum_projects_blocks_image_block_border_color" DEFAULT 'prune';
  ALTER TABLE "_projects_v_blocks_image_block" ADD COLUMN "align" "enum__projects_v_blocks_image_block_align" DEFAULT 'center';
  ALTER TABLE "_projects_v_blocks_image_block" ADD COLUMN "size" "enum__projects_v_blocks_image_block_size" DEFAULT 'md';
  ALTER TABLE "_projects_v_blocks_image_block" ADD COLUMN "border_color" "enum__projects_v_blocks_image_block_border_color" DEFAULT 'prune';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_image_block" DROP COLUMN "align";
  ALTER TABLE "pages_blocks_image_block" DROP COLUMN "size";
  ALTER TABLE "pages_blocks_image_block" DROP COLUMN "border_color";
  ALTER TABLE "_pages_v_blocks_image_block" DROP COLUMN "align";
  ALTER TABLE "_pages_v_blocks_image_block" DROP COLUMN "size";
  ALTER TABLE "_pages_v_blocks_image_block" DROP COLUMN "border_color";
  ALTER TABLE "projects_blocks_image_block" DROP COLUMN "align";
  ALTER TABLE "projects_blocks_image_block" DROP COLUMN "size";
  ALTER TABLE "projects_blocks_image_block" DROP COLUMN "border_color";
  ALTER TABLE "_projects_v_blocks_image_block" DROP COLUMN "align";
  ALTER TABLE "_projects_v_blocks_image_block" DROP COLUMN "size";
  ALTER TABLE "_projects_v_blocks_image_block" DROP COLUMN "border_color";
  DROP TYPE "public"."enum_pages_blocks_image_block_align";
  DROP TYPE "public"."enum_pages_blocks_image_block_size";
  DROP TYPE "public"."enum_pages_blocks_image_block_border_color";
  DROP TYPE "public"."enum__pages_v_blocks_image_block_align";
  DROP TYPE "public"."enum__pages_v_blocks_image_block_size";
  DROP TYPE "public"."enum__pages_v_blocks_image_block_border_color";
  DROP TYPE "public"."enum_projects_blocks_image_block_align";
  DROP TYPE "public"."enum_projects_blocks_image_block_size";
  DROP TYPE "public"."enum_projects_blocks_image_block_border_color";
  DROP TYPE "public"."enum__projects_v_blocks_image_block_align";
  DROP TYPE "public"."enum__projects_v_blocks_image_block_size";
  DROP TYPE "public"."enum__projects_v_blocks_image_block_border_color";`)
}
