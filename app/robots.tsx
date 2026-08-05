import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Regulă dedicată robotului Google pentru Imagini
        userAgent: 'Googlebot-Image',
        disallow: '/', // Blochează accesul robotului de imagini la toate resursele
      },
    ],
  };
}