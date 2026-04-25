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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${questrial.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
