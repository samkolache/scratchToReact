import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // If your repository is not the root domain (e.g., username.github.io), set the basePath:
  basePath: '/scratchToReact',
  images: {
    unoptimized: true,  // GitHub Pages doesn’t support optimized images
  },
};

export default nextConfig;
