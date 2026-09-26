"use client";

import React, { useState, useMemo } from "react";
import { Calculator, Users, Clock, Zap, TrendingUp, ArrowRight } from "lucide-react";

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
    <section id="roi-simulator" className="relative py-20 bg-[#E8F6FF] border-y-2 border-[#CBE5FC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#0B3D91]" />
            <span>INTERACTIVE VALUE CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B3D91] tracking-tight">
            Calculate Your Time & Capital Saved
          </h2>

          <p className="text-sm sm:text-base text-[#0B3D91]/80 leading-relaxed">
            Drag the sliders below to model how much manual back-office latency Imako&apos;s autonomous AI pipelines eliminate for your team every month.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-[#CBE5FC] p-6 sm:p-10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              {/* Slider 1: Team Size with #0B3D91 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-[#0B3D91] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#0B3D91]" />
                    <span>Team Members Performing Repetitive Tasks</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-black text-[#0B3D91] bg-[#E8F6FF] px-3 py-1 rounded-xl border border-[#3BA7F2]/40">
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
                  className="w-full h-2.5 bg-[#E8F6FF] rounded-lg appearance-none cursor-pointer accent-[#0B3D91]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#0B3D91]/60">
                  <span>1 person</span>
                  <span>50 people</span>
                  <span>100 people</span>
                </div>
              </div>

              {/* Slider 2: Hours/Week with #3BA7F2 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-[#0B3D91] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#3BA7F2]" />
                    <span>Repetitive Hours Spent per Person / Week</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-black text-white bg-[#3BA7F2] px-3 py-1 rounded-xl shadow-xs">
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
                  className="w-full h-2.5 bg-[#E8F6FF] rounded-lg appearance-none cursor-pointer accent-[#3BA7F2]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#0B3D91]/60">
                  <span>2 hrs (Light)</span>
                  <span>18 hrs (Moderate)</span>
                  <span>35 hrs (Heavy back-office)</span>
                </div>
              </div>

              {/* Slider 3: Automation Efficiency with #7FE7D6 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-[#0B3D91] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#0B3D91]" />
                    <span>Target AI Automation Coverage</span>
                  </label>
                  <span className="text-base sm:text-lg font-mono font-black text-[#0B3D91] bg-[#7FE7D6] px-3 py-1 rounded-xl border border-[#0B3D91]/20 shadow-xs">
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
                  className="w-full h-2.5 bg-[#E8F6FF] rounded-lg appearance-none cursor-pointer accent-[#0B3D91]"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#0B3D91]/60">
                  <span>30% (Assisted)</span>
                  <span>75% (Recommended)</span>
                  <span>90% (Autonomous)</span>
                </div>
              </div>

              {/* Currency and Rate Selector */}
              <div className="pt-4 border-t border-[#CBE5FC] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-[#0B3D91] font-mono font-bold">Currency:</span>
                  <div className="inline-flex rounded-xl bg-[#E8F6FF] p-1 border border-[#3BA7F2]/30">
                    <button
                      type="button"
                      onClick={() => setCurrency("USD")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        currency === "USD"
                          ? "bg-[#0B3D91] text-white shadow-xs"
                          : "text-[#0B3D91] hover:text-[#3BA7F2]"
                      }`}
                    >
                      USD ($)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency("ETB")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        currency === "ETB"
                          ? "bg-[#0B3D91] text-white shadow-xs"
                          : "text-[#0B3D91] hover:text-[#3BA7F2]"
                      }`}
                    >
                      ETB (Birr)
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs text-[#0B3D91]/70 font-mono">Loaded Hourly Cost:</span>
                  <span className="text-xs font-mono font-bold text-[#0B3D91] bg-[#7FE7D6]/30 px-2.5 py-1 rounded-lg border border-[#7FE7D6]">
                    {currencySymbol}{activeRate}/hr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column (5 Cols) in Balanced Ocean Breeze */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B3D91] via-[#0B3D91] to-[#3BA7F2] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#7FE7D6] font-black">
                  PROJECTED MONTHLY VALUE
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#7FE7D6] text-[#0B3D91] font-black">
                  {calculations.speedMultiplier}x Faster
                </span>
              </div>

              {/* Primary Stat: Cost Saved */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                  {currencySymbol}{calculations.monthlyCostSaved.toLocaleString()}
                  <span className="text-lg font-normal text-[#7FE7D6] font-sans"> / month</span>
                </div>
                <p className="text-xs text-[#E8F6FF]/90">
                  Total capital conserved through eliminated mechanical backlogs.
                </p>
              </div>

              {/* Secondary Metric Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-[10px] font-mono text-[#7FE7D6] uppercase block font-bold">Monthly Hours Saved</span>
                  <span className="text-2xl font-black font-mono text-white mt-1 block">
                    {calculations.monthlyHoursSaved.toLocaleString()}h
                  </span>
                  <span className="text-[10px] text-[#E8F6FF]/80 block mt-0.5">Reclaimed focus</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-[10px] font-mono text-[#7FE7D6] uppercase block font-bold">Team Capacity Unlocked</span>
                  <span className="text-2xl font-black font-mono text-white mt-1 block">
                    ~{calculations.fteFreed} FTE
                  </span>
                  <span className="text-[10px] text-[#E8F6FF]/80 block mt-0.5">Equivalent full-time staff</span>
                </div>
              </div>

              {/* Annualized Projection */}
              <div className="p-4 rounded-2xl bg-[#E8F6FF]/15 border border-[#7FE7D6]/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#7FE7D6] block font-black">Annualized Value</span>
                  <span className="text-xl font-bold font-mono text-white">
                    {currencySymbol}{calculations.annualCostSaved.toLocaleString()} & {calculations.annualHoursSaved.toLocaleString()} hrs
                  </span>
                </div>
                <TrendingUp className="w-6 h-6 text-[#7FE7D6]" />
              </div>
            </div>

            {/* Direct WhatsApp CTA in Mint Aqua */}
            <div className="pt-4 border-t border-white/20 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Discuss This ROI on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#0B3D91]" />
              </a>
              <p className="text-center text-[10px] text-[#E8F6FF]/80 font-mono">
                Calculations based on 75% automation standard benchmark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
