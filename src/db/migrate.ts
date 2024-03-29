import pg from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

async function main() {
  if (!process.env.DB_URL) {
    throw new Error("🥲 Database credentials missing!");
  }

  const { Pool } = pg; // why the fuck i have to do this
  const pool = new Pool({ connectionString: process.env.DB_URL });
  const db: NodePgDatabase = drizzle(pool);

  console.log("[migrate] Running migrations...");

  /**
   * By default, all information about executed migrations will be stored in the database inside the
   * '__drizzle_migrations' table, inside the 'drizzle' schema (Only for Postgres).
   *
   * In Postgres, when we do '\dt' in database, only tables having schema 'public' are visible.
   *
   * To see '__drizzle_migrations' in Postgres DB use: `SELECT * FROM drizzle.__drizzle_migrations;`
   *
   * To list all schema's of Postgres DB use: '\dn'
   *
   * We can customize the schema and table name by using 'migrationsSchema' (Works only with PostgreSQL DB) and 'migrationsTable' respectively.
   */
  await migrate(db, {
    migrationsFolder: "src/db/migrations",
    migrationsTable: "drizzle_migrations",
    // we can use any schema name but it will not be visible in database by default so I used 'public'
    migrationsSchema: "public",
  });

  console.log("[migrate] All migrations have been ran, exiting...");

  await pool.end();
}

main();
