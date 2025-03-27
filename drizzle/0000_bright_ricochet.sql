-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `cookie_guild_battle_records` (
	`id` varchar(30) NOT NULL,
	`participantName` varchar(128) NOT NULL,
	`bossType` varchar(30) NOT NULL,
	`damage` int NOT NULL,
	`participationTime` timestamp NOT NULL,
	`combatPower` int NOT NULL,
	`seasonName` varchar(128) NOT NULL,
	`guildName` varchar(128) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (CURRENT_TIMESTAMP),
	CONSTRAINT `cookie_guild_battle_records_id` PRIMARY KEY(`id`),
	CONSTRAINT `battle_record_unique_idx` UNIQUE(`participantName`,`guildName`,`seasonName`,`damage`,`bossType`,`combatPower`)
);
--> statement-breakpoint
CREATE TABLE `cookie_tasks` (
	`id` varchar(30) NOT NULL,
	`code` varchar(128) NOT NULL,
	`title` varchar(128),
	`status` varchar(30) NOT NULL DEFAULT 'todo',
	`label` varchar(30) NOT NULL DEFAULT 'bug',
	`priority` varchar(30) NOT NULL DEFAULT 'low',
	`archived` tinyint(1) NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (CURRENT_TIMESTAMP),
	CONSTRAINT `cookie_tasks_id` PRIMARY KEY(`id`),
	CONSTRAINT `cookie_tasks_code_unique` UNIQUE(`code`)
);

*/