import { InferSelectModel } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 32 }).notNull(),
  desc: varchar("desc", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const user = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 32 }).notNull(),
});

/**
 * Both of these give the same types:
 *
 * - `export type Todo = typeof todo.$inferSelect`
 * - `export type Todo = InferSelectModel<typeof todo>`
 */
export type Todo = InferSelectModel<typeof todo>;
export type NewTodo = typeof todo.$inferInsert;
