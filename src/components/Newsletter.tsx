"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setMessage("You're subscribed! Expect high-signal AI automation breakdowns directly in your inbox.");
      setEmail("");
    }, 600);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-[#0D131F]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden glow-card">
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
          <Sparkles className="w-3 h-3 text-[#38BDF8]" />
          <span>MINIMALIST AI INTELLIGENCE BRIEF</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Subscribe to Imako AI Insights
        </h3>
        <p className="text-xs sm:text-sm text-gray-400">
          Get practical workflows, enterprise automation breakdowns, and agency announcements. Zero spam, pure engineering signal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Enter your work email address..."
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#070A0F] border border-white/10 focus:border-[#38BDF8] focus:outline-none text-white text-xs sm:text-sm placeholder:text-gray-500 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#EF4444] hover:brightness-110 transition-all disabled:opacity-50 shadow-[0_0_15px_rgba(56,189,248,0.3)] flex-shrink-0"
          >
            {status === "loading" ? (
              <span>Syncing...</span>
            ) : status === "success" ? (
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-white" /> Subscribed
              </span>
            ) : (
              <>
                <span>Join Intel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {status === "error" && (
          <p className="text-xs text-[#EF4444] font-mono">{message}</p>
        )}
        {status === "success" && (
          <p className="text-xs text-[#38BDF8] font-mono font-bold">{message}</p>
        )}
      </form>
    </div>
  );
}
