import React from "react";
import Link from "next/link";
import { SERVICES, ServiceItem } from "@/data/servicesData";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Bot, 
  Send, 
  MessageSquare, 
  Globe, 
  Zap, 
  Layers,
  ArrowUpRight 
} from "lucide-react";

export const metadata = {
  title: "Services & Capabilities — Imako Solution",
  description:
    "Explore Imako Solution's 11 core services across Website Development (Flagship), AI Automation, AI Agents, Chatbots, Machine Learning, and Growth Engineering.",
};

export default function ServicesPage() {
  const flagship = SERVICES.find((s) => s.isFlagship);
  const otherServices = SERVICES.filter((s) => !s.isFlagship);

  return (
    <main className="min-h-screen bg-[#070A0F] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-[#38BDF8] border border-sky-400/30">
            <Zap className="w-3.5 h-3.5" />
            <span>EXTENSIBLE ENTERPRISE CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            High-Performance AI &{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] via-white to-[#EF4444] bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            All services are engineered to eliminate operational friction and accelerate business revenue. Every project routes through an architectural consultation to match your exact goals.
          </p>
        </div>

        {/* 1. Flagship Lead Service: Featured Most Prominently */}
        {flagship && (
          <div className="glow-card rounded-3xl p-8 sm:p-14 border-2 border-sky-400/50 relative overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EF4444] text-white">
                  <span>★ FLAGSHIP & LEAD SERVICE</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {flagship.title}
                </h2>

                <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                  {flagship.detailedDescription}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold">
                    Key Technical Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {flagship.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(flagship.title)}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all"
                  >
                    <span>Request Web Architecture Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    <span>View 7 Live Case Studies</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0D131F] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Standard Lead Deliverables
                </span>
                <div className="space-y-2.5">
                  {flagship.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-200 flex items-center justify-between"
                    >
                      <span>{del}</span>
                      <span className="text-[#38BDF8] font-bold font-mono">Verified</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-400/20 text-xs text-gray-300">
                  💡 Zero public pricing — custom quotes prepared in under 24 hours based on your scope.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Remaining 10 Extensible Services Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl font-black text-white">Full Services Suite</h3>
              <p className="text-xs text-gray-400">
                Extensible architecture — modular systems built to grow as your needs expand.
              </p>
            </div>
            <span className="text-xs font-mono text-[#38BDF8] font-bold">11 Services Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="glow-card rounded-2xl p-7 border border-white/10 hover:border-sky-400/50 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/30 font-bold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Live Chatbot Demo Box */}
                  {service.hasLiveDemo && (
                    <div className="p-3.5 rounded-xl bg-[#090D15] border border-sky-400/30 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-white">
                        <span className="flex items-center gap-1.5 text-[#38BDF8]">
                          <Bot className="w-3.5 h-3.5" /> Live Demo Integration
                        </span>
                        <span className="text-emerald-400">Active</span>
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Test conversation right now with our Telegram bot or WhatsApp hotline:
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href="https://wa.me/251907173634?text=Hello%20Imako%20Solution,%20I%20want%20to%20test%20your%20chatbot%20demo."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1 rounded bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30 text-[10px] font-bold"
                        >
                          WhatsApp &rarr;
                        </a>
                        <a
                          href="https://t.me/imakosolution"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1 rounded bg-sky-500/15 text-[#38BDF8] hover:bg-sky-500/25 border border-sky-400/30 text-[10px] font-bold"
                        >
                          Telegram &rarr;
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Capabilities List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block font-semibold">
                      Capabilities:
                    </span>
                    {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Routing to Consultation / Quote Request (No pricing) */}
                <div className="pt-4 border-t border-white/5">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-[#38BDF8] hover:text-black border border-white/10 hover:border-[#38BDF8] transition-all group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  >
                    <span>Request Consultation & Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-[#0D131F] border border-white/10 p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Need a Multi-Service Custom Stack?</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Most modern businesses combine Website Development + AI Chatbots + Workflow Automation for a complete autonomous operating engine.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#EF4444]"
            >
              <span>Build Custom Solution Package</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
