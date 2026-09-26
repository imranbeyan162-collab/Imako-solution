"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Users, Clock, DollarSign, TrendingUp, Sparkles, CheckCircle2, ArrowRight, Zap } from "lucide-react";

export function RoiSimulator() {
  const [teamSize, setTeamSize] = useState<number>(12);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(14);
  const [currency, setCurrency] = useState<"USD" | "ETB">("USD");
  const [hourlyRateUSD, setHourlyRateUSD] = useState<number>(35);
  const [hourlyRateETB, setHourlyRateETB] = useState<number>(850);
  const [automationRate, setAutomationRate] = useState<number>(0.75); // 75%

  const activeRate = currency === "USD" ? hourlyRateUSD : hourlyRateETB;
  const currencySymbol = currency === "USD" ? "$" : "Br ";

  const calculations = useMemo(() => {
    const weeklyTeamRepetitiveHours = teamSize * hoursPerWeek;
    const monthlyTeamRepetitiveHours = weeklyTeamRepetitiveHours * 4.33;
    const annualTeamRepetitiveHours = weeklyTeamRepetitiveHours * 52;

    const weeklyHoursSaved = Math.round(weeklyTeamRepetitiveHours * automationRate);
    const monthlyHoursSaved = Math.round(monthlyTeamRepetitiveHours * automationRate);
    const annualHoursSaved = Math.round(annualTeamRepetitiveHours * automationRate);

    const monthlyCostSaved = Math.round(monthlyHoursSaved * activeRate);
    const annualCostSaved = Math.round(annualHoursSaved * activeRate);

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

  const whatsappText = encodeURIComponent(
    `Hello Imako Solution! I ran the AI Simulator:\n• Team Size: ${teamSize}\n• Repetitive Hours/Week: ${hoursPerWeek}h/person\n• Projected Savings: ${calculations.monthlyHoursSaved.toLocaleString()} hrs/mo & ${currencySymbol}${calculations.monthlyCostSaved.toLocaleString()}/mo\nI'd like to schedule an AI Automation consultation.`
  );
  const whatsappUrl = `https://wa.me/251907173634?text=${whatsappText}`;

  return (
    <section id="roi-simulator" className="relative py-20 bg-[#F1F5F9] border-y border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-100 text-[#0284C7] border border-sky-200">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE VALUE CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Calculate Your Time & Capital Saved
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Drag the sliders below to model how much manual back-office latency Imako&apos;s autonomous AI pipelines eliminate for your team every month.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              {/* Slider 1: Team Size */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#0284C7]" />
                    <span>Team Members Performing Repetitive Tasks</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-black text-[#0284C7] bg-sky-50 px-3 py-1 rounded-xl border border-sky-200">
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>1 person</span>
                  <span>50 people</span>
                  <span>100 people</span>
                </div>
              </div>

              {/* Slider 2: Hours/Week */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0284C7]" />
                    <span>Repetitive Hours Spent per Person / Week</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-black text-[#0284C7] bg-sky-50 px-3 py-1 rounded-xl border border-sky-200">
                    {hoursPerWeek} hrs/week
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={35}
                  step={1}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>2 hrs (Light)</span>
                  <span>18 hrs (Moderate)</span>
                  <span>35 hrs (Heavy back-office)</span>
                </div>
              </div>

              {/* Slider 3: Automation Efficiency */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#EF4444]" />
                    <span>Target AI Automation Coverage</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-black text-[#EF4444] bg-red-50 px-3 py-1 rounded-xl border border-red-200">
                    {Math.round(automationRate * 100)}% automated
                  </span>
                </div>
                <input
                  type="range"
                  min={0.3}
                  max={0.9}
                  step={0.05}
                  value={automationRate}
                  onChange={(e) => setAutomationRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#EF4444]"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>30% (Assisted)</span>
                  <span>75% (Recommended)</span>
                  <span>90% (Autonomous)</span>
                </div>
              </div>

              {/* Currency and Rate Selector */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-500 font-mono">Currency:</span>
                  <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setCurrency("USD")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        currency === "USD"
                          ? "bg-[#0284C7] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      USD ($)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency("ETB")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        currency === "ETB"
                          ? "bg-[#0284C7] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      ETB (Birr)
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-500 font-mono">Estimated Loaded Hourly Cost:</span>
                  <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    {currencySymbol}{activeRate}/hr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0284C7] to-[#0369A1] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-200 font-bold">
                  PROJECTED MONTHLY VALUE
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30 font-bold">
                  {calculations.speedMultiplier}x Faster
                </span>
              </div>

              {/* Primary Stat: Cost Saved */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                  {currencySymbol}{calculations.monthlyCostSaved.toLocaleString()}
                  <span className="text-lg font-normal text-sky-200 font-sans"> / month</span>
                </div>
                <p className="text-xs text-sky-100">
                  Total capital conserved through eliminated mechanical backlogs.
                </p>
              </div>

              {/* Secondary Metric Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-[10px] font-mono text-sky-200 uppercase block">Monthly Hours Saved</span>
                  <span className="text-2xl font-black font-mono text-white mt-1 block">
                    {calculations.monthlyHoursSaved.toLocaleString()}h
                  </span>
                  <span className="text-[10px] text-sky-100 block mt-0.5">Reclaimed focus</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-[10px] font-mono text-sky-200 uppercase block">Team Capacity Unlocked</span>
                  <span className="text-2xl font-black font-mono text-white mt-1 block">
                    ~{calculations.fteFreed} FTE
                  </span>
                  <span className="text-[10px] text-sky-100 block mt-0.5">Equivalent full-time staff</span>
                </div>
              </div>

              {/* Annualized Projection */}
              <div className="p-4 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-sky-200 block font-bold">Annualized Value</span>
                  <span className="text-xl font-bold font-mono text-white">
                    {currencySymbol}{calculations.annualCostSaved.toLocaleString()} & {calculations.annualHoursSaved.toLocaleString()} hrs
                  </span>
                </div>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-4 border-t border-white/20 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-sky-50 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Discuss This ROI on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[10px] text-sky-200 font-mono">
                Calculations based on 75% automation standard benchmark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
