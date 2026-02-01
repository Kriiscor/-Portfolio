import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    titre: "Giva",
    description:
      "Participation à la création, maintenance et amélioration continue de 3 applications métier C#/.NET/React/Azure. Développement de composants React/TypeScript pour les équipes commerciales, partenaires et clients. Création et maintenance d'APIs .NET Core pour exposer les données vers les interfaces front-end. Intégration de composants UI ergonomiques (consultation, affichage, interaction) et manipulation de données SQL. Travail en méthodologie Agile avec tests unitaires.",
    categorie: "FullStack",
    image: "/Giva.png",
    technologies: [
      "React.js",
      "TypeScript",
      "C#",
      ".NET Core",
      "ASP.NET",
      "Microsoft Azure",
      "SQL",
      "Git",
    ],
    lienDemo: "https://www.giva.fr",
  },
  {
    id: 2,
    titre: "Hyperion",
    description:
      "Template moderne et prêt à l'emploi pour développer rapidement des applications web. Stack complète avec Next.js 15+, shadcn/ui pour les composants UI accessibles, React Query pour la gestion des données, et Tailwind CSS pour le styling. Inclut validation Zod, animations Framer Motion, formulaires React Hook Form, et testing Jest/RTL.",
    categorie: "Outils & Utilitaires",
    image: "/Hyperion.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Query",
      "Zod",
      "Framer Motion",
      "Jest",
    ],
    lienGithub: "https://github.com/Kriiscor/hyperion",
  },
  {
    id: 3,
    titre: "Portfolio",
    description:
      "Site portfolio personnel présentant mes projets et compétences. Développé avec Next.js 16 et React 19, animations fluides avec Framer Motion, styling moderne avec Tailwind CSS. Architecture propre avec TypeScript et validation Zod.",
    categorie: "Frontend",
    image: "Portfolio.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    lienGithub: "https://github.com/Kriiscor/-portfolio",
  },
];
