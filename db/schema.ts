import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  kind: text("kind").notNull(),
  amountCents: integer("amount_cents").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull().default("pending"),
  occurredOn: text("occurred_on").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const chores = sqliteTable("chores", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  valueCents: integer("value_cents").notNull(),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
});

export const goals = sqliteTable("goals", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  targetCents: integer("target_cents").notNull(),
  savedCents: integer("saved_cents").notNull().default(0),
});
