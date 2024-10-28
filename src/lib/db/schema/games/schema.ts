import { pgTable, text, integer, timestamp, pgEnum, boolean } from 'drizzle-orm/pg-core';
import { teamIds, strSeasonTypes } from '../../../espnApi'; //$lib syntax breaks drizzle-kit

export const seasonTypesEnum = pgEnum('seasonTypesEnum', strSeasonTypes);
export const teamIdsEnum = pgEnum('teamIdsEnum', teamIds);

export const games = pgTable('games', {
	id: text('id').unique().primaryKey(),
	year: integer('year').notNull(),
	seasonType: seasonTypesEnum('seasonType').notNull(),
	week: integer('week').notNull(),
	date: timestamp('date').notNull(),
	home: teamIdsEnum('home').notNull(),
	away: teamIdsEnum('away').notNull(),
	homeScore: integer('home_score').notNull().default(0),
	awayScore: integer('away_score').notNull().default(0),
	link: text('link'),
	final: boolean("final").default(false)
});
