import CTA from "@/components/CTA";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDocumentation from "@/components/projects/ProjectDocumentation";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectStory from "@/components/projects/ProjectStory";

export default function SerelioProjectPage() {
  return (
    <main className="min-h-screen text-black">
      {/* HERO */}
      <ProjectDetailHero
        name="Serelio"
        description="Serelio is a mental health-focused digital experience designed to provide a more approachable, supportive, and user-centered space for individuals to better understand and manage their emotional well-being."
      />

      {/* MAIN PROJECT IMAGE */}
      <ProjectImage
        src="/serelio/serelio.png"
        alt="Serelio UI/UX project"
      />

      {/* STORY */}
      <ProjectStory
        paragraphs={[
          "Serelio is a UI/UX design project focused on creating a digital experience around mental health and emotional well-being.",

          "The project explores how thoughtful interface design can create a more comfortable and approachable experience for users when interacting with mental health-related information and services.",

          "The design process focused on creating clear user flows, intuitive navigation, and a visual experience that feels calm, supportive, and easy to understand.",

          "Through research, user flow development, wireframing, and interface design, the project was designed with usability and accessibility in mind to create a more user-centered experience.",

          "My role in this project focused on the UI/UX design process, including structuring the user journey, designing interfaces, and creating a consistent visual system across the application.",
        ]}
        services={[
          "UI/UX Design",
          "User Flow",
          "Wireframing",
          "Interface Design",
          "Visual Design",
        ]}
        tools={[
          "Figma",
          "FigJam",
          "UI Design",
          "UX Research",
          "Wireframing",
          "Prototyping",
        ]}
      />

      {/* DOCUMENTATION */}
      <ProjectDocumentation
        images={[
          {
            src: "/serelio/serelio2.png",
            alt: "Serelio documentation 01",
          },
          {
            src: "/serelio/serelio1.png",
            alt: "Serelio documentation 02",
          },
          {
            src: "/serelio/serelio3.png",
            alt: "Serelio documentation 03",
          },
          {
            src: "/serelio/serelio4.png",
            alt: "Serelio documentation 04",
          },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}