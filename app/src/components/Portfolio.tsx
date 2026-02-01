"use client";
import { useState } from "react";
import { projects } from "../data/projects";
import { Category } from "../data/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { ExternalLink, Github, Layers } from "lucide-react";

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tous");

  const categories: Category[] = [
    "Tous",
    "FullStack",
    "Frontend",
    "Data & Analytics",
    "Outils & Utilitaires",
  ];

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "Tous" ? true : project.categorie === selectedCategory,
  );

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] rounded font-mono text-sm mb-2">
            02. Portfolio
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 font-mono">
            Projets <span className="text-[#7000ff]">Réalisés</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Une sélection de travaux alliant logique backend, interface moderne
            et visualisation de données.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded font-mono text-xs font-bold transition-all duration-300 uppercase tracking-wider ${
                selectedCategory === cat
                  ? "bg-[#00f0ff] text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  : "bg-zinc-900 border border-white/10 text-zinc-400 hover:border-[#00f0ff]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col h-full overflow-hidden group border-zinc-800 bg-zinc-900/30"
            >
              <div className="h-48 overflow-hidden relative bg-zinc-950">
                <div className="absolute inset-0 bg-[#00f0ff]/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.titre}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-black/80 backdrop-blur text-white border-white/20">
                    {project.categorie}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2 text-white group-hover:text-[#00f0ff] transition-colors">
                  {project.titre}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[10px] border-zinc-700 text-zinc-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge
                      variant="outline"
                      className="text-[10px] border-zinc-700 text-zinc-500"
                    >
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="border-t border-white/5 gap-3 pt-4 bg-black/20">
                {project.lienDemo && (
                  <a
                    href={project.lienDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2 border-zinc-700 hover:border-[#00f0ff] hover:text-[#00f0ff]"
                    >
                      <ExternalLink className="h-3 w-3" /> Live
                    </Button>
                  </a>
                )}
                {project.lienGithub && (
                  <a
                    href={project.lienGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2 border-zinc-700 hover:border-[#7000ff] hover:text-[#7000ff]"
                    >
                      <Github className="h-3 w-3" /> Code
                    </Button>
                  </a>
                )}
                {/* Add spacing if only one button is present */}
                {!project.lienDemo && !project.lienGithub && (
                  <div className="flex-1 text-center">
                    <span className="text-zinc-500 text-sm">
                      {" "}
                      Pas de démo ni de code disponible ...{" "}
                    </span>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
            <Layers className="w-12 h-12 mb-4 opacity-20" />
            <p className="font-mono">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
