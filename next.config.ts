import { fileURLToPath } from "node:url";
import createJiti from "jiti";
import type { NextConfig } from "next";

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti@^1 we can import .ts files :)
jiti("./src/env/server.ts");
jiti("./src/env/client.ts");

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	eslint: {
		// 禁用 Next.js 内置的 ESLint
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
