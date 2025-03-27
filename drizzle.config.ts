import { env } from "@/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/db/schema.ts",
	dialect: "mysql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
