"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getSkillIcon, getSkillColor } from "@/lib/icons";

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const exp = experience[0]; // Single experience for now

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Expérience"
            subtitle="Mon parcours professionnel"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent md:left-8" />

            {/* Experience card */}
            <div className="relative ml-6 md:ml-16">
              {/* Timeline dot */}
              <div className="absolute -left-[29px] top-0 md:-left-[41px]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background"
                >
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </motion.div>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-accent/30">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1 font-medium text-accent">
                          <Briefcase className="h-3.5 w-3.5" />
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="mb-6 space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Orchestration tabs */}
                {exp.highlights && (
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      Comparaison des 3 approches d&apos;orchestration
                    </h4>
                    <div className="mb-4 flex gap-2">
                      {exp.highlights.map((hl, i) => (
                        <button
                          key={hl.label}
                          onClick={() => setActiveTab(i)}
                          className={cn(
                            "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                            activeTab === i
                              ? "bg-accent text-accent-foreground shadow-sm"
                              : "bg-muted text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {hl.label}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.ul
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 rounded-xl bg-muted/50 p-4"
                      >
                        {exp.highlights[activeTab].items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  </div>
                )}

                {/* Tech stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => {
                    const Icon = getSkillIcon(tech);
                    const color = getSkillColor(tech);
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" style={{ color }} />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
