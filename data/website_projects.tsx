export interface WebsiteProject {
  id: string;
  title: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  desktopCoverImage: string;
  mobileCoverImages: string[];
  desktopGalleryImages?: string[];
  mobileGalleryImages?: string[];
}

export const websiteProjects: WebsiteProject[] = [
  {
    id: "website-1",
    title: "PrinMunți Landing Page",
    badge: "",
    shortDescription: "A minimalist, modern landing page designed for PrinMunți, a mobile app for mountain enthusiasts and hiking communities. The page is optimized for user acquisitio ... ",
    fullDescription: "A minimalist, modern landing page designed for PrinMunți, a mobile app for mountain enthusiasts and hiking communities. The page is optimized for user acquisition, guiding visitors straight to an early-access waitlist. ",
    desktopCoverImage: "/projects/landingpageprinmunti/cover.svg",

    mobileCoverImages: [
      "/projects/landingpageprinmunti/mobile_1.svg",
      "/projects/landingpageprinmunti/mobile_2.svg",
      "/projects/landingpageprinmunti/mobile_3.svg"],

    desktopGalleryImages: [
      "/projects/landingpageprinmunti/cover.svg",
      "/projects/landingpageprinmunti/image1.svg"],
    mobileGalleryImages: [
      "/projects/landingpageprinmunti/mobile_1.svg",
      "/projects/landingpageprinmunti/mobile_2.svg",
      "/projects/landingpageprinmunti/mobile_3.svg",
      "/projects/landingpageprinmunti/mobile_4.svg",
      "/projects/landingpageprinmunti/mobile_5.svg",
      "/projects/landingpageprinmunti/mobile_6.svg"
    ]
  },
];