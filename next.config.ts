import { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable type checking during builds
  },
};

export default nextConfig;