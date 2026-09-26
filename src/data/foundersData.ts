export interface FounderItem {
  id: string;
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  quote: string;
  skills: string[];
  humanSide: {
    title: string;
    description: string;
    passionBadges: string[];
  };
  avatar: string;
  gallery: {
    src: string;
    caption: string;
    aspectRatio: string;
  }[];
}

export const FOUNDERS: FounderItem[] = [
  {
    id: "imran-mohammedbeyan",
    name: "Imran Mohammedbeyan",
    role: "Co-Founder & AI Systems Lead",
    phone: "+251912251113",
    phoneDisplay: "+251 912 251 113",
    whatsappUrl: "https://wa.me/251912251113",
    quote: "Building autonomous intelligence that transforms daily operational complexity into effortless software execution.",
    skills: [
      "Autonomous AI Agents",
      "AI Automation Pipelines",
      "AI & Machine Learning Engineer",
      "Python Programmer",
      "Website Developer",
      "Prompt Engineer",
      "System Designer"
    ],
    humanSide: {
      title: "The Thinker, Developer & Dawa Educator",
      description:
        "Beyond code and machine learning architectures, Imran is dedicated to Islamic dawa work — sharing knowledge, ethics, and moral clarity with youth and communities. His deep spiritual grounding inspires Imako Solution's commitment to honesty, ethical software design, and using technology as a force for societal uplift.",
      passionBadges: ["Islamic Dawa & Community Education", "Ethical AI Systems", "Algorithmic Problem Solver"]
    },
    avatar: "/images/founder-imran-2.png",
    gallery: [
      {
        src: "/images/founder-imran-1.png",
        caption: "Imran Mohammedbeyan — AI Systems Lead & Problem Solver",
        aspectRatio: "9/16"
      },
      {
        src: "/images/founder-imran-2.png",
        caption: "Imran Mohammedbeyan — Technical Architecture & Machine Learning",
        aspectRatio: "9/16"
      },
      {
        src: "/images/founder-imran-3.png",
        caption: "Imran delivering community Dawa education & moral knowledge",
        aspectRatio: "9/16"
      }
    ]
  },
  {
    id: "mikiyas-alemu",
    name: "Mikiyas Alemu",
    role: "Co-Founder & Growth / Engineering Lead",
    phone: "+251907173634",
    phoneDisplay: "+251 907 173 634",
    whatsappUrl: "https://wa.me/251907173634",
    quote: "Precision, discipline, and relentless execution — the same principles that earn a black belt scale modern businesses.",
    skills: [
      "AI Automation Specialist",
      "Cinematic Video Editor",
      "Taekwondo Black Belt Martial Artist",
      "Web Developer",
      "Facebook Ad Specialist",
      "Social Media Growth Manager",
      "Application Developer",
      "Data Analyst"
    ],
    humanSide: {
      title: "The Disciplined Athlete, Storyteller & Growth Engineer",
      description:
        "Mikiyas is a Taekwondo Black Belt whose martial arts discipline translates directly into technical rigor and focus. Pairing an elite athlete's perseverance with high-impact visual storytelling (video editing) and data-driven ad growth, Mikiyas ensures every system Imako builds doesn't just run smoothly, but actively drives tangible market expansion.",
      passionBadges: ["Taekwondo Black Belt Martial Artist", "Cinematic Video Editor", "Performance Ad Architect"]
    },
    avatar: "/images/founder-mikiyas-1.jpg",
    gallery: [
      {
        src: "/images/founder-mikiyas-1.jpg",
        caption: "Mikiyas Alemu — Co-Founder, Growth & Engineering Lead",
        aspectRatio: "9/16"
      },
      {
        src: "/images/founder-mikiyas-2.png",
        caption: "Mikiyas Alemu — Creative direction, discipline & athletic perseverance",
        aspectRatio: "9/16"
      }
    ]
  }
];
