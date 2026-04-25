"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DoctorReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".doctor-text-animate",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="doctor" className="bg-[var(--surface)]">
      <div
        ref={containerRef}
        className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-0 lg:grid-cols-[1fr_1fr]"
      >
        {/* Left — Doctor Photo */}
        <div className="relative min-h-[400px] overflow-hidden lg:min-h-[80vh]">
          <Image
            src="/images/doctor/doctor-portrait.jpg"
            alt="Dr. Prasad - Dentist"
            fill
            className="object-cover"
          />
        </div>

        {/* Right — Doctor Info */}
        <div className="flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-20">
          <p className="doctor-text-animate section-kicker">Meet Your Dentist</p>
          <h2 className="doctor-text-animate mt-4 font-serif-display text-5xl tracking-[-0.04em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
            Dr. Prasad
          </h2>
          <p className="doctor-text-animate mt-3 text-xl font-medium text-[var(--accent)]">
            Your Trusted Smile Expert
          </p>
          <p className="doctor-text-animate mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">
            With a passion for transforming smiles and years of experience in
            cosmetic and general dentistry, Dr. Prasad brings precision, warmth,
            and personalized care to every patient.
          </p>

          <div className="doctor-text-animate mt-10 grid gap-6 sm:grid-cols-3">
            {[
              ["1200+", "Patients catered to"],
              ["3+", "Years of experience"],
              ["4.7", "Rating on Google"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-4xl font-bold tracking-[-0.04em] text-[var(--ink)]">
                  {value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="doctor-text-animate mt-10 w-fit rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
