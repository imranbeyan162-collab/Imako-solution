export interface ServiceItem {
  id: string;
  title: string;
  category: "Flagship" | "AI & Intelligence" | "Engineering" | "Creative & Growth";
  isFlagship?: boolean;
  shortDescription: string;
  detailedDescription: string;
  capabilities: string[];
  deliverables: string[];
  badge?: string;
  hasLiveDemo?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-development",
    title: "Website Development",
    category: "Flagship",
    isFlagship: true,
    badge: "Flagship & Lead Service",
    shortDescription:
      "Enterprise-grade, high-conversion web applications engineered for sub-second speeds, flawless responsive fidelity, and autonomous client engagement funnels.",
    detailedDescription:
      "As our lead service, we engineer digital platforms that serve as the commercial engine of modern enterprises. Built with Next.js, React, and cutting-edge web architecture, our sites deliver lightning-fast load times, seamless third-party API integrations, and conversion-optimized user journeys.",
    capabilities: [
      "Custom Next.js & React Full-Stack Architecture",
      "Sub-Second Performance & SEO Infrastructure",
      "Payment Gateway Integrations (Telebirr, CBE, Stripe)",
      "Headless CMS & Universal Content Control",
      "Conversion Rate Optimization (CRO) UX/UI"
    ],
    deliverables: [
      "Production-ready Next.js Web App",
      "Mobile-First Responsive Layout",
      "Analytics & Event Tracking Suite",
      "Automated Deployment Pipeline"
    ]
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    category: "AI & Intelligence",
    shortDescription:
      "Autonomous workflow orchestration that connects disjointed enterprise software, eliminates manual backlogs, and accelerates core operational throughput.",
    detailedDescription:
      "We design self-healing, multi-platform automation pipelines that handle data entry, document processing, invoice reconciliation, and cross-tool synchronizations 24/7 without human fatigue.",
    capabilities: [
      "Cross-Platform Workflow Pipelines",
      "Intelligent Document Processing (IDP)",
      "Automated Lead & Order Triage",
      "Zero-Latency API Orchestration"
    ],
    deliverables: [
      "Custom Automation Workflows",
      "Real-Time Error Handling & Audit Logs",
      "Staff Hand-off Documentation"
    ]
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    category: "AI & Intelligence",
    shortDescription:
      "Goal-driven autonomous agents capable of multi-step problem solving, tool use, research synthesis, and executive decision support.",
    detailedDescription:
      "Moving beyond simple prompts, our agentic AI architectures can plan, execute API calls, access private vector knowledge bases, and iteratively verify their own work before delivering completed tasks.",
    capabilities: [
      "Agentic Goal Decomposition & Planning",
      "Tool Calling & Database Interfacing",
      "Autonomous Research & Synthesis",
      "Multi-Agent Collaborative Networks"
    ],
    deliverables: [
      "Autonomous Agent System",
      "Safe Sandbox Execution Environment",
      "Telemetry & Observability Dashboard"
    ]
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots & Conversational Engines",
    category: "AI & Intelligence",
    hasLiveDemo: true,
    badge: "Connected to WhatsApp & Telegram",
    shortDescription:
      "Intelligent, context-aware conversational bots deployed directly onto WhatsApp, Telegram, and websites for 24/7 client triage and automated booking.",
    detailedDescription:
      "Turn inbound messaging channels into automated revenue drivers. Our bots understand multilingual nuance, recall previous conversation history, and execute direct database bookings and support escalations.",
    capabilities: [
      "WhatsApp Business API Integration",
      "Telegram Bot Ecosystem Deployment",
      "Multilingual Natural Language Processing",
      "Live Database Lookup & Booking Scheduling"
    ],
    deliverables: [
      "Live WhatsApp/Telegram Bot Deployment",
      "Web Chat Widget Embed",
      "CRM Lead Auto-Sync Pipeline"
    ]
  },
  {
    id: "ai-consultancy",
    title: "AI Consultancy & Strategy",
    category: "AI & Intelligence",
    shortDescription:
      "Executive roadmaps, technical feasibility audits, and vendor-neutral architectural guidance to accelerate high-ROI AI adoption.",
    detailedDescription:
      "We partner with founders and business leaders to identify where artificial intelligence yields immediate competitive advantages, calculating exact time-saved models and designing safe adoption roadmaps.",
    capabilities: [
      "Enterprise AI Readiness Audit",
      "Workflow ROI & Cost-Benefit Modeling",
      "Data Governance & Privacy Frameworks",
      "Custom Architecture Blueprinting"
    ],
    deliverables: [
      "Comprehensive AI Strategy Blueprint",
      "Implementation Timeline & Milestones",
      "Executive Briefing & Team Workshops"
    ]
  },
  {
    id: "machine-learning-solutions",
    title: "Machine Learning Solutions",
    category: "AI & Intelligence",
    shortDescription:
      "Bespoke predictive algorithms, classification pipelines, and intelligent recommendation systems tailored to your proprietary datasets.",
    detailedDescription:
      "Transform historical business records into forward-looking operational intelligence. We construct machine learning pipelines for demand forecasting, anomaly detection, and automated client segmentation.",
    capabilities: [
      "Predictive Analytics & Trend Modeling",
      "Anomaly & Fraud Detection Algorithms",
      "Custom Classification & Clustering",
      "High-Throughput Inference Pipelines"
    ],
    deliverables: [
      "Trained Production ML Model",
      "Inference API Endpoint",
      "Model Monitoring & Drift Detection"
    ]
  },
  {
    id: "application-development",
    title: "Application Development",
    category: "Engineering",
    shortDescription:
      "Robust, scalable cloud and cross-platform applications crafted with clean code, secure backend architectures, and high-concurrency databases.",
    detailedDescription:
      "From bespoke internal enterprise tools to customer-facing SaaS platforms, we architect dependable software built to handle high transactional volumes with strict data security.",
    capabilities: [
      "Modern Web Applications (React, Next.js)",
      "Secure REST & GraphQL APIs",
      "PostgreSQL, SQLite, and Cloud Databases",
      "Authentication & Role-Based Access Control (RBAC)"
    ],
    deliverables: [
      "Full Application Source Code",
      "Cloud Infrastructure Setup",
      "API Documentation & Schema"
    ]
  },
  {
    id: "systems-design",
    title: "Systems Design & Architecture",
    category: "Engineering",
    shortDescription:
      "High-availability system topologies, distributed database modeling, and fault-tolerant infrastructure built to scale reliably.",
    detailedDescription:
      "Prevent technical debt before it happens. We design resilient system architectures with modular decoupling, automated disaster recovery, and ultra-low latency data caching.",
    capabilities: [
      "Distributed Microservices & Serverless Topologies",
      "Database Partitioning & High Availability",
      "Caching Strategies (Redis, Edge CDN)",
      "System Security & Threat Modeling"
    ],
    deliverables: [
      "Technical Architecture Specification",
      "Infrastructure-as-Code Configuration",
      "Capacity Planning & Scalability Guide"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Brand Systems",
    category: "Creative & Growth",
    shortDescription:
      "Distinctive digital brand identities, visual systems, and bespoke marketing collateral designed to communicate technical excellence and trust.",
    detailedDescription:
      "Modern AI companies demand an aesthetic that commands credibility. We produce cohesive brand style guides, UI iconography, social assets, and presentation decks that stand out in crowded markets.",
    capabilities: [
      "Comprehensive Brand Identity & Style Guides",
      "UI/UX Design Systems & Component Libraries",
      "High-Impact Marketing & Pitch Deck Visuals",
      "Digital Media & Campaign Assets"
    ],
    deliverables: [
      "Vector Logo & Brand Asset Suite",
      "Figma UI Design Kit",
      "Social Media Brand Kit"
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing & Motion Production",
    category: "Creative & Growth",
    shortDescription:
      "Cinematic product demos, high-retention social media reels, and commercial video storytelling tailored for high audience engagement.",
    detailedDescription:
      "Capture attention in seconds. Our video editing workflows combine dynamic motion graphics, sound design, and color grading to tell compelling stories that convert viewers into loyal clients.",
    capabilities: [
      "Cinematic Product Walkthroughs & Demos",
      "High-Retention Reels, Shorts & TikToks",
      "Motion Graphics & Dynamic Kinetic Typography",
      "Professional Audio Mastering & Sound Design"
    ],
    deliverables: [
      "Final Mastered 4K Video Deliverables",
      "Platform-Optimized Formats (16:9, 9:16)",
      "Modular Motion Graphic Templates"
    ]
  },
  {
    id: "facebook-ads-marketing",
    title: "Facebook Ads & Social Media Marketing",
    category: "Creative & Growth",
    shortDescription:
      "Data-backed performance acquisition campaigns, algorithmic ad scaling, and full-funnel social media growth strategies with verifiable ROI.",
    detailedDescription:
      "Maximize return on ad spend (ROAS) through aggressive creative testing, precise demographic targeting, and continuous conversion funnel optimization across Meta platforms.",
    capabilities: [
      "Meta Ads Campaign Setup & Management",
      "High-Converting Ad Copy & Creative Direction",
      "Pixel Tracking & Conversion API (CAPI) Sync",
      "Organic Social Media Growth & Community Management"
    ],
    deliverables: [
      "Active Multi-Tier Ad Campaigns",
      "Weekly Performance & ROAS Reports",
      "Creative Testing Matrix"
    ]
  }
];
