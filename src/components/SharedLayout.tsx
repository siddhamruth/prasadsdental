"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

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
