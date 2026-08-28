export interface MobileProject {
  id: string;
  title: string;
  badge?: string;
  shortDescription: string;
  fullDescription?: string;
  tools?: string[];
  challenge?: {
    context: string[];
    objective: string[];
  };
  targetAudience?: string[];
  solution?: string[];
  additionalNotes?: string[];
  desktopCoverImage: string;
  mobileCoverImages?: string[];
  desktopGalleryImages?: string[];
  mobileGalleryImages?: string[];
}

export const mobileProjects: MobileProject[] = [
  {
    id: "urban-pulse",
    title: "UrbanPulse App",
    badge: "3rd Place at FIICODE",
    shortDescription:
      "A dark-mode community platform that connects city residents through emergency-priority feeds, local skill, tool sharing, and real-time safety alerts based on proximity.",
    fullDescription:
      "A dark-mode community platform that connects city residents through emergency-priority feeds, local skill, tool sharing, and real-time safety alerts based on proximity. Built with an intuitive, mobile-first interface to help neighbors solve everyday problems and respond to local emergencies in seconds.",
    tools: [
      "Figma", "Adobe Illustrator", "Icons8"
    ],
    challenge: {
      context:[
        "The City Council has observed a growing gap in urban resilience. While global social networks connect people across continents, neighbors living in the same apartment building often remain strangers. In times of minor crises — a power outage, a lost pet, or a broken water pipe — the most effective help is usually less than 100 meters away. To bridge this gap, the Council has commissioned UrbanPulse, a groundbreaking mobile and desktop-friendly application designed to foster hyper-local \"Micro-Communities\" and mutual aid."],
      objective:
        ["The platform's goal is to transform passive neighbours into an active, resilient support network by providing a shared feed for community posts, a quick way to report local issues, and an Admin Panel for easy moderation."],
    },
    targetAudience:
      ["The app is for city locals who receive customized alerts and assistance requests based on their proximity, as well as administrators overseeing city-wide reports."],
    solution:["I designed UrbanPulse with a clean dark-mode interface that brings together real-time alerts, mutual aid, and neighborhood safety in one place. The core experience centers on a categorized feed (Emergency, Skills, Lend, General) where urgent alerts take priority automatically. Users can list their skills and tools on their profile to get matched with nearby requests, explore available help on an interactive map, and communicate directly through private chat or a community group.", "To ensure long-term trust, the app includes a review system that rewards active helpers with a Trust Score and Verified Neighbor badge, alongside a pinned Safety Check-in banner during city emergencies. For community safety, administrators have access to a dedicated panel to review reports and duplicate posts, with a seamless toggle switch to jump between User and Admin modes."],
    additionalNotes: [
  "Awarded 3rd Place in the Web & Mobile track at FIICode 2026 with our 3-person team.",
  "As the sole UI/UX designer, I focused on making the interface clear and easy to navigate during emergencies, designing fast incident reporting flows and a consistent dark-mode experience across devices."
],
    desktopCoverImage: "/projects/urbanpulse/cover_urbanpulse.svg",
    mobileCoverImages: [
      "/projects/urbanpulse/cover_urbanpulse.svg"
    ],
    desktopGalleryImages: [
      "/projects/urbanpulse/first_urbanpulse.svg",
      "/projects/urbanpulse/2-1.svg",
      "/projects/urbanpulse/2.svg",
      "/projects/urbanpulse/3.svg",
      "/projects/urbanpulse/4.svg",
      "/projects/urbanpulse/5.svg",
      "/projects/urbanpulse/6.svg",
    ],
    mobileGalleryImages: [
      "/projects/urbanpulse/first_urbanpulse.svg",
      "/projects/urbanpulse/2-1.svg",
      "/projects/urbanpulse/2.svg",
      "/projects/urbanpulse/3.svg",
      "/projects/urbanpulse/4.svg",
      "/projects/urbanpulse/5.svg",
      "/projects/urbanpulse/6.svg",
    ],
  },
];