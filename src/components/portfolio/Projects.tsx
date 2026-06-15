import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.slice(0, 6);
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A glimpse into recent automation and backend builds. Placeholders shown — swap with your own anytime."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-lg glass glass-hover"
        >
          Load More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}