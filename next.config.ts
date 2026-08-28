import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // <-- Doar această linie
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
