"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillsRow1 = [
  { name: "REACT", category: "LIBRARY" },
  { name: "NEXT.JS", category: "FRAMEWORK" },
  { name: "PYTHON", category: "LANGUAGE" },
  { name: "NODE.JS", category: "BACKEND" },
  { name: "PHP", category: "LANGUAGE" },
  { name: "MYSQL", category: "DATA" },
  { name: "HTML5", category: "CORE" },
  { name: "GIT", category: "VERSION" },
];

const skillsRow2 = [
  { name: "GRAPHQL", category: "QUERY" },
  { name: "GITHUB", category: "API" },
  { name: "JAVA", category: "LANGUAGE" },
  { name: "DJANGO", category: "FRAMEWORK" },
  { name: "TYPESCRIPT", category: "LANGUAGE" },
  { name: "LARAVEL", category: "FRAMEWORK" },
  { name: "THREE.JS", category: "3D" },
  { name: "C++", category: "LANGUAGE" },
];

const colors = [
  "#FF3B30", // Red
  "#34C759", // Green
  "#007AFF", // Blue
  "#FFCC00", // Yellow
  "#FF2D55", // Pink
  "#AF52DE", // Purple
  "#5856D6", // Indigo
  "#FF9500", // Orange
];

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoverColor, setHoverColor] = useState<string>("");

  const handleMouseEnter = (skillName: string) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHoverColor(randomColor);
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="skills" className="bg-[#111111] text-white border-b-[3px] border-black px-4 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 border-b-2 border-gray-700 pb-4">
          <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter flex items-baseline gap-2">
            TECH<span className="text-green-500">_STACK</span>
          </h2>
          <div className="hidden md:flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase text-gray-400">
             <span className="w-2 h-2 rounded-full bg-red-500"></span>
             /// SYSTEM_OPTIMIZED
          </div>
        </div>

        {/* CSS Grid for the table look */}
        <div className="border border-gray-800 border-x-0 border-b-0 overflow-x-auto hide-scrollbar">
          <div className="min-w-[1000px]">
            {/* Top Row */}
            <div className="grid grid-cols-8 border-b border-gray-800 divide-x divide-gray-800">
              {skillsRow1.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => handleMouseEnter(skill.name)}
                  onMouseLeave={handleMouseLeave}
                  className="group flex flex-col items-center justify-center p-6 md:p-8 cursor-pointer transition-colors duration-0"
                  style={{
                    backgroundColor: hoveredSkill === skill.name ? hoverColor : "transparent",
                    color: hoveredSkill === skill.name ? "black" : "white"
                  }}
                >
                  <span 
                    className="mb-2 font-mono text-[10px] md:text-xs font-bold uppercase transition-colors duration-0"
                    style={{ color: hoveredSkill === skill.name ? "black" : "rgb(20, 184, 166)" }} // tailwind teal-500 equivalent
                  >
                    // {skill.category}
                  </span>
                  <h3 className="font-heading text-base md:text-lg uppercase tracking-wide text-center">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-8 border-b-2 border-gray-700 divide-x divide-gray-800">
              {skillsRow2.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => handleMouseEnter(skill.name)}
                  onMouseLeave={handleMouseLeave}
                  className="group flex flex-col items-center justify-center p-6 md:p-8 cursor-pointer transition-colors duration-0"
                  style={{
                    backgroundColor: hoveredSkill === skill.name ? hoverColor : "transparent",
                    color: hoveredSkill === skill.name ? "black" : "white"
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
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 flex justify-between font-mono text-[10px] md:text-xs text-gray-500 uppercase">
           <span>TOTAL MARKERS: 16</span>
           <span>MEMORY USAGE: [LOW]</span>
        </div>
      </div>
    </section>
  );
}
