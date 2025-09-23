import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_resources_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum_resources_blocks_image_block_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_resources_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_resources_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum_resources_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_resources_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_resources_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_resources_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_resources_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_resources_blocks_zig_zag_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_resources_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_resources_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__resources_v_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum__resources_v_blocks_image_block_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__resources_v_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__resources_v_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__resources_v_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum__resources_v_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__resources_v_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__resources_v_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__resources_v_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__resources_v_blocks_zig_zag_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__resources_v_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__resources_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "resources_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_resources_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"align" "enum_resources_blocks_image_block_align" DEFAULT 'center',
  	"size" "enum_resources_blocks_image_block_size" DEFAULT 'md',
  	"border_color" "enum_resources_blocks_image_block_border_color" DEFAULT 'prune',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"direction" "enum_resources_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum_resources_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum_resources_blocks_frame_card_block_color" DEFAULT 'prune',
  	"body" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_resources_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_resources_blocks_divider_block_color" DEFAULT 'prune',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_zig_zag_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_resources_blocks_zig_zag_block_color" DEFAULT 'prune',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_resources_blocks_spacer_block_size" DEFAULT 'md',
  	"block_name" varchar
  );
  
  CREATE TABLE "resources" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_resources_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_resources_v_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"orientation" "enum__resources_v_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"align" "enum__resources_v_blocks_image_block_align" DEFAULT 'center',
  	"size" "enum__resources_v_blocks_image_block_size" DEFAULT 'md',
  	"border_color" "enum__resources_v_blocks_image_block_border_color" DEFAULT 'prune',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"direction" "enum__resources_v_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum__resources_v_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum__resources_v_blocks_frame_card_block_color" DEFAULT 'prune',
  	"body" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__resources_v_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__resources_v_blocks_divider_block_color" DEFAULT 'prune',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_zig_zag_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__resources_v_blocks_zig_zag_block_color" DEFAULT 'prune',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__resources_v_blocks_spacer_block_size" DEFAULT 'md',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_resources_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_description" varchar,
  	"version_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__resources_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "resources_id" integer;
  ALTER TABLE "resources_blocks_paragraph_block" ADD CONSTRAINT "resources_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_image_block" ADD CONSTRAINT "resources_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_image_block" ADD CONSTRAINT "resources_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_title_block" ADD CONSTRAINT "resources_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_sub_title_block" ADD CONSTRAINT "resources_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_button_download_block" ADD CONSTRAINT "resources_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_button_download_block" ADD CONSTRAINT "resources_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_button_link_block" ADD CONSTRAINT "resources_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_buttons_block" ADD CONSTRAINT "resources_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_license_item_block" ADD CONSTRAINT "resources_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_license_block" ADD CONSTRAINT "resources_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_image_paragraph_block" ADD CONSTRAINT "resources_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_image_paragraph_block" ADD CONSTRAINT "resources_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_frame_card_block" ADD CONSTRAINT "resources_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_frame_card_block" ADD CONSTRAINT "resources_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_ticket_paper_block" ADD CONSTRAINT "resources_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_divider_block" ADD CONSTRAINT "resources_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_zig_zag_block" ADD CONSTRAINT "resources_blocks_zig_zag_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_spacer_block" ADD CONSTRAINT "resources_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources" ADD CONSTRAINT "resources_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources" ADD CONSTRAINT "resources_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_paragraph_block" ADD CONSTRAINT "_resources_v_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_image_block" ADD CONSTRAINT "_resources_v_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_image_block" ADD CONSTRAINT "_resources_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_title_block" ADD CONSTRAINT "_resources_v_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_sub_title_block" ADD CONSTRAINT "_resources_v_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_button_download_block" ADD CONSTRAINT "_resources_v_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_button_download_block" ADD CONSTRAINT "_resources_v_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_button_link_block" ADD CONSTRAINT "_resources_v_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_buttons_block" ADD CONSTRAINT "_resources_v_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_license_item_block" ADD CONSTRAINT "_resources_v_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_license_block" ADD CONSTRAINT "_resources_v_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_image_paragraph_block" ADD CONSTRAINT "_resources_v_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_image_paragraph_block" ADD CONSTRAINT "_resources_v_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_frame_card_block" ADD CONSTRAINT "_resources_v_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_frame_card_block" ADD CONSTRAINT "_resources_v_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_ticket_paper_block" ADD CONSTRAINT "_resources_v_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_divider_block" ADD CONSTRAINT "_resources_v_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_zig_zag_block" ADD CONSTRAINT "_resources_v_blocks_zig_zag_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v_blocks_spacer_block" ADD CONSTRAINT "_resources_v_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_resources_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_resources_v" ADD CONSTRAINT "_resources_v_parent_id_resources_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v" ADD CONSTRAINT "_resources_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_resources_v" ADD CONSTRAINT "_resources_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "resources_blocks_paragraph_block_order_idx" ON "resources_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_paragraph_block_parent_id_idx" ON "resources_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_paragraph_block_path_idx" ON "resources_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_image_block_order_idx" ON "resources_blocks_image_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_image_block_parent_id_idx" ON "resources_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_image_block_path_idx" ON "resources_blocks_image_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_image_block_media_idx" ON "resources_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "resources_blocks_title_block_order_idx" ON "resources_blocks_title_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_title_block_parent_id_idx" ON "resources_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_title_block_path_idx" ON "resources_blocks_title_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_sub_title_block_order_idx" ON "resources_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_sub_title_block_parent_id_idx" ON "resources_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_sub_title_block_path_idx" ON "resources_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_button_download_block_order_idx" ON "resources_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_button_download_block_parent_id_idx" ON "resources_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_button_download_block_path_idx" ON "resources_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_button_download_block_media_idx" ON "resources_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "resources_blocks_button_link_block_order_idx" ON "resources_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_button_link_block_parent_id_idx" ON "resources_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_button_link_block_path_idx" ON "resources_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_buttons_block_order_idx" ON "resources_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_buttons_block_parent_id_idx" ON "resources_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_buttons_block_path_idx" ON "resources_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_license_item_block_order_idx" ON "resources_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_license_item_block_parent_id_idx" ON "resources_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_license_item_block_path_idx" ON "resources_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_license_block_order_idx" ON "resources_blocks_license_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_license_block_parent_id_idx" ON "resources_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_license_block_path_idx" ON "resources_blocks_license_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_image_paragraph_block_order_idx" ON "resources_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_image_paragraph_block_parent_id_idx" ON "resources_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_image_paragraph_block_path_idx" ON "resources_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_image_paragraph_block_image_idx" ON "resources_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "resources_blocks_frame_card_block_order_idx" ON "resources_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_frame_card_block_parent_id_idx" ON "resources_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_frame_card_block_path_idx" ON "resources_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_frame_card_block_image_idx" ON "resources_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "resources_blocks_ticket_paper_block_order_idx" ON "resources_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_ticket_paper_block_parent_id_idx" ON "resources_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_ticket_paper_block_path_idx" ON "resources_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_divider_block_order_idx" ON "resources_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_divider_block_parent_id_idx" ON "resources_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_divider_block_path_idx" ON "resources_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_zig_zag_block_order_idx" ON "resources_blocks_zig_zag_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_zig_zag_block_parent_id_idx" ON "resources_blocks_zig_zag_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_zig_zag_block_path_idx" ON "resources_blocks_zig_zag_block" USING btree ("_path");
  CREATE INDEX "resources_blocks_spacer_block_order_idx" ON "resources_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "resources_blocks_spacer_block_parent_id_idx" ON "resources_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_spacer_block_path_idx" ON "resources_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "resources_image_idx" ON "resources" USING btree ("image_id");
  CREATE INDEX "resources_meta_meta_image_idx" ON "resources" USING btree ("meta_image_id");
  CREATE INDEX "resources_slug_idx" ON "resources" USING btree ("slug");
  CREATE INDEX "resources_updated_at_idx" ON "resources" USING btree ("updated_at");
  CREATE INDEX "resources_created_at_idx" ON "resources" USING btree ("created_at");
  CREATE INDEX "resources__status_idx" ON "resources" USING btree ("_status");
  CREATE INDEX "_resources_v_blocks_paragraph_block_order_idx" ON "_resources_v_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_paragraph_block_parent_id_idx" ON "_resources_v_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_paragraph_block_path_idx" ON "_resources_v_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_image_block_order_idx" ON "_resources_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_image_block_parent_id_idx" ON "_resources_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_image_block_path_idx" ON "_resources_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_image_block_media_idx" ON "_resources_v_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "_resources_v_blocks_title_block_order_idx" ON "_resources_v_blocks_title_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_title_block_parent_id_idx" ON "_resources_v_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_title_block_path_idx" ON "_resources_v_blocks_title_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_sub_title_block_order_idx" ON "_resources_v_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_sub_title_block_parent_id_idx" ON "_resources_v_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_sub_title_block_path_idx" ON "_resources_v_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_button_download_block_order_idx" ON "_resources_v_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_button_download_block_parent_id_idx" ON "_resources_v_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_button_download_block_path_idx" ON "_resources_v_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_button_download_block_media_idx" ON "_resources_v_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "_resources_v_blocks_button_link_block_order_idx" ON "_resources_v_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_button_link_block_parent_id_idx" ON "_resources_v_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_button_link_block_path_idx" ON "_resources_v_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_buttons_block_order_idx" ON "_resources_v_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_buttons_block_parent_id_idx" ON "_resources_v_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_buttons_block_path_idx" ON "_resources_v_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_license_item_block_order_idx" ON "_resources_v_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_license_item_block_parent_id_idx" ON "_resources_v_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_license_item_block_path_idx" ON "_resources_v_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_license_block_order_idx" ON "_resources_v_blocks_license_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_license_block_parent_id_idx" ON "_resources_v_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_license_block_path_idx" ON "_resources_v_blocks_license_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_image_paragraph_block_order_idx" ON "_resources_v_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_image_paragraph_block_parent_id_idx" ON "_resources_v_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_image_paragraph_block_path_idx" ON "_resources_v_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_image_paragraph_block_image_idx" ON "_resources_v_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "_resources_v_blocks_frame_card_block_order_idx" ON "_resources_v_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_frame_card_block_parent_id_idx" ON "_resources_v_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_frame_card_block_path_idx" ON "_resources_v_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_frame_card_block_image_idx" ON "_resources_v_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "_resources_v_blocks_ticket_paper_block_order_idx" ON "_resources_v_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_ticket_paper_block_parent_id_idx" ON "_resources_v_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_ticket_paper_block_path_idx" ON "_resources_v_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_divider_block_order_idx" ON "_resources_v_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_divider_block_parent_id_idx" ON "_resources_v_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_divider_block_path_idx" ON "_resources_v_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_zig_zag_block_order_idx" ON "_resources_v_blocks_zig_zag_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_zig_zag_block_parent_id_idx" ON "_resources_v_blocks_zig_zag_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_zig_zag_block_path_idx" ON "_resources_v_blocks_zig_zag_block" USING btree ("_path");
  CREATE INDEX "_resources_v_blocks_spacer_block_order_idx" ON "_resources_v_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "_resources_v_blocks_spacer_block_parent_id_idx" ON "_resources_v_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "_resources_v_blocks_spacer_block_path_idx" ON "_resources_v_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "_resources_v_parent_idx" ON "_resources_v" USING btree ("parent_id");
  CREATE INDEX "_resources_v_version_version_image_idx" ON "_resources_v" USING btree ("version_image_id");
  CREATE INDEX "_resources_v_version_meta_version_meta_image_idx" ON "_resources_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_resources_v_version_version_slug_idx" ON "_resources_v" USING btree ("version_slug");
  CREATE INDEX "_resources_v_version_version_updated_at_idx" ON "_resources_v" USING btree ("version_updated_at");
  CREATE INDEX "_resources_v_version_version_created_at_idx" ON "_resources_v" USING btree ("version_created_at");
  CREATE INDEX "_resources_v_version_version__status_idx" ON "_resources_v" USING btree ("version__status");
  CREATE INDEX "_resources_v_created_at_idx" ON "_resources_v" USING btree ("created_at");
  CREATE INDEX "_resources_v_updated_at_idx" ON "_resources_v" USING btree ("updated_at");
  CREATE INDEX "_resources_v_latest_idx" ON "_resources_v" USING btree ("latest");
  CREATE INDEX "_resources_v_autosave_idx" ON "_resources_v" USING btree ("autosave");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_resources_id_idx" ON "payload_locked_documents_rels" USING btree ("resources_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "resources_blocks_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_sub_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_button_download_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_button_link_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_buttons_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_license_item_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_license_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_image_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_frame_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_ticket_paper_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_divider_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_zig_zag_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources_blocks_spacer_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_sub_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_button_download_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_button_link_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_buttons_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_license_item_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_license_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_image_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_frame_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_ticket_paper_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_divider_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_zig_zag_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v_blocks_spacer_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_resources_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "resources_blocks_paragraph_block" CASCADE;
  DROP TABLE "resources_blocks_image_block" CASCADE;
  DROP TABLE "resources_blocks_title_block" CASCADE;
  DROP TABLE "resources_blocks_sub_title_block" CASCADE;
  DROP TABLE "resources_blocks_button_download_block" CASCADE;
  DROP TABLE "resources_blocks_button_link_block" CASCADE;
  DROP TABLE "resources_blocks_buttons_block" CASCADE;
  DROP TABLE "resources_blocks_license_item_block" CASCADE;
  DROP TABLE "resources_blocks_license_block" CASCADE;
  DROP TABLE "resources_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "resources_blocks_frame_card_block" CASCADE;
  DROP TABLE "resources_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "resources_blocks_divider_block" CASCADE;
  DROP TABLE "resources_blocks_zig_zag_block" CASCADE;
  DROP TABLE "resources_blocks_spacer_block" CASCADE;
  DROP TABLE "resources" CASCADE;
  DROP TABLE "_resources_v_blocks_paragraph_block" CASCADE;
  DROP TABLE "_resources_v_blocks_image_block" CASCADE;
  DROP TABLE "_resources_v_blocks_title_block" CASCADE;
  DROP TABLE "_resources_v_blocks_sub_title_block" CASCADE;
  DROP TABLE "_resources_v_blocks_button_download_block" CASCADE;
  DROP TABLE "_resources_v_blocks_button_link_block" CASCADE;
  DROP TABLE "_resources_v_blocks_buttons_block" CASCADE;
  DROP TABLE "_resources_v_blocks_license_item_block" CASCADE;
  DROP TABLE "_resources_v_blocks_license_block" CASCADE;
  DROP TABLE "_resources_v_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "_resources_v_blocks_frame_card_block" CASCADE;
  DROP TABLE "_resources_v_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "_resources_v_blocks_divider_block" CASCADE;
  DROP TABLE "_resources_v_blocks_zig_zag_block" CASCADE;
  DROP TABLE "_resources_v_blocks_spacer_block" CASCADE;
  DROP TABLE "_resources_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_resources_fk";
  
  DROP INDEX "payload_locked_documents_rels_resources_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "resources_id";
  DROP TYPE "public"."enum_resources_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum_resources_blocks_image_block_align";
  DROP TYPE "public"."enum_resources_blocks_image_block_size";
  DROP TYPE "public"."enum_resources_blocks_image_block_border_color";
  DROP TYPE "public"."enum_resources_blocks_buttons_block_direction";
  DROP TYPE "public"."enum_resources_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum_resources_blocks_frame_card_block_color";
  DROP TYPE "public"."enum_resources_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum_resources_blocks_divider_block_color";
  DROP TYPE "public"."enum_resources_blocks_zig_zag_block_color";
  DROP TYPE "public"."enum_resources_blocks_spacer_block_size";
  DROP TYPE "public"."enum_resources_status";
  DROP TYPE "public"."enum__resources_v_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum__resources_v_blocks_image_block_align";
  DROP TYPE "public"."enum__resources_v_blocks_image_block_size";
  DROP TYPE "public"."enum__resources_v_blocks_image_block_border_color";
  DROP TYPE "public"."enum__resources_v_blocks_buttons_block_direction";
  DROP TYPE "public"."enum__resources_v_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum__resources_v_blocks_frame_card_block_color";
  DROP TYPE "public"."enum__resources_v_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum__resources_v_blocks_divider_block_color";
  DROP TYPE "public"."enum__resources_v_blocks_zig_zag_block_color";
  DROP TYPE "public"."enum__resources_v_blocks_spacer_block_size";
  DROP TYPE "public"."enum__resources_v_version_status";`)
}
