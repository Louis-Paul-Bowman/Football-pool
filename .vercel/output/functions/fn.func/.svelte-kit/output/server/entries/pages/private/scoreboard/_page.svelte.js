import { c as create_ssr_component, v as validate_component, k as each, e as escape } from "../../../../chunks/ssr.js";
import { g as getToastStore } from "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../../chunks/Tab.js";
import { s as selectable, t as teams } from "../../../../chunks/espnApi.js";
import { X, C as Check } from "../../../../chunks/x.js";
function getGameResult(game) {
  let winner = game.homeScore > game.awayScore ? game.home : game.awayScore > game.homeScore ? game.away : null;
  let spread = Math.abs(game.homeScore - game.awayScore);
  return { winner, spread };
}
function scoreSpread(gameSpread, selectedSpread) {
  if (selectedSpread === null) {
    return 0;
  }
  let diff = Math.abs(gameSpread - selectedSpread);
  if (diff === 0) {
    return 7;
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  getToastStore();
  let { gamePicks, weeks, currentWeek, leaguePlayers, league } = data;
  let selectedWeek = currentWeek;
  let displayableWeeks = {};
  for (const [weekNum, weekData] of Object.entries(weeks)) {
    if (!selectable(weekData.games[0].date)) {
      displayableWeeks[Number(weekNum)] = weekData;
      selectedWeek = Number(weekNum);
    }
  }
  let playersWeeklyScores = scorePlayers();
  function scorePlayers() {
    let playersWeeklyScores2 = {};
    leaguePlayers.forEach((player) => {
      playersWeeklyScores2[player.id] = {};
      let cumulative = 0;
      for (const [weekNum, weekData] of Object.entries(displayableWeeks)) {
        let gamesScores = {};
        let weekScore = 0;
        weekData.games.forEach((game) => {
          let gameScore = scoreGame(game, gamePicks[game.id][player.id]);
          gamesScores[game.id] = gameScore;
          weekScore += gameScore;
          cumulative += gameScore;
        });
        playersWeeklyScores2[player.id][Number(weekNum)] = { gamesScores, week: weekScore, cumulative };
      }
    });
    return playersWeeklyScores2;
  }
  function scoreGame(game, pick) {
    if (pick === void 0) {
      return 0;
    }
    let { winner, spread } = getGameResult(game);
    if (winner === null) {
      return 0;
    }
    if (!league.spreadGames.includes(game.id)) {
      return pick.pick === winner ? 1 : 0;
    }
    return pick.pick === winner ? 1 + scoreSpread(spread, pick.spread) : 0;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${weeks ? `<div>${validate_component(TabGroup, "TabGroup").$$render($$result, { justify: "justify-center" }, {}, {
      default: () => {
        return `${each(Object.keys(displayableWeeks), (week) => {
          return `${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              name: week,
              value: Number(week),
              group: selectedWeek
            },
            {
              group: ($$value) => {
                selectedWeek = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(week)}`;
              }
            }
          )}`;
        })} <div><button class="btn w-16 text-center rounded-lg variant-filled-surface" data-svelte-h="svelte-dnxctr">Update</button></div>`;
      }
    })}</div> <div class="table-container"><table class="table table-hover text-center"><thead><tr><th></th> ${each(weeks[selectedWeek].games, (game) => {
      return ` <th><div class="grid grid-rows-3 items-center justify-center text-center"><img src="${"/img/logos/svg/" + escape(game.away, true) + ".svg"}" alt="${escape(teams[game.away], true) + " logo"}" class="w-10 h-10"> <p data-svelte-h="svelte-955hmr">at</p> <img src="${"/img/logos/svg/" + escape(game.home, true) + ".svg"}" alt="${escape(teams[game.home], true) + " logo"}" class="w-10 h-10"></div> </th>`;
    })} <th class="text-center" data-svelte-h="svelte-1d5aofe">Week</th> <th class="text-center" data-svelte-h="svelte-1jvvxg0">Total</th></tr></thead> <tbody><tr><th class="text-center" data-svelte-h="svelte-183khcr">Result</th> ${each(weeks[selectedWeek].games, (game) => {
      return `<th><div> ${game.active || game.final ? `${game.homeScore > game.awayScore ? ` <div class="flex items-center justify-center"><img src="${"/img/logos/svg/" + escape(game.home, true) + ".svg"}" alt="${escape(teams[game.home], true) + " logo"}" class="w-10 h-10"></div> ${game.active ? `<p>Leading (+${escape(game.homeScore - game.awayScore)})</p>` : `<p>Final ${escape(league.spreadGames.includes(game.id) ? `(+${game.homeScore - game.awayScore})` : "")} </p>`}` : `${game.awayScore > game.homeScore ? ` <div class="flex items-center justify-center"><img src="${"/img/logos/svg/" + escape(game.away, true) + ".svg"}" alt="${escape(teams[game.away], true) + " logo"}" class="w-10 h-10"></div> ${game.active ? `<p>Leading (+${escape(game.awayScore - game.homeScore)})</p>` : `<p>Final ${escape(league.spreadGames.includes(game.id) ? `(+${game.awayScore - game.homeScore})` : "")} </p>`}` : `<p data-svelte-h="svelte-5bzt68">Tied.</p>`}`}` : `<p></p>`}</div> </th>`;
    })} <th></th> <th></th></tr> ${each(leaguePlayers, (player) => {
      return `<tr><th>${escape(player.name)}</th> ${each(weeks[selectedWeek].games, (game) => {
        return ` <td><div class="flex flex-col items-center justify-center space-y-1"><div class="flex items-center justify-center">${gamePicks[game.id][player.id] !== void 0 && gamePicks[game.id][player.id].pick !== void 0 ? `<img src="${"/img/logos/svg/" + escape(gamePicks[game.id][player.id].pick, true) + ".svg"}" alt="${escape(teams[gamePicks[game.id][player.id].pick], true) + " logo"}" class="w-8 h-8 mr-1">` : ``} ${gamePicks[game.id][player.id] !== void 0 && gamePicks[game.id][player.id].spread ? `<p class="text-sm">(${escape(gamePicks[game.id][player.id].spread)})</p>` : ``}</div> ${game.active || game.final ? `<div class="flex items-center justify-center">${playersWeeklyScores[player.id][selectedWeek].gamesScores[game.id] === 0 ? `${validate_component(X, "XIcon").$$render($$result, { size: 24, color: "red" }, {}, {})} ${league.spreadGames.includes(game.id) ? `<span class="ml-1 text-xs" data-svelte-h="svelte-1u7ka5j">(+0)</span>` : ``}` : `${validate_component(Check, "CheckIcon").$$render($$result, { size: 24, color: "green" }, {}, {})} ${league.spreadGames.includes(game.id) ? `<span class="ml-1 text-xs">(+${escape(playersWeeklyScores[player.id][selectedWeek].gamesScores[game.id] - 1)})</span>` : ``}`} </div>` : ``}</div> </td>`;
      })} <td>${escape(playersWeeklyScores[player.id][selectedWeek].week)}</td> <td>${escape(playersWeeklyScores[player.id][selectedWeek].cumulative)}</td> </tr>`;
    })}</tbody></table></div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
