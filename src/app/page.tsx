import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Globe, 
  Bot, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Users, 
  ArrowUpRight,
  TrendingUp,
  MessageSquareQuote
} from "lucide-react";
import { RoiSimulator } from "@/components/RoiSimulator";
import { SERVICES } from "@/data/servicesData";
import { FOUNDERS } from "@/data/foundersData";

export default function HomePage() {
  const flagship = SERVICES.find((s) => s.isFlagship);
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#070A0F] text-white">
      {/* 1. Hero Section: Startup Energy, Bold & Confident */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 border-b border-white/5">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-gradient-to-tr from-[#38BDF8]/15 via-white/5 to-[#EF4444]/15 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-[#0D131F] border border-sky-400/30 text-gray-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping" />
              <span className="text-white font-semibold">IMAKO SOLUTION</span>
              <span className="text-gray-500">•</span>
              <span className="text-[#38BDF8] font-bold uppercase tracking-wider">
                AI powered solution for real world problems
              </span>
            </div>

            {/* Elevated Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.12]">
              Engineering Autonomous Systems to{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] via-white to-[#EF4444] bg-clip-text text-transparent">
                Accelerate Enterprise Velocity
              </span>
            </h1>

            {/* Elevated Subtitle */}
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Imako Solution builds high-performance digital platforms, intelligent workflow automations, and bespoke AI architectures designed to conquer operational bottlenecks and scale organizational impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore All 11 Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-gray-200 bg-[#0D131F]/90 hover:bg-[#121A2A] border border-white/15 hover:border-sky-400/50 transition-all"
              >
                <span>Request a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#38BDF8]" />
              </Link>
            </div>

            {/* Real Stats & Highlights Strip */}
            <div className="pt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 mt-12 text-left">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-400/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-[#38BDF8] font-mono">10,000+</div>
                <p className="text-xs text-gray-400 mt-1">Manual Hours Eliminated</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-400/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-[#EF4444] font-mono">7+</div>
                <p className="text-xs text-gray-400 mt-1">Live Production Platforms</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-400/30 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-[#38BDF8] font-mono">85%</div>
                <p className="text-xs text-gray-400 mt-1">Average Task Acceleration</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">24/7</div>
                <p className="text-xs text-gray-400 mt-1">Continuous Execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Elevated Mission Statement Section */}
      <section className="py-20 bg-[#090E18] border-b border-white/5 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>OUR MISSION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            &ldquo;At Imako Solution, we architect autonomous intelligence and high-performance digital systems that liberate enterprise capacity, compress operational latency, and multiply organizational throughput.&rdquo;
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Founded July 27, 2026, we believe ambitious businesses should not be constrained by mechanical, repetitive overhead. We apply cutting-edge software and agentic AI to solve real-world operational friction.
          </p>
        </div>
      </section>

      {/* 3. Flagship Service Spotlight: Website Development */}
      {flagship && (
        <section className="py-20 bg-[#070A0F] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glow-card rounded-3xl p-8 sm:p-12 border border-sky-400/40 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EF4444] text-white">
                    <span>FLAGSHIP & LEAD SERVICE</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Website Development & Digital Commerce Engines
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {flagship.detailedDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {flagship.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact?service=Website%20Development"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] to-[#EF4444] hover:brightness-110 shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all"
                    >
                      <span>Request Web Development Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10"
                    >
                      <span>See Live Case Studies</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0D131F] rounded-2xl p-6 border border-white/10 space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8]">
                    Flagship Deliverables
                  </h3>
                  <div className="space-y-2.5">
                    {flagship.deliverables.map((del, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-200 flex items-center justify-between">
                        <span>{del}</span>
                        <span className="text-[#38BDF8] font-bold">Included</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/20 text-[11px] text-gray-300">
                    ⚡ Sub-second response times • Telebirr & CBE digital payment audit integration ready.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Interactive Project ROI & Time-Saved Simulator */}
      <RoiSimulator />

      {/* 5. Services Teaser Grid */}
      <section className="py-20 bg-[#090E18] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-[#38BDF8] border border-sky-400/25 mb-3">
                <Cpu className="w-3.5 h-3.5" />
                <span>FULL-SPECTRUM CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Explore All 11 Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#38BDF8] hover:text-[#EF4444] transition-colors"
            >
              <span>View Combined Services Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((svc) => (
              <div
                key={svc.id}
                className="p-6 rounded-2xl bg-[#0D131F] border border-white/10 hover:border-sky-400/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                    {svc.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                    {svc.shortDescription}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-bold text-white group-hover:text-[#38BDF8] inline-flex items-center gap-1.5 pt-2"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet Founders Teaser */}
      <section className="py-20 bg-[#070A0F] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
              <Users className="w-3.5 h-3.5" />
              <span>CO-FOUNDERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Meet the Minds Behind Imako
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Listed in alphabetical order: Imran Mohammedbeyan & Mikiyas Alemu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FOUNDERS.map((f) => (
              <div
                key={f.id}
                className="glow-card rounded-2xl p-7 border border-white/10 hover:border-sky-400/50 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{f.name}</h3>
                    <p className="text-xs text-[#38BDF8] font-mono">{f.role}</p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400">
                    {f.name.split(" ")[0][0]}
                  </span>
                </div>
                <p className="text-xs text-gray-300 italic border-l-2 border-sky-400/50 pl-3">
                  &ldquo;{f.quote}&rdquo;
                </p>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[11px] font-bold text-white block mb-1">Human Element:</span>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {f.humanSide.description}
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] hover:text-[#EF4444] transition-colors"
                >
                  <span>Explore full bio & photo gallery &rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Placeholder Section */}
      <section className="py-20 bg-[#090E18] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-gray-300 border border-white/10">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>CLIENT REPUTATION</span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Client Testimonials
          </h2>
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-[#0D131F] border border-dashed border-white/15 space-y-3">
            <p className="text-sm text-gray-300 italic">
              &ldquo;Formal executive quotes and video endorsements from our recent partners (Bisrat Hotel, Nisir Football Academy, Eyana Hotel, Dr. Abdi Clinic) are currently being finalized for publication.&rdquo;
            </p>
            <span className="text-xs font-mono text-[#38BDF8] block">
              — Verified Client Testimonials Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-[#070A0F] to-[#0D131F]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Automate & Scale Your Business?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Get in touch for a bespoke technical architecture blueprint and project quote. No pricing ambiguity — pure engineering clarity.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all"
            >
              <span>Get Your Project Quote Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
