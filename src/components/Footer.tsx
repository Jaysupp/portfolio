import { Github, Linkedin, Twitter, Mail, Phone, User, Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t-[3px] border-black pb-24 md:pb-8">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-16">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b-[3px] border-gray-800 pb-16 mb-8">

          {/* Left Side - Big Text */}
          <div>
            <h2 className="font-heading text-5xl md:text-7xl uppercase mb-6 leading-[0.9]">
              With you for the <br /><span className="text-[var(--color-primary)]">long run</span>
            </h2>
            <p className="font-mono text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
              Whether you are a client, partner, or fellow developer, my promise is to build reliable software for the long run. Let's take the first step together.
            </p>
          </div>

          {/* Right Side - Contact Details */}
          <div className="flex flex-col gap-6 font-mono text-sm md:text-base md:border-l-[3px] border-gray-800 md:pl-12">
            <div className="flex items-center gap-4 group">
              <div className="bg-gray-800 p-3 group-hover:bg-[var(--color-primary)] group-hover:text-black transition-colors border-[2px] border-transparent group-hover:border-black brutal-shadow-sm">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">Developer</p>
                <span className="font-bold uppercase tracking-wider text-lg">Jayachandran Ayush</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-gray-800 p-3 group-hover:bg-[#34C759] group-hover:text-black transition-colors border-[2px] border-transparent group-hover:border-black brutal-shadow-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">Phone</p>
                <a href="tel:+918075450625" className="font-bold text-lg hover:text-[#34C759] transition-colors">8075450625</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-gray-800 p-3 group-hover:bg-[#007AFF] group-hover:text-white transition-colors border-[2px] border-transparent group-hover:border-black brutal-shadow-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase mb-1">Email</p>
                <a href="mailto:ayushjc125@gmail.com" className="font-bold text-lg hover:text-[#007AFF] transition-colors break-all">ayushjc125@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-mono text-xs uppercase text-gray-500 text-center md:text-left">
            <p>© {new Date().getFullYear()} Jayachandran Ayush. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Notice</a>
              <a href="#" className="hover:text-white transition-colors">Security Policy</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="https://github.com/Jaysupp" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 hover:bg-white hover:text-black transition-colors border-[2px] border-transparent hover:border-black brutal-shadow-sm" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/ayushjc" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 hover:bg-[#0077B5] hover:text-white transition-colors border-[2px] border-transparent hover:border-black brutal-shadow-sm" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 hover:bg-white hover:text-black transition-colors border-[2px] border-transparent hover:border-black brutal-shadow-sm" aria-label="X (Twitter)">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 hover:bg-[#FF0000] hover:text-white transition-colors border-[2px] border-transparent hover:border-black brutal-shadow-sm" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 hover:bg-[#E1306C] hover:text-white transition-colors border-[2px] border-transparent hover:border-black brutal-shadow-sm" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
