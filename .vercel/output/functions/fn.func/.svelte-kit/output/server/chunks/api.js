import { drizzle } from "drizzle-orm/postgres-js";
import { d as teamIds, v as validTeamIds, V as ValidTeamIdsSchema } from "./espnApi.js";
import { pgEnum, pgTable, text, integer, timestamp, boolean, serial, json, unique } from "drizzle-orm/pg-core";
import { z } from "zod";
const DATABASE_URI = "postgresql://postgres.notcywottgczignlfmbr:EYQ*fCdYoM@8A*xq883kcB2NmQYbidt9@aws-0-ca-central-1.pooler.supabase.com:5432/postgres";
const DB_ADMIN_UUID = "050629ac-ce5e-434f-ab43-67224a37bc56";
const db = drizzle(DATABASE_URI);
const teamIdsEnum = pgEnum("teamIdsEnum", teamIds);
const games = pgTable("games", {
  id: text("id").notNull().unique().primaryKey(),
  year: integer("year").notNull(),
  seasonType: integer("seasonType").notNull(),
  week: integer("week").notNull(),
  date: timestamp("date").notNull(),
  home: teamIdsEnum("home").notNull(),
  away: teamIdsEnum("away").notNull(),
  homeScore: integer("home_score").notNull().default(0),
  awayScore: integer("away_score").notNull().default(0),
  link: text("link"),
  active: boolean("active").notNull().default(false),
  final: boolean("final").notNull().default(false),
  updated: timestamp("updated").notNull()
});
const validTeamIdsEnum = pgEnum("validTeamIdsEnum", validTeamIds);
const byes = pgTable("byes", {
  id: serial().notNull().primaryKey(),
  year: integer("year").notNull(),
  seasonType: integer("seasonType").notNull(),
  week: integer("week").notNull(),
  team: validTeamIdsEnum("team").notNull()
});
const leagues = pgTable("leagues", {
  id: serial("id").notNull().primaryKey(),
  year: integer("year").notNull(),
  seasonType: integer("seasonType").notNull(),
  start: timestamp("start").notNull(),
  end: timestamp("end").notNull(),
  weeks: json("weeks").notNull().$type(),
  spreadGames: text("spread_games").array().notNull().default([])
});
const players = pgTable(
  "players",
  {
    id: serial("id").notNull().primaryKey(),
    accountUUID: text("account_UUID").notNull(),
    name: text("name").notNull(),
    league: integer("league").notNull().references(() => leagues.id),
    paid: boolean("paid").notNull().default(false)
  },
  (table) => ({
    uniqueAccountLeague: unique().on(table.accountUUID, table.league)
  })
);
const picks = pgTable("picks", {
  id: serial("id").notNull().primaryKey(),
  playerId: integer("player_id").notNull().references(() => players.id),
  league: integer("league").notNull().references(() => leagues.id),
  gameId: text("game_id").notNull().references(() => games.id),
  pick: teamIdsEnum("pick").notNull(),
  spread: integer("spread")
});
function EspnEventtoGame(event, week) {
  let url = null;
  event.links.forEach((link) => {
    if (link.text === "Gamecast") {
      url = link.href;
    }
  });
  const [comp1, comp2] = event.competitions[0].competitors;
  const homeTeam = comp1.homeAway == "home" ? comp1 : comp2;
  const homeId = homeTeam.id;
  const awayTeam = comp1.homeAway == "away" ? comp1 : comp2;
  const awayId = awayTeam.id;
  let game = {
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
    active: event.status.type.state === "in",
    final: event.status.type.completed,
    updated: new Date(Date.now())
  };
  return game;
}
const SelectionsSchema = z.record(
  z.string(),
  z.object({
    selected: ValidTeamIdsSchema,
    spread: z.number().int().positive().nullable()
  })
);
function validateSelections(obj) {
  SelectionsSchema.parse(obj);
}
function getCurrentWeek(league) {
  const now = new Date(Date.now());
  let currentWeek = null;
  let leagueStart = new Date(league.start);
  let leagueEnd = new Date(league.end);
  if (now < leagueStart || now > leagueEnd) {
    throw new Error("League is not active");
  }
  for (const [weekNum, weekData] of Object.entries(league.weeks)) {
    let weekStart = new Date(weekData.start);
    let weekEnd = new Date(weekData.end);
    if (now > weekEnd) {
      continue;
    }
    if (now > weekStart) {
      currentWeek = Number(weekNum);
      break;
    }
  }
  if (currentWeek === null) {
    throw new Error("League is not active");
  }
  return currentWeek;
}
export {
  DB_ADMIN_UUID as D,
  EspnEventtoGame as E,
  picks as a,
  byes as b,
  getCurrentWeek as c,
  db as d,
  games as g,
  leagues as l,
  players as p,
  validateSelections as v
};
