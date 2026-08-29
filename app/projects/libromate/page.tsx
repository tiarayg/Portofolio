import CTA from "@/components/CTA";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDocumentation from "@/components/projects/ProjectDocumentation";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectStory from "@/components/projects/ProjectStory";

export default function LibromateProjectPage() {
  return (
    <main className="min-h-screen text-black">
      {/* HERO */}
      <ProjectDetailHero
        name="Libromate"
        logo="/libromate/logo-libromate.png"
        description="Libromate is a mobile library application designed to help students access library services and discover books through a simple, accessible, and user-friendly digital experience."
      />

      {/* MAIN PROJECT IMAGE */}
      <ProjectImage
        src="/libromate/libromate.png"
        alt="Libromate project"
      />

      {/* STORY */}
      <ProjectStory
        paragraphs={[
          "Libromate is a mobile library application developed to provide a more accessible and convenient digital library experience for students at Politeknik Negeri Semarang.",

          "The application is designed to help users explore and access library-related information through a mobile interface, making the experience more practical compared to traditional library services.",

          "The project focuses on creating a clean and user-friendly mobile experience while connecting the application with backend services through API integration.",

          "I worked on the development of the mobile application interface and several application features, including user-related functionality and profile management.",

          "The application was developed using Flutter for the mobile interface and Laravel for backend services and API integration, creating a connected system between the mobile application and its data services.",
        ]}
        services={[
          "Mobile Development",
          "Frontend Development",
          "API Integration",
          "User Interface Development",
          "State Management",
        ]}
        tools={[
          "Flutter",
          "Dart",
          "Laravel",
          "REST API",
          "MYSQL",
          "Git",
          "GitLab",
          "Figma",
        ]}
      />

      {/* DOCUMENTATION */}
      <ProjectDocumentation
        images={[
          {
            src: "/libromate/libromate2.png",
            alt: "Libromate documentation 01",
          },
          {
            src: "/libromate/libromate4.png",
            alt: "Libromate documentation 02",
          },
          {
            src: "/libromate/libromate3.png",
            alt: "Libromate documentation 03",
          },
          {
            src: "/libromate/libromate1.png",
            alt: "Libromate documentation 04",
          },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}