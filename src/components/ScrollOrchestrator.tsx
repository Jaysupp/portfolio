"use client";

import { useEffect, useRef, useCallback, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollOrchestratorProps {
  children: ReactNode;
}

export function ScrollOrchestrator({ children }: ScrollOrchestratorProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<any>(null);
  const hasInitRef = useRef(false);

  useEffect(() => {
    if (hasInitRef.current) return;
    hasInitRef.current = true;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const ctx = gsap.context(() => {
          // ─── Vertical sections — entrance animations ───
          const snapSections = wrapper.querySelectorAll<HTMLElement>(".snap-section");
          snapSections.forEach((section) => {
            const inner = section.querySelector<HTMLElement>(".section-inner");
            if (!inner) return;

            // Optional pop-in effect specifically for about, or general fade for others
            if (section.id === "about") {
              gsap.fromTo(
                inner,
                {
                  scale: 0.4,
                  opacity: 0,
                  y: 150,
                  rotateY: 15,
                },
                {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  ease: "back.out(2)",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    end: "top 30%",
                    scrub: 1.2,
                  },
                }
              );
            } else if (section.id !== "hero") { // Don't animate hero entrance if it's the first thing
              gsap.fromTo(
                inner,
                { y: 80, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: 0.5,
                  },
                }
              );
            }
          });

          ScrollTrigger.refresh();
        }, wrapper);

        (wrapper as unknown as Record<string, unknown>).__gsapCtx = ctx;
      });
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      const ctx = (wrapper as unknown as Record<string, unknown>).__gsapCtx as ReturnType<typeof gsap.context> | undefined;
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
      hasInitRef.current = false;
    };
  }, []);

  // ─── Navigation ───
  const scrollToSection = useCallback((sectionId: string) => {
    const lenis = lenisRef.current?.lenis;
    if (sectionId === "hero") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.querySelector<HTMLElement>(`#${sectionId}`);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.2 });
      } else {
        window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__scrollToSection = scrollToSection;
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).__scrollToSection;
    };
  }, [scrollToSection]);

  return (
    <ReactLenis root options={{ lerp: 0.03, duration: 2, smoothWheel: true, wheelMultiplier: 0.8 }} ref={lenisRef}>
      <div
        ref={wrapperRef}
        className="scroll-container hide-scrollbar"
        id="scroll-container"
      >
        {children}
      </div>
    </ReactLenis>
  );
}
