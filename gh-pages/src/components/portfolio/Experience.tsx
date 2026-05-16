import { Section } from "./Section";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Software Engineering Intern",
    org: "Zinnia",
    when: "Present",
    desc: "Working as a Software Engineering Intern, contributing to real-world software systems and gaining hands-on experience in building scalable applications.",
  },
  {
    icon: GraduationCap,
    title: "B.Tech — Computer Science & Engineering",
    org: "National Institute of Technology Warangal",
    when: "Recently Graduated",
    desc: "Graduated from one of India's top NITs, with a strong foundation in computer science, data structures, algorithms, distributed systems, and database management.",
  },
];

export function Experience() {
  return (
    <Section id="experience" title="My Journey">
      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-5" />
        <div className="space-y-12">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="relative">
                <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground glow-cyan md:-left-12 md:h-8 md:w-8">
                  <Icon size={14} />
                </div>
                <div className="rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-primary/60">
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{it.title}</h3>
                    <span className="font-mono text-xs text-primary">{it.when}</span>
                  </div>
                  <p className="mb-3 font-mono text-sm text-accent">@ {it.org}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}