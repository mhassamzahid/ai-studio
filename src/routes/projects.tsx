import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, FolderGit2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
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
  const stackCount = new Set(projects.flatMap((p) => p.stack)).size;
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      {/* Hero-style header — proportions mirror Hero.tsx */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[820px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl w-full px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-primary mb-6 uppercase tracking-widest"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Archive
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-gradient"
            >
              All projects
              <span className="block mt-3 text-gradient-accent">
                Every build, in one place
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              A complete archive of automation pipelines, AI agents, and backend systems —
              shipped end-to-end and running in production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#all-projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-mint transition-all"
              >
                Browse the work
                <FolderGit2 className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover font-semibold"
              >
                <ArrowLeft className="h-4 w-4 text-primary" />
                Back to home
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[440px] aspect-square">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-secondary/30 to-transparent blur-2xl" />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-[2px]">
                <div className="h-full w-full rounded-[1.9rem] bg-background/80 backdrop-blur-xl p-6 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {projects.slice(0, 4).map((p) => (
                      <div
                        key={p.title}
                        className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} border border-border/50`}
                      >
                        <div className="absolute inset-0 grid-bg opacity-40" />
                        <div className="relative h-full p-3 flex items-end">
                          <p className="text-[10px] font-medium text-foreground/90 leading-tight line-clamp-2">
                            {p.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                    <div className="glass rounded-xl py-3">
                      <div className="text-2xl font-bold text-gradient">{projects.length}</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                        Projects
                      </div>
                    </div>
                    <div className="glass rounded-xl py-3">
                      <div className="text-2xl font-bold text-gradient-accent">{stackCount}+</div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">
                        Tools used
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section id="all-projects" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}