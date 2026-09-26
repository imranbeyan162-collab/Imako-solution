import React from "react";
import Link from "next/link";
import { FOUNDERS } from "@/data/foundersData";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Sparkles, ArrowRight, Heart, Camera } from "lucide-react";

export const metadata = {
  title: "About & Co-Founders — Imako Solution",
  description:
    "Learn about Imako Solution, founded July 27, 2026. Meet co-founders Imran Mohammedbeyan & Mikiyas Alemu, our elevated mission, and the human passions driving our technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#E8F6FF] text-[#0B3D91] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. Header & Company Overview */}
        <RevealOnScroll direction="down" delayMs={50}>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0B3D91]" />
              <span>FOUNDED JULY 27, 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B3D91] leading-tight">
              Architecting the Future of{" "}
              <span className="bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] bg-clip-text text-transparent">
                Autonomous Work
              </span>
            </h1>

            <p className="text-lg text-[#0B3D91]/80 leading-relaxed max-w-3xl mx-auto">
              Imako Solution is an AI and technology engineering firm dedicated to building software that solves high-friction real-world problems. We replace administrative fatigue with elegant algorithmic automation.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2. Elevated Mission Statement Card */}
        <RevealOnScroll direction="scale" durationMs={800}>
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#CBE5FC] shadow-md hover:shadow-xl transition-shadow duration-500 text-center space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3BA7F2] font-black">
              The Imako Philosophy
            </span>
            <blockquote className="text-xl sm:text-3xl font-black text-[#0B3D91] leading-snug">
              &ldquo;We engineer high-velocity intelligence and autonomous systems that liberate human capital, compress operational latency, and multiply enterprise throughput.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-[#0B3D91]/75 max-w-2xl mx-auto">
              Instead of simply stating &ldquo;we save time and cost&rdquo;, we treat time as an enterprise&apos;s most non-renewable asset. Every line of code we write is calibrated to unlock creative human focus.
            </p>
          </div>
        </RevealOnScroll>

        {/* 3. Meet the Founders Section (Alphabetical Order) */}
        <section className="space-y-16">
          <RevealOnScroll direction="up" delayMs={50}>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20">
                <span>LEADERSHIP IN ALPHABETICAL ORDER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight">
                Meet the Co-Founders
              </h2>
              <p className="text-xs sm:text-sm text-[#0B3D91]/75">
                Beyond resumes and tech stacks — discover the core disciplines, values, and human stories that shape our company.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-16">
            {FOUNDERS.map((founder, index) => (
              <RevealOnScroll key={founder.id} direction="up" delayMs={index * 150} durationMs={800}>
                <div
                  className="rounded-3xl bg-white border-2 border-[#CBE5FC] shadow-sm hover:border-[#7FE7D6] hover:shadow-2xl transition-all duration-500 p-8 sm:p-12 space-y-10 group"
                >
                  {/* Top Founder Identity */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Photo Slot Placeholder */}
                    <div className="lg:col-span-4 flex flex-col items-center sm:items-start space-y-4">
                      <div className="relative w-full aspect-square max-w-[280px] rounded-3xl bg-[#E8F6FF] border-2 border-dashed border-[#3BA7F2] flex flex-col items-center justify-center p-6 text-center group/photo hover:border-[#7FE7D6] transition-all duration-300 transform hover:scale-102">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-[#CBE5FC] flex items-center justify-center text-2xl font-black text-[#0B3D91] shadow-xs mb-3 group-hover/photo:bg-[#7FE7D6] transition-colors">
                          {founder.name.split(" ")[0][0]}
                        </div>
                        <span className="text-xs font-black text-[#0B3D91] tracking-wide">
                          {founder.name}
                        </span>
                        <span className="text-[11px] text-[#3BA7F2] font-mono font-bold mt-0.5">
                          {founder.role}
                        </span>
                        <span className="mt-3 text-[10px] px-2.5 py-1 rounded-full bg-white text-[#0B3D91] border border-[#3BA7F2]/30 inline-flex items-center gap-1 font-bold group-hover/photo:border-[#7FE7D6] transition-colors">
                          <Camera className="w-3 h-3 text-[#3BA7F2]" /> Photo Slot
                        </span>
                      </div>

                      <div className="text-xs text-[#0B3D91]/70 font-mono font-bold">
                        <span>#0{index + 1} Co-Founder</span>
                      </div>
                    </div>

                    {/* Bio & Skills */}
                    <div className="lg:col-span-8 space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0B3D91] group-hover:text-[#3BA7F2] transition-colors duration-300">
                          {founder.name}
                        </h3>
                        <p className="text-sm font-mono text-[#3BA7F2] font-black mt-1">
                          {founder.role}
                        </p>
                      </div>

                      <blockquote className="p-4 rounded-2xl bg-[#E8F6FF] border-l-4 border-[#3BA7F2] text-sm text-[#0B3D91] italic font-medium">
                        &ldquo;{founder.quote}&rdquo;
                      </blockquote>

                      {/* Skill Tags */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#3BA7F2] font-black block">
                          Core Technical & Creative Mastery
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {founder.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-3 py-1 rounded-xl text-xs font-bold bg-[#E8F6FF] border border-[#3BA7F2]/30 text-[#0B3D91] hover:border-[#7FE7D6] hover:bg-[#7FE7D6]/30 transition-all duration-200 cursor-default"
                            >
                              ⚡ {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Human Side */}
                  <div className="pt-8 border-t border-[#CBE5FC] space-y-5">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#3BA7F2]" />
                      <h4 className="text-base sm:text-lg font-black text-[#0B3D91]">
                        The Human Side: {founder.humanSide.title}
                      </h4>
                    </div>

                    <p className="text-sm text-[#0B3D91]/80 leading-relaxed">
                      {founder.humanSide.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {founder.humanSide.passionBadges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-3.5 py-1 rounded-full text-xs font-black bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 hover:scale-105 transition-transform duration-200 shadow-2xs"
                        >
                          ★ {badge}
                        </span>
                      ))}
                    </div>

                    {/* Photo Gallery Placeholders */}
                    <div className="pt-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#3BA7F2] uppercase tracking-wider font-black">
                        <Camera className="w-3.5 h-3.5 text-[#0B3D91]" />
                        <span>Founder Photo Gallery & Moments</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {founder.galleryPlaceholders.map((galleryItem, gIdx) => (
                          <div
                            key={gIdx}
                            className="rounded-2xl bg-[#E8F6FF] border-2 border-dashed border-[#3BA7F2]/40 p-4 flex flex-col justify-between min-h-[140px] hover:border-[#7FE7D6] hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between text-[#0B3D91]/60">
                              <span className="text-[10px] font-mono font-bold">Slot #{gIdx + 1}</span>
                              <Camera className="w-4 h-4 text-[#3BA7F2]" />
                            </div>
                            <p className="text-xs text-[#0B3D91] font-bold leading-snug">
                              {galleryItem.caption}
                            </p>
                            <span className="text-[10px] font-mono text-[#3BA7F2]">
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
          <div className="rounded-3xl bg-gradient-to-r from-[#0B3D91] via-[#0B3D91] to-[#3BA7F2] text-white p-8 sm:p-12 text-center space-y-5 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Have a Problem You Want Imran & Mikiyas to Solve?
            </h3>
            <p className="text-xs sm:text-sm text-[#E8F6FF]/90 max-w-xl mx-auto">
              Whether you need a custom AI agent, multi-channel WhatsApp bot, or flagship website, we speak directly with founders.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span>Schedule Founder Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0B3D91] group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
