import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "./Section";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Founder, GrowthLabs",
    text: "Delivered a complete AI lead-qualification system in 3 weeks. Our response time dropped from hours to seconds. Exceptional engineer.",
  },
  {
    name: "David Chen",
    role: "CTO, Northwind SaaS",
    text: "The Python backend is bulletproof. Clean architecture, full test coverage, and the AI integrations just work. Hire instantly.",
  },
  {
    name: "Amelia Rossi",
    role: "Operations Lead, ClinicPlus",
    text: "Our voice AI receptionist handles 80% of calls autonomously. The ROI was clear within the first month.",
  },
  {
    name: "Marcus Webb",
    role: "Agency Owner, Webb Digital",
    text: "Best automation engineer I've worked with on Upwork. Communicates perfectly and ships premium work every time.",
  },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <Section
      id="reviews"
      eyebrow="Client Reviews"
      title="Trusted by founders and agencies"
      subtitle="What clients say after shipping with me."
    >
      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-10 text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              "{r.text}"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary glow-mint" />
              <div className="text-left">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="h-10 w-10 rounded-full glass glass-hover flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next review"
            className="h-10 w-10 rounded-full glass glass-hover flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}