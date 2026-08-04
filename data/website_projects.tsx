export interface WebsiteProject {
  id: string;
  title: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  desktopCoverImage: string;
  mobileCoverImages: string[];
  galleryImages?: string[];
  desktopGalleryImages?: string[];
  mobileGalleryImages?: string[];
}

export const websiteProjects: WebsiteProject[] = [
  {
    id: "website-1",
    title: "E-Commerce Platform",
    badge: "Featured Website",
    shortDescription: "Magazin online modern optimizat pentru conversie, SEO și viteză de încărcare rapidă.",
    fullDescription: "Magazin online modern optimizat pentru conversie, SEO și viteză de încărcare rapidă. Include integrare completă cu Stripe, panou de administrare pentru stocuri, modul de recenzii și căutare avansată cu filtrare instantanee.",
    desktopCoverImage: "/images/website1-desktop.png",
    mobileCoverImages: [
      "/images/website1-mobile-1.png",
      "/images/website1-mobile-2.png",
    ],
  },
];