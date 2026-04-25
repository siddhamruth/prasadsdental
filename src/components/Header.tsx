"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  "Full Mouth Rehabilitation",
  "Dental Implants",
  "Bone Grafting and Sinus Lift",
  "Dentures",
  "Dental Crowns and Bridges",
  "Sedation Dentistry",
  "Dentistry For Kids",
  "Porcelain Veneers",
  "Invisible Aligners",
  "Braces (Clear)",
  "Teeth Cleaning And Polishing",
  "Laser Gum Treatments",
  "Painless Root Canals",
  "Wisdom Tooth Extractions",
  "Cavity Fillings",
  "Instant Teeth Whitening",
  "Tooth Bondings",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-[rgba(247,242,236,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.svg"
            alt="Prasad's Dental Clinic"
            width={44}
            height={44}
            className="rounded-full shadow-[0_15px_35px_rgba(18,113,111,0.25)]"
          />
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-[var(--muted)]">
              Pattabipuram, Guntur
            </p>
            <p className="font-serif-display text-xl leading-none text-[var(--ink)]">
              Prasad&apos;s Dental Clinic
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--ink-soft)] lg:flex">
          <a href="#top" className="nav-link transition hover:text-[var(--accent)]">
            Home
          </a>
          <a href="#doctor" className="nav-link transition hover:text-[var(--accent)]">
            About Dr. Prasad
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="nav-link flex items-center gap-1 transition hover:text-[var(--accent)]">
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl border border-[var(--line)] bg-white/95 p-3 shadow-[0_20px_50px_rgba(63,47,31,0.15)] backdrop-blur-xl"
                >
                  <div className="max-h-80 overflow-y-auto">
                    {services.map((service) => (
                      <a
                        key={service}
                        href="#services"
                        className="block rounded-xl px-4 py-2.5 text-sm text-[var(--ink-soft)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#results" className="nav-link transition hover:text-[var(--accent)]">
            Results
          </a>
          <a href="#faq" className="nav-link transition hover:text-[var(--accent)]">
            FAQ
          </a>
          <a href="#contact" className="nav-link transition hover:text-[var(--accent)]">
            Contact
          </a>
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent)] sm:inline-flex"
          >
            Book Appointment
          </a>
          <button
            className={`hamburger lg:hidden ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mobile-nav lg:hidden"
          >
            {[
              { label: "Home", href: "#top" },
              { label: "About Dr. Prasad", href: "#doctor" },
              { label: "Services", href: "#services" },
              { label: "Results", href: "#results" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-[var(--ink)] transition hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-[var(--accent)] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
