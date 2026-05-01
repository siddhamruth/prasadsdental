"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const DoctorReveal = dynamic(() => import("@/components/DoctorReveal"), { ssr: false });
const TrustBar = dynamic(() => import("@/components/TrustBar"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const StudioInvite = dynamic(() => import("@/components/StudioInvite"), { ssr: false });
const InstagramGrid = dynamic(() => import("@/components/InstagramGrid"), { ssr: false });
const CelebritySmiles = dynamic(() => import("@/components/CelebritySmiles"), { ssr: false });
const Awards = dynamic(() => import("@/components/Awards"), { ssr: false });
const MediaLogos = dynamic(() => import("@/components/MediaLogos"), { ssr: false });
const SmileCases = dynamic(() => import("@/components/SmileCases"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[var(--surface)] text-[var(--ink)]">
      <Hero />
      <DoctorReveal />
      <TrustBar />
      <Services />
      <Testimonials />
      <StudioInvite />
      <InstagramGrid />
      <CelebritySmiles />
      <Awards />
      <MediaLogos />
      <SmileCases />
      <FAQ />
      <Contact />
    </main>
  );
}
