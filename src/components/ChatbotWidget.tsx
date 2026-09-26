"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, ArrowUpRight, Sparkles, User, RefreshCw, CheckCircle2 } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: string }[];
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am the Imako Solution AI Assistant. How can we help accelerate your business with AI automations or high-conversion web platforms today?",
      timestamp: "Just now",
      quickActions: [
        { label: "Website Development", action: "Tell me about your Website Development service" },
        { label: "AI Chatbots & Agents", action: "How do your AI Chatbots & Agents work?" },
        { label: "Meet the Founders", action: "Who are the founders of Imako Solution?" },
        { label: "Get a Quote", action: "I'd like to get a quote for a project" }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateBotReply = (userQuery: string): { reply: string; actions?: { label: string; action: string }[] } => {
    const q = userQuery.toLowerCase();

    if (q.includes("web") || q.includes("website") || q.includes("flagship")) {
      return {
        reply: "Website Development is our flagship lead service! We build custom Next.js & React enterprise applications optimized for sub-second speeds, automated Telebirr/CBE payment verifications, and high-conversion UX. We've launched 7+ production platforms including Bisrat Hotel and Nisir Adama Football Academy.",
        actions: [
          { label: "Request Web Quote", action: "I want a website built" },
          { label: "View Portfolio", action: "Take me to portfolio" }
        ]
      };
    }

    if (q.includes("bot") || q.includes("agent") || q.includes("telegram") || q.includes("whatsapp")) {
      return {
        reply: "Our AI Chatbots and Autonomous Agents connect directly to your business databases, CRM, WhatsApp, and Telegram! They handle 24/7 customer triage, automated appointment scheduling, and multi-step tasks in English, Amharic, and Afaan Oromoo.",
        actions: [
          { label: "Test WhatsApp Bot", action: "Open WhatsApp" },
          { label: "Test Telegram Bot", action: "Open Telegram" }
        ]
      };
    }

    if (q.includes("founder") || q.includes("imran") || q.includes("mikiyas") || q.includes("who")) {
      return {
        reply: "Imako Solution was founded by Imran Mohammedbeyan & Mikiyas Alemu. Imran leads AI systems engineering and is an Islamic dawa educator, while Mikiyas is a Taekwondo black belt martial artist who leads growth, application engineering, and video production!",
        actions: [
          { label: "Read Founders Page", action: "Go to About page" }
        ]
      };
    }

    if (q.includes("quote") || q.includes("consult") || q.includes("hire") || q.includes("price") || q.includes("cost")) {
      return {
        reply: "We tailor every solution to your exact operational requirements. You can submit a direct quote request on our Contact page or speak directly with our founders on WhatsApp (+251 907 173 634 / +251 912 251 113) or Telegram.",
        actions: [
          { label: "Open Contact Form", action: "Open quote form" },
          { label: "Direct WhatsApp", action: "Open WhatsApp" }
        ]
      };
    }

    return {
      reply: "Thank you for your message! Our team specializes in custom AI automations, agentic systems, and high-conversion web development. Would you like to discuss a project directly with Imran or Mikiyas?",
      actions: [
        { label: "WhatsApp Direct", action: "Open WhatsApp" },
        { label: "Telegram Direct", action: "Open Telegram" },
        { label: "Explore Services", action: "Tell me about your services" }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    if (text === "Open WhatsApp") {
      window.open("https://wa.me/251907173634?text=Hello%20Imako%20Solution,%20I%20chatted%20with%20your%20AI%20Assistant%20and%20want%20to%20connect.", "_blank");
      setIsTyping(false);
      return;
    }
    if (text === "Open Telegram") {
      window.open("https://t.me/imakosolution", "_blank");
      setIsTyping(false);
      return;
    }
    if (text === "Open quote form" || text === "I want a website built") {
      window.location.href = "/contact";
      return;
    }
    if (text === "Take me to portfolio") {
      window.location.href = "/portfolio";
      return;
    }
    if (text === "Go to About page") {
      window.location.href = "/about";
      return;
    }

    setTimeout(() => {
      const { reply, actions } = generateBotReply(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: reply,
        timestamp: "Just now",
        quickActions: actions
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-white border-2 border-[#3BA7F2]/40 shadow-2xl overflow-hidden flex flex-col h-[520px] animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-[#0B3D91] via-[#3BA7F2] to-[#7FE7D6] text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="relative w-8 h-8 rounded-lg bg-white/20 border border-white/40 flex items-center justify-center text-white">
                <Bot className="w-4 h-4 text-white" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#7FE7D6] border-2 border-[#0B3D91] animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5">
                  Imako AI <span className="text-[#E8F6FF]">Assistant</span>
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-[#E8F6FF] font-mono">
                  <span className="flex items-center gap-1 text-[#7FE7D6] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7FE7D6]" /> Online
                  </span>
                  <span>•</span>
                  <span>WA & TG Bridge</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick External Bridges Ribbon */}
          <div className="px-4 py-2 bg-[#E8F6FF] border-b border-[#3BA7F2]/25 flex items-center justify-between text-[11px]">
            <span className="text-[#0B3D91] font-mono font-bold">Live External Handoff:</span>
            <div className="flex items-center space-x-2">
              <a
                href="https://wa.me/251907173634?text=Hello%20Imako%20Solution,%20I'd%20like%20to%20chat%20live."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#7FE7D6] text-[#0B3D91] hover:brightness-105 border border-[#0B3D91]/20 font-bold transition-colors shadow-2xs"
              >
                WhatsApp <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://t.me/imakosolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#3BA7F2] text-white hover:brightness-105 font-bold transition-colors shadow-2xs"
              >
                Telegram <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs bg-[#E8F6FF]/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-[#0B3D91] to-[#3BA7F2] text-white font-medium rounded-br-none shadow-sm"
                      : "bg-white border border-[#CBE5FC] text-[#0B3D91] font-medium rounded-bl-none shadow-xs"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Quick actions buttons in Mint Aqua #7FE7D6 */}
                {msg.quickActions && msg.quickActions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.quickActions.map((qa, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(qa.action)}
                        className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7FE7D6]/60 hover:bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20 transition-all text-left shadow-2xs"
                      >
                        {qa.label} &rarr;
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-[#CBE5FC] text-[#0B3D91] text-[11px] w-24 shadow-xs">
                <RefreshCw className="w-3 h-3 animate-spin text-[#3BA7F2]" />
                <span>Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input Box */}
          <div className="p-3 bg-white border-t border-[#3BA7F2]/25">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about AI, Web apps, founders..."
                className="flex-1 bg-[#E8F6FF] border border-[#3BA7F2]/40 focus:border-[#0B3D91] focus:bg-white rounded-xl px-3 py-2 text-xs text-[#0B3D91] placeholder:text-[#0B3D91]/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-gradient-to-r from-[#0B3D91] to-[#3BA7F2] hover:brightness-105 text-white font-bold transition-all disabled:opacity-40"
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5 text-[#7FE7D6]" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Launcher Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-white border-2 border-[#0B3D91] hover:border-[#3BA7F2] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-[#0B3D91]"
        aria-label="Open AI chat assistant"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FE7D6] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7FE7D6]" />
        </span>

        <Bot className="w-4 h-4 text-[#3BA7F2]" />
        <span className="text-xs sm:text-sm font-black tracking-wide">
          {isOpen ? "Close Assistant" : "Live AI Chat"}
        </span>

        <span className="hidden sm:inline-flex text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#7FE7D6] text-[#0B3D91] border border-[#0B3D91]/20">
          WA & TG Live
        </span>
      </button>
    </div>
  );
}
