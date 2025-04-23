import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  author: text("author").notNull(),
  rating: integer("rating").notNull(),
  text: text("text").notNull(),
  timeAgo: text("timeAgo").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertReviewSchema = createInsertSchema(reviews).pick({
  author: true,
  rating: true,
  text: true,
  timeAgo: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;
