"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const experiences = [
  {
    id: "01",
    role: "Senior Full-Stack Engineer",
    company: "TechNova Inc.",
    date: "2023 - Present",
    log: [
      "> initialized neo-architecture for core product",
      "> migrated legacy monolith to next.js microservices",
      "> performance output increased by 400%",
    ],
  },
  {
    id: "02",
    role: "Software Developer",
    company: "Creative Studio X",
    date: "2021 - 2023",
    log: [
      "> engineered interactive web experiences for fortune 500 clients",
      "> masterminded the custom animation engine using framer motion",
      "> zero critical bugs in production across 15+ deployments",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b-[3px] border-black bg-black p-8 text-white md:p-16">
      <div className="mb-12 flex items-center gap-4">
        <Terminal className="h-10 w-10 text-[var(--color-accent)]" />
        <h2 className="font-heading text-5xl uppercase hover-target">System_Log</h2>
      </div>

      <div className="mx-auto max-w-4xl border-[3px] border-[var(--color-accent)] bg-black p-6 font-mono brutal-shadow-lg shadow-[var(--color-accent)]">
        <div className="mb-6 flex items-center gap-2 border-b-[3px] border-[var(--color-accent)] pb-4 text-[var(--color-accent)]">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm">ayush@system:~ $ cat experience.log</span>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-2 before:w-[3px] before:bg-[var(--color-accent)]"
            >
              <div className="absolute -left-[6px] top-2 h-[15px] w-[15px] border-[3px] border-[var(--color-accent)] bg-black"></div>
              
              <div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-end">
                <h3 className="font-heading text-2xl uppercase text-[var(--color-primary)]">
                  {exp.role}
                </h3>
                <span className="text-sm font-bold opacity-70">
                  [{exp.date}]
                </span>
              </div>
              <p className="mb-4 text-lg font-bold uppercase underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                @ {exp.company}
              </p>
              <ul className="space-y-2 opacity-80">
                {exp.log.map((entry, i) => (
                  <li key={i}>{entry}</li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center gap-2 text-[var(--color-accent)]"
          >
            <span>ayush@system:~ $</span>
            <span className="animate-pulse">_</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
