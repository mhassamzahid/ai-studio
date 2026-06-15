import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "./WhatsAppIcon";

type NavLink = { href: string; label: string; to?: string };

const links: NavLink[] = [
  { href: "/", to: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "/projects", to: "/projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-full pl-4 pr-2 py-2 transition-all duration-300 border ${
          scrolled
            ? "bg-white backdrop-blur-xl border-background/20 shadow-[0_8px_30px_-12px_rgba(11,18,32,0.35)]"
            : "bg-white/95 backdrop-blur-md border-background/10"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 pl-1">
          <span className="relative h-7 w-7 rounded-lg bg-background flex items-center justify-center text-[11px] font-bold text-white">
            <span className="absolute inset-0 rounded-lg blur-md bg-background/50 -z-10" />
            AM
          </span>
          <span className="font-semibold tracking-tight text-[15px] text-background">AbdulRauf</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              {l.to ? (
                <Link
                  to={l.to}
                  className="px-3.5 py-2 rounded-full text-background/70 hover:text-background hover:bg-background/10 transition-colors font-medium"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="px-3.5 py-2 rounded-full text-background/70 hover:text-background hover:bg-background/10 transition-colors font-medium"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/923152526525"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-background/20 bg-background/10 text-background"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 1, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl border border-background/20 bg-white backdrop-blur-xl p-2"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  {l.to ? (
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-background/70 hover:text-background hover:bg-background/10"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm font-medium text-background/70 hover:text-background hover:bg-background/10"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/923152526525"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-1 px-4 py-3 rounded-xl text-sm font-medium bg-[#25D366] text-white flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}