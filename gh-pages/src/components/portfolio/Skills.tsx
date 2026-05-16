import { Section } from "./Section";

const categories = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C++", "C", "R"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Spring Boot", "React", "Next.js", "NestJS", "Node.js", "Express.js", "FastAPI", "Vite"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    items: ["Docker", "Apache Kafka", "Keycloak", "Linux", "Ubuntu", "Git", "VS Code", "Vim"],
  },
];

export function Skills() {
  const ticker = categories.flatMap((c) => c.items);
  return (
    <Section id="skills" title="Tech Stack" subtitle="Tools, languages, and frameworks I work with.">
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-primary/50"
          >
            <h3 className="mb-4 font-mono text-sm text-primary">
              <span className="text-muted-foreground">const</span> {cat.title.replace(/\s+/g, "_").toLowerCase()} = [
            </h3>
            <div className="flex flex-wrap gap-2 pl-4">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="cursor-default rounded-md border border-border/80 bg-secondary/40 px-3 py-1.5 text-sm text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_16px_-2px_var(--cyan-glow)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 font-mono text-sm text-primary">];</p>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-lg border border-border/60 bg-card/20 py-4">
        <div className="flex animate-[scroll_30s_linear_infinite] gap-8 whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">▸</span> {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </Section>
  );
}