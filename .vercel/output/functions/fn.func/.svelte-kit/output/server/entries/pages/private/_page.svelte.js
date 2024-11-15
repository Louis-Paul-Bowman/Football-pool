import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, k as each } from "../../../chunks/ssr.js";
import { t as teams, b as formatDate, s as selectable } from "../../../chunks/espnApi.js";
import { g as getToastStore } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { T as TabGroup, a as Tab } from "../../../chunks/Tab.js";
import { C as Check, X } from "../../../chunks/x.js";
const hoverEffect = "hover:border-green-500 hover:border-dashed hover:border-8";
const selectedEffect = "border-green-500 border-8";
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  let { selected = game.pick } = $$props;
  let { selectable: selectable2 = false } = $$props;
  let { isSpread } = $$props;
  const homeName = teams[game.home];
  const homeLogo = `/img/logos/svg/${game.home}.svg`;
  const awayName = teams[game.away];
  const awayLogo = `/img/logos/svg/${game.away}.svg`;
  const name = `${awayName} at ${homeName}`;
  let { spread = game.spread } = $$props;
  const formattedStartTime = formatDate(game.date);
  let leader = null;
  let awayCSS = "";
  let homeCSS = "";
  if ($$props.game === void 0 && $$bindings.game && game !== void 0) $$bindings.game(game);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable2 !== void 0) $$bindings.selectable(selectable2);
  if ($$props.isSpread === void 0 && $$bindings.isSpread && isSpread !== void 0) $$bindings.isSpread(isSpread);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.spread === void 0 && $$bindings.spread && spread !== void 0) $$bindings.spread(spread);
  {
    {
      leader = game.awayScore > game.homeScore ? game.away : game.homeScore > game.awayScore ? game.home : null;
      awayCSS = `${selectable2 ? hoverEffect : ""} ${selected == game.away ? selectedEffect : "border-transparent"} transition-colors duration-300 ${leader !== null && leader !== game.away ? "grayscale" : ""}`;
      homeCSS = `${selectable2 ? hoverEffect : ""} ${selected == game.home ? selectedEffect : "border-transparent"} transition-colors duration-300 ${leader !== null && leader !== game.home ? "grayscale" : ""}`;
    }
  }
  return `  <div class="max-w-sm mx-auto mt-12 border-black rounded-lg border-solid border p-4 space-y-2">${game.link !== null ? `<a class="text-lg font-medium mb-4 text-center block underline"${add_attribute("href", game.link, 0)} target="_blank" rel="noopener noreferrer">${escape(name)}</a>` : `<p class="text-lg font-medium mb-4 text-center">${escape(name)}</p>`}  <p class="text-center">${escape(formattedStartTime)}</p> <div class="flex space-x-4 items-center justify-center text-center"><div>${selectable2 ? `<button type="button" aria-label="${escape(awayName, true) + " logo"}"><img${add_attribute("src", awayLogo, 0)} alt="${escape(awayName, true) + " logo"}" class="${"w-20 h-20 object-contain " + escape(awayCSS, true)}"></button>` : `<img${add_attribute("src", awayLogo, 0)} alt="${escape(awayName, true) + " logo"}" class="${"w-20 h-20 object-contain " + escape(awayCSS, true)}">`} <p>${escape(game.awayScore)}</p></div> <div>${selectable2 ? `<button type="button" aria-label="${escape(homeName, true) + " logo"}"><img${add_attribute("src", homeLogo, 0)} alt="${escape(homeName, true) + " logo"}" class="${"w-20 h-20 object-contain " + escape(homeCSS, true)}"></button>` : `<img${add_attribute("src", homeLogo, 0)} alt="${escape(homeName, true) + " logo"}" class="${"w-20 h-20 object-contain " + escape(homeCSS, true)}">`} <p>${escape(game.homeScore)}</p></div></div> <div class="flex space-x-2 items-center justify-center">${isSpread ? `${selected !== null ? `<p>${escape(teams[selected])}</p>` : ``} <p data-svelte-h="svelte-9bqiz3">By</p> ${selectable2 ? `<input type="number" min="1" max="100" step="1" class="text-black"${add_attribute("value", spread, 0)}>` : `<p>${escape(spread)}</p>`}` : ``}</div> ${game.final ? `<div class="flex items-center justify-center text-center">${selected === leader ? `${validate_component(Check, "CheckIcon").$$render($$result, { color: "green" }, {}, {})}` : `${validate_component(X, "XIcon").$$render($$result, { color: "red" }, {}, {})}`}</div>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  getToastStore();
  let { league, weeks, currentWeek } = data;
  let selectedWeek = currentWeek;
  let maxWeek = Math.min(currentWeek + 1, Math.max(...Object.keys(weeks).map(Number)));
  let spreadGames = league.spreadGames;
  let gameComponents = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    maxWeek = Math.min(currentWeek + 1, Math.max(...Object.keys(weeks).map(Number)));
    $$rendered = `${weeks ? `<div>${validate_component(TabGroup, "TabGroup").$$render($$result, { justify: "justify-center" }, {}, {
      default: () => {
        return `${each(Array.from({ length: maxWeek }, (_, i) => i + 1), (week) => {
          return `${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              name: `Week ${week}`,
              value: week,
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
        })} <div><button class="btn w-16 text-center rounded-lg variant-filled-surface" data-svelte-h="svelte-dnxctr">Update</button> ${selectable(weeks[selectedWeek].games[0].date) ? `<button class="btn w-16 text-center rounded-lg variant-filled-surface" data-svelte-h="svelte-18c67t2">Submit</button>` : ``}</div>`;
      }
    })}</div> <div class="flex flex-wrap gap-x-10 gap-y-4">${each(weeks[selectedWeek].games, (game) => {
      return ` ${validate_component(Game, "Game").$$render(
        $$result,
        {
          game,
          isSpread: spreadGames.includes(game.id),
          selectable: selectable(weeks[selectedWeek].games[0].date),
          this: gameComponents[game.id]
        },
        {
          this: ($$value) => {
            gameComponents[game.id] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })} ${weeks[selectedWeek].byes.length > 0 ? `<div class="max-w-sm mx-auto mt-12 border-black rounded-lg border-dashed border-4 p-4 space-y-2 text-center"><h1 data-svelte-h="svelte-9rllos">Bye teams</h1> <div class="grid grid-flow-col grid-rows-2">${each(weeks[selectedWeek].byes, (teamId) => {
      return `<img${add_attribute("src", `/img/logos/svg/${teamId}.svg`, 0)} alt="${escape(teams[teamId], true) + " logo"}" class="w-20 h-20 object-contain">`;
    })}</div></div>` : ``}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
