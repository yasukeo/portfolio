// ─── Central data file – all portfolio content in one place ───

export const siteConfig = {
  name: "Yasser Etebbai",
  title: "Yasser Etebbai — Développeur Full-Stack",
  description:
    "Portfolio de Yasser Etebbai — Développeur Full-Stack (Next.js/TypeScript) • Java/Spring Boot • Élève ingénieur en IA & Data",
  url: "https://yasser-etebbai.vercel.app",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/yasukeo",
    linkedin: "https://www.linkedin.com/in/yasser-etebbai-ab223b3b2/",
  },
};

export const identity = {
  name: "Yasser Etebbai",
  role: "Développeur Full-Stack (Next.js/TypeScript) • Java/Spring Boot • Élève ingénieur en IA & Data",
  shortRole: "IA & Data / Full-Stack Developer",
  heroTagline: "Je conçois des applications web modernes, performantes et élégantes.",
  heroDescription:
    "Passionné par le développement full-stack et l'ingénierie logicielle, je construis des solutions complètes — du design à la mise en production — avec Next.js, TypeScript et Spring Boot.",
  about: [
    "Élève ingénieur spécialisé en Intelligence Artificielle et Data Science, je développe des applications web complètes en parallèle de ma formation.",
    "Mon approche allie rigueur technique et sens du design : architectures solides, interfaces soignées, et déploiements automatisés.",
    "J'ai une expérience concrète en développement distribué (Spring Batch, Kafka, Camunda) grâce à mon stage chez Atos, et je construis des plateformes e-commerce et éducatives en Next.js.",
  ],
  profileImage: "/pfp.jpeg",
};

