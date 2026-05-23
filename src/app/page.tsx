import Hero from "@/components/Hero";
import DoctorReveal from "@/components/DoctorReveal";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import StudioInvite from "@/components/StudioInvite";
import InstagramGrid from "@/components/InstagramGrid";
import CelebritySmiles from "@/components/CelebritySmiles";
import Awards from "@/components/Awards";
import MediaLogos from "@/components/MediaLogos";
import SmileCases from "@/components/SmileCases";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

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
