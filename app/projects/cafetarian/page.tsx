import CTA from "@/components/CTA";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDocumentation from "@/components/projects/ProjectDocumentation";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectStory from "@/components/projects/ProjectStory";

export default function CafetarianProjectPage() {
  return (
    <main className="min-h-screen text-black">

      {/* HERO */}
      <ProjectDetailHero
        name="Cafetarian POS"
        description="Cafetarian POS is a cafe management and point-of-sale system designed to streamline ordering, payments, and daily sales management in one integrated platform."
      />

      {/* MAIN PROJECT IMAGE */}
      <ProjectImage
        src="/cafetarian/cafetarian.png"
        alt="Cafetarian POS project"
      />

      {/* STORY */}
      <ProjectStory
        paragraphs={[
          "Cafetarian POS is a cafe management system designed to simplify the ordering and payment process for both customers and cafe staff.",

          "Customers can place their orders directly from their table and complete payments using digital methods such as QRIS. The system also supports manual payments that can be processed directly by cafe staff.",

          "For cafe employees, Cafetarian POS provides a dashboard to manage incoming orders and monitor the current order status. This helps staff organize orders more efficiently and provide a smoother service experience for customers.",

          "The system also includes payment management features, allowing staff to handle manual transactions and keep track of completed payments within the same platform.",

          "In addition, Cafetarian POS provides daily sales information to help cafe owners and staff monitor business performance. The system brings together ordering, payment processing, and sales monitoring into one centralized cafe management solution.",
        ]}
        services={[
          "POS System Development",
          "Web Development",
          "Frontend Development",
          "Cafe Management System",
          "Payment Integration",
          "Responsive Interface",

        ]}
        tools={[
          "Vue.js",
          "Tailwind CSS",
          "Git",
          "GitHub",
        ]}
      />

      {/* DOCUMENTATION */}
      <ProjectDocumentation
        images={[
          {
            src: "/cafetarian/placeholder.png",
            alt: "Cafetarian POS documentation 01",
          },
          {
            src: "/cafetarian/placeholder.png",
            alt: "Cafetarian POS documentation 02",
          },
          {
            src: "/cafetarian/placeholder.png",
            alt: "Cafetarian POS documentation 03",
          },
          {
            src: "/cafetarian/placeholder.png",
            alt: "Cafetarian POS documentation 04",
          },
        ]}
      />

      {/* CTA */}
      <CTA />
    </main>
  );
}