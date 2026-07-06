"use client";

import { useState, useCallback, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { ScrollOrchestrator } from "@/components/ScrollOrchestrator";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { MarqueeDivider } from "@/components/MarqueeDivider";
import { ParallaxSpacer } from "@/components/ParallaxSpacer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Force scroll to top on reload so the boot sequence doesn't happen scrolled down
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <main>
      {isLoading && <LoadingScreen onComplete={handleLoadComplete} />}

      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease" }}>
        <ScrollOrchestrator>
          <HeroSection />
          
          <MarqueeDivider text="// SYSTEM.LOG.UPDATE //" bgColor="bg-[var(--color-primary)]" textColor="text-black" rotate="-rotate-2" containerBg="bg-[var(--color-bg)]" />
          
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          
          <MarqueeDivider text="// KNOWLEDGE.BASE //" bgColor="bg-[#FF00FF]" textColor="text-black" direction="right" rotate="rotate-1" containerBg="bg-black" />
          
          <CertificationsSection />
          <EducationSection />
          
          <ParallaxSpacer />
          
          <ProjectsSection />
          
          <MarqueeDivider text="// END.OF.TRANSMISSION //" speed={15} containerBg="bg-black" />
          
          <ContactSection />
        </ScrollOrchestrator>
        <ScrollIndicator />
        <TerminalSection />
      </div>
    </main>
  );
}
