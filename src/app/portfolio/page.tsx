import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/portfolioData";
import { Globe, ArrowUpRight, CheckCircle, MessageSquareQuote, Layers } from "lucide-react";

export const metadata = {
  title: "Client Portfolio & Case Studies — Imako Solution",
  description:
    "Real, completed production deployments by Imako Solution across hospitality, healthcare, sports tech, creative media, and performance growth.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-red-100 text-[#DC2626] border border-red-200">
            <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>REAL COMPLETED CLIENT DEPLOYMENTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Case Studies & Live{" "}
            <span className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] bg-clip-text text-transparent">
              Production Systems
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Every deployment represents a solved bottleneck — from hotel direct reservation systems to sports academy management CMS and clinical dental portals.
          </p>
        </div>

        {/* Stats / Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] transition-colors">
            <div className="text-3xl font-black text-[#0284C7] font-mono">7+</div>
            <p className="text-xs text-slate-800 font-bold mt-1">Live Client Deployments</p>
            <p className="text-[11px] text-slate-500 mt-0.5">100% production uptime</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#EF4444] transition-colors">
            <div className="text-3xl font-black text-[#EF4444] font-mono">100%</div>
            <p className="text-xs text-slate-800 font-bold mt-1">Client Retention Rate</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Dedicated SLA support</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] transition-colors">
            <div className="text-3xl font-black text-[#0284C7] font-mono">10,000+</div>
            <p className="text-xs text-slate-800 font-bold mt-1">Repetitive Hours Saved</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Reclaimed administrative focus</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-400 transition-colors">
            <div className="text-3xl font-black text-slate-800 font-mono">&lt;650ms</div>
            <p className="text-xs text-slate-800 font-bold mt-1">Average Page Load</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Edge cached Next.js delivery</p>
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {PORTFOLIO_ITEMS.map((item: PortfolioItem, index: number) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:border-[#0284C7] hover:shadow-xl transition-all p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image / Screenshot in Clean Frame */}
                <div className="lg:col-span-6 relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain sm:object-cover group-hover:scale-102 transition-transform duration-500 bg-slate-50"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/95 text-[#0284C7] border border-slate-200 shadow-xs">
                      {item.categoryTag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE IN PRODUCTION
                    </span>
                  </div>
                </div>

                {/* Case Study Details & Outcome */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-slate-400 font-bold">Case Study #{index + 1}</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.impactOverview}
                  </p>

                  {/* Impact Outcomes */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                      Measurable Outcomes & Highlights
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.metrics.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-3 py-1 rounded-lg text-xs font-bold font-mono bg-sky-50 text-[#0284C7] border border-sky-200"
                        >
                          ⚡ {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outbound Launch Button */}
                  <div className="pt-3">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#EF4444] hover:brightness-105 shadow-md shadow-sky-500/20 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Launch Live Production Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section Placeholder */}
        <section className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>PARTNER ENDORSEMENTS</span>
          </div>

          <h2 className="text-3xl font-black text-slate-900">Client Testimonials</h2>

          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-50 border border-dashed border-slate-300 space-y-3">
            <p className="text-sm text-slate-600 italic leading-relaxed">
              &ldquo;Formal executive quotes and case-study interviews from our recent clients (Bisrat Hotel, Nisir Adama Football Academy, Eyana Hotel, Dr. Abdi Specialty Dental Clinic) are being finalized for publication.&rdquo;
            </p>
            <span className="text-xs font-mono text-[#0284C7] block font-bold">
              [Testimonials Placeholder — Client quotes to follow later]
            </span>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] hover:brightness-105 shadow-md shadow-sky-500/25"
          >
            <span>Commission Your Next Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
