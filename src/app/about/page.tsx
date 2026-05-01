import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Prasad | Aesthetic Dentist in Guntur",
  description:
    "Meet Dr. Prasad, Guntur's trusted aesthetic dentist specializing in painless smile corrections, cosmetic dentistry, and advanced dental treatments at Pattabipuram.",
  alternates: { canonical: "https://prasadsdental.com/about" },
};

export default function AboutPage() {
  return (
    <main className="bg-[var(--surface)] text-[var(--ink)]">
      {/* Hero */}
      <section className="bg-[var(--ink)] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-soft)]">
            About the Clinic
          </p>
          <h1 className="mt-4 font-serif-display text-5xl tracking-[-0.04em] sm:text-6xl">
            Meet Dr. Prasad
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Your trusted aesthetic dentist in Guntur, specializing in painless
            smile corrections and cosmetic dental transformations.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif-display text-4xl tracking-[-0.04em] text-[var(--ink)]">
              Aesthetic Dentistry Expert in Pattabipuram, Guntur
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--ink-soft)]">
              Dr. Prasad founded Prasad&apos;s Dental Clinic with a clear vision: to make
              world-class aesthetic dentistry accessible in Guntur. With specialized
              training in cosmetic dentistry, implantology, endodontics, and orthodontics,
              Dr. Prasad has transformed over 1,200 smiles using painless, modern techniques.
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)]">
              Every treatment at our clinic prioritizes patient comfort. From painless root
              canals to smile makeovers completed in just 7 days, we combine precision with
              a gentle approach that puts even the most anxious patients at ease.
            </p>

            <h3 className="mt-10 text-xl font-semibold text-[var(--ink)]">
              Qualifications & Certifications
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["BDS", "Cosmetic Dentistry", "Implantology", "Endodontics", "Orthodontics", "Aesthetic Dentistry", "Laser Dentistry"].map((q) => (
                <span
                  key={q}
                  className="rounded-full bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]"
                >
                  {q}
                </span>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-semibold text-[var(--ink)]">
              Why Patients Choose Us
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "100% painless dental procedures using modern anesthesia techniques",
                "Smile corrections and makeovers completed in as little as 7 days",
                "Advanced aesthetic dentistry — veneers, whitening, aligners",
                "Family-friendly clinic with dedicated pediatric care",
                "Affordable pricing with transparent treatment plans",
                "Serving Guntur, Tenali, Mangalagiri, and surrounding areas",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[var(--ink-soft)]">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_20px_50px_rgba(63,47,31,0.08)]">
              <h3 className="text-xl font-semibold text-[var(--ink)]">Clinic at a Glance</h3>
              <div className="mt-6 space-y-4">
                {[
                  ["Established", "2023"],
                  ["Patients Treated", "1,200+"],
                  ["Google Rating", "4.7 / 5"],
                  ["Speciality", "Aesthetic & Painless Dentistry"],
                  ["Location", "Pattabipuram, Guntur"],
                  ["Phone", "09398615727"],
                  ["Hours", "10am – 8pm, Mon – Sat"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-[var(--line)] pb-3">
                    <span className="text-sm text-[var(--muted)]">{label}</span>
                    <span className="text-sm font-semibold text-[var(--ink)]">{value}</span>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className="mt-8 block rounded-full bg-[var(--accent)] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD for About page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Dr. Prasad",
            jobTitle: "Aesthetic Dentist & Founder",
            worksFor: {
              "@type": "Dentist",
              name: "Prasad's Dental Clinic",
            },
            medicalSpecialty: ["Cosmetic Dentistry", "Aesthetic Dentistry", "Painless Dentistry"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Stambalagaruvu, Pattabipuram",
              addressLocality: "Guntur",
              addressRegion: "Andhra Pradesh",
              postalCode: "522006",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </main>
  );
}
