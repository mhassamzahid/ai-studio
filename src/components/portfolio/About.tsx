import { motion } from "framer-motion";
import { Section } from "./Section";

const expertise: { name: string; slug: string }[] = [
  { name: "AI Automation", slug: "openaigym" },
  { name: "n8n", slug: "n8n" },
  { name: "GoHighLevel", slug: "gohighlevel" },
  { name: "Make.com", slug: "make" },
  { name: "OpenAI / ChatGPT API", slug: "openai" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Django", slug: "django" },
  { name: "AI Agents", slug: "probot" },
  { name: "Voice AI", slug: "elevenlabs" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering intelligent systems that scale"
      subtitle="I help startups, agencies, and operators turn manual processes into autonomous, AI-powered workflows — from custom agents to production-grade Python backends."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 1, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4">What I do</h3>
          <p className="text-muted-foreground leading-relaxed">
            I design and ship AI automations, voice agents, and backend systems used by businesses
            in SaaS, real estate, e-commerce, and lead generation. My focus is reliability,
            measurable ROI, and clean code that your team can extend.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4">Core expertise</h3>
          <div className="flex flex-wrap gap-2">
            {expertise.map((e) => (
              <span
                key={e.name}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary"
              >
                <img
                  src={`https://cdn.simpleicons.org/${e.slug}`}
                  alt=""
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5"
                  loading="lazy"
                />
                {e.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}