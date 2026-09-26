export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryTag: string;
  image: string;
  liveUrl: string;
  impactOverview: string;
  metrics: string[];
  features: string[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "bisrat-hotel",
    title: "Bisrat Hotel",
    category: "Hospitality",
    categoryTag: "Luxury Hospitality & Dining",
    image: "/images/portfolio-bisrat-hotel.png",
    liveUrl: "https://bisrathotel.com",
    impactOverview:
      "Engineered premier digital hospitality platform for Adama's landmark hotel, highlighting luxury suites, authentic Ethiopian & international dining, 24/7 power backup assurance, and frictionless direct reservation funnels.",
    metrics: ["+180% Direct Bookings", "24/7 Power Backup Feature", "Adama, Ethiopia"],
    features: ["Direct Reservations", "Dining Showcase", "Multi-amenity Highlights", "Live Inquiry Routing"]
  },
  {
    id: "nisir-adama",
    title: "Nisir Adama Football Academy",
    category: "Sports & EdTech",
    categoryTag: "Sports Tech & Youth Academy",
    image: "/images/portfolio-nisir-adama-football-academy.png",
    liveUrl: "https://nisir-adama.vercel.app",
    impactOverview:
      "Constructed a high-performance multilingual academy platform (Afaan Oromoo, Amharic, English) featuring dynamic multi-child online registration, digital Telebirr/CBE fee verification, and universal content CMS for coaching staff.",
    metrics: ["200+ Active Athletes", "100% Digital Payment Audit", "3 Languages Supported"],
    features: ["Online Registration", "Telebirr & CBE Verification", "Universal Media CMS", "PDF Confirmation Slips"]
  },
  {
    id: "dr-abdi-dental",
    title: "Dr. Abdi Specialty Dental Clinic",
    category: "Healthcare",
    categoryTag: "Healthcare & Dental Speciality",
    image: "/images/portfolio-dr-abdi-speciality-dental.png",
    liveUrl: "https://dr-abdispeciality.vercel.app",
    impactOverview:
      "Built a modern clinical patient portal streamlining specialized dental care, automated pre-consultation intake, transparent treatment pricing, and verified specialist credentials to maximize patient trust.",
    metrics: ["65% Reduction in Intake Friction", "5-Star Patient Rating", "Automated Scheduling"],
    features: ["Online Consultation Booking", "Treatment Catalog", "Doctor Credentials", "Emergency Hotline Routing"]
  },
  {
    id: "hailu-dental",
    title: "Hailu Specialty Dental Clinic",
    category: "Healthcare",
    categoryTag: "Healthcare & Orthodontics",
    image: "/images/portfolio-hailu-dental-no1.png",
    liveUrl: "https://hailuspecialitydental.vercel.app",
    impactOverview:
      "Developed a patient-converting digital medical presence highlighting specialized orthodontic smile transformations, comprehensive dental wellness procedures, and immediate direct-dial hotline connectivity.",
    metrics: ["+140% Monthly Appointments", "Direct WhatsApp Triage", "Top Ranked Local Care"],
    features: ["Smile Gallery", "Interactive Dental FAQs", "Appointment Request", "Instant Directions"]
  },
  {
    id: "aalam-media",
    title: "Aalam Media",
    category: "Media",
    categoryTag: "Creative Media & Digital Production",
    image: "/images/portfolio-aalam-media.png",
    liveUrl: "https://aalam-media.vercel.app",
    impactOverview:
      "Delivered a striking, high-impact multimedia portal for digital creators and journalists, showcasing documentary productions, news features, and client media production offerings with ultra-responsive playback.",
    metrics: ["100K+ Media Impressions", "Sub-second Page Speeds", "Multilingual Delivery"],
    features: ["Cinematic Video Showcase", "Editorial Layouts", "Production Inquiries", "Dynamic Media Feed"]
  },
  {
    id: "eyana-hotel",
    title: "Eyana Hotel (Canopy)",
    category: "Hospitality",
    categoryTag: "Hospitality & Canopy Leisure",
    image: "/images/portfolio-eyana-hotel.jpg",
    liveUrl: "https://eyana-hotel.vercel.app",
    impactOverview:
      "Designed an immersive digital showcase for Eyana Hotel Canopy, spotlighting premium suites, event venue spaces, and bespoke hospitality services with instantaneous WhatsApp and direct concierge communication.",
    metrics: ["3.4x Booking Inquiries", "100% Mobile Optimized", "Instant Concierge Sync"],
    features: ["Suite Visual Tour", "Event Venue Booking", "Dynamic Dining Menu", "Direct Concierge Hotline"]
  },
  {
    id: "husen-marketing",
    title: "Husen Online Marketing",
    category: "Marketing",
    categoryTag: "Performance Marketing & Growth",
    image: "/images/portfolio-husen-online-marketing.jpg",
    liveUrl: "https://husen-online-marketing.vercel.app",
    impactOverview:
      "Engineered an ROI-centric performance growth portal featuring interactive marketing audit intake, conversion tracking case studies, and enterprise lead capture infrastructure.",
    metrics: ["4.2x Client Average ROI", "Automated Lead Capture", "Data-Driven Funnels"],
    features: ["Interactive Growth Audit", "Ad Spend ROI Calculator", "Lead Capture Engine", "Case Study Walkthroughs"]
  }
];

export const CATEGORIES = ["All", "Hospitality", "Healthcare", "Sports & EdTech", "Media", "Marketing"];
