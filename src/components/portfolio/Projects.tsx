import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Section } from "./Section";

const stackIcons: Record<string, string> = {
  OpenAI: "openai",
  FastAPI: "fastapi",
  PostgreSQL: "postgresql",
  LangChain: "langchain",
  Pinecone: "pinecone",
  Django: "django",
  Redis: "redis",
  n8n: "n8n",
  Make: "make",
  Twilio: "twilio",
  ElevenLabs: "elevenlabs",
  Docker: "docker",
  AWS: "amazonwebservices",
};

const projects = [
  {
    title: "AI Lead Qualification Agent",
    desc: "Voice + chat agent that qualifies inbound leads, books meetings, and syncs to CRM in real time.",
    stack: ["VAPI", "OpenAI", "FastAPI", "PostgreSQL"],
    gradient: "from-primary/30 to-secondary/30",
  },
  {
    title: "Enterprise RAG Knowledge Base",
    desc: "Document-aware assistant with hybrid search, citations, and role-based access for 10k+ docs.",
    stack: ["LangChain", "Pinecone", "Django", "Redis"],
    gradient: "from-secondary/30 to-primary/30",
  },
  {
    title: "Multi-Channel Automation Hub",
    desc: "n8n + Make pipelines orchestrating WhatsApp, email, SMS, and GoHighLevel for a 7-figure agency.",
    stack: ["n8n", "Make", "GoHighLevel", "Twilio"],
    gradient: "from-primary/20 to-secondary/40",
  },
  {
    title: "Voice AI Receptionist",
    desc: "24/7 receptionist for clinics — handles bookings, FAQs, and call routing with natural voice.",
    stack: ["Retell", "ElevenLabs", "FastAPI", "Twilio"],
    gradient: "from-secondary/40 to-primary/20",
  },
  {
    title: "E-commerce Insights API",
    desc: "Backend that aggregates Shopify + ad data and exposes AI-generated growth recommendations.",
    stack: ["FastAPI", "OpenAI", "PostgreSQL", "Docker"],
    gradient: "from-primary/30 to-secondary/30",
  },
  {
    title: "Internal Ops AI Copilot",
    desc: "Slack-native AI that answers policy questions and triggers internal workflows on command.",
    stack: ["LangChain", "Django", "Redis", "AWS"],
    gradient: "from-secondary/30 to-primary/30",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A glimpse into recent automation and backend builds. Placeholders shown — swap with your own anytime."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
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
        ))}
      </div>
    </Section>
  );
}