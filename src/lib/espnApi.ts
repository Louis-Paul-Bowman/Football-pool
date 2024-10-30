import { z } from 'zod';
import { chronologicalSort } from './helpers';

export const validTeamIds = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30',
	'33',
	'34'
] as const;

export const ValidTeamIdsSchema = z.enum(validTeamIds);
export type ValidTeamIds = z.infer<typeof ValidTeamIdsSchema>;

export const teamIds = [...validTeamIds, '-1', '-2'] as const;

export const TeamIdsSchema = z.enum(teamIds);
export type TeamIds = z.infer<typeof TeamIdsSchema>;

export const teams: Record<TeamIds, string> = {
	'-2': 'TBD',
	'-1': 'TBD',
	'1': 'Falcons',
	'2': 'Bills',
	'3': 'Bears',
	'4': 'Bengals',
	'5': 'Browns',
	'6': 'Cowboys',
	'7': 'Broncos',
	'8': 'Lions',
	'9': 'Packers',
	'10': 'Titans',
	'11': 'Colts',
	'12': 'Chiefs',
	'13': 'Raiders',
	'14': 'Rams',
	'15': 'Dolphins',
	'16': 'Vikings',
	'17': 'Patriots',
	'18': 'Saints',
	'19': 'Giants',
	'20': 'Jets',
	'21': 'Eagles',
	'22': 'Cardinals',
	'23': 'Steelers',
	'24': 'Chargers',
	'25': '49ers',
	'26': 'Seahawks',
	'27': 'Buccaneers',
	'28': 'Commanders',
	'29': 'Panthers',
	'30': 'Jaguars',
	'33': 'Ravens',
	'34': 'Texans'
};

//Zod no likey non-string enums
export const seasonTypes = [1, 2, 3, 4] as const;
export const SeasonTypesSchema = z.number().int().gte(1).lte(4);
export type SeasonTypes = 1 | 2 | 3 | 4;
export function assertSeasonTypes(obj: any): asserts obj is SeasonTypes {
	SeasonTypesSchema.parse(obj);
	return;
}
export const strSeasonTypes = ['1', '2', '3', '4'] as const;
export const StrSeasonTypesSchema = z.enum(strSeasonTypes);
export type StrSeasonTypes = z.infer<typeof StrSeasonTypesSchema>;

export const seasonWeeks = {
	1: [1, 2, 3, 4],
	2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
	3: [1, 2, 3, 4, 5],
	4: [1]
} as const;

export const EspnSeasonSchema = z.object({
	year: z.number(),
	startDate: z.string(),
	endDate: z.string(),
	type: z.object({
		id: z.string(),
		type: SeasonTypesSchema,
		name: z.string()
	})
});
export type EspnSeason = z.infer<typeof EspnSeasonSchema>;

export const EspnLeagueSchema = z.object({
	id: z.string(),
	name: z.string(),
	slug: z.string(),
	season: EspnSeasonSchema,
	calendarStartDate: z.string(),
	calendarEndDate: z.string(),
	calendar: z.array(
		z.object({
			label: z.enum(['Preseason', 'Regular Season', 'Postseason', 'Off Season']),
			value: StrSeasonTypesSchema,
			startDate: z.string(),
			endDate: z.string(),
			entries: z.array(
				z.object({
					label: z.string(),
					alternateLabel: z.string(),
					detail: z.string(),
					value: z.string(),
					startDate: z.string(),
					endDate: z.string()
				})
			)
		})
	)
});
export type EspnLeague = z.infer<typeof EspnLeagueSchema>;

export const EspnCompetitorSchema = z.object({
	homeAway: z.enum(['home', 'away']),
	id: TeamIdsSchema,
	score: z.coerce.number().int(), //actually a string in the API response but for ease of use cast to number
	winner: z.boolean().optional()
});
export type EspnCompetitor = z.infer<typeof EspnCompetitorSchema>;

export const EspnEventSchema = z.object({
	competitions: z.array(
		z.object({
			competitors: z.array(EspnCompetitorSchema)
		})
	),
	date: z.string(),
	id: z.string(),
	links: z.array(
		z.object({
			href: z.string(),
			text: z.enum(['Gamecast', 'Box Score', 'Play-by-Play', 'Recap', 'Highlights'])
		})
	),
	name: z.string(),
	season: z.object({
		year: z.number(),
		type: SeasonTypesSchema
	}),
	situation: z.optional(
		z.object({
			probability: z.object({
				tiePercentage: z.number(),
				homeWinPercentage: z.number(),
				awayWinPercentage: z.number()
			})
		})
	),
	status: z.object({
		clock: z.number(),
		displayClock: z.string(),
		period: z.number(),
		type: z.object({
			state: z.enum(['pre', 'in', 'post']),
			completed: z.boolean(),
			description: z.string(),
			detail: z.string(),
			shortDetail: z.string()
		})
	}),
	odds: z.optional(
		z.array(
			z.object({
				details: z.string()
			})
		)
	)
});
export type EspnEvent = z.infer<typeof EspnEventSchema>;

export const EspnWeekSchema = z.object({
	number: z.number(),
	teamsOnBye: z.optional(
		z.array(
			z.object({
				id: ValidTeamIdsSchema
			})
		)
	)
});
export type EspnWeek = z.infer<typeof EspnWeekSchema>;

export const EspnScoreboardResponseSchema = z.object({
	leagues: z.array(EspnLeagueSchema),
	events: z.array(EspnEventSchema),
	season: z.object({
		type: SeasonTypesSchema,
		year: z.number()
	}),
	week: EspnWeekSchema
});
export type EspnScoreboardResponse = z.infer<typeof EspnScoreboardResponseSchema>;

export async function fetchScores(
	dates?: string,
	seasontype?: z.infer<typeof SeasonTypesSchema>,
	week?: number
) {
	const scoreURL = 'http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';
	const params = new URLSearchParams();

	if (dates !== undefined) {
		params.set('dates', dates);
	}
	if (seasontype !== undefined) {
		params.set('seasontype', String(seasontype));
	}
	if (dates !== undefined) {
		params.set('week', String(week));
	}

	const url = `${scoreURL}?${params}`;
	const resp = await fetch(url);
	const respData = await resp.json();

	return EspnScoreboardResponseSchema.parse(respData);
}

export type EspnFullSeasonData<T extends SeasonTypes> = {
	[K in keyof (typeof seasonWeeks)[T]]: z.infer<typeof EspnScoreboardResponseSchema>;
};

export function assertEspnFullSeasonData<T extends SeasonTypes>(
	obj: any,
	seasonType: T
): asserts obj is EspnFullSeasonData<T> {
	seasonWeeks[seasonType].forEach((week) => {
		EspnScoreboardResponseSchema.parse(obj[week]);
	});
	return;
}

export async function getEspnFullSeasonData(year: number, seasontype: SeasonTypes) {
	let weeks = seasonWeeks[seasontype];

	let scores: any = {};

	await Promise.all(
		weeks.map(async (week) => {
			let weekData: EspnScoreboardResponse;

			weekData = await fetchScores(String(year), seasontype, week);

			weekData.events = chronologicalSort(weekData.events);

			scores[week] = weekData;
		})
	);

	assertEspnFullSeasonData(scores, seasontype);
	return scores;
}
