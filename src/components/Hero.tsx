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
    <section id="top" className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="grain-overlay" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)] backdrop-blur-sm"
          >
            Premium Dental Experience
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-7 max-w-3xl font-serif-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--ink)] sm:text-6xl lg:text-7xl"
          >
            Flaunt the Freedom to Smile.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl"
          >
            We create smiles that feel as good as they look — natural, radiant,
            and truly yours. At Prasad&apos;s Dental Clinic, Guntur.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="rounded-full bg-[var(--accent)] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-[var(--line-strong)] bg-white/70 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Explore Treatments
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="hero-stats mt-12 grid gap-5 border-t border-[var(--line)] pt-8 sm:grid-cols-3"
          >
            {[
              ["1200+", "Smiles enhanced"],
              ["4.7/5", "Google rating"],
              ["2023", "Established"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                  {value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side — doctor photo + clinic image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative z-10"
        >
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/70 p-5 shadow-[0_40px_90px_rgba(63,47,31,0.12)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.8rem]">
              <Image
                src="/images/hero/hero-bg.jpg"
                alt="Modern dental clinic interior"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/45 bg-white/80 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                  Dr. Prasad
                </p>
                <h3 className="mt-2 font-serif-display text-2xl tracking-[-0.04em] text-[var(--ink)] sm:text-3xl">
                  Your Trusted Smile Expert
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[var(--muted)]">
                  Cosmetic, restorative, and general dental care in one refined
                  clinic experience.
                </p>
              </div>
            </div>

            {/* Bottom info cards */}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--cream)] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  Clinic Snapshot
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
                  Established in 2023, Pattabipuram, Guntur. Offering premium
                  dental care with modern technology.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-white p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  Booking Contact
                </p>
                <a
                  href="https://wa.me/919398615727"
                  className="mt-3 inline-flex items-center text-base font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
                >
                  +91 93986 15727
                </a>
                <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                  WhatsApp or call to book your appointment
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
