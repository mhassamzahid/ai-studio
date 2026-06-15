import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { stackIcons, type Project } from "@/data/projects";

export function ProjectCard({ p, i = 0 }: { p: Project; i?: number }) {
  return (
    <motion.article
      initial={{ opacity: 1, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
      className="glass glass-hover rounded-3xl overflow-hidden flex flex-col"
    >
      <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground/80 uppercase tracking-widest">
          Project image
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => {
            const slug = stackIcons[s];
            return (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-md border border-border bg-muted/40 text-muted-foreground"
              >
                {slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${slug}`}
                    alt=""
                    loading="lazy"
                    className="h-3 w-3"
                  />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
                {s}
              </span>
            );
          })}
        </div>
        <div className="mt-5">
          <a
            href="#"
            className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg glass glass-hover"
          >
            <Github className="h-4 w-4" /> View on GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
