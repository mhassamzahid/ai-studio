export const stackIcons: Record<string, string> = {
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

export type Project = {
  title: string;
  desc: string;
  stack: string[];
  gradient: string;
};

export const projects: Project[] = [
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
