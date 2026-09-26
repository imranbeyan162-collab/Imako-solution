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
      color: "hover:text-[#0284C7]"
    },
    {
      name: "Telegram",
      handle: "Imako Solution",
      url: "https://t.me/imakosolution",
      color: "hover:text-[#0284C7]"
    },
    {
      name: "LinkedIn",
      handle: "Imako Solution",
      url: "https://www.linkedin.com/company/imako-solution",
      color: "hover:text-blue-600"
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
      color: "hover:text-red-600"
    },
    {
      name: "Facebook",
      handle: "Imako Solution",
      url: "https://www.facebook.com/imakosolution",
      color: "hover:text-blue-700"
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
    <footer id="contact" className="relative bg-[#F1F5F9] border-t border-slate-200 pt-20 pb-14 text-slate-700 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Newsletter Section Embedded */}
        <div className="border-b border-slate-200 pb-16">
          <Newsletter />
        </div>

        {/* Core Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Remote First Notice (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center p-1.5 shadow-sm">
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
              <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                IMAKO <span className="text-[#0284C7]">SOLUTION</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              AI powered solution for real world problems. Engineering autonomous workflows, high-converting digital platforms, and machine learning infrastructure for visionary companies.
            </p>

            {/* Remote Notice */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7]">
                <Cloud className="w-4 h-4 text-[#EF4444]" />
                <span>Remote & Cloud First Operations</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                No physical office borders. We operate 100% remote and online, engineering software for clients across East Africa and worldwide.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-[#0284C7] font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Lines & Email (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Official Communication
            </h4>

            <div className="space-y-2.5">
              {/* Email */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] transition-colors flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] text-slate-400 uppercase block font-mono">Official Email</span>
                  <a
                    href="mailto:imakosolution@gmail.com"
                    className="text-xs font-mono text-slate-800 hover:text-[#0284C7] font-semibold transition-colors truncate block"
                  >
                    imakosolution@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("imakosolution@gmail.com")}
                  title="Copy email"
                  className="p-1 rounded text-slate-400 hover:text-slate-800"
                >
                  {copiedText === "imakosolution@gmail.com" ? (
                    <Check className="w-3.5 h-3.5 text-[#0284C7]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Imran Phone */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] transition-colors flex items-center justify-between">
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase block font-mono">Founder Line 1 (Imran)</span>
                  <a
                    href="https://wa.me/251907173634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-800 hover:text-[#0284C7] font-semibold transition-colors"
                  >
                    +251 907 173 634
                  </a>
                </div>
                <a
                  href="https://wa.me/251907173634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-[#0284C7] hover:brightness-110"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Mikiyas Phone */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-red-300 transition-colors flex items-center justify-between">
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 uppercase block font-mono">Founder Line 2 (Mikiyas)</span>
                  <a
                    href="https://wa.me/251912251113"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-800 hover:text-[#EF4444] font-semibold transition-colors"
                  >
                    +251 912 251 113
                  </a>
                </div>
                <a
                  href="https://wa.me/251912251113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-[#EF4444] hover:brightness-110"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Social Ecosystem (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Social Ecosystem
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] transition-all flex items-center justify-between group"
                >
                  <span className={`text-xs font-bold text-slate-700 ${soc.color} transition-colors block truncate`}>
                    {soc.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>
              ))}
            </div>

            <div className="pt-1">
              <a
                href="https://t.me/imakosolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold text-[#0284C7] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Join Official Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Imako Solution. Founded July 27, 2026. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-[#0284C7]">About Founders</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-[#0284C7]">Services</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#0284C7]">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
