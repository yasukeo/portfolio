"use client";

import { siteConfig } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const contactLinks = [
  {
    href: "https://wa.me/212661724017",
    icon: SiWhatsapp,
    label: "WhatsApp",
    description: "06 61 72 40 17",
    color: "#25D366",
  },
  {
    href: "mailto:yasser.etebbai@gmail.com",
    icon: Mail,
    label: "Email",
    description: "yasser.etebbai@gmail.com",
    color: undefined,
  },
  {
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    description: "Connectons-nous",
    color: "#0A66C2",
  },
  {
    href: siteConfig.links.github,
    icon: Github,
    label: "GitHub",
    description: "Explorez mes repos",
    color: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            title="Contact"
            subtitle="Discutons de votre prochain projet"
          />
        </Reveal>

        <Reveal>
          <p className="mb-8 text-center text-muted-foreground leading-relaxed">
            Je suis toujours ouvert aux nouvelles opportunités, collaborations
            et échanges. N&apos;hésitez pas à me contacter !
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <item.icon
                    className="h-5 w-5"
                    style={item.color ? { color: item.color } : undefined}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
