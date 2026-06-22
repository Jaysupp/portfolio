"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: "01",
    role: "Summer Internship / Training",
    company: "CipherSchools – Data Structures & Algorithms (DSA)",
    date: "",
    log: [
      "Gained knowledge of DSA concepts including sorting algorithms, dynamic programming, trees, graphs, and linked lists.",
      "Enhanced algorithmic thinking by solving problem-solving challenges.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      {/* Container */}
      <div className="mx-auto max-w-[1000px] px-4 sm:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter flex items-center justify-center relative">
            EXPERIENCE<span className="text-red-500">_LOG</span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[16px] md:left-[24px] top-2 bottom-6 w-[3px] bg-black"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-[9px] md:left-[17px] top-6 w-[17px] h-[17px] bg-[#FFCC00] border-[3px] border-black brutal-shadow-sm z-10"></div>

                {/* Content Box */}
                <div className="bg-white border-[3px] border-black p-6 md:p-8 brutal-shadow group transition-all duration-300 hover:brutal-shadow-hover">

                  {/* Item Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl uppercase text-black leading-tight">
                        {exp.role}
                      </h3>
                      {exp.company && (
                        <p className="font-mono text-sm md:text-base font-bold text-gray-600 mt-1 uppercase">
                          {exp.company}
                        </p>
                      )}
                    </div>

                    {exp.date && (
                      <span className="bg-black text-white px-3 py-1 font-mono text-xs md:text-sm font-bold uppercase whitespace-nowrap brutal-border self-start">
                        {exp.date}
                      </span>
                    )}
                  </div>

                  {/* Log entries */}
                  <ul className="space-y-3">
                    {exp.log.map((entry, i) => (
                      <li key={i} className="flex gap-3 font-mono text-sm md:text-base text-gray-800">
                        <span className="text-red-500 font-bold shrink-0">{'>'}</span>
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
