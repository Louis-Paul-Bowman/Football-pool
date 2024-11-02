import type { SeasonTypes, seasonWeeks } from '$lib/espnApi';
import { pgTable, integer, timestamp, serial, json } from 'drizzle-orm/pg-core';

export type WeekStarts = Record<number, { start: Date; end: Date }>;

export const leagues = pgTable('leagues', {
	id: serial('id').primaryKey(),
	year: integer('year').notNull(),
	seasonType: integer('seasonType').notNull(),
	start: timestamp('start').notNull(),
	end: timestamp('end').notNull(),
	weeks: json('weeks').notNull().$type<WeekStarts>()
});
