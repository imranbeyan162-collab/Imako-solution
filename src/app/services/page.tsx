import React from "react";
import Link from "next/link";
import { SERVICES, ServiceItem } from "@/data/servicesData";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Bot, 
  Zap, 
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
    <main className="min-h-screen bg-[#E8F6FF] text-[#0B3D91] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <RevealOnScroll direction="down" delayMs={50}>
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#0B3D91]" />
              <span>EXTENSIBLE ENTERPRISE CAPABILITIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B3D91] leading-tight">
              High-Performance AI &{" "}
              <span className="bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] bg-clip-text text-transparent">
                Software Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#0B3D91]/80 leading-relaxed max-w-2xl mx-auto">
              All services are engineered to eliminate operational friction and accelerate business revenue. Every project routes through an architectural consultation to match your exact goals.
            </p>
          </div>
        </RevealOnScroll>

        {/* 1. Flagship Lead Service: Featured Most Prominently */}
        {flagship && (
          <RevealOnScroll direction="up" durationMs={800}>
            <div className="rounded-3xl p-8 sm:p-14 border-2 border-[#3BA7F2] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-xs">
                    <span>★ FLAGSHIP & LEAD SERVICE</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-black text-[#0B3D91] tracking-tight group-hover:text-[#3BA7F2] transition-colors duration-300">
                    {flagship.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#0B3D91]/80 leading-relaxed">
                    {flagship.detailedDescription}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#3BA7F2] font-black">
                      Key Technical Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {flagship.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#0B3D91] hover:text-[#3BA7F2] transition-colors">
                          <CheckCircle className="w-4 h-4 text-[#7FE7D6] flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/contact?service=${encodeURIComponent(flagship.title)}`}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-black text-white bg-gradient-to-r from-[#0B3D91] to-[#3BA7F2] hover:brightness-105 shadow-md shadow-[#3BA7F2]/25 transition-all duration-300 transform hover:-translate-y-1 group/btn"
                    >
                      <span>Request Web Architecture Quote</span>
                      <ArrowRight className="w-4 h-4 text-[#7FE7D6] group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#0B3D91] bg-[#7FE7D6]/35 hover:bg-[#7FE7D6] border border-[#7FE7D6] shadow-xs transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span>View 7 Live Case Studies</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#E8F6FF] rounded-2xl p-6 sm:p-8 border-2 border-[#CBE5FC] space-y-5 hover:shadow-md transition-all duration-300">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0B3D91] font-black">
                    Standard Lead Deliverables
                  </span>
                  <div className="space-y-2.5">
                    {flagship.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-white border border-[#CBE5FC] text-xs text-[#0B3D91] font-semibold flex items-center justify-between shadow-2xs hover:border-[#7FE7D6] transition-colors"
                      >
                        <span>{del}</span>
                        <span className="text-[#3BA7F2] font-black font-mono">Verified</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#7FE7D6]/35 border border-[#7FE7D6] text-xs text-[#0B3D91] font-bold">
                    💡 Zero public pricing — custom quotes prepared in under 24 hours based on your scope.
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* 2. Remaining 10 Extensible Services Grid */}
        <div className="space-y-8">
          <RevealOnScroll direction="up" delayMs={50}>
            <div className="flex items-center justify-between border-b-2 border-[#CBE5FC] pb-4">
              <div>
                <h3 className="text-2xl font-black text-[#0B3D91]">Full Services Suite</h3>
                <p className="text-xs text-[#0B3D91]/70">
                  Extensible architecture — modular systems built to grow as your needs expand.
                </p>
              </div>
              <span className="text-xs font-mono text-[#3BA7F2] font-black">11 Services Available</span>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service: ServiceItem, idx: number) => (
              <RevealOnScroll key={service.id} direction="up" delayMs={80 + (idx % 3) * 100}>
                <div
                  className="rounded-3xl p-7 bg-white border-2 border-[#CBE5FC] shadow-sm hover:border-[#7FE7D6] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between space-y-6 group h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#E8F6FF] text-[#0B3D91] border border-[#3BA7F2]/40 font-bold group-hover:bg-[#7FE7D6]/30 transition-colors">
                        {service.category}
                      </span>
                      {service.badge && (
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#7FE7D6] text-[#0B3D91] font-black">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-black text-[#0B3D91] group-hover:text-[#3BA7F2] transition-colors duration-200">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#0B3D91]/80 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Live Chatbot Demo Box */}
                    {service.hasLiveDemo && (
                      <div className="p-3.5 rounded-2xl bg-[#E8F6FF] border border-[#3BA7F2]/40 space-y-2 group-hover:border-[#7FE7D6] transition-colors">
                        <div className="flex items-center justify-between text-[11px] font-bold text-[#0B3D91]">
                          <span className="flex items-center gap-1.5 text-[#0B3D91]">
                            <Bot className="w-3.5 h-3.5 text-[#3BA7F2]" /> Live Demo Integration
                          </span>
                          <span className="text-[#0B3D91] font-black bg-[#7FE7D6] px-1.5 rounded">Active</span>
                        </div>
                        <p className="text-[11px] text-[#0B3D91]/75">
                          Test conversation right now with our Telegram bot or WhatsApp hotline:
                        </p>
                        <div className="flex items-center gap-2 pt-1">
                          <a
                            href="https://wa.me/251912251113?text=Hello%20Imako%20Solution,%20I%20want%20to%20test%20your%20chatbot%20demo."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-1.5 rounded-xl bg-[#7FE7D6] text-[#0B3D91] hover:brightness-105 border border-[#0B3D91]/20 text-[10px] font-bold transition-all hover:scale-102"
                          >
                            WhatsApp &rarr;
                          </a>
                          <a
                            href="https://t.me/imakosolution"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-1.5 rounded-xl bg-[#3BA7F2] text-white hover:brightness-105 text-[10px] font-bold transition-all hover:scale-102"
                          >
                            Telegram &rarr;
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Capabilities List */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] font-mono text-[#3BA7F2] uppercase tracking-wider block font-bold">
                        Capabilities:
                      </span>
                      {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-[#0B3D91] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7FE7D6]" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Routing to Consultation / Quote Request */}
                  <div className="pt-4 border-t border-[#CBE5FC]">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#0B3D91] bg-[#E8F6FF] hover:bg-[#0B3D91] hover:text-white border border-[#3BA7F2]/40 hover:border-[#0B3D91] transition-all duration-200 group-hover:shadow-xs"
                    >
                      <span>Request Consultation & Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Bottom Banner in Gradient */}
        <RevealOnScroll direction="up">
          <div className="rounded-3xl bg-gradient-to-r from-[#0B3D91] via-[#0B3D91] to-[#3BA7F2] text-white p-8 sm:p-12 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-black text-white">Need a Multi-Service Custom Stack?</h3>
            <p className="text-xs sm:text-sm text-[#E8F6FF]/90 max-w-xl mx-auto">
              Most modern businesses combine Website Development + AI Chatbots + Workflow Automation for a complete autonomous operating engine.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] shadow-lg transition-all transform hover:-translate-y-1 group"
              >
                <span>Build Custom Solution Package</span>
                <ArrowRight className="w-4 h-4 text-[#0B3D91] group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
