import { Section } from "./Section";
import { Mail, Github, Linkedin } from "lucide-react";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "hrushikreddy1@gmail.com",
    href: "mailto:hrushikreddy1@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@h204812",
    href: "https://github.com/h204812",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hrushikreddy204812",
    href: "https://www.linkedin.com/in/hrushikreddy204812/",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="Whether you want to collaborate, have an opportunity to share, or just want to say hi — my inbox is open!"
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          const external = c.href.startsWith("http");
          return (
            <a
              key={c.label}
              href={c.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center rounded-xl border border-border bg-card/40 p-8 text-center transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_32px_-8px_var(--cyan-glow)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-all group-hover:glow-cyan">
                <Icon size={24} />
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {c.label}
              </p>
              <p className="mt-2 break-all text-sm text-foreground transition-colors group-hover:text-primary">
                {c.value}
              </p>
            </a>
          );
        })}
      </div>
    </Section>
  );
}