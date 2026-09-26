import type { Metadata } from "next";
import "./globals.css";
import { FloatingContactDock } from "@/components/FloatingContactDock";

export const metadata: Metadata = {
  title: "Imako Solution — AI Automations & High-Conversion Web Platforms",
  description:
    "Imako Solution engineers custom AI automations, interactive web platforms, and automated workflow engines. Cloud & Remote First.",
  keywords: [
    "AI Automations",
    "Imako Solution",
    "Imako Digital Agency",
    "Next.js Development",
    "Business Process Automation",
    "Ethiopia AI Agency",
    "Cloud Remote First"
  ],
  authors: [{ name: "Imako Solution" }],
  icons: {
    icon: "/imako-logo.png",
  },
  openGraph: {
    title: "Imako Solution — AI Automations & High-Conversion Web Platforms",
    description: "Replace repetitive manual work with autonomous AI systems and high-impact web applications.",
    url: "https://imakosolution.com",
    siteName: "Imako Solution",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#070A0F] text-[#FFFFFF] antialiased selection:bg-[#38BDF8]/25 selection:text-[#38BDF8]">
        {children}
        {/* Unobtrusive Floating Multi-Contact Dock */}
        <FloatingContactDock />
      </body>
    </html>
  );
}
