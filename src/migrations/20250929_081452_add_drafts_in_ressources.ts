import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_resources_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__resources_v_version_status" AS ENUM('draft', 'published');
  ALTER TABLE "resources_blocks_paragraph_block" ALTER COLUMN "orientation" DROP NOT NULL;
  ALTER TABLE "resources_blocks_paragraph_block" ALTER COLUMN "body" DROP NOT NULL;
  ALTER TABLE "resources_blocks_image_block" ALTER COLUMN "media_id" DROP NOT NULL;
  ALTER TABLE "resources_blocks_title_block" ALTER COLUMN "name" DROP NOT NULL;
  ALTER TABLE "resources_blocks_sub_title_block" ALTER COLUMN "name" DROP NOT NULL;
  ALTER TABLE "resources_blocks_button_download_block" ALTER COLUMN "label" DROP NOT NULL;
  ALTER TABLE "resources_blocks_button_download_block" ALTER COLUMN "media_id" DROP NOT NULL;
  ALTER TABLE "resources_blocks_button_link_block" ALTER COLUMN "label" DROP NOT NULL;
  ALTER TABLE "resources_blocks_button_link_block" ALTER COLUMN "url" DROP NOT NULL;
  ALTER TABLE "resources_blocks_license_item_block" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "resources_blocks_license_item_block" ALTER COLUMN "description" DROP NOT NULL;
  ALTER TABLE "resources_blocks_image_paragraph_block" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "resources_blocks_frame_card_block" ALTER COLUMN "body" DROP NOT NULL;
  ALTER TABLE "resources_blocks_ticket_paper_block" ALTER COLUMN "body" DROP NOT NULL;
  ALTER TABLE "resources_blocks_youtube_video_block" ALTER COLUMN "url" DROP NOT NULL;
  ALTER TABLE "resources" ALTER COLUMN "name" DROP NOT NULL;
  ALTER TABLE "resources" ALTER COLUMN "description" DROP NOT NULL;
  ALTER TABLE "resources" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_paragraph_block" ALTER COLUMN "orientation" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_paragraph_block" ALTER COLUMN "body" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_image_block" ALTER COLUMN "media_id" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_title_block" ALTER COLUMN "name" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_sub_title_block" ALTER COLUMN "name" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_button_download_block" ALTER COLUMN "label" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_button_download_block" ALTER COLUMN "media_id" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_button_link_block" ALTER COLUMN "label" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_button_link_block" ALTER COLUMN "url" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_license_item_block" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_license_item_block" ALTER COLUMN "description" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_image_paragraph_block" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_frame_card_block" ALTER COLUMN "body" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_ticket_paper_block" ALTER COLUMN "body" DROP NOT NULL;
  ALTER TABLE "_resources_v_blocks_youtube_video_block" ALTER COLUMN "url" DROP NOT NULL;
  ALTER TABLE "_resources_v" ALTER COLUMN "version_name" DROP NOT NULL;
  ALTER TABLE "_resources_v" ALTER COLUMN "version_description" DROP NOT NULL;
  ALTER TABLE "_resources_v" ALTER COLUMN "version_image_id" DROP NOT NULL;
  ALTER TABLE "resources" ADD COLUMN "_status" "enum_resources_status" DEFAULT 'draft';
  ALTER TABLE "_resources_v" ADD COLUMN "version__status" "enum__resources_v_version_status" DEFAULT 'draft';
  ALTER TABLE "_resources_v" ADD COLUMN "latest" boolean;
  ALTER TABLE "_resources_v" ADD COLUMN "autosave" boolean;
  CREATE INDEX "resources__status_idx" ON "resources" USING btree ("_status");
  CREATE INDEX "_resources_v_version_version__status_idx" ON "_resources_v" USING btree ("version__status");
  CREATE INDEX "_resources_v_latest_idx" ON "_resources_v" USING btree ("latest");
  CREATE INDEX "_resources_v_autosave_idx" ON "_resources_v" USING btree ("autosave");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "resources__status_idx";
  DROP INDEX "_resources_v_version_version__status_idx";
  DROP INDEX "_resources_v_latest_idx";
  DROP INDEX "_resources_v_autosave_idx";
  ALTER TABLE "resources_blocks_paragraph_block" ALTER COLUMN "orientation" SET NOT NULL;
  ALTER TABLE "resources_blocks_paragraph_block" ALTER COLUMN "body" SET NOT NULL;
  ALTER TABLE "resources_blocks_image_block" ALTER COLUMN "media_id" SET NOT NULL;
  ALTER TABLE "resources_blocks_title_block" ALTER COLUMN "name" SET NOT NULL;
  ALTER TABLE "resources_blocks_sub_title_block" ALTER COLUMN "name" SET NOT NULL;
  ALTER TABLE "resources_blocks_button_download_block" ALTER COLUMN "label" SET NOT NULL;
  ALTER TABLE "resources_blocks_button_download_block" ALTER COLUMN "media_id" SET NOT NULL;
  ALTER TABLE "resources_blocks_button_link_block" ALTER COLUMN "label" SET NOT NULL;
  ALTER TABLE "resources_blocks_button_link_block" ALTER COLUMN "url" SET NOT NULL;
  ALTER TABLE "resources_blocks_license_item_block" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "resources_blocks_license_item_block" ALTER COLUMN "description" SET NOT NULL;
  ALTER TABLE "resources_blocks_image_paragraph_block" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "resources_blocks_frame_card_block" ALTER COLUMN "body" SET NOT NULL;
  ALTER TABLE "resources_blocks_ticket_paper_block" ALTER COLUMN "body" SET NOT NULL;
  ALTER TABLE "resources_blocks_youtube_video_block" ALTER COLUMN "url" SET NOT NULL;
  ALTER TABLE "resources" ALTER COLUMN "name" SET NOT NULL;
  ALTER TABLE "resources" ALTER COLUMN "description" SET NOT NULL;
  ALTER TABLE "resources" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_paragraph_block" ALTER COLUMN "orientation" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_paragraph_block" ALTER COLUMN "body" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_image_block" ALTER COLUMN "media_id" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_title_block" ALTER COLUMN "name" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_sub_title_block" ALTER COLUMN "name" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_button_download_block" ALTER COLUMN "label" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_button_download_block" ALTER COLUMN "media_id" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_button_link_block" ALTER COLUMN "label" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_button_link_block" ALTER COLUMN "url" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_license_item_block" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_license_item_block" ALTER COLUMN "description" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_image_paragraph_block" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_frame_card_block" ALTER COLUMN "body" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_ticket_paper_block" ALTER COLUMN "body" SET NOT NULL;
  ALTER TABLE "_resources_v_blocks_youtube_video_block" ALTER COLUMN "url" SET NOT NULL;
  ALTER TABLE "_resources_v" ALTER COLUMN "version_name" SET NOT NULL;
  ALTER TABLE "_resources_v" ALTER COLUMN "version_description" SET NOT NULL;
  ALTER TABLE "_resources_v" ALTER COLUMN "version_image_id" SET NOT NULL;
  ALTER TABLE "resources" DROP COLUMN "_status";
  ALTER TABLE "_resources_v" DROP COLUMN "version__status";
  ALTER TABLE "_resources_v" DROP COLUMN "latest";
  ALTER TABLE "_resources_v" DROP COLUMN "autosave";
  DROP TYPE "public"."enum_resources_status";
  DROP TYPE "public"."enum__resources_v_version_status";`)
}
