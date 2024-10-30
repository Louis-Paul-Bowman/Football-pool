import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
//dotenv sucks but sveltekit's /$env is not available outside of /src so do this workaround
dotenv.config({ path: '.env.local' });

const DATABASE_URI = process.env.DATABASE_URI;

//using dotenv makes these string|undefined so need this workaround to satisfy Config
if (!DATABASE_URI)
	throw new Error('Missing DB credential environment variables. Set them in .env.');

export default {
	schema: './src/lib/db/schemas/*',
	out: './src/lib/db/migrations',
	dialect: 'postgresql',
	dbCredentials: { url: DATABASE_URI },
	verbose: true,
	strict: false
} satisfies Config;
