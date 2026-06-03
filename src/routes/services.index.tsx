import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactBanner } from "@/components/ContactBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Wrench, Trees, Scissors, Shovel, ArrowRight } from "lucide-react";

const services = [
  { 
    slug: "maintenance", 
    name: "Maintenance", 
    icon: Wrench, 
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80", 
    desc: "Year-round stewardship - irrigation, soil health, seasonal cleanups and edge work." 
  },
  { 
    slug: "tree-care", 
    name: "Tree Care", 
    icon: Trees, 
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80", 
    desc: "Certified arborists handling assessments, removals and long-term canopy planning." 
  },
  { 
    slug: "pruning", 
    name: "Pruning", 
    icon: Scissors, 
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80", 
    desc: "Specialist pruning for health, structure and architectural aesthetic." 
  },
  { 
    slug: "landscaping", 
    name: "Landscaping", 
    icon: Shovel, 
    img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1200&q=80", 
    desc: "End-to-end design and build of residential and commercial outdoor spaces." 
  },
];

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — TerraCraft Studios" },
      { name: "description", content: "Maintenance, tree care, pruning, and full-service landscape design and build." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <section className="pt-40 pb-16 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <span className="label-accent">Our Expertise</span>
          <h1 className="mt-4 font-display text-6xl lg:text-7xl leading-[1.05]">
            Rooted in <span className="italic text-gold">craft.</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.1}>
                <div className="group grid lg:grid-cols-2 gap-10 items-center">
                  <div className={`overflow-hidden rounded-3xl aspect-[16/10] ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-mist grid place-items-center mb-6">
                      <s.icon className="w-7 h-7 text-sage" strokeWidth={1.5} />
                    </div>
                    <h2 className="font-display text-4xl text-forest">{s.name}</h2>
                    <p className="mt-4 text-charcoal/70 text-lg leading-relaxed max-w-xl">
                      {s.desc}
                    </p>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="mt-8 inline-flex items-center gap-2 text-forest font-medium hover:text-sage transition-colors"
                    >
                      Explore service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </main>
  );
}
