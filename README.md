# Yasser Etebbai — Portfolio

Portfolio personnel premium construit avec Next.js 16 (App Router), TypeScript, Tailwind CSS et Framer Motion.

> **Live :** [yasser-etebbai.vercel.app](https://yasser-etebbai.vercel.app)

## Stack technique

| Technologie | Rôle |
|---|---|
| **Next.js 16** | App Router, Server Components, SSG |
| **TypeScript** | Typage strict |
| **Tailwind CSS 4** | Design system, dark mode |
| **Framer Motion** | Animations (scroll reveal, transitions, micro-interactions) |
| **next-themes** | Dark / light mode |
| **lucide-react** | Icônes SVG |

## Fonctionnalités

- **Hero animé** avec photo de profil, badge disponibilité et CTA
- **Section À propos** avec highlight cards
- **Timeline expérience** (Atos) avec tabs REST / Kafka / Camunda
- **Projets en bento grid** avec hover effects et liens
- **Case studies** détaillés (`/projects/elwarcha`, `/projects/ateliermath`)
- **Compétences filtrables** par catégorie
- **Certifications** en grille avec détails expandables
- **Formulaire de contact** + liens LinkedIn/GitHub
- **Dark mode** avec toggle
- **Scroll progress bar** + reveal on scroll
- **SEO** complet (metadata, OpenGraph, sitemap, robots)
- **Responsive** mobile-first
- **Accessibilité** (navigation clavier, `prefers-reduced-motion`)

## Setup

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Build production
npm run build
npm start
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Structure

```
src/
├── app/
│   ├── layout.tsx              # Layout racine (ThemeProvider, Navbar, Footer)
│   ├── page.tsx                # Page d'accueil (toutes les sections)
│   ├── globals.css             # Design system (CSS variables, dark mode)
│   ├── sitemap.ts              # Sitemap SEO
│   ├── robots.ts               # Robots.txt
│   └── projects/
│       ├── page.tsx            # Liste des projets
│       └── [slug]/
│           ├── page.tsx        # Route dynamique (SSG)
│           └── case-study.tsx  # Composant case study
├── components/
│   ├── navbar.tsx              # Navigation responsive + scroll spy
│   ├── footer.tsx              # Footer
│   ├── theme-provider.tsx      # next-themes provider
│   ├── theme-toggle.tsx        # Bouton dark/light
│   ├── scroll-progress.tsx     # Progress bar en haut
│   ├── reveal.tsx              # Animation reveal on scroll
│   ├── section-heading.tsx     # En-tête de section réutilisable
│   └── sections/
│       ├── hero.tsx            # Section Hero
│       ├── about.tsx           # Section À propos
│       ├── experience.tsx      # Section Expérience (timeline + tabs)
│       ├── projects.tsx        # Section Projets (bento grid)
│       ├── skills.tsx          # Section Compétences (filtres)
│       ├── certifications.tsx  # Section Certifications (grille)
│       └── contact.tsx         # Section Contact (formulaire + liens)
├── data/
│   └── portfolio.ts            # Toutes les données du portfolio
└── lib/
    └── utils.ts                # Utilitaire cn() (clsx + tailwind-merge)
```

## Modifier le contenu

Tout le contenu est centralisé dans `src/data/portfolio.ts`. Modifiez ce fichier pour changer :
- Identité et liens
- Expérience professionnelle
- Projets et case studies
- Compétences
- Certifications
- Navigation

## Déploiement

Le projet est prêt pour Vercel :

1. Pousser sur GitHub
2. Importer sur [vercel.com](https://vercel.com)
3. Déployer (aucune variable d'environnement requise)

## Choix de design

- **Dark premium** par défaut avec accent violet (#8b5cf6)
- **Gradient subtils** et blur pour la profondeur
- **Animations mesurées** : reveal on scroll, hover scale, spring transitions
- **Typographie Geist** (sans + mono) pour un rendu moderne
- **Bento grid** pour les projets, **timeline** pour l'expérience
- **Cards glassmorphism** avec bordures accent au hover

## Licence

Projet personnel — tous droits réservés.
