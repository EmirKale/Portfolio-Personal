import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Asset filenames include legacy names; keep optimization simple/robust.
    unoptimized: true,
  },
};

export default nextConfig;
