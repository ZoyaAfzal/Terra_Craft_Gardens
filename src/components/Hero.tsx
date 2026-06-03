import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80"
          alt="Lush green garden landscape"
          className="w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-forest-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="label-accent"
        >
          Instant · Simple · Smart
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-6 font-display text-cream text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[0.95] max-w-5xl"
        >
          Landscaping &<br />
          <span className="italic text-gold">Smart Green</span> Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 max-w-xl text-cream/80 text-lg leading-relaxed"
        >
          We design, build, and care for living landscapes from
          architectural gardens to thriving urban canopies, crafted with
          quiet precision and lasting beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-forest-deep transition-transform hover:scale-[1.03]"
          >
            About Us
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-forest-deep"
          >
            Our Projects
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="hidden lg:flex absolute bottom-12 right-12 z-10 glass-card rounded-2xl p-5 items-center gap-4 max-w-sm"
      >
        <img
          src="https://images.unsplash.com/photo-1598902133396-99cf1693375b?auto=format&fit=crop&w=200&q=80"
          alt="Featured project thumbnail"
          className="w-16 h-16 rounded-full object-cover border border-cream/30"
        />
        <div className="flex-1">
          <div className="label-accent !text-cream/70">Featured</div>
          <div className="text-cream font-display text-xl leading-tight">
            San Francisco
          </div>
        </div>
        <button
          aria-label="Play featured video"
          className="grid place-items-center w-11 h-11 rounded-full bg-gold text-forest-deep hover:scale-110 transition-transform"
        >
          <Play className="w-4 h-4 fill-current" />
        </button>
      </motion.div>
    </section>
  );
}
