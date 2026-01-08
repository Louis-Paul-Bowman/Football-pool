import type { GamePicks, PlayerLeagueData } from './api';
import type { leagues } from './db/schemas/leagues/schema';
import { players } from './db/schemas/players/schema';
import { selectable } from './helpers';

function getGameResult(game: PlayerLeagueData['weeks'][number]['games'][number]) {
	let winner =
		game.homeScore > game.awayScore
			? game.home
			: game.awayScore > game.homeScore
				? game.away
				: null;
	let spread = Math.abs(game.homeScore - game.awayScore);
	return { winner, spread };
}

type PlayersWeeklyScores = Record<
	string,
	Record<number, { gamesScores: Record<string, number>; week: number; cumulative: number }>
>;

export function getDisplayableWeeks(weeks: PlayerLeagueData['weeks']) {
	let displayableWeeks: typeof weeks = {};
	for (const [weekNum, weekData] of Object.entries(weeks)) {
		if (!selectable(weekData.games[0].date)) {
			displayableWeeks[Number(weekNum)] = weekData;
		}
	}
	return displayableWeeks;
}

export function scorePlayers(
	leaguePlayers: Pick<typeof players.$inferSelect, 'id' | 'name'>[],
	displayableWeeks: PlayerLeagueData['weeks'],
	gamePicks: GamePicks,
	league: PlayerLeagueData['league']
) {
	let playersWeeklyScores: PlayersWeeklyScores = {};
	leaguePlayers.forEach((player) => {
		playersWeeklyScores[player.id] = {};
		let cumulative = 0;
		for (const [weekNum, weekData] of Object.entries(displayableWeeks)) {
			let gamesScores: Record<string, number> = {};
			let weekScore = 0;
			weekData.games.forEach((game) => {
				let gameScore = scoreGame(league, game, gamePicks[game.id][player.id]);
				gamesScores[game.id] = gameScore;
				weekScore += gameScore;
				cumulative += gameScore;
			});
			playersWeeklyScores[player.id][Number(weekNum)] = {
				gamesScores,
				week: weekScore,
				cumulative: cumulative
			};
		}
	});
	return playersWeeklyScores;
}

function scoreGame(
	league: typeof leagues.$inferSelect,
	game: PlayerLeagueData['weeks'][number]['games'][number],
	pick: GamePicks[string][number] | undefined
) {
	// Player didn't make a pick
	if (pick === undefined) {
		return 0;
	}
	let { winner, spread } = getGameResult(game);

	//Tie game
	if (winner === null) {
		return 0;
	}

	//Not a spread game
	if (!league.spreadGames.includes(game.id)) {
		return pick.pick === winner ? 1 : 0;
	}

	//Spread game
	let score = pick.pick === winner ? 1 + scoreSpread(spread, pick.spread) : 0;

	//Superbowl is double points (and always a spread game)
	if (league.seasonType === 3 && game.week === 5) {
		score = score * 2;
	}

	return score;
}

function scoreSpread(gameSpread: number, selectedSpread: number | null) {
	//Player didn't select a spread
	if (selectedSpread === null) {
		return 0;
	}
	let diff = Math.abs(gameSpread - selectedSpread);
	if (diff === 0) {
		return 5;
	}
	if (diff <= 4) {
		return 3;
	}
	if (diff <= 9) {
		return 2;
	}
	if (diff <= 20) {
		return 1;
	}
	return 0;
}
