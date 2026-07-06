"use client";

import { useState, useCallback } from "react";
import { Button } from "./Button";

export function Header() {
  const [isGlitching, setIsGlitching] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scrollFn = (window as any).__scrollToSection;
    if (scrollFn) {
      scrollFn(id);
    }
  };

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    scrollToSection(e, 'hero');
    if (isGlitching) return;
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 800);
  }, [isGlitching]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 pointer-events-none">
      <button
        onClick={handleLogoClick}
        className="pointer-events-auto bg-white brutal-border brutal-shadow px-4 py-2 font-heading text-sm uppercase tracking-wider text-black cursor-pointer"
      >
        <span
          className={`glitch-text ${isGlitching ? "glitch-active" : ""}`}
          data-text="AyushJC.exe"
        >
          AyushJC.exe
        </span>
      </button>
      
      <nav className="pointer-events-auto hidden md:flex items-center gap-6 bg-white brutal-border brutal-shadow px-6 py-2">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="pointer-events-auto font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /ABOUT
        </a>
        <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="pointer-events-auto font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /SKILLS
        </a>
        <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="pointer-events-auto font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /LOGS
        </a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="pointer-events-auto font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /WORK
        </a>
        <Button onClick={(e) => scrollToSection(e, 'contact')} variant="primary" className="pointer-events-auto !py-1 !px-3 !text-xs brutal-shadow-none">
          HIRE_ME
        </Button>
      </nav>
    </header>
  );
}
