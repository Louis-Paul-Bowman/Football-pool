import { pgTable, integer, timestamp, serial, json, text } from 'drizzle-orm/pg-core';

export type LeagueWeeks = Record<number, { start: Date; end: Date }>;

export const leagues = pgTable('leagues', {
	id: serial('id').notNull().primaryKey(),
	year: integer('year').notNull(),
	seasonType: integer('seasonType').notNull(),
	start: timestamp('start').notNull(),
	end: timestamp('end').notNull(),
	weeks: json('weeks').notNull().$type<LeagueWeeks>(),
	spreadGames: text('spread_games').array().notNull().default([])
});
