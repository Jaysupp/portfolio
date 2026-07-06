"use client";

import { useState, useEffect, useRef } from "react";

const skillsRow1 = [
  { name: "REACT.JS", category: "FRAMEWORK" },
  { name: "NODE.JS", category: "FRAMEWORK" },
  { name: "PYTHON", category: "LANGUAGE" },
  { name: "JAVA", category: "LANGUAGE" },
  { name: "C++", category: "LANGUAGE" },
  { name: "C#", category: "LANGUAGE" },
  { name: "JAVASCRIPT", category: "LANGUAGE" },
  { name: "TYPESCRIPT", category: "LANGUAGE" },
];

const skillsRow2 = [
  { name: "UNITY", category: "TOOL" },
  { name: "JUNIT", category: "FRAMEWORK" },
  { name: "SELENIUM", category: "FRAMEWORK" },
  { name: "MONGODB", category: "DATABASE" },
  { name: "MYSQL", category: "DATABASE" },
  { name: "POSTMAN", category: "TOOL" },
  { name: "GITHUB", category: "TOOL" },
  { name: "ECLIPSE", category: "TOOL" },
];

const colors = [
  "#FF3B30", "#34C759", "#007AFF", "#FFCC00",
  "#FF2D55", "#AF52DE", "#5856D6", "#FF9500",
];

type Phase = "idle" | "loading" | "revealing" | "done";

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoverColor, setHoverColor] = useState<string>("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [loadProgress, setLoadProgress] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasStartedRef = useRef(false);

  const totalSkills = skillsRow1.length + skillsRow2.length;

  // Intersection observer to kick off the sequence
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          setPhase("loading");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Phase: loading — animate the progress bar from 0 to 100
  useEffect(() => {
    if (phase !== "loading") return;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setLoadProgress(Math.min(progress, 100));
      if (progress >= 100) {
        clearInterval(interval);
        // Brief pause at 100%, then transition to revealing
        setTimeout(() => setPhase("revealing"), 400);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [phase]);

  // Phase: revealing — stagger-reveal each skill cell
  useEffect(() => {
    if (phase !== "revealing") return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setRevealedCount(i);
      if (i >= totalSkills) {
        clearInterval(interval);
        setTimeout(() => setPhase("done"), 200);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [phase, totalSkills]);

  const handleMouseEnter = (skillName: string) => {
    if (phase !== "done") return;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHoverColor(randomColor);
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  const renderSkillCell = (skill: typeof skillsRow1[0], globalIndex: number) => {
    const isRevealed = phase === "done" || (phase === "revealing" && globalIndex < revealedCount);

    return (
      <div
        key={skill.name}
        onMouseEnter={() => handleMouseEnter(skill.name)}
        onMouseLeave={handleMouseLeave}
        className="group flex flex-col items-center justify-center p-6 md:p-8 cursor-pointer transition-all duration-300"
        style={{
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? "translateY(0)" : "translateY(12px)",
          backgroundColor: hoveredSkill === skill.name ? hoverColor : "transparent",
          color: hoveredSkill === skill.name ? "black" : "white",
        }}
      >
        <span
          className="mb-2 font-mono text-[10px] md:text-xs font-bold uppercase transition-colors duration-0"
          style={{ color: hoveredSkill === skill.name ? "black" : "rgb(20, 184, 166)" }}
        >
          // {skill.category}
        </span>
        <h3 className="font-heading text-base md:text-lg uppercase tracking-wide text-center">
          {skill.name}
        </h3>
      </div>
    );
  };

  const showLoader = phase === "loading" || (phase === "revealing" && loadProgress > 0);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="snap-section bg-[#111111] text-white flex items-center"
    >
      <div className="section-inner w-full px-4 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="flex justify-between items-end mb-8 border-b-2 border-gray-700 pb-4">
            <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter flex items-baseline gap-2">
              TECH<span className="text-green-500">_STACK</span>
            </h2>
            <div className="hidden md:flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase text-gray-400">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              /// {phase === "done" ? "SYSTEM_OPTIMIZED" : phase === "loading" ? "LOADING_MODULES..." : phase === "revealing" ? "DEPLOYING..." : "STANDBY"}
            </div>
          </div>

          {/* Loading Bar — shown during loading phase, fades out after */}
          <div
            className="transition-all duration-500 overflow-hidden"
            style={{
              maxHeight: showLoader && phase === "loading" ? "80px" : "0px",
              opacity: phase === "loading" ? 1 : 0,
              marginBottom: phase === "loading" ? "24px" : "0px",
            }}
          >
            <div className="border border-gray-700 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-xs text-[#00FF41] uppercase">
                  &gt; Initializing tech modules...
                </span>
                <span className="font-mono text-xs text-gray-400">
                  {loadProgress}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-800 border border-gray-700">
                <div
                  className="h-full bg-[#00FF41] transition-all duration-100"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="border border-gray-800 border-x-0 border-b-0 overflow-x-auto hide-scrollbar">
            <div className="min-w-[1000px]">
              {/* Top Row */}
              <div className="grid grid-cols-8 border-b border-gray-800 divide-x divide-gray-800">
                {skillsRow1.map((skill, i) => renderSkillCell(skill, i))}
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-8 border-b-2 border-gray-700 divide-x divide-gray-800">
                {skillsRow2.map((skill, i) =>
                  renderSkillCell(skill, i + skillsRow1.length)
                )}
              </div>
            </div>
          </div>

          {/* Footer info */}
          <div className="mt-4 flex justify-between font-mono text-[10px] md:text-xs text-gray-500 uppercase">
            <span>TOTAL MARKERS: {phase === "done" ? totalSkills : phase === "revealing" ? revealedCount : 0}/{totalSkills}</span>
            <span>MEMORY USAGE: [{phase === "done" ? "LOW" : "ALLOCATING"}]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
