import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Users, 
  ArrowUpRight,
  TrendingUp,
  MessageSquareQuote,
  CheckCircle2
} from "lucide-react";
import { RoiSimulator } from "@/components/RoiSimulator";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SERVICES } from "@/data/servicesData";
import { FOUNDERS } from "@/data/foundersData";

export default function HomePage() {
  const flagship = SERVICES.find((s) => s.isFlagship);
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* 1. Hero Section: Startup Energy, High Contrast, White & Blue */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Tagline Pill with gentle float animation */}
            <RevealOnScroll direction="down" delayMs={50}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-sky-50 border border-sky-200 text-slate-700 shadow-xs hover:border-[#0284C7] transition-all hover:scale-105 duration-300">
                <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping" />
                <span className="text-slate-900 font-bold">IMAKO SOLUTION</span>
                <span className="text-slate-400">•</span>
                <span className="text-[#0284C7] font-bold uppercase tracking-wider">
                  AI powered solution for real world problems
                </span>
              </div>
            </RevealOnScroll>

            {/* Elevated Headline with smooth upward slide */}
            <RevealOnScroll direction="up" delayMs={150}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Engineering Autonomous Systems to{" "}
                <span className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] bg-clip-text text-transparent hover:brightness-110 transition-all duration-300">
                  Accelerate Enterprise Velocity
                </span>
              </h1>
            </RevealOnScroll>

            {/* Elevated Subtitle */}
            <RevealOnScroll direction="up" delayMs={250}>
              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
                Imako Solution builds high-performance digital platforms, intelligent workflow automations, and bespoke AI architectures designed to conquer operational bottlenecks and scale organizational impact.
              </p>
            </RevealOnScroll>

            {/* CTAs with spring micro-interactions */}
            <RevealOnScroll direction="up" delayMs={350}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] hover:brightness-105 shadow-lg shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:translate-y-0 group"
                >
                  <span>Explore All 11 Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-all duration-300 transform hover:-translate-y-1 hover:border-[#0284C7] active:translate-y-0 shadow-xs group"
                >
                  <span>Request a Consultation</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0284C7] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </Link>
              </div>
            </RevealOnScroll>

            {/* Stats & Highlights Strip with cascading staggered reveals */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-200 mt-12 text-left">
              {[
                { val: "10,000+", label: "Manual Hours Eliminated", color: "text-[#0284C7]", border: "hover:border-[#0284C7]" },
                { val: "7+", label: "Live Production Platforms", color: "text-[#EF4444]", border: "hover:border-[#EF4444]" },
                { val: "85%", label: "Average Task Acceleration", color: "text-[#0284C7]", border: "hover:border-[#0284C7]" },
                { val: "24/7", label: "Continuous Execution", color: "text-slate-800", border: "hover:border-slate-400" },
              ].map((stat, i) => (
                <RevealOnScroll key={i} direction="up" delayMs={400 + i * 80}>
                  <div className={`p-4 rounded-xl bg-slate-50 border border-slate-200 ${stat.border} hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-default`}>
                    <div className={`text-2xl sm:text-3xl font-black ${stat.color} font-mono`}>{stat.val}</div>
                    <p className="text-xs text-slate-600 font-semibold mt-1">{stat.label}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Elevated Mission Statement Section */}
      <section className="py-20 bg-[#F1F5F9] border-b border-slate-200 relative">
        <RevealOnScroll direction="scale" durationMs={800}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-100 text-[#DC2626] border border-red-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>OUR MISSION</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              &ldquo;At Imako Solution, we architect autonomous intelligence and high-performance digital systems that liberate enterprise capacity, compress operational latency, and multiply organizational throughput.&rdquo;
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Founded July 27, 2026, we believe ambitious businesses should not be constrained by mechanical, repetitive overhead. We apply cutting-edge software and agentic AI to solve real-world operational friction.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* 3. Flagship Service Spotlight: Website Development */}
      {flagship && (
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll direction="up" durationMs={750}>
              <div className="rounded-3xl p-8 sm:p-12 border-2 border-sky-300 bg-gradient-to-br from-white via-sky-50/40 to-white shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EF4444] text-white shadow-xs">
                      <span>FLAGSHIP & LEAD SERVICE</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-[#0284C7] transition-colors duration-300">
                      Website Development & Digital Commerce Engines
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {flagship.detailedDescription}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {flagship.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0284C7] transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        href="/contact?service=Website%20Development"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#EF4444] hover:brightness-105 shadow-md shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-1 group/btn"
                      >
                        <span>Request Web Development Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                      </Link>
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all duration-300 transform hover:-translate-y-1 hover:border-[#0284C7]"
                      >
                        <span>See Live Case Studies</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#0284C7] font-bold">
                      Flagship Deliverables
                    </h3>
                    <div className="space-y-2.5">
                      {flagship.deliverables.map((del, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium flex items-center justify-between hover:bg-sky-50/50 hover:border-sky-200 transition-colors">
                          <span>{del}</span>
                          <span className="text-[#0284C7] font-bold">Included</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-[11px] text-slate-700 font-medium">
                      ⚡ Sub-second response times • Telebirr & CBE digital payment audit integration ready.
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* 4. Interactive Project ROI & Time-Saved Simulator */}
      <RevealOnScroll direction="up" durationMs={700}>
        <RoiSimulator />
      </RevealOnScroll>

      {/* 5. Services Teaser Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up" delayMs={50}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-[#0284C7] border border-sky-200 mb-3">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>FULL-SPECTRUM CAPABILITIES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Explore All 11 Services
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] hover:text-[#EF4444] transition-colors group"
              >
                <span>View Combined Services Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((svc, sIdx) => (
              <RevealOnScroll key={svc.id} direction="up" delayMs={100 + sIdx * 80}>
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between space-y-4 group h-full"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                      {svc.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors duration-200">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="text-xs font-bold text-[#0284C7] group-hover:underline inline-flex items-center gap-1.5 pt-2"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet Founders Teaser */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-[#DC2626] border border-red-200">
                <Users className="w-3.5 h-3.5" />
                <span>CO-FOUNDERS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Meet the Minds Behind Imako
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Listed in alphabetical order: Imran Mohammedbeyan & Mikiyas Alemu.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FOUNDERS.map((f, fIdx) => (
              <RevealOnScroll key={f.id} direction={fIdx === 0 ? "left" : "right"} delayMs={150}>
                <div
                  className="rounded-2xl p-7 bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors">{f.name}</h3>
                      <p className="text-xs text-[#0284C7] font-mono font-semibold">{f.role}</p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 group-hover:bg-sky-50 group-hover:text-[#0284C7] transition-colors">
                      {f.name.split(" ")[0][0]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 italic border-l-2 border-[#0284C7] pl-3">
                    &ldquo;{f.quote}&rdquo;
                  </p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-sky-50/30 transition-colors">
                    <span className="text-[11px] font-bold text-slate-800 block mb-1">Human Element:</span>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {f.humanSide.description}
                    </p>
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#EF4444] transition-colors"
                  >
                    <span>Explore full bio & photo gallery &rarr;</span>
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Placeholder Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <RevealOnScroll direction="scale" durationMs={700}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>CLIENT REPUTATION</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Client Testimonials
            </h2>
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-slate-50 border border-dashed border-slate-300 space-y-3 hover:border-[#0284C7] transition-colors duration-300">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                &ldquo;Formal executive quotes and video endorsements from our recent partners (Bisrat Hotel, Nisir Football Academy, Eyana Hotel, Dr. Abdi Clinic) are currently being finalized for publication.&rdquo;
              </p>
              <span className="text-xs font-mono text-[#0284C7] block font-bold">
                — Verified Client Testimonials Coming Soon
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="py-20 bg-[#F1F5F9]">
        <RevealOnScroll direction="up" durationMs={700}>
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Ready to Automate & Scale Your Business?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Get in touch for a bespoke technical architecture blueprint and project quote. No pricing ambiguity — pure engineering clarity.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] hover:brightness-105 shadow-lg shadow-sky-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
              >
                <span>Get Your Project Quote Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
