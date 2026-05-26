import { motion } from "framer-motion";
import { Linkedin, Github, Facebook, Briefcase, Globe } from "lucide-react";
import { Section } from "./Section";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Briefcase, label: "Upwork", href: "#" },
  { icon: Globe, label: "Freelancer", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export function Socials() {
  return (
    <Section
      id="platforms"
      eyebrow="Find me"
      title="On every major platform"
      subtitle="Connect, follow, or hire — wherever you prefer."
    >
      <div className="flex flex-wrap justify-center gap-5">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass glass-hover h-20 w-20 rounded-2xl flex items-center justify-center"
          >
            <s.icon className="h-7 w-7 text-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -bottom-9 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {s.label}
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}