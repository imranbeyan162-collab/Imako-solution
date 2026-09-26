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
      color: "text-[#0B3D91] hover:text-[#3BA7F2]"
    },
    {
      name: "Telegram",
      handle: "Imako Solution",
      url: "https://t.me/imakosolution",
      color: "text-[#0B3D91] hover:text-[#3BA7F2]"
    },
    {
      name: "LinkedIn",
      handle: "Imako Solution",
      url: "https://www.linkedin.com/company/imako-solution",
      color: "text-[#0B3D91] hover:text-[#3BA7F2]"
    },
    {
      name: "Instagram",
      handle: "@imakosolution",
      url: "https://www.instagram.com/imakosolution",
      color: "text-[#0B3D91] hover:text-[#3BA7F2]"
    },
    {
      name: "YouTube",
      handle: "@imakosolution",
      url: "https://www.youtube.com/@imakosolution",
      color: "text-[#0B3D91] hover:text-[#3BA7F2]"
    },
    {
      name: "Facebook",
      handle: "Imako Solution",
      url: "https://www.facebook.com/imakosolution",
      color: "text-[#0B3D91] hover:text-[#3BA7F2]"
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
    <footer id="contact" className="relative bg-[#E8F6FF] border-t-2 border-[#CBE5FC] pt-20 pb-14 text-[#0B3D91] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Newsletter Section Embedded */}
        <div className="border-b border-[#3BA7F2]/25 pb-16">
          <Newsletter />
        </div>

        {/* Core Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Remote First Notice (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-[#3BA7F2]/40 flex items-center justify-center p-1.5 shadow-sm">
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
              <span className="text-xl font-black tracking-tight text-[#0B3D91] flex items-center gap-1.5">
                IMAKO <span className="text-[#3BA7F2]">SOLUTION</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#0B3D91]/80 leading-relaxed max-w-sm">
              AI powered solution for real world problems. Engineering autonomous workflows, high-converting digital platforms, and machine learning infrastructure for visionary companies.
            </p>

            {/* Remote Notice in Mint & Ocean */}
            <div className="p-4 rounded-2xl bg-white border-2 border-[#7FE7D6]/60 shadow-sm space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B3D91]">
                <Cloud className="w-4 h-4 text-[#3BA7F2]" />
                <span>Remote & Cloud First Operations</span>
              </div>
              <p className="text-[11px] text-[#0B3D91]/70 leading-normal">
                No physical office borders. We operate 100% remote and online, engineering software for clients across East Africa and worldwide.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#0B3D91] font-black">
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#0B3D91]/80 hover:text-[#3BA7F2] font-semibold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Lines & Email (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#0B3D91] font-black">
              Official Communication
            </h4>

            <div className="space-y-2.5">
              {/* Email */}
              <div className="p-3 rounded-2xl bg-white border border-[#CBE5FC] shadow-sm hover:border-[#3BA7F2] transition-colors flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] text-[#3BA7F2] uppercase block font-mono font-bold">Official Email</span>
                  <a
                    href="mailto:imakosolution@gmail.com"
                    className="text-xs font-mono text-[#0B3D91] hover:text-[#3BA7F2] font-bold transition-colors truncate block"
                  >
                    imakosolution@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("imakosolution@gmail.com")}
                  title="Copy email"
                  className="p-1.5 rounded-lg text-[#0B3D91]/60 hover:text-[#0B3D91] hover:bg-[#E8F6FF]"
                >
                  {copiedText === "imakosolution@gmail.com" ? (
                    <Check className="w-3.5 h-3.5 text-[#0B3D91]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Imran Phone */}
              <div className="p-3 rounded-2xl bg-white border border-[#CBE5FC] shadow-sm hover:border-[#3BA7F2] transition-colors flex items-center justify-between">
                <div className="min-w-0">
                  <span className="text-[10px] text-[#3BA7F2] uppercase block font-mono font-bold">Founder Line 1 (Imran)</span>
                  <a
                    href="https://wa.me/251912251113"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#0B3D91] hover:text-[#3BA7F2] font-bold transition-colors"
                  >
                    +251 912 251 113
                  </a>
                </div>
                <a
                  href="https://wa.me/251912251113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#7FE7D6]/40 text-[#0B3D91] hover:bg-[#7FE7D6]"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Mikiyas Phone */}
              <div className="p-3 rounded-2xl bg-white border border-[#CBE5FC] shadow-sm hover:border-[#7FE7D6] transition-colors flex items-center justify-between">
                <div className="min-w-0">
                  <span className="text-[10px] text-[#0B3D91] uppercase block font-mono font-bold">Founder Line 2 (Mikiyas)</span>
                  <a
                    href="https://wa.me/251907173634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#0B3D91] hover:text-[#3BA7F2] font-bold transition-colors"
                  >
                    +251 907 173 634
                  </a>
                </div>
                <a
                  href="https://wa.me/251907173634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#7FE7D6]/40 text-[#0B3D91] hover:bg-[#7FE7D6]"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Social Ecosystem (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#0B3D91] font-black">
              Social Ecosystem
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-[#CBE5FC] shadow-xs hover:border-[#7FE7D6] hover:bg-[#E8F6FF] transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(59,167,242,0.25)] flex items-center justify-between group"
                >
                  <span className={`text-xs font-bold ${soc.color} transition-colors block truncate`}>
                    {soc.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-[#3BA7F2] group-hover:text-[#0B3D91] transition-colors" />
                </a>
              ))}
            </div>

            <div className="pt-1">
              <a
                href="https://t.me/imakosolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0B3D91] to-[#3BA7F2] hover:brightness-105 shadow-md shadow-[#3BA7F2]/25 hover:shadow-[0_10px_25px_rgba(59,167,242,0.35)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 group hover-cinematic"
              >
                <Send className="w-3.5 h-3.5 text-[#7FE7D6]" />
                <span>Join Official Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-[#3BA7F2]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#0B3D91]/70 font-mono">
          <p>© {new Date().getFullYear()} Imako Solution. Founded July 27, 2026. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-[#0B3D91] font-semibold">About Founders</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-[#0B3D91] font-semibold">Services</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#0B3D91] font-semibold">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
