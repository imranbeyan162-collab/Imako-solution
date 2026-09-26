import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RoiSimulator } from "@/components/RoiSimulator";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#080B10]">
      {/* Navigation Header */}
      <Header />

      {/* Hero Presentation */}
      <Hero />

      {/* Project ROI / Time-Saved Simulator */}
      <RoiSimulator />

      {/* Agency AI & Web Capabilities */}
      <ServicesSection />

      {/* Section 7: Case Study Portfolio (7 Live Client Projects) */}
      <PortfolioSection />

      {/* Section 8: Footer & Contact Specifications */}
      <Footer />
    </main>
  );
}
