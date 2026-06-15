import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { Section } from "@/components/portfolio/Section";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All Projects — AbdulRauf" },
      { name: "description", content: "Full archive of automation, AI agent, and backend projects by AbdulRauf." },
      { property: "og:title", content: "All Projects — AbdulRauf" },
      { property: "og:description", content: "Full archive of automation, AI agent, and backend projects by AbdulRauf." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Section
        id="all-projects"
        eyebrow="Archive"
        title="All projects"
        subtitle="Every build, in one place."
      >
        <div className="mb-8">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}