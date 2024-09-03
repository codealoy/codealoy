import postgres from 'postgres';

import { env } from '@/config/env';
import { drizzle } from 'drizzle-orm/postgres-js';

export const client = postgres(env.DATABASE_URL);
export const db = drizzle(client);
