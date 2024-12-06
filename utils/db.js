import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema';
// 
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
// // console.log("db connected")
export const db = drizzle(sql, {schema});
// const usersCount = await db.$count(users);
// console.log("sql", sql);

// console.log("result",result);


// import { users } from "./schema"

// const db = drizzle(process.env.DATABASE_URL);
// const usersCount = await db.$count(users);


// import { drizzle } from "drizzle-orm/node-postgres"
// import { MockInterview } from "./schema"

// const db = drizzle(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
// const MockInterviewCount = await db.$count(MockInterview);


