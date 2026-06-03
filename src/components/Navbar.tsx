import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-forest-deep/85 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-leaf/20 border border-leaf/40">
              <Leaf className="w-5 h-5 text-leaf" strokeWidth={1.8} />
            </span>
            <span className="font-display text-2xl text-cream tracking-tight">
              TerraCraft
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={l.to}
                  className="relative text-sm font-medium text-cream/85 hover:text-cream transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-gold after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-gold/70 px-5 py-2 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-forest-deep"
              >
                Contact
              </Link>
            </motion.div>
          </nav>

          <button
            className="md:hidden text-cream"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-forest-deep md:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} className="text-cream" aria-label="Close">
                <X />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 mt-16">
              {[...links, { to: "/contact", label: "Contact" }].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-cream"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
