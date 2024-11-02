CREATE TYPE "public"."validTeamIdsEnum" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '33', '34');--> statement-breakpoint
CREATE TYPE "public"."teamIdsEnum" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '33', '34', '-1', '-2');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "byes" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" integer NOT NULL,
	"seasonType" integer NOT NULL,
	"week" integer NOT NULL,
	"team" "validTeamIdsEnum" NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "games" (
	"id" text PRIMARY KEY NOT NULL,
	"year" integer NOT NULL,
	"seasonType" integer NOT NULL,
	"week" integer NOT NULL,
	"date" timestamp NOT NULL,
	"home" "teamIdsEnum" NOT NULL,
	"away" "teamIdsEnum" NOT NULL,
	"home_score" integer DEFAULT 0 NOT NULL,
	"away_score" integer DEFAULT 0 NOT NULL,
	"link" text,
	"active" boolean DEFAULT false NOT NULL,
	"final" boolean DEFAULT false NOT NULL,
	"updated" timestamp NOT NULL,
	CONSTRAINT "games_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leagues" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" integer NOT NULL,
	"seasonType" integer NOT NULL,
	"start" timestamp NOT NULL,
	"end" timestamp NOT NULL,
	"weeks" json NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "picks" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer NOT NULL,
	"league" integer NOT NULL,
	"game_id" text NOT NULL,
	"pick" "teamIdsEnum" NOT NULL,
	"spread" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "players" (
	"id" serial PRIMARY KEY NOT NULL,
	"account_UUID" text NOT NULL,
	"league" integer NOT NULL,
	"paid" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "picks" ADD CONSTRAINT "picks_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "picks" ADD CONSTRAINT "picks_league_leagues_id_fk" FOREIGN KEY ("league") REFERENCES "public"."leagues"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "picks" ADD CONSTRAINT "picks_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "players" ADD CONSTRAINT "players_league_leagues_id_fk" FOREIGN KEY ("league") REFERENCES "public"."leagues"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
