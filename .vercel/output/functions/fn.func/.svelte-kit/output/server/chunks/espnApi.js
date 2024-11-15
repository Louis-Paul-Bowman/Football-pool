import { z } from "zod";
function formatDate(d) {
  let date = new Date(d);
  const weekday = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const dayOfMonth = date.getDate();
  const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  const ordinalSuffix = getOrdinalSuffix(dayOfMonth);
  return `${weekday} ${month} ${dayOfMonth}${ordinalSuffix}, ${time}`;
}
function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
function chronologicalSort(games) {
  return [...games].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
      throw new Error("Invalid date format");
    }
    return dateA.getTime() - dateB.getTime();
  });
}
function selectable(weekStart) {
  let now = new Date(Date.now());
  let cutoffTime = new Date(weekStart);
  cutoffTime.setHours(cutoffTime.getHours() - 2);
  return now < cutoffTime;
}
function unflattenWeeks(flat) {
  let weeks = [];
  let unflattenedWeeks = {};
  flat.forEach((obj) => {
    if (!weeks.includes(obj.week)) {
      weeks.push(obj.week);
    }
  });
  weeks.sort((a, b) => a - b);
  weeks.forEach((week) => {
    unflattenedWeeks[week] = [];
  });
  flat.forEach((obj) => {
    unflattenedWeeks[obj.week].push(obj);
  });
  return unflattenedWeeks;
}
const validTeamIds = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "33",
  "34"
];
const ValidTeamIdsSchema = z.enum(validTeamIds);
const teamIds = [...validTeamIds, "-1", "-2"];
const TeamIdsSchema = z.enum(teamIds);
const teams = {
  "-2": "TBD",
  "-1": "TBD",
  "1": "Falcons",
  "2": "Bills",
  "3": "Bears",
  "4": "Bengals",
  "5": "Browns",
  "6": "Cowboys",
  "7": "Broncos",
  "8": "Lions",
  "9": "Packers",
  "10": "Titans",
  "11": "Colts",
  "12": "Chiefs",
  "13": "Raiders",
  "14": "Rams",
  "15": "Dolphins",
  "16": "Vikings",
  "17": "Patriots",
  "18": "Saints",
  "19": "Giants",
  "20": "Jets",
  "21": "Eagles",
  "22": "Cardinals",
  "23": "Steelers",
  "24": "Chargers",
  "25": "49ers",
  "26": "Seahawks",
  "27": "Buccaneers",
  "28": "Commanders",
  "29": "Panthers",
  "30": "Jaguars",
  "33": "Ravens",
  "34": "Texans"
};
const SeasonTypesSchema = z.number().int().gte(1).lte(4);
function assertSeasonTypes(obj) {
  SeasonTypesSchema.parse(obj);
  return;
}
const strSeasonTypes = ["1", "2", "3", "4"];
const StrSeasonTypesSchema = z.enum(strSeasonTypes);
const seasonWeeks = {
  1: [1, 2, 3, 4],
  2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  3: [1, 2, 3, 4, 5],
  4: [1]
};
const EspnSeasonSchema = z.object({
  year: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  type: z.object({
    id: z.string(),
    type: SeasonTypesSchema,
    name: z.string()
  })
});
const EspnLeagueSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  season: EspnSeasonSchema,
  calendarStartDate: z.string(),
  calendarEndDate: z.string(),
  calendar: z.array(
    z.object({
      label: z.enum(["Preseason", "Regular Season", "Postseason", "Off Season"]),
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
const EspnCompetitorSchema = z.object({
  homeAway: z.enum(["home", "away"]),
  id: TeamIdsSchema,
  score: z.coerce.number().int(),
  //actually a string in the API response but for ease of use cast to number
  winner: z.boolean().optional()
});
const EspnEventSchema = z.object({
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
      text: z.enum(["Gamecast", "Box Score", "Play-by-Play", "Recap", "Highlights"])
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
      state: z.enum(["pre", "in", "post"]),
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
const EspnWeekSchema = z.object({
  number: z.number(),
  teamsOnBye: z.optional(
    z.array(
      z.object({
        id: ValidTeamIdsSchema
      })
    )
  )
});
const EspnScoreboardResponseSchema = z.object({
  leagues: z.array(EspnLeagueSchema),
  events: z.array(EspnEventSchema),
  season: z.object({
    type: SeasonTypesSchema,
    year: z.number()
  }),
  week: EspnWeekSchema
});
async function fetchScores(dates, seasontype, week) {
  const scoreURL = "http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";
  const params = new URLSearchParams();
  if (dates !== void 0) {
    params.set("dates", dates);
  }
  if (seasontype !== void 0) {
    params.set("seasontype", String(seasontype));
  }
  if (dates !== void 0) {
    params.set("week", String(week));
  }
  const url = `${scoreURL}?${params}`;
  console.log("Hitting ESPN API.");
  const resp = await fetch(url);
  const respData = await resp.json();
  return EspnScoreboardResponseSchema.parse(respData);
}
function assertEspnFullSeasonData(obj, seasonType) {
  seasonWeeks[seasonType].forEach((week) => {
    EspnScoreboardResponseSchema.parse(obj[week]);
  });
  return;
}
async function getEspnFullSeasonData(year, seasontype) {
  let weeks = seasonWeeks[seasontype];
  let scores = {};
  await Promise.all(
    weeks.map(async (week) => {
      let weekData;
      weekData = await fetchScores(String(year), seasontype, week);
      weekData.events = chronologicalSort(weekData.events);
      scores[week] = weekData;
    })
  );
  assertEspnFullSeasonData(scores, seasontype);
  return scores;
}
export {
  ValidTeamIdsSchema as V,
  assertSeasonTypes as a,
  formatDate as b,
  chronologicalSort as c,
  teamIds as d,
  fetchScores as f,
  getEspnFullSeasonData as g,
  selectable as s,
  teams as t,
  unflattenWeeks as u,
  validTeamIds as v
};
