import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  // PostCSS / Tailwind CSS pipeline active
};

export default nextConfig;
