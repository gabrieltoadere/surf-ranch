import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/surf-ranch",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
