"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCertIcon, getCertColor } from "@/lib/icons";

export function Certifications() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Certifications"
            subtitle="Formations validées et compétences certifiées"
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => {
            const CertIcon = getCertIcon(cert.issuer);
            const certColor = getCertColor(cert.issuer);
            return (
              <Reveal key={cert.credentialId} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
                    expandedId === i && "border-accent/30"
                  )}
                >
                  {/* Issuer icon */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <CertIcon className="h-5 w-5 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-1 text-sm font-semibold leading-tight line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{cert.date}</p>

                  {/* Skills */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === i ? null : i)
                    }
                    className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-accent"
                    aria-expanded={expandedId === i}
                  >
                    Détails
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform",
                        expandedId === i && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {expandedId === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 rounded-lg bg-muted/50 p-3">
                          <p className="text-[11px] text-muted-foreground">
                            <span className="font-medium">Credential ID:</span>{" "}
                            {cert.credentialId}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
