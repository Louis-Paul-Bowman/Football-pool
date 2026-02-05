import { pgTable, integer, serial, text } from 'drizzle-orm/pg-core';
import { players } from '../players/schema';
import { leagues } from '../leagues/schema';

export const bonuses = pgTable('bonuses', {
	id: serial().notNull().primaryKey(),
	playerId: integer('player_id')
		.notNull()
		.references(() => players.id),
	league: integer('league')
		.notNull()
		.references(() => leagues.id),
	week: integer().notNull(),
	quantity: integer().notNull(),
	type: text()
});
