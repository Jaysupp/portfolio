"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "LOGS" },
  { id: "certifications", label: "CERTS" },
  { id: "education", label: "EDU" },
  { id: "projects", label: "WORK" },
  { id: "contact", label: "CONTACT" },
];

export function ScrollIndicator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      let active = -1;
      
      sections.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the middle of the screen is within this section
          if (rect.top <= vh * 0.5 && rect.bottom > vh * 0.5) {
            active = i;
          }
        }
      });
      
      if (active !== -1) {
        setActiveIndex((prev) => (prev !== active ? active : prev));
      }
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scrollFn = (window as any).__scrollToSection;
    if (scrollFn) scrollFn(id);
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {sections.map((section, i) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className="group flex items-center gap-2 cursor-pointer pointer-events-auto"
          aria-label={`Go to ${section.label}`}
        >
          {/* Label — shows on hover */}
          <span
            className={`font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
              activeIndex === i ? "!opacity-100 !translate-x-0" : ""
            }`}
            style={{
              color: activeIndex === i ? "#000" : "#999",
            }}
          >
            {section.label}
          </span>

          {/* Dot */}
          <div
            className="transition-all duration-300 border-2 border-black"
            style={{
              width: activeIndex === i ? "28px" : "10px",
              height: "10px",
              backgroundColor: activeIndex === i ? "var(--color-primary)" : "#ddd",
              boxShadow: activeIndex === i ? "2px 2px 0px 0px #000" : "none",
            }}
          />
        </button>
      ))}
    </div>
  );
}
