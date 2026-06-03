import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactBanner } from "@/components/ContactBanner";
import { Stats } from "@/components/Stats";
import { About as AboutSection } from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TerraCraft Studios" },
      { name: "description", content: "A landscape studio rooted in craft, climate, and the quiet patience of growing things." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-cream">
      <Navbar />
      <section className="pt-40 pb-16 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <span className="label-accent">Our Studio</span>
          <h1 className="mt-4 font-display text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            Rooted in <span className="italic text-gold">craft</span>, shaped by the land.
          </h1>
          <p className="mt-6 max-w-xl text-cream/75 leading-relaxed">
            TerraCraft Studios is a small team of designers, horticulturists,
            and builders. We've spent fifteen years learning how landscapes
            mature, and we design accordingly.
          </p>
        </div>
      </section>
      <AboutSection />
      <Stats />
      <ContactBanner />
      <Footer />
    </main>
  );
}
