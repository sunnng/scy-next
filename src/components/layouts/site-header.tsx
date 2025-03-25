import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/layouts/mode-toggle";

import Link from "next/link";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
			<div className="container flex h-14 items-center">
				<Link href="/" className="mr-2 flex items-center md:mr-6 md:space-x-2">
					<div className="flex aspect-square size-6 items-center justify-center bg-primary text-secondary">
						<Icons.Dragon className="size-4" aria-hidden="true" />
					</div>

					<span className="hidden whitespace-nowrap font-bold md:inline-block">公会讨伐战记录</span>
				</Link>

				<nav className="flex flex-1 items-center md:justify-end">
					<ModeToggle />
				</nav>
			</div>
		</header>
	);
}
