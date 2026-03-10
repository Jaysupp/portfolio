"use client";

import { Card } from "@/components/Card";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Terminal.sh",
    description: "A web-based terminal emulator that executes real shell commands via a secure backend socket connection.",
    tech: ["Next.js", "Socket.io", "Docker", "Node.js"],
    github: "https://github.com/ayush/terminal-sh",
    live: "https://terminal.ayush.exe",
    color: "var(--color-primary)",
  },
  {
    title: "Brutalist Analytics",
    description: "High-contrast dashboard for visualizing heavy data streams in real-time. Unapologetic design, uncompromising performance.",
    tech: ["React", "D3.js", "Tailwind", "Supabase"],
    github: "https://github.com/ayush/brutal-analytics",
    live: "https://analytics.ayush.exe",
    color: "var(--color-accent)",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b-[3px] border-black p-8 md:p-16">
      <h2 className="mb-12 font-heading text-5xl uppercase hover-target w-fit bg-black text-white px-4 py-2 brutal-border brutal-shadow">
        Selected_Works
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Card className="flex h-full flex-col p-0">
              <div
                className="h-48 w-full border-b-[3px] border-black"
                style={{ backgroundColor: project.color }}
              ></div>
              <div className="flex flex-grow flex-col justify-between p-6">
                <div>
                  <h3 className="mb-4 font-heading text-3xl uppercase">{project.title}</h3>
                  <p className="mb-6 font-mono text-base text-gray-800">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-gray-200 px-2 py-1 font-mono text-xs font-bold uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 border-t-[3px] border-black pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-1 items-center justify-center gap-2 border-[3px] border-black bg-white py-2 font-heading text-sm uppercase transition-colors hover:bg-black hover:text-white"
                    >
                      <Github className="h-4 w-4" /> Source Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-1 items-center justify-center gap-2 border-[3px] border-black bg-[var(--color-primary)] py-2 font-heading text-sm uppercase transition-colors hover:bg-black hover:text-[var(--color-primary)]"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
