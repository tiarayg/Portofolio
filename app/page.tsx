import CTA from "@/components/CTA";
import Hero from "@/components/works/Hero";
import HowIWork from "@/components/works/HowIWork";
import Projects from "@/components/works/Projects";
import Services from "@/components/works/Services";
import Skills from "@/components/works/Skills";

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