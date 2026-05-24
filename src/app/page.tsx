import Hero from "@/components/Hero";
import DoctorReveal from "@/components/DoctorReveal";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import SmileCases from "@/components/SmileCases";
import Testimonials from "@/components/Testimonials";
import StudioInvite from "@/components/StudioInvite";
import Awards from "@/components/Awards";
import InstagramGrid from "@/components/InstagramGrid";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[var(--surface)] text-[var(--ink)]">
      <Hero />
      <DoctorReveal />
      <TrustBar />
      <Services />
      <SmileCases />
      <Testimonials />
      <StudioInvite />
      <Awards />
      <InstagramGrid />
      <FAQ />
      <Contact />
    </main>
  );
}
