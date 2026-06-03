import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const words = "Contact us today to shape a stunning landscape.".split(" ");

export function ContactBanner() {
  return (
    <section className="relative bg-forest overflow-hidden py-28">
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="leaves" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 20 Q90 50 60 100 Q30 50 60 20 Z" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leaves)" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="label-accent">Get in Touch</span>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight"
        >
          {words.map((w, idx) => (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="inline-block mr-3"
            >
              {w === "stunning" ? <span className="italic text-gold">{w}</span> : w}
            </motion.span>
          ))}
        </motion.h2>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-forest-deep transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
