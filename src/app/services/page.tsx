import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Services in Guntur | Painless & Aesthetic Treatments",
  description:
    "Complete range of painless dental services in Guntur — smile corrections, dental implants, teeth whitening, veneers, root canals, aligners, and more at Prasad's Dental Clinic.",
  alternates: { canonical: "https://prasadsdental.com/services" },
};

const services = [
  { slug: "smile-makeover", title: "Smile Makeover", desc: "Complete smile transformation using veneers, whitening, and cosmetic bonding — typically completed in just 7 days.", icon: "01" },
  { slug: "painless-root-canal", title: "Painless Root Canal", desc: "Advanced pain-free root canal treatment that saves your natural tooth. Modern anesthesia ensures zero discomfort.", icon: "02" },
  { slug: "dental-implants", title: "Dental Implants", desc: "Permanent titanium implants to replace missing teeth. Natural-looking results with expert surgical precision.", icon: "03" },
  { slug: "teeth-whitening", title: "Instant Teeth Whitening", desc: "Professional in-office whitening that brightens your smile by several shades in a single painless session.", icon: "04" },
  { slug: "porcelain-veneers", title: "Porcelain Veneers", desc: "Ultra-thin porcelain shells that transform the shape, color, and alignment of your teeth for a perfect smile.", icon: "05" },
  { slug: "invisible-aligners", title: "Invisible Aligners", desc: "Clear, removable aligners that straighten teeth discreetly without metal braces. Comfortable and lifestyle-friendly.", icon: "06" },
  { slug: "dental-crowns", title: "Dental Crowns & Bridges", desc: "Custom-made crowns and bridges to restore damaged or missing teeth with natural-looking, durable results.", icon: "07" },
  { slug: "kids-dentistry", title: "Kids Dentistry", desc: "Gentle, child-friendly dental care building lifelong oral health habits in a fun, stress-free environment.", icon: "08" },
  { slug: "braces", title: "Braces (Clear)", desc: "Modern clear braces for effective teeth alignment with minimal visibility and maximum comfort.", icon: "09" },
  { slug: "teeth-cleaning", title: "Teeth Cleaning & Polishing", desc: "Professional deep cleaning to remove plaque, tartar, and stains for healthier gums and fresher breath.", icon: "10" },
  { slug: "laser-gum-treatment", title: "Laser Gum Treatment", desc: "Minimally invasive laser therapy for gum disease, reshaping, and cosmetic gum corrections.", icon: "11" },
  { slug: "wisdom-tooth-extraction", title: "Wisdom Tooth Extraction", desc: "Safe, painless removal of impacted wisdom teeth using modern surgical techniques.", icon: "12" },
  { slug: "cavity-fillings", title: "Cavity Fillings", desc: "Tooth-colored composite fillings that restore cavities seamlessly and preserve natural tooth structure.", icon: "13" },
  { slug: "tooth-bonding", title: "Tooth Bonding", desc: "Quick cosmetic fix for chips, cracks, gaps, and discoloration using tooth-colored bonding material.", icon: "14" },
  { slug: "dentures", title: "Dentures", desc: "Custom-fitted removable dentures for comfortable, natural-looking replacement of missing teeth.", icon: "15" },
  { slug: "sedation-dentistry", title: "Sedation Dentistry", desc: "Laughing gas sedation for anxiety-free dental experiences. Stay relaxed and comfortable throughout.", icon: "16" },
  { slug: "full-mouth-rehabilitation", title: "Full Mouth Rehabilitation", desc: "Comprehensive restoration of all teeth combining implants, crowns, veneers, and bite correction.", icon: "17" },
];

export default function ServicesPage() {
  return (
    <main className="bg-[var(--surface)] text-[var(--ink)]">
      <section className="bg-[var(--ink)] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-soft)]">
            Our Services
          </p>
          <h1 className="mt-4 font-serif-display text-5xl tracking-[-0.04em] sm:text-6xl">
            Painless & Aesthetic Dental Treatments
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            From smile makeovers to painless root canals — every treatment at
            Prasad&apos;s Dental Clinic is designed for comfort and beautiful results.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-[2rem] border border-[var(--line)] bg-white p-7 shadow-[0_15px_40px_rgba(63,47,31,0.06)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_20px_50px_rgba(18,113,111,0.1)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">
                {s.icon}
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {s.desc}
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)] transition group-hover:translate-x-1">
                Learn More &rarr;
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--ink)] px-6 py-16 text-center text-white lg:px-10">
        <h2 className="font-serif-display text-3xl tracking-[-0.04em] sm:text-4xl">
          Not sure which treatment you need?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/70">
          Book a free consultation with Dr. Prasad and get a personalized treatment plan.
        </p>
        <p className="mt-3 text-white/60">
          Or call us directly:{" "}
          <a href="tel:09398615727" className="font-bold text-white underline">
            09398615727
          </a>
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-dark)]"
        >
          Book Free Consultation
        </a>
      </section>
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
                name: "Dental Services",
                item: "https://prasadsdental.com/services",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
