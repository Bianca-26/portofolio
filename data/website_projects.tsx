export interface ProjectColor {
  name: string;
  hex: string;
  role?: string;
}

export interface ProjectTypography {
  name: string;
  type: string;
  weights?: string[];
  sampleText?: string;
}

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
  designSystem?: {
    colors?: ProjectColor[];
    typography?: ProjectTypography[];
    gridImage?: string;
    gridDescription?: string;
  };
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
      context: [
        "Specialty coffee shops often rely solely on social media or basic review pages, lacking a dedicated web space that reflects their brand atmosphere. This project is a landing page for Roast, a coffee brand that brings its offerings together: single-origin brews, signature drinks, café locations, and essential details for visitors looking for quiet, laptop-friendly spaces."
      ],
      objective: [
        "Design a clean, modern, and responsive landing page that presents the brand's identity, showcases the menu and café spaces, and encourages visitors to discover nearby locations and join the community."
      ]
    },
    targetAudience: [
      "Coffee enthusiasts, remote workers and students looking for quiet, laptop-friendly workspaces, and everyday café visitors interested in specialty brews and comfortable places to meet or relax."
    ],
    solution: [
      "Created a dark-themed, warm landing page that highlights Roast's premium coffee experience through structured visual sections. The layout organizes the signature drink lineup with customer ratings, introduces physical café locations across major cities, and integrates an FAQ section to answer practical visitor questions about workspace amenities and pet policies. A clean newsletter signup at the bottom makes it easy for coffee lovers to join the community for exclusive roasts and brewing guides."
    ],
    designSystem: {
      colors: [
        {
          name: "Pure Black",
          hex: "#000000",
          role: "Base Canvas / Background"
        },
        {
          name: "Burnt Terracotta",
          hex: "#7C301B",
          role: "Primary Accent / Main Brand Color"
        },
        {
          name: "Soft Cream",
          hex: "#F2DAB2",
          role: "Secondary Accent Color"
        },
        {
          name: "Dark Charcoal",
          hex: "#1E1E1E",
          role: "Elevated Surfaces / Cards"
        }
      ],
      typography: [
        {
          name: "Julius Sans One",
          type: "Logo, Navbar & CTA Buttons",
          weights: ["Medium (Stroke)", "Semibold (Stroke)"],
          sampleText: "Stay in the loop of exceptional coffee"
        },
        {
          name: "Libre Baskerville",
          type: "Main Headings",
          weights: ["Semibold", "Bold"],
          sampleText: "A Classic Taste, Made for Your Day."
        },
        {
          name: "Baskervville",
          type: "Body Copy & Testimonials",
          weights: ["Medium"],
          sampleText: "Crafted to make every coffee moment feel truly special."
        }
      ],
      gridImage: "/projects/coffee/project-grid.png" },
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
    ]
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
      context: [
        "Hiking enthusiasts often use too many separate apps to plan a trip—one for maps, another for group chats, and social media to find hiking buddies. This project is a landing page for a mobile app that brings everything into one place: interactive maps, live tracking for safety, built-in chat, and an easy way to organize or join group hikes."
      ],
      objective: [
        "Design a clean, straightforward and responsive landing page that clearly explains what the app does, builds trust around safety features, and encourages hikers to join the waitlist for early access."
      ]
    },
    targetAudience: [
      "Hikers, mountain guides, outdoor lovers, and nature photographers looking for trail information, community support, and safety alerts."
    ],
    solution: [
      "Built a clean, mountain-themed landing page that shows how the app works using phone mockups and simple illustrations. The page clearly walks users through the main features—like planning group hikes, live GPS tracking, and earning badges. Simple email signup boxes at the top and bottom make it easy for people to join the waitlist."
    ],
    designSystem: {
      colors: [
        {
          name: "Deep Teal",
          hex: "#215E61",
          role: "Primary brand identity & rich backdrop gradient base"
        },
        {
          name: "Tangerine",
          hex: "#FE7F2D",
          role: "Hero illustrations & visual accents"
        },
        {
          name: "Pale Buttercream",
          hex: "#FFF8CF",
          role: "Section surface contrast & light accents"
        },
        {
          name: "Glacier White",
          hex: "#FFFFFF",
          role: "Base canvas & high-contrast text"
        }
      ],
      typography: [
        {
          name: "Inter",
          type: "Primary UI & Global Content System",
          weights: ["Bold", "Regular"],
          sampleText: "Explore with confidence. We've got your back."
        }
      ],
      gridImage: "/projects/landingpageprinmunti/project-grid.png"},
    additionalNotes: [
      "You can check out the live website at prinmunti.ro. Keep in mind that some sections or details might look a bit different in production as the project continues to evolve."
    ],
    desktopCoverImage: "/projects/landingpageprinmunti/cover_comp.webp",
    mobileCoverImages: [
      "/projects/landingpageprinmunti/cover_comp.webp"
    ],
    desktopGalleryImages: [
      "/projects/landingpageprinmunti/desktop_full_comp.webp",
      "/projects/landingpageprinmunti/desktop_single_comp.webp"
    ],
    mobileGalleryImages: [
      "/projects/landingpageprinmunti/desktop_single_comp.webp",
      "/projects/landingpageprinmunti/mobile_single_comp.webp"
    ]
  }
];