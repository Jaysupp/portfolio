"use client";

import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Noctave",
    description: "Built an AI-powered study planning web application that analyzed user sleep cycles, productivity patterns, and habits to generate personalized study schedules, improving study consistency by 45%.",
    tech: ["Next.js", "Google Gemini", "Supabase", "Analytics APIs"],
    github: "https://github.com/Jaysupp/NOCTAVE",
    live: "https://noctave.netlify.app/",
    image: "/noctave.png",
    status: "SHIPPED",
    buildTime: "4 WEEKS",
    impact: "+45% STUDY CONSISTENCY",
    accent: "#00FF41",
  },
  {
    title: "Pathora",
    description: "Developed an AI-driven travel planner integrating Google Gemini and OpenRouteService APIs for dynamic itinerary creation and route visualization. Built a scalable Supabase backend with secure auth.",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS", "Google Gemini", "APIs"],
    github: "#",
    live: "https://pathora.netlify.app/",
    image: "/pathora.png",
    status: "SHIPPED",
    buildTime: "5 WEEKS",
    impact: "DYNAMIC ROUTE PLANNING",
    accent: "#007AFF",
  },
  {
    title: "API Testing Framework",
    description: "Developed and executed 100+ API test cases validating CRUD operations, authentication flows, pagination, and role-based access control. 30% defect detection rate with reusable automated suites.",
    tech: ["REST Assured", "Postman", "JSON Server", "Java"],
    github: "https://github.com/Jaysupp/qa-api-testing-framework",
    live: "#",
    image: "/api-testing.png",
    status: "ACTIVE",
    buildTime: "3 WEEKS",
    impact: "30% DEFECT DETECTION",
    accent: "#FF3B30",
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 64);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-black h-screen overflow-hidden"
    >
      <div className="w-full pl-8 md:pl-16 flex flex-col pt-24 md:pt-32 h-full">
        <div className="mb-8 md:mb-12 shrink-0">
          <h2 className="font-heading text-4xl md:text-6xl uppercase w-fit bg-white text-black px-6 py-3 brutal-border brutal-shadow-sm">
            SELECTED_WORKS
          </h2>
        </div>

        {/* The Track that moves horizontally */}
        <div ref={trackRef} className="flex gap-8 md:gap-16 items-stretch pb-16 w-max pr-16 md:pr-32 flex-1 min-h-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 h-full"
            >
              {/* ── Premium Project Card ── */}
              <div className="flex h-full flex-col bg-[#0a0a0a] border-[3px] border-black group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                
                {/* Accent top strip */}
                <div className="h-[4px] w-full" style={{ backgroundColor: project.accent }} />

                {/* Card Header — File tab style */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs font-bold px-2 py-0.5 border"
                      style={{ color: project.accent, borderColor: project.accent + "44" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[11px] text-gray-500 uppercase tracking-wider">
                      project_{project.title.toLowerCase().replace(/\s+/g, "_")}.sys
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        project.status === "SHIPPED" ? "bg-green-400" : "bg-yellow-400"
                      }`}
                    />
                    <span className="font-mono text-[10px] text-gray-600 uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Image area with CASE_FILE overlay */}
                <div className="relative overflow-hidden border-b border-gray-800">
                  {project.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                  {/* CASE_FILE Hover Overlay */}
                  <div className="absolute inset-0 bg-black/90 flex flex-col justify-end p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-sm">
                    <div className="font-mono text-xs uppercase space-y-2">
                      <div className="text-[10px] text-gray-600 mb-3 tracking-[0.2em]">
                        ── CASE_FILE #{String(index + 1).padStart(3, "0")} ──
                      </div>
                      <p>
                        <span className="text-gray-500">&gt; STATUS: </span>
                        <span style={{ color: project.accent }}>{project.status}</span>
                      </p>
                      <p>
                        <span className="text-gray-500">&gt; BUILD_TIME: </span>
                        <span className="text-white">{project.buildTime}</span>
                      </p>
                      <p>
                        <span className="text-gray-500">&gt; IMPACT: </span>
                        <span style={{ color: project.accent }}>{project.impact}</span>
                      </p>
                      <p>
                        <span className="text-gray-500">&gt; MODULES: </span>
                        <span className="text-white">{project.tech.length} LOADED</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-5 md:p-6">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3
                      className="font-heading text-2xl md:text-3xl uppercase text-white tracking-tight leading-tight"
                    >
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="h-5 w-5 text-gray-600 group-hover:text-white group-hover:rotate-0 -rotate-45 transition-all duration-300 shrink-0 mt-1"
                    />
                  </div>

                  <p className="mb-5 font-mono text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex-grow" />

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider border text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-gray-700 bg-transparent px-4 py-3 font-heading text-xs font-bold uppercase text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border px-4 py-3 font-heading text-xs font-bold uppercase text-black transition-all duration-200 hover:brightness-110"
                      style={{
                        backgroundColor: project.accent,
                        borderColor: project.accent,
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
