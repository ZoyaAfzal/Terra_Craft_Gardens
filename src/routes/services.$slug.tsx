import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactBanner } from "@/components/ContactBanner";
import { Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const data: Record<string, { name: string; tagline: string; img: string; intro: string[]; included: string[] }> = {
  maintenance: {
    name: "Maintenance",
    tagline: "Year-round stewardship for landscapes that keep their poise.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1800&q=80",
    intro: [
      "A garden is a living system and like any living thing, it does its best work when cared for with rhythm and patience.",
      "Our maintenance teams visit on a cadence tuned to your site and the season, balancing horticultural science with the editorial vision your garden was designed around.",
      "From spring renewal to deep winter prep, we keep things composed without ever feeling overworked.",
    ],
    included: ["Seasonal cleanups", "Irrigation tuning", "Soil & mulch", "Edge & path detailing", "Pest monitoring", "Reporting after every visit"],
  },
  "tree-care": {
    name: "Tree Care",
    tagline: "Arborist-led care for the most important plants on your property.",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1800&q=80",
    intro: [
      "Mature trees are irreplaceable. We treat them that way.",
      "Our ISA-certified arborists handle assessments, structural pruning, cabling, and when necessary - careful removal.",
      "Every recommendation is documented and explained, so you can make confident decisions about the canopy that defines your site.",
    ],
    included: ["Health assessments", "Structural pruning", "Cabling & bracing", "Removals", "Stump grinding", "Long-term canopy plans"],
  },
  pruning: {
    name: "Pruning",
    tagline: "Sculptural pruning that respects each plant's natural geometry.",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1800&q=80",
    intro: [
      "Good pruning is invisible. You notice the shape, the light, the way a hedge frames a doorway, never the cut itself.",
      "We prune by hand, in season, with a respect for each plant's biology and the architecture of the garden it lives within.",
      "The result is a landscape that looks effortless year after year.",
    ],
    included: ["Hand pruning", "Hedge sculpting", "Espalier & topiary", "Fruit tree management", "Deadwooding", "Seasonal scheduling"],
  },
  landscaping: {
    name: "Landscaping",
    tagline: "Full-service design, build, and planting from concept to handover.",
    img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1800&q=80",
    intro: [
      "From the first walk of the site to the final plant in the ground, our studio leads the entire process design, sourcing, construction, planting.",
      "We work closely with architects, owners, and craftspeople to deliver gardens that feel inevitable in their setting.",
      "Every project is unique, but the standard is the same: composed, climate-appropriate, and built to age beautifully.",
    ],
    included: ["Concept & design", "Construction drawings", "Hardscape build", "Specimen sourcing", "Planting & install", "Handover & care plan"],
  },
};

const slugs = Object.keys(data);

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = data[params.slug];
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.name ?? "Service"} — TerraCraft Studios` },
      { name: "description", content: loaderData?.service.tagline ?? "" },
      { property: "og:image", content: loaderData?.service.img ?? "" },
    ],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <main className="min-h-screen bg-cream grid place-items-center">
      <div className="text-center">
        <h1 className="font-display text-5xl text-forest">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block text-gold underline">Back to services</Link>
      </div>
    </main>
  ),
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = data[slug]!;
  const related = slugs.filter((s) => s !== slug).slice(0, 3);

  return (
    <main className="bg-cream">
      <Navbar />
      <section className="relative h-[60vh] min-h-[460px] overflow-hidden">
        <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover brightness-[0.6]" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16"
        >
          <div className="flex items-center gap-2 text-cream/70 text-xs uppercase tracking-[0.25em] mb-6">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-gold">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">{service.name}</span>
          </div>
          <h1 className="font-display text-6xl lg:text-7xl text-cream max-w-3xl leading-[1.05]">{service.name}</h1>
          <p className="mt-4 text-cream/80 max-w-xl">{service.tagline}</p>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-[1.5fr_1fr] gap-16">
          <div className="space-y-6">
            {service.intro.map((p, i) => (
              <p key={i} className="text-charcoal/75 text-lg leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="rounded-3xl border border-mist bg-card p-8 h-fit">
            <div className="label-accent mb-5">What's Included</div>
            <ul className="space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal/85">
                  <Check className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-full justify-center items-center rounded-full bg-forest text-cream px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-sage transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl text-forest mb-10">Related <span className="italic text-gold">services</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r}
                to="/services/$slug"
                params={{ slug: r }}
                className="group rounded-3xl overflow-hidden bg-card border border-mist hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={data[r].img} alt={data[r].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-forest">{data[r].name}</h3>
                  <p className="mt-2 text-sm text-charcoal/65">{data[r].tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </main>
  );
}
