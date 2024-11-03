import { pgTable, integer, serial, pgEnum } from 'drizzle-orm/pg-core';
import { validTeamIds } from '../../../espnApi'; //$lib syntax breaks drizzle-kit

export const validTeamIdsEnum = pgEnum('validTeamIdsEnum', validTeamIds);

export const byes = pgTable('byes', {
	id: serial().notNull().primaryKey(),
	year: integer('year').notNull(),
	seasonType: integer('seasonType').notNull(),
	week: integer('week').notNull(),
	team: validTeamIdsEnum('team').notNull()
});
