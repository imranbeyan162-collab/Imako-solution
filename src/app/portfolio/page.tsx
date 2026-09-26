import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/portfolioData";
import { Globe, ArrowUpRight, CheckCircle, Sparkles, MessageSquareQuote, Layers, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Client Portfolio & Case Studies — Imako Solution",
  description:
    "Real, completed production deployments by Imako Solution across hospitality, healthcare, sports tech, creative media, and performance growth.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
            <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>REAL COMPLETED CLIENT DEPLOYMENTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Case Studies & Live{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] via-white to-[#EF4444] bg-clip-text text-transparent">
              Production Systems
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Every deployment represents a solved bottleneck — from hotel direct reservation systems to sports academy management CMS and clinical dental portals.
          </p>
        </div>

        {/* Stats / Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-colors">
            <div className="text-3xl font-black text-[#38BDF8] font-mono">7+</div>
            <p className="text-xs text-gray-300 font-bold mt-1">Live Client Deployments</p>
            <p className="text-[11px] text-gray-500 mt-0.5">100% production uptime</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D131F] border border-white/10 hover:border-red-400/40 transition-colors">
            <div className="text-3xl font-black text-[#EF4444] font-mono">100%</div>
            <p className="text-xs text-gray-300 font-bold mt-1">Client Retention Rate</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Dedicated SLA support</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-colors">
            <div className="text-3xl font-black text-[#38BDF8] font-mono">10,000+</div>
            <p className="text-xs text-gray-300 font-bold mt-1">Repetitive Hours Saved</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Reclaimed administrative focus</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0D131F] border border-white/10 hover:border-white/20 transition-colors">
            <div className="text-3xl font-black text-white font-mono">&lt;650ms</div>
            <p className="text-xs text-gray-300 font-bold mt-1">Average Page Load</p>
            <p className="text-[11px] text-gray-500 mt-0.5">Edge cached Next.js delivery</p>
          </div>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {PORTFOLIO_ITEMS.map((item: PortfolioItem, index: number) => (
            <div
              key={item.id}
              className="glow-card rounded-3xl bg-[#0D131F]/90 border border-white/10 overflow-hidden hover:border-sky-400/50 transition-all p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image / Screenshot */}
                <div className="lg:col-span-6 relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#121A2A] border border-white/10 group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#070A0F]/85 backdrop-blur-md text-[#38BDF8] border border-sky-400/30">
                      {item.categoryTag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-red-500/20 text-[#EF4444] border border-red-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
                      LIVE IN PRODUCTION
                    </span>
                  </div>
                </div>

                {/* Case Study Details & Outcome */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-gray-500">Case Study #{index + 1}</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white hover:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.impactOverview}
                  </p>

                  {/* Impact Outcomes */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-bold block">
                      Measurable Outcomes & Highlights
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.metrics.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-3 py-1 rounded-lg text-xs font-bold font-mono bg-white/[0.04] text-white border border-white/10"
                        >
                          ⚡ {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-gray-300">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0" />
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
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#EF4444] hover:brightness-110 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all"
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
        <section className="rounded-3xl bg-[#090E18] border border-white/10 p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-gray-300 border border-white/10">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>PARTNER ENDORSEMENTS</span>
          </div>

          <h2 className="text-3xl font-black text-white">Client Testimonials</h2>

          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-[#0D131F] border border-dashed border-white/15 space-y-3">
            <p className="text-sm text-gray-300 italic leading-relaxed">
              &ldquo;Formal executive quotes and case-study interviews from our recent clients (Bisrat Hotel, Nisir Adama Football Academy, Eyana Hotel, Dr. Abdi Specialty Dental Clinic) are being finalized for publication.&rdquo;
            </p>
            <span className="text-xs font-mono text-[#38BDF8] block font-bold">
              [Testimonials Placeholder — Client quotes to follow later]
            </span>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 shadow-lg"
          >
            <span>Commission Your Next Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
