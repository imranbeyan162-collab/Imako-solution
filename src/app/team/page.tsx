"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TEAM_MEMBERS, DEPARTMENTS, TeamMember } from "@/data/teamData";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Users, ArrowRight, UserPlus } from "lucide-react";

export default function TeamPage() {
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredMembers = selectedDept === "All"
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <RevealOnScroll direction="down" delayMs={50}>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-50 text-[#0284C7] border border-sky-200 shadow-xs">
              <Users className="w-3.5 h-3.5" />
              <span>SPECIALIZED ENGINEERING SQUAD</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Our Extended{" "}
              <span className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#EF4444] bg-clip-text text-transparent">
                Technical Team
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Distinct from our executive founders, the Imako technical roster brings together specialized engineers, creative media designers, and growth architects executing on daily client sprints.
            </p>
          </div>
        </RevealOnScroll>

        {/* Department Filter Tabs with smooth transitions */}
        <RevealOnScroll direction="up" delayMs={100}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                  selectedDept === dept
                    ? "bg-[#0284C7] text-white shadow-md shadow-sky-500/25 scale-102"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Reusable Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member: TeamMember, mIdx: number) => (
            <RevealOnScroll key={member.id} direction="up" delayMs={60 + (mIdx % 3) * 80}>
              <div
                className="rounded-2xl bg-white border border-slate-200 p-7 shadow-sm hover:border-[#0284C7] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between space-y-6 group h-full"
              >
                <div className="space-y-4">
                  {/* Avatar Placeholder Slot */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-xl font-black text-slate-800 group-hover:bg-sky-50 group-hover:text-[#0284C7] group-hover:border-sky-300 transition-colors">
                      {member.name.split(" ")[0][0]}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 font-semibold">
                      {member.department}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 font-semibold mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-sky-50/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Note */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Active Member Slot</span>
                  <span className="text-[#0284C7] font-bold">Assigned</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}

          {/* We're Hiring Card */}
          <RevealOnScroll direction="up" delayMs={240}>
            <div className="rounded-2xl bg-gradient-to-tr from-sky-50 via-white to-red-50 border-2 border-dashed border-sky-300 p-7 flex flex-col justify-between space-y-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center mx-auto text-[#0284C7] animate-float">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Join the Imako Squad</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We are actively looking for exceptional AI automation engineers, Next.js frontend masters, and performance marketers.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-[#0284C7] hover:text-white border border-slate-200 shadow-xs transition-all duration-200 group"
              >
                <span>Submit General Application</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* Note on Founder Distinction */}
        <RevealOnScroll direction="up">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 text-center text-xs text-slate-600 shadow-xs hover:border-[#0284C7] transition-colors">
            Looking for company leadership and co-founder bios?{" "}
            <Link href="/about" className="text-[#0284C7] hover:underline font-bold">
              Visit the Founders Page &rarr;
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
