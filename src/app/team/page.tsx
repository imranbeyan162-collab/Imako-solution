"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TEAM_MEMBERS, DEPARTMENTS, TeamMember } from "@/data/teamData";
import { Users, Sparkles, ArrowRight, Code, Shield, UserPlus } from "lucide-react";

export default function TeamPage() {
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredMembers = selectedDept === "All"
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <main className="min-h-screen bg-[#070A0F] text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-[#38BDF8] border border-sky-400/25">
            <Users className="w-3.5 h-3.5" />
            <span>SPECIALIZED ENGINEERING SQUAD</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Our Extended{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] via-white to-[#EF4444] bg-clip-text text-transparent">
              Technical Team
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Distinct from our executive founders, the Imako technical roster brings together specialized engineers, creative media designers, and growth architects executing on daily client sprints.
          </p>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedDept === dept
                  ? "bg-[#38BDF8] text-black shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "bg-[#0D131F] text-gray-400 hover:text-white border border-white/5 hover:border-sky-400/30"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Reusable Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member: TeamMember) => (
            <div
              key={member.id}
              className="glow-card rounded-2xl bg-[#0D131F] border border-white/10 p-7 hover:border-sky-400/50 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Avatar Placeholder Slot */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#141C2E] border border-white/10 flex items-center justify-center text-xl font-black text-gray-300 group-hover:border-sky-400/40 transition-colors">
                    {member.name.split(" ")[0][0]}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-[#38BDF8] border border-white/5">
                    {member.department}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-gray-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Active Member Slot</span>
                <span className="text-[#38BDF8]">Assigned</span>
              </div>
            </div>
          ))}

          {/* We're Hiring Card */}
          <div className="rounded-2xl bg-gradient-to-tr from-[#0D131F] to-[#141C2E] border-2 border-dashed border-sky-400/30 p-7 flex flex-col justify-between space-y-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center mx-auto text-[#38BDF8]">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Join the Imako Squad</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We are actively looking for exceptional AI automation engineers, Next.js frontend masters, and performance marketers.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-[#38BDF8] hover:text-black transition-all"
            >
              <span>Submit General Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Note on Founder Distinction */}
        <div className="rounded-2xl bg-[#0D131F] border border-white/5 p-6 text-center text-xs text-gray-400">
          Looking for company leadership and co-founder bios?{" "}
          <Link href="/about" className="text-[#38BDF8] hover:underline font-bold">
            Visit the Founders Page &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
