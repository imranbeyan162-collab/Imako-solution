"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, PhoneCall, Mail, ArrowUpRight, Check } from "lucide-react";

export function FloatingContactDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  // Close on escape key or outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dockRef.current && !dockRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(text);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  const defaultMessage = encodeURIComponent(
    "Hello Imako Solution! I'm interested in your AI automations and web platform services."
  );

  return (
    <div ref={dockRef} className="fixed bottom-6 right-6 z-50 select-none">
      {/* Expanded Quick-Chat Drawer / Menu */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0D131F]/95 backdrop-blur-2xl border border-sky-400/40 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.25)] p-5 text-white animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2.5">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EF4444]" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                  Imako Solution <span className="text-[#38BDF8]">Direct Desk</span>
                </h4>
                <p className="text-[11px] text-gray-400 font-mono">
                  Active • Avg response &lt;15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close contact dock"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Chat Channels List */}
          <div className="mt-3.5 space-y-2.5">
            {/* WhatsApp Line 1 */}
            <div className="group rounded-xl bg-[#121A2A] hover:bg-[#172237] border border-white/5 hover:border-sky-400/50 p-3 transition-all flex items-center justify-between">
              <a
                href={`https://wa.me/251907173634?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 flex-1 min-w-0"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center flex-shrink-0 text-[#38BDF8]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      WhatsApp Line 1
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-500/20 text-[#38BDF8] font-mono font-bold">
                      Primary
                    </span>
                  </div>
                  <p className="text-xs font-mono text-gray-300 truncate">+251 907 173 634</p>
                </div>
              </a>
              <div className="flex items-center gap-1 pl-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard("+251907173634")}
                  title="Copy number"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-[#38BDF8] hover:bg-white/5"
                >
                  {copiedNumber === "+251907173634" ? (
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                  ) : (
                    <span className="text-[10px] font-mono">Copy</span>
                  )}
                </button>
                <a
                  href={`https://wa.me/251907173634?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-gray-400 group-hover:text-white"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* WhatsApp Line 2 (Updated to +251912251113) */}
            <div className="group rounded-xl bg-[#121A2A] hover:bg-[#172237] border border-white/5 hover:border-red-400/50 p-3 transition-all flex items-center justify-between">
              <a
                href={`https://wa.me/251912251113?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 flex-1 min-w-0"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center flex-shrink-0 text-[#EF4444]">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white group-hover:text-[#EF4444] transition-colors">
                      WhatsApp Line 2
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-500/20 text-[#EF4444] font-mono font-bold">
                      Direct
                    </span>
                  </div>
                  <p className="text-xs font-mono text-gray-300 truncate">+251 912 251 113</p>
                </div>
              </a>
              <div className="flex items-center gap-1 pl-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard("+251912251113")}
                  title="Copy number"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-[#EF4444] hover:bg-white/5"
                >
                  {copiedNumber === "+251912251113" ? (
                    <Check className="w-3.5 h-3.5 text-[#EF4444]" />
                  ) : (
                    <span className="text-[10px] font-mono">Copy</span>
                  )}
                </button>
                <a
                  href={`https://wa.me/251912251113?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-gray-400 group-hover:text-white"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Telegram: Imako Solution */}
            <a
              href="https://t.me/imakosolution"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-[#121A2A] hover:bg-[#172237] border border-white/5 hover:border-sky-400/50 p-3 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center flex-shrink-0 text-[#38BDF8]">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    Telegram: Imako Solution
                  </span>
                  <p className="text-[11px] text-gray-400 font-mono">@imakosolution channel & direct chat</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>

            {/* Official Email */}
            <a
              href="mailto:imakosolution@gmail.com"
              className="group rounded-xl bg-[#121A2A] hover:bg-[#172237] border border-white/5 hover:border-white/20 p-3 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    Official Agency Email
                  </span>
                  <p className="text-[11px] text-gray-400 font-mono truncate">imakosolution@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </a>
          </div>

          {/* Micro Footer Notice */}
          <div className="mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-400 font-mono">
            <span>Fast Turnaround</span>
            <span className="text-[#38BDF8] font-bold">Cloud & Remote First</span>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#0D131F] via-[#121A2A] to-[#0D131F] border border-sky-400/50 hover:border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.35),0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(56,189,248,0.55)] transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Toggle contact menu"
      >
        {/* Pulsing indicator in Red */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EF4444]" />
        </span>

        {/* Text and Icon in Sky Blue & White */}
        <span className="text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
          <MessageSquare className="w-4 h-4 text-[#38BDF8]" />
          <span>Quick Chat</span>
        </span>

        {/* Micro brand tag */}
        <span className="hidden sm:inline-flex text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-sky-500/15 text-[#38BDF8] border border-sky-400/30">
          WhatsApp & TG
        </span>
      </button>
    </div>
  );
}
