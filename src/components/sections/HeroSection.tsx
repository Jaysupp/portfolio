"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Download } from "lucide-react";
import { Button } from "@/components/Button";

function useTypingEffect(text: string, speed: number = 50, startDelay: number = 600) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      const type = () => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}

export function HeroSection() {
  const { displayedText, isComplete } = useTypingEffect(
    "I build digital products that refuse to be boring.",
    45,
    4200
  );

  return (
    <section id="hero" className="noise-overlay snap-section relative flex h-[100vh] min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden p-4">
      {/* Background "CODE" Text */}
      <div className="pointer-events-none absolute right-4 top-24 z-0 text-7xl font-bold text-gray-200 opacity-50 md:right-16 md:text-9xl">
        CODE
      </div>

      {/* Decorative Shapes */}
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
          y: [0, -10, 0, 10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-[10%] top-[30%] h-12 w-12 border-[3px] border-black bg-blue-500 brutal-shadow md:h-16 md:w-16"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          y: [0, 20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] top-[50%] h-16 w-16 rounded-full border-[3px] border-black bg-pink-400 brutal-shadow md:h-20 md:w-20"
      />

      <div className="z-10 flex w-full max-w-5xl flex-col items-center text-center -mt-16 md:-mt-24">
        {/* System Status Pill */}
        <div className="mb-12 flex items-center justify-center gap-2 border-[3px] border-black bg-white px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest brutal-shadow hover-target">
          <Terminal className="h-4 w-4" />
          SYSTEM STATUS: ONLINE
        </div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 w-full"
        >
          <h1 className="font-heading text-6xl uppercase leading-[0.85] tracking-tighter md:text-[8rem] lg:text-[10rem]">
            AYUSH
          </h1>
          <h1 className="font-heading text-6xl text-transparent uppercase leading-[0.85] tracking-tighter md:text-[8rem] lg:text-[10rem] hover-target"
            style={{ WebkitTextStroke: "2px black" }}>
            JC
          </h1>
        </motion.div>

        {/* Subtitle Box — Typing Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 max-w-2xl border-[3px] border-black bg-[var(--color-primary)] p-6 brutal-shadow hover-target"
        >
          <p className="font-mono text-xl font-bold min-h-[1.75rem]">
            {displayedText}
            <span
              className={`inline-block w-[0.6em] h-[1.1em] bg-black align-middle ml-[2px] ${
                isComplete ? "animate-pulse" : ""
              }`}
              style={{ animationDuration: "1s" }}
            />
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isComplete ? 0.8 : 0 }}
            transition={{ duration: 0.5 }}
            className="mt-2 font-mono text-sm font-bold"
          >
            React • Python • Java • Node
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="dark" className="px-8 py-4 !text-base brutal-shadow">
            VIEW DATABASE
          </Button>
          <a
            href="/resume.pdf"
            download="Ayush_Resume.pdf"
            className="flex items-center gap-2 bg-white px-8 py-4 !text-base brutal-border brutal-shadow font-heading text-sm uppercase tracking-wider brutal-shadow-hover hover-target transition-colors"
          >
            <Download className="h-5 w-5" /> DOWNLOAD CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
