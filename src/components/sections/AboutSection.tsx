"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="border-b-[3px] border-black p-4 py-16 md:p-16 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-[3px] border-black bg-white p-6 md:p-12 brutal-shadow"
        >
          <div className="flex flex-col gap-12 md:flex-row md:items-start">
            {/* Avatar / Image Box */}
            <div className="relative aspect-square w-full max-w-xs shrink-0 border-[3px] border-black bg-white brutal-shadow group">
              <div className="absolute top-4 left-4 z-10 bg-[#FF3B30] text-white text-xs font-mono font-bold px-2 py-1 uppercase brutal-border">
                AVATAR.JPG
              </div>
              {/* Placeholder for the avatar illustration */}
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center p-4">
                <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500 font-mono text-sm text-center">
                  Replace with illustration
                </div>
              </div>
            </div>

            {/* Content Box */}
            <div className="flex-1">
              <h2 className="mb-6 font-heading text-5xl md:text-6xl uppercase tracking-tight">
                WHO AM I?
              </h2>

              <p className="mb-6 font-mono text-lg leading-relaxed text-gray-800">
                I am Ayush. A creative developer who believes the web has become too sanitized. I bring <span className="bg-[var(--color-primary)] px-2 py-1 border-2 border-black font-bold text-black">personality</span> back to code.
              </p>

              <div className="mb-8 font-mono text-base text-gray-600 space-y-2 border-l-4 border-gray-300 pl-4">
                <p>&gt; Specialized in Designing and Web Development.</p>
                <p>&gt; Obsessed with Perfection and AI.</p>
                <p>&gt; Passionate about game development.</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 border-[3px] border-black bg-black px-4 py-2 text-white font-mono text-xs font-bold uppercase w-fit">
                  <span>📍 LOCATION: WORLDWIDE</span>
                </div>
                <div className="flex items-center gap-2 border-[3px] border-black bg-[#34C759] px-4 py-2 text-white font-mono text-xs font-bold uppercase w-fit">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  STATUS: AVAILABLE
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
