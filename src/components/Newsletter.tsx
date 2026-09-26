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
    <div className="w-full max-w-xl mx-auto rounded-3xl bg-white border-2 border-[#CBE5FC] p-6 sm:p-8 shadow-sm relative overflow-hidden">
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-xs">
          <Sparkles className="w-3 h-3 text-[#0B3D91]" />
          <span>MINIMALIST AI INTELLIGENCE BRIEF</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#0B3D91] tracking-tight">
          Subscribe to Imako AI Insights
        </h3>
        <p className="text-xs sm:text-sm text-[#0B3D91]/75 leading-relaxed">
          Get practical workflows, enterprise automation breakdowns, and agency announcements. Zero spam, pure engineering signal.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3BA7F2]" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Enter your work email address..."
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#E8F6FF] border border-[#3BA7F2]/40 focus:border-[#0B3D91] focus:bg-white focus:outline-none text-[#0B3D91] text-xs sm:text-sm placeholder:text-[#0B3D91]/45 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0B3D91] to-[#3BA7F2] hover:brightness-105 transition-all disabled:opacity-50 shadow-md shadow-[#3BA7F2]/25 flex-shrink-0"
          >
            {status === "loading" ? (
              <span>Syncing...</span>
            ) : status === "success" ? (
              <span className="flex items-center gap-1.5 text-[#7FE7D6]">
                <CheckCircle className="w-4 h-4 text-[#7FE7D6]" /> Subscribed
              </span>
            ) : (
              <>
                <span>Join Intel</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#7FE7D6]" />
              </>
            )}
          </button>
        </div>

        {status === "error" && (
          <p className="text-xs text-[#0B3D91] font-mono font-bold bg-[#7FE7D6]/20 p-2 rounded">{message}</p>
        )}
        {status === "success" && (
          <p className="text-xs text-[#0B3D91] font-mono font-bold bg-[#7FE7D6]/30 p-2 rounded">{message}</p>
        )}
      </form>
    </div>
  );
}
