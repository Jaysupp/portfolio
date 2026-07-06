"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    id: "01",
    institution: "Lovely Professional University Punjab",
    degree: "Computer Science and Engineering",
    duration: "2022 – Present",
    location: "Jalandhar, Punjab",
    isPrimary: true,
  },
  {
    id: "02",
    institution: "Nochad Higher Secondary School",
    degree: "12th with Science — Percentage: 91.25%",
    duration: "2019 – 2021",
    location: "Kozhikode, Kerala",
    isPrimary: false,
  },
  {
    id: "03",
    institution: "St Meera's Public School",
    degree: "10th with Science — Percentage: 94%",
    duration: "2018 – 2019",
    location: "Kozhikode, Kerala",
    isPrimary: false,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="snap-section flex items-center relative overflow-hidden bg-white" style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      <div className="section-inner w-full py-16 md:py-24">
        {/* Container */}
        <div className="mx-auto max-w-[1000px] px-4 sm:px-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter flex items-center justify-center relative">
              EDUCATION<span className="text-[#00FF41]">_SYS</span>
            </h2>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Main vertical line */}
            <div className="absolute left-[16px] md:left-[24px] top-2 bottom-6 w-[3px] bg-black"></div>

            {/* Education items */}
            <div className="space-y-8 md:space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline node */}
                  <div className={`absolute ${edu.isPrimary ? 'left-[9px] md:left-[17px] top-8 w-[17px] h-[17px]' : 'left-[11px] md:left-[19px] top-6 w-[13px] h-[13px]'} bg-[#00FF41] border-[3px] border-black brutal-shadow-sm z-10`}></div>

                  {/* Content Box */}
                  <div className={`bg-white border-[3px] border-black brutal-shadow group transition-all duration-300 hover:brutal-shadow-hover ${edu.isPrimary ? 'p-8 md:p-10' : 'p-5 md:p-6'}`}>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div>
                        <h3 className={`font-heading uppercase text-black leading-tight ${edu.isPrimary ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>
                          {edu.institution}
                        </h3>
                        <div className={`font-mono font-bold mt-3 uppercase ${edu.isPrimary ? 'text-base md:text-xl' : 'text-sm md:text-base text-gray-700'}`}>
                          {edu.isPrimary ? <span className="bg-black text-[#00FF41] px-3 py-1 brutal-border">{edu.degree}</span> : edu.degree}
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                        <span className={`bg-black text-white font-mono font-bold uppercase whitespace-nowrap brutal-border ${edu.isPrimary ? 'px-4 py-2 text-sm md:text-base' : 'px-3 py-1 text-xs md:text-sm'}`}>
                          {edu.duration}
                        </span>
                        <span className="font-mono text-xs md:text-sm font-bold text-gray-500 uppercase">
                          {edu.location}
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
