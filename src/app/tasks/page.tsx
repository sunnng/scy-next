import { promises as fs } from "node:fs";
import path from "node:path";
import { DataTable } from "@/components/data-table/data-table";
import { Shell } from "@/components/shell";
import { z } from "zod";
import { columns } from "./_components/columns";
import { taskSchema } from "./_lib/schema";

// Simulate a database read for tasks.
async function getTasks() {
	const data = await fs.readFile(path.join(process.cwd(), "/src/app/tasks/_lib/tasks.json"));

	const tasks = JSON.parse(data.toString());

	return z.array(taskSchema).parse(tasks);
}

export default async function TasksPage() {
	const tasks = await getTasks();

	return (
		<Shell>
			<DataTable data={tasks} columns={columns} />
		</Shell>
	);
}
