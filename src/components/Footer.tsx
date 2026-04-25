import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo.svg"
                alt="Prasad's Dental Clinic"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div>
                <p className="font-serif-display text-xl text-[var(--ink)]">
                  Prasad&apos;s Dental
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Pattabipuram, Guntur
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Premium cosmetic, general and restorative dental care in Guntur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--ink)]">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {[
                { label: "Home", href: "#top" },
                { label: "About Dr. Prasad", href: "#doctor" },
                { label: "Services", href: "#services" },
                { label: "Results", href: "#results" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--ink)]">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <a href="tel:09398615727" className="transition hover:text-[var(--accent)]">09398615727</a>
              <a href="mailto:hello@prasadsdental.com" className="transition hover:text-[var(--accent)]">hello@prasadsdental.com</a>
              <p>10am – 8pm, Mon – Sat</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--ink)]">
              Follow Us
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { name: "Instagram", href: "#" },
                { name: "Facebook", href: "#" },
                { name: "LinkedIn", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-xs font-bold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--line)] pt-6 text-center text-sm text-[var(--muted)]">
          <p>&copy; {new Date().getFullYear()} Prasad&apos;s Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
