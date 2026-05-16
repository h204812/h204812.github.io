import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          Designed & built by <span className="text-primary">Hrushik Reddy</span> · © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/h204812"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hrushikreddy204812/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}