"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const FloatingElements = dynamic(
  () => import("@/components/FloatingElements"),
  { ssr: false }
);

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingElements />
    </>
  );
}
