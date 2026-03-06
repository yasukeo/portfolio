import { type ComponentType, type SVGProps } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiSpring,
  SiSpringboot,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGitlab,
  SiVercel,
  SiGithubactions,
  SiApachekafka,
  SiCloudinary,
  SiVitest,
  SiTestinglibrary,
  SiCplusplus,
  SiLinux,
  SiFigma,
  SiMeta,
  SiCoursera,
  SiCamunda,
  SiMongodb,
  SiNeo4J,
  SiApachecassandra,
  SiSharp,
  SiDotnet,
} from "react-icons/si";
import { Globe, Server, LayoutGrid, Key, TestTube2, Terminal, CalendarDays, FileText, Pencil } from "lucide-react";

// Shared icon type for both react-icons and lucide-react
type IconComponent = ComponentType<{ className?: string; style?: React.CSSProperties }>;

// ─── Skill → official brand icon ────────────────────────────
const skillIconMap: Record<string, IconComponent> = {
  // Frontend
  "Next.js": SiNextdotjs,
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "HTML/CSS": SiHtml5,

  // Backend
  Java: ({ className, style }: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627" />
    </svg>
  ),
  "Spring Boot": SiSpringboot,
  "Spring Batch": SiSpring,
  "REST APIs": Globe as IconComponent,
  "Node.js": SiNodedotjs,
  Python: SiPython,

  // Databases
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  Prisma: SiPrisma,

  // DevOps
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: SiGit,
  GitLab: SiGitlab,
  Vercel: SiVercel,
  "CI/CD": SiGithubactions,

  // Messaging & Orchestration
  "Apache Kafka": SiApachekafka,
  "Camunda BPMN": SiCamunda,

  // Cloud services
  Cloudinary: SiCloudinary,
  Resend: Server as IconComponent,
  "next-auth": Key as IconComponent,

  // Testing
  Vitest: SiVitest,
  Playwright: TestTube2 as IconComponent,
  "Testing Library": SiTestinglibrary,

  // Others
  "C++": SiCplusplus,
  C: ({ className, style }: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.188 3.184-.409 3.503-3.752 3.503-3.752l3.494.168s.6 3.533-1.169 5.602c-1.7699 2.069-3.947 2.286-5.711 2.17-1.7639-.116-5.2259-.676-7.019-4.394C4.276 14.014 4.1 11.902 4.1 11.902s0-3.727 1.8141-6.129c1.814-2.402 4.159-3.164 5.9371-3.248 1.778-.084 5.056.3 6.3679 2.924 1.312 2.624.273 3.747.273 3.747z"/>
    </svg>
  ),
  "C#": SiSharp,
  ".NET": SiDotnet,
  MongoDB: SiMongodb,
  Neo4j: SiNeo4J,
  Cassandra: SiApachecassandra,
  Unix: SiLinux,
  Microservices: LayoutGrid as IconComponent,
  "UI/UX Design": SiFigma,

  // Extra mappings for stack items with version numbers
  "Next.js 15": SiNextdotjs,
  "Next.js 16": SiNextdotjs,
  "React 19": SiReact,
  "Tailwind CSS v4": SiTailwindcss,
  "Tailwind CSS 4": SiTailwindcss,
  "Prisma 6": SiPrisma,
  "Lucide React": Pencil as IconComponent,
  "date-fns": CalendarDays as IconComponent,
  "react-markdown": FileText as IconComponent,
};

// ─── Certification issuer → icon ────────────────────────────
const certIssuerIconMap: Record<string, IconComponent> = {
  "University of Michigan": SiCoursera,
  "Johns Hopkins University": SiCoursera,
  EPFL: SiCoursera,
  "École Polytechnique": SiCoursera,
  HKUST: SiCoursera,
  IBM: SiCoursera,
  Meta: SiMeta,
};

// ─── Brand colors per skill ─────────────────────────────────
const skillColorMap: Record<string, string> = {
  // Frontend
  "Next.js": "var(--color-foreground)",
  React: "#61DAFB",
  "React Native": "#61DAFB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Framer Motion": "#FF0055",
  "HTML/CSS": "#E34F26",

  // Backend
  Java: "#ED8B00",
  "Spring Boot": "#6DB33F",
  "Spring Batch": "#6DB33F",
  "REST APIs": "#6D28D9",
  "Node.js": "#339933",
  Python: "#3776AB",

  // Databases
  PostgreSQL: "#4169E1",
  Supabase: "#3FCF8E",
  Prisma: "#5A67D8",

  // DevOps
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  Git: "#F05032",
  GitLab: "#FC6D26",
  Vercel: "var(--color-foreground)",
  "CI/CD": "#2088FF",

  // Messaging
  "Apache Kafka": "var(--color-foreground)",
  "Camunda BPMN": "#FC5D0D",

  // Cloud
  Cloudinary: "#3448C5",
  Resend: "var(--color-foreground)",
  "next-auth": "#6D28D9",

  // Testing
  Vitest: "#729B1B",
  Playwright: "#2EAD33",
  "Testing Library": "#E33332",

  // Others
  "C++": "#00599C",
  C: "#A8B9CC",
  "C#": "#512BD4",
  ".NET": "#512BD4",
  MongoDB: "#47A248",
  Neo4j: "#4581C3",
  Cassandra: "#1287B1",
  Unix: "#FCC624",
  Microservices: "#6D28D9",
  "UI/UX Design": "#F24E1E",

  // Versioned aliases
  "Next.js 15": "var(--color-foreground)",
  "Next.js 16": "var(--color-foreground)",
  "React 19": "#61DAFB",
  "Tailwind CSS v4": "#06B6D4",
  "Tailwind CSS 4": "#06B6D4",
  "Prisma 6": "#5A67D8",
  "Lucide React": "#6D28D9",
  "date-fns": "#770C56",
  "react-markdown": "#333333",
};

// ─── Cert issuer brand colors ───────────────────────────────
const certColorMap: Record<string, string> = {
  "University of Michigan": "#0056D2",
  "Johns Hopkins University": "#0056D2",
  EPFL: "#0056D2",
  "École Polytechnique": "#0056D2",
  HKUST: "#0056D2",
  IBM: "#0530AD",
  Meta: "#0082FB",
};

// ─── Getters ────────────────────────────────────────────────
function normalizeSkillName(name: string): string {
  // Try exact match first, then strip version suffixes
  if (skillIconMap[name]) return name;
  const stripped = name.replace(/\s+v?\d[\d.]*$/i, '').trim();
  if (skillIconMap[stripped]) return stripped;
  return name;
}

export function getSkillIcon(skillName: string): IconComponent {
  return skillIconMap[skillName] || skillIconMap[normalizeSkillName(skillName)] || Globe as IconComponent;
}

export function getSkillColor(skillName: string): string {
  return skillColorMap[skillName] || skillColorMap[normalizeSkillName(skillName)] || "#6D28D9";
}

export function getCertIcon(issuer: string): IconComponent {
  return certIssuerIconMap[issuer] || SiCoursera;
}

export function getCertColor(issuer: string): string {
  return certColorMap[issuer] || "#0056D2";
}
