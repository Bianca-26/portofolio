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
    id: "website-3",
    title: "Fluently - Language Tutor Platform",
    badge: "",
    shortDescription:
      "A modern web platform designed for Fluently, a service connecting students with native speakers for 1-on-1 language tutoring.",
    fullDescription:
      "A modern web platform designed for Fluently, a service connecting students with native speakers for 1-on-1 language tutoring. The project encompasses the entire user journey, starting from the landing page and detailed tutor profiles—complete with certifications and an intro video—to the fully integrated flow for scheduling preferences and lesson confirmation",
    tools: ["Figma", "Canva", "Iconify"],
    challenge: {
      context: [
        "1-on-1 language tutoring platforms often suffer from cluttered interfaces, fragmented tutor discovery, and administrative friction. Traditional booking flows feel transactional and overwhelming—leaving students confused about conflicting timezones, session packages, and technical class logistics."
      ],
      objective: [
        "The goal is to increase trial lesson bookings with the 50% off offer, cut tutor search time to under 3 minutes, and prevent timezone booking mistakes with a simple 3-step checkout. At the same time, it lowers beginner anxiety through video-first tutor profiles and gives students direct Google Meet access right after booking."
      ]
    },
    targetAudience: [
      "The target audience includes busy workers who need quick lessons before or after their jobs, and young students on a budget who want friendly teachers to help them practice speaking without feeling nervous."
    ],
    solution: [
      "A simple web platform that makes booking a lesson fast and stress-free in three clear steps. It includes a detailed filter page to quickly find the right teacher by budget, schedule, and goals. Students can watch short video intros, pick time slots on a calendar that automatically adjusts to their local timezone, and get an instant Google Meet link right after payment.",
    "To build trust before anyone commits money, tutor profiles feature short introduction videos, clear student reviews, and verified badges. This removes the awkward guesswork for beginners and lets learners quickly get a feel for a teacher's accent, vibe, and teaching style before their first conversation.",
  "At the final step, the confirmation screen provides a clean lesson card with the direct Google Meet link, local date and time (e.g GMT+3), and quick buttons to message the tutor or go to the dashboard."    ],
    designSystem: {
      colors: [
        {
          name: "Pure Black",
          hex: "#EFEEFF",
          role: "Base Canvas / Background"
        },
        {
          name: "Burnt Terracotta",
          hex: "#4F46E5",
          role: "Primary Accent / Main Brand Color"
        },
        {
          name: "Soft Cream",
          hex: "#1E1F24",
          role: "Secondary Accent Color"
        },
        {
          name: "Dark Charcoal",
          hex: "#5A5D66",
          role: "Elevated Surfaces / Cards"
        }
      ],
      typography: [
        {
          name: "Outfit",
          type: "Logo & Headings",
          weights: ["Bold", "Semibold"],
          sampleText: "Speak any language with confidence."
        },
        {
          name: "DM Sans",
          type: "Body copy & UI elements",
          weights: ["Regular", "Semibold", "Bold"],
          sampleText: "Free learning materials & notes."
        }
      ],
      gridImage: "/projects/tutor/grid.png" },
    desktopCoverImage: "/projects/tutor/cover_compressed.webp",
    mobileCoverImages: [
      "/projects/tutor/cover_compressed.webp"
    ],
    desktopGalleryImages: [
      "/projects/tutor/Main-page_compressed.webp",
      "/projects/tutor/Find-tutors2.webp",
      "/projects/tutor/Tutor-profile_compressed.webp",
      "/projects/tutor/Booking - date_compressed.webp",
      "/projects/tutor/Booking - payement_compressed.webp",
      "/projects/tutor/Booking - confirmation.png"
    ],
    mobileGalleryImages: [
      "/projects/tutor/Main-page_compressed.webp",
      "/projects/tutor/Find-tutors2.webp",
      "/projects/tutor/Tutor-profile_compressed.webp",
      "/projects/tutor/Booking - date_compressed.webp",
      "/projects/tutor/Booking - payement_compressed.webp",
      "/projects/tutor/Booking - confirmation.png"
    ]
  },
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