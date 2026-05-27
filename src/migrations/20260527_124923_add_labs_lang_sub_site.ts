import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_labslangs_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum_labslangs_blocks_image_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_labslangs_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_labslangs_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum_labslangs_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum_labslangs_blocks_title_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_labslangs_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_labslangs_blocks_buttons_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_labslangs_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_labslangs_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum_labslangs_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_labslangs_blocks_frame_card_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_labslangs_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_labslangs_blocks_ticket_paper_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_labslangs_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_labslangs_blocks_zig_zag_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_labslangs_blocks_zig_zag_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_labslangs_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_labslangs_blocks_youtube_video_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_labslangs_blocks_youtube_video_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_labslangs_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_labslangs_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_labslangs_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_labslangs_color" AS ENUM('blue', 'perspective');
  CREATE TYPE "public"."enum_labslangs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__labslangs_v_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum__labslangs_v_blocks_image_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__labslangs_v_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__labslangs_v_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__labslangs_v_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum__labslangs_v_blocks_title_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__labslangs_v_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum__labslangs_v_blocks_buttons_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__labslangs_v_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__labslangs_v_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__labslangs_v_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__labslangs_v_blocks_frame_card_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__labslangs_v_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__labslangs_v_blocks_ticket_paper_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__labslangs_v_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__labslangs_v_blocks_zig_zag_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__labslangs_v_blocks_zig_zag_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__labslangs_v_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__labslangs_v_blocks_youtube_video_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__labslangs_v_blocks_youtube_video_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__labslangs_v_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__labslangs_v_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__labslangs_v_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__labslangs_v_version_color" AS ENUM('blue', 'perspective');
  CREATE TYPE "public"."enum__labslangs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_ll_page_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum_ll_page_blocks_image_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_ll_page_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_ll_page_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum_ll_page_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum_ll_page_blocks_title_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_ll_page_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_ll_page_blocks_buttons_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_ll_page_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_ll_page_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum_ll_page_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_ll_page_blocks_frame_card_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_ll_page_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_ll_page_blocks_ticket_paper_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_ll_page_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_ll_page_blocks_zig_zag_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_ll_page_blocks_zig_zag_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_ll_page_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_ll_page_blocks_youtube_video_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum_ll_page_blocks_youtube_video_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_ll_page_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_ll_page_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_ll_page_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_ll_page_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__ll_page_v_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum__ll_page_v_blocks_image_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__ll_page_v_blocks_image_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__ll_page_v_blocks_image_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__ll_page_v_blocks_title_block_level" AS ENUM('h2', 'h3', 'h4');
  CREATE TYPE "public"."enum__ll_page_v_blocks_title_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__ll_page_v_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum__ll_page_v_blocks_buttons_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__ll_page_v_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__ll_page_v_blocks_image_paragraph_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune', 'transparent');
  CREATE TYPE "public"."enum__ll_page_v_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__ll_page_v_blocks_frame_card_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__ll_page_v_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__ll_page_v_blocks_ticket_paper_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__ll_page_v_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__ll_page_v_blocks_zig_zag_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__ll_page_v_blocks_zig_zag_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__ll_page_v_blocks_spacer_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__ll_page_v_blocks_youtube_video_block_align" AS ENUM('left', 'center', 'right', 'full');
  CREATE TYPE "public"."enum__ll_page_v_blocks_youtube_video_block_size" AS ENUM('xs', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__ll_page_v_blocks_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__ll_page_v_blocks_card_block_text_color" AS ENUM('black', 'white', 'yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__ll_page_v_blocks_card_block_border_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__ll_page_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "labslangs_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_labslangs_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"align" "enum_labslangs_blocks_image_block_align" DEFAULT 'center',
  	"size" "enum_labslangs_blocks_image_block_size" DEFAULT 'md',
  	"border_color" "enum_labslangs_blocks_image_block_border_color" DEFAULT 'prune',
  	"link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"level" "enum_labslangs_blocks_title_block_level" DEFAULT 'h2',
  	"align" "enum_labslangs_blocks_title_block_align",
  	"zig_zag" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"direction" "enum_labslangs_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"align" "enum_labslangs_blocks_buttons_block_align" DEFAULT 'full',
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum_labslangs_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"border_color" "enum_labslangs_blocks_image_paragraph_block_border_color" DEFAULT 'prune',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum_labslangs_blocks_frame_card_block_color" DEFAULT 'prune',
  	"align" "enum_labslangs_blocks_frame_card_block_align" DEFAULT 'center',
  	"body" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_labslangs_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"align" "enum_labslangs_blocks_ticket_paper_block_align",
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_labslangs_blocks_divider_block_color" DEFAULT 'prune',
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_zig_zag_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_labslangs_blocks_zig_zag_block_color" DEFAULT 'prune',
  	"align" "enum_labslangs_blocks_zig_zag_block_align",
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_labslangs_blocks_spacer_block_size" DEFAULT 'md',
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_youtube_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"align" "enum_labslangs_blocks_youtube_video_block_align",
  	"size" "enum_labslangs_blocks_youtube_video_block_size" DEFAULT 'md',
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_labslangs_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum_labslangs_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum_labslangs_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "labslangs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"color" "enum_labslangs_color" DEFAULT 'blue',
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_labslangs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_labslangs_v_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"orientation" "enum__labslangs_v_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"align" "enum__labslangs_v_blocks_image_block_align" DEFAULT 'center',
  	"size" "enum__labslangs_v_blocks_image_block_size" DEFAULT 'md',
  	"border_color" "enum__labslangs_v_blocks_image_block_border_color" DEFAULT 'prune',
  	"link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"level" "enum__labslangs_v_blocks_title_block_level" DEFAULT 'h2',
  	"align" "enum__labslangs_v_blocks_title_block_align",
  	"zig_zag" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"direction" "enum__labslangs_v_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"align" "enum__labslangs_v_blocks_buttons_block_align" DEFAULT 'full',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum__labslangs_v_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"border_color" "enum__labslangs_v_blocks_image_paragraph_block_border_color" DEFAULT 'prune',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum__labslangs_v_blocks_frame_card_block_color" DEFAULT 'prune',
  	"align" "enum__labslangs_v_blocks_frame_card_block_align" DEFAULT 'center',
  	"body" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__labslangs_v_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"align" "enum__labslangs_v_blocks_ticket_paper_block_align",
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__labslangs_v_blocks_divider_block_color" DEFAULT 'prune',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_zig_zag_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__labslangs_v_blocks_zig_zag_block_color" DEFAULT 'prune',
  	"align" "enum__labslangs_v_blocks_zig_zag_block_align",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__labslangs_v_blocks_spacer_block_size" DEFAULT 'md',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_youtube_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"align" "enum__labslangs_v_blocks_youtube_video_block_align",
  	"size" "enum__labslangs_v_blocks_youtube_video_block_size" DEFAULT 'md',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__labslangs_v_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum__labslangs_v_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum__labslangs_v_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_labslangs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_color" "enum__labslangs_v_version_color" DEFAULT 'blue',
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__labslangs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "ll_page_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_ll_page_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"align" "enum_ll_page_blocks_image_block_align" DEFAULT 'center',
  	"size" "enum_ll_page_blocks_image_block_size" DEFAULT 'md',
  	"border_color" "enum_ll_page_blocks_image_block_border_color" DEFAULT 'prune',
  	"link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"level" "enum_ll_page_blocks_title_block_level" DEFAULT 'h2',
  	"align" "enum_ll_page_blocks_title_block_align",
  	"zig_zag" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"direction" "enum_ll_page_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"align" "enum_ll_page_blocks_buttons_block_align" DEFAULT 'full',
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum_ll_page_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"border_color" "enum_ll_page_blocks_image_paragraph_block_border_color" DEFAULT 'prune',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum_ll_page_blocks_frame_card_block_color" DEFAULT 'prune',
  	"align" "enum_ll_page_blocks_frame_card_block_align" DEFAULT 'center',
  	"body" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_ll_page_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"align" "enum_ll_page_blocks_ticket_paper_block_align",
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_ll_page_blocks_divider_block_color" DEFAULT 'prune',
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_zig_zag_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_ll_page_blocks_zig_zag_block_color" DEFAULT 'prune',
  	"align" "enum_ll_page_blocks_zig_zag_block_align",
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_ll_page_blocks_spacer_block_size" DEFAULT 'md',
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_youtube_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"align" "enum_ll_page_blocks_youtube_video_block_align",
  	"size" "enum_ll_page_blocks_youtube_video_block_size" DEFAULT 'md',
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_ll_page_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum_ll_page_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum_ll_page_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "ll_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_ll_page_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_ll_page_v_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"orientation" "enum__ll_page_v_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"align" "enum__ll_page_v_blocks_image_block_align" DEFAULT 'center',
  	"size" "enum__ll_page_v_blocks_image_block_size" DEFAULT 'md',
  	"border_color" "enum__ll_page_v_blocks_image_block_border_color" DEFAULT 'prune',
  	"link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"level" "enum__ll_page_v_blocks_title_block_level" DEFAULT 'h2',
  	"align" "enum__ll_page_v_blocks_title_block_align",
  	"zig_zag" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_button_download_cloud_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"direction" "enum__ll_page_v_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"align" "enum__ll_page_v_blocks_buttons_block_align" DEFAULT 'full',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum__ll_page_v_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"border_color" "enum__ll_page_v_blocks_image_paragraph_block_border_color" DEFAULT 'prune',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum__ll_page_v_blocks_frame_card_block_color" DEFAULT 'prune',
  	"align" "enum__ll_page_v_blocks_frame_card_block_align" DEFAULT 'center',
  	"body" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__ll_page_v_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"align" "enum__ll_page_v_blocks_ticket_paper_block_align",
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__ll_page_v_blocks_divider_block_color" DEFAULT 'prune',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_zig_zag_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__ll_page_v_blocks_zig_zag_block_color" DEFAULT 'prune',
  	"align" "enum__ll_page_v_blocks_zig_zag_block_align",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_spacer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__ll_page_v_blocks_spacer_block_size" DEFAULT 'md',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_youtube_video_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"align" "enum__ll_page_v_blocks_youtube_video_block_align",
  	"size" "enum__ll_page_v_blocks_youtube_video_block_size" DEFAULT 'md',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__ll_page_v_blocks_card_block_color" DEFAULT 'violet',
  	"text_color" "enum__ll_page_v_blocks_card_block_text_color" DEFAULT 'black',
  	"border_color" "enum__ll_page_v_blocks_card_block_border_color",
  	"link" varchar,
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v_blocks_grid_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ll_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__ll_page_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk";
  
  DROP INDEX "payload_locked_documents_rels_payload_jobs_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "labslangs_id" integer;
  ALTER TABLE "labslangs_blocks_paragraph_block" ADD CONSTRAINT "labslangs_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_image_block" ADD CONSTRAINT "labslangs_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_image_block" ADD CONSTRAINT "labslangs_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_title_block" ADD CONSTRAINT "labslangs_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_sub_title_block" ADD CONSTRAINT "labslangs_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_button_download_cloud_block" ADD CONSTRAINT "labslangs_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_button_download_block" ADD CONSTRAINT "labslangs_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_button_download_block" ADD CONSTRAINT "labslangs_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_button_link_block" ADD CONSTRAINT "labslangs_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_buttons_block" ADD CONSTRAINT "labslangs_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_license_item_block" ADD CONSTRAINT "labslangs_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_license_block" ADD CONSTRAINT "labslangs_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_image_paragraph_block" ADD CONSTRAINT "labslangs_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_image_paragraph_block" ADD CONSTRAINT "labslangs_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_frame_card_block" ADD CONSTRAINT "labslangs_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_frame_card_block" ADD CONSTRAINT "labslangs_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_ticket_paper_block" ADD CONSTRAINT "labslangs_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_divider_block" ADD CONSTRAINT "labslangs_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_zig_zag_block" ADD CONSTRAINT "labslangs_blocks_zig_zag_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_spacer_block" ADD CONSTRAINT "labslangs_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_youtube_video_block" ADD CONSTRAINT "labslangs_blocks_youtube_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_card_block" ADD CONSTRAINT "labslangs_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_grid_block" ADD CONSTRAINT "labslangs_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_form_block" ADD CONSTRAINT "labslangs_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "labslangs_blocks_form_block" ADD CONSTRAINT "labslangs_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "labslangs" ADD CONSTRAINT "labslangs_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_paragraph_block" ADD CONSTRAINT "_labslangs_v_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_image_block" ADD CONSTRAINT "_labslangs_v_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_image_block" ADD CONSTRAINT "_labslangs_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_title_block" ADD CONSTRAINT "_labslangs_v_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_sub_title_block" ADD CONSTRAINT "_labslangs_v_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_button_download_cloud_block" ADD CONSTRAINT "_labslangs_v_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_button_download_block" ADD CONSTRAINT "_labslangs_v_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_button_download_block" ADD CONSTRAINT "_labslangs_v_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_button_link_block" ADD CONSTRAINT "_labslangs_v_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_buttons_block" ADD CONSTRAINT "_labslangs_v_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_license_item_block" ADD CONSTRAINT "_labslangs_v_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_license_block" ADD CONSTRAINT "_labslangs_v_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_image_paragraph_block" ADD CONSTRAINT "_labslangs_v_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_image_paragraph_block" ADD CONSTRAINT "_labslangs_v_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_frame_card_block" ADD CONSTRAINT "_labslangs_v_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_frame_card_block" ADD CONSTRAINT "_labslangs_v_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_ticket_paper_block" ADD CONSTRAINT "_labslangs_v_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_divider_block" ADD CONSTRAINT "_labslangs_v_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_zig_zag_block" ADD CONSTRAINT "_labslangs_v_blocks_zig_zag_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_spacer_block" ADD CONSTRAINT "_labslangs_v_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_youtube_video_block" ADD CONSTRAINT "_labslangs_v_blocks_youtube_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_card_block" ADD CONSTRAINT "_labslangs_v_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_grid_block" ADD CONSTRAINT "_labslangs_v_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_form_block" ADD CONSTRAINT "_labslangs_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_labslangs_v_blocks_form_block" ADD CONSTRAINT "_labslangs_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_labslangs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_labslangs_v" ADD CONSTRAINT "_labslangs_v_parent_id_labslangs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."labslangs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_labslangs_v" ADD CONSTRAINT "_labslangs_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_paragraph_block" ADD CONSTRAINT "ll_page_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_image_block" ADD CONSTRAINT "ll_page_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_image_block" ADD CONSTRAINT "ll_page_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_title_block" ADD CONSTRAINT "ll_page_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_sub_title_block" ADD CONSTRAINT "ll_page_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_button_download_cloud_block" ADD CONSTRAINT "ll_page_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_button_download_block" ADD CONSTRAINT "ll_page_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_button_download_block" ADD CONSTRAINT "ll_page_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_button_link_block" ADD CONSTRAINT "ll_page_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_buttons_block" ADD CONSTRAINT "ll_page_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_license_item_block" ADD CONSTRAINT "ll_page_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_license_block" ADD CONSTRAINT "ll_page_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_image_paragraph_block" ADD CONSTRAINT "ll_page_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_image_paragraph_block" ADD CONSTRAINT "ll_page_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_frame_card_block" ADD CONSTRAINT "ll_page_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_frame_card_block" ADD CONSTRAINT "ll_page_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_ticket_paper_block" ADD CONSTRAINT "ll_page_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_divider_block" ADD CONSTRAINT "ll_page_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_zig_zag_block" ADD CONSTRAINT "ll_page_blocks_zig_zag_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_spacer_block" ADD CONSTRAINT "ll_page_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_youtube_video_block" ADD CONSTRAINT "ll_page_blocks_youtube_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_card_block" ADD CONSTRAINT "ll_page_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ll_page_blocks_grid_block" ADD CONSTRAINT "ll_page_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ll_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_paragraph_block" ADD CONSTRAINT "_ll_page_v_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_image_block" ADD CONSTRAINT "_ll_page_v_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_image_block" ADD CONSTRAINT "_ll_page_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_title_block" ADD CONSTRAINT "_ll_page_v_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_sub_title_block" ADD CONSTRAINT "_ll_page_v_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_button_download_cloud_block" ADD CONSTRAINT "_ll_page_v_blocks_button_download_cloud_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_button_download_block" ADD CONSTRAINT "_ll_page_v_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_button_download_block" ADD CONSTRAINT "_ll_page_v_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_button_link_block" ADD CONSTRAINT "_ll_page_v_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_buttons_block" ADD CONSTRAINT "_ll_page_v_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_license_item_block" ADD CONSTRAINT "_ll_page_v_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_license_block" ADD CONSTRAINT "_ll_page_v_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_image_paragraph_block" ADD CONSTRAINT "_ll_page_v_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_image_paragraph_block" ADD CONSTRAINT "_ll_page_v_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_frame_card_block" ADD CONSTRAINT "_ll_page_v_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_frame_card_block" ADD CONSTRAINT "_ll_page_v_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_ticket_paper_block" ADD CONSTRAINT "_ll_page_v_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_divider_block" ADD CONSTRAINT "_ll_page_v_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_zig_zag_block" ADD CONSTRAINT "_ll_page_v_blocks_zig_zag_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_spacer_block" ADD CONSTRAINT "_ll_page_v_blocks_spacer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_youtube_video_block" ADD CONSTRAINT "_ll_page_v_blocks_youtube_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_card_block" ADD CONSTRAINT "_ll_page_v_blocks_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ll_page_v_blocks_grid_block" ADD CONSTRAINT "_ll_page_v_blocks_grid_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ll_page_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "labslangs_blocks_paragraph_block_order_idx" ON "labslangs_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_paragraph_block_parent_id_idx" ON "labslangs_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_paragraph_block_path_idx" ON "labslangs_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_image_block_order_idx" ON "labslangs_blocks_image_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_image_block_parent_id_idx" ON "labslangs_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_image_block_path_idx" ON "labslangs_blocks_image_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_image_block_media_idx" ON "labslangs_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "labslangs_blocks_title_block_order_idx" ON "labslangs_blocks_title_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_title_block_parent_id_idx" ON "labslangs_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_title_block_path_idx" ON "labslangs_blocks_title_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_sub_title_block_order_idx" ON "labslangs_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_sub_title_block_parent_id_idx" ON "labslangs_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_sub_title_block_path_idx" ON "labslangs_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_button_download_cloud_block_order_idx" ON "labslangs_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_button_download_cloud_block_parent_id_idx" ON "labslangs_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_button_download_cloud_block_path_idx" ON "labslangs_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_button_download_block_order_idx" ON "labslangs_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_button_download_block_parent_id_idx" ON "labslangs_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_button_download_block_path_idx" ON "labslangs_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_button_download_block_media_idx" ON "labslangs_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "labslangs_blocks_button_link_block_order_idx" ON "labslangs_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_button_link_block_parent_id_idx" ON "labslangs_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_button_link_block_path_idx" ON "labslangs_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_buttons_block_order_idx" ON "labslangs_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_buttons_block_parent_id_idx" ON "labslangs_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_buttons_block_path_idx" ON "labslangs_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_license_item_block_order_idx" ON "labslangs_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_license_item_block_parent_id_idx" ON "labslangs_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_license_item_block_path_idx" ON "labslangs_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_license_block_order_idx" ON "labslangs_blocks_license_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_license_block_parent_id_idx" ON "labslangs_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_license_block_path_idx" ON "labslangs_blocks_license_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_image_paragraph_block_order_idx" ON "labslangs_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_image_paragraph_block_parent_id_idx" ON "labslangs_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_image_paragraph_block_path_idx" ON "labslangs_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_image_paragraph_block_image_idx" ON "labslangs_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "labslangs_blocks_frame_card_block_order_idx" ON "labslangs_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_frame_card_block_parent_id_idx" ON "labslangs_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_frame_card_block_path_idx" ON "labslangs_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_frame_card_block_image_idx" ON "labslangs_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "labslangs_blocks_ticket_paper_block_order_idx" ON "labslangs_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_ticket_paper_block_parent_id_idx" ON "labslangs_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_ticket_paper_block_path_idx" ON "labslangs_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_divider_block_order_idx" ON "labslangs_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_divider_block_parent_id_idx" ON "labslangs_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_divider_block_path_idx" ON "labslangs_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_zig_zag_block_order_idx" ON "labslangs_blocks_zig_zag_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_zig_zag_block_parent_id_idx" ON "labslangs_blocks_zig_zag_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_zig_zag_block_path_idx" ON "labslangs_blocks_zig_zag_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_spacer_block_order_idx" ON "labslangs_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_spacer_block_parent_id_idx" ON "labslangs_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_spacer_block_path_idx" ON "labslangs_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_youtube_video_block_order_idx" ON "labslangs_blocks_youtube_video_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_youtube_video_block_parent_id_idx" ON "labslangs_blocks_youtube_video_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_youtube_video_block_path_idx" ON "labslangs_blocks_youtube_video_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_card_block_order_idx" ON "labslangs_blocks_card_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_card_block_parent_id_idx" ON "labslangs_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_card_block_path_idx" ON "labslangs_blocks_card_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_grid_block_order_idx" ON "labslangs_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_grid_block_parent_id_idx" ON "labslangs_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_grid_block_path_idx" ON "labslangs_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_form_block_order_idx" ON "labslangs_blocks_form_block" USING btree ("_order");
  CREATE INDEX "labslangs_blocks_form_block_parent_id_idx" ON "labslangs_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "labslangs_blocks_form_block_path_idx" ON "labslangs_blocks_form_block" USING btree ("_path");
  CREATE INDEX "labslangs_blocks_form_block_form_idx" ON "labslangs_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "labslangs_meta_meta_image_idx" ON "labslangs" USING btree ("meta_image_id");
  CREATE INDEX "labslangs_slug_idx" ON "labslangs" USING btree ("slug");
  CREATE INDEX "labslangs_updated_at_idx" ON "labslangs" USING btree ("updated_at");
  CREATE INDEX "labslangs_created_at_idx" ON "labslangs" USING btree ("created_at");
  CREATE INDEX "labslangs__status_idx" ON "labslangs" USING btree ("_status");
  CREATE INDEX "_labslangs_v_blocks_paragraph_block_order_idx" ON "_labslangs_v_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_paragraph_block_parent_id_idx" ON "_labslangs_v_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_paragraph_block_path_idx" ON "_labslangs_v_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_image_block_order_idx" ON "_labslangs_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_image_block_parent_id_idx" ON "_labslangs_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_image_block_path_idx" ON "_labslangs_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_image_block_media_idx" ON "_labslangs_v_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "_labslangs_v_blocks_title_block_order_idx" ON "_labslangs_v_blocks_title_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_title_block_parent_id_idx" ON "_labslangs_v_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_title_block_path_idx" ON "_labslangs_v_blocks_title_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_sub_title_block_order_idx" ON "_labslangs_v_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_sub_title_block_parent_id_idx" ON "_labslangs_v_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_sub_title_block_path_idx" ON "_labslangs_v_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_button_download_cloud_block_order_idx" ON "_labslangs_v_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_button_download_cloud_block_parent_id_idx" ON "_labslangs_v_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_button_download_cloud_block_path_idx" ON "_labslangs_v_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_button_download_block_order_idx" ON "_labslangs_v_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_button_download_block_parent_id_idx" ON "_labslangs_v_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_button_download_block_path_idx" ON "_labslangs_v_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_button_download_block_media_idx" ON "_labslangs_v_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "_labslangs_v_blocks_button_link_block_order_idx" ON "_labslangs_v_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_button_link_block_parent_id_idx" ON "_labslangs_v_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_button_link_block_path_idx" ON "_labslangs_v_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_buttons_block_order_idx" ON "_labslangs_v_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_buttons_block_parent_id_idx" ON "_labslangs_v_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_buttons_block_path_idx" ON "_labslangs_v_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_license_item_block_order_idx" ON "_labslangs_v_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_license_item_block_parent_id_idx" ON "_labslangs_v_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_license_item_block_path_idx" ON "_labslangs_v_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_license_block_order_idx" ON "_labslangs_v_blocks_license_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_license_block_parent_id_idx" ON "_labslangs_v_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_license_block_path_idx" ON "_labslangs_v_blocks_license_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_image_paragraph_block_order_idx" ON "_labslangs_v_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_image_paragraph_block_parent_id_idx" ON "_labslangs_v_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_image_paragraph_block_path_idx" ON "_labslangs_v_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_image_paragraph_block_image_idx" ON "_labslangs_v_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "_labslangs_v_blocks_frame_card_block_order_idx" ON "_labslangs_v_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_frame_card_block_parent_id_idx" ON "_labslangs_v_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_frame_card_block_path_idx" ON "_labslangs_v_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_frame_card_block_image_idx" ON "_labslangs_v_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "_labslangs_v_blocks_ticket_paper_block_order_idx" ON "_labslangs_v_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_ticket_paper_block_parent_id_idx" ON "_labslangs_v_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_ticket_paper_block_path_idx" ON "_labslangs_v_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_divider_block_order_idx" ON "_labslangs_v_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_divider_block_parent_id_idx" ON "_labslangs_v_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_divider_block_path_idx" ON "_labslangs_v_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_zig_zag_block_order_idx" ON "_labslangs_v_blocks_zig_zag_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_zig_zag_block_parent_id_idx" ON "_labslangs_v_blocks_zig_zag_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_zig_zag_block_path_idx" ON "_labslangs_v_blocks_zig_zag_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_spacer_block_order_idx" ON "_labslangs_v_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_spacer_block_parent_id_idx" ON "_labslangs_v_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_spacer_block_path_idx" ON "_labslangs_v_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_youtube_video_block_order_idx" ON "_labslangs_v_blocks_youtube_video_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_youtube_video_block_parent_id_idx" ON "_labslangs_v_blocks_youtube_video_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_youtube_video_block_path_idx" ON "_labslangs_v_blocks_youtube_video_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_card_block_order_idx" ON "_labslangs_v_blocks_card_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_card_block_parent_id_idx" ON "_labslangs_v_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_card_block_path_idx" ON "_labslangs_v_blocks_card_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_grid_block_order_idx" ON "_labslangs_v_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_grid_block_parent_id_idx" ON "_labslangs_v_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_grid_block_path_idx" ON "_labslangs_v_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_form_block_order_idx" ON "_labslangs_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_labslangs_v_blocks_form_block_parent_id_idx" ON "_labslangs_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_labslangs_v_blocks_form_block_path_idx" ON "_labslangs_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_labslangs_v_blocks_form_block_form_idx" ON "_labslangs_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_labslangs_v_parent_idx" ON "_labslangs_v" USING btree ("parent_id");
  CREATE INDEX "_labslangs_v_version_meta_version_meta_image_idx" ON "_labslangs_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_labslangs_v_version_version_slug_idx" ON "_labslangs_v" USING btree ("version_slug");
  CREATE INDEX "_labslangs_v_version_version_updated_at_idx" ON "_labslangs_v" USING btree ("version_updated_at");
  CREATE INDEX "_labslangs_v_version_version_created_at_idx" ON "_labslangs_v" USING btree ("version_created_at");
  CREATE INDEX "_labslangs_v_version_version__status_idx" ON "_labslangs_v" USING btree ("version__status");
  CREATE INDEX "_labslangs_v_created_at_idx" ON "_labslangs_v" USING btree ("created_at");
  CREATE INDEX "_labslangs_v_updated_at_idx" ON "_labslangs_v" USING btree ("updated_at");
  CREATE INDEX "_labslangs_v_latest_idx" ON "_labslangs_v" USING btree ("latest");
  CREATE INDEX "_labslangs_v_autosave_idx" ON "_labslangs_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "ll_page_blocks_paragraph_block_order_idx" ON "ll_page_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_paragraph_block_parent_id_idx" ON "ll_page_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_paragraph_block_path_idx" ON "ll_page_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_image_block_order_idx" ON "ll_page_blocks_image_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_image_block_parent_id_idx" ON "ll_page_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_image_block_path_idx" ON "ll_page_blocks_image_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_image_block_media_idx" ON "ll_page_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "ll_page_blocks_title_block_order_idx" ON "ll_page_blocks_title_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_title_block_parent_id_idx" ON "ll_page_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_title_block_path_idx" ON "ll_page_blocks_title_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_sub_title_block_order_idx" ON "ll_page_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_sub_title_block_parent_id_idx" ON "ll_page_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_sub_title_block_path_idx" ON "ll_page_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_button_download_cloud_block_order_idx" ON "ll_page_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_button_download_cloud_block_parent_id_idx" ON "ll_page_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_button_download_cloud_block_path_idx" ON "ll_page_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_button_download_block_order_idx" ON "ll_page_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_button_download_block_parent_id_idx" ON "ll_page_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_button_download_block_path_idx" ON "ll_page_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_button_download_block_media_idx" ON "ll_page_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "ll_page_blocks_button_link_block_order_idx" ON "ll_page_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_button_link_block_parent_id_idx" ON "ll_page_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_button_link_block_path_idx" ON "ll_page_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_buttons_block_order_idx" ON "ll_page_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_buttons_block_parent_id_idx" ON "ll_page_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_buttons_block_path_idx" ON "ll_page_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_license_item_block_order_idx" ON "ll_page_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_license_item_block_parent_id_idx" ON "ll_page_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_license_item_block_path_idx" ON "ll_page_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_license_block_order_idx" ON "ll_page_blocks_license_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_license_block_parent_id_idx" ON "ll_page_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_license_block_path_idx" ON "ll_page_blocks_license_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_image_paragraph_block_order_idx" ON "ll_page_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_image_paragraph_block_parent_id_idx" ON "ll_page_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_image_paragraph_block_path_idx" ON "ll_page_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_image_paragraph_block_image_idx" ON "ll_page_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "ll_page_blocks_frame_card_block_order_idx" ON "ll_page_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_frame_card_block_parent_id_idx" ON "ll_page_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_frame_card_block_path_idx" ON "ll_page_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_frame_card_block_image_idx" ON "ll_page_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "ll_page_blocks_ticket_paper_block_order_idx" ON "ll_page_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_ticket_paper_block_parent_id_idx" ON "ll_page_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_ticket_paper_block_path_idx" ON "ll_page_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_divider_block_order_idx" ON "ll_page_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_divider_block_parent_id_idx" ON "ll_page_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_divider_block_path_idx" ON "ll_page_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_zig_zag_block_order_idx" ON "ll_page_blocks_zig_zag_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_zig_zag_block_parent_id_idx" ON "ll_page_blocks_zig_zag_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_zig_zag_block_path_idx" ON "ll_page_blocks_zig_zag_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_spacer_block_order_idx" ON "ll_page_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_spacer_block_parent_id_idx" ON "ll_page_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_spacer_block_path_idx" ON "ll_page_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_youtube_video_block_order_idx" ON "ll_page_blocks_youtube_video_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_youtube_video_block_parent_id_idx" ON "ll_page_blocks_youtube_video_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_youtube_video_block_path_idx" ON "ll_page_blocks_youtube_video_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_card_block_order_idx" ON "ll_page_blocks_card_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_card_block_parent_id_idx" ON "ll_page_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_card_block_path_idx" ON "ll_page_blocks_card_block" USING btree ("_path");
  CREATE INDEX "ll_page_blocks_grid_block_order_idx" ON "ll_page_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "ll_page_blocks_grid_block_parent_id_idx" ON "ll_page_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "ll_page_blocks_grid_block_path_idx" ON "ll_page_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "ll_page__status_idx" ON "ll_page" USING btree ("_status");
  CREATE INDEX "_ll_page_v_blocks_paragraph_block_order_idx" ON "_ll_page_v_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_paragraph_block_parent_id_idx" ON "_ll_page_v_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_paragraph_block_path_idx" ON "_ll_page_v_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_image_block_order_idx" ON "_ll_page_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_image_block_parent_id_idx" ON "_ll_page_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_image_block_path_idx" ON "_ll_page_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_image_block_media_idx" ON "_ll_page_v_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "_ll_page_v_blocks_title_block_order_idx" ON "_ll_page_v_blocks_title_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_title_block_parent_id_idx" ON "_ll_page_v_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_title_block_path_idx" ON "_ll_page_v_blocks_title_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_sub_title_block_order_idx" ON "_ll_page_v_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_sub_title_block_parent_id_idx" ON "_ll_page_v_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_sub_title_block_path_idx" ON "_ll_page_v_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_button_download_cloud_block_order_idx" ON "_ll_page_v_blocks_button_download_cloud_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_button_download_cloud_block_parent_id_idx" ON "_ll_page_v_blocks_button_download_cloud_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_button_download_cloud_block_path_idx" ON "_ll_page_v_blocks_button_download_cloud_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_button_download_block_order_idx" ON "_ll_page_v_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_button_download_block_parent_id_idx" ON "_ll_page_v_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_button_download_block_path_idx" ON "_ll_page_v_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_button_download_block_media_idx" ON "_ll_page_v_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "_ll_page_v_blocks_button_link_block_order_idx" ON "_ll_page_v_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_button_link_block_parent_id_idx" ON "_ll_page_v_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_button_link_block_path_idx" ON "_ll_page_v_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_buttons_block_order_idx" ON "_ll_page_v_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_buttons_block_parent_id_idx" ON "_ll_page_v_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_buttons_block_path_idx" ON "_ll_page_v_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_license_item_block_order_idx" ON "_ll_page_v_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_license_item_block_parent_id_idx" ON "_ll_page_v_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_license_item_block_path_idx" ON "_ll_page_v_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_license_block_order_idx" ON "_ll_page_v_blocks_license_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_license_block_parent_id_idx" ON "_ll_page_v_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_license_block_path_idx" ON "_ll_page_v_blocks_license_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_image_paragraph_block_order_idx" ON "_ll_page_v_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_image_paragraph_block_parent_id_idx" ON "_ll_page_v_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_image_paragraph_block_path_idx" ON "_ll_page_v_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_image_paragraph_block_image_idx" ON "_ll_page_v_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "_ll_page_v_blocks_frame_card_block_order_idx" ON "_ll_page_v_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_frame_card_block_parent_id_idx" ON "_ll_page_v_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_frame_card_block_path_idx" ON "_ll_page_v_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_frame_card_block_image_idx" ON "_ll_page_v_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "_ll_page_v_blocks_ticket_paper_block_order_idx" ON "_ll_page_v_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_ticket_paper_block_parent_id_idx" ON "_ll_page_v_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_ticket_paper_block_path_idx" ON "_ll_page_v_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_divider_block_order_idx" ON "_ll_page_v_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_divider_block_parent_id_idx" ON "_ll_page_v_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_divider_block_path_idx" ON "_ll_page_v_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_zig_zag_block_order_idx" ON "_ll_page_v_blocks_zig_zag_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_zig_zag_block_parent_id_idx" ON "_ll_page_v_blocks_zig_zag_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_zig_zag_block_path_idx" ON "_ll_page_v_blocks_zig_zag_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_spacer_block_order_idx" ON "_ll_page_v_blocks_spacer_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_spacer_block_parent_id_idx" ON "_ll_page_v_blocks_spacer_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_spacer_block_path_idx" ON "_ll_page_v_blocks_spacer_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_youtube_video_block_order_idx" ON "_ll_page_v_blocks_youtube_video_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_youtube_video_block_parent_id_idx" ON "_ll_page_v_blocks_youtube_video_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_youtube_video_block_path_idx" ON "_ll_page_v_blocks_youtube_video_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_card_block_order_idx" ON "_ll_page_v_blocks_card_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_card_block_parent_id_idx" ON "_ll_page_v_blocks_card_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_card_block_path_idx" ON "_ll_page_v_blocks_card_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_blocks_grid_block_order_idx" ON "_ll_page_v_blocks_grid_block" USING btree ("_order");
  CREATE INDEX "_ll_page_v_blocks_grid_block_parent_id_idx" ON "_ll_page_v_blocks_grid_block" USING btree ("_parent_id");
  CREATE INDEX "_ll_page_v_blocks_grid_block_path_idx" ON "_ll_page_v_blocks_grid_block" USING btree ("_path");
  CREATE INDEX "_ll_page_v_version_version__status_idx" ON "_ll_page_v" USING btree ("version__status");
  CREATE INDEX "_ll_page_v_created_at_idx" ON "_ll_page_v" USING btree ("created_at");
  CREATE INDEX "_ll_page_v_updated_at_idx" ON "_ll_page_v" USING btree ("updated_at");
  CREATE INDEX "_ll_page_v_latest_idx" ON "_ll_page_v" USING btree ("latest");
  CREATE INDEX "_ll_page_v_autosave_idx" ON "_ll_page_v" USING btree ("autosave");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_labslangs_fk" FOREIGN KEY ("labslangs_id") REFERENCES "public"."labslangs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_labslangs_id_idx" ON "payload_locked_documents_rels" USING btree ("labslangs_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "payload_jobs_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "labslangs_blocks_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_sub_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_button_download_cloud_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_button_download_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_button_link_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_buttons_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_license_item_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_license_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_image_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_frame_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_ticket_paper_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_divider_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_zig_zag_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_spacer_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_youtube_video_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_grid_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs_blocks_form_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "labslangs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_sub_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_button_download_cloud_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_button_download_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_button_link_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_buttons_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_license_item_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_license_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_image_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_frame_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_ticket_paper_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_divider_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_zig_zag_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_spacer_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_youtube_video_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_grid_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v_blocks_form_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_labslangs_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "payload_kv" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_sub_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_button_download_cloud_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_button_download_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_button_link_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_buttons_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_license_item_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_license_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_image_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_frame_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_ticket_paper_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_divider_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_zig_zag_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_spacer_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_youtube_video_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page_blocks_grid_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ll_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_sub_title_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_button_download_cloud_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_button_download_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_button_link_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_buttons_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_license_item_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_license_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_image_paragraph_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_frame_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_ticket_paper_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_divider_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_zig_zag_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_spacer_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_youtube_video_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_card_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v_blocks_grid_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ll_page_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "labslangs_blocks_paragraph_block" CASCADE;
  DROP TABLE "labslangs_blocks_image_block" CASCADE;
  DROP TABLE "labslangs_blocks_title_block" CASCADE;
  DROP TABLE "labslangs_blocks_sub_title_block" CASCADE;
  DROP TABLE "labslangs_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "labslangs_blocks_button_download_block" CASCADE;
  DROP TABLE "labslangs_blocks_button_link_block" CASCADE;
  DROP TABLE "labslangs_blocks_buttons_block" CASCADE;
  DROP TABLE "labslangs_blocks_license_item_block" CASCADE;
  DROP TABLE "labslangs_blocks_license_block" CASCADE;
  DROP TABLE "labslangs_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "labslangs_blocks_frame_card_block" CASCADE;
  DROP TABLE "labslangs_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "labslangs_blocks_divider_block" CASCADE;
  DROP TABLE "labslangs_blocks_zig_zag_block" CASCADE;
  DROP TABLE "labslangs_blocks_spacer_block" CASCADE;
  DROP TABLE "labslangs_blocks_youtube_video_block" CASCADE;
  DROP TABLE "labslangs_blocks_card_block" CASCADE;
  DROP TABLE "labslangs_blocks_grid_block" CASCADE;
  DROP TABLE "labslangs_blocks_form_block" CASCADE;
  DROP TABLE "labslangs" CASCADE;
  DROP TABLE "_labslangs_v_blocks_paragraph_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_image_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_title_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_sub_title_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_button_download_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_button_link_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_buttons_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_license_item_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_license_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_frame_card_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_divider_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_zig_zag_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_spacer_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_youtube_video_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_card_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_grid_block" CASCADE;
  DROP TABLE "_labslangs_v_blocks_form_block" CASCADE;
  DROP TABLE "_labslangs_v" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "ll_page_blocks_paragraph_block" CASCADE;
  DROP TABLE "ll_page_blocks_image_block" CASCADE;
  DROP TABLE "ll_page_blocks_title_block" CASCADE;
  DROP TABLE "ll_page_blocks_sub_title_block" CASCADE;
  DROP TABLE "ll_page_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "ll_page_blocks_button_download_block" CASCADE;
  DROP TABLE "ll_page_blocks_button_link_block" CASCADE;
  DROP TABLE "ll_page_blocks_buttons_block" CASCADE;
  DROP TABLE "ll_page_blocks_license_item_block" CASCADE;
  DROP TABLE "ll_page_blocks_license_block" CASCADE;
  DROP TABLE "ll_page_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "ll_page_blocks_frame_card_block" CASCADE;
  DROP TABLE "ll_page_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "ll_page_blocks_divider_block" CASCADE;
  DROP TABLE "ll_page_blocks_zig_zag_block" CASCADE;
  DROP TABLE "ll_page_blocks_spacer_block" CASCADE;
  DROP TABLE "ll_page_blocks_youtube_video_block" CASCADE;
  DROP TABLE "ll_page_blocks_card_block" CASCADE;
  DROP TABLE "ll_page_blocks_grid_block" CASCADE;
  DROP TABLE "ll_page" CASCADE;
  DROP TABLE "_ll_page_v_blocks_paragraph_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_image_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_title_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_sub_title_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_button_download_cloud_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_button_download_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_button_link_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_buttons_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_license_item_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_license_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_frame_card_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_divider_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_zig_zag_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_spacer_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_youtube_video_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_card_block" CASCADE;
  DROP TABLE "_ll_page_v_blocks_grid_block" CASCADE;
  DROP TABLE "_ll_page_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_labslangs_fk";
  
  DROP INDEX "payload_locked_documents_rels_labslangs_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "payload_jobs_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "labslangs_id";
  DROP TYPE "public"."enum_labslangs_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum_labslangs_blocks_image_block_align";
  DROP TYPE "public"."enum_labslangs_blocks_image_block_size";
  DROP TYPE "public"."enum_labslangs_blocks_image_block_border_color";
  DROP TYPE "public"."enum_labslangs_blocks_title_block_level";
  DROP TYPE "public"."enum_labslangs_blocks_title_block_align";
  DROP TYPE "public"."enum_labslangs_blocks_buttons_block_direction";
  DROP TYPE "public"."enum_labslangs_blocks_buttons_block_align";
  DROP TYPE "public"."enum_labslangs_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum_labslangs_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum_labslangs_blocks_frame_card_block_color";
  DROP TYPE "public"."enum_labslangs_blocks_frame_card_block_align";
  DROP TYPE "public"."enum_labslangs_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum_labslangs_blocks_ticket_paper_block_align";
  DROP TYPE "public"."enum_labslangs_blocks_divider_block_color";
  DROP TYPE "public"."enum_labslangs_blocks_zig_zag_block_color";
  DROP TYPE "public"."enum_labslangs_blocks_zig_zag_block_align";
  DROP TYPE "public"."enum_labslangs_blocks_spacer_block_size";
  DROP TYPE "public"."enum_labslangs_blocks_youtube_video_block_align";
  DROP TYPE "public"."enum_labslangs_blocks_youtube_video_block_size";
  DROP TYPE "public"."enum_labslangs_blocks_card_block_color";
  DROP TYPE "public"."enum_labslangs_blocks_card_block_text_color";
  DROP TYPE "public"."enum_labslangs_blocks_card_block_border_color";
  DROP TYPE "public"."enum_labslangs_color";
  DROP TYPE "public"."enum_labslangs_status";
  DROP TYPE "public"."enum__labslangs_v_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum__labslangs_v_blocks_image_block_align";
  DROP TYPE "public"."enum__labslangs_v_blocks_image_block_size";
  DROP TYPE "public"."enum__labslangs_v_blocks_image_block_border_color";
  DROP TYPE "public"."enum__labslangs_v_blocks_title_block_level";
  DROP TYPE "public"."enum__labslangs_v_blocks_title_block_align";
  DROP TYPE "public"."enum__labslangs_v_blocks_buttons_block_direction";
  DROP TYPE "public"."enum__labslangs_v_blocks_buttons_block_align";
  DROP TYPE "public"."enum__labslangs_v_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum__labslangs_v_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum__labslangs_v_blocks_frame_card_block_color";
  DROP TYPE "public"."enum__labslangs_v_blocks_frame_card_block_align";
  DROP TYPE "public"."enum__labslangs_v_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum__labslangs_v_blocks_ticket_paper_block_align";
  DROP TYPE "public"."enum__labslangs_v_blocks_divider_block_color";
  DROP TYPE "public"."enum__labslangs_v_blocks_zig_zag_block_color";
  DROP TYPE "public"."enum__labslangs_v_blocks_zig_zag_block_align";
  DROP TYPE "public"."enum__labslangs_v_blocks_spacer_block_size";
  DROP TYPE "public"."enum__labslangs_v_blocks_youtube_video_block_align";
  DROP TYPE "public"."enum__labslangs_v_blocks_youtube_video_block_size";
  DROP TYPE "public"."enum__labslangs_v_blocks_card_block_color";
  DROP TYPE "public"."enum__labslangs_v_blocks_card_block_text_color";
  DROP TYPE "public"."enum__labslangs_v_blocks_card_block_border_color";
  DROP TYPE "public"."enum__labslangs_v_version_color";
  DROP TYPE "public"."enum__labslangs_v_version_status";
  DROP TYPE "public"."enum_ll_page_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum_ll_page_blocks_image_block_align";
  DROP TYPE "public"."enum_ll_page_blocks_image_block_size";
  DROP TYPE "public"."enum_ll_page_blocks_image_block_border_color";
  DROP TYPE "public"."enum_ll_page_blocks_title_block_level";
  DROP TYPE "public"."enum_ll_page_blocks_title_block_align";
  DROP TYPE "public"."enum_ll_page_blocks_buttons_block_direction";
  DROP TYPE "public"."enum_ll_page_blocks_buttons_block_align";
  DROP TYPE "public"."enum_ll_page_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum_ll_page_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum_ll_page_blocks_frame_card_block_color";
  DROP TYPE "public"."enum_ll_page_blocks_frame_card_block_align";
  DROP TYPE "public"."enum_ll_page_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum_ll_page_blocks_ticket_paper_block_align";
  DROP TYPE "public"."enum_ll_page_blocks_divider_block_color";
  DROP TYPE "public"."enum_ll_page_blocks_zig_zag_block_color";
  DROP TYPE "public"."enum_ll_page_blocks_zig_zag_block_align";
  DROP TYPE "public"."enum_ll_page_blocks_spacer_block_size";
  DROP TYPE "public"."enum_ll_page_blocks_youtube_video_block_align";
  DROP TYPE "public"."enum_ll_page_blocks_youtube_video_block_size";
  DROP TYPE "public"."enum_ll_page_blocks_card_block_color";
  DROP TYPE "public"."enum_ll_page_blocks_card_block_text_color";
  DROP TYPE "public"."enum_ll_page_blocks_card_block_border_color";
  DROP TYPE "public"."enum_ll_page_status";
  DROP TYPE "public"."enum__ll_page_v_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum__ll_page_v_blocks_image_block_align";
  DROP TYPE "public"."enum__ll_page_v_blocks_image_block_size";
  DROP TYPE "public"."enum__ll_page_v_blocks_image_block_border_color";
  DROP TYPE "public"."enum__ll_page_v_blocks_title_block_level";
  DROP TYPE "public"."enum__ll_page_v_blocks_title_block_align";
  DROP TYPE "public"."enum__ll_page_v_blocks_buttons_block_direction";
  DROP TYPE "public"."enum__ll_page_v_blocks_buttons_block_align";
  DROP TYPE "public"."enum__ll_page_v_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum__ll_page_v_blocks_image_paragraph_block_border_color";
  DROP TYPE "public"."enum__ll_page_v_blocks_frame_card_block_color";
  DROP TYPE "public"."enum__ll_page_v_blocks_frame_card_block_align";
  DROP TYPE "public"."enum__ll_page_v_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum__ll_page_v_blocks_ticket_paper_block_align";
  DROP TYPE "public"."enum__ll_page_v_blocks_divider_block_color";
  DROP TYPE "public"."enum__ll_page_v_blocks_zig_zag_block_color";
  DROP TYPE "public"."enum__ll_page_v_blocks_zig_zag_block_align";
  DROP TYPE "public"."enum__ll_page_v_blocks_spacer_block_size";
  DROP TYPE "public"."enum__ll_page_v_blocks_youtube_video_block_align";
  DROP TYPE "public"."enum__ll_page_v_blocks_youtube_video_block_size";
  DROP TYPE "public"."enum__ll_page_v_blocks_card_block_color";
  DROP TYPE "public"."enum__ll_page_v_blocks_card_block_text_color";
  DROP TYPE "public"."enum__ll_page_v_blocks_card_block_border_color";
  DROP TYPE "public"."enum__ll_page_v_version_status";`)
}
