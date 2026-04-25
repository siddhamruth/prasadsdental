"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const services = [
  { title: "Full Mouth Rehabilitation", description: "A combination of treatments designed to restore your teeth, bite, and overall oral function for a complete dental transformation." },
  { title: "Dental Implants", description: "Titanium or ceramic implants surgically placed in the jawbone to permanently replace missing tooth roots with natural-looking results." },
  { title: "Bone Grafting & Sinus Lift", description: "When the jawbone is too thin or weak, bone grafting or sinus lift creates the ideal foundation for long-lasting implant success." },
  { title: "Dentures", description: "Dependable, removable replacement for lost teeth crafted using high-quality acrylic, nylon, or metal for comfort and confidence." },
  { title: "Dental Crowns & Bridges", description: "Fixed solutions to restore damaged or missing teeth. Crowns strengthen while bridges span gaps with natural-looking results." },
  { title: "Sedation Dentistry", description: "Conscious sedation using laughing gas — a gentle and safe method that eases anxiety while you remain awake and responsive." },
  { title: "Dentistry For Kids", description: "Building lifelong oral health habits for your child through prevention-focused visits, gentle communication, and family-friendly care." },
  { title: "Porcelain Veneers", description: "Discover the transformative power of porcelain veneers — your gateway to a beautifully designed, natural-looking smile." },
  { title: "Invisible Aligners", description: "Clear, comfortable, and lifestyle-friendly aligners to achieve a beautifully aligned smile without compromising aesthetics." },
  { title: "Braces (Clear)", description: "A well-aligned smile improves function, balance, and long-term oral health with modern clear braces technology." },
  { title: "Teeth Cleaning & Polishing", description: "Professional cleaning essential for maintaining gum health, preventing long-term dental issues, and keeping your smile fresh." },
  { title: "Laser Gum Treatments", description: "Comfortable, effective, and minimally invasive laser solutions for maintaining healthy gums and treating gum disease." },
  { title: "Painless Root Canals", description: "Save infected or decayed teeth with modern root canal treatment — the most reliable way to preserve your natural tooth." },
  { title: "Wisdom Tooth Extractions", description: "Safe and efficient removal of wisdom teeth using modern techniques for minimal discomfort and quick recovery." },
  { title: "Cavity Fillings", description: "Early cavities restored seamlessly and conservatively — minimal treatment for maximum preservation of your natural tooth." },
  { title: "Instant Teeth Whitening", description: "Professional whitening that restores brightness in a single session, reversing years of staining safely and effectively." },
  { title: "Tooth Bondings", description: "Repair chips, cracks, and discoloration with tooth-colored bonding material for improved appearance and confidence." },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-[var(--cream)] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="section-kicker">Comprehensive Dentistry</p>
          <h2 className="mt-4 max-w-2xl font-serif-display text-4xl tracking-[-0.04em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
            <em>Goodbye</em> Dental Dilemmas
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Offering unparalleled general, cosmetic and urgent dentistry
            solutions at our clinic
          </p>
        </motion.div>

        {/* Scroll controls */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--muted)]">
            Scroll to view &rarr;
          </p>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white transition hover:bg-[var(--accent)] hover:text-white"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={scrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white transition hover:bg-[var(--accent)] hover:text-white"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="hide-scrollbar mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 lg:px-10"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="service-card snap-start"
            itemScope
            itemType="https://schema.org/MedicalProcedure"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-lg font-semibold text-[var(--accent)]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 itemProp="name" className="mt-6 text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
              {service.title}
            </h3>
            <p itemProp="description" className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {service.description}
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Read More &rarr;
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
