import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Users, 
  ArrowUpRight,
  TrendingUp,
  MessageSquareQuote,
  CheckCircle2,
  Layers,
  FolderGit2,
  MailCheck,
  Send,
  ExternalLink
} from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SERVICES } from "@/data/servicesData";
import { FOUNDERS } from "@/data/foundersData";

export default function HomePage() {
  const flagship = SERVICES.find((s) => s.isFlagship);

  // 5 Main Core Destination Pages for the Entrance Hub
  const pagePortals = [
    {
      title: "Services & Capabilities",
      subtitle: "11 Extensible Services",
      description: "Flagship Next.js websites, autonomous AI agents, chatbots, and enterprise automations.",
      href: "/services",
      badge: "Flagship Lead",
      badgeColor: "bg-[#0B3D91] text-white",
      icon: Cpu,
      accentBorder: "border-[#0B3D91]",
      buttonText: "Explore Services",
      gradient: "from-[#0B3D91] to-[#3BA7F2]"
    },
    {
      title: "Client Portfolio",
      subtitle: "Real Production Systems",
      description: "Verified case studies: Bisrat Hotel, Nisir Football Academy, Dr. Abdi Dental, Aalam Media.",
      href: "/portfolio",
      badge: "Live Projects",
      badgeColor: "bg-[#7FE7D6] text-[#0B3D91]",
      icon: FolderGit2,
      accentBorder: "border-[#7FE7D6]",
      buttonText: "View Case Studies",
      gradient: "from-[#3BA7F2] to-[#7FE7D6]"
    },
    {
      title: "Co-Founders & Story",
      subtitle: "Imran & Mikiyas",
      description: "Meet the engineering minds and human disciplines behind Imako Solution.",
      href: "/about",
      badge: "Leadership",
      badgeColor: "bg-[#3BA7F2] text-white",
      icon: Users,
      accentBorder: "border-[#3BA7F2]",
      buttonText: "Read Founder Bios",
      gradient: "from-[#0B3D91] to-[#7FE7D6]"
    },
    {
      title: "Our Team",
      subtitle: "Specialized Builders",
      description: "System architects, AI workflow engineers, full-stack builders, and creative growth leads.",
      href: "/team",
      badge: "The Squad",
      badgeColor: "bg-[#E8F6FF] text-[#0B3D91] border border-[#3BA7F2]/40",
      icon: Layers,
      accentBorder: "border-[#3BA7F2]",
      buttonText: "Meet the Team",
      gradient: "from-[#3BA7F2] to-[#0B3D91]"
    },
    {
      title: "Direct Quote & Contact",
      subtitle: "Inquiries <24h",
      description: "Submit project scope directly to founders or connect via WhatsApp & Telegram.",
      href: "/contact",
      badge: "Fast Routing",
      badgeColor: "bg-[#7FE7D6] text-[#0B3D91]",
      icon: MailCheck,
      accentBorder: "border-[#7FE7D6]",
      buttonText: "Get Project Quote",
      gradient: "from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6]"
    }
  ];

  return (
    <main className="min-h-screen bg-[#E8F6FF] text-[#0B3D91]">
      {/* 1. Minimal Header & Identity with On-Load Reveals */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 border-b-2 border-[#CBE5FC] bg-[#E8F6FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="animate-hero-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0B3D91] animate-ping" />
            <span>IMAKO SOLUTION</span>
            <span>•</span>
            <span className="uppercase">AI Native Firm</span>
          </div>

          <h1 className="animate-hero-title text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B3D91] leading-tight max-w-4xl mx-auto">
            Architecting the Future of{" "}
            <span className="bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] bg-clip-text text-transparent">
              Autonomous Systems
            </span>
          </h1>

          <p className="animate-hero-subtitle text-sm sm:text-base text-[#0B3D91]/80 max-w-2xl mx-auto font-medium">
            AI-powered solutions for real-world enterprise friction. Select a destination below to explore our services, review live client systems, meet the founders, or receive a direct quote.
          </p>

          {/* Main Hero Call-to-Action Buttons */}
          <div className="animate-hero-cta pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#0B3D91] via-[#0B3D91] to-[#3BA7F2] hover:brightness-105 shadow-md shadow-[#3BA7F2]/25 hover-cinematic"
            >
              <span>Get a Direct Project Quote</span>
              <ArrowRight className="w-4 h-4 text-[#7FE7D6]" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0B3D91] bg-white border-2 border-[#CBE5FC] hover:border-[#3BA7F2] shadow-xs hover-cinematic"
            >
              <span>Explore 11 Services</span>
              <ArrowUpRight className="w-4 h-4 text-[#3BA7F2]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE PAGE PORTAL HUB: Pages Appear First as Primary Cards with Staggered Scroll Animations */}
      <section className="py-12 md:py-16 bg-white border-b-2 border-[#CBE5FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-[#CBE5FC]">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3D91] tracking-tight">
                Where would you like to go?
              </h2>
              <p className="text-xs text-[#0B3D91]/70 font-mono">
                Click any portal below to jump straight to that section.
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono font-bold text-[#3BA7F2]">
              5 Core Portals
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagePortals.map((portal, idx) => {
              const IconComponent = portal.icon;
              return (
                <RevealOnScroll key={portal.href} direction="up" delayMs={80 + idx * 100} durationMs={800}>
                  <Link
                    href={portal.href}
                    className={`group rounded-3xl p-6 sm:p-7 bg-[#E8F6FF] border-2 border-[#CBE5FC] hover:${portal.accentBorder} shadow-xs hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 flex flex-col justify-between h-full space-y-5`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#CBE5FC] group-hover:border-[#7FE7D6] flex items-center justify-center text-[#0B3D91] group-hover:bg-[#7FE7D6] transition-colors shadow-2xs">
                          <IconComponent className="w-6 h-6 text-[#0B3D91]" />
                        </div>
                        <span className={`text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full ${portal.badgeColor}`}>
                          {portal.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-[#0B3D91] group-hover:text-[#3BA7F2] transition-colors">
                          {portal.title}
                        </h3>
                        <p className="text-xs font-mono text-[#3BA7F2] font-bold">
                          {portal.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-[#0B3D91]/80 leading-relaxed">
                        {portal.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#CBE5FC]/80 flex items-center justify-between text-xs font-black text-[#0B3D91] group-hover:text-[#3BA7F2] transition-colors">
                      <span>{portal.buttonText}</span>
                      <ArrowRight className="w-4 h-4 text-[#3BA7F2] group-hover:translate-x-1.5 transition-transform duration-200" />
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Flagship Lead Service: Website Development (Minimal High-Impact) */}
      {flagship && (
        <section className="py-12 md:py-16 bg-[#E8F6FF] border-b-2 border-[#CBE5FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll direction="up">
              <div className="rounded-3xl p-6 sm:p-10 border-2 border-[#3BA7F2] bg-white shadow-lg space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#7FE7D6] text-[#0B3D91] font-bold inline-block">
                      ★ LEAD FLAGSHIP SERVICE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0B3D91]">
                      Website Development & Digital Commerce
                    </h2>
                  </div>
                  <Link
                    href="/contact?service=Website%20Development"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#0B3D91] to-[#3BA7F2] hover:brightness-105 shadow-md transition-all self-start sm:self-auto"
                  >
                    <span>Request Web Quote</span>
                    <ArrowRight className="w-4 h-4 text-[#7FE7D6]" />
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-[#0B3D91]/80 leading-relaxed max-w-3xl">
                  {flagship.shortDescription}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {[
                    "Next.js & React Full-Stack",
                    "Sub-Second Page Speeds",
                    "Telebirr & CBE Payment Sync",
                    "Autonomous Lead Capture"
                  ].map((item, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-[#E8F6FF] border border-[#CBE5FC] text-xs font-bold text-[#0B3D91] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7FE7D6] flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* 4. Co-Founders Fast Snapshot (Minimal & Authentic) */}
      <section className="py-12 md:py-16 bg-white border-b-2 border-[#CBE5FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b-2 border-[#CBE5FC] pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3D91] tracking-tight">
                Meet the Leadership
              </h2>
              <p className="text-xs text-[#0B3D91]/70 font-mono">
                Co-Founders in alphabetical order: Imran & Mikiyas
              </p>
            </div>
            <Link
              href="/about"
              className="text-xs font-black text-[#3BA7F2] hover:text-[#0B3D91] transition-colors"
            >
              Full Story & Gallery &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {FOUNDERS.map((founder, fIdx) => (
              <RevealOnScroll key={founder.id} direction="up" delayMs={100 + fIdx * 150} durationMs={800}>
                <div
                  className="p-5 sm:p-6 rounded-3xl bg-[#E8F6FF] border-2 border-[#CBE5FC] hover:border-[#7FE7D6] shadow-xs hover-cinematic flex flex-col sm:flex-row items-center gap-5 h-full"
                >
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white border-2 border-[#3BA7F2] flex-shrink-0 shadow-xs">
                    <Image
                      src={founder.avatar}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1.5 text-center sm:text-left flex-1 min-w-0">
                    <h3 className="text-lg font-black text-[#0B3D91]">{founder.name}</h3>
                    <p className="text-xs font-mono text-[#3BA7F2] font-bold">{founder.role}</p>
                    <p className="text-xs text-[#0B3D91]/75 line-clamp-2">
                      {founder.humanSide.title}
                    </p>
                    <div className="pt-1">
                      <a
                        href={founder.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-[#0B3D91] hover:text-[#3BA7F2] inline-flex items-center gap-1"
                      >
                        <span>WA: {founder.phoneDisplay} &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Minimal Direct CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-[#0B3D91] via-[#0B3D91] to-[#3BA7F2] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Build Your Next Solution?
          </h2>
          <p className="text-xs sm:text-sm text-[#E8F6FF]/90 max-w-md mx-auto">
            Direct response within 24 hours. Connect with our founders on WhatsApp, Telegram, or email.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Get a Direct Project Quote</span>
              <ArrowRight className="w-4 h-4 text-[#0B3D91]" />
            </Link>
            <a
              href="https://www.instagram.com/imakosolution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Follow @imakosolution</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
