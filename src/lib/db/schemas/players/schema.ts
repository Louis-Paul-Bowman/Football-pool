import { pgTable, serial, text, boolean, integer, unique } from 'drizzle-orm/pg-core';
import { leagues } from '../leagues/schema';

export const players = pgTable(
	'players',
	{
		id: serial('id').notNull().primaryKey(),
		accountUUID: text('account_UUID').notNull(),
		name: text('name').notNull(),
		league: integer('league')
			.notNull()
			.references(() => leagues.id),
		paid: boolean('paid').notNull().default(false)
	},
	(table) => ({
		uniqueAccountLeague: unique().on(table.accountUUID, table.league)
	})
);
