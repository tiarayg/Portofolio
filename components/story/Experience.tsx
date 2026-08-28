"use client";

import Link from "next/link";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Decodes Media",
    period: "Feb 2026 – Apr 2026",
    type: "Part-time",
    icon: "D",
  },
  {
    role: "Frontend Developer Intern",
    company: "Decodes Media",
    period: "Aug 2025 – Dec 2025",
    type: "Internship",
    icon: "D",
  },
];

const education = [
  {
    degree: "D3 Informatics Engineering",
    school: "Politeknik Negeri Semarang",
    period: "2023 – 2026",
    icon: "🎓",
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right,rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.055) 1px,transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      />

      {/* CANVAS */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] border-x border-white/[0.12]">
        <div className="grid grid-cols-1 md:grid-cols-[1.65fr_1fr]">

          {/* ==================================================
              LEFT COLUMN
          ================================================== */}
          <div className="border-b border-white/[0.14] md:border-b-0 md:border-r">

            {/* ================= WORK EXPERIENCE ============== */}
            <div className="border-b border-white/[0.14]">
              <div className="px-[28px] pb-[18px] pt-[30px] sm:px-[34px]">
                <h2 className="font-serif text-[21px] italic text-white/55">
                  Work experiences
                </h2>
              </div>

              <div>
                {experiences.map((item) => (
                  <ExperienceItem key={`${item.company}-${item.period}`} {...item} />
                ))}
              </div>
            </div>

            {/* ================= EDUCATION ==================== */}
            <div>
              <div className="px-[28px] pb-[18px] pt-[30px] sm:px-[34px]">
                <h2 className="font-serif text-[21px] italic text-white/55">
                  Education
                </h2>
              </div>

              <div>
                {education.map((item) => (
                  <EducationItem key={item.school} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================
              RIGHT COLUMN
          ================================================== */}
          <div className="flex flex-col justify-center px-[28px] py-[45px] sm:px-[38px] md:px-[30px] lg:px-[38px]">
            <div className="max-w-[430px]">

              {/* TITLE */}
              <h2 className="font-serif text-[22px] italic text-white/55">
                Where I stand
              </h2>

              {/* TEXT */}
              <div className="mt-[38px] space-y-[26px]">
                <p className="text-[15px] leading-[1.55] text-white/85 sm:text-[16px]">
                  I&apos;m a frontend developer with experience building
                  responsive websites and digital interfaces using modern web
                  technologies.
                </p>

                <p className="text-[15px] leading-[1.55] text-white/85 sm:text-[16px]">
                  I enjoy turning designs and ideas into functional products,
                  while continuing to explore both frontend and mobile
                  development through real projects and new challenges.
                </p>
              </div>

              {/* DOWNLOAD CV */}
                <a
                  href="/cv/TiaraYogaPratiwi-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-[32px] inline-flex items-center gap-[10px] rounded-full border border-white/[0.15] bg-[#f5f5f5] px-[17px] py-[10px] text-[14px] text-black shadow-[0_3px_12px_rgba(255,255,255,.18)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-white"
                >
                  <span className="flex h-[20px] w-[20px] items-center justify-center rounded-[5px] bg-black/10 text-[11px]">
                    ↓
                  </span>

                  <span>Download my CV</span>

                  <span className="text-[12px] transition-transform group-hover:translate-y-[1px]">
                    ↓
                  </span>
                </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="border-b border-white/[0.14]" />
      </div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE ITEM
============================================================ */

function ExperienceItem({
  role,
  company,
  period,
  type,
  icon,
}: {
  role: string;
  company: string;
  period: string;
  type: string;
  icon: string;
}) {
  return (
    <div className="group grid grid-cols-[58px_1fr_auto] items-center border-t border-white/[0.10] px-[28px] py-[17px] transition-colors hover:bg-white/[0.025] sm:px-[34px]">
      {/* ICON */}
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.08] text-[16px] font-medium text-white/75 shadow-[0_3px_12px_rgba(0,0,0,.3)]">
        {icon}
      </div>

      {/* INFO */}
      <div className="min-w-0">
        <p className="truncate text-[14px] font-medium text-white sm:text-[15px]">
          {role}
        </p>

        <p className="mt-[3px] truncate text-[13px] text-white/40">
          {company}
        </p>
      </div>

      {/* PERIOD */}
      <div className="ml-4 text-right">
        <p className="whitespace-nowrap text-[16px] text-white/70 sm:text-[13px]">
          {period}
        </p>

        <p className="mt-[3px] text-[16px] text-white/50">
          {type}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   EDUCATION ITEM
============================================================ */

function EducationItem({
  degree,
  school,
  period,
  icon,
}: {
  degree: string;
  school: string;
  period: string;
  icon: string;
}) {
  return (
    <div className="group grid grid-cols-[58px_1fr_auto] items-center border-t border-white/[0.10] px-[28px] py-[17px] transition-colors hover:bg-white/[0.025] sm:px-[34px]">
      {/* ICON */}
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.08] text-[18px] shadow-[0_3px_12px_rgba(0,0,0,.3)]">
        {icon}
      </div>

      {/* INFO */}
      <div className="min-w-0">
        <p className="truncate text-[14px] font-medium text-white sm:text-[15px]">
          {degree}
        </p>

        <p className="mt-[3px] truncate text-[13px] text-white/40">
          {school}
        </p>
      </div>

      {/* PERIOD */}
      <p className="ml-4 whitespace-nowrap text-[12px] text-white/40 sm:text-[13px]">
        {period}
      </p>
    </div>
  );
}