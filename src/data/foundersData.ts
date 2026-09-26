export interface FounderItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  skills: string[];
  humanSide: {
    title: string;
    description: string;
    passionBadges: string[];
  };
  placeholderAvatar: string;
  galleryPlaceholders: {
    caption: string;
    aspectRatio: string;
  }[];
}

export const FOUNDERS: FounderItem[] = [
  {
    id: "imran-mohammedbeyan",
    name: "Imran Mohammedbeyan",
    role: "Co-Founder & AI Systems Lead",
    quote: "Building autonomous intelligence that transforms daily operational complexity into effortless software execution.",
    skills: [
      "AI Automation",
      "Agentic AI Consultancy",
      "AI & Machine Learning Engineer",
      "Python Programmer",
      "Website Developer",
      "Prompt Engineer",
      "System Designer"
    ],
    humanSide: {
      title: "The Thinker, Developer & Dawa Maker",
      description:
        "Beyond code and machine learning architectures, Imran is dedicated to Islamic dawa work — sharing knowledge, ethics, and moral clarity with youth and communities. His deep spiritual grounding inspires Imako Solution's commitment to honesty, ethical software design, and using technology as a force for societal uplift.",
      passionBadges: ["Islamic Dawa & Community Education", "Ethical AI Advocate", "Algorithmic Problem Solver"]
    },
    placeholderAvatar: "/images/founders/imran-placeholder.jpg",
    galleryPlaceholders: [
      { caption: "Imran presenting system architecture & AI workflows", aspectRatio: "4/3" },
      { caption: "Community gathering & Dawa educational initiatives", aspectRatio: "16/9" },
      { caption: "Late-night engineering & model prompt experimentation", aspectRatio: "4/3" }
    ]
  },
  {
    id: "mikiyas-alemu",
    name: "Mikiyas Alemu",
    role: "Co-Founder & Growth / Engineering Lead",
    quote: "Precision, discipline, and relentless execution — the same principles that earn a black belt scale modern businesses.",
    skills: [
      "AI Automation Specialist",
      "Video Editor",
      "Martial Artist (Taekwondo Black Belt)",
      "Web Developer",
      "Facebook Ad Specialist",
      "Social Media Manager",
      "Application Developer",
      "Data Analyst"
    ],
    humanSide: {
      title: "The Disciplined Athlete, Storyteller & Growth Engineer",
      description:
        "Mikiyas is a Taekwondo Black Belt whose martial arts discipline translates directly into technical rigor and focus. Pairing an elite athlete's perseverance with high-impact visual storytelling (video editing) and data-driven ad growth, Mikiyas ensures every system Imako builds doesn't just run smoothly, but actively drives tangible market expansion.",
      passionBadges: ["Taekwondo Black Belt Martial Artist", "Cinematic Video Editor", "Performance Ad Architect"]
    },
    placeholderAvatar: "/images/founders/mikiyas-placeholder.jpg",
    galleryPlaceholders: [
      { caption: "Mikiyas in martial arts training (Taekwondo Black Belt)", aspectRatio: "4/3" },
      { caption: "Video editing studio & creative direction setup", aspectRatio: "16/9" },
      { caption: "Application development & client data analytics review", aspectRatio: "4/3" }
    ]
  }
];
