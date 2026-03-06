"use client";

import { projects } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Image from "next/image";
import { getSkillIcon, getSkillColor } from "@/lib/icons";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Projets</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Applications concrètes, en production
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-purple-400" />
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl hover:border-accent/30"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-accent via-purple-400 to-accent" />

              <div className="p-8">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {project.logo && (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white dark:bg-muted">
                        <Image
                          src={project.logo}
                          alt={`${project.shortTitle} logo`}
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <span className="text-xs font-medium text-accent">
                        {project.period}
                      </span>
                      <h2 className="mt-1 text-2xl font-bold group-hover:text-accent transition-colors">
                        {project.shortTitle}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
                    aria-label={`Case study ${project.shortTitle}`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>

                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    const Icon = getSkillIcon(tag);
                    const color = getSkillColor(tag);
                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" style={{ color }} />
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="flex items-center gap-4 border-t border-border pt-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      Site live
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code source
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    Lire le case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
