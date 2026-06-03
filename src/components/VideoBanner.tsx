import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

export function VideoBanner() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative h-[500px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1800&q=80"
        alt="Lush garden landscape"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
      />
      <div className="absolute inset-0 bg-forest-deep/30" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="label-accent">Process</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-cream max-w-3xl leading-tight">
          <span className="italic text-gold">Watch</span> how we landscape gardens
        </h2>
        <motion.button
          onClick={() => setOpen(true)}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10 grid place-items-center w-20 h-20 rounded-full bg-cream/15 backdrop-blur-md border border-cream/40 text-cream hover:bg-cream hover:text-forest-deep transition-colors"
          aria-label="Play video"
        >
          <Play className="w-7 h-7 fill-current ml-1" />
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-black/85 grid place-items-center p-6"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-cream"
              aria-label="Close"
            >
              <X />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-forest/90 flex flex-col items-center justify-center text-center p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-4xl text-cream mb-2">Coming Soon</h3>
              <p className="text-cream/70">Our process video is currently being updated.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
