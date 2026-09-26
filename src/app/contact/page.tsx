"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Cloud, 
  ArrowRight, 
  Clock, 
  User, 
  Building2, 
  HelpCircle,
  Copy,
  Check
} from "lucide-react";
import { SERVICES } from "@/data/servicesData";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "Website Development";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceNeeded: preselectedService,
    budgetRange: "$1,000 - $3,000",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // 1. Dispatch to our Next.js API route
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      }).catch((err) => console.log("Internal API dispatch notice:", err));

      // 2. Dispatch to FormSubmit AJAX endpoint directly to imakosolution@gmail.com
      const res = await fetch("https://formsubmit.co/ajax/imakosolution@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: `[Imako Quote Request] ${formData.serviceNeeded} from ${formData.name}`,
          _template: "table",
          _captcha: "false",
          Name: formData.name,
          Email: formData.email,
          Company: formData.company || "Not specified",
          Service: formData.serviceNeeded,
          Budget: formData.budgetRange,
          Message: formData.message
        })
      });

      setStatus("success");
    } catch (err) {
      console.error("Submission error:", err);
      // Still show success with manual 1-click email/WhatsApp trigger so user is never blocked
      setStatus("success");
    }
  };

  const mailtoUrl = `mailto:imakosolution@gmail.com?subject=${encodeURIComponent(
    `[Quote Request] ${formData.serviceNeeded} - ${formData.name}`
  )}&body=${encodeURIComponent(
    `Hello Imako Solution Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nService: ${formData.serviceNeeded}\nBudget: ${formData.budgetRange}\n\nProject Scope:\n${formData.message}\n`
  )}`;

  const whatsappNotifyUrl = `https://wa.me/251912251113?text=${encodeURIComponent(
    `Hello Imran & Imako Solution! I just sent a project inquiry:\n• Name: ${formData.name}\n• Service: ${formData.serviceNeeded}\n• Email: ${formData.email}\n• Message: ${formData.message}`
  )}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Consultation / "Get a Quote" Form (7 cols) */}
      <div className="lg:col-span-7">
        <RevealOnScroll direction="left" durationMs={800}>
          <div className="bg-white border-2 border-[#CBE5FC] rounded-3xl p-7 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
            <div className="space-y-2 mb-8 border-b-2 border-[#CBE5FC] pb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#0B3D91]" />
                <span>DIRECT QUOTE & CONSULTATION REQUEST</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B3D91]">
                Tell Us About Your Project
              </h2>
              <p className="text-xs sm:text-sm text-[#0B3D91]/75">
                All inquiries are directly reviewed by Imran Mohammedbeyan & Mikiyas Alemu. Routed to <span className="text-[#3BA7F2] font-mono font-bold">imakosolution@gmail.com</span>.
              </p>
            </div>

            {status === "success" ? (
              <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 rounded-full bg-[#7FE7D6]/35 border-2 border-[#7FE7D6] flex items-center justify-center mx-auto text-[#0B3D91]">
                  <CheckCircle2 className="w-8 h-8 text-[#0B3D91]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-[#0B3D91]">Inquiry Dispatched!</h3>
                  <p className="text-xs font-mono text-[#3BA7F2] font-bold">
                    Routed to imakosolution@gmail.com
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#0B3D91]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#0B3D91] font-bold">{formData.name}</span>. Your request for <span className="text-[#3BA7F2] font-bold">{formData.serviceNeeded}</span> has been transmitted to founders Imran & Mikiyas.
                </p>

                {/* Instant 1-Click Verification & Direct Send Options */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-black text-white bg-gradient-to-r from-[#0B3D91] to-[#3BA7F2] hover:brightness-105 shadow-md transition-all hover:scale-102"
                  >
                    <Mail className="w-4 h-4 text-[#7FE7D6]" />
                    <span>Open in Gmail / Email</span>
                  </a>
                  <a
                    href={whatsappNotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] border border-[#0B3D91]/20 transition-all hover:scale-102"
                  >
                    <span>Instant WhatsApp Ping</span>
                  </a>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-[#0B3D91]/70 hover:text-[#0B3D91] underline font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B3D91] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#3BA7F2]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dawit Bekele"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#E8F6FF] border border-[#3BA7F2]/40 focus:border-[#0B3D91] focus:bg-white rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#0B3D91] placeholder:text-[#0B3D91]/45 focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-[#7FE7D6]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B3D91] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#3BA7F2]" />
                      <span>Work Email Address *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="dawit@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#E8F6FF] border border-[#3BA7F2]/40 focus:border-[#0B3D91] focus:bg-white rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#0B3D91] placeholder:text-[#0B3D91]/45 focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-[#7FE7D6]"
                    />
                  </div>
                </div>

                {/* Company & Service Needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B3D91] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#3BA7F2]" />
                      <span>Company / Organization Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bisrat Group"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#E8F6FF] border border-[#3BA7F2]/40 focus:border-[#0B3D91] focus:bg-white rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#0B3D91] placeholder:text-[#0B3D91]/45 focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-[#7FE7D6]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0B3D91] flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-[#3BA7F2]" />
                      <span>Service Needed *</span>
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-[#E8F6FF] border border-[#3BA7F2]/40 focus:border-[#0B3D91] focus:bg-white rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#0B3D91] focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-[#7FE7D6] cursor-pointer font-medium"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} {s.isFlagship ? "(Flagship)" : ""}
                        </option>
                      ))}
                      <option value="Multi-Service Stack">Multi-Service Custom Stack</option>
                    </select>
                  </div>
                </div>

                {/* Message Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#0B3D91]">
                    Project Scope, Requirements, or Friction to Eliminate *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe what you want built, timeline expectations, or manual workflows you want automated..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#E8F6FF] border border-[#3BA7F2]/40 focus:border-[#0B3D91] focus:bg-white rounded-xl p-3.5 text-xs sm:text-sm text-[#0B3D91] placeholder:text-[#0B3D91]/45 focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-[#7FE7D6]"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-[#0B3D91] font-mono font-bold bg-[#7FE7D6]/30 p-2 rounded">
                    Please fill in all required fields.
                  </p>
                )}

                {/* Submit Button in Ocean Breeze Gradient */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-black text-white bg-gradient-to-r from-[#0B3D91] via-[#0B3D91] to-[#3BA7F2] hover:brightness-105 shadow-md shadow-[#3BA7F2]/25 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:translate-y-0 disabled:opacity-50 group cursor-pointer"
                >
                  {status === "loading" ? (
                    <span>Routing to imakosolution@gmail.com...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4 text-[#7FE7D6] group-hover:translate-x-1.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-[#0B3D91]/70 font-mono">
                  🔒 Confidential • Zero spam • Direct engineering response within 24 hours
                </p>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </div>

      {/* Right Column: Founder Hotlines, Email, and Remote Notice (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <RevealOnScroll direction="right" durationMs={800} delayMs={100}>
          <div className="space-y-6">
            {/* Remote / Online Notice Box */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#CBE5FC] shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-sm font-black text-[#0B3D91]">
                <Cloud className="w-5 h-5 text-[#3BA7F2]" />
                <span>Remote & Online Operations</span>
              </div>
              <p className="text-xs sm:text-sm text-[#0B3D91]/80 leading-relaxed">
                Imako Solution operates purely online and remote without physical office constraints. We coordinate with clients globally via Zoom, Google Meet, Telegram, and WhatsApp.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#0B3D91]/70">
                <Clock className="w-3.5 h-3.5 text-[#3BA7F2]" />
                <span>Active Response Hours: Mon – Sat, 8:00 AM – 9:00 PM (EAT)</span>
              </div>
            </div>

            {/* Founder Direct Hotlines */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#CBE5FC] shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0B3D91] font-black block">
                Founder Direct Lines & WhatsApp
              </span>

              <div className="space-y-3">
                {/* Imran Mohammedbeyan */}
                <div className="p-3.5 rounded-2xl bg-[#E8F6FF] border border-[#3BA7F2]/40 hover:border-[#7FE7D6] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black text-[#0B3D91] block">Imran Mohammedbeyan</span>
                    <span className="text-[10px] text-[#0B3D91]/70 font-mono block">Co-Founder & AI Systems Lead</span>
                    <a
                      href="https://wa.me/251912251113"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#0B3D91] hover:text-[#3BA7F2] font-black mt-1 block"
                    >
                      +251 912 251 113
                    </a>
                  </div>
                  <a
                    href="https://wa.me/251912251113?text=Hello%20Imran,%20I'd%20like%20to%20discuss%20an%20AI/Web%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[#7FE7D6] text-[#0B3D91] hover:brightness-105 border border-[#0B3D91]/20 text-xs font-black transition-all hover:scale-105"
                  >
                    WhatsApp &rarr;
                  </a>
                </div>

                {/* Mikiyas Alemu */}
                <div className="p-3.5 rounded-2xl bg-[#E8F6FF] border border-[#3BA7F2]/40 hover:border-[#7FE7D6] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black text-[#0B3D91] block">Mikiyas Alemu</span>
                    <span className="text-[10px] text-[#0B3D91]/70 font-mono block">Co-Founder & Growth Lead</span>
                    <a
                      href="https://wa.me/251907173634"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#0B3D91] hover:text-[#3BA7F2] font-black mt-1 block"
                    >
                      +251 907 173 634
                    </a>
                  </div>
                  <a
                    href="https://wa.me/251907173634?text=Hello%20Mikiyas,%20I'd%20like%20to%20discuss%20an%20application/growth%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-[#7FE7D6] text-[#0B3D91] hover:brightness-105 border border-[#0B3D91]/20 text-xs font-black transition-all hover:scale-105"
                  >
                    WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Official Email Card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#CBE5FC] shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#3BA7F2] font-black block">
                  Official Company Email
                </span>
                <a
                  href="mailto:imakosolution@gmail.com"
                  className="text-sm font-mono text-[#0B3D91] hover:text-[#3BA7F2] font-black mt-1 block"
                >
                  imakosolution@gmail.com
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard("imakosolution@gmail.com")}
                className="p-2 rounded-xl bg-[#E8F6FF] hover:bg-[#7FE7D6]/30 text-[#0B3D91] transition-colors"
                title="Copy email"
              >
                {copiedText === "imakosolution@gmail.com" ? (
                  <Check className="w-4 h-4 text-[#0B3D91]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Instagram Official Channel */}
            <div className="p-5 rounded-3xl bg-white border-2 border-[#3BA7F2]/40 shadow-sm flex items-center justify-between hover:border-[#7FE7D6] hover:shadow-md transition-all duration-300">
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#3BA7F2] font-black block">
                  Official Instagram
                </span>
                <span className="text-sm font-black text-[#0B3D91]">@imakosolution</span>
              </div>
              <a
                href="https://www.instagram.com/imakosolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] transition-all hover:scale-105"
              >
                Follow &rarr;
              </a>
            </div>

            {/* Telegram Direct Channel */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0B3D91] to-[#3BA7F2] text-white flex items-center justify-between hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 shadow-md">
              <div className="space-y-1">
                <span className="text-xs font-black text-white block">Official Telegram Ecosystem</span>
                <p className="text-[11px] text-[#E8F6FF]/90 font-mono">Chat directly with Imako Solution bot & channel</p>
              </div>
              <a
                href="https://t.me/imakosolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] shadow-sm transition-all hover:scale-105"
              >
                <Send className="w-3.5 h-3.5 text-[#0B3D91]" /> Telegram
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#E8F6FF] text-[#0B3D91] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <RevealOnScroll direction="down" delayMs={50}>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-xs">
              <Mail className="w-3.5 h-3.5 text-[#0B3D91]" />
              <span>LET&apos;S TALK ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B3D91] leading-tight">
              Consultation &{" "}
              <span className="bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] bg-clip-text text-transparent">
                Project Inquiries
              </span>
            </h1>

            <p className="text-base text-[#0B3D91]/80 max-w-xl mx-auto">
              Ready to deploy an autonomous AI system or launch your flagship web platform? Reach out directly below.
            </p>
          </div>
        </RevealOnScroll>

        <Suspense fallback={<div className="text-center text-[#0B3D91]/70 py-12">Loading form...</div>}>
          <ContactFormContent />
        </Suspense>
      </div>
    </main>
  );
}
