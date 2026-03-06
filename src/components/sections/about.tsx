"use client";

import { identity } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { Code2, Rocket, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack",
    description: "Next.js, TypeScript, Spring Boot — du frontend au backend.",
  },
  {
    icon: Rocket,
    title: "Production-ready",
    description: "Déploiement, CI/CD, monitoring — des apps en production.",
  },
  {
    icon: GraduationCap,
    title: "IA & Data",
    description: "Formation en intelligence artificielle et data science.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading title="À propos" subtitle="Qui suis-je ?" />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Left - Image */}
          <Reveal direction="left" className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 blur-xl" />
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border">
                <Image
                  src={identity.profileImage}
                  alt={identity.name}
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
          </Reveal>

          {/* Right - Text */}
          <div className="md:col-span-3 space-y-6">
            {identity.about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-muted-foreground leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}

            {/* Highlight cards */}
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <Reveal key={item.title} delay={0.3 + i * 0.1}>
                  <div className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                    <item.icon className="mb-2 h-5 w-5 text-accent" />
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
