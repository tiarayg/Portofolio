"use client";

import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    slug: "stylemate",
    title: "Stylemate",
    image: "/stylemate/stylemate.png",
    tags: ["Mobile App", "AI", "Frontend"],
  },
  {
    id: 2,
    slug: "project-two",
    title: "Project Two",
    image: "/projects/project-2.jpg",
    tags: ["Coming Soon"],
  },
  {
    id: 3,
    slug: "dec-ai",
    title: "Decodes AI",
    image: "/dec-ai/dec-ai.png",
    tags: ["Web Development", "Frontend", "Design"],
  },
  {
    id: 4,
    slug: "hospital-intern",
    title: "Hospital Intern",
    image: "/hospital-intern/hospital.png",
    tags: ["Web Development", "Frontend", "Laravel"],
  },
  {
    id: 5,
    slug: "libromate",
    title: "Libromate",
    image: "/libromate/libromate.png",
    tags: ["Mobile App", "Flutter", "Laravel"],
  },
  {
    id: 6,
    slug: "serelio",
    title: "Serelio",
    image: "/serelio/serelio.png",
    tags: ["UI/UX Design", "Mobile App", "Mental Health"],
  },
];

export default function AllProjectsPage() {
  return (
    <main className="relative min-h-screen text-black">

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] border-x border-black/[0.08] bg-[#fafafa]">

        {/* NAVIGATION */}
        <div className="flex h-[68px] items-center border-b border-black/[0.10] px-[18px] sm:px-[28px] md:px-[30px]">
          <Link
            href="/"
            className="group inline-flex items-center gap-[7px] rounded-full border border-black/[0.10] bg-white px-[14px] py-[8px] text-[14px] shadow-[0_2px_5px_rgba(0,0,0,.06)] transition-all hover:-translate-x-[1px] hover:shadow-[0_4px_10px_rgba(0,0,0,.10)]"
          >
            <span className="text-[12px] text-black/50 transition-transform group-hover:-translate-x-[2px]">
              ‹
            </span>

            <span>Back</span>
          </Link>
        </div>

        {/* HEADER */}
        <section className="border-b border-black/[0.12] px-[18px] py-[50px] sm:px-[28px] sm:py-[70px]">
          <p className="text-[13px] uppercase tracking-[0.15em] text-black/45">
            Selected work
          </p>

          <h1 className="mt-4 font-serif text-[56px] leading-none tracking-[-2.5px] sm:text-[72px] md:text-[88px]">
            All Projects
          </h1>

          <p className="mt-6 max-w-[600px] text-[15px] leading-[1.6] text-black/65 sm:text-[16px]">
            A collection of projects I&apos;ve worked on across frontend
            development, mobile applications, web development, UI/UX design,
            and AI-powered experiences.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="px-[18px] py-[18px] sm:px-[28px] sm:py-[24px]">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTA />

      </div>
    </main>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-[14px] border border-black/[0.1] bg-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,.08)]"
    >
      {/* IMAGE */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#f3f3f3]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:768px) calc(100vw - 90px),540px"
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />

        {/* TAGS */}
        <div className="absolute left-[18px] top-[18px] flex flex-wrap gap-[6px]">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={`rounded-full px-[10px] py-[5px] text-[11px] leading-none ${
                index === 0
                  ? "bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,.15)]"
                  : "bg-black/75 text-white backdrop-blur-sm"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-[17px]">
        <div>
          <h2 className="font-serif text-[28px] font-normal leading-none tracking-[-1px] text-black sm:text-[30px]">
            {project.title}
          </h2>
        </div>

        {/* ARROW */}
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.1] bg-white text-[16px] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
          ↗
        </span>
      </div>
    </Link>
  );
}