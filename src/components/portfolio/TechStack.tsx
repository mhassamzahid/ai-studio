import { motion } from "framer-motion";
import { Section } from "./Section";

const tools = [
  "n8n", "GoHighLevel", "Make", "OpenAI", "LangChain", "FastAPI",
  "Django", "Python", "PostgreSQL", "Docker", "Redis", "Twilio",
  "ElevenLabs", "RetellAI", "VAPI", "HubSpot", "Airtable", "Notion",
  "AWS", "GitHub",
];

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title="Tools I build with daily"
      subtitle="A modern toolkit for AI, automation, and backend engineering."
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {tools.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 10) * 0.04 }}
            className="glass glass-hover rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-2 animate-float"
            style={{ animationDelay: `${(i % 6) * 0.6}s` }}
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary">
              {t.charAt(0)}
            </div>
            <span className="text-xs text-muted-foreground text-center">{t}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}