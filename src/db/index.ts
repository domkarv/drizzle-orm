import pg from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema/schema.js";

if (!process.env.DB_URL) {
  throw new Error("🥲 Database credentials missing!");
}

const { Pool } = pg; // why the fuck i have to do this
const pool = new Pool({ connectionString: process.env.DB_URL });

export const db: NodePgDatabase<typeof schema> = drizzle(pool, { schema });
