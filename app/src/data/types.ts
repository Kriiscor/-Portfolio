export type Category =
  | "Tous"
  | "FullStack"
  | "Frontend"
  | "Data & Analytics"
  | "Outils & Utilitaires";

export interface Project {
  id: number;
  titre: string;
  description: string;
  categorie: Category;
  image?: string;
  technologies: string[];
  lienDemo?: string;
  lienGithub?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
