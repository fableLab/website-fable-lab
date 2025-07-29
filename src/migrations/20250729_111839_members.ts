import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_members_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__members_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "members_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"skill" varchar
  );
  
  CREATE TABLE "members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar,
  	"last_name" varchar,
  	"photo_id" integer,
  	"since" timestamp(3) with time zone,
  	"role" varchar,
  	"email" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_members_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_members_v_version_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"skill" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_members_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_first_name" varchar,
  	"version_last_name" varchar,
  	"version_photo_id" integer,
  	"version_since" timestamp(3) with time zone,
  	"version_role" varchar,
  	"version_email" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__members_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "members_id" integer;
  ALTER TABLE "members_skills" ADD CONSTRAINT "members_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "members" ADD CONSTRAINT "members_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_members_v_version_skills" ADD CONSTRAINT "_members_v_version_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_members_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_members_v" ADD CONSTRAINT "_members_v_parent_id_members_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."members"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_members_v" ADD CONSTRAINT "_members_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "members_skills_order_idx" ON "members_skills" USING btree ("_order");
  CREATE INDEX "members_skills_parent_id_idx" ON "members_skills" USING btree ("_parent_id");
  CREATE INDEX "members_photo_idx" ON "members" USING btree ("photo_id");
  CREATE INDEX "members_slug_idx" ON "members" USING btree ("slug");
  CREATE INDEX "members_updated_at_idx" ON "members" USING btree ("updated_at");
  CREATE INDEX "members_created_at_idx" ON "members" USING btree ("created_at");
  CREATE INDEX "members__status_idx" ON "members" USING btree ("_status");
  CREATE INDEX "_members_v_version_skills_order_idx" ON "_members_v_version_skills" USING btree ("_order");
  CREATE INDEX "_members_v_version_skills_parent_id_idx" ON "_members_v_version_skills" USING btree ("_parent_id");
  CREATE INDEX "_members_v_parent_idx" ON "_members_v" USING btree ("parent_id");
  CREATE INDEX "_members_v_version_version_photo_idx" ON "_members_v" USING btree ("version_photo_id");
  CREATE INDEX "_members_v_version_version_slug_idx" ON "_members_v" USING btree ("version_slug");
  CREATE INDEX "_members_v_version_version_updated_at_idx" ON "_members_v" USING btree ("version_updated_at");
  CREATE INDEX "_members_v_version_version_created_at_idx" ON "_members_v" USING btree ("version_created_at");
  CREATE INDEX "_members_v_version_version__status_idx" ON "_members_v" USING btree ("version__status");
  CREATE INDEX "_members_v_created_at_idx" ON "_members_v" USING btree ("created_at");
  CREATE INDEX "_members_v_updated_at_idx" ON "_members_v" USING btree ("updated_at");
  CREATE INDEX "_members_v_latest_idx" ON "_members_v" USING btree ("latest");
  CREATE INDEX "_members_v_autosave_idx" ON "_members_v" USING btree ("autosave");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_members_fk" FOREIGN KEY ("members_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_members_id_idx" ON "payload_locked_documents_rels" USING btree ("members_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "members_skills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "members" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_members_v_version_skills" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_members_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "members_skills" CASCADE;
  DROP TABLE "members" CASCADE;
  DROP TABLE "_members_v_version_skills" CASCADE;
  DROP TABLE "_members_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_members_fk";
  
  DROP INDEX "payload_locked_documents_rels_members_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "members_id";
  DROP TYPE "public"."enum_members_status";
  DROP TYPE "public"."enum__members_v_version_status";`)
}
