import React from "react";
import Link from "next/link";
import { SERVICES, ServiceItem } from "@/data/servicesData";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Bot, 
  Send, 
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-50 text-[#0284C7] border border-sky-200">
            <Zap className="w-3.5 h-3.5" />
            <span>EXTENSIBLE ENTERPRISE CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            High-Performance AI &{" "}
            <span className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            All services are engineered to eliminate operational friction and accelerate business revenue. Every project routes through an architectural consultation to match your exact goals.
          </p>
        </div>

        {/* 1. Flagship Lead Service: Featured Most Prominently */}
        {flagship && (
          <div className="rounded-3xl p-8 sm:p-14 border-2 border-sky-300 bg-white shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EF4444] text-white">
                  <span>★ FLAGSHIP & LEAD SERVICE</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                  {flagship.title}
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {flagship.detailedDescription}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold">
                    Key Technical Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {flagship.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(flagship.title)}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] hover:brightness-105 shadow-md shadow-sky-500/20 transition-all"
                  >
                    <span>Request Web Architecture Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs"
                  >
                    <span>View 7 Live Case Studies</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold">
                  Standard Lead Deliverables
                </span>
                <div className="space-y-2.5">
                  {flagship.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-medium flex items-center justify-between shadow-2xs"
                    >
                      <span>{del}</span>
                      <span className="text-[#0284C7] font-bold font-mono">Verified</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-slate-700 font-medium">
                  💡 Zero public pricing — custom quotes prepared in under 24 hours based on your scope.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Remaining 10 Extensible Services Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900">Full Services Suite</h3>
              <p className="text-xs text-slate-500">
                Extensible architecture — modular systems built to grow as your needs expand.
              </p>
            </div>
            <span className="text-xs font-mono text-[#0284C7] font-bold">11 Services Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="rounded-2xl p-7 bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] hover:shadow-md transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-100 text-[#DC2626] border border-red-200 font-bold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Live Chatbot Demo Box */}
                  {service.hasLiveDemo && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-sky-200 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-900">
                        <span className="flex items-center gap-1.5 text-[#0284C7]">
                          <Bot className="w-3.5 h-3.5" /> Live Demo Integration
                        </span>
                        <span className="text-emerald-600">Active</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Test conversation right now with our Telegram bot or WhatsApp hotline:
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href="https://wa.me/251907173634?text=Hello%20Imako%20Solution,%20I%20want%20to%20test%20your%20chatbot%20demo."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-[10px] font-bold"
                        >
                          WhatsApp &rarr;
                        </a>
                        <a
                          href="https://t.me/imakosolution"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-1 rounded bg-sky-50 text-[#0284C7] hover:bg-sky-100 border border-sky-200 text-[10px] font-bold"
                        >
                          Telegram &rarr;
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Capabilities List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      Capabilities:
                    </span>
                    {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Routing to Consultation / Quote Request */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 hover:bg-[#0284C7] hover:text-white border border-slate-200 hover:border-[#0284C7] transition-all"
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
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Need a Multi-Service Custom Stack?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Most modern businesses combine Website Development + AI Chatbots + Workflow Automation for a complete autonomous operating engine.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#EF4444] shadow-md shadow-sky-500/20"
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
