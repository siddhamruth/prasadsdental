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

const credentials = [
  {
    title: "BDS",
    detail: "Bachelor of Dental Surgery",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-soft)" strokeWidth="1.5">
        <path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    detail: "Advanced training in smile design & aesthetic restorations",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-soft)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Implantology",
    detail: "Certified in dental implant surgery & osseointegration",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-soft)" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Endodontics",
    detail: "Specialist training in painless root canal therapy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-soft)" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Laser Dentistry",
    detail: "Certified in laser gum treatment & soft tissue procedures",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-soft)" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
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
          <p className="section-kicker !text-[var(--accent-soft)]">Credentials</p>
          <h2 className="mt-4 font-serif-display text-4xl tracking-[-0.04em] text-white sm:text-5xl">
            Qualifications & Training
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
            Dr. Prasad brings formal dental education combined with advanced specialist training in cosmetic and restorative dentistry.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {credentials.map((cred) => (
            <motion.div
              key={cred.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="award-card"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                {cred.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                {cred.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {cred.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="/contact"
            className="inline-block rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
