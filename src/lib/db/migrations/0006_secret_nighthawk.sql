ALTER TYPE "public"."validTeamIdsEnum" ADD VALUE '31' BEFORE '33';--> statement-breakpoint
ALTER TYPE "public"."validTeamIdsEnum" ADD VALUE '32' BEFORE '33';--> statement-breakpoint
ALTER TABLE "public"."games" ALTER COLUMN "home" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "public"."games" ALTER COLUMN "away" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "public"."picks" ALTER COLUMN "pick" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."teamIdsEnum";--> statement-breakpoint
CREATE TYPE "public"."teamIdsEnum" AS ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '-1', '-2');--> statement-breakpoint
ALTER TABLE "public"."games" ALTER COLUMN "home" SET DATA TYPE "public"."teamIdsEnum" USING "home"::"public"."teamIdsEnum";--> statement-breakpoint
ALTER TABLE "public"."games" ALTER COLUMN "away" SET DATA TYPE "public"."teamIdsEnum" USING "away"::"public"."teamIdsEnum";--> statement-breakpoint
ALTER TABLE "public"."picks" ALTER COLUMN "pick" SET DATA TYPE "public"."teamIdsEnum" USING "pick"::"public"."teamIdsEnum";