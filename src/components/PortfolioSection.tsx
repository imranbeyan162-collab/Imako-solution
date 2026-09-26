"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, ArrowUpRight, Globe, Layers } from "lucide-react";
import { PORTFOLIO_ITEMS, CATEGORIES, PortfolioItem } from "@/data/portfolioData";

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems = selectedCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-[#070A0F] scroll-mt-20">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-[#38BDF8] border border-sky-400/30">
            <Layers className="w-3.5 h-3.5" />
            <span>PROVEN PRODUCTION TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Case Studies & Live Client Deployments
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Explore live production web applications, automation engines, and conversion-focused systems developed and scaled by Imako Solution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-[#38BDF8] text-black shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "bg-[#0D131F] text-gray-400 hover:text-white border border-white/5 hover:border-sky-400/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#0D131F]/90 border border-white/10 overflow-hidden transition-all duration-300 hover:border-sky-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] hover:-translate-y-1.5"
            >
              {/* Card Image Banner with Hover Zoom */}
              <div className="relative w-full h-56 overflow-hidden bg-[#121A2A]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-[#0D131F]/40 to-transparent" />

                {/* Floating category tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#070A0F]/85 backdrop-blur-md text-[#38BDF8] border border-sky-400/30 shadow-md">
                    {item.categoryTag}
                  </span>
                </div>

                {/* Live Indicator Pill in Red & White */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-red-500/20 backdrop-blur-md text-[#EF4444] border border-red-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors flex items-center gap-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Impact Overview Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.impactOverview}
                  </p>
                </div>

                {/* Highlights / Metrics Tags */}
                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium font-mono text-gray-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5"
                      >
                        ⚡ {metric}
                      </span>
                    ))}
                  </div>

                  {/* Direct Button linking to Live Site */}
                  <div className="pt-2">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#0284C7] hover:to-[#EF4444] border border-white/10 hover:border-transparent transition-all group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Launch Live Site</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#0D131F] border border-white/10 text-xs sm:text-sm text-gray-300">
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span>
              Need a high-converting web application or custom AI workflow for your organization?
            </span>
            <a
              href="https://wa.me/251907173634?text=Hello%20Imako%20Solution,%20I'd%20like%20to%20commission%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38BDF8] hover:text-[#EF4444] font-bold transition-colors"
            >
              Start Your Project &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
