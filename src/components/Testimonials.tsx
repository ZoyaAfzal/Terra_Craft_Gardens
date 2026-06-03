import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "TerraCraft transformed our courtyard into a quiet sanctuary - every plant, every stone considered. It feels like it has always belonged.",
    name: "Sarah Walker",
    title: "CEO, Architect & Co",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    quote: "Working with this team felt collaborative from day one. The end result exceeded our brief, both visually and ecologically.",
    name: "James Holloway",
    title: "Director, GreenBuild",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    quote: "They understand restraint. The garden breathes, the materials age beautifully, and our clients keep asking who designed it.",
    name: "Amara Osei",
    title: "Head of Design, UrbanSpace",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-mist py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <span className="label-accent">Reviews</span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-forest">
            What <span className="italic text-gold">they</span> say about us
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-[1fr_auto] gap-10 bg-card rounded-3xl border border-border p-10 lg:p-14"
            >
              <div className="flex flex-col justify-between">
                <p className="font-display italic text-2xl lg:text-3xl text-forest leading-snug">
                  "{t.quote}"
                </p>
                <div className="mt-8">
                  <div className="font-display text-xl text-forest">{t.name}</div>
                  <div className="text-charcoal/60 text-sm">{t.title}</div>
                </div>
              </div>
              <img
                src={t.photo}
                alt={t.name}
                className="w-full md:w-64 h-72 md:h-full object-cover rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="font-display text-xl text-forest">
              {String(i + 1).padStart(2, "0")}{" "}
              <span className="text-gold">/ {String(testimonials.length).padStart(2, "0")}</span>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={prev}
                aria-label="Previous"
                className="grid place-items-center w-12 h-12 rounded-full border border-forest/30 text-forest hover:bg-forest hover:text-cream transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={next}
                aria-label="Next"
                className="grid place-items-center w-12 h-12 rounded-full bg-forest text-cream hover:bg-sage transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
