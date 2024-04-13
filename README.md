### `tsx --env-file=.env src/db/migrate.ts`

- Don't know why but `tsc` was not working with this so as per suggestion of [Drizzle Migration Docs](https://orm.drizzle.team/docs/migrations) I used `pnpm tsx src/db/migrate.ts`

### Schema Issue

- By default, all information about executed migrations will be stored in the database inside the
  `__drizzle_migrations` table, inside the `drizzle` schema (Only for Postgres).
- In Postgres, when we do `\dt` in database, only tables having schema `public` are visible.
- To see `__drizzle_migrations` in Postgres DB use: `SELECT * FROM drizzle.__drizzle_migrations;`
- To list all schema's of Postgres DB use: `\dn`
- We can customize the schema and table name by using `migrationsSchema` (Works only with PostgreSQL DB) and `migrationsTable` respectively.

## Steps

1. First run generate command to create migration file => this only generate migration file not your database
2. Before running migrate command, make sure database is created and `DATABASE_URL` is set in `.env` file
3. Then run migrate command to execute the migration file
