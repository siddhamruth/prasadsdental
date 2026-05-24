"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  { slug: "smile-makeover",            title: "Smile Makeover",             description: "A personalized combination of cosmetic treatments designed to dramatically improve the appearance of your smile — typically completed in just 7 days." },
  { slug: "dental-implants",           title: "Dental Implants",            description: "Titanium implants surgically placed in the jawbone to permanently replace missing teeth with natural-looking, long-lasting results." },
  { slug: "porcelain-veneers",         title: "Porcelain Veneers",          description: "Discover the transformative power of porcelain veneers — ultra-thin shells that reshape, whiten, and perfect your smile in days." },
  { slug: "teeth-whitening",           title: "Instant Teeth Whitening",    description: "Professional whitening that restores brightness in a single session, reversing years of staining safely and effectively." },
  { slug: "invisible-aligners",        title: "Invisible Aligners",         description: "Clear, comfortable, and lifestyle-friendly aligners to achieve a beautifully aligned smile without compromising aesthetics." },
  { slug: "dental-crowns",             title: "Dental Crowns & Bridges",    description: "Fixed solutions to restore damaged or missing teeth. Crowns strengthen while bridges span gaps with natural-looking results." },
  { slug: "painless-root-canal",       title: "Painless Root Canal",        description: "Save infected or decayed teeth with modern root canal treatment — the most reliable way to preserve your natural tooth without pain." },
  { slug: "full-mouth-rehabilitation", title: "Full Mouth Rehabilitation",  description: "Comprehensive restoration combining implants, crowns, veneers, and bite correction for a complete dental transformation." },
  { slug: "kids-dentistry",            title: "Kids Dentistry",             description: "Building lifelong oral health habits for your child through prevention-focused visits, gentle communication, and family-friendly care." },
  { slug: "braces",                    title: "Braces (Clear)",             description: "A well-aligned smile improves function, balance, and long-term oral health with modern clear braces technology." },
  { slug: "teeth-cleaning",            title: "Teeth Cleaning & Polishing", description: "Professional cleaning essential for maintaining gum health, preventing long-term dental issues, and keeping your smile fresh." },
  { slug: "laser-gum-treatment",       title: "Laser Gum Treatment",        description: "Comfortable, effective, and minimally invasive laser solutions for maintaining healthy gums and treating gum disease." },
  { slug: "wisdom-tooth-extraction",   title: "Wisdom Tooth Extraction",    description: "Safe and efficient removal of wisdom teeth using modern techniques for minimal discomfort and quick recovery." },
  { slug: "cavity-fillings",           title: "Cavity Fillings",            description: "Early cavities restored seamlessly — tooth-colored composite fillings for maximum preservation of your natural tooth structure." },
  { slug: "tooth-bonding",             title: "Tooth Bonding",              description: "Repair chips, cracks, and discoloration with tooth-colored bonding material for improved appearance and confidence." },
  { slug: "dentures",                  title: "Dentures",                   description: "Dependable, removable replacement for lost teeth crafted for comfort and confidence with natural-looking aesthetics." },
  { slug: "sedation-dentistry",        title: "Sedation Dentistry",         description: "Conscious sedation using laughing gas — a gentle and safe method that eases anxiety while you remain awake and responsive." },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -360, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 360, behavior: "smooth" });

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
          <h2 className="mt-4 max-w-2xl font-serif-display text-4xl tracking-[-0.04em] text-[var(--ink)] sm:text-5xl lg:text-6xl xl:text-7xl">
            <em>Goodbye</em> Dental Dilemmas
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Offering unparalleled general, cosmetic and urgent dentistry solutions at our clinic
          </p>
        </motion.div>

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

      <div
        ref={scrollRef}
        className="hide-scrollbar mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 lg:px-10"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="snap-start"
            style={{ flex: "0 0 320px" }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="service-card group flex h-full flex-col"
              itemScope
              itemType="https://schema.org/MedicalProcedure"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-lg font-semibold text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 itemProp="name" className="mt-6 text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                {service.title}
              </h3>
              <p itemProp="description" className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">
                {service.description}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)] transition group-hover:translate-x-1">
                Learn More &rarr;
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          View All 17 Services
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
        </Link>
      </div>
    </section>
  );
}
