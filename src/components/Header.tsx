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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-sky-50 via-white to-red-50 border border-slate-200 flex items-center justify-center p-1.5 shadow-sm group-hover:border-[#0284C7] transition-colors">
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
            <Cpu className="w-5 h-5 text-[#0284C7] hidden [only-child]:block" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                IMAKO <span className="text-[#0284C7]">SOLUTION</span>
              </span>
              <span className="hidden lg:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-[#DC2626] border border-red-200">
                AI NATIVE
              </span>
            </div>
            <p className="text-[11px] text-slate-500 tracking-wide font-mono hidden sm:block">
              AI powered solution for real world problems
            </p>
          </div>
        </Link>

        {/* Desktop Navigation across 6 fixed pages */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  active
                    ? "text-[#0284C7] font-bold"
                    : "text-slate-600 hover:text-[#0284C7]"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0284C7] rounded-full shadow-sm" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Get a Quote */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] hover:brightness-105 shadow-md shadow-sky-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${
                  active
                    ? "bg-sky-50 text-[#0284C7] border border-sky-200"
                    : "text-slate-700 hover:bg-slate-100"
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
              className="w-full text-center block py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] shadow-md"
            >
              Get a Quote / Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
