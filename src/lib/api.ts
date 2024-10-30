import { seasonWeeks } from './espnApi';
import type { EspnEvent, SeasonTypes, ValidTeamIds } from './espnApi';
import { games } from './db/schemas/games/schema';

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
		final: event.status.type.completed
	};
	return game;
}
