import CTA from "@/components/CTA";
import AboutMe from "@/components/story/AboutMe";
import Experience from "@/components/story/Experience";
import StoryHero from "@/components/story/StoryHero";
import StoryOutro from "@/components/story/StoryOutro";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <StoryHero />
      <AboutMe />  
      <Experience />
      <StoryOutro />
      <CTA /> 
    </main>
  );
}