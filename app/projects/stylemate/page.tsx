import CTA from "@/components/CTA";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDocumentation from "@/components/projects/ProjectDocumentation";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectStory from "@/components/projects/ProjectStory";

export default function StylemateProjectPage() {
  return (
    <main className="min-h-screen text-black">

      {/* HERO — TRANSPARENT */}
      <ProjectDetailHero
        name="Stylemate"
        logo="/stylemate/logo stylemate.jpeg"
        description="Stylemate is an AI-powered fashion assistant that helps users discover personalized outfit recommendations based on their preferences, style, and occasion."
      />

      {/* SEMUA BAGIAN BAWAH — BG FAF AFA */}
      <div className="bg-[#fafafa]">

        {/* MAIN PROJECT IMAGE */}
        <ProjectImage
          src="/stylemate/stylemate.png"
          alt="Stylemate project"
        />

        {/* STORY */}
        <ProjectStory
          paragraphs={[
            "Stylemate is a mobile application designed to help users discover outfit recommendations based on their personal preferences, style, and the purpose of the outfit.",

            "Users can upload or capture an image of their outfit, choose the occasion, and receive AI-generated recommendations that are tailored to their needs.",

            "The application combines AI-powered outfit generation with product recommendations, helping users discover similar fashion items and find products that match the generated outfit.",

            "I worked on the mobile interface, user flow, and API integration to create an experience that feels simple, responsive, and visually consistent across the application.",

            "The project also connects AI generation with product scraping and recommendation workflows, creating an end-to-end experience from outfit input to discovering relevant products.",
          ]}
          services={[
            "Mobile Development",
            "Frontend Development",
            "AI Integration",
            "API Integration",
            "Responsive Interface",
            "Product Recommendation",
            "Scraping Product from E-commerce Platforms",
          ]}
          tools={[
            "React Native",
            "Expo",
            "Tailwind CSS",
            "Laravel",
            "Node.js",
            "Firebase",
            "Figma",
            "Byteplus AI",
            "PostgreSQL",
            "Supabase",
          ]}
        />

        {/* DOCUMENTATION */}
        <ProjectDocumentation
          images={[
            {
              src: "/stylemate/stylemate3.png",
              alt: "Stylemate documentation 01",
            },
            {
              src: "/stylemate/stylemate1.png",
              alt: "Stylemate documentation 02",
            },
            {
              src: "/stylemate/stylemate2.png",
              alt: "Stylemate documentation 03",
            },
            {
              src: "/stylemate/stylemate4.png",
              alt: "Stylemate documentation 04",
            },
          ]}
        />

        {/* CTA */}
        <CTA />

      </div>
    </main>
  );
}