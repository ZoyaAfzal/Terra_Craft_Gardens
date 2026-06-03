import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { VideoBanner } from "@/components/VideoBanner";
import { Testimonials } from "@/components/Testimonials";
import { ContactBanner } from "@/components/ContactBanner";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TerraCraft Studios — Editorial Landscape Design & Care" },
      {
        name: "description",
        content:
          "Landscape design, build and care studio. Editorial gardens, expert tree work, and smart green solutions for residential and commercial spaces.",
      },
      { property: "og:title", content: "TerraCraft Studios" },
      {
        property: "og:description",
        content: "Editorial landscape design, build and care — rooted in craft.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Projects />
      <VideoBanner />
      <Testimonials />
      <ContactBanner />
      <Footer />
    </main>
  );
}
