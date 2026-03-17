"use client";

import { Button } from "./Button";

export function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 pointer-events-none">
      <div className="pointer-events-auto bg-white brutal-border brutal-shadow px-4 py-2 font-heading text-sm uppercase tracking-wider text-black">
        AyushJC.exe
      </div>
      
      <nav className="pointer-events-auto hidden md:flex items-center gap-6 bg-white brutal-border brutal-shadow px-6 py-2">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /ABOUT
        </a>
        <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /SKILLS
        </a>
        <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /LOGS
        </a>
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /WORK
        </a>
        <Button onClick={(e) => scrollToSection(e, 'contact')} variant="primary" className="!py-1 !px-3 !text-xs brutal-shadow-none">
          HIRE_ME
        </Button>
      </nav>
    </header>
  );
}
