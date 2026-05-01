import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Prasad's Dental Clinic Guntur",
  description:
    "Book your appointment at Prasad's Dental Clinic in Pattabipuram, Guntur. Call 09398615727 for painless dental treatments, smile corrections, and aesthetic dentistry.",
  alternates: { canonical: "https://prasadsdental.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--surface)] text-[var(--ink)]">
      <section className="bg-[var(--ink)] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-soft)]">
            Get In Touch
          </p>
          <h1 className="mt-4 font-serif-display text-5xl tracking-[-0.04em] sm:text-6xl">
            Book Your Appointment
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Ready for a painless smile transformation? Contact Prasad&apos;s Dental
            Clinic in Pattabipuram, Guntur.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif-display text-3xl tracking-[-0.04em] text-[var(--ink)]">
              Visit Our Clinic
            </h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Address</p>
                <p className="mt-2 text-[var(--ink-soft)]" itemProp="address">
                  Stambalagaruvu, Pattabipuram, Guntur-522006, Andhra Pradesh
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Phone / WhatsApp</p>
                <a href="tel:09398615727" className="mt-2 block text-xl font-semibold text-[var(--ink)] hover:text-[var(--accent)]">
                  09398615727
                </a>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Hours</p>
                <p className="mt-2 text-[var(--ink-soft)]">10:00 AM – 8:00 PM</p>
                <p className="text-sm text-[var(--muted)]">Monday – Saturday (Closed on Sundays)</p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Find Us</p>
                <a
                  href="https://maps.app.goo.gl/GijnR1f72jUdCEM8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
                >
                  Open in Google Maps
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </a>
              </div>
            </div>

            {/* Nearby areas for local SEO */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[var(--ink)]">We Serve Patients From</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Guntur", "Pattabipuram", "Tenali", "Mangalagiri", "Vijayawada", "Narasaraopet", "Sattenapalli", "Piduguralla", "Macherla", "Bapatla"].map((area) => (
                  <span key={area} className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-sm text-[var(--ink-soft)]">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_20px_50px_rgba(63,47,31,0.08)]">
            <h2 className="font-serif-display text-3xl tracking-[-0.04em] text-[var(--ink)]">
              Send Us a Message
            </h2>
            <form className="mt-8 space-y-4">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--ink)]">Full Name</span>
                <input type="text" placeholder="Your name" className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--ink)]">Phone Number</span>
                <input type="tel" placeholder="+91" className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--ink)]">Treatment Interested In</span>
                <select className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]">
                  <option>Smile Correction / Makeover</option>
                  <option>Painless Root Canal</option>
                  <option>Dental Implants</option>
                  <option>Teeth Whitening</option>
                  <option>Veneers</option>
                  <option>Invisible Aligners / Braces</option>
                  <option>Kids Dentistry</option>
                  <option>General Checkup</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--ink)]">Message</span>
                <textarea rows={4} placeholder="Tell us about your dental concern..." className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]" />
              </label>
              <a
                href="https://wa.me/919398615727?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Prasad's%20Dental%20Clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full rounded-full bg-[var(--accent)] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
              >
                Book via WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Prasad's Dental Clinic",
            telephone: "+919398615727",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Stambalagaruvu, Pattabipuram",
              addressLocality: "Guntur",
              addressRegion: "Andhra Pradesh",
              postalCode: "522006",
              addressCountry: "IN",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:00",
              closes: "20:00",
            },
            hasMap: "https://maps.app.goo.gl/GijnR1f72jUdCEM8A",
            areaServed: ["Guntur", "Tenali", "Mangalagiri", "Vijayawada", "Narasaraopet", "Pattabipuram"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://prasadsdental.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: "https://prasadsdental.com/contact",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
