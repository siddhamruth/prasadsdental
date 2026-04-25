"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const faqs = [
  {
    question: "What's the best toothbrush and toothpaste for healthy teeth and gums?",
    answer:
      "For most people, a medium-bristled toothbrush and a fluoride toothpaste work best to protect enamel and prevent gum problems. If you've had a smile makeover, veneers, or whitening, we recommend specially formulated pastes that are gentle yet effective. At Prasad's Dental Clinic, we guide every patient on the right products so your smile stays brighter for longer.",
  },
  {
    question: "Is instant teeth whitening safe and how does it work?",
    answer:
      "Yes — when done by a dental professional, instant teeth whitening is both safe and effective. We use advanced systems that gently break down stains in just one session, leaving your teeth visibly brighter without harming the enamel. Unlike DIY kits, our treatment is designed to give fast results while keeping your smile healthy.",
  },
  {
    question: "Can a smile makeover really be done in just 7 days?",
    answer:
      "Absolutely. Thanks to modern techniques like veneers, crowns, bonding, and digital smile design, we can transform your smile in as little as a week. Every case is customised — from closing gaps to perfecting alignment and whitening — so you walk out with a confident, natural-looking smile in just 7 days.",
  },
  {
    question: "How much does a smile makeover cost?",
    answer:
      "The cost of a smile makeover depends on what your smile needs — from whitening and veneers to full corrections. Instead of a one-size-fits-all package, we create a personalised plan that balances your goals, time, and budget. The best way to know your smile makeover cost is through a detailed consultation at our clinic.",
  },
  {
    question: "Why choose Prasad's Dental Clinic in Guntur?",
    answer:
      "Prasad's Dental Clinic in Pattabipuram, Guntur is led by Dr. Prasad, known for advanced cosmetic dentistry and natural-looking results. From instant whitening to complete smile makeovers, we combine modern technology with personalised care. Here, every smile is crafted to perfection.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="section-kicker">Frequently Asked Questions</p>
          <h2 className="mt-4 font-serif-display text-4xl tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
            You&apos;ve got questions? We&apos;ve got answers —
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
            Everything you need to know about our treatments, process, and what
            to expect during your visit.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
          >
            Book Your Consultation
          </a>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="faq-item"
              itemScope
              itemType="https://schema.org/Question"
              itemProp="mainEntity"
            >
              <summary
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-label={faq.question}
              >
                <span itemProp="name">{faq.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--muted)"
                  strokeWidth="2"
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text" className="faq-answer">{faq.answer}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
