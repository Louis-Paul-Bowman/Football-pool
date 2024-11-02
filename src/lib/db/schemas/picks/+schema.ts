import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
import { leagues } from '../leagues/+schema';
import { players } from '../players/+schema';
import { games, teamIdsEnum } from '../games/schema';

export const picks = pgTable('picks', {
	id: serial('id').primaryKey(),
	playerId: integer('player_id')
		.notNull()
		.references(() => players.id),
	league: integer('league')
		.notNull()
		.references(() => leagues.id),
	gameId: text('game_id')
		.notNull()
		.references(() => games.id),
	pick: teamIdsEnum('pick').notNull(),
	spread: integer('spread')
});
