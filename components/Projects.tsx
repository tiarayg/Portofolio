"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Project One",
    image: "/projects/project-1.jpg",
    tags: ["Clerk", "Web design", "Marketing"],
  },
  {
    id: 2,
    title: "Project Two",
    image: "/projects/project-2.jpg",
    tags: ["Branding", "Platform design"],
  },
  {
    id: 3,
    title: "Project Three",
    image: "/projects/project-3.jpg",
    tags: ["Branding", "Web design", "Development"],
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fafafa]">
      {/* =====================================================
          GLOBAL GRID
          Sama dengan Hero
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)]
          bg-[size:12px_12px]
        "
      />

      {/* =====================================================
          PROJECTS CONTAINER

          SELURUH AREA INI PUTIH.
          Grid hanya terlihat di luar container.
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-[calc(100%-48px)]
          max-w-[1200px]
          overflow-hidden
          border-x
          border-black/[0.08]
          bg-[#fafafa]
        "
      >
        {/* ===================================================
            TAGLINE SECTION

            Garis atas dan bawah full kiri-kanan.
        ==================================================== */}
        <div
          className="
            border-y
            border-black/[0.12]
            bg-[#fafafa]
            px-[18px]
            py-[22px]
            sm:px-[28px]
            sm:py-[24px]
          "
        >
          <p
            className="
              font-serif
              text-[18px]
              italic
              leading-[1.35]
              tracking-[-0.3px]
              text-black/55
              sm:text-[20px]
              md:text-[21px]
            "
          >
            6+ years designing for tech founders. Seed to Series C, across
            fintech, dev tools, and Web3.
          </p>
        </div>

        {/* ===================================================
            PROJECT CONTENT

            Area ini PUTIH.
            Card berada di dalam area putih ini.
        ==================================================== */}
        <div
          className="
            
            px-[18px]
            py-[18px]
            sm:px-[28px]
            sm:py-[24px]
          "
        >
          {/* =================================================
              FEATURED PROJECT
          ================================================== */}
          <ProjectCard project={projects[0]} featured />

          {/* =================================================
              TWO SECONDARY PROJECTS
          ================================================== */}
          <div
            className="
              mt-3
              grid
              grid-cols-1
              gap-3
              md:grid-cols-2
            "
          >
            <ProjectCard project={projects[1]} />

            <ProjectCard project={projects[2]} />
          </div>

          {/* =================================================
              VIEW ALL PROJECTS
          ================================================== */}
          <div className="flex justify-center py-[38px]">
            <Link
              href="/projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-black/[0.12]
                bg-[#f5f5f5]
                px-5
                py-3
                text-[14px]
                text-black
                shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                transition-all
                duration-200
                hover:-translate-y-[1px]
                hover:bg-white
                hover:shadow-[0_5px_18px_rgba(0,0,0,0.10)]
              "
            >
              <span>View all projects</span>

              <span
                className="
                  text-[16px]
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ===================================================
            BOTTOM SECTION LINE
        ==================================================== */}
        <div className="border-t-2 border-black" />
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
      href={`/projects/${project.id}`}
      className="
        group
        block
        overflow-hidden
        rounded-[14px]
        border
        border-black/[0.10]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-[2px]
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* ===================================================
          PROJECT IMAGE
      ==================================================== */}
      <div
        className={`
          relative
          overflow-hidden
          bg-white
          ${
            featured
              ? "h-[340px] sm:h-[390px] lg:h-[410px]"
              : "h-[270px] sm:h-[300px] lg:h-[320px]"
          }
        `}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={featured}
          sizes={
            featured
              ? "(max-width: 768px) calc(100vw - 84px), 1140px"
              : "(max-width: 768px) calc(100vw - 84px), 560px"
          }
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
        />

        {/* =================================================
            PROJECT TAGS
        ================================================== */}
        <div
          className="
            absolute
            left-3
            top-3
            flex
            flex-wrap
            gap-[6px]
          "
        >
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={`
                rounded-full
                px-[10px]
                py-[5px]
                text-[11px]
                leading-none
                ${
                  index === 0
                    ? "bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
                    : "bg-black/75 text-white backdrop-blur-sm"
                }
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ===================================================
          CARD FOOTER
      ==================================================== */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          bg-white
          px-4
          py-4
          sm:px-5
          sm:py-[17px]
        "
      >
        <div>
          <h3
            className="
              text-[17px]
              font-medium
              tracking-[-0.4px]
              text-black
              sm:text-[18px]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1
              text-[12px]
              text-black/40
            "
          >
            View project
          </p>
        </div>

        {/* ARROW */}
        <span
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-black/[0.10]
            bg-white
            text-[16px]
            text-black
            transition-all
            duration-200
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:bg-black
            group-hover:text-white
          "
        >
          ↗
        </span>
      </div>
    </Link>
  );
}