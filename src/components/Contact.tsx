"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-24 lg:px-10" itemScope itemType="https://schema.org/Dentist">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.4rem] border border-white/55 bg-[linear-gradient(140deg,_rgba(20,82,80,0.98),_rgba(13,56,55,0.96)_55%,_rgba(228,217,206,0.25)_100%)] p-8 text-white shadow-[0_35px_90px_rgba(11,44,43,0.18)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/65">
            Get In Touch
          </p>
          <h2 className="mt-5 font-serif-display text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
            Need advice on your oral health?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/78">
            Book your consultation today and take the first step toward the
            smile you&apos;ve always wanted. We&apos;re here to help.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-white/62">Address</p>
              <p className="mt-3 text-base font-medium leading-7 text-white">
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="streetAddress">Stambalagaruvu, Pattabipuram</span>,{" "}
                  <span itemProp="addressLocality">Guntur</span>-
                  <span itemProp="postalCode">522006</span>,{" "}
                  <span itemProp="addressRegion">Andhra Pradesh</span>
                </span>
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-white/62">Phone</p>
              <p className="mt-3 text-base font-medium leading-7 text-white">
                <a href="tel:09398615727" itemProp="telephone" className="text-base font-medium leading-7 text-white hover:underline">
                  09398615727
                </a>
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-white/62">Email</p>
              <p className="mt-3 text-base font-medium leading-7 text-white">
                hello@prasadsdental.com
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-white/62">Hours</p>
              <p className="mt-3 text-base font-medium leading-7 text-white">
                10am &ndash; 8pm, Monday &ndash; Saturday
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name") || "";
            const phone = formData.get("phone") || "";
            const treatment = formData.get("treatment") || "";
            const message = formData.get("message") || "";
            const whatsappText = `Hi, I'm ${name}. I'm interested in ${treatment}. ${message}. My number: ${phone}`;
            window.open(`https://wa.me/919398615727?text=${encodeURIComponent(whatsappText)}`, "_blank");
          }}
          className="rounded-[2rem] border border-white/12 bg-white/10 p-6 backdrop-blur-md"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-white/88">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/12 bg-white/94 px-4 py-3 text-sm text-[var(--ink)] outline-none ring-0 placeholder:text-slate-400 focus:border-[var(--accent)]"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-white/88">
                Phone Number
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="+91"
                className="w-full rounded-2xl border border-white/12 bg-white/94 px-4 py-3 text-sm text-[var(--ink)] outline-none ring-0 placeholder:text-slate-400 focus:border-[var(--accent)]"
              />
            </label>
          </div>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-white/88">
              Preferred Treatment
            </span>
            <select name="treatment" className="w-full rounded-2xl border border-white/12 bg-white/94 px-4 py-3 text-sm text-[var(--ink)] outline-none focus:border-[var(--accent)]">
              <option>Smile Consultation</option>
              <option>Dental Implants</option>
              <option>Veneers</option>
              <option>Teeth Whitening</option>
              <option>Aligners / Braces</option>
              <option>Root Canal</option>
              <option>General Checkup</option>
              <option>Other</option>
            </select>
          </label>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-white/88">Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what you would like help with."
              className="w-full rounded-[1.5rem] border border-white/12 bg-white/94 px-4 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-slate-400 focus:border-[var(--accent)]"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[var(--cream)]"
          >
            Send Appointment Request
          </button>
        </form>
      </motion.div>
    </section>
  );
}
