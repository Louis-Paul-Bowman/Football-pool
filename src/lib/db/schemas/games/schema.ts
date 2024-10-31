import { pgTable, text, integer, timestamp, pgEnum, boolean } from 'drizzle-orm/pg-core';
import { teamIds } from '../../../espnApi'; //$lib syntax breaks drizzle-kit

export const teamIdsEnum = pgEnum('teamIdsEnum', teamIds);

export const games = pgTable('games', {
	id: text('id').unique().primaryKey(),
	year: integer('year').notNull(),
	seasonType: integer('seasonType').notNull(),
	week: integer('week').notNull(),
	date: timestamp('date').notNull(),
	home: teamIdsEnum('home').notNull(),
	away: teamIdsEnum('away').notNull(),
	homeScore: integer('home_score').notNull().default(0),
	awayScore: integer('away_score').notNull().default(0),
	link: text('link'),
	active: boolean('active').notNull().default(false),
	final: boolean('final').notNull().default(false),
	updated: timestamp('updated').notNull()
});
