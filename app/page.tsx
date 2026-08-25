import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <HowIWork />
      <CTA />
    </main>
  );
}