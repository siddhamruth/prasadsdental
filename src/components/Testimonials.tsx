"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Divya R.",
    treatment: "Whitening & Cleaning",
    quote: "I regularly visit for whitening and cleaning because the results are always consistent. The dentist explains everything clearly and makes the whole experience smooth.",
    image: "/images/testimonials/person-1.jpg",
  },
  {
    name: "Lavanya M.",
    treatment: "Gaps Closed with Veneers",
    quote: "I had small gaps in my front teeth that always bothered me. Veneers closed them perfectly without making my teeth look bulky. The colour match is spot-on.",
    image: "/images/testimonials/person-2.jpg",
  },
  {
    name: "Kavitha S.",
    treatment: "Teeth Whitening",
    quote: "Got my teeth whitening done and I'm so glad I finally did. The shade difference was instant and the whole session was super comfortable.",
    image: "/images/testimonials/person-3.jpg",
  },
  {
    name: "Venkat R.",
    treatment: "Cleaning & Veneers",
    quote: "I first came in for a cleaning and loved how fresh my teeth felt, so I decided to get veneers too. The result looks incredibly natural and not overdone.",
    image: "/images/testimonials/person-4.jpg",
  },
  {
    name: "Dr. Ravi Kumar",
    treatment: "Gaps Closed with Veneers",
    quote: "As a doctor, I'm very particular about aesthetics. My spacing issues were corrected beautifully with veneers. The finish is extremely natural and precise.",
    image: "/images/testimonials/person-5.jpg",
  },
  {
    name: "Padmaja N.",
    treatment: "Family Dentist",
    quote: "My whole family visits for routine cleanings and we've always had great experiences. The doctors are patient, friendly, and thorough.",
    image: "/images/testimonials/person-1.jpg",
  },
  {
    name: "Priya B.",
    treatment: "Regular Cleaning & Polishing",
    quote: "I come every six months for my cleaning because it genuinely keeps my teeth stain-free and fresh. The appointments are gentle and never rushed.",
    image: "/images/testimonials/person-2.jpg",
  },
  {
    name: "Srikanth G.",
    treatment: "Porcelain Veneers",
    quote: "I wanted a natural-looking smile makeover, and the porcelain veneers turned out better than I expected. They look seamless, not fake.",
    image: "/images/testimonials/person-3.jpg",
  },
  {
    name: "Nikhil K.",
    treatment: "Root Canal Treatment",
    quote: "I was nervous about getting a root canal, but the whole procedure was surprisingly smooth and painless. The doctor explained everything clearly.",
    image: "/images/testimonials/person-4.jpg",
  },
  {
    name: "Sunitha M.",
    treatment: "Aligners",
    quote: "I've been on aligners for a few months and can already see a clear difference. They're comfortable, invisible, and easy to manage.",
    image: "/images/testimonials/person-5.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef(0);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 860) setCardsPerView(3);
      else if (window.innerWidth >= 560) setCardsPerView(2);
      else setCardsPerView(1);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = testimonials.length - cardsPerView;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setFlippedIndex(null);
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setFlippedIndex(null);
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section className="bg-[var(--ink)] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="section-kicker !text-[var(--accent-soft)]">Patient Voices</p>
          <h2 className="mt-4 font-serif-display text-4xl tracking-[-0.04em] text-white sm:text-5xl">
            Smiles That Speak Confidence
          </h2>
        </motion.div>

        <div
          className="relative mt-14 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name + i}
                className="flip-card"
                style={{
                  flex: `0 0 calc(${100 / cardsPerView}% - ${((cardsPerView - 1) * 24) / cardsPerView}px)`,
                  minHeight: "22rem",
                }}
                onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
              >
                <div
                  className={`flip-card-inner ${flippedIndex === i ? "flipped" : ""}`}
                  style={{ minHeight: "22rem" }}
                >
                  {/* Front */}
                  <div className="flip-card-front flex flex-col justify-between border border-white/15 bg-white/10 p-7 shadow-[0_20px_55px_rgba(63,47,31,0.07)]">
                    <div>
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={80}
                        height={80}
                        className="h-20 w-20 rounded-full object-cover transition hover:scale-[1.04]"
                      />
                      <h3 className="mt-6 text-xl font-semibold text-white">
                        {t.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[var(--accent-soft)]">
                        {t.treatment}
                      </p>
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                      Tap to read review
                    </p>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back flex flex-col justify-between border border-[var(--accent)] bg-[var(--accent)] p-7" itemScope itemType="https://schema.org/Review">
                    <p itemProp="reviewBody" className="text-base leading-7 text-white/90">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-6 border-t border-white/20 pt-4">
                      <p itemProp="author" className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
                        {t.name}
                      </p>
                      <p className="mt-1 text-xs text-white/60">
                        {t.treatment}
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 shadow-lg transition hover:scale-110 hover:bg-white/20"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 shadow-lg transition hover:scale-110 hover:bg-white/20"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-[var(--accent-soft)]"
                  : "w-2.5 bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
