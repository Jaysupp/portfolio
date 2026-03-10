"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { motion } from "framer-motion";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="border-b-[3px] border-black bg-[var(--color-primary)] p-8 md:p-16">
      <div className="mx-auto max-w-2xl bg-white p-8 brutal-border brutal-shadow-lg">
        <h2 className="mb-2 font-heading text-4xl uppercase">Let's Talk Code</h2>
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
              <label className="font-heading text-sm uppercase tracking-wider">Payload</label>
              <textarea
                required
                rows={5}
                placeholder="Enter transmission data here..."
                className="brutal-border brutal-shadow-hover resize-none bg-white p-3 font-mono text-black outline-none focus:bg-[var(--color-primary)] focus:ring-0"
              />
            </div>

            <Button
              type="submit"
              variant="dark"
              disabled={status === "submitting"}
              className="mt-4 w-full md:w-auto md:self-end"
            >
              {status === "submitting" ? "Transmitting..." : "Execute Transmission"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
