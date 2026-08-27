"use client";

import Link from "next/link";

type ProjectDetailHeroProps = {
  name: string;
  description: string;
  logo?: string;
};

export default function ProjectDetailHero({
  name,
  description,
  logo,
}: ProjectDetailHeroProps) {
  return (
    // SECTION TRANSPARAN → GRID DARI LAYOUT TETAP TERLIHAT
    <section className="relative min-h-[530px] overflow-hidden text-black">
      
      {/* CANVAS / ISI HERO → PAKAI BG FAF AFA */}
      <div className="relative mx-auto w-[calc(100%-48px)] max-w-[1200px] border-x border-black/[0.08] bg-[#fafafa]">

        {/* NAVBAR */}
        <div className="flex h-[68px] items-center justify-between border-b border-black/[0.10] px-[18px] sm:px-[28px] md:px-[30px]">

          {/* BACK */}
          <Link
            href="/"
            className="group inline-flex items-center gap-[7px] rounded-full border border-black/[0.10] bg-white px-[14px] py-[8px] text-[14px] shadow-[0_2px_5px_rgba(0,0,0,.06)] transition-all hover:-translate-x-[1px] hover:shadow-[0_4px_10px_rgba(0,0,0,.10)]"
          >
            <span className="text-[12px] text-black/50 transition-transform group-hover:-translate-x-[2px]">
              ‹
            </span>

            <span>Back</span>
          </Link>

          {/* CHAT */}
          <Link
            href="mailto:your@email.com"
            className="group inline-flex items-center gap-[7px] rounded-full border border-black/[0.25] bg-[#171717] px-[16px] py-[8px] text-[14px] text-white shadow-[0_4px_12px_rgba(0,0,0,.3)] transition-all hover:-translate-y-[1px] hover:bg-black"
          >
            <span>Let&apos;s chat</span>

            <span className="text-[11px] text-white/60 transition-transform group-hover:translate-x-[2px]">
              →
            </span>
          </Link>
        </div>

        {/* HERO CONTENT */}
        <div className="flex min-h-[465px] flex-col justify-end border-b border-black/[0.10] px-[28px] pb-[34px] pt-[120px] sm:px-[38px] sm:pb-[42px] md:px-[30px] lg:px-[30px]">

          {/* PROJECT TITLE */}
          <div className="flex items-center gap-[18px] sm:gap-[22px]">

            {/* LOGO */}
            {logo ? (
              <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center overflow-hidden rounded-[13px] bg-black shadow-[0_5px_15px_rgba(0,0,0,.18)] sm:h-[70px] sm:w-[70px] sm:rounded-[14px]">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[13px] bg-black text-[24px] font-medium text-white shadow-[0_5px_15px_rgba(0,0,0,.18)] sm:h-[70px] sm:w-[70px]">
                {name.charAt(0)}
              </div>
            )}

            {/* NAME */}
            <h1 className="font-serif text-[58px] font-normal leading-none tracking-[-3px] sm:text-[72px] md:text-[82px] lg:text-[88px]">
              {name}
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-[30px] max-w-[820px] text-[15px] leading-[1.6] tracking-[-0.15px] text-black/85 sm:text-[16px] md:text-[17px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}