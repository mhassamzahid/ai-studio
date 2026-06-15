import { motion } from "framer-motion";
import { Section } from "./Section";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "923152526525";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something intelligent"
      subtitle="Let's build automation that delivers real business impact."
    >
      <motion.div
        initial={{ opacity: 1, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 md:p-10 max-w-2xl mx-auto flex justify-center"
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chat on WhatsApp
        </a>
      </motion.div>
    </Section>
  );
}