import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/story/AboutMe";
import Certificates from "@/components/story/Certificates";
import Experience from "@/components/story/Experience";
import StoryHero from "@/components/story/StoryHero";
import StoryOutro from "@/components/story/StoryOutro";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR FIXED */}
      <Navbar />

      {/* CONTENT */}
      <StoryHero />
      <AboutMe />
      <Experience />
      <Certificates />
      <StoryOutro />
      <CTA />
    </main>
  );
}