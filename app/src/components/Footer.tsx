import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-400 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-1 font-mono tracking-tight">
              Corentin DUBAIL
            </h3>
            <p className="text-zinc-500 text-sm font-mono">
              Développeur FullStack & Data Analyst
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Kriiscor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/corentin-dubail-945641192/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:Corentindubail@gmail.com"
              className="text-zinc-500 hover:text-[#00f0ff] transition-colors text-sm font-mono"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-xs text-zinc-600 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Corentin Dubail. Designed with{" "}
            <span className="text-[#7000ff]">React</span> &{" "}
            <span className="text-[#00f0ff]">Tailwind</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
