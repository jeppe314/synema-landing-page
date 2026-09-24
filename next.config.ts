import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        search: "?auto=format&fit=crop&w=1600&q=75",
      },
    ],
  },
};

export default nextConfig;
