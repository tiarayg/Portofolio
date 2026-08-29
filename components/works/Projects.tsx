"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    slug: "stylemate",
    title: "Stylemate",
    image: "/stylemate/stylemate.png",
    tags: ["Stylemate", "Story", "Documentation"],
  },
  {
    id: 2,
    slug: "cafetarian",
    title: "Cafetarian POS",
    image: "/cafetarian/cafetarian.png",
    tags: ["Branding", "Platform design"],
  },
  {
    id: 3,
    slug: "dec-ai",
    title: "Decodes AI",
    image: "/dec-ai/dec-ai.png",
    tags: ["Decodes AI", "Story", "Documentation"],
  },

  {
    id: 4,
    slug: "hospital-intern",
    title: "Hospital Intern",
    image: "/hospital-intern/hospital.png",
    tags: ["Hospital Intern", "Story", "Documentation"],
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* CONTAINER */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-black/[0.08] bg-[#fafafa]">
        
        {/* TAGLINE */}
        <div className="border-y border-black/[0.12] bg-[#fafafa] px-[18px] py-[22px] sm:px-[28px] sm:py-[24px]">
          <p className="font-serif text-[18px] italic leading-[1.35] tracking-[-.3px] text-black/55 sm:text-[20px] md:text-[21px]">
            1+ year in frontend & mobile development. Building modern,
            performant interfaces with clean code and high visual fidelity.
          </p>
        </div>

        {/* PROJECT CONTENT */}
        <div className="bg-[#fafafa] px-[18px] py-[18px] sm:px-[28px] sm:py-[24px]">
          
          {/* FEATURED — STYLEMATE */}
          <ProjectCard project={projects[0]} featured />

          {/* SECONDARY — DECODES AI + PROJECT 3 */}
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>

          {/* VIEW ALL */}
          <div className="flex justify-center py-[38px]">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-black/[0.12] bg-[#f5f5f5] px-5 py-3 text-[14px] text-black shadow-[0_1px_3px_rgba(0,0,0,.08)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_5px_18px_rgba(0,0,0,.1)]"
            >
              <span>View all projects</span>

              <span className="text-[16px] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-[14px] border border-black/[0.1] bg-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,0,0,.08)]"
    >
      {/* IMAGE */}
      <div className="relative">
        <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-[#f3ecff]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={featured}
            sizes={
              featured
                ? "(max-width:768px) calc(100vw - 100px),1100px"
                : "(max-width:768px) calc(100vw - 90px),540px"
            }
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>

        {/* TAGS */}
        <div className="absolute left-[28px] top-[28px] flex flex-wrap gap-[6px]">
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
      <div className="flex items-center justify-between gap-4 bg-white px-4 py-4 sm:px-5 sm:py-[17px]">
        <div>
          <h3 className="font-serif text-[28px] font-normal leading-none tracking-[-1px] text-black sm:text-[30px]">
            {project.title}
          </h3>
        </div>

        {/* ARROW */}
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.1] bg-white text-[16px] text-black transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
          ↗
        </span>
      </div>
    </Link>
  );
}