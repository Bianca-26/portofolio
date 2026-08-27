import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  images: {
    // Permite formatele moderne avif și webp pentru imagini normale
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    // Permite afișarea corectă și rapidă a SVG-urilor
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  experimental: {
    scrollRestoration: true,
  },

  // Adaugă header-ul HTTP care interzice Google Images să indexeze imaginile
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noimageindex',
          },
        ],
      },
    ];
  },
};



export default nextConfig;
