import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "923152526525";

export function Contact() {
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Hi AbdulRauf,%0A%0AEmail: ${encodeURIComponent(
      email,
    )}%0A%0AProject details:%0A${encodeURIComponent(details)}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something intelligent"
      subtitle="Let's build automation that delivers real business impact."
    >
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 1, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 md:p-10 max-w-2xl mx-auto"
      >
        <div className="grid gap-5">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              placeholder="you@company.com"
              className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              Project details
            </label>
            <textarea
              required
              rows={5}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              maxLength={1000}
              placeholder="Tell me about the system you want to build..."
              className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </button>
        </div>
      </motion.form>
    </Section>
  );
}