import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {eyebrow && (
            <div className="inline-block glass rounded-full px-4 py-1.5 text-xs text-primary mb-5 uppercase tracking-widest">
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">{title}</h2>
          {subtitle && (
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}