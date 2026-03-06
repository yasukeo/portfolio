"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { getSkillIcon, getSkillColor } from "@/lib/icons";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? skillCategories.filter((c) => c.category === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Compétences"
            subtitle="Technologies et outils que je maîtrise"
          />
        </Reveal>

        {/* Filter chips */}
        <Reveal delay={0.1}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                !activeCategory
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              Tout
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.category ? null : cat.category
                  )
                }
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                  activeCategory === cat.category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <h3 className="mb-3 text-sm font-semibold text-accent">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = getSkillIcon(skill);
                    const color = getSkillColor(skill);
                    return (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" style={{ color }} />
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
