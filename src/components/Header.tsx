"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About / Founders", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#E8F6FF]/90 border-b border-[#3BA7F2]/25 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white border border-[#3BA7F2]/40 flex items-center justify-center p-1.5 shadow-sm group-hover:border-[#7FE7D6] transition-colors">
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
            <Cpu className="w-5 h-5 text-[#0B3D91] hidden [only-child]:block" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-tight text-[#0B3D91] flex items-center gap-1.5">
                IMAKO <span className="text-[#3BA7F2]">SOLUTION</span>
              </span>
              <span className="hidden lg:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20">
                AI NATIVE
              </span>
            </div>
            <p className="text-[11px] text-[#0B3D91]/70 tracking-wide font-mono hidden sm:block">
              AI powered solution for real world problems
            </p>
          </div>
        </Link>

        {/* Desktop Navigation across 6 fixed pages */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-bold">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  active
                    ? "text-[#0B3D91] font-black"
                    : "text-[#0B3D91]/75 hover:text-[#3BA7F2]"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7FE7D6] rounded-full shadow-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Get a Quote & Instagram */}
        <div className="hidden sm:flex items-center space-x-2.5">
          <a
            href="https://www.instagram.com/imakosolution"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow @imakosolution on Instagram"
            className="p-2.5 rounded-xl bg-white border border-[#3BA7F2]/40 text-[#0B3D91] hover:text-[#3BA7F2] hover:border-[#7FE7D6] transition-all hover:scale-105 shadow-xs"
          >
            <span className="text-[11px] font-mono font-black">IG</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] hover:brightness-105 shadow-md shadow-[#3BA7F2]/25 transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7FE7D6]" />
            <span className="text-white">Get a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0B3D91] hover:bg-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#3BA7F2]/30 bg-[#E8F6FF] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-bold py-2 px-3 rounded-lg transition-colors ${
                  active
                    ? "bg-[#7FE7D6]/30 text-[#0B3D91] border border-[#7FE7D6]"
                    : "text-[#0B3D91] hover:bg-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] shadow-md"
            >
              Get a Quote / Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
