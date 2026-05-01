"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StudioInvite() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.4rem] border border-white/55 bg-[linear-gradient(140deg,_rgba(20,82,80,0.98),_rgba(13,56,55,0.96)_55%,_rgba(228,217,206,0.25)_100%)] p-10 text-white shadow-[0_35px_90px_rgba(11,44,43,0.18)] sm:p-14"
        >
          <Image
            src="/images/hero/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.28em] text-white/65">
              Visit Us
            </p>
            <h2 className="mt-5 max-w-2xl font-serif-display text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              The world <em>aligns</em> at Guntur
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/90">
              We would much rather have our clinic brimming with smiles and
              chatter than refer to it as anything clinical. Drop in and
              experience the Prasad&apos;s Dental difference for yourself.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[var(--cream)]"
            >
              Book an Appointment
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
