import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_pages_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_pages_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_pages_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum__pages_v_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__pages_v_blocks_ticket_paper_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__pages_v_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_projects_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum_projects_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum_projects_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_projects_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_projects_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum_projects_mediation" AS ENUM('littéraire', 'linguistique');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_blocks_paragraph_block_orientation" AS ENUM('full', 'left', 'center', 'right');
  CREATE TYPE "public"."enum__projects_v_blocks_buttons_block_direction" AS ENUM('horizontal', 'vertical');
  CREATE TYPE "public"."enum__projects_v_blocks_image_paragraph_block_orientation" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__projects_v_blocks_frame_card_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__projects_v_blocks_divider_block_color" AS ENUM('yellow', 'violet', 'blue', 'orange', 'prune');
  CREATE TYPE "public"."enum__projects_v_version_mediation" AS ENUM('littéraire', 'linguistique');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_links_list_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_links_type" AS ENUM('singleLink', 'listLink');
  CREATE TYPE "public"."enum_header_links_single_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_left_column_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_center_column_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_right_column_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_pages_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"direction" "enum_pages_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum_pages_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum_pages_blocks_frame_card_block_color" DEFAULT 'prune',
  	"body" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_pages_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_pages_blocks_divider_block_color" DEFAULT 'prune',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_pages_v_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"orientation" "enum__pages_v_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"direction" "enum__pages_v_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum__pages_v_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum__pages_v_blocks_frame_card_block_color" DEFAULT 'prune',
  	"body" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_ticket_paper_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__pages_v_blocks_ticket_paper_block_color" DEFAULT 'blue',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__pages_v_blocks_divider_block_color" DEFAULT 'prune',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "projects_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"orientation" "enum_projects_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"direction" "enum_projects_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum_projects_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"body" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum_projects_blocks_frame_card_block_color" DEFAULT 'prune',
  	"body" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "projects_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" "enum_projects_blocks_divider_block_color" DEFAULT 'prune',
  	"block_name" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"mediation" "enum_projects_mediation",
  	"image_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_projects_v_blocks_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"orientation" "enum__projects_v_blocks_paragraph_block_orientation" DEFAULT 'full',
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_sub_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_button_download_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_button_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_buttons_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"direction" "enum__projects_v_blocks_buttons_block_direction" DEFAULT 'horizontal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_license_item_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_license_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_image_paragraph_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"orientation" "enum__projects_v_blocks_image_paragraph_block_orientation" DEFAULT 'right',
  	"image_id" integer,
  	"body" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_frame_card_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"color" "enum__projects_v_blocks_frame_card_block_color" DEFAULT 'prune',
  	"body" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v_blocks_divider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" "enum__projects_v_blocks_divider_block_color" DEFAULT 'prune',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_description" varchar,
  	"version_mediation" "enum__projects_v_version_mediation",
  	"version_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"media_id" integer,
  	"users_id" integer,
  	"projects_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_links_list_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_links_list_link_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_header_links_type" NOT NULL,
  	"single_link_link_type" "enum_header_links_single_link_link_type" DEFAULT 'reference',
  	"single_link_link_new_tab" boolean,
  	"single_link_link_url" varchar,
  	"single_link_link_label" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE "footer_left_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_left_column_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_center_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_center_column_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_right_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_right_column_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE "texts_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"projects" jsonb,
  	"resources" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_blocks_paragraph_block" ADD CONSTRAINT "pages_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_block" ADD CONSTRAINT "pages_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_block" ADD CONSTRAINT "pages_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_title_block" ADD CONSTRAINT "pages_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_sub_title_block" ADD CONSTRAINT "pages_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_button_download_block" ADD CONSTRAINT "pages_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_button_download_block" ADD CONSTRAINT "pages_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_button_link_block" ADD CONSTRAINT "pages_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_buttons_block" ADD CONSTRAINT "pages_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_license_item_block" ADD CONSTRAINT "pages_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_license_block" ADD CONSTRAINT "pages_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_paragraph_block" ADD CONSTRAINT "pages_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_paragraph_block" ADD CONSTRAINT "pages_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_frame_card_block" ADD CONSTRAINT "pages_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_frame_card_block" ADD CONSTRAINT "pages_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ticket_paper_block" ADD CONSTRAINT "pages_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_divider_block" ADD CONSTRAINT "pages_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_paragraph_block" ADD CONSTRAINT "_pages_v_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_block" ADD CONSTRAINT "_pages_v_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_block" ADD CONSTRAINT "_pages_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_title_block" ADD CONSTRAINT "_pages_v_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_sub_title_block" ADD CONSTRAINT "_pages_v_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_button_download_block" ADD CONSTRAINT "_pages_v_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_button_download_block" ADD CONSTRAINT "_pages_v_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_button_link_block" ADD CONSTRAINT "_pages_v_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_buttons_block" ADD CONSTRAINT "_pages_v_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_license_item_block" ADD CONSTRAINT "_pages_v_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_license_block" ADD CONSTRAINT "_pages_v_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_paragraph_block" ADD CONSTRAINT "_pages_v_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_paragraph_block" ADD CONSTRAINT "_pages_v_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_frame_card_block" ADD CONSTRAINT "_pages_v_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_frame_card_block" ADD CONSTRAINT "_pages_v_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_ticket_paper_block" ADD CONSTRAINT "_pages_v_blocks_ticket_paper_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_divider_block" ADD CONSTRAINT "_pages_v_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_paragraph_block" ADD CONSTRAINT "projects_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_image_block" ADD CONSTRAINT "projects_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_image_block" ADD CONSTRAINT "projects_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_title_block" ADD CONSTRAINT "projects_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_sub_title_block" ADD CONSTRAINT "projects_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_button_download_block" ADD CONSTRAINT "projects_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_button_download_block" ADD CONSTRAINT "projects_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_button_link_block" ADD CONSTRAINT "projects_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_buttons_block" ADD CONSTRAINT "projects_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_license_item_block" ADD CONSTRAINT "projects_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_license_block" ADD CONSTRAINT "projects_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_image_paragraph_block" ADD CONSTRAINT "projects_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_image_paragraph_block" ADD CONSTRAINT "projects_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_frame_card_block" ADD CONSTRAINT "projects_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_blocks_frame_card_block" ADD CONSTRAINT "projects_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_blocks_divider_block" ADD CONSTRAINT "projects_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_paragraph_block" ADD CONSTRAINT "_projects_v_blocks_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_image_block" ADD CONSTRAINT "_projects_v_blocks_image_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_image_block" ADD CONSTRAINT "_projects_v_blocks_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_title_block" ADD CONSTRAINT "_projects_v_blocks_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_sub_title_block" ADD CONSTRAINT "_projects_v_blocks_sub_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_button_download_block" ADD CONSTRAINT "_projects_v_blocks_button_download_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_button_download_block" ADD CONSTRAINT "_projects_v_blocks_button_download_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_button_link_block" ADD CONSTRAINT "_projects_v_blocks_button_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_buttons_block" ADD CONSTRAINT "_projects_v_blocks_buttons_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_license_item_block" ADD CONSTRAINT "_projects_v_blocks_license_item_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_license_block" ADD CONSTRAINT "_projects_v_blocks_license_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_image_paragraph_block" ADD CONSTRAINT "_projects_v_blocks_image_paragraph_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_image_paragraph_block" ADD CONSTRAINT "_projects_v_blocks_image_paragraph_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_frame_card_block" ADD CONSTRAINT "_projects_v_blocks_frame_card_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_frame_card_block" ADD CONSTRAINT "_projects_v_blocks_frame_card_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_blocks_divider_block" ADD CONSTRAINT "_projects_v_blocks_divider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_links_list_link" ADD CONSTRAINT "header_links_list_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_links" ADD CONSTRAINT "header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_left_column" ADD CONSTRAINT "footer_left_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_center_column" ADD CONSTRAINT "footer_center_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_right_column" ADD CONSTRAINT "footer_right_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_paragraph_block_order_idx" ON "pages_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_paragraph_block_parent_id_idx" ON "pages_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_paragraph_block_path_idx" ON "pages_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_block_order_idx" ON "pages_blocks_image_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_block_parent_id_idx" ON "pages_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_block_path_idx" ON "pages_blocks_image_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_block_media_idx" ON "pages_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_title_block_order_idx" ON "pages_blocks_title_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_title_block_parent_id_idx" ON "pages_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_title_block_path_idx" ON "pages_blocks_title_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_sub_title_block_order_idx" ON "pages_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_sub_title_block_parent_id_idx" ON "pages_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sub_title_block_path_idx" ON "pages_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_button_download_block_order_idx" ON "pages_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_button_download_block_parent_id_idx" ON "pages_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_button_download_block_path_idx" ON "pages_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_button_download_block_media_idx" ON "pages_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_button_link_block_order_idx" ON "pages_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_button_link_block_parent_id_idx" ON "pages_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_button_link_block_path_idx" ON "pages_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_buttons_block_order_idx" ON "pages_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_buttons_block_parent_id_idx" ON "pages_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_buttons_block_path_idx" ON "pages_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_license_item_block_order_idx" ON "pages_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_license_item_block_parent_id_idx" ON "pages_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_license_item_block_path_idx" ON "pages_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_license_block_order_idx" ON "pages_blocks_license_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_license_block_parent_id_idx" ON "pages_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_license_block_path_idx" ON "pages_blocks_license_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_paragraph_block_order_idx" ON "pages_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_paragraph_block_parent_id_idx" ON "pages_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_paragraph_block_path_idx" ON "pages_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_paragraph_block_image_idx" ON "pages_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_frame_card_block_order_idx" ON "pages_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_frame_card_block_parent_id_idx" ON "pages_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_frame_card_block_path_idx" ON "pages_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_frame_card_block_image_idx" ON "pages_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_ticket_paper_block_order_idx" ON "pages_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_ticket_paper_block_parent_id_idx" ON "pages_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_ticket_paper_block_path_idx" ON "pages_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_divider_block_order_idx" ON "pages_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_divider_block_parent_id_idx" ON "pages_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_divider_block_path_idx" ON "pages_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "_pages_v_blocks_paragraph_block_order_idx" ON "_pages_v_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_paragraph_block_parent_id_idx" ON "_pages_v_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_paragraph_block_path_idx" ON "_pages_v_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_block_order_idx" ON "_pages_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_block_parent_id_idx" ON "_pages_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_block_path_idx" ON "_pages_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_block_media_idx" ON "_pages_v_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_title_block_order_idx" ON "_pages_v_blocks_title_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_title_block_parent_id_idx" ON "_pages_v_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_title_block_path_idx" ON "_pages_v_blocks_title_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_sub_title_block_order_idx" ON "_pages_v_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_sub_title_block_parent_id_idx" ON "_pages_v_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_sub_title_block_path_idx" ON "_pages_v_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_button_download_block_order_idx" ON "_pages_v_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_button_download_block_parent_id_idx" ON "_pages_v_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_button_download_block_path_idx" ON "_pages_v_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_button_download_block_media_idx" ON "_pages_v_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_button_link_block_order_idx" ON "_pages_v_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_button_link_block_parent_id_idx" ON "_pages_v_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_button_link_block_path_idx" ON "_pages_v_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_buttons_block_order_idx" ON "_pages_v_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_buttons_block_parent_id_idx" ON "_pages_v_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_buttons_block_path_idx" ON "_pages_v_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_license_item_block_order_idx" ON "_pages_v_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_license_item_block_parent_id_idx" ON "_pages_v_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_license_item_block_path_idx" ON "_pages_v_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_license_block_order_idx" ON "_pages_v_blocks_license_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_license_block_parent_id_idx" ON "_pages_v_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_license_block_path_idx" ON "_pages_v_blocks_license_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_paragraph_block_order_idx" ON "_pages_v_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_paragraph_block_parent_id_idx" ON "_pages_v_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_paragraph_block_path_idx" ON "_pages_v_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_paragraph_block_image_idx" ON "_pages_v_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_frame_card_block_order_idx" ON "_pages_v_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_frame_card_block_parent_id_idx" ON "_pages_v_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_frame_card_block_path_idx" ON "_pages_v_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_frame_card_block_image_idx" ON "_pages_v_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_ticket_paper_block_order_idx" ON "_pages_v_blocks_ticket_paper_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_ticket_paper_block_parent_id_idx" ON "_pages_v_blocks_ticket_paper_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_ticket_paper_block_path_idx" ON "_pages_v_blocks_ticket_paper_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_divider_block_order_idx" ON "_pages_v_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_divider_block_parent_id_idx" ON "_pages_v_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_divider_block_path_idx" ON "_pages_v_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "projects_blocks_paragraph_block_order_idx" ON "projects_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_paragraph_block_parent_id_idx" ON "projects_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_paragraph_block_path_idx" ON "projects_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_image_block_order_idx" ON "projects_blocks_image_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_image_block_parent_id_idx" ON "projects_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_image_block_path_idx" ON "projects_blocks_image_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_image_block_media_idx" ON "projects_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "projects_blocks_title_block_order_idx" ON "projects_blocks_title_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_title_block_parent_id_idx" ON "projects_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_title_block_path_idx" ON "projects_blocks_title_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_sub_title_block_order_idx" ON "projects_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_sub_title_block_parent_id_idx" ON "projects_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_sub_title_block_path_idx" ON "projects_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_button_download_block_order_idx" ON "projects_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_button_download_block_parent_id_idx" ON "projects_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_button_download_block_path_idx" ON "projects_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_button_download_block_media_idx" ON "projects_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "projects_blocks_button_link_block_order_idx" ON "projects_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_button_link_block_parent_id_idx" ON "projects_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_button_link_block_path_idx" ON "projects_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_buttons_block_order_idx" ON "projects_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_buttons_block_parent_id_idx" ON "projects_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_buttons_block_path_idx" ON "projects_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_license_item_block_order_idx" ON "projects_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_license_item_block_parent_id_idx" ON "projects_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_license_item_block_path_idx" ON "projects_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_license_block_order_idx" ON "projects_blocks_license_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_license_block_parent_id_idx" ON "projects_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_license_block_path_idx" ON "projects_blocks_license_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_image_paragraph_block_order_idx" ON "projects_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_image_paragraph_block_parent_id_idx" ON "projects_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_image_paragraph_block_path_idx" ON "projects_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_image_paragraph_block_image_idx" ON "projects_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "projects_blocks_frame_card_block_order_idx" ON "projects_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_frame_card_block_parent_id_idx" ON "projects_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_frame_card_block_path_idx" ON "projects_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "projects_blocks_frame_card_block_image_idx" ON "projects_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "projects_blocks_divider_block_order_idx" ON "projects_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "projects_blocks_divider_block_parent_id_idx" ON "projects_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "projects_blocks_divider_block_path_idx" ON "projects_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "projects_image_idx" ON "projects" USING btree ("image_id");
  CREATE INDEX "projects_meta_meta_image_idx" ON "projects" USING btree ("meta_image_id");
  CREATE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "_projects_v_blocks_paragraph_block_order_idx" ON "_projects_v_blocks_paragraph_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_paragraph_block_parent_id_idx" ON "_projects_v_blocks_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_paragraph_block_path_idx" ON "_projects_v_blocks_paragraph_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_image_block_order_idx" ON "_projects_v_blocks_image_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_image_block_parent_id_idx" ON "_projects_v_blocks_image_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_image_block_path_idx" ON "_projects_v_blocks_image_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_image_block_media_idx" ON "_projects_v_blocks_image_block" USING btree ("media_id");
  CREATE INDEX "_projects_v_blocks_title_block_order_idx" ON "_projects_v_blocks_title_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_title_block_parent_id_idx" ON "_projects_v_blocks_title_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_title_block_path_idx" ON "_projects_v_blocks_title_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_sub_title_block_order_idx" ON "_projects_v_blocks_sub_title_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_sub_title_block_parent_id_idx" ON "_projects_v_blocks_sub_title_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_sub_title_block_path_idx" ON "_projects_v_blocks_sub_title_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_button_download_block_order_idx" ON "_projects_v_blocks_button_download_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_button_download_block_parent_id_idx" ON "_projects_v_blocks_button_download_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_button_download_block_path_idx" ON "_projects_v_blocks_button_download_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_button_download_block_media_idx" ON "_projects_v_blocks_button_download_block" USING btree ("media_id");
  CREATE INDEX "_projects_v_blocks_button_link_block_order_idx" ON "_projects_v_blocks_button_link_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_button_link_block_parent_id_idx" ON "_projects_v_blocks_button_link_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_button_link_block_path_idx" ON "_projects_v_blocks_button_link_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_buttons_block_order_idx" ON "_projects_v_blocks_buttons_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_buttons_block_parent_id_idx" ON "_projects_v_blocks_buttons_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_buttons_block_path_idx" ON "_projects_v_blocks_buttons_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_license_item_block_order_idx" ON "_projects_v_blocks_license_item_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_license_item_block_parent_id_idx" ON "_projects_v_blocks_license_item_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_license_item_block_path_idx" ON "_projects_v_blocks_license_item_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_license_block_order_idx" ON "_projects_v_blocks_license_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_license_block_parent_id_idx" ON "_projects_v_blocks_license_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_license_block_path_idx" ON "_projects_v_blocks_license_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_image_paragraph_block_order_idx" ON "_projects_v_blocks_image_paragraph_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_image_paragraph_block_parent_id_idx" ON "_projects_v_blocks_image_paragraph_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_image_paragraph_block_path_idx" ON "_projects_v_blocks_image_paragraph_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_image_paragraph_block_image_idx" ON "_projects_v_blocks_image_paragraph_block" USING btree ("image_id");
  CREATE INDEX "_projects_v_blocks_frame_card_block_order_idx" ON "_projects_v_blocks_frame_card_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_frame_card_block_parent_id_idx" ON "_projects_v_blocks_frame_card_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_frame_card_block_path_idx" ON "_projects_v_blocks_frame_card_block" USING btree ("_path");
  CREATE INDEX "_projects_v_blocks_frame_card_block_image_idx" ON "_projects_v_blocks_frame_card_block" USING btree ("image_id");
  CREATE INDEX "_projects_v_blocks_divider_block_order_idx" ON "_projects_v_blocks_divider_block" USING btree ("_order");
  CREATE INDEX "_projects_v_blocks_divider_block_parent_id_idx" ON "_projects_v_blocks_divider_block" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_blocks_divider_block_path_idx" ON "_projects_v_blocks_divider_block" USING btree ("_path");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version_image_idx" ON "_projects_v" USING btree ("version_image_id");
  CREATE INDEX "_projects_v_version_meta_version_meta_image_idx" ON "_projects_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "_projects_v_autosave_idx" ON "_projects_v" USING btree ("autosave");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_links_list_link_order_idx" ON "header_links_list_link" USING btree ("_order");
  CREATE INDEX "header_links_list_link_parent_id_idx" ON "header_links_list_link" USING btree ("_parent_id");
  CREATE INDEX "header_links_order_idx" ON "header_links" USING btree ("_order");
  CREATE INDEX "header_links_parent_id_idx" ON "header_links" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "footer_left_column_order_idx" ON "footer_left_column" USING btree ("_order");
  CREATE INDEX "footer_left_column_parent_id_idx" ON "footer_left_column" USING btree ("_parent_id");
  CREATE INDEX "footer_center_column_order_idx" ON "footer_center_column" USING btree ("_order");
  CREATE INDEX "footer_center_column_parent_id_idx" ON "footer_center_column" USING btree ("_parent_id");
  CREATE INDEX "footer_right_column_order_idx" ON "footer_right_column" USING btree ("_order");
  CREATE INDEX "footer_right_column_parent_id_idx" ON "footer_right_column" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_paragraph_block" CASCADE;
  DROP TABLE "pages_blocks_image_block" CASCADE;
  DROP TABLE "pages_blocks_title_block" CASCADE;
  DROP TABLE "pages_blocks_sub_title_block" CASCADE;
  DROP TABLE "pages_blocks_button_download_block" CASCADE;
  DROP TABLE "pages_blocks_button_link_block" CASCADE;
  DROP TABLE "pages_blocks_buttons_block" CASCADE;
  DROP TABLE "pages_blocks_license_item_block" CASCADE;
  DROP TABLE "pages_blocks_license_block" CASCADE;
  DROP TABLE "pages_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "pages_blocks_frame_card_block" CASCADE;
  DROP TABLE "pages_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "pages_blocks_divider_block" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "_pages_v_blocks_paragraph_block" CASCADE;
  DROP TABLE "_pages_v_blocks_image_block" CASCADE;
  DROP TABLE "_pages_v_blocks_title_block" CASCADE;
  DROP TABLE "_pages_v_blocks_sub_title_block" CASCADE;
  DROP TABLE "_pages_v_blocks_button_download_block" CASCADE;
  DROP TABLE "_pages_v_blocks_button_link_block" CASCADE;
  DROP TABLE "_pages_v_blocks_buttons_block" CASCADE;
  DROP TABLE "_pages_v_blocks_license_item_block" CASCADE;
  DROP TABLE "_pages_v_blocks_license_block" CASCADE;
  DROP TABLE "_pages_v_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "_pages_v_blocks_frame_card_block" CASCADE;
  DROP TABLE "_pages_v_blocks_ticket_paper_block" CASCADE;
  DROP TABLE "_pages_v_blocks_divider_block" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "projects_blocks_paragraph_block" CASCADE;
  DROP TABLE "projects_blocks_image_block" CASCADE;
  DROP TABLE "projects_blocks_title_block" CASCADE;
  DROP TABLE "projects_blocks_sub_title_block" CASCADE;
  DROP TABLE "projects_blocks_button_download_block" CASCADE;
  DROP TABLE "projects_blocks_button_link_block" CASCADE;
  DROP TABLE "projects_blocks_buttons_block" CASCADE;
  DROP TABLE "projects_blocks_license_item_block" CASCADE;
  DROP TABLE "projects_blocks_license_block" CASCADE;
  DROP TABLE "projects_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "projects_blocks_frame_card_block" CASCADE;
  DROP TABLE "projects_blocks_divider_block" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "_projects_v_blocks_paragraph_block" CASCADE;
  DROP TABLE "_projects_v_blocks_image_block" CASCADE;
  DROP TABLE "_projects_v_blocks_title_block" CASCADE;
  DROP TABLE "_projects_v_blocks_sub_title_block" CASCADE;
  DROP TABLE "_projects_v_blocks_button_download_block" CASCADE;
  DROP TABLE "_projects_v_blocks_button_link_block" CASCADE;
  DROP TABLE "_projects_v_blocks_buttons_block" CASCADE;
  DROP TABLE "_projects_v_blocks_license_item_block" CASCADE;
  DROP TABLE "_projects_v_blocks_license_block" CASCADE;
  DROP TABLE "_projects_v_blocks_image_paragraph_block" CASCADE;
  DROP TABLE "_projects_v_blocks_frame_card_block" CASCADE;
  DROP TABLE "_projects_v_blocks_divider_block" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_links_list_link" CASCADE;
  DROP TABLE "header_links" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_left_column" CASCADE;
  DROP TABLE "footer_center_column" CASCADE;
  DROP TABLE "footer_right_column" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "texts_page" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum_pages_blocks_buttons_block_direction";
  DROP TYPE "public"."enum_pages_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum_pages_blocks_frame_card_block_color";
  DROP TYPE "public"."enum_pages_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum_pages_blocks_divider_block_color";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum__pages_v_blocks_buttons_block_direction";
  DROP TYPE "public"."enum__pages_v_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum__pages_v_blocks_frame_card_block_color";
  DROP TYPE "public"."enum__pages_v_blocks_ticket_paper_block_color";
  DROP TYPE "public"."enum__pages_v_blocks_divider_block_color";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_projects_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum_projects_blocks_buttons_block_direction";
  DROP TYPE "public"."enum_projects_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum_projects_blocks_frame_card_block_color";
  DROP TYPE "public"."enum_projects_blocks_divider_block_color";
  DROP TYPE "public"."enum_projects_mediation";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_blocks_paragraph_block_orientation";
  DROP TYPE "public"."enum__projects_v_blocks_buttons_block_direction";
  DROP TYPE "public"."enum__projects_v_blocks_image_paragraph_block_orientation";
  DROP TYPE "public"."enum__projects_v_blocks_frame_card_block_color";
  DROP TYPE "public"."enum__projects_v_blocks_divider_block_color";
  DROP TYPE "public"."enum__projects_v_version_mediation";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_links_list_link_link_type";
  DROP TYPE "public"."enum_header_links_type";
  DROP TYPE "public"."enum_header_links_single_link_link_type";
  DROP TYPE "public"."enum_footer_left_column_link_type";
  DROP TYPE "public"."enum_footer_center_column_link_type";
  DROP TYPE "public"."enum_footer_right_column_link_type";`)
}
