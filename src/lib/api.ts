import { seasonWeeks, ValidTeamIdsSchema } from './espnApi';
import type { EspnEvent, SeasonTypes, ValidTeamIds } from './espnApi';
import { games } from './db/schemas/games/schema';
import { players } from './db/schemas/players/+schema';
import { picks } from './db/schemas/picks/+schema';
import { byes } from './db/schemas/byes/schema';
import { leagues } from './db/schemas/leagues/+schema';
import { z } from 'zod';
export type FullSeasonData<T extends SeasonTypes> = {
	[K in keyof (typeof seasonWeeks)[T]]: {
		games: (typeof games.$inferSelect)[];
		byes: ValidTeamIds[];
	};
};

export function EspnEventtoGame(event: EspnEvent, week: Number): typeof games.$inferInsert {
	let url: string | null = null;
	event.links.forEach((link) => {
		if (link.text === 'Gamecast') {
			url = link.href;
		}
	});

	const [comp1, comp2] = event.competitions[0].competitors;

	const homeTeam = comp1.homeAway == 'home' ? comp1 : comp2;
	const homeId = homeTeam.id;
	const awayTeam = comp1.homeAway == 'away' ? comp1 : comp2;
	const awayId = awayTeam.id;

	let game: typeof games.$inferInsert = {
		id: event.id,
		year: event.season.year,
		seasonType: event.season.type,
		week: Number(week),
		date: new Date(event.date),
		home: homeId,
		away: awayId,
		homeScore: homeTeam.score,
		awayScore: awayTeam.score,
		link: url,
		active: event.status.type.state === 'in',
		final: event.status.type.completed,
		updated: new Date(Date.now())
	};
	return game;
}

export const SelectionsSchema = z.record(
	z.string(),
	z.object({
		selected: ValidTeamIdsSchema,
		spread: z.number().int().positive().nullable()
	})
);

export type Selections = z.infer<typeof SelectionsSchema>;

export function validateSelections(obj: any): asserts obj is Selections {
	SelectionsSchema.parse(obj);
}

export type PlayerLeagueData = {
	player: { id: (typeof players.$inferSelect)['id']; paid: (typeof players.$inferSelect)['paid'] };
	league: typeof leagues.$inferSelect;
	weeks: Record<
		number,
		{
			games: (Omit<typeof games.$inferSelect, 'year' | 'seasonType'> & {
				pick: (typeof picks.$inferSelect)['pick'] | null;
				spread: (typeof picks.$inferSelect)['spread'] | null;
			})[];
			byes: (typeof byes.$inferSelect)['team'][];
		}
	>;
};
