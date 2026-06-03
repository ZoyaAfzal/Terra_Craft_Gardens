import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactBanner } from "@/components/ContactBanner";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "@/lib/projects";

const fallback = {
  title: "Untitled Project",
  location: "Project Location",
  year: "2025",
  type: "Residential",
  images: [
    "https://images.unsplash.com/photo-1560567520-2c81ba81997d?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&w=1400&q=80",
  ],
};

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    const title = project ? project.title : formatTitle(params.slug);
    return {
      meta: [
        { title: `${title} — TerraCraft Studios` },
        { name: "description", content: `A landscape project by TerraCraft Studios: ${title}.` },
      ],
    };
  },
  component: ProjectDetail,
});

function formatTitle(slug: string) {
  return slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);
  
  const title = project?.title || formatTitle(slug);
  const location = project?.location || fallback.location;
  const year = project?.year || fallback.year;
  const type = project?.type || fallback.type;
  const images = project?.images || fallback.images;

  return (
    <main className="bg-cream">
      <Navbar />

      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-forest hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>
          <h1 className="mt-6 font-display text-6xl lg:text-7xl text-forest leading-[1.05] max-w-3xl">{title}</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {[location, year, type].map((b) => (
              <span key={b} className="rounded-full border border-forest/25 text-forest px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-sm border border-mist">
            <img src={images[0]} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 space-y-6 text-lg text-charcoal/75 leading-relaxed">
          <p>
            {title} began as a quiet conversation between site, client, and craft. The brief asked for a landscape that would feel inevitable as if it had always been part of the architecture.
          </p>
          <p>
            We responded with a restrained palette of native specimens, weathered stone, and a single arc of water that ties the upper terrace to the wild edge below. Sightlines were carefully tuned so each season reveals something new.
          </p>
          <p>
            The result is a garden that asks little of its owners and gives back daily composed in the morning light, generous in summer evenings, structural through winter.
          </p>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { v: "2,400 m²", l: "Area shaped" },
            { v: "180+", l: "Specimens planted" },
            { v: "14 wks", l: "From design to handover" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-5xl text-forest">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-charcoal/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </main>
  );
}
