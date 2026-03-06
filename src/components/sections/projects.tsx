"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getSkillIcon, getSkillColor } from "@/lib/icons";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Projets"
            subtitle="Des applications concrètes, en production"
          />
        </Reveal>

        {/* Bento grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:border-accent/30"
              >
                {/* Gradient accent top */}
                <div className="h-1.5 w-full bg-gradient-to-r from-accent via-purple-400 to-accent" />

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      {project.logo && (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white dark:bg-muted">
                          <Image
                            src={project.logo}
                            alt={`${project.shortTitle} logo`}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <span className="text-xs font-medium text-accent">
                          {project.period}
                        </span>
                        <h3 className="mt-1 text-xl font-bold group-hover:text-accent transition-colors">
                          {project.shortTitle}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
                      aria-label={`Voir le case study ${project.shortTitle}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 6).map((tag) => {
                      const Icon = getSkillIcon(tag);
                      const color = getSkillColor(tag);
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent"
                        >
                          <Icon className="h-3 w-3 shrink-0" style={{ color }} />
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Site live
                      </a>
                    )}
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code source
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                    >
                      Case study
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* View all */}
        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:bg-muted hover:scale-105"
            >
              Voir tous les projets
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
