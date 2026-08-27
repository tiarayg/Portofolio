import CTA from "@/components/CTA";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDocumentation from "@/components/projects/ProjectDocumentation";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectStory from "@/components/projects/ProjectStory";

export default function DecAiProjectPage() {
  return (
    <main className="min-h-screen text-black">

      {/* HERO */}
      <ProjectDetailHero
        name="Decodes AI"
        description="Decodes AI is a technology company focused on building AI-powered digital solutions. During my internship, I worked on the frontend development and rebranding of the company’s landing page."
      />

      {/* MAIN PROJECT IMAGE */}
      <ProjectImage
        src="/dec-ai/dec-ai.png"
        alt="Decodes AI project"
      />

      {/* STORY */}
      <ProjectStory
        paragraphs={[
          "During my internship at Decodes AI, I worked as a Frontend Developer and contributed to the development and rebranding of the company's landing page.",

          "My main responsibility was translating the provided UI design into a functional and responsive website using modern frontend technologies. I focused on creating layouts that closely matched the original design while maintaining clean and reusable code.",

          "I implemented various sections of the landing page and ensured that the interface could adapt properly across different screen sizes, including desktop, tablet, and mobile devices.",

          "The project involved working with Next.js and Tailwind CSS to build a modern and maintainable frontend. Through this experience, I improved my understanding of component-based development, responsive design, and transforming visual designs into production-ready interfaces.",

          "This internship also gave me valuable experience working on a real-world product and collaborating within a development environment to deliver a consistent and polished user experience.",
        ]}
        services={[
          "Frontend Development",
          "Web Development",
          "Landing Page Development",
          "Website Rebranding",
          "Responsive Design",
          "UI Implementation",
        ]}
        tools={[
          "Next.js",
          "React",
          "Tailwind CSS",
          "JavaScript",
          "Git",
          "GitHub",
          "Figma",
        ]}
      />

      {/* DOCUMENTATION */}
      <ProjectDocumentation
        images={[
          {
            src: "/dec-ai/dec-ai4.png",
            alt: "Decodes AI documentation 01",
          },
          {
            src: "/dec-ai/dec-ai1.png",
            alt: "Decodes AI documentation 02",
          },
          {
            src: "/dec-ai/dec-ai2.png",
            alt: "Decodes AI documentation 03",
          },
          {
            src: "/dec-ai/dec-ai3.png",
            alt: "Decodes AI documentation 04",
          },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}