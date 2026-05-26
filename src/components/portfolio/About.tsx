import { motion } from "framer-motion";
import { Section } from "./Section";

const expertise = [
  "AI Automation", "n8n", "GoHighLevel", "Make.com",
  "OpenAI / ChatGPT API", "FastAPI", "Django", "AI Agents", "Voice AI",
];

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "300+", label: "Automations Built" },
  { value: "80+", label: "APIs Integrated" },
  { value: "100%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering intelligent systems that scale"
      subtitle="I help startups, agencies, and operators turn manual processes into autonomous, AI-powered workflows — from custom agents to production-grade Python backends."
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glass-hover rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold mb-4">Core expertise</h3>
          <div className="flex flex-wrap gap-2">
            {expertise.map((e) => (
              <span
                key={e}
                className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary"
              >
                {e}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-6 text-center"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-gradient">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}