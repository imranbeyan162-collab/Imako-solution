"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Users, Clock, DollarSign, TrendingUp, Sparkles, CheckCircle2, ArrowRight, Zap } from "lucide-react";

export function RoiSimulator() {
  // Simulator State
  const [teamSize, setTeamSize] = useState<number>(12);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(14);
  const [currency, setCurrency] = useState<"USD" | "ETB">("USD");
  const [hourlyRateUSD, setHourlyRateUSD] = useState<number>(35);
  const [hourlyRateETB, setHourlyRateETB] = useState<number>(850);
  const [automationRate, setAutomationRate] = useState<number>(0.75); // 75%

  // Hourly rate based on currency
  const activeRate = currency === "USD" ? hourlyRateUSD : hourlyRateETB;
  const currencySymbol = currency === "USD" ? "$" : "Br ";

  // Computations
  const calculations = useMemo(() => {
    const weeklyTeamRepetitiveHours = teamSize * hoursPerWeek;
    const monthlyTeamRepetitiveHours = weeklyTeamRepetitiveHours * 4.33;
    const annualTeamRepetitiveHours = weeklyTeamRepetitiveHours * 52;

    const weeklyHoursSaved = Math.round(weeklyTeamRepetitiveHours * automationRate);
    const monthlyHoursSaved = Math.round(monthlyTeamRepetitiveHours * automationRate);
    const annualHoursSaved = Math.round(annualTeamRepetitiveHours * automationRate);

    const monthlyCostSaved = Math.round(monthlyHoursSaved * activeRate);
    const annualCostSaved = Math.round(annualHoursSaved * activeRate);

    // Equivalent full-time team member capacity unlocked (assuming 160 hrs/month full-time)
    const fteFreed = (monthlyHoursSaved / 160).toFixed(1);
    const speedMultiplier = (1 / (1 - automationRate)).toFixed(1);

    return {
      weeklyHoursSaved,
      monthlyHoursSaved,
      annualHoursSaved,
      monthlyCostSaved,
      annualCostSaved,
      fteFreed,
      speedMultiplier,
    };
  }, [teamSize, hoursPerWeek, automationRate, activeRate]);

  // Pre-fill WhatsApp link with calculated parameters
  const whatsappText = encodeURIComponent(
    `Hello Imako Solution! I ran the AI Simulator:\n• Team Size: ${teamSize}\n• Repetitive Hours/Week: ${hoursPerWeek}h/person\n• Projected Savings: ${calculations.monthlyHoursSaved.toLocaleString()} hrs/mo & ${currencySymbol}${calculations.monthlyCostSaved.toLocaleString()}/mo\nI'd like to schedule an AI Automation consultation.`
  );
  const whatsappUrl = `https://wa.me/251907173634?text=${whatsappText}`;

  return (
    <section id="roi-simulator" className="relative py-20 bg-[#070A0F] border-y border-white/5 scroll-mt-20">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EF4444]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-[#38BDF8] border border-sky-400/25">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE FINANCIAL & TIME MODEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Project ROI & Time-Saved Simulator
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Adjust your team size and repetitive task hours below to simulate the exact operational hours and capital your organization preserves by deploying Imako&apos;s custom AI automations.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D131F]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            {/* Currency Selector */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-xs font-mono uppercase text-gray-400">Simulation Currency</span>
              <div className="inline-flex p-1 rounded-xl bg-[#070A0F] border border-white/10">
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    currency === "USD"
                      ? "bg-[#38BDF8] text-black shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("ETB")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    currency === "ETB"
                      ? "bg-[#EF4444] text-white shadow-[0_0_12px_rgba(239,68,68,0.5)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  ETB (Birr)
                </button>
              </div>
            </div>

            {/* Slider 1: Team Size */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#38BDF8]" />
                  <span>Team Size (Staff executing manual tasks)</span>
                </label>
                <span className="text-lg font-bold font-mono text-white bg-[#121A2A] px-3 py-1 rounded-lg border border-white/10">
                  {teamSize} {teamSize === 1 ? "person" : "people"}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                step={1}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                aria-label="Team Size"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                <span>1 member</span>
                <span>25 members</span>
                <span>50 members</span>
                <span>100+ members</span>
              </div>
            </div>

            {/* Slider 2: Repetitive Hours per Week */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#EF4444]" />
                  <span>Repetitive Task Hours / Week (per person)</span>
                </label>
                <span className="text-lg font-bold font-mono text-[#EF4444] bg-[#121A2A] px-3 py-1 rounded-lg border border-red-500/20">
                  {hoursPerWeek} hrs / wk
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={35}
                step={1}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                aria-label="Repetitive Hours per Week"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                <span>2 hrs (Light entry)</span>
                <span>15 hrs (Typical admin)</span>
                <span>25 hrs (Heavy backlog)</span>
                <span>35 hrs (Pure manual)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#38BDF8]" />
                  <span>Estimated Blended Hourly Rate</span>
                </label>
                <span className="text-lg font-bold font-mono text-[#38BDF8] bg-[#121A2A] px-3 py-1 rounded-lg border border-sky-400/20">
                  {currencySymbol}
                  {activeRate}/hr
                </span>
              </div>
              {currency === "USD" ? (
                <input
                  type="range"
                  min={10}
                  max={150}
                  step={5}
                  value={hourlyRateUSD}
                  onChange={(e) => setHourlyRateUSD(Number(e.target.value))}
                  aria-label="Hourly Rate USD"
                />
              ) : (
                <input
                  type="range"
                  min={200}
                  max={2500}
                  step={50}
                  value={hourlyRateETB}
                  onChange={(e) => setHourlyRateETB(Number(e.target.value))}
                  aria-label="Hourly Rate ETB"
                />
              )}
              <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                <span>{currencySymbol}{currency === "USD" ? "10/hr" : "200/hr"}</span>
                <span>{currencySymbol}{currency === "USD" ? "75/hr" : "1,200/hr"}</span>
                <span>{currencySymbol}{currency === "USD" ? "150/hr" : "2,500/hr"}</span>
              </div>
            </div>

            {/* Automation Depth Selector */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <label className="text-xs font-mono uppercase text-gray-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Imako Automation Implementation Tier</span>
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setAutomationRate(0.5)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    automationRate === 0.5
                      ? "border-sky-400 bg-sky-500/15 text-white"
                      : "border-white/10 bg-[#070A0F] text-gray-400 hover:text-white"
                  }`}
                >
                  <p className="text-xs font-bold text-white">Essential</p>
                  <p className="text-[11px] text-[#38BDF8] font-mono">50% Automate</p>
                </button>
                <button
                  type="button"
                  onClick={() => setAutomationRate(0.75)}
                  className={`p-2.5 rounded-xl border text-left transition-all relative ${
                    automationRate === 0.75
                      ? "border-sky-400 bg-sky-500/20 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                      : "border-white/10 bg-[#070A0F] text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="absolute -top-2 right-2 px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#EF4444] text-white">
                    POPULAR
                  </span>
                  <p className="text-xs font-bold text-white">Hybrid Copilot</p>
                  <p className="text-[11px] text-[#38BDF8] font-mono font-bold">75% Automate</p>
                </button>
                <button
                  type="button"
                  onClick={() => setAutomationRate(0.9)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    automationRate === 0.9
                      ? "border-red-500 bg-red-500/20 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                      : "border-white/10 bg-[#070A0F] text-gray-400 hover:text-white"
                  }`}
                >
                  <p className="text-xs font-bold text-white">Full Autopilot</p>
                  <p className="text-[11px] text-[#EF4444] font-mono font-bold">90% Automate</p>
                </button>
              </div>
            </div>
          </div>

          {/* Results Display Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glow-card rounded-2xl p-6 sm:p-8 space-y-6 border border-sky-400/30 relative overflow-hidden">
              {/* Highlight ribbon */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Projected Annual Capital Saved
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EF4444] bg-[#EF4444]/15 px-2.5 py-0.5 rounded-full border border-[#EF4444]/30">
                  <TrendingUp className="w-3 h-3" />
                  High ROI
                </span>
              </div>

              {/* Big Capital Saved Number */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white glow-text-sky">
                  {currencySymbol}
                  {calculations.annualCostSaved.toLocaleString()}
                  <span className="text-xs font-normal text-gray-400 ml-1">/ year</span>
                </div>
                <p className="text-xs text-gray-400 font-mono">
                  Equivalent to {currencySymbol}{calculations.monthlyCostSaved.toLocaleString()} saved every single month.
                </p>
              </div>

              {/* Time & Capacity Impact Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xl sm:text-2xl font-black text-[#38BDF8] font-mono">
                    {calculations.annualHoursSaved.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">Hours Saved / Year</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xl sm:text-2xl font-black text-[#EF4444] font-mono">
                    {calculations.fteFreed} FTEs
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">Capacity Reclaimed</p>
                </div>
              </div>

              {/* Operational Speed Metric */}
              <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-[#38BDF8]" />
                  <div>
                    <p className="text-xs font-bold text-white">Execution Acceleration</p>
                    <p className="text-[11px] text-gray-400">Bottlenecks bypassed instantly</p>
                  </div>
                </div>
                <div className="text-lg font-black text-[#38BDF8] font-mono">
                  {calculations.speedMultiplier}x Faster
                </div>
              </div>

              {/* Key Assurance list */}
              <div className="space-y-2 pt-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                  <span>Zero hiring overhead — automated workflows execute 24/7.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EF4444] flex-shrink-0" />
                  <span>Human-in-the-loop oversight with automated audit trails.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Immediate deployment into your existing tech stack.</span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>Build This Automation With Imako</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-[11px] text-gray-500 font-mono mt-2">
                  No commitment • Custom architecture blueprint provided
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
