import { motion } from "framer-motion";
import {
  Bot, MessageSquare, Server, Users, Mic, Workflow, Database, Cloud,
} from "lucide-react";
import { Section } from "./Section";

const services = [
  { icon: Bot, color: "#A78BFA", title: "AI Automation Systems", desc: "End-to-end automation pipelines that replace repetitive work with reliable AI workflows." },
  { icon: MessageSquare, color: "#22D3EE", title: "AI Agents & Chatbots", desc: "Custom GPT-powered agents trained on your data, integrated with your stack." },
  { icon: Server, color: "#34D399", title: "Backend API Development", desc: "Production-grade FastAPI and Django services with auth, queues, and observability." },
  { icon: Users, color: "#FB7185", title: "CRM & Lead Automation", desc: "GoHighLevel, HubSpot, and custom CRMs — automated lead nurture and routing." },
  { icon: Mic, color: "#F472B6", title: "Voice AI Agents", desc: "Inbound and outbound voice agents using VAPI, Retell, ElevenLabs, and Twilio." },
  { icon: Workflow, color: "#FBBF24", title: "Workflow Integrations", desc: "n8n, Make.com and Zapier integrations connecting hundreds of SaaS tools." },
  { icon: Database, color: "#60A5FA", title: "RAG & Knowledge Bases", desc: "Vector search systems with LangChain and Pinecone for accurate, sourced answers." },
  { icon: Cloud, color: "#F97316", title: "DevOps & Cloud Deployment", desc: "Dockerized deployments on AWS, GCP, and Fly with CI/CD and zero-downtime updates." },
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
            <div
              className="absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `${s.color}33` }}
            />
            <div className="relative">
              <div
                className="h-11 w-11 rounded-xl flex items-center justify-center mb-5 border"
                style={{
                  background: `linear-gradient(135deg, ${s.color}33, ${s.color}1a)`,
                  borderColor: `${s.color}55`,
                }}
              >
                <s.icon className="h-5 w-5" style={{ color: s.color }} />
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