import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
              placeholder="Tell me about the system you want to build..."
              className="w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-mint transition-shadow"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Message sent
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </motion.form>
    </Section>
  );
}