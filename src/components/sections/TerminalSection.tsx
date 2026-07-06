"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type LogEntry = {
  id: string;
  command?: string;
  output: React.ReactNode;
};

const SECTIONS = ["hero", "about", "skills", "experience", "certifications", "education", "projects", "contact"];

const SKILLS_LIST = [
  "REACT.JS", "NODE.JS", "PYTHON", "JAVA", "C++", "C#",
  "JAVASCRIPT", "TYPESCRIPT", "UNITY", "JUNIT", "SELENIUM",
  "MONGODB", "MYSQL", "POSTMAN", "GITHUB", "ECLIPSE",
];

// Calculate a fake uptime based on a fixed "start date"
function getUptime(): string {
  const startDate = new Date("2022-08-01T00:00:00");
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const d = days % 30;
  return `${years}Y ${months}M ${d}D`;
}

export function TerminalSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "init",
      output: (
        <div className="text-green-400">
          Welcome to the interactive terminal. Type &apos;help&apos; for a list of commands.
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newId = Date.now().toString();

    let output: React.ReactNode = "";

    // Parse compound commands
    const parts = trimmed.split(/\s+/);
    const baseCmd = parts[0];
    const arg = parts.slice(1).join(" ");

    switch (baseCmd) {
      case "help":
        output = (
          <div className="text-gray-300">
            Available commands:
            <br /> - <span className="text-blue-400">whoami</span>: Learn more about me
            <br /> - <span className="text-blue-400">projects</span>: View my latest works
            <br /> - <span className="text-blue-400">github</span>: Open my GitHub profile
            <br /> - <span className="text-blue-400">cv</span> / <span className="text-blue-400">resume</span>: Download my CV
            <br /> - <span className="text-blue-400">goto &lt;section&gt;</span>: Navigate to a section
            <br /> - <span className="text-blue-400">skills</span>: List tech stack
            <br /> - <span className="text-blue-400">ls</span>: List all sections
            <br /> - <span className="text-blue-400">uptime</span>: Show system uptime
            <br /> - <span className="text-blue-400">date</span>: Show current date/time
            <br /> - <span className="text-blue-400">clear</span>: Clear the terminal
          </div>
        );
        break;

      case "whoami":
        output = "I am Ayush, a creative developer blending tech and personality.";
        break;

      case "projects":
        output = "Check out the SELECTED_WORKS section above or type 'goto projects'!";
        break;

      case "github":
        output = "Opening GitHub profile...";
        window.open("https://github.com/Jaysupp", "_blank");
        break;

      case "cv":
      case "resume": {
        output = "Downloading CV...";
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Ayush_Resume.pdf";
        link.click();
        break;
      }

      case "goto": {
        if (!arg) {
          output = (
            <div className="text-red-400">
              Usage: goto &lt;section&gt;
              <br />
              <span className="text-gray-500">Available: {SECTIONS.join(", ")}</span>
            </div>
          );
        } else {
          // Fuzzy match section names
          const match = SECTIONS.find(
            (s) => s === arg || s.startsWith(arg)
          );
          if (match) {
            output = (
              <div className="text-green-400">
                Navigating to <span className="font-bold text-white">/{match.toUpperCase()}</span>...
              </div>
            );
            // Navigate after a brief delay for visual feedback
            setTimeout(() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const scrollFn = (window as any).__scrollToSection;
              if (scrollFn) scrollFn(match);
              setIsOpen(false);
            }, 500);
          } else {
            output = (
              <div className="text-red-400">
                Section &apos;{arg}&apos; not found.
                <br />
                <span className="text-gray-500">Available: {SECTIONS.join(", ")}</span>
              </div>
            );
          }
        }
        break;
      }

      case "skills":
      case "stack": {
        const rows: string[][] = [];
        for (let i = 0; i < SKILLS_LIST.length; i += 4) {
          rows.push(SKILLS_LIST.slice(i, i + 4));
        }
        output = (
          <div className="text-gray-300">
            <div className="text-[#00FF41] mb-1">// LOADED MODULES ({SKILLS_LIST.length})</div>
            <div className="font-mono text-xs space-y-1">
              {rows.map((row, i) => (
                <div key={i} className="flex gap-4">
                  {row.map((skill) => (
                    <span key={skill} className="text-white min-w-[110px]">
                      ■ {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
        break;
      }

      case "ls": {
        output = (
          <div className="text-gray-300 font-mono text-xs">
            <div className="text-[#00FF41] mb-1">// SECTIONS ({SECTIONS.length})</div>
            {SECTIONS.map((s, i) => (
              <div key={s}>
                <span className="text-gray-500">{String(i).padStart(2, "0")}.</span>{" "}
                <span className="text-white">/{s.toUpperCase()}</span>
                <span className="text-gray-600 ml-2">
                  {`[type: ${s === "hero" ? "landing" : s === "contact" ? "form" : "content"}]`}
                </span>
              </div>
            ))}
            <div className="text-gray-500 mt-2">Use &apos;goto &lt;name&gt;&apos; to navigate.</div>
          </div>
        );
        break;
      }

      case "uptime": {
        output = (
          <div className="text-gray-300">
            <span className="text-[#00FF41]">SYSTEM_UPTIME:</span>{" "}
            <span className="text-white font-bold">{getUptime()}</span>
            <br />
            <span className="text-gray-500 text-xs">// Time since first commit to the developer journey</span>
          </div>
        );
        break;
      }

      case "date": {
        const now = new Date();
        output = (
          <div className="text-gray-300">
            <span className="text-[#00FF41]">SYSTEM_TIME:</span>{" "}
            <span className="text-white">{now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
            <br />
            <span className="text-[#00FF41]">CLOCK:</span>{" "}
            <span className="text-white">{now.toLocaleTimeString("en-US", { hour12: true })}</span>
          </div>
        );
        break;
      }

      case "contact": {
        output = (
          <div className="text-green-400">
            Navigating to <span className="font-bold text-white">/CONTACT</span>...
          </div>
        );
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const scrollFn = (window as any).__scrollToSection;
          if (scrollFn) scrollFn("contact");
          setIsOpen(false);
        }, 500);
        break;
      }

      case "clear":
        setLogs([]);
        return;

      case "":
        output = "";
        break;

      default:
        output = <div className="text-red-400">Command not found: {trimmed}. Type &apos;help&apos; for available commands.</div>;
    }

    setLogs((prev) => [
      ...prev,
      { id: newId + "_cmd", command: cmd, output },
    ]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 flex h-12 items-center justify-center gap-3 px-4 rounded-none border-[3px] border-black bg-[var(--color-primary)] brutal-shadow hover:brutal-shadow-hover transition-all ${isOpen ? 'hidden' : 'flex'}`}
      >
        <TerminalIcon className="h-5 w-5 text-black" />
        <span className="font-heading text-sm uppercase font-bold text-black tracking-widest mt-0.5">JC_Terminal</span>
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] flex flex-col"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-gray-200 px-4 py-2 border-[3px] border-black border-b-0 brutal-shadow-sm">
              <div className="flex items-center gap-2">
                <TerminalIcon className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase">JC_TERMINAL_V1.0</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-red-500 hover:text-white p-1 transition-colors border-2 border-transparent hover:border-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              className="border-[3px] border-black bg-[#111111] h-[400px] p-4 overflow-y-auto font-mono text-sm text-gray-100 brutal-shadow cursor-text relative"
              onClick={() => inputRef.current?.focus()}
            >
              {logs.map((log) => (
                <div key={log.id} className="mb-2 whitespace-pre-wrap break-words">
                  {log.command !== undefined && (
                    <div className="flex gap-2">
                      <span className="text-green-500 font-bold shrink-0">ayush@root:~$</span>
                      <span className="text-white">{log.command}</span>
                    </div>
                  )}
                  {log.output && <div className="mt-1">{log.output}</div>}
                </div>
              ))}
              
              <div className="flex gap-2 items-center mt-2">
                <span className="text-green-500 font-bold shrink-0">ayush@root:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent border-none outline-none flex-1 text-white caret-white min-w-0"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
