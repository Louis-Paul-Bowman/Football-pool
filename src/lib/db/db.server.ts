import { DATABASE_URI } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';

export const db = drizzle(DATABASE_URI);
