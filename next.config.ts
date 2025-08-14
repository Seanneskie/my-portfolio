import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true }, // required for static export
  basePath: isProd ? "/my-portfolio" : "",
  assetPrefix: isProd ? "/my-portfolio/" : "",
  trailingSlash: true, // helps direct-load nested routes on GitHub Pages
};

export default nextConfig;
