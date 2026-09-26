"use client";

import React from "react";
import { Bot, Cpu, Database, Workflow, Zap, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation",
      description:
        "Connect disjointed systems into synchronized pipelines. We automate data entry, invoice handling, cross-platform syncing, and report generation without human intervention.",
      badge: "Zero Manual Backlog",
      accent: "text-[#38BDF8]",
      border: "hover:border-[#38BDF8]/60"
    },
    {
      icon: Bot,
      title: "WhatsApp & Telegram AI Agents",
      description:
        "Deploy custom multilingual AI assistants connected directly to your database. Handles customer triage, live appointment bookings, order tracking, and lead qualification.",
      badge: "24/7 Real-Time Triage",
      accent: "text-[#EF4444]",
      border: "hover:border-[#EF4444]/60"
    },
    {
      icon: Cpu,
      title: "High-Conversion Web Architecture",
      description:
        "Full-stack Next.js and React enterprise portals optimized for sub-second speeds, modern responsive UI, automated payment verifications (CBE, Telebirr), and seamless CMS.",
      badge: "Sub-Second Speeds",
      accent: "text-white",
      border: "hover:border-sky-400/50"
    },
    {
      icon: Database,
      title: "Custom CRM & Database Integration",
      description:
        "Unified operational dashboards that eliminate spreadsheet chaos. Centralize client records, payment verifications, and real-time team analytics with role-based permissions.",
      badge: "100% Data Integrity",
      accent: "text-[#38BDF8]",
      border: "hover:border-[#38BDF8]/60"
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#070A0F] border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
            <Zap className="w-3.5 h-3.5" />
            <span>FULL-SPECTRUM DIGITAL ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How Imako Automates Your Operations
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            From autonomous AI agents to high-volume custom web applications, we replace friction with seamless code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className={`glow-card rounded-2xl p-8 border border-white/10 ${svc.border} transition-all duration-300 flex flex-col justify-between space-y-6`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${svc.accent}`} />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/251907173634?text=Hello%20Imako%20Solution,%20I'd%20like%20to%20learn%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#38BDF8] transition-colors"
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#EF4444]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