export interface ExperienceItem {
  company: string;
  logo?: string;
  title: string;
  type: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
  highlights?: { label: string; items: string[] }[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Atos",
    title: "Stagiaire Développeur Java / Spring Boot — POC Remote Partitioning",
    type: "Stage",
    period: "Juil. 2025 – Sep. 2025 · 3 mois",
    location: "Rabat, Maroc · On-site",
    description: [
      "Développement d'un Proof of Concept (POC) de traitement distribué via Remote Partitioning pour des traitements massifs.",
      "Étude et prise en main des concepts Remote Partitioning (Spring Batch / architecture distribuée) et des cas d'usage de traitement parallèle.",
      "Spécification du POC : définition du cas d'usage, découpage en partitions, choix des formats d'échange (JSON / Avro).",
      "Évaluation comparative : scalabilité, complexité, monitoring, performance, intégration.",
      "Livrables : code Git, documentation technique, tableau comparatif, présentation finale & recommandations.",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "REST APIs",
      "Apache Kafka",
      "Camunda BPMN",
      "Docker",
      "Kubernetes",
      "GitLab",
      "Git",
    ],
    highlights: [
      {
        label: "REST",
        items: [
          "Orchestration master → workers via endpoints HTTP",
          "Communication synchrone entre partitions",
          "Simple à implémenter et déboguer",
        ],
      },
      {
        label: "Kafka",
        items: [
          "Partitions publiées sur topics, workers consommateurs",
          "Communication asynchrone et découplée",
          "Haute scalabilité et tolérance aux pannes",
        ],
      },
      {
        label: "Camunda",
        items: [
          "Modélisation BPMN (multi-instance / external tasks)",
          "Monitoring visuel des processus",
          "Orchestration complexe avec gestion d'état",
        ],
      },
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  period: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  stack: { name: string; usage: string }[];
  links: { live?: string; repo?: string };
  tags: string[];
  image?: string;
  logo?: string;
}

export const projects: Project[] = [
  {
    slug: "elwarcha",
    title: "Elwarcha — Marketplace de peintures artisanales",
    shortTitle: "Elwarcha",
    subtitle: "E-commerce pour œuvres d'art",
    period: "Oct. 2025 – Présent",
    description:
      "Plateforme e-commerce moderne pour mettre en vente des tableaux et œuvres artisanales marocaines. Galerie avec filtres, panier d'achat, pipeline de commande, formulaire de contact, et un espace admin authentifié.",
    problem:
      "Les artistes marocains manquent d'une plateforme en ligne professionnelle pour exposer et vendre leurs œuvres. Les solutions existantes ne valorisent pas suffisamment l'art artisanal.",
    solution:
      "Création d'un storefront e-commerce élégant avec galerie de peintures, système de panier/commande complet, et un dashboard admin pour gérer les œuvres, artistes, styles, techniques et remises.",
    features: [
      "Galerie de peintures avec filtres par style, technique et artiste",
      "Panier d'achat et pipeline de commande (checkout)",
      "Espace admin authentifié (CRUD peintures, artistes, styles, techniques, remises)",
      "Upload d'images via Cloudinary (signed uploads côté navigateur)",
      "Authentification par credentials (JWT via next-auth)",
      "Formulaire de contact",
      "UI responsive avec composants shadcn-inspired",
      "Tests unitaires (Vitest) et e2e (Playwright)",
      "Déploiement automatique sur Vercel",
    ],
    stack: [
      { name: "Next.js 15", usage: "App Router, Server & Client Components" },
      { name: "React 19", usage: "Interface utilisateur" },
      { name: "TypeScript", usage: "Typage strict" },
      { name: "Tailwind CSS v4", usage: "Design system, styles utilitaires" },
      { name: "Prisma 6", usage: "ORM, PostgreSQL (Supabase)" },
      { name: "next-auth", usage: "Authentification (JWT)" },
      { name: "Cloudinary", usage: "Stockage et optimisation d'images" },
      { name: "Vitest", usage: "Tests unitaires/composants" },
      { name: "Playwright", usage: "Tests end-to-end" },
      { name: "Vercel", usage: "Hébergement et CI/CD" },
    ],
    links: {
      live: "https://elwarcha.com",
      repo: "https://github.com/yasukeo/atelier",
    },
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "Tailwind CSS",
      "next-auth",
      "Vercel",
    ],
    logo: "/projects/elwarcha/Plan de travail 9.png",
  },
  {
    slug: "ateliermath",
    title: "AtelierMath — Plateforme de soutien en mathématiques",
    shortTitle: "AtelierMath",
    subtitle: "Plateforme éducative full-stack",
    period: "2025",
    description:
      "Application web complète permettant à une professeure de mathématiques de gérer ses élèves, publier des leçons et devoirs, planifier ses disponibilités, recevoir des réservations et suivre les soumissions — le tout depuis un tableau de bord moderne.",
    problem:
      "Les professeurs de soutien scolaire gèrent manuellement leurs élèves, cours et plannings. Il n'existe pas de plateforme intégrée adaptée à leurs besoins spécifiques.",
    solution:
      "Développement d'une plateforme complète avec dashboard professeur, espace élève, système de réservation, et emails automatiques — 27 routes, RLS strict, et cron jobs pour les rappels.",
    features: [
      "Dashboard professeur : stats, widgets, gestion complète",
      "CRUD élèves avec recherche et filtre par niveau (2nde, 1ère, Terminale)",
      "Leçons en Markdown avec prévisualisation et ciblage par niveau",
      "Devoirs avec deadline, correction avec notes et commentaires",
      "Calendrier de disponibilités (créneaux récurrents + exceptions)",
      "Page publique de réservation avec sélection de créneau",
      "Gestion des réservations (accepter / refuser / annuler)",
      "6 templates d'emails transactionnels (Resend)",
      "Rappels automatiques de deadline (cron)",
      "Espace élève (leçons + devoirs + soumissions)",
      "Row Level Security (RLS) strict sur toutes les tables",
      "Landing page responsive avec 8 sections",
      "27 routes (publiques, professeur, élève, API)",
    ],
    stack: [
      { name: "Next.js 16", usage: "App Router, Server Components, Server Actions" },
      { name: "React 19", usage: "Interface utilisateur" },
      { name: "TypeScript", usage: "Typage strict" },
      { name: "Supabase", usage: "Auth, PostgreSQL, Row Level Security" },
      { name: "Resend", usage: "Emails transactionnels (6 templates)" },
      { name: "Tailwind CSS 4", usage: "Design system, CSS custom properties" },
      { name: "date-fns", usage: "Manipulation de dates" },
      { name: "react-markdown", usage: "Rendu Markdown dans les leçons" },
      { name: "Lucide React", usage: "Icônes SVG" },
      { name: "Vercel", usage: "Hébergement + cron jobs" },
    ],
    links: {
      live: "https://atelier-math.vercel.app",
      repo: "https://github.com/yasukeo/AtelierMath",
    },
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Resend",
      "Tailwind CSS",
      "Vercel",
    ],
    logo: "/projects/ateliermath/logo-128.png",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan",
    date: "Déc. 2024",
    credentialId: "L93ZQJZ37RHN",
    skills: ["JavaScript"],
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University",
    date: "Déc. 2024",
    credentialId: "P5QM49KUX0YL",
    skills: ["Unix"],
  },
  {
    title: "Introduction à la programmation orientée objet (en C++)",
    issuer: "EPFL",
    date: "Déc. 2024",
    credentialId: "6Y92C9SXWEXG",
    skills: ["C++"],
  },
  {
    title: "La recherche documentaire",
    issuer: "École Polytechnique",
    date: "Avr. 2025",
    credentialId: "YSMC948ZUMZM",
    skills: ["Research Skills"],
  },
  {
    title: "Software Engineering: Software Design and Project Management",
    issuer: "HKUST",
    date: "Avr. 2025",
    credentialId: "T8VZ1YPITJXB",
    skills: ["Software Engineering", "Software Development"],
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Avr. 2025",
    credentialId: "WNTSU9DLZGSP",
    skills: ["Python"],
  },
  {
    title: "React Basics",
    issuer: "Meta",
    date: "Déc. 2025",
    credentialId: "U1YXWSLYV8R5",
    skills: ["React.js"],
  },
  {
    title: "React Native",
    issuer: "Meta",
    date: "Déc. 2025",
    credentialId: "47H9MR3NWGHV",
    skills: ["React Native"],
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML/CSS",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "REST APIs",
      "Node.js",
      "Python",
    ],
  },
  {
    category: "Bases de données",
    skills: ["PostgreSQL", "Supabase", "Prisma", "MongoDB", "Neo4j", "Cassandra"],
  },
  {
    category: "DevOps & Outils",
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "GitLab",
      "Vercel",
      "CI/CD",
    ],
  },
  {
    category: "Messaging & Orchestration",
    skills: ["Apache Kafka", "Camunda BPMN"],
  },
  {
    category: "Services Cloud",
    skills: ["Cloudinary", "Resend", "next-auth"],
  },
  {
    category: "Testing",
    skills: ["Vitest", "Playwright", "Testing Library"],
  },
  {
    category: "Autres",
    skills: ["C", "C++", "C#", ".NET", "Unix", "Microservices", "UI/UX Design"],
  },
];

export const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
