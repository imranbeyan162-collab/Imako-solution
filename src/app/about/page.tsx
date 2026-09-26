import React from "react";
import Link from "next/link";
import { FOUNDERS } from "@/data/foundersData";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Camera, Award, Code, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About & Co-Founders — Imako Solution",
  description:
    "Learn about Imako Solution, founded July 27, 2026. Meet co-founders Imran Mohammedbeyan & Mikiyas Alemu, our elevated mission, and the human passions driving our technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070A0F] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. Header & Company Overview */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>FOUNDED JULY 27, 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Architecting the Future of{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] via-white to-[#EF4444] bg-clip-text text-transparent">
              Autonomous Work
            </span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Imako Solution is an AI and technology engineering firm dedicated to building software that solves high-friction real-world problems. We replace administrative fatigue with elegant algorithmic automation.
          </p>
        </div>

        {/* 2. Elevated Mission Statement Card */}
        <div className="max-w-5xl mx-auto glow-card rounded-3xl p-8 sm:p-12 border border-sky-400/30 text-center space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
            The Imako Philosophy
          </span>
          <blockquote className="text-xl sm:text-3xl font-extrabold text-white leading-snug">
            &ldquo;We engineer high-velocity intelligence and autonomous systems that liberate human capital, compress operational latency, and multiply enterprise throughput.&rdquo;
          </blockquote>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto">
            Instead of simply stating &ldquo;we save time and cost&rdquo;, we treat time as an enterprise&apos;s most non-renewable asset. Every line of code we write is calibrated to unlock creative human focus.
          </p>
        </div>

        {/* 3. Meet the Founders Section (Alphabetical Order) */}
        <section className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-[#38BDF8] border border-sky-400/25">
              <span>LEADERSHIP IN ALPHABETICAL ORDER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Meet the Co-Founders
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Beyond resumes and tech stacks — discover the core disciplines, values, and human stories that shape our company.
            </p>
          </div>

          <div className="space-y-20">
            {FOUNDERS.map((founder, index) => (
              <div
                key={founder.id}
                className="rounded-3xl bg-[#0D131F] border border-white/10 overflow-hidden hover:border-sky-400/40 transition-all p-8 sm:p-12 space-y-10"
              >
                {/* Top Founder Identity */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Photo Slot Placeholder */}
                  <div className="lg:col-span-4 flex flex-col items-center sm:items-start space-y-4">
                    <div className="relative w-full aspect-square max-w-[280px] rounded-2xl bg-[#141C2E] border-2 border-dashed border-sky-400/40 flex flex-col items-center justify-center p-6 text-center group">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-black text-white mb-3">
                        {founder.name.split(" ")[0][0]}
                      </div>
                      <span className="text-xs font-bold text-white tracking-wide">
                        {founder.name}
                      </span>
                      <span className="text-[11px] text-[#38BDF8] font-mono mt-0.5">
                        {founder.role}
                      </span>
                      <span className="mt-3 text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 inline-flex items-center gap-1">
                        <Camera className="w-3 h-3" /> Photo Slot
                      </span>
                    </div>

                    <div className="text-xs text-gray-400 font-mono">
                      <span>#0{index + 1} Co-Founder</span>
                    </div>
                  </div>

                  {/* Bio & Skills */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">
                        {founder.name}
                      </h3>
                      <p className="text-sm font-mono text-[#38BDF8] font-bold mt-1">
                        {founder.role}
                      </p>
                    </div>

                    <blockquote className="p-4 rounded-xl bg-white/[0.02] border-l-4 border-sky-400 text-sm text-gray-200 italic">
                      &ldquo;{founder.quote}&rdquo;
                    </blockquote>

                    {/* Skill Tags */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                        Core Technical & Creative Mastery
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {founder.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-[#121A2A] border border-white/10 text-gray-200 hover:border-sky-400/40 transition-colors"
                          >
                            ⚡ {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Human Side (Deep dive beyond standard bio) */}
                <div className="pt-8 border-t border-white/10 space-y-5">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#EF4444]" />
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      The Human Side: {founder.humanSide.title}
                    </h4>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {founder.humanSide.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {founder.humanSide.passionBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30"
                      >
                        ★ {badge}
                      </span>
                    ))}
                  </div>

                  {/* Photo Gallery Placeholders */}
                  <div className="pt-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                      <Camera className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Founder Photo Gallery & Moments</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {founder.galleryPlaceholders.map((galleryItem, gIdx) => (
                        <div
                          key={gIdx}
                          className="rounded-xl bg-[#141C2E] border border-dashed border-white/15 p-4 flex flex-col justify-between min-h-[140px] hover:border-sky-400/40 transition-colors"
                        >
                          <div className="flex items-center justify-between text-gray-500">
                            <span className="text-[10px] font-mono">Slot #{gIdx + 1}</span>
                            <Camera className="w-4 h-4 text-gray-400" />
                          </div>
                          <p className="text-xs text-gray-300 font-medium leading-snug">
                            {galleryItem.caption}
                          </p>
                          <span className="text-[10px] font-mono text-sky-400/80">
                            Aspect Ratio: {galleryItem.aspectRatio}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Contact Route CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0E1726] to-[#121A2A] border border-white/10 p-8 sm:p-12 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Have a Problem You Want Imran & Mikiyas to Solve?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Whether you need a custom AI agent, multi-channel WhatsApp bot, or flagship website, we speak directly with founders.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 shadow-lg transition-all"
            >
              <span>Schedule Founder Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
