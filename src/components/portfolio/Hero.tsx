import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const floatingIcons = [
  { label: "AI", x: "8%", y: "20%", d: 0 },
  { label: "{ }", x: "85%", y: "18%", d: 0.4 },
  { label: "⚡", x: "12%", y: "75%", d: 0.8 },
  { label: "λ", x: "82%", y: "70%", d: 1.2 },
  { label: "</>", x: "50%", y: "12%", d: 1.6 },
  { label: "∞", x: "92%", y: "45%", d: 2.0 },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[820px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />

      {floatingIcons.map((i) => (
        <motion.div
          key={i.label}
          className="absolute glass rounded-2xl px-4 py-3 text-sm font-mono text-primary/80 hidden md:block"
          style={{ left: i.x, top: i.y }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6 + i.d, repeat: Infinity, ease: "easeInOut", delay: i.d }}
        >
          {i.label}
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for new automation projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-gradient"
        >
          AI Automation Expert
          <br />
          & Python Backend Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Building scalable AI systems, workflow automation, backend APIs, and intelligent business
          solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-mint transition-all"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}