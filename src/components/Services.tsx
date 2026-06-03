import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Wrench, Trees, Scissors, Shovel, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    slug: "maintenance",
    name: "Maintenance",
    icon: Wrench,
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    desc: "Year-round upkeep that keeps your landscape thriving in every season.",
  },
  {
    slug: "tree-care",
    name: "Tree Care",
    icon: Trees,
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
    desc: "Expert arborist work - health assessments, removals, and canopy care.",
  },
  {
    slug: "pruning",
    name: "Pruning",
    icon: Scissors,
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    desc: "Sculptural pruning that respects plant biology and architectural form.",
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    icon: Shovel,
    img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80",
    desc: "Full-service design and build for residential and commercial spaces.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <ScrollReveal>
            <span className="label-accent">Leader in Landscaping</span>
            <h2 className="mt-4 font-display text-5xl lg:text-6xl text-forest leading-[1.05]">
              Services crafted for<br />
              <span className="italic text-gold">living</span> spaces.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-charcoal/70 leading-relaxed max-w-md">
              From quiet courtyard gardens to sprawling estates, our team
              blends horticultural expertise with editorial design, every
              project rooted in craft, climate, and care.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group h-full rounded-3xl border border-mist bg-card p-7 hover:border-sage hover:shadow-[0_24px_48px_-12px_rgba(28,58,43,0.18)] transition-all"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-mist grid place-items-center mb-4"
                >
                  <s.icon className="w-6 h-6 text-sage" strokeWidth={1.6} />
                </motion.div>
                <h3 className="font-display text-2xl text-forest">{s.name}</h3>
                <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">
                  {s.desc}
                </p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-sage transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-forest px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-forest hover:bg-forest hover:text-cream transition-colors"
          >
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
