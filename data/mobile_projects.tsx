export interface MobileProject {
  id: string;
  title: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  desktopCoverImage: string;
  mobileCoverImages: string[];
  galleryImages?: string[];
}

export const mobileProjects: MobileProject[] = [
  {
    id: "urban-pulse",
    title: "UrbanPulse App",
    badge: "3rd Place at FIICODE",
    shortDescription: "A fully responsive mobile and desktop-friendly platform designed to empower urban communities and streamline mutual support between neighbours.",
    fullDescription: "A fully responsive mobile and desktop-friendly platform designed to empower urban communities and streamline mutual support between neighbours. The system is powered by smart AI integration for automated insights and includes a robust Admin Panel for comprehensive platform management. The interface leverages a sleek, high-contrast Dark Mode aesthetic, meticulously optimized for a seamless user experience across all devices.",
    desktopCoverImage: "/projects/urbanpulse/cover_desktop.svg",
    mobileCoverImages: [
      "/projects/urbanpulse/cover1.svg",
      "/projects/urbanpulse/cover2.svg",
      "/projects/urbanpulse/cover3.svg",
    ]
  }
];