import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    // 禁用 Next.js 内置的 ESLint
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
