import { motion } from "framer-motion";
import {
  Bot, MessageSquare, Server, Users, Mic, Workflow, Database, Cloud,
} from "lucide-react";
import { Section } from "./Section";

const services = [
  { icon: Bot, title: "AI Automation Systems", desc: "End-to-end automation pipelines that replace repetitive work with reliable AI workflows." },
  { icon: MessageSquare, title: "AI Agents & Chatbots", desc: "Custom GPT-powered agents trained on your data, integrated with your stack." },
  { icon: Server, title: "Backend API Development", desc: "Production-grade FastAPI and Django services with auth, queues, and observability." },
  { icon: Users, title: "CRM & Lead Automation", desc: "GoHighLevel, HubSpot, and custom CRMs — automated lead nurture and routing." },
  { icon: Mic, title: "Voice AI Agents", desc: "Inbound and outbound voice agents using VAPI, Retell, ElevenLabs, and Twilio." },
  { icon: Workflow, title: "Workflow Integrations", desc: "n8n, Make.com and Zapier integrations connecting hundreds of SaaS tools." },
  { icon: Database, title: "RAG & Knowledge Bases", desc: "Vector search systems with LangChain and Pinecone for accurate, sourced answers." },
  { icon: Cloud, title: "DevOps & Cloud Deployment", desc: "Dockerized deployments on AWS, GCP, and Fly with CI/CD and zero-downtime updates." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Premium engineering, end to end"
      subtitle="From quick AI integrations to full backend platforms — every project delivered with senior-level care."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 1, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group glass glass-hover rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mb-5">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}