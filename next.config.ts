import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "engineering.fb.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
