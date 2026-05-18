import { Github, Linkedin } from "lucide-react";

function LeetCodeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.483 0a1.875 1.875 0 0 0-1.323.549l-8.483 8.484a1.875 1.875 0 0 0 0 2.651l4.358 4.358a1.875 1.875 0 0 0 2.651 0l8.483-8.484A1.875 1.875 0 0 0 20.354 4.13l-4.358-4.358A1.875 1.875 0 0 0 13.483 0z" />
      <path d="M6.875 12.354l4.358 4.358" />
      <path d="M13.483 6.875l4.358 4.358" />
      <path d="M2.625 17.771l4.358 4.358" />
    </svg>
  );
}

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
          <a
            href="https://leetcode.com/u/hrushi2048/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LeetCodeIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}