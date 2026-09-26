"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delayMs?: number;
  durationMs?: number;
}

export function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delayMs = 0,
  durationMs = 700,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback if IntersectionObserver isn't supported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(36px)";
      case "down":
        return "translateY(-36px)";
      case "left":
        return "translateX(-36px)";
      case "right":
        return "translateX(36px)";
      case "scale":
        return "scale(0.94)";
      default:
        return "translateY(36px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0) scale(1)" : getInitialTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delayMs}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
