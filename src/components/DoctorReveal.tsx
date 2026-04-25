"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { count, ref };
}

function CounterStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref}>
      <p className="text-4xl font-bold tracking-[-0.04em] text-[var(--ink)]">
        {count}{suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
        {label}
      </p>
    </div>
  );
}

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
            <CounterStat value={1200} suffix="+" label="Patients catered to" />
            <CounterStat value={3} suffix="+" label="Years of experience" />
            <CounterStat value={4} suffix=".7" label="Rating on Google" />
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
