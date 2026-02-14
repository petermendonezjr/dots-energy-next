import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dots-energy-next",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
