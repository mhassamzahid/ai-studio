import { Section } from "./Section";

type Brand = { name: string; slug: string };

// Languages, frameworks, databases, infra
const techStack: Brand[] = [
  { name: "Python", slug: "python" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Django", slug: "django" },
  { name: "Flask", slug: "flask" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "Docker", slug: "docker" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "GitHub", slug: "github" },
  { name: "OpenAI", slug: "openai" },
  { name: "LangChain", slug: "langchain" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "Pinecone", slug: "pinecone" },
];

// SaaS platforms, no-code, integrations
const toolsList: Brand[] = [
  { name: "n8n", slug: "n8n" },
  { name: "Make", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "Airtable", slug: "airtable" },
  { name: "Notion", slug: "notion" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Slack", slug: "slack" },
  { name: "Twilio", slug: "twilio" },
  { name: "Stripe", slug: "stripe" },
  { name: "Supabase", slug: "supabase" },
  { name: "Vercel", slug: "vercel" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Telegram", slug: "telegram" },
  { name: "Discord", slug: "discord" },
];

function BrandPill({ brand }: { brand: Brand }) {
  return (
    <div className="group shrink-0 mx-3 inline-flex items-center gap-3 rounded-2xl border border-border bg-card/60 backdrop-blur-md px-5 py-3 transition-all hover:border-primary/40 hover:bg-card">
      <img
        src={`https://cdn.simpleicons.org/${brand.slug}`}
        alt={brand.name}
        loading="lazy"
        className="h-6 w-6 transition-transform group-hover:scale-110"
      />
      <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">
        {brand.name}
      </span>
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
}: {
  items: Brand[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden w-full">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {loop.map((b, i) => (
          <BrandPill key={`${b.slug}-${i}`} brand={b} />
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs text-primary uppercase tracking-widest mb-5">
            Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Languages, frameworks &amp; infrastructure
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
            The core technologies behind every production system I ship.
          </p>
        </div>
      </div>
      <Marquee items={techStack} />

      <div className="mx-auto max-w-6xl px-6 text-center mt-28 mb-12">
        <div className="inline-block rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs text-primary uppercase tracking-widest mb-5">
          Tools
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
          Platforms &amp; integrations
        </h2>
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-lg">
          Automation, communication, and SaaS tools I connect every day.
        </p>
      </div>
      <Marquee items={toolsList} reverse />
    </section>
  );
}