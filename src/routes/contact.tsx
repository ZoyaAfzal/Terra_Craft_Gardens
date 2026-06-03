import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TerraCraft Studios" },
      { name: "description", content: "Start a conversation about your landscape project." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().max(40).optional(),
  service: z.string().min(1, "Pick a service"),
  message: z.string().trim().min(5, "Tell us a little more").max(1500),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="label-accent">Get in Touch</span>
            <h1 className="mt-4 font-display text-5xl lg:text-6xl text-forest leading-[1.05]">
              Let's build something <span className="italic text-gold">beautiful.</span>
            </h1>
            <p className="mt-6 text-charcoal/70 leading-relaxed max-w-md">
              Tell us about your site, your hopes for it, and the rough
              timeline. We'll come back within two working days.
            </p>

            <ul className="mt-10 space-y-5 text-charcoal/85">
              <li className="flex gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-mist text-forest"><Mail className="w-5 h-5" /></span>
                <div><div className="font-medium">hello@terracraft.studio</div></div>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-mist p-8 lg:p-10 h-fit">
            <Field label="Name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <Field label="Phone" name="phone" type="tel" error={errors.phone} />
            <div className="mb-5">
              <label className="block text-xs uppercase tracking-[0.2em] text-forest mb-2">Service Interested In</label>
              <select name="service" defaultValue="" className="w-full bg-cream border border-mist rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-sage">
                <option value="" disabled>Choose a service</option>
                <option>Maintenance</option>
                <option>Tree Care</option>
                <option>Pruning</option>
                <option>Landscaping</option>
              </select>
              {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-[0.2em] text-forest mb-2">Message</label>
              <textarea name="message" rows={5} className="w-full bg-cream border border-mist rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-sage resize-none" />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={sent}
              className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-forest text-cream px-6 py-4 text-xs uppercase tracking-[0.25em] hover:bg-sage transition-colors"
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span key="ok" initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-flex items-center gap-2">
                    <Check className="w-4 h-4" /> Sent
                  </motion.span>
                ) : (
                  <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div className="mb-5">
      <label className="block text-xs uppercase tracking-[0.2em] text-forest mb-2">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full bg-cream border border-mist rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-sage"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
