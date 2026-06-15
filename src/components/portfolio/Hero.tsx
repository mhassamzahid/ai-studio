import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import profileAsset from "@/assets/abdulrauf.jpg.asset.json";
const profileImg = profileAsset.url;

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

      <div className="relative mx-auto max-w-6xl w-full px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new automation projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-gradient"
          >
            Hi, I'm AbdulRauf
            <span className="block mt-3 text-gradient-accent">
              AI Automation Expert
            </span>
            <span className="block mt-1 text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground">
              & Python Backend Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            Building scalable AI systems, workflow automation, backend APIs, and intelligent business
            solutions that move teams faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
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
              <Sparkles className="h-4 w-4 text-primary" />
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-full max-w-[440px] aspect-square">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-secondary/30 to-transparent blur-2xl" />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-[2px]">
              <div className="h-full w-full rounded-[1.9rem] bg-background overflow-hidden">
                <img
                  src={profileImg}
                  alt="AbdulRauf — AI Automation Expert and Python Backend Developer"
                  width={880}
                  height={880}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}