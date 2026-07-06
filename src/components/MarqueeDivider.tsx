"use client";

import { motion } from "framer-motion";

interface MarqueeDividerProps {
  text: string;
  speed?: number;
  direction?: "left" | "right";
  bgColor?: string;
  textColor?: string;
  rotate?: string;
  containerBg?: string;
}

export function MarqueeDivider({
  text,
  speed = 20,
  direction = "left",
  bgColor = "bg-black",
  textColor = "text-[#00FF41]",
  rotate = "-rotate-1",
  containerBg = "bg-transparent",
}: MarqueeDividerProps) {
  // Duplicate text several times so it fills the screen and loops seamlessly
  const content = `${text} \u00A0\u00A0\u00A0 `.repeat(10);

  return (
    <div className={`w-full overflow-hidden flex flex-col justify-center ${containerBg} py-8 md:py-16`}>
      <div className={`relative w-full flex items-center ${bgColor} py-4 ${rotate} z-20 scale-105`}>
        <motion.div
          className={`whitespace-nowrap font-heading text-4xl md:text-6xl uppercase tracking-tighter ${textColor}`}
          initial={{ x: direction === "left" ? "0%" : "-50%" }}
          animate={{ x: direction === "left" ? "-50%" : "0%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
        >
          <span>{content}</span>
          <span>{content}</span>
        </motion.div>
      </div>
    </div>
  );
}
