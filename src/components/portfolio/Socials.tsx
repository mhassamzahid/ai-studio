import { motion } from "framer-motion";
import { Section } from "./Section";

const socials = [
  { slug: "linkedin", label: "LinkedIn", href: "#" },
  { slug: "freelancer", label: "Freelancer", href: "#" },
  { slug: "facebook", label: "Facebook", href: "#" },
  { slug: "github", label: "GitHub", href: "#" },
];

export function Socials() {
  return (
    <Section
      id="platforms"
      eyebrow="Find me"
      title="On every major platform"
      subtitle="Connect, follow, or hire — wherever you prefer."
    >
      <div className="flex flex-wrap items-center justify-center gap-5">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass glass-hover h-20 w-20 rounded-2xl flex items-center justify-center"
          >
            <img
              src={`https://cdn.simpleicons.org/${s.slug}`}
              alt={s.label}
              loading="lazy"
              className="h-8 w-8 transition-transform group-hover:scale-110"
            />
            <span className="absolute -bottom-9 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {s.label}
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}