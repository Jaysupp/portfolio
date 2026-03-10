import Link from "next/link";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 pointer-events-none">
      <div className="pointer-events-auto bg-white brutal-border brutal-shadow px-4 py-2 font-heading text-sm uppercase tracking-wider text-black">
        AyushJC.exe
      </div>
      
      <nav className="pointer-events-auto hidden md:flex items-center gap-6 bg-white brutal-border brutal-shadow px-6 py-2">
        <Link href="#about" className="font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /ABOUT
        </Link>
        <Link href="#skills" className="font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /SKILLS
        </Link>
        <Link href="#experience" className="font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /LOGS
        </Link>
        <Link href="#projects" className="font-mono text-xs font-bold text-gray-800 hover:text-black hover:underline hover-target">
          /WORK
        </Link>
        <Button variant="primary" className="!py-1 !px-3 !text-xs brutal-shadow-none">
          HIRE_ME
        </Button>
      </nav>
    </header>
  );
}
