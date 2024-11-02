import { pgTable, integer, timestamp, serial } from 'drizzle-orm/pg-core';

export const leagues = pgTable('leagues', {
	id: serial('id').primaryKey(),
	year: integer('year').notNull(),
	seasonType: integer('seasonType').notNull(),
	start: timestamp('start').notNull(),
	end: timestamp('end').notNull()
});
