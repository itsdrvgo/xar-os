import { InferModel } from "drizzle-orm";
import { mysqlTable, uniqueIndex, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";

// SCHEMAS

export const users = mysqlTable(
    "users",
    {
        id: varchar("id", { length: 255 }).notNull().primaryKey(),
        firstName: varchar("firstName", { length: 255 }).notNull(),
        lastName: varchar("lastName", { length: 255 }).notNull(),
        username: varchar("username", { length: 255 }).notNull(),
        image: varchar("image", { length: 255 }),
        email: varchar("email", { length: 255 }).notNull().unique(),
        password: varchar("firstName", { length: 20 }).notNull(),
    },
    (table) => {
        return {
            userIdIdx: uniqueIndex("userId_Idx").on(table.id),
        };
    }
);

// TYPES

export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, "insert">;

// ZOD SCHEMA

export const insertUserSchema = createInsertSchema(users);
