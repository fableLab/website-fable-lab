import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'
import { generateNKeysBetween } from 'payload/shared'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "labslangs" ADD COLUMN "_order" varchar;
  ALTER TABLE "_labslangs_v" ADD COLUMN "version__order" varchar;
  CREATE INDEX "labslangs__order_idx" ON "labslangs" USING btree ("_order");
  CREATE INDEX "_labslangs_v_version_version__order_idx" ON "_labslangs_v" USING btree ("version__order");`)

  // Backfill the order keys following the previous default sort (-createdAt), so the guide keeps its current order
  const { rows } = await db.execute(sql`SELECT "id" FROM "labslangs" ORDER BY "created_at" DESC`)
  const keys = generateNKeysBetween(null, null, rows.length)

  for (const [index, row] of rows.entries()) {
    await db.execute(sql`UPDATE "labslangs" SET "_order" = ${keys[index]} WHERE "id" = ${row.id}`)
    await db.execute(sql`UPDATE "_labslangs_v" SET "version__order" = ${keys[index]} WHERE "parent_id" = ${row.id}`)
  }
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "labslangs__order_idx";
  DROP INDEX "_labslangs_v_version_version__order_idx";
  ALTER TABLE "labslangs" DROP COLUMN "_order";
  ALTER TABLE "_labslangs_v" DROP COLUMN "version__order";`)
}
