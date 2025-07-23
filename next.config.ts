import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  images: {
    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: false,
  
  // Server external packages
  serverExternalPackages: [],
  
  // Experimental features
  experimental: {
    // Optimize JavaScript bundles
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    
    // Optimize CSS
    optimizeCss: true,
  },
  
  // Configure webpack for better performance
  webpack: (config) => {
    // Optimize SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
};

export default nextConfig;
