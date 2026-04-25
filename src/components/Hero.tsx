"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[var(--ink)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-smile.jpg"
          alt="Beautiful smile"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl py-24"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/80 backdrop-blur-sm"
          >
            Premium Dental Experience
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-7 font-serif-display text-5xl leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl"
          >
            Flaunt the Freedom to Smile.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            className="mt-6 max-w-lg text-lg leading-8 text-white/70 sm:text-xl"
          >
            We create smiles that feel as good as they look — natural, radiant,
            and truly yours.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="rounded-full bg-[var(--accent)] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Explore Treatments
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="hero-stats mt-14 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3"
          >
            {[
              ["1200+", "Smiles enhanced"],
              ["4.7/5", "Google rating"],
              ["2023", "Established"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-4xl font-semibold tracking-[-0.04em] text-white">
                  {value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side floating card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-16 right-6 z-10 hidden max-w-xs rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl lg:block lg:right-10"
        >
          <p className="text-xs uppercase tracking-[0.26em] text-white/60">
            Dr. Prasad
          </p>
          <h3 className="mt-2 font-serif-display text-2xl tracking-[-0.04em] text-white">
            Your Trusted Smile Expert
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Cosmetic, restorative, and general dental care in Pattabipuram, Guntur.
          </p>
          <a
            href="#doctor"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-soft)] transition hover:text-white"
          >
            Get to know him
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
