"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { TRPCProvider } from "@/trpc/client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import type * as React from "react";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider {...props}>
			<TooltipProvider>
				<NuqsAdapter>
					<TRPCProvider>{children}</TRPCProvider>
				</NuqsAdapter>
			</TooltipProvider>
		</NextThemesProvider>
	);
}
