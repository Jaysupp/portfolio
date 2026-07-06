"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { text: "> INITIALIZING SYSTEM...", delay: 0 },
  { text: "> LOADING KERNEL MODULES...", delay: 200 },
  { text: "> MOUNTING FILESYSTEM...", delay: 400 },
  { text: "> COMPILING ASSETS...", delay: 700 },
  { text: "> ESTABLISHING CONNECTION...", delay: 1000 },
  { text: "> DEPLOYING INTERFACE...", delay: 1300 },
  { text: "> STATUS: ALL SYSTEMS NOMINAL", delay: 1600, color: "#00FF41" },
];

const TOTAL_DURATION = 2800; // ms until we start exit

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [phase, setPhase] = useState<"boot" | "reveal" | "exit">("boot");

  // Progress bar animation
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min((elapsed / (TOTAL_DURATION - 400)) * 100, 100);
      setProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Reveal boot lines one by one
  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Phase transitions
  useEffect(() => {
    const revealTimer = setTimeout(() => setPhase("reveal"), TOTAL_DURATION - 600);
    const exitTimer = setTimeout(() => setPhase("exit"), TOTAL_DURATION);
    const completeTimer = setTimeout(() => onComplete(), TOTAL_DURATION + 800);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : undefined}
      <motion.div
        key="loader"
        initial={{ y: 0 }}
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
      >
        {/* Scanline effect */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
          }}
        />

        {/* Corner decorations */}
        <div className="absolute top-6 left-6 font-mono text-[10px] text-gray-700 uppercase tracking-widest">
          SYS.BOOT // V1.0
        </div>
        <div className="absolute top-6 right-6 font-mono text-[10px] text-gray-700 uppercase tracking-widest">
          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })}
        </div>

        {/* Main content */}
        <div className="relative z-20 flex flex-col items-center w-full max-w-lg px-6">

          {/* Big name reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: phase === "reveal" || phase === "exit" ? 1 : 0.15,
              scale: phase === "reveal" || phase === "exit" ? 1 : 0.95,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10 text-center"
          >
            <h1
              className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-none"
            >
              AYUSH
            </h1>
            <h1
              className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none"
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              JC
            </h1>
          </motion.div>

          {/* Boot log lines */}
          <div className="w-full mb-8 min-h-[160px]">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="font-mono text-xs md:text-sm mb-1"
                style={{ color: line.color || "#555" }}
              >
                {line.text}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-[10px] text-gray-600 uppercase tracking-wider">
                Loading
              </span>
              <span className="font-mono text-[10px] text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-[3px] bg-gray-900 relative overflow-hidden">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
              {/* Glow effect on the progress bar tip */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-8 h-4 blur-md bg-white/50"
                style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
              />
            </div>
          </div>

          {/* .exe label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: progress >= 100 ? 1 : 0 }}
            className="mt-6 font-mono text-[11px] text-[var(--color-primary)] uppercase tracking-[0.3em]"
          >
            ● SYSTEM READY
          </motion.div>
        </div>


      </motion.div>
    </AnimatePresence>
  );
}
