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
	"active" boolean DEFAULT false,
	"final" boolean DEFAULT false,
	CONSTRAINT "games_id_unique" UNIQUE("id")
);
