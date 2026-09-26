"use client";

import React from "react";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient decorative glow in Sky Blue and Red */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#38BDF8]/15 via-white/5 to-[#EF4444]/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-[#38BDF8]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Brand Innovation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#0D131F] border border-sky-400/30 text-gray-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping" />
            <span className="text-white font-semibold">IMAKO SOLUTION</span>
            <span className="text-gray-500">•</span>
            <span className="text-[#38BDF8] font-bold">NEXT-GEN AI AUTOMATIONS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Replace Repetitive Busywork with{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] via-white to-[#EF4444] bg-clip-text text-transparent">
              Autonomous AI Systems
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Imako Solution architects custom AI automation workflows, high-converting digital web applications, and autonomous business engines for ambitious companies.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#roi-simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4 fill-white text-white" />
              <span>Simulate Your ROI & Time Saved</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-200 bg-[#0D131F]/90 hover:bg-[#121A2A] border border-white/15 hover:border-sky-400/50 transition-all"
            >
              <span>Explore 7 Live Case Studies</span>
              <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-[#EF4444] border border-red-500/30 font-mono font-bold">
                Live
              </span>
            </a>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 mt-12 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-400/30 transition-colors">
              <div className="text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
                <span className="text-[#38BDF8]">10,000+</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Manual Hours Eliminated</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition-colors">
              <div className="text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
                <span className="text-[#EF4444]">7+</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Active Production Deployments</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-400/30 transition-colors">
              <div className="text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
                <span className="text-[#38BDF8]">85%</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Repetitive Task Autopilot</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition-colors">
              <div className="text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
                <span className="text-[#EF4444]">24/7</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Uninterrupted Automated Execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
