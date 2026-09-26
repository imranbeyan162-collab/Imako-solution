import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOUNDERS } from "@/data/foundersData";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Sparkles, ArrowRight, Heart, Camera, MessageSquare, PhoneCall } from "lucide-react";

export const metadata = {
  title: "About & Co-Founders — Imako Solution",
  description:
    "Meet co-founders Imran Mohammedbeyan & Mikiyas Alemu. Real people, authentic stories, and high-impact technology engineering.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#E8F6FF] text-[#0B3D91] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Header & Minimal Company Overview with On-Load Reveals */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="animate-hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>FOUNDED JULY 27, 2026</span>
          </div>

          <h1 className="animate-hero-title text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B3D91] leading-tight">
            Architecting the Future of{" "}
            <span className="bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] bg-clip-text text-transparent">
              Autonomous Systems
            </span>
          </h1>

          <p className="animate-hero-subtitle text-base sm:text-lg text-[#0B3D91]/80 leading-relaxed max-w-2xl mx-auto">
            We replace tedious manual overhead with elegant software, autonomous agents, and high-conversion web platforms.
          </p>

          <div className="animate-hero-cta pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] hover:scale-[1.02] shadow-md hover:shadow-lg transition-all duration-300 transform"
            >
              <span>Schedule Founder Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#0B3D91]" />
            </Link>
          </div>
        </div>

        {/* 2. Co-Founders in Action Together Spotlight */}
        <RevealOnScroll direction="up" durationMs={800}>
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#3BA7F2] shadow-lg space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#CBE5FC] pb-4">
              <div>
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#7FE7D6] text-[#0B3D91] font-bold inline-block">
                  ★ CO-FOUNDERS IN ACTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B3D91] mt-1">
                  Imran Mohammedbeyan & Mikiyas Alemu
                </h2>
              </div>
              <p className="text-xs font-mono text-[#3BA7F2] font-bold">
                Field Deployment & Client Architecture
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group relative rounded-2xl overflow-hidden bg-[#E8F6FF] border-2 border-[#CBE5FC] hover:border-[#7FE7D6] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/founders-together-1.png"
                    alt="Mikiyas Alemu and Imran Mohammedbeyan together launching digital systems"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-[#CBE5FC]">
                  <p className="text-xs font-black text-[#0B3D91]">
                    Mikiyas Alemu & Imran Mohammedbeyan
                  </p>
                  <p className="text-[11px] text-[#0B3D91]/75 mt-0.5">
                    Driving client system deployments and enterprise digital expansion.
                  </p>
                </div>
              </div>

              <div className="group relative rounded-2xl overflow-hidden bg-[#E8F6FF] border-2 border-[#CBE5FC] hover:border-[#7FE7D6] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/founders-together-2.png"
                    alt="Mikiyas Alemu and Imran Mohammedbeyan working together in the field"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 bg-white border-t border-[#CBE5FC]">
                  <p className="text-xs font-black text-[#0B3D91]">
                    Founders Partnership & Execution
                  </p>
                  <p className="text-[11px] text-[#0B3D91]/75 mt-0.5">
                    Combining AI systems engineering with high-impact growth and creative direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* 3. Minimal Mission Statement Card */}
        <RevealOnScroll direction="scale" durationMs={800}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#CBE5FC] shadow-md text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3BA7F2] font-black">
              The Imako Core Principle
            </span>
            <blockquote className="text-xl sm:text-2xl font-black text-[#0B3D91] leading-snug">
              &ldquo;We engineer high-velocity intelligence that liberates enterprise capacity, compresses operational latency, and multiplies throughput.&rdquo;
            </blockquote>
          </div>
        </RevealOnScroll>

        {/* 3. Meet the Founders Section (Alphabetical Order with Real Photos) */}
        <section className="space-y-12">
          <RevealOnScroll direction="up" delayMs={50}>
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20">
                <span>LEADERSHIP IN ALPHABETICAL ORDER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B3D91] tracking-tight">
                Meet the Co-Founders
              </h2>
              <p className="text-xs sm:text-sm text-[#0B3D91]/75">
                Imran Mohammedbeyan & Mikiyas Alemu — Technical precision, martial discipline, and authentic community roots.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-12">
            {FOUNDERS.map((founder, index) => (
              <RevealOnScroll key={founder.id} direction="up" delayMs={index * 150} durationMs={800}>
                <div
                  className="rounded-3xl bg-white border-2 border-[#CBE5FC] shadow-sm hover:border-[#7FE7D6] hover:shadow-xl transition-all duration-500 p-6 sm:p-10 space-y-8 group"
                >
                  {/* Top Founder Identity */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Authentic Photo */}
                    <div className="md:col-span-4 flex flex-col items-center sm:items-start space-y-3">
                      <div className="relative w-full aspect-[3/4] max-w-[260px] rounded-3xl overflow-hidden bg-[#E8F6FF] border-2 border-[#3BA7F2] shadow-md group-hover:border-[#7FE7D6] transition-all duration-300">
                        <Image
                          src={founder.avatar}
                          alt={founder.name}
                          fill
                          className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B3D91] via-[#0B3D91]/80 to-transparent p-3 pt-8 text-white">
                          <p className="text-xs font-black">{founder.name}</p>
                          <p className="text-[10px] text-[#7FE7D6] font-mono">{founder.role}</p>
                        </div>
                      </div>

                      {/* Direct WhatsApp Callout */}
                      <a
                        href={founder.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-[#0B3D91] bg-[#7FE7D6]/35 hover:bg-[#7FE7D6] border border-[#7FE7D6] transition-colors"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-[#0B3D91]" />
                        <span>{founder.phoneDisplay}</span>
                      </a>
                    </div>

                    {/* Bio & Skills */}
                    <div className="md:col-span-8 space-y-5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E8F6FF] text-[#3BA7F2] border border-[#3BA7F2]/30">
                            #0{index + 1} Co-Founder
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0B3D91] group-hover:text-[#3BA7F2] transition-colors duration-300 mt-1">
                          {founder.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-[#3BA7F2] font-black">
                          {founder.role}
                        </p>
                      </div>

                      <blockquote className="p-3.5 rounded-2xl bg-[#E8F6FF] border-l-4 border-[#3BA7F2] text-xs sm:text-sm text-[#0B3D91] italic font-medium">
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
                              className="px-2.5 py-1 rounded-xl text-xs font-bold bg-[#E8F6FF] border border-[#3BA7F2]/30 text-[#0B3D91] hover:border-[#7FE7D6] hover:bg-[#7FE7D6]/30 transition-all duration-200"
                            >
                              ⚡ {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Human Side */}
                  <div className="pt-6 border-t border-[#CBE5FC] space-y-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#3BA7F2]" />
                      <h4 className="text-sm sm:text-base font-black text-[#0B3D91]">
                        The Human Side: {founder.humanSide.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-[#0B3D91]/80 leading-relaxed">
                      {founder.humanSide.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {founder.humanSide.passionBadges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-3 py-1 rounded-full text-xs font-black bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-2xs"
                        >
                          ★ {badge}
                        </span>
                      ))}
                    </div>

                    {/* Authentic Photo Gallery */}
                    <div className="pt-4 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#3BA7F2] uppercase tracking-wider font-black">
                        <Camera className="w-3.5 h-3.5 text-[#0B3D91]" />
                        <span>Authentic Photos & Moments</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {founder.gallery.map((galleryItem, gIdx) => (
                          <div
                            key={gIdx}
                            className="group/gal relative rounded-2xl overflow-hidden bg-[#E8F6FF] border-2 border-[#CBE5FC] hover:border-[#7FE7D6] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
                          >
                            <div className="relative w-full aspect-[3/4] overflow-hidden">
                              <Image
                                src={galleryItem.src}
                                alt={galleryItem.caption}
                                fill
                                className="object-cover object-top group-hover/gal:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-2.5 bg-white border-t border-[#CBE5FC]">
                              <p className="text-[11px] text-[#0B3D91] font-bold leading-snug">
                                {galleryItem.caption}
                              </p>
                            </div>
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
          <div className="rounded-3xl bg-gradient-to-r from-[#0B3D91] via-[#0B3D91] to-[#3BA7F2] text-white p-6 sm:p-10 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Have a Project for Imran & Mikiyas?
            </h3>
            <p className="text-xs sm:text-sm text-[#E8F6FF]/90 max-w-lg mx-auto">
              Get in touch directly for custom websites, autonomous AI agents, or automated business workflows.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] shadow-lg hover-cinematic group"
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
