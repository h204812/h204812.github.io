import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Microservices",
    desc: "Designed and built a production-grade backend system for an e-commerce application using a microservices architecture. Includes services for products, orders, inventory, and notifications, all wired together with an API gateway.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "Keycloak", "Docker"],
    url: "https://github.com/h204812/E-commerce-Microservices",
  },
  {
    title: "Distributed Secured File Storage",
    desc: "A distributed file storage system with security at its core — built with multiple servers and clients communicating securely, using cryptographic techniques to ensure data integrity and confidentiality across nodes.",
    tech: ["Python", "Cryptography", "Networking"],
    url: "https://github.com/h204812/Distributed-Secured-File-Storage-System-",
  },
  {
    title: "Expense Tracker",
    desc: "A web-based expense tracking application that helps users monitor and manage their finances with an intuitive interface.",
    tech: ["JavaScript", "Web"],
    url: "https://github.com/h204812/ExpenseTracker",
  },
  {
    title: "OTT Database",
    desc: "A comprehensive database management system designed for an OTT streaming platform — built as a semester course project showcasing DBMS concepts including schema design, queries, and normalization.",
    tech: ["SQL", "DBMS"],
    url: "https://github.com/h204812/OTT-Database-",
  },
  {
    title: "Image Captioning",
    desc: "An AI-powered image captioning system that generates natural language descriptions for images using deep learning techniques.",
    tech: ["Python", "Deep Learning", "AI"],
    url: "https://github.com/h204812/image-Captioning-",
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Things I've Built" subtitle="A selection of projects spanning backend systems, distributed computing, and AI.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col rounded-xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_32px_-8px_var(--cyan-glow)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                project_{String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-3 text-muted-foreground">
                <Github size={18} className="transition-colors group-hover:text-primary" />
                <ExternalLink size={18} className="transition-colors group-hover:text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {p.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-primary/30 bg-primary/5 px-2 py-1 font-mono text-xs text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://github.com/h204812"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-primary/50 px-6 py-3 font-medium text-primary transition-all hover:bg-primary/10"
        >
          <Github size={18} />
          View All on GitHub
        </a>
      </div>
    </Section>
  );
}