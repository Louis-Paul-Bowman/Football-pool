CREATE TABLE IF NOT EXISTS "leagues" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" integer NOT NULL,
	"seasonType" integer NOT NULL,
	"start" timestamp NOT NULL,
	"end" timestamp NOT NULL
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
