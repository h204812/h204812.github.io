import { Section } from "./Section";
import { Code2 } from "lucide-react";

const facts = [
  { icon: "📚", label: "Avid Reader" },
  { icon: "🏏", label: "Cricket Enthusiast" },
  { icon: "🏸", label: "Badminton Player" },
  { icon: "🤖", label: "AI Explorer" },
];

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        <div className="mx-auto md:mx-0">
          <div className="relative h-56 w-56 rounded-full p-1 bg-gradient-to-br from-primary to-accent glow-cyan">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-card font-mono text-6xl font-bold text-primary">
              HR
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-full border-4 border-background bg-primary p-2">
              <Code2 size={20} className="text-primary-foreground" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm a <span className="text-primary">21-year-old software engineer</span> from India, a fresh graduate of{" "}
            <span className="text-foreground font-medium">National Institute of Technology Warangal (NIT Warangal)</span> — one of India's premier engineering institutions. I'm currently doing a Software Engineering internship at{" "}
            <span className="text-primary">Zinnia</span>, where I'm honing my skills in building real-world systems.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          I'm passionate about <span className="text-foreground">distributed systems</span> and software engineering, and I'm actively diving into AI tools and frameworks. Outside of code, I enjoy reading books (my new favorite hobby!), playing cricket, and smashing birdies on the badminton court.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {facts.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm transition-colors hover:border-primary/60"
              >
                <span>{f.icon}</span>
                <span className="text-muted-foreground">{f.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}