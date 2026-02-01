# 🔮 HYPERION

> _"A weapon to surpass Metal Gear..."_ — Mais pour vos projets React. Hyperion est un template moderne et prêt à l'emploi basé sur **Next.js**, **shadcn/ui**, et **React Query**.

## 🎯 Qu'est-ce que c'est ?

Hyperion est un **starter template** pour développer rapidement des applications web modernes. Au lieu de passer des heures à configurer build tools, routing, state management, et components UI, vous avez tout en place et vous pouvez vous concentrer sur ce qui compte vraiment : **votre application**.

## ✨ Features

- ⚡ **Next.js 15+** — Routing automatique, SSR, API routes intégrées
- 🎨 **shadcn/ui** — Composants UI accessibles et customizables
- 📊 **React Query** — Gestion des données et cache côté client
- 🔵 **TypeScript** — Type-safety out of the box
- 💨 **Tailwind CSS** — Styling utility-first
- ✅ **ESLint + Prettier** — Code formatté et cohérent
- 🧪 **Jest + React Testing Library** — Testing ready
- 🎣 **React Hook Form** — Gestion des formulaires légère
- 🔐 **Zod** — Validation de schémas robuste
- 🎬 **Framer Motion** — Animations fluides

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Clone le repo
git clone https://github.com/Kriiscor/hyperion.git
cd hyperion

# Installe les dépendances
npm install

# Lance le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur et c'est bon !

## 🔧 Configuration

### Variables d'Environnement

```bash
# Copie le fichier d'exemple
cp .env.example .env.local

# Ajoute tes variables
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### React Query Setup

React Query est déjà configuré dans le provider root. Les appels API sont automatiquement mis en cache et re-validés intelligemment.

```tsx
// Exemple d'utilisation
"use client";

import { useQuery } from "@tanstack/react-query";

export default function Users() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      return res.json();
    },
  });

  if (isLoading) return <div>Chargement...</div>;
  return (
    <ul>
      {users?.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

### Ajouter des Composants shadcn/ui

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add form
```

## 📝 Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur dev

# Production
npm run build        # Build pour production
npm run start        # Lance le serveur de production

# Code quality
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript check

# Tests
npm run test         # Lance Jest
npm run test:watch   # Watch mode
```

## 🎨 Customization

### Tailwind Theme

Modifier `tailwind.config.ts` pour customizer les couleurs, fonts, etc.

```ts
export default {
  theme: {
    extend: {
      colors: {
        hyperion: "#FF6B00",
      },
    },
  },
};
```

### shadcn/ui Theming

Tous les composants shadcn/ui sont dans `components/ui/`. Vous pouvez les modifier librement sans risque de mise à jour.

## 🧪 Testing

Tests unitaires et d'intégration avec Jest + React Testing Library :

```bash
npm run test
```

## 📚 Ressources Utiles

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [React Query Docs](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com)

## 🤝 Contributing

Les PRs sont bienvenues ! N'hésitez pas à proposer des améliorations.

1. Fork le repo
2. Crée une branche (`git checkout -b feature/AmazingFeature`)
3. Commit tes changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvre une Pull Request

## 📄 License

MIT — Libre d'utilisation.

---

**Made with ❤️ & ⚡**

_"Sometimes, the line between tool and master blurs. Hyperion knows this truth."_
