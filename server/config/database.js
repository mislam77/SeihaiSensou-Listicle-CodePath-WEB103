import pg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: '../.env' });

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : false
};

export const pool = new pg.Pool(config);