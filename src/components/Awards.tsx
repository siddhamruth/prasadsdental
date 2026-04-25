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

const awards = [
  { name: "Best Dental Clinic Award", achievement: "Best Dental Clinic in Guntur Region" },
  { name: "Excellence in Dentistry", achievement: "Outstanding New Practice of the Year" },
  { name: "Aesthetic Dentistry Award", achievement: "Best Aesthetic Dentist" },
  { name: "Rising Star Award", achievement: "Excellence in Modern Dentistry" },
  { name: "Patient Care Award", achievement: "Heroic Dentistry Award" },
];

export default function Awards() {
  return (
    <section className="bg-[var(--ink)] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="section-kicker !text-[var(--accent-soft)]">Recognition</p>
          <h2 className="mt-4 font-serif-display text-4xl tracking-[-0.04em] text-white sm:text-5xl">
            Awards & Recognition
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {awards.map((award) => (
            <motion.div
              key={award.name}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="award-card"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-soft)" strokeWidth="1.5">
                  <path d="M12 15l-3.5 2 .67-3.9L6 10.1l3.92-.57L12 6l2.08 3.53 3.92.57-2.83 2.96.67 3.94z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                {award.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {award.achievement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
