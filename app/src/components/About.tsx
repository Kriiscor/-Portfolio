import React from "react";
import { Badge } from "./ui/Badge";
import { Database, Layout, Server, Cpu, Terminal } from "lucide-react";

const About: React.FC = () => {
  const skills = {
    Frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
    Backend: ["C#", ".NET", "Node.js", "PHP", "Python"],
    Database: ["SQL", "PostgreSQL", "MySQL", "Firebase", "MongoDB"],
    Cloud_DevOps: ["Azure", "Docker", "Git", "Power BI"],
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border border-[#7000ff]/30 bg-[#7000ff]/10 text-[#a855f7] rounded font-mono text-sm mb-2">
              01. À Propos
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl font-mono">
              Architecture & <span className="text-[#00f0ff]">Données</span>
            </h2>
            <div className="text-zinc-400 leading-relaxed space-y-4 text-lg">
              <p>
                Je suis <strong className="text-white">Corentin DUBAIL</strong>,
                un développeur hybride naviguant entre le code propre et
                l`analyse de données précises.
              </p>
              <p>
                Actuellement en alternance chez{" "}
                <strong className="text-white">Giva Assurances</strong>, je
                conçois des solutions FullStack où chaque pixel et chaque donnée
                compte. Mon objectif ? Rendre le complexe accessible.
              </p>
              <p>
                Ma stack de prédilection tourne autour de l`écosystème{" "}
                <span className="text-[#00f0ff] font-mono">React</span> pour le
                front et{" "}
                <span className="text-[#7000ff] font-mono">C#/.NET</span> pour
                le back, le tout propulsé par une analyse data rigoureuse.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 font-mono flex items-center gap-2">
              <Terminal className="text-[#00f0ff] w-5 h-5" /> Stack Technique
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Frontend */}
              <div className="bg-zinc-900/50 border border-white/5 p-5 rounded-lg hover:border-[#00f0ff]/30 transition-colors group">
                <div className="flex items-center gap-2 mb-3 text-zinc-300 group-hover:text-[#00f0ff]">
                  <Layout className="w-4 h-4" />
                  <h4 className="font-mono text-sm uppercase tracking-wider">
                    Frontend
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.Frontend.map((s) => (
                    <Badge key={s} variant="default">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-zinc-900/50 border border-white/5 p-5 rounded-lg hover:border-[#7000ff]/30 transition-colors group">
                <div className="flex items-center gap-2 mb-3 text-zinc-300 group-hover:text-[#7000ff]">
                  <Server className="w-4 h-4" />
                  <h4 className="font-mono text-sm uppercase tracking-wider">
                    Backend
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.Backend.map((s) => (
                    <Badge key={s} variant="neon">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="bg-zinc-900/50 border border-white/5 p-5 rounded-lg hover:border-[#00f0ff]/30 transition-colors group">
                <div className="flex items-center gap-2 mb-3 text-zinc-300 group-hover:text-[#00f0ff]">
                  <Database className="w-4 h-4" />
                  <h4 className="font-mono text-sm uppercase tracking-wider">
                    Database
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.Database.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Cloud */}
              <div className="bg-zinc-900/50 border border-white/5 p-5 rounded-lg hover:border-[#7000ff]/30 transition-colors group">
                <div className="flex items-center gap-2 mb-3 text-zinc-300 group-hover:text-[#7000ff]">
                  <Cpu className="w-4 h-4" />
                  <h4 className="font-mono text-sm uppercase tracking-wider">
                    Cloud & Outils
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.Cloud_DevOps.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
