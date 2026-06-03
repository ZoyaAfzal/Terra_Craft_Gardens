import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 350, suffix: "+", label: "Completed Projects" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Team Members" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="bg-forest py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-4 gap-12 items-center">
        <div>
          <span className="label-accent !text-gold">Milestones</span>
          <h3 className="mt-3 font-display text-4xl text-cream leading-tight">
            What we did<br /><span className="italic text-gold">so far.</span>
          </h3>
        </div>
        {stats.map((s) => (
          <div key={s.label} className="border-l border-cream/15 pl-8">
            <div className="font-display text-6xl lg:text-7xl text-gold leading-none">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-cream/70 uppercase tracking-[0.2em] text-xs">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
