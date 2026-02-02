"use client";
import { useEffect } from "react";
import { Project } from "../../data/types";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ExternalLink, Github, X, Check } from "lucide-react";

interface PortfolioModaleProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModale: React.FC<PortfolioModaleProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl shadow-[#00f0ff]/10 animate-in fade-in zoom-in-95 duration-200 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-15 p-2 rounded-full bg-black/50 backdrop-blur text-zinc-400 hover:text-white hover:bg-black/70 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image header */}
        {project.image && (
          <div className="relative h-64 md:h-80 overflow-hidden bg-zinc-950 rounded-t-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
            <img
              src={project.image}
              alt={project.titre}
              className="w-full h-full object-contain bg-zinc-950"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute bottom-4 left-6 z-20">
              <Badge className="bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]/30">
                {project.categorie}
              </Badge>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
            {project.titre}
          </h2>

          {/* Description */}
          <p className="text-zinc-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-sm font-mono text-[#00f0ff] mb-3 uppercase tracking-wider">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs border-zinc-700 text-zinc-300 hover:border-[#7000ff] hover:text-[#7000ff] transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-mono text-[#00f0ff] mb-3 uppercase tracking-wider">
                Fonctionnalités
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <Check className="h-4 w-4 text-[#00f0ff] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800">
            {project.lienDemo && (
              <a
                href={project.lienDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2 bg-[#00f0ff] text-black hover:bg-[#00f0ff]/80 font-mono">
                  <ExternalLink className="h-4 w-4" />
                  Voir la démo
                </Button>
              </a>
            )}
            {project.lienGithub && (
              <a
                href={project.lienGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="gap-2 border-[#7000ff] text-[#7000ff] hover:bg-[#7000ff]/10 font-mono"
                >
                  <Github className="h-4 w-4" />
                  Voir le code
                </Button>
              </a>
            )}
            {!project.lienDemo && !project.lienGithub && (
              <span className="text-zinc-500 text-sm font-mono">
                Pas de démo ni de code disponible
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModale;
