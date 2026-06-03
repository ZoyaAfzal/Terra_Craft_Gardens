import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="label-accent">About Us</span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-forest leading-[1.05]">
            A beautiful garden is a work of{" "}
            <span className="italic text-gold">Art.</span>
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed">
            For more than fifteen years, TerraCraft Studios has been
            shaping outdoor spaces that feel both timeless and alive, a
            quiet dialogue between architecture, light, and the land.
          </p>
          <p className="mt-4 text-charcoal/70 leading-relaxed">
            Our gardens are designed to mature gracefully, season after
            season, while staying low in maintenance and high in
            character. We treat every site as a one-of-a-kind canvas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-forest text-cream px-5 py-2.5 text-sm">
              15+ Years Experience
            </span>
            <span className="rounded-full border border-forest/30 text-forest px-5 py-2.5 text-sm">
              500+ Happy Clients
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="aspect-[3/4] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589923188900-85dae523342a?auto=format&fit=crop&w=900&q=80"
              alt="Gardener at work in lush green landscape"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] rounded-3xl overflow-hidden mt-12">
            <img
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=80"
              alt="Beautifully landscaped garden details"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 glass-card rounded-2xl px-5 py-4 flex items-center gap-3 bg-forest-deep/40">
            <div className="w-10 h-10 rounded-full bg-gold grid place-items-center">
              <Award className="w-5 h-5 text-forest-deep" strokeWidth={2} />
            </div>
            <div>
              <div className="text-cream font-display text-lg leading-tight">
                Award Winning
              </div>
              <div className="text-cream/70 text-xs uppercase tracking-widest">
                Design 2025
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
