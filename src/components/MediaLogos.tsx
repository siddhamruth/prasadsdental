"use client";

import { motion } from "framer-motion";

const logos = [
  "Media 1", "Media 2", "Media 3", "Media 4",
  "Media 5", "Media 6", "Media 7", "Media 8",
];

export default function MediaLogos() {
  return (
    <section className="border-y border-[var(--line)] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]"
        >
          As Featured On
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {logos.map((logo) => (
            <div key={logo} className="media-logo">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
