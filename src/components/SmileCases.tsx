"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Category = "all" | "whitening" | "implants" | "kids";

const cases: {
  name: string;
  description: string;
  category: Category[];
  beforeImage: string;
  afterImage: string;
}[] = [
  {
    name: "Patient A",
    description: "A seamless smile transformation using porcelain veneers. Flawless results delivered in one week.",
    category: ["all"],
    beforeImage: "/images/cases/smile-before-1.jpg",
    afterImage: "/images/cases/smile-after-1.jpg",
  },
  {
    name: "Patient B",
    description: "When braces couldn't prevent recurring gaps, porcelain veneers delivered the solution. Front 6 teeth restored in just 7 days.",
    category: ["all"],
    beforeImage: "/images/cases/smile-before-1.jpg",
    afterImage: "/images/cases/smile-after-1.jpg",
  },
  {
    name: "Patient C",
    description: "Teeth discoloration corrected with front 6 porcelain veneers. A 5-day smile transformation.",
    category: ["all", "whitening"],
    beforeImage: "/images/cases/smile-before-1.jpg",
    afterImage: "/images/cases/smile-after-1.jpg",
  },
  {
    name: "Patient D",
    description: "Front teeth lost in an accident restored with dental implants and porcelain crowns for a complete smile reconstruction.",
    category: ["all", "implants"],
    beforeImage: "/images/cases/smile-before-1.jpg",
    afterImage: "/images/cases/smile-after-1.jpg",
  },
  {
    name: "Patient E",
    description: "Teeth gaps and oversized front teeth reshaped using porcelain veneers. Balanced, natural-looking smile achieved.",
    category: ["all"],
    beforeImage: "/images/cases/smile-before-1.jpg",
    afterImage: "/images/cases/smile-after-1.jpg",
  },
  {
    name: "Patient F",
    description: "Full mouth rehabilitation completed with dental implants and crowns. Same-day implants and crowns for immediate restoration.",
    category: ["all", "implants"],
    beforeImage: "/images/cases/smile-before-1.jpg",
    afterImage: "/images/cases/smile-after-1.jpg",
  },
  {
    name: "Patient G",
    description: "Teeth gaps reappeared after braces treatment. Corrected using front 6 porcelain veneers for a lasting smile makeover.",
    category: ["all"],
    beforeImage: "/images/cases/smile-before-1.jpg",
    afterImage: "/images/cases/smile-after-1.jpg",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Smile Makeovers", value: "all" },
  { label: "Teeth Whitening", value: "whitening" },
  { label: "Implants & Crowns", value: "implants" },
  { label: "Kids' Dentistry", value: "kids" },
];

export default function SmileCases() {
  const [active, setActive] = useState<Category>("all");
  const filtered = cases.filter((c) => c.category.includes(active));

  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <p className="section-kicker">Visible Outcomes</p>
        <h2 className="mt-4 font-serif-display text-4xl tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
          Smiles, reimagined
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
              active === f.value
                ? "bg-[var(--accent)] text-white"
                : "border border-[var(--line)] bg-white/80 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((c) => (
            <motion.article
              key={c.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white/80 shadow-[0_20px_55px_rgba(63,47,31,0.08)]"
            >
              <div className="grid grid-cols-2 gap-px bg-[var(--line)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[var(--muted)] backdrop-blur-sm">
                    Before
                  </span>
                  <Image
                    src={c.beforeImage}
                    alt={`${c.name} before`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white">
                    After
                  </span>
                  <Image
                    src={c.afterImage}
                    alt={`${c.name} after`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--ink)]">{c.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{c.description}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-[var(--muted)]">
          No cases in this category yet. Check back soon!
        </p>
      )}
    </section>
  );
}
