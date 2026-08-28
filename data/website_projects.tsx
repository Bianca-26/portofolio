export interface WebsiteProject {
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

export const websiteProjects: WebsiteProject[] = [
  {
    id: "website-1",
    title: "Prinmunti Landing Page",
    badge: "Official Launch",
    shortDescription:
      "A minimalist, modern landing page designed for Prinmunti, a mobile app for mountain enthusiasts and hiking communities.",
    fullDescription:
      "A minimalist, modern landing page designed for Prinmunti, a mobile app for mountain enthusiasts and hiking communities. The page is optimized for user acquisition, guiding visitors straight to an early-access waitlist.",
    tools: ["Figma"],
    challenge: {
      context:
        ["Hiking enthusiasts often use too many separate apps to plan a trip—one for maps, another for group chats, and social media to find hiking buddies. This project is a landing page for a mobile app that brings everything into one place: interactive maps, live tracking for safety, built-in chat, and an easy way to organize or join group hikes."],
      objective:
        ["Design a clean, straightforward and responsive landing page that clearly explains what the app does, builds trust around safety features, and encourages hikers to join the waitlist for early access."],
    },
    targetAudience:
      ["Hikers, mountain guides, outdoor lovers, and nature photographers looking for trail information, community support, and safety alerts."],
    solution:
      ["Built a clean, mountain-themed landing page that shows how the app works using phone mockups and simple illustrations. The page clearly walks users through the main features—like planning group hikes, live GPS tracking, and earning badges. Simple email signup boxes at the top and bottom make it easy for people to join the waitlist."],
    additionalNotes:
      ["You can check out the live website at prinmunti.ro. Keep in mind that some sections or details might look a bit different in production as the project continues to evolve."],
    desktopCoverImage: "/projects/landingpageprinmunti/desktop_cover.svg",
    mobileCoverImages: [
      "/projects/landingpageprinmunti/desktop_cover.svg"
    ],
    desktopGalleryImages: [
      "/projects/landingpageprinmunti/desktop_1.svg"
    ],
    mobileGalleryImages: [
      "/projects/landingpageprinmunti/mobile_1_prinmunti.svg",
      "/projects/landingpageprinmunti/mobile_2_prinmunti.svg",
    ],
  },
];