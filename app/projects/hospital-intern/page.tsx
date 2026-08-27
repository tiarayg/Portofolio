import CTA from "@/components/CTA";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDocumentation from "@/components/projects/ProjectDocumentation";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectStory from "@/components/projects/ProjectStory";

export default function HospitalInternProjectPage() {
  return (
    <main className="min-h-screen text-black">
      {/* HERO */}
      <ProjectDetailHero
        name="Hospital Intern"
        description="Hospital Intern is a web-based information system designed to support the management and monitoring of student internships and practical programs in hospitals."
      />

      {/* MAIN PROJECT IMAGE */}
      <ProjectImage
        src="/hospital-intern/hospital.png"
        alt="Hospital Intern project"
      />

      {/* PROJECT STORY */}
      <ProjectStory
        paragraphs={[
          "Hospital Intern is a Project Based Learning project developed as part of my academic experience. The project focuses on creating a web-based information system to support the management of students undertaking practical programs or internships at hospitals.",

          "The system is designed to help manage internship-related information in a more structured and efficient way, including student data and other administrative processes related to practical activities in hospitals.",

          "Through this project, I worked on developing the web interface and implementing system features using Laravel. The goal was to create an application that is easy to use while supporting the needs of administrators and users involved in the internship management process.",

          "One of the implemented features includes managing and organizing internship data, along with data export functionality to make administrative processes and reporting more efficient.",

          "This project gave me experience working on a larger academic system and helped me understand how to translate real-world administrative workflows into a structured web application.",
        ]}
        services={[
          "Web Development",
          "Frontend Development",
          "Backend Development",
          "Database Management",
          "Information System Development",
          "Data Management",
          "Excel Export",
        ]}
        tools={[
          "Laravel",
          "PHP",
          "Laravel Blade",
          "MySQL",
          "HTML",
          "CSS",
          "Bootstrap",
          "JavaScript",
          "Maatwebsite Excel",
          "Figma",
        ]}
      />

      {/* DOCUMENTATION */}
      <ProjectDocumentation
        images={[
          {
            src: "/hospital-intern/hospital2.png",
            alt: "Hospital Intern documentation 01",
          },
          {
            src: "/hospital-intern/hospital1.png",
            alt: "Hospital Intern documentation 02",
          },
          {
            src: "/hospital-intern/hospital3.png",
            alt: "Hospital Intern documentation 03",
          },
          {
            src: "/hospital-intern/hospital4.png",
            alt: "Hospital Intern documentation 04",
          },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}