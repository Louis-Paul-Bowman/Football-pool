import { pgTable, serial, text, boolean, integer } from 'drizzle-orm/pg-core';
import { leagues } from '../leagues/+schema';

export const players = pgTable('players', {
	id: serial('id').primaryKey(),
	accountUUID: text('account_UUID').notNull(),
	league: integer('league')
		.notNull()
		.references(() => leagues.id),
	paid: boolean('paid').notNull().default(false)
});
