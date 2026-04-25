"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DoctorReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            once: true,
          },
        });

        tl.to(containerRef.current, {
          height: "100vh",
          duration: 1.5,
          ease: "power2.inOut",
        })
          .to(
            rightRef.current,
            { width: "35%", duration: 1.5, ease: "power2.inOut" },
            "<"
          )
          .to(
            leftRef.current,
            { width: "65%", opacity: 1, duration: 1.5, ease: "power2.inOut" },
            "<"
          )
          .fromTo(
            ".doctor-text-animate",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power1.out",
              stagger: 0.2,
            },
            "-=0.5"
          );
      });

      mm.add("(max-width: 1024px)", () => {
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
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="doctor" className="overflow-hidden bg-[var(--cream)]">
      <div
        ref={containerRef}
        className="mx-auto flex h-auto max-w-7xl flex-col-reverse items-stretch lg:h-[50vh] lg:flex-row"
      >
        {/* Left — Doctor Info */}
        <div
          ref={leftRef}
          className="flex w-full flex-col justify-center px-6 py-16 lg:px-12 lg:py-0"
          style={{ opacity: 1 }}
        >
          <p className="doctor-text-animate section-kicker">Meet Your Dentist</p>
          <h2 className="doctor-text-animate mt-4 font-serif-display text-5xl tracking-[-0.04em] text-[var(--ink)] sm:text-6xl">
            Dr. Prasad
          </h2>
          <p className="doctor-text-animate mt-2 text-lg font-medium text-[var(--accent)]">
            Your Trusted Smile Expert
          </p>
          <p className="doctor-text-animate mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">
            With a passion for transforming smiles and years of experience in
            cosmetic and general dentistry, Dr. Prasad brings precision, warmth,
            and personalized care to every patient.
          </p>

          <div className="doctor-text-animate mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["1200+", "Patients catered to"],
              ["3+", "Years of experience"],
              ["4.7", "Rating on Google"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--line)] bg-white/70 p-5"
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
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
            className="doctor-text-animate mt-8 w-fit rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
          >
            Book an Appointment
          </a>
        </div>

        {/* Right — Doctor Photo */}
        <div
          ref={rightRef}
          className="flex w-full items-center justify-center overflow-hidden bg-[var(--accent-soft)] p-8 lg:p-0"
        >
          <Image
            src="/images/doctor/doctor-portrait.jpg"
            alt="Dr. Prasad - Dentist"
            width={500}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
