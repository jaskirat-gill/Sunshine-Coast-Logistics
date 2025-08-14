import type { NextConfig } from "next";

// Get WordPress hostname from environment variable, fallback to development URL
const WORDPRESS_HOST = process.env.NEXT_PUBLIC_WORDPRESS_URL?.replace(/^https?:\/\//, '') ?? '44.237.126.68';

const nextConfig: NextConfig = {
  /* Performance optimizations */
  images: {
    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: WORDPRESS_HOST,
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      // Fallback for development/staging (remove in production if not needed)
      {
        protocol: 'https',
        hostname: WORDPRESS_HOST,
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
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
  
  // Compress responses
  compress: true,
  
  // Generate static pages when possible
  output: 'standalone',
  
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
