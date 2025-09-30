import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum__pages_v_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum_projects_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum__projects_v_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum_resources_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum__resources_v_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  ALTER TABLE "pages_blocks_title_block" ADD COLUMN "level" "enum_pages_blocks_title_block_level" DEFAULT 'h2';
  ALTER TABLE "pages_blocks_title_block" ADD COLUMN "zig_zag" boolean;
  ALTER TABLE "_pages_v_blocks_title_block" ADD COLUMN "level" "enum__pages_v_blocks_title_block_level" DEFAULT 'h2';
  ALTER TABLE "_pages_v_blocks_title_block" ADD COLUMN "zig_zag" boolean;
  ALTER TABLE "projects_blocks_title_block" ADD COLUMN "level" "enum_projects_blocks_title_block_level" DEFAULT 'h2';
  ALTER TABLE "projects_blocks_title_block" ADD COLUMN "zig_zag" boolean;
  ALTER TABLE "_projects_v_blocks_title_block" ADD COLUMN "level" "enum__projects_v_blocks_title_block_level" DEFAULT 'h2';
  ALTER TABLE "_projects_v_blocks_title_block" ADD COLUMN "zig_zag" boolean;
  ALTER TABLE "resources_blocks_title_block" ADD COLUMN "level" "enum_resources_blocks_title_block_level" DEFAULT 'h2';
  ALTER TABLE "resources_blocks_title_block" ADD COLUMN "zig_zag" boolean;
  ALTER TABLE "_resources_v_blocks_title_block" ADD COLUMN "level" "enum__resources_v_blocks_title_block_level" DEFAULT 'h2';
  ALTER TABLE "_resources_v_blocks_title_block" ADD COLUMN "zig_zag" boolean;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_title_block" DROP COLUMN "level";
  ALTER TABLE "pages_blocks_title_block" DROP COLUMN "zig_zag";
  ALTER TABLE "_pages_v_blocks_title_block" DROP COLUMN "level";
  ALTER TABLE "_pages_v_blocks_title_block" DROP COLUMN "zig_zag";
  ALTER TABLE "projects_blocks_title_block" DROP COLUMN "level";
  ALTER TABLE "projects_blocks_title_block" DROP COLUMN "zig_zag";
  ALTER TABLE "_projects_v_blocks_title_block" DROP COLUMN "level";
  ALTER TABLE "_projects_v_blocks_title_block" DROP COLUMN "zig_zag";
  ALTER TABLE "resources_blocks_title_block" DROP COLUMN "level";
  ALTER TABLE "resources_blocks_title_block" DROP COLUMN "zig_zag";
  ALTER TABLE "_resources_v_blocks_title_block" DROP COLUMN "level";
  ALTER TABLE "_resources_v_blocks_title_block" DROP COLUMN "zig_zag";
  DROP TYPE "public"."enum_pages_blocks_title_block_level";
  DROP TYPE "public"."enum__pages_v_blocks_title_block_level";
  DROP TYPE "public"."enum_projects_blocks_title_block_level";
  DROP TYPE "public"."enum__projects_v_blocks_title_block_level";
  DROP TYPE "public"."enum_resources_blocks_title_block_level";
  DROP TYPE "public"."enum__resources_v_blocks_title_block_level";`)
}
