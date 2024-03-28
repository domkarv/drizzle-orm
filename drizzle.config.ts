import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  out: "src/db/migrations",
  schema: "src/db/schema/schema.ts",
  dbCredentials: {
    connectionString: String(process.env.DB_URL),
  },
  verbose: true,
  strict: true,
} satisfies Config;
