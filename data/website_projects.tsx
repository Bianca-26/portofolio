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
    id: "website-2",
    title: "Specialty Coffee Landing Page",
    badge: "",
    shortDescription:
  "A modern, dark-themed landing page designed for Roast, a specialty coffee brand and roastery featuring single-origin beans, physical cafe spaces, and signature drinks.",
fullDescription:
  "A modern, dark-themed landing page designed for Roast, a specialty coffee brand and roastery featuring single-origin beans, physical cafe spaces, and signature drinks. The page serves as the official presentation platform to showcase the brand's story, customer feedback, and location details across multiple cities.",
    tools: ["Figma", "Canva"],
    challenge: {
      context:
        ["Specialty coffee shops often rely solely on social media or basic review pages, lacking a dedicated web space that reflects their brand atmosphere. This project is a landing page for Roast, a coffee brand that brings its offerings together: single-origin brews, signature drinks, café locations, and essential details for visitors looking for quiet, laptop-friendly spaces."],
      objective:
        ["Design a clean, modern, and responsive landing page that presents the brand's identity, showcases the menu and café spaces, and encourages visitors to discover nearby locations and join the community."],
    },
    targetAudience:
      ["Coffee enthusiasts, remote workers and students looking for quiet, laptop-friendly workspaces, and everyday café visitors interested in specialty brews and comfortable places to meet or relax."],
    solution:
      ["Created a dark-themed, warm landing page that highlights Roast's premium coffee experience through structured visual sections. The layout organizes the signature drink lineup with customer ratings, introduces physical café locations across major cities, and integrates an FAQ section to answer practical visitor questions about workspace amenities and pet policies. A clean newsletter signup at the bottom makes it easy for coffee lovers to join the community for exclusive roasts and brewing guides."],
    desktopCoverImage: "/projects/coffee/desktop_cover_compressed.webp",
    mobileCoverImages: [
      "/projects/coffee/desktop_cover_compressed.webp"
    ],
    desktopGalleryImages: [
      "/projects/coffee/desktop_1_compressed.webp",
      "/projects/coffee/Desktop_compressed.webp"
    ],
    mobileGalleryImages: [
      "/projects/coffee/Desktop_compressed.webp",
      "/projects/coffee/Mobile_compressed.webp"
    ],
  },
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
    desktopCoverImage: "/projects/landingpageprinmunti/desktop_cover_compressed_2.webp",
    mobileCoverImages: [
      "/projects/landingpageprinmunti/desktop_cover_compressed_2.webp"
    ],
    desktopGalleryImages: [
      "/projects/landingpageprinmunti/desktop_1_compressed_2.webp",
      "/projects/landingpageprinmunti/mobile_1_single_compressed.webp"

    ],
    mobileGalleryImages: [
      "/projects/landingpageprinmunti/mobile_1_single_compressed.webp",
      "/projects/landingpageprinmunti/mobile_2_prinmunti_single_compressed.webp",
    ],
  }

];