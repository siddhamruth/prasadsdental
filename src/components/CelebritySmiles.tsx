"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const celebrities = [
  { name: "Celebrity 1", image: "/images/celebrity/celeb-1.jpg" },
  { name: "Celebrity 2", image: "/images/celebrity/celeb-2.jpg" },
  { name: "Celebrity 3", image: "/images/celebrity/celeb-3.jpg" },
  { name: "Celebrity 4", image: "/images/celebrity/celeb-1.jpg" },
  { name: "Celebrity 5", image: "/images/celebrity/celeb-2.jpg" },
];

export default function CelebritySmiles() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % celebrities.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-[var(--ink)] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center"
        >
          <p className="section-kicker !text-[var(--accent-soft)]">Trusted Results</p>
          <h2 className="mt-4 font-serif-display text-4xl tracking-[-0.04em] text-white sm:text-5xl">
            The Smile Celebrities Trust
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">
            Discover the treatments and care behind confidence-ready smiles.
            From bespoke whitening to flawless smile makeovers, your
            transformation awaits.
          </p>
        </motion.div>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
          >
            {celebrities.map((celeb, i) => (
              <div
                key={celeb.name}
                className={`relative min-h-[20rem] w-full flex-shrink-0 overflow-hidden rounded-[2rem] border border-[var(--line)] sm:w-[calc(33.333%-16px)] transition-all duration-500 ${
                  current === i ? "scale-100 opacity-100" : "scale-95 opacity-60"
                }`}
              >
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-sm font-medium text-white">{celeb.name}</p>
                  <p className="mt-1 text-xs text-white/70">Placeholder — replace with photo</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {celebrities.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-[var(--accent-soft)]" : "w-2.5 bg-white/20"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
