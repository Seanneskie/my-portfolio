import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React's strict mode for catching issues during development
  reactStrictMode: true,

  // Emit a standalone server build for deployment
  output: "standalone",
};

export default nextConfig;
