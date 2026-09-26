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
    <main className="min-h-screen bg-[#E8F6FF] text-[#0B3D91] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <RevealOnScroll direction="down" delayMs={50}>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 shadow-xs">
              <Users className="w-3.5 h-3.5" />
              <span>SPECIALIZED ENGINEERING SQUAD</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B3D91] leading-tight">
              Our Extended{" "}
              <span className="bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] bg-clip-text text-transparent">
                Technical Team
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#0B3D91]/80 max-w-2xl mx-auto leading-relaxed">
              Distinct from our executive founders, the Imako technical roster brings together specialized engineers, creative media designers, and growth architects executing on daily client sprints.
            </p>
          </div>
        </RevealOnScroll>

        {/* Department Filter Tabs in Ocean Breeze */}
        <RevealOnScroll direction="up" delayMs={100}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                  selectedDept === dept
                    ? "bg-[#0B3D91] text-white shadow-md shadow-[#0B3D91]/30 scale-102"
                    : "bg-white text-[#0B3D91] hover:bg-[#7FE7D6]/30 border-2 border-[#CBE5FC]"
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
                className="rounded-3xl bg-white border-2 border-[#CBE5FC] p-7 shadow-sm hover:border-[#7FE7D6] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between space-y-6 group h-full"
              >
                <div className="space-y-4">
                  {/* Avatar Placeholder Slot */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8F6FF] border-2 border-[#CBE5FC] flex items-center justify-center text-xl font-black text-[#0B3D91] group-hover:bg-[#7FE7D6] transition-colors">
                      {member.name.split(" ")[0][0]}
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#7FE7D6] text-[#0B3D91] font-black border border-[#0B3D91]/20">
                      {member.department}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#0B3D91] group-hover:text-[#3BA7F2] transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#3BA7F2] font-black mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-[#0B3D91]/80 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold bg-[#E8F6FF] text-[#0B3D91] border border-[#3BA7F2]/30 group-hover:border-[#7FE7D6] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Note */}
                <div className="pt-3 border-t border-[#CBE5FC] flex items-center justify-between text-[11px] text-[#0B3D91]/70 font-mono font-bold">
                  <span>Active Member Slot</span>
                  <span className="text-[#3BA7F2]">Assigned</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}

          {/* We're Hiring Card in Ocean Breeze Gradient */}
          <RevealOnScroll direction="up" delayMs={240}>
            <div className="rounded-3xl bg-gradient-to-br from-[#0B3D91] to-[#3BA7F2] text-white p-7 flex flex-col justify-between space-y-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full shadow-lg">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mx-auto text-[#7FE7D6] animate-float">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white">Join the Imako Squad</h3>
                <p className="text-xs text-[#E8F6FF]/90 leading-relaxed">
                  We are actively looking for exceptional AI automation engineers, Next.js frontend masters, and performance marketers.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-black text-[#0B3D91] bg-[#7FE7D6] hover:bg-[#62E0CD] shadow-md hover-cinematic group"
              >
                <span>Submit General Application</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B3D91] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        {/* Note on Founder Distinction */}
        <RevealOnScroll direction="up">
          <div className="rounded-3xl bg-white border-2 border-[#CBE5FC] p-6 text-center text-xs text-[#0B3D91] shadow-xs">
            Looking for company leadership and co-founder bios?{" "}
            <Link href="/about" className="text-[#3BA7F2] hover:text-[#0B3D91] font-black underline">
              Visit the Founders Page &rarr;
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
