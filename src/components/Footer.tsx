"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About / Founders", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Our Team", href: "/team" },
    { name: "Contact & Quote", href: "/contact" }
  ];

  return (
    <footer id="contact" className="relative bg-[#05070B] border-t border-white/10 pt-20 pb-14 text-white scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-transparent via-[#38BDF8]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Newsletter Section Embedded */}
        <div className="border-b border-white/10 pb-16">
          <Newsletter />
        </div>

        {/* Core Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Remote First Notice (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center space-x-3">
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
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              AI powered solution for real world problems. Engineering autonomous workflows, high-converting digital platforms, and machine learning infrastructure for visionary companies.
            </p>

            {/* Remote Notice */}
            <div className="p-4 rounded-xl bg-[#0D131F] border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#38BDF8]">
                <Cloud className="w-4 h-4 text-[#EF4444]" />
                <span>Remote & Cloud First Operations</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-normal">
                No physical office borders. We operate 100% remote and online, engineering software for clients across East Africa and worldwide.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#38BDF8] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Lines & Email (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
              Official Communication
            </h4>

            <div className="space-y-2.5">
              {/* Email */}
              <div className="p-3 rounded-xl bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-colors flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] text-gray-500 uppercase block font-mono">Official Email</span>
                  <a
                    href="mailto:imakosolution@gmail.com"
                    className="text-xs font-mono text-white hover:text-[#38BDF8] transition-colors truncate block"
                  >
                    imakosolution@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("imakosolution@gmail.com")}
                  title="Copy email"
                  className="p-1 rounded text-gray-400 hover:text-white"
                >
                  {copiedText === "imakosolution@gmail.com" ? (
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Imran Phone */}
              <div className="p-3 rounded-xl bg-[#0D131F] border border-white/10 hover:border-sky-400/40 transition-colors flex items-center justify-between">
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-500 uppercase block font-mono">Founder Line 1</span>
                  <a
                    href="https://wa.me/251907173634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-white hover:text-[#38BDF8] transition-colors"
                  >
                    +251 907 173 634
                  </a>
                </div>
                <a
                  href="https://wa.me/251907173634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-gray-400 hover:text-[#38BDF8]"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Mikiyas Phone */}
              <div className="p-3 rounded-xl bg-[#0D131F] border border-white/10 hover:border-red-400/40 transition-colors flex items-center justify-between">
                <div className="min-w-0">
                  <span className="text-[10px] text-gray-500 uppercase block font-mono">Founder Line 2</span>
                  <a
                    href="https://wa.me/251912251113"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-white hover:text-[#EF4444] transition-colors"
                  >
                    +251 912 251 113
                  </a>
                </div>
                <a
                  href="https://wa.me/251912251113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-gray-400 hover:text-[#EF4444]"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Social Ecosystem (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
              Social Ecosystem
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0D131F] border border-white/10 hover:border-sky-400/30 transition-all flex items-center justify-between group"
                >
                  <span className={`text-xs font-bold text-gray-200 ${soc.color} transition-colors block truncate`}>
                    {soc.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            <div className="pt-1">
              <a
                href="https://t.me/imakosolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold text-[#38BDF8] bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Join Official Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Imako Solution. Founded July 27, 2026. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-gray-300">About Founders</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-gray-300">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
