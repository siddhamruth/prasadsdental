"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <motion.div
      className="max-w-2xl"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <p className={`section-kicker ${light ? "!text-white/65" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl ${
          light ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-7 sm:text-lg ${
          light ? "text-white/75" : "text-[var(--muted)]"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
