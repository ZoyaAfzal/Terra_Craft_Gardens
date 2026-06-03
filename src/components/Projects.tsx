import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-cream py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} project={p} className="lg:col-span-1" />
          ))}
          <ProjectCard project={projects[2]} className="lg:col-span-2 lg:row-span-2" tall />

          <ScrollReveal className="lg:col-span-1 lg:row-span-1">
            <div className="h-full rounded-3xl bg-card border border-mist p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="label-accent">Projects</span>
                <h3 className="mt-3 font-display text-3xl text-forest leading-tight">
                  A peek of our landscape <span className="italic text-gold">creations</span>
                </h3>
              </div>
              <p className="text-charcoal/65 text-sm mt-4 leading-relaxed">
                Estates, urban parks, courtyards and quiet retreats — each one
                shaped by the land it lives on.
              </p>
              <Link
                to="/projects"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-forest px-6 py-3 text-xs uppercase tracking-[0.25em] text-forest hover:bg-forest hover:text-cream transition-colors"
              >
                All Projects
              </Link>
            </div>
          </ScrollReveal>

          {projects.slice(3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className = "",
  tall = false,
}: {
  project: { slug: string; title: string; img: string };
  className?: string;
  tall?: boolean;
}) {
  return (
    <ScrollReveal className={className}>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className={`group relative block overflow-hidden rounded-3xl ${tall ? "h-full min-h-[540px]" : "aspect-[4/3]"}`}
      >
        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-cream font-display text-2xl">{project.title}</div>
          <div className="mt-1 text-gold text-xs uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Project →
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
