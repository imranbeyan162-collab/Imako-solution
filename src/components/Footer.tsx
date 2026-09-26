"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  MessageSquare,
  Cloud
} from "lucide-react";
import { Newsletter } from "./Newsletter";

export function Footer() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const socials = [
    {
      name: "TikTok",
      handle: "@imako.digital.agency",
      url: "https://www.tiktok.com/@imako.digital.agency",
      color: "hover:text-[#38BDF8]"
    },
    {
      name: "Telegram",
      handle: "Imako Solution",
      url: "https://t.me/imakosolution",
      color: "hover:text-sky-400"
    },
    {
      name: "LinkedIn",
      handle: "Imako Solution",
      url: "https://www.linkedin.com/company/imako-solution",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      handle: "@imako.digital.agency",
      url: "https://www.instagram.com/imako.digital.agency",
      color: "hover:text-[#EF4444]"
    },
    {
      name: "YouTube",
      handle: "@imakosolution",
      url: "https://www.youtube.com/@imakosolution",
      color: "hover:text-red-500"
    },
    {
      name: "Facebook",
      handle: "Imako Solution",
      url: "https://www.facebook.com/imakosolution",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <footer id="contact" className="relative bg-[#05070B] border-t border-white/10 pt-20 pb-14 text-white scroll-mt-20">
      {/* Background ambient lighting in Sky Blue and Red */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-transparent via-[#38BDF8]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Newsletter Section Embedded */}
        <div className="border-b border-white/10 pb-16">
          <Newsletter />
        </div>

        {/* Core Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Cloud Remote Notice (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-[#38BDF8]/20 via-white/10 to-[#EF4444]/25 border border-sky-400/20 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                <Image
                  src="/imako-logo.png"
                  alt="Imako Solution Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                IMAKO <span className="text-[#38BDF8]">SOLUTION</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Architecting intelligent automation systems, full-stack digital web platforms, and data-driven growth machinery for modern enterprises.
            </p>

            {/* Location Notice: Cloud & Remote First */}
            <div className="p-4 rounded-xl bg-[#0D131F] border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#38BDF8]">
                <Cloud className="w-4 h-4 text-[#EF4444]" />
                <span>Cloud & Remote First Infrastructure</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-normal">
                Distributed engineering without physical office borders. Deploying autonomous solutions and high-conversion software for our clients.
              </p>
            </div>
          </div>

          {/* Col 2: Direct Contact Lines & Email (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
              Official Communication Lines
            </h4>

            <div className="space-y-3">
              {/* Official Email */}
              <div className="p-3.5 rounded-xl bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Official Email</span>
                    <a
                      href="mailto:imakosolution@gmail.com"
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#38BDF8] transition-colors"
                    >
                      imakosolution@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("imakosolution@gmail.com")}
                  title="Copy email"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {copiedText === "imakosolution@gmail.com" ? (
                    <Check className="w-4 h-4 text-[#38BDF8]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Direct Line 1 (WhatsApp) */}
              <div className="p-3.5 rounded-xl bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-[#38BDF8]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
                      Direct Line / WhatsApp 1
                    </span>
                    <a
                      href="https://wa.me/251907173634"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#38BDF8] transition-colors"
                    >
                      +251 907 173 634
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/251907173634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-[#38BDF8] hover:bg-white/5 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Direct Line 2 (WhatsApp - Updated to +251912251113) */}
              <div className="p-3.5 rounded-xl bg-[#0D131F] border border-white/10 hover:border-red-400/40 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 text-[#EF4444]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
                      Direct Line / WhatsApp 2
                    </span>
                    <a
                      href="https://wa.me/251912251113"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#EF4444] transition-colors"
                    >
                      +251 912 251 113
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/251912251113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-[#EF4444] hover:bg-white/5 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Social Ecosystem (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
              Social Ecosystem
            </h4>

            <div className="grid grid-cols-2 gap-2.5">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0D131F] border border-white/10 hover:border-sky-400/30 transition-all flex items-center justify-between group"
                >
                  <div className="min-w-0">
                    <span className={`text-xs font-bold text-gray-200 ${soc.color} transition-colors block truncate`}>
                      {soc.name}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono block truncate">
                      {soc.handle}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Quick Telegram Action */}
            <div className="pt-2">
              <a
                href="https://t.me/imakosolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#38BDF8] bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Join Official Telegram Channel</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Imako Solution. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>AI Automations</span>
            <span>•</span>
            <span>Cloud & Remote First</span>
            <span>•</span>
            <span>Privacy & Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
