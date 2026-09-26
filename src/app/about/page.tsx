import React from "react";
import Link from "next/link";
import { FOUNDERS } from "@/data/foundersData";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Sparkles, ArrowRight, Heart, Camera, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About & Co-Founders — Imako Solution",
  description:
    "Learn about Imako Solution, founded July 27, 2026. Meet co-founders Imran Mohammedbeyan & Mikiyas Alemu, our elevated mission, and the human passions driving our technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. Header & Company Overview */}
        <RevealOnScroll direction="down" delayMs={50}>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-red-100 text-[#DC2626] border border-red-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>FOUNDED JULY 27, 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Architecting the Future of{" "}
              <span className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] bg-clip-text text-transparent">
                Autonomous Work
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Imako Solution is an AI and technology engineering firm dedicated to building software that solves high-friction real-world problems. We replace administrative fatigue with elegant algorithmic automation.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2. Elevated Mission Statement Card */}
        <RevealOnScroll direction="scale" durationMs={800}>
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-500 text-center space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-bold">
              The Imako Philosophy
            </span>
            <blockquote className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              &ldquo;We engineer high-velocity intelligence and autonomous systems that liberate human capital, compress operational latency, and multiply enterprise throughput.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Instead of simply stating &ldquo;we save time and cost&rdquo;, we treat time as an enterprise&apos;s most non-renewable asset. Every line of code we write is calibrated to unlock creative human focus.
            </p>
          </div>
        </RevealOnScroll>

        {/* 3. Meet the Founders Section (Alphabetical Order) */}
        <section className="space-y-16">
          <RevealOnScroll direction="up" delayMs={50}>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-[#0284C7] border border-sky-200">
                <span>LEADERSHIP IN ALPHABETICAL ORDER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Meet the Co-Founders
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Beyond resumes and tech stacks — discover the core disciplines, values, and human stories that shape our company.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-16">
            {FOUNDERS.map((founder, index) => (
              <RevealOnScroll key={founder.id} direction="up" delayMs={index * 150} durationMs={800}>
                <div
                  className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] hover:shadow-2xl transition-all duration-500 p-8 sm:p-12 space-y-10 group"
                >
                  {/* Top Founder Identity */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Photo Slot Placeholder */}
                    <div className="lg:col-span-4 flex flex-col items-center sm:items-start space-y-4">
                      <div className="relative w-full aspect-square max-w-[280px] rounded-2xl bg-slate-50 border-2 border-dashed border-sky-300 flex flex-col items-center justify-center p-6 text-center group/photo hover:border-[#0284C7] transition-all duration-300 transform hover:scale-102">
                        <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center text-2xl font-black text-slate-800 shadow-xs mb-3 group-hover/photo:bg-sky-50 group-hover/photo:text-[#0284C7] transition-colors">
                          {founder.name.split(" ")[0][0]}
                        </div>
                        <span className="text-xs font-bold text-slate-900 tracking-wide">
                          {founder.name}
                        </span>
                        <span className="text-[11px] text-[#0284C7] font-mono font-bold mt-0.5">
                          {founder.role}
                        </span>
                        <span className="mt-3 text-[10px] px-2.5 py-1 rounded-full bg-white text-slate-500 border border-slate-200 inline-flex items-center gap-1 font-semibold group-hover/photo:border-[#0284C7] transition-colors">
                          <Camera className="w-3 h-3 text-[#0284C7]" /> Photo Slot
                        </span>
                      </div>

                      <div className="text-xs text-slate-500 font-mono font-semibold">
                        <span>#0{index + 1} Co-Founder</span>
                      </div>
                    </div>

                    {/* Bio & Skills */}
                    <div className="lg:col-span-8 space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#0284C7] transition-colors duration-300">
                          {founder.name}
                        </h3>
                        <p className="text-sm font-mono text-[#0284C7] font-bold mt-1">
                          {founder.role}
                        </p>
                      </div>

                      <blockquote className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#0284C7] text-sm text-slate-700 italic group-hover:bg-sky-50/30 transition-colors">
                        &ldquo;{founder.quote}&rdquo;
                      </blockquote>

                      {/* Skill Tags with hover bounce */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold block">
                          Core Technical & Creative Mastery
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {founder.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-800 hover:border-[#0284C7] hover:bg-sky-50 hover:text-[#0284C7] transition-all duration-200 cursor-default"
                            >
                              ⚡ {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Human Side */}
                  <div className="pt-8 border-t border-slate-200 space-y-5">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#EF4444]" />
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        The Human Side: {founder.humanSide.title}
                      </h4>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {founder.humanSide.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {founder.humanSide.passionBadges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200 hover:scale-105 transition-transform duration-200"
                        >
                          ★ {badge}
                        </span>
                      ))}
                    </div>

                    {/* Photo Gallery Placeholders with hover effect */}
                    <div className="pt-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-600 uppercase tracking-wider font-bold">
                        <Camera className="w-3.5 h-3.5 text-[#0284C7]" />
                        <span>Founder Photo Gallery & Moments</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {founder.galleryPlaceholders.map((galleryItem, gIdx) => (
                          <div
                            key={gIdx}
                            className="rounded-xl bg-slate-50 border border-dashed border-slate-300 p-4 flex flex-col justify-between min-h-[140px] hover:border-[#0284C7] hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between text-slate-400">
                              <span className="text-[10px] font-mono font-bold">Slot #{gIdx + 1}</span>
                              <Camera className="w-4 h-4 text-[#0284C7]" />
                            </div>
                            <p className="text-xs text-slate-700 font-semibold leading-snug">
                              {galleryItem.caption}
                            </p>
                            <span className="text-[10px] font-mono text-slate-400">
                              Aspect Ratio: {galleryItem.aspectRatio}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* 4. Contact Route CTA */}
        <RevealOnScroll direction="up">
          <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-white to-red-50 border border-slate-200 p-8 sm:p-12 text-center space-y-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Have a Problem You Want Imran & Mikiyas to Solve?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Whether you need a custom AI agent, multi-channel WhatsApp bot, or flagship website, we speak directly with founders.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] hover:brightness-105 shadow-md shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span>Schedule Founder Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
