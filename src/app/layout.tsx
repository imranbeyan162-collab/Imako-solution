import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatbotWidget } from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  title: "Imako Solution — AI Powered Solution for Real World Problems",
  description:
    "Imako Solution engineers autonomous AI workflows, agentic systems, and high-conversion web platforms that liberate enterprise capacity and accelerate business growth. Founded July 27, 2026.",
  keywords: [
    "Imako Solution",
    "AI Automation",
    "Website Development",
    "AI Agents",
    "AI Chatbots",
    "Imran Mohammedbeyan",
    "Mikiyas Alemu",
    "Machine Learning Solutions",
    "Ethiopia AI"
  ],
  authors: [{ name: "Imran Mohammedbeyan" }, { name: "Mikiyas Alemu" }],
  icons: {
    icon: "/imako-logo.png",
  },
  openGraph: {
    title: "Imako Solution — AI Powered Solution for Real World Problems",
    description: "Building autonomous intelligence and enterprise web systems for real world problems.",
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#E8F6FF] text-[#0B3D91] antialiased selection:bg-[#7FE7D6] selection:text-[#0B3D91] flex flex-col justify-between">
        {/* Persistent Global Header */}
        <Header />

        {/* Page Main Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Persistent Global Footer */}
        <Footer />

        {/* Live AI Chatbot Widget connected to Telegram & WhatsApp */}
        <ChatbotWidget />
      </body>
    </html>
  );
}
