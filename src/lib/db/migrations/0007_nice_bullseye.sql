CREATE TABLE IF NOT EXISTS "bonuses" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer NOT NULL,
	"league" integer NOT NULL,
	"week" integer NOT NULL,
	"quantity" integer NOT NULL,
	"type" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bonuses" ADD CONSTRAINT "bonuses_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bonuses" ADD CONSTRAINT "bonuses_league_leagues_id_fk" FOREIGN KEY ("league") REFERENCES "public"."leagues"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
