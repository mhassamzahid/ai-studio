import { ArrowUp, Linkedin, Github, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. Crafted with precision.
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/abdulrauf-siddiqui/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass glass-hover h-10 w-10 rounded-xl flex items-center justify-center">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/AbdulRauf-Sidd" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass glass-hover h-10 w-10 rounded-xl flex items-center justify-center">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.upwork.com/freelancers/~01d7aeb11a42dfd054" target="_blank" rel="noreferrer" aria-label="Upwork" className="glass glass-hover h-10 w-10 rounded-xl flex items-center justify-center">
            <Briefcase className="h-4 w-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 glass glass-hover h-10 w-10 rounded-xl flex items-center justify-center text-primary"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}