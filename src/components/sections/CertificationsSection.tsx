"use client";

import { motion } from "framer-motion";

const certificates = [
  { id: "01", platform: "CipherSchools", title: "Unity & Game Development", date: "July 2024", url: "#" },
  { id: "02", platform: "Coursera", title: "Dynamic Programming, Greedy Algorithms", date: "May 2024", url: "#" },
  { id: "03", platform: "Coursera", title: "Approximation Algorithms and Linear Programming", date: "May 2024", url: "#" },
  { id: "04", platform: "Coursera", title: "Generative AI with Large Language Models", date: "April 2024", url: "#" },
  { id: "05", platform: "Coursera", title: "Programming in C++: A Hands-on Introduction", date: "February 2024", url: "#" },
  { id: "06", platform: "Udemy", title: "Mastering Data Structures and Algorithms using C and C++", date: "February 2024", url: "#" },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="snap-section flex items-center relative overflow-hidden bg-black">
      <div className="section-inner w-full py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8 relative z-10">

          {/* Header */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter flex items-center justify-center relative text-white">
              CERTIFICATIONS<span className="text-[#FF00FF]">_LOG</span>
            </h2>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-[3px] border-[#FF00FF] shadow-[4px_4px_0_0_#FF00FF] hover:shadow-[6px_6px_0_0_#FF00FF] hover:-translate-x-[2px] hover:-translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-300 p-6 flex flex-col h-full group"
              >
                <div className="mb-4 flex-grow">
                  <span className="inline-block bg-black text-[#FF00FF] px-2 py-1 font-mono text-xs md:text-sm font-bold uppercase mb-3">
                    {cert.platform}
                  </span>
                  <h3 className="font-heading text-xl uppercase text-black leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-sm font-bold text-gray-500 uppercase">
                    {cert.date}
                  </p>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full text-center bg-[#FF00FF] hover:bg-black text-black hover:text-[#FF00FF] border-[3px] border-black py-3 font-mono font-bold uppercase tracking-wider transition-colors duration-200"
                >
                  VERIFY
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
