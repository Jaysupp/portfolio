"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxSpacer() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress when this container is in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move text opposite to scroll direction for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <div 
      ref={ref} 
      className="w-full h-[60vh] md:h-[80vh] bg-black flex flex-col items-center justify-center overflow-hidden relative"
    >
      <motion.div style={{ y: y1 }} className="absolute whitespace-nowrap z-0">
        <h2 className="font-heading text-[12vw] md:text-[10vw] leading-none uppercase tracking-tighter text-transparent stroke-text" style={{ WebkitTextStroke: '2px #FF00FF' }}>
          ENGINEERING // INNOVATION //
        </h2>
      </motion.div>
      
      <motion.div style={{ y: y2 }} className="absolute whitespace-nowrap z-10 mix-blend-difference">
        <h2 className="font-heading text-[12vw] md:text-[10vw] leading-none uppercase tracking-tighter text-[#00FF41]">
          SYSTEMS // ARCHITECTURE //
        </h2>
      </motion.div>
    </div>
  );
}
