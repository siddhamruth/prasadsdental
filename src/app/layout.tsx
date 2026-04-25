import type { Metadata } from "next";
import { Cormorant_Garamond, Questrial } from "next/font/google";
import "./globals.css";

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
  title: "Prasad's Dental Clinic | Cosmetic & General Dentistry in Guntur",
  description:
    "Prasad's Dental Clinic in Pattabipuram, Guntur offers expert cosmetic, general and restorative dental treatments — from teeth whitening and veneers to painless root canals and dental implants. Book your confident smile makeover today!",
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
  ],
  authors: [{ name: "Dr. Prasad" }],
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
  themeColor: "#12716f",
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
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
