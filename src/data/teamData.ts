export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Engineering" | "AI & Systems" | "Design & Media" | "Client Success";
  bio: string;
  skills: string[];
  isPlaceholder?: boolean;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Senior AI Systems Engineer",
    role: "Autonomous Agent & LLM Pipelines",
    department: "AI & Systems",
    bio: "Specializing in vector database integrations, agentic feedback loops, and high-throughput inference optimization.",
    skills: ["Python", "FastAPI", "LangChain", "Vector DBs"],
    isPlaceholder: true
  },
  {
    id: "team-2",
    name: "Lead Frontend Architect",
    role: "Next.js & Performance Engineering",
    department: "Engineering",
    bio: "Obsessed with sub-second paint times, fluid micro-animations, and accessible component architectures.",
    skills: ["Next.js 16", "TypeScript", "Tailwind CSS", "React 19"],
    isPlaceholder: true
  },
  {
    id: "team-3",
    name: "Visual & Motion Designer",
    role: "Brand Identity & Motion Graphics",
    department: "Design & Media",
    bio: "Translating technical abstraction into high-converting visual systems, cinematic reels, and memorable UI.",
    skills: ["After Effects", "Figma", "Premiere Pro", "3D Rendering"],
    isPlaceholder: true
  },
  {
    id: "team-4",
    name: "Performance Growth Strategist",
    role: "Paid Acquisition & Conversion Funnels",
    department: "Client Success",
    bio: "Designing data-backed ad scaling workflows, pixel audit pipelines, and client retention infrastructure.",
    skills: ["Meta Ads", "Google Analytics 4", "Conversion Tracking", "CRO"],
    isPlaceholder: true
  },
  {
    id: "team-5",
    name: "Cloud & DevOps Specialist",
    role: "Reliability & Infrastructure Scaling",
    department: "Engineering",
    bio: "Ensuring 99.99% uptime, zero-downtime CI/CD deployments, and bulletproof cloud security configurations.",
    skills: ["Docker", "Vercel Enterprise", "PostgreSQL", "Cloudflare"],
    isPlaceholder: true
  },
  {
    id: "team-6",
    name: "Client Solutions Specialist",
    role: "Implementation & Workflow Triage",
    department: "Client Success",
    bio: "Bridging client operational pain points with custom Imako automation workflows and dedicated onboarding.",
    skills: ["Workflow Auditing", "Client Onboarding", "CRM Integration"],
    isPlaceholder: true
  }
];

export const DEPARTMENTS = ["All", "Engineering", "AI & Systems", "Design & Media", "Client Success"];
