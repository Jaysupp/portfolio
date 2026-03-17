"use client";

import { Card } from "@/components/Card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Noctave",
    description: "Built an AI-powered study planning web application that analyzed user sleep cycles, productivity patterns, and habits to generate personalized study schedules, improving study consistency by 45%. Integrated Google Gemini to perform behavior-based schedule optimization. Designed a habit-tracking and analytics system using Supabase.",
    tech: ["Next.js", "Google Gemini", "Supabase", "Analytics APIs"],
    github: "https://github.com/Jaysupp/NOCTAVE",
    live: "https://noctave.netlify.app/",
    color: "var(--color-primary)",
    image: "/noctave.png",
  },
  {
    title: "Pathora",
    description: "Developed an AI-driven travel planner integrating Google Gemini and OpenRouteService APIs for dynamic itinerary creation and route visualization. Built a scalable Supabase backend with secure auth and Edge Functions. Engineered a responsive frontend using Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS", "Google Gemini", "APIs"],
    github: "#",
    live: "https://pathora.netlify.app/",
    color: "var(--color-accent)",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="p-8 md:p-16 bg-[var(--color-primary)]">
      <div className="mb-8">
        <h2 className="font-heading text-4xl md:text-5xl uppercase w-fit bg-black text-white px-4 py-2 brutal-border">
          SELECTED_WORKS
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Card className="flex h-full flex-col p-4 md:p-6 brutal-shadow hover:brutal-shadow-hover transition-all bg-white">
              {project.image ? (
                <div className="w-full aspect-video border-[3px] border-black mb-6 relative overflow-hidden bg-black brutal-shadow-sm">
                  {/* Using standard img tag for simplicity, can be Next/Image later if needed */}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
              ) : (
                <div
                  className="w-full aspect-video border-[3px] border-black mb-6"
                  style={{ backgroundColor: project.color }}
                >
                  {/* Placeholder for projects without images */}
                </div>
              )}

              <div className="flex flex-col flex-grow">
                {/* Title and Link Button */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl md:text-3xl uppercase font-bold text-black tracking-tight">{project.title}</h3>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 border-[3px] border-black bg-[#34C759] flex items-center justify-center hover:bg-[#34C759]/80 transition-colors brutal-shadow-sm"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-5 w-5 text-black" />
                  </a>
                </div>

                {/* Description */}
                <p className="mb-6 font-mono text-sm md:text-base text-gray-700 leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* Spacer to push tags to bottom if cards differ in height */}
                <div className="flex-grow"></div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-black text-white px-2 py-1 font-mono text-xs font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
