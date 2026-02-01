import React from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-10 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#1a1a1a] bg-black overflow-hidden relative z-10 ring-4 ring-black">
              <Image
                src="/PPcoco.png"
                alt="Corentin Dubail"
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                unoptimized
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 text-[#00f0ff] text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
            </span>
            Available for work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4 font-mono">
            Corentin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7000ff]">
              DUBAIL
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-zinc-400 mb-8 font-mono">
            Développeur FullStack <span className="text-[#7000ff]">&</span> Data
            Analyst En Devenir
          </h2>

          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl leading-relaxed mb-10">
            Je transforme des données complexes en interfaces web{" "}
            <span className="text-white font-medium">intuitives</span> et{" "}
            <span className="text-white font-medium">performantes</span>.
            Expertise en React, TypeScript et C# avec une vision data-driven.
            J`apprends à maîtriser les nouvelles technologies IA pour des
            solutions innovantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a href="#portfolio">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                Voir mes projets <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="neon" size="lg" className="w-full sm:w-auto">
                Me contacter
              </Button>
            </a>
            <a href="/Corentin_Dubail_CV.pdf" download="CV_Corentin_Dubail.pdf">
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto gap-2 text-zinc-500 hover:text-white"
              >
                CV <Download className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8">
            <a
              href="https://github.com/Kriiscor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#00f0ff] transition-all transform hover:scale-110"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/corentin-dubail-945641192/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#7000ff] transition-all transform hover:scale-110"
            >
              <Linkedin className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
