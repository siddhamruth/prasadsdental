"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const items = [
  "Trusted care for confident smiles",
  "Transparent treatment planning",
  "Pattabipuram, Guntur",
  "Comfort-centered patient care",
];

export default function TrustBar() {
  return (
    <section className="border-y border-[var(--line)] bg-white/60 py-5 backdrop-blur-sm">
      <motion.div
        className="mx-auto grid max-w-7xl gap-5 px-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((item) => (
          <motion.p
            key={item}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]"
          >
            {item}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
