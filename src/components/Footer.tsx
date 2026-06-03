import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Leaf, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/70 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-leaf/20 border border-leaf/40">
              <Leaf className="w-5 h-5 text-leaf" strokeWidth={1.8} />
            </span>
            <span className="font-display text-2xl text-cream">TerraCraft</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Editorial landscape design, build and care rooted in craft,
            climate, and a quiet love of green spaces.
          </p>
        </div>

        <div>
          <div className="label-accent !text-cream/50 mb-4">Contact Info</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>hello@terracraft.studio</li>
          </ul>
        </div>

        <div>
          <div className="label-accent !text-cream/50 mb-4">Navigation</div>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/services", l: "Services" },
              { to: "/about", l: "About" },
              { to: "/projects", l: "Projects" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-gold transition-colors">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="label-accent !text-cream/50 mb-4">Social Media</div>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center w-10 h-10 rounded-full border border-cream/15 hover:bg-gold hover:text-forest-deep hover:border-gold transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/40">
        <div />
        <div className="flex gap-4">
          <a 
            href="https://axistechgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gold transition-colors"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
