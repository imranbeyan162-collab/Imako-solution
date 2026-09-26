"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, MessageSquare, Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#070A0F]/90 border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
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
            <Cpu className="w-5 h-5 text-[#38BDF8] hidden [only-child]:block" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                IMAKO <span className="text-[#38BDF8]">SOLUTION</span>
              </span>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
                AI & WEB
              </span>
            </div>
            <p className="text-[11px] text-gray-400 tracking-wide font-mono hidden sm:block">
              AI Automations & High-Conversion Digital Systems
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#roi-simulator" className="hover:text-[#38BDF8] transition-colors flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            ROI Simulator
          </a>
          <a href="#portfolio" className="hover:text-[#38BDF8] transition-colors">
            Portfolio
          </a>
          <a href="#services" className="hover:text-[#38BDF8] transition-colors">
            AI Capabilities
          </a>
          <a href="#contact" className="hover:text-[#38BDF8] transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="https://wa.me/251907173634?text=Hello%20Imako%20Solution,%20I'd%20like%20to%20discuss%20an%20AI%20automation%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat On WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0D131F]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4">
          <a
            href="#roi-simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#38BDF8] py-2"
          >
            ⚡ ROI / Time-Saved Simulator
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#38BDF8] py-2"
          >
            💼 Portfolio Case Studies (7 Projects)
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#38BDF8] py-2"
          >
            🤖 AI Automation Services
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-gray-200 hover:text-[#38BDF8] py-2"
          >
            📬 Contact & Hotlines
          </a>
          <div className="pt-2">
            <a
              href="https://wa.me/251907173634"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center block py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444]"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
