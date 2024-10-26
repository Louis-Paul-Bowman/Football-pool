import { DATABASE_URI } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(DATABASE_URI);
export const db = drizzle({ client });
