import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactBanner } from "@/components/ContactBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/projects";

const filters = ["All", "Residential", "Commercial", "Public Spaces"];

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — TerraCraft Studios" },
      { name: "description", content: "A selection of residential, commercial, and public landscape projects by TerraCraft Studios." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <main className="bg-cream">
      <Navbar />
      <section className="pt-40 pb-16 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <span className="label-accent">Selected Work</span>
          <h1 className="mt-4 font-display text-6xl lg:text-7xl leading-[1.05]">
            Landscapes that <span className="italic text-gold">live on.</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <LayoutGroup>
            <div className="flex flex-wrap gap-2 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="relative px-5 py-2.5 text-sm rounded-full text-forest"
                >
                  {active === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-forest rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative ${active === f ? "text-cream" : ""}`}>{f}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                >
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className={`group relative block overflow-hidden rounded-3xl ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                  >
                    <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-gold text-xs uppercase tracking-[0.25em]">{p.cat}</div>
                      <div className="text-cream font-display text-2xl mt-1">{p.title}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </main>
  );
}
