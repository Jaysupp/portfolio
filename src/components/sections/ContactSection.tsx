"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, User, Youtube, Instagram } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="snap-section bg-black text-white flex flex-col">
      <div className="section-inner flex-1 flex flex-col justify-center">
        {/* ── Contact Form Area ── */}
        <div className="px-4 py-12 md:px-16 md:py-16 flex-1 flex items-center justify-center">
          <div className="mx-auto max-w-2xl w-full bg-white text-black p-8 brutal-border brutal-shadow-lg">
            <h2 className="mb-2 font-heading text-4xl uppercase">Let&apos;s Talk Code</h2>
            <p className="mb-8 font-mono text-gray-600">
              // Initialize a connection block and transmit data.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center border-[3px] border-black bg-[var(--color-accent)] p-8 text-center"
              >
                <h3 className="mb-2 font-heading text-2xl uppercase">Transmission Successful</h3>
                <p className="font-mono font-bold">ACK received. I will process your request shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Input label="Name" required placeholder="Enter your designation" />
                  <Input label="Email" type="email" required placeholder="Email vector" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="payload" className="font-heading text-sm uppercase tracking-wider">Payload</label>
                  <textarea
                    id="payload"
                    required
                    rows={4}
                    placeholder="Enter transmission data here..."
                    className="brutal-border brutal-shadow-hover resize-none bg-white p-3 font-mono text-black outline-none focus:bg-[var(--color-primary)] focus:ring-0"
                  />
                </div>

                <Button
                  type="submit"
                  variant="dark"
                  disabled={status === "submitting"}
                  className="mt-2 w-full md:w-auto md:self-end"
                >
                  {status === "submitting" ? "Transmitting..." : "Execute Transmission"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* ── Integrated Footer ── */}
        <footer className="border-t-[3px] border-gray-800 px-4 py-8 md:px-16">
          <div className="mx-auto max-w-[1400px]">
            {/* Top row: name + socials */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="font-heading text-lg uppercase tracking-wider">Jayachandran Ayush</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a href="tel:+918075450625" className="font-mono text-sm hover:text-[var(--color-primary)] transition-colors">8075450625</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a href="mailto:ayushjc125@gmail.com" className="font-mono text-sm hover:text-[var(--color-primary)] transition-colors">ayushjc125@gmail.com</a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="https://github.com/Jaysupp" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 hover:bg-white hover:text-black transition-colors border-[2px] border-transparent hover:border-black" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://linkedin.com/in/ayushjc" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 hover:bg-[#0077B5] hover:text-white transition-colors border-[2px] border-transparent hover:border-black" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 hover:bg-white hover:text-black transition-colors border-[2px] border-transparent hover:border-black" aria-label="X (Twitter)">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 hover:bg-[#FF0000] hover:text-white transition-colors border-[2px] border-transparent hover:border-black" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 hover:bg-[#E1306C] hover:text-white transition-colors border-[2px] border-transparent hover:border-black" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-800 pt-4 font-mono text-[10px] uppercase text-gray-500">
              <p>© {new Date().getFullYear()} Jayachandran Ayush. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
                <a href="#" className="hover:text-white transition-colors">Security Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
