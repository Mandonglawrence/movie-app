//import postgres from "postgres";
import dotenv from "dotenv";

import connect, { sql } from "@databases/pg";

dotenv.config();
// const  connectionString =

const db = connect();

async function auth() {
  return db.query(sql`SELECT 1+1 as result`);
}
console.log(auth);
export { db, sql };

// export const lol = postgres(process.env.DATABASE_URL as string);
