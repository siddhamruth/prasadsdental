import type { Metadata } from "next";
import { Cormorant_Garamond, Questrial } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const FloatingElements = dynamic(() => import("@/components/FloatingElements"), { ssr: false });

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prasadsdental.com"),
  title: "Prasad's Dental Clinic | Painless Smile Corrections in Guntur",
  description:
    "Guntur's trusted aesthetic dental clinic specializing in painless smile corrections, cosmetic dentistry, dental implants, and teeth whitening. Led by Dr. Prasad in Pattabipuram. Call 09398615727.",
  keywords: [
    "dental clinic guntur",
    "dentist in pattabipuram",
    "cosmetic dentistry guntur",
    "teeth whitening guntur",
    "dental implants guntur",
    "root canal treatment guntur",
    "smile makeover andhra pradesh",
    "prasad dental clinic",
    "best dentist guntur",
    "veneers guntur",
    "braces guntur",
    "invisible aligners guntur",
    "painless root canal guntur",
    "porcelain veneers guntur",
    "full mouth rehabilitation guntur",
    "pediatric dentist guntur",
    "orthodontist guntur",
    "sedation dentistry guntur",
    "dental crowns guntur",
    "teeth cleaning guntur",
    "wisdom tooth extraction guntur",
    "smile design guntur",
    "dental clinic pattabipuram",
    "best cosmetic dentist andhra pradesh",
    "affordable dental treatment guntur",
    "laser gum treatment guntur",
    "dental bonding guntur",
    "dr prasad dentist guntur",
  ],
  category: "health",
  authors: [{ name: "Dr. Prasad" }],
  creator: "Dr. Prasad",
  publisher: "Prasad's Dental Clinic",
  openGraph: {
    title: "Prasad's Dental Clinic | Cosmetic & General Dentistry in Guntur",
    description:
      "Expert cosmetic, general and restorative dental treatments in Pattabipuram, Guntur. Book your smile makeover today!",
    url: "https://prasadsdental.com",
    siteName: "Prasad's Dental Clinic",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasad's Dental Clinic | Cosmetic & General Dentistry in Guntur",
    description:
      "Expert cosmetic, general and restorative dental treatments in Pattabipuram, Guntur.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://prasadsdental.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#12716f" },
    { media: "(prefers-color-scheme: dark)", color: "#0d5a58" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${questrial.variable} ${cormorant.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Prasad's Dental Clinic",
              image: "https://prasadsdental.com/images/hero/hero-bg.jpg",
              telephone: "+919398615727",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Stambalagaruvu, Pattabipuram",
                addressLocality: "Guntur",
                addressRegion: "Andhra Pradesh",
                postalCode: "522006",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 16.3122809,
                longitude: 80.4146927,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "10:00",
                closes: "20:00",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                bestRating: "5",
                ratingCount: "16",
              },
              priceRange: "$$",
              url: "https://prasadsdental.com",
              medicalSpecialty: [
                "Cosmetic Dentistry",
                "General Dentistry",
                "Restorative Dentistry",
                "Pediatric Dentistry",
                "Orthodontics",
                "Endodontics",
                "Prosthodontics",
                "Oral Surgery",
              ],
              availableService: [
                { "@type": "MedicalProcedure", name: "Dental Implants" },
                { "@type": "MedicalProcedure", name: "Porcelain Veneers" },
                { "@type": "MedicalProcedure", name: "Teeth Whitening" },
                { "@type": "MedicalProcedure", name: "Root Canal Treatment" },
                { "@type": "MedicalProcedure", name: "Invisible Aligners" },
                { "@type": "MedicalProcedure", name: "Dental Crowns and Bridges" },
                { "@type": "MedicalProcedure", name: "Full Mouth Rehabilitation" },
                { "@type": "MedicalProcedure", name: "Sedation Dentistry" },
              ],
              founder: {
                "@type": "Dentist",
                name: "Dr. Prasad",
                jobTitle: "Founder & Lead Dentist",
                medicalSpecialty: "Cosmetic Dentistry",
              },
              sameAs: [],
              hasMap: "https://maps.app.goo.gl/GijnR1f72jUdCEM8A",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What's the best toothbrush and toothpaste for healthy teeth and gums?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For most people, a medium-bristled toothbrush and a fluoride toothpaste work best to protect enamel and prevent gum problems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is instant teeth whitening safe and how does it work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — when done by a dental professional, instant teeth whitening is both safe and effective. We use advanced systems that gently break down stains in just one session.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can a smile makeover really be done in just 7 days?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Thanks to modern techniques like veneers, crowns, bonding, and digital smile design, we can transform your smile in as little as a week.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does a smile makeover cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The cost depends on your needs — from whitening and veneers to full corrections. We create a personalised plan that balances your goals, time, and budget.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why choose Prasad's Dental Clinic in Guntur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Prasad's Dental Clinic in Pattabipuram, Guntur is led by Dr. Prasad, known for advanced cosmetic dentistry and natural-looking results with modern technology and personalised care.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Prasad's Dental Clinic",
              url: "https://prasadsdental.com",
              publisher: {
                "@type": "Organization",
                name: "Prasad's Dental Clinic",
                logo: {
                  "@type": "ImageObject",
                  url: "https://prasadsdental.com/images/logo/logo.svg",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://prasadsdental.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingElements />
      </body>
    </html>
  );
}
