"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/portfolio";
import {
  ArrowLeft,
  Github,
  Globe,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Layers,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { getSkillIcon, getSkillColor } from "@/lib/icons";
import Image from "next/image";

interface Props {
  project: Project;
}

export function ProjectCaseStudy({ project }: Props) {
  return (
    <div className="min-h-screen px-6 pt-32 pb-24">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les projets
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-accent">{project.period}</span>
          <div className="mt-2 flex items-center gap-4">
            {project.logo && (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white dark:bg-muted">
                <Image
                  src={project.logo}
                  alt={`${project.shortTitle} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
            )}
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {project.shortTitle}
              </h1>
              <p className="mt-1 text-xl text-muted-foreground">{project.subtitle}</p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
              >
                <Globe className="h-4 w-4" />
                Voir le site
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-all hover:bg-muted hover:scale-105"
              >
                <Github className="h-4 w-4" />
                Code source
              </a>
            )}
          </div>
        </motion.div>

        {/* Description */}
        <Reveal>
          <div className="mb-12 rounded-2xl border border-border bg-card p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </Reveal>

        {/* Problem / Solution */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                  <Lightbulb className="h-5 w-5 text-orange-500" />
                </div>
                <h2 className="text-lg font-bold">Problème</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="text-lg font-bold">Solution</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Features */}
        <Reveal>
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Layers className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Fonctionnalités</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Stack */}
        <Reveal>
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Wrench className="h-5 w-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Stack technique</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.stack.map((tech, i) => {
                const Icon = getSkillIcon(tech.name);
                const color = getSkillColor(tech.name);
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-4.5 w-4.5" style={{ color }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{tech.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{tech.usage}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
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
      </div>
    </div>
  );
}
