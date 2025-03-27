import { sql } from "drizzle-orm";
import {
	int,
	mysqlTable,
	primaryKey,
	timestamp,
	tinyint,
	unique,
	varchar,
} from "drizzle-orm/mysql-core";

export const cookieGuildBattleRecords = mysqlTable(
	"cookie_guild_battle_records",
	{
		id: varchar({ length: 30 }).notNull(),
		participantName: varchar({ length: 128 }).notNull(),
		bossType: varchar({ length: 30 }).notNull(),
		damage: int().notNull(),
		participationTime: timestamp({ mode: "string" }).notNull(),
		combatPower: int().notNull(),
		seasonName: varchar({ length: 128 }).notNull(),
		guildName: varchar({ length: 128 }).notNull(),
		createdAt: timestamp("created_at", { mode: "string" }).default(sql`(now())`).notNull(),
		updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
	},
	(table) => [
		primaryKey({ columns: [table.id], name: "cookie_guild_battle_records_id" }),
		unique("battle_record_unique_idx").on(
			table.participantName,
			table.guildName,
			table.seasonName,
			table.damage,
			table.bossType,
			table.combatPower,
		),
	],
);

export const cookieTasks = mysqlTable(
	"cookie_tasks",
	{
		id: varchar({ length: 30 }).notNull(),
		code: varchar({ length: 128 }).notNull(),
		title: varchar({ length: 128 }),
		status: varchar({ length: 30 }).default("todo").notNull(),
		label: varchar({ length: 30 }).default("bug").notNull(),
		priority: varchar({ length: 30 }).default("low").notNull(),
		archived: tinyint().default(0).notNull(),
		createdAt: timestamp("created_at", { mode: "string" }).default(sql`(now())`).notNull(),
		updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
	},
	(table) => [
		primaryKey({ columns: [table.id], name: "cookie_tasks_id" }),
		unique("cookie_tasks_code_unique").on(table.code),
	],
);
