/** @type{import ("drizzle-kit").Config} */

export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:q6NU4uLxdWPr@ep-nameless-violet-a5w9rm4r.us-east-2.aws.neon.tech/neondb?sslmode=require'
    }
}