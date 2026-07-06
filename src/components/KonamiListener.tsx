"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Alternatively, let them type "matrix"
const MATRIX_CODE = ["m", "a", "t", "r", "i", "x"];

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Katakana + Latin + Numerals
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブヅエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン";
    const lettersArr = letters.split("");

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Translucent black to create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00FF41"; // Matrix Green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = lettersArr[Math.floor(Math.random() * lettersArr.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      requestAnimationFrame(draw);
    };
    
    let animId = requestAnimationFrame(draw);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = 0;
      for (let x = 0; x < canvas.width / fontSize; x++) {
        drops[x] = 1;
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9998]"
      style={{ opacity: 0.15 }}
    />
  );
}

export function KonamiListener() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [matrixIndex, setMatrixIndex] = useState(0);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check Konami Code
      if (e.key === KONAMI_CODE[konamiIndex]) {
        if (konamiIndex === KONAMI_CODE.length - 1) {
          setIsMatrixMode((prev) => !prev);
          setKonamiIndex(0);
        } else {
          setKonamiIndex((prev) => prev + 1);
        }
      } else {
        setKonamiIndex(e.key === KONAMI_CODE[0] ? 1 : 0);
      }

      // Check Matrix Code
      const key = e.key.toLowerCase();
      if (key === MATRIX_CODE[matrixIndex]) {
        if (matrixIndex === MATRIX_CODE.length - 1) {
          setIsMatrixMode((prev) => !prev);
          setMatrixIndex(0);
        } else {
          setMatrixIndex((prev) => prev + 1);
        }
      } else {
        setMatrixIndex(key === MATRIX_CODE[0] ? 1 : 0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex, matrixIndex]);

  // Sync body class
  useEffect(() => {
    if (isMatrixMode) {
      document.body.classList.add("matrix-mode");
    } else {
      document.body.classList.remove("matrix-mode");
    }
  }, [isMatrixMode]);

  return (
    <AnimatePresence>
      {isMatrixMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="pointer-events-none z-[9998]"
        >
          <MatrixRain />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
