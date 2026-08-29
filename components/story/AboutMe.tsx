"use client";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* DARK GRID */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.055) 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      />

      {/* MAIN CANVAS */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-white/[0.12]">
        {/* TOP BORDER */}
        <div className="border-t border-white/[0.16]" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* =================================================
              LEFT — STORY
          ================================================== */}
          <div className="border-b border-white/[0.16] px-[28px] py-[42px] sm:px-[38px] sm:py-[50px] md:border-b-0 md:border-r md:px-[30px] lg:px-[40px]">
            {/* LABEL */}
            <h2 className="font-serif text-[22px] italic tracking-[-0.5px] text-white/55">
              How I got here
            </h2>

            {/* STORY */}
            <div className="mt-[40px] max-w-[650px] space-y-[26px]">
              <p className="text-[15px] leading-[1.65] tracking-[-0.2px] text-white/85 sm:text-[16px]">
                Hi, I&apos;m{" "}
                <span className="text-white">Tiara Yoga</span> a young
                developer who enjoys turning ideas into digital experiences.
                I&apos;ve always been curious about how something that starts
                as a simple idea can eventually become a website or application
                that people can actually use.
              </p>

              <p className="text-[15px] leading-[1.65] tracking-[-0.2px] text-white/85 sm:text-[16px]">
                That curiosity gradually led me into the world of frontend and
                mobile development. I enjoy the process of taking an idea and
                turning it into something realbuilding interfaces, creating
                interactions, and making sure everything works smoothly across
                different devices.
              </p>

              <p className="text-[15px] leading-[1.65] tracking-[-0.2px] text-white/85 sm:text-[16px]">
                Most of my journey has been focused on building web and mobile
                applications. I enjoy working with modern frontend technologies
                and exploring how different components can come together to
                create an experience that feels simple, responsive, and useful.
              </p>

              <p className="text-[15px] leading-[1.65] tracking-[-0.2px] text-white/85 sm:text-[16px]">
                I&apos;m someone who enjoys learning through building. Every
                project gives me the opportunity to explore something new,
                improve my technical skills, and better understand how a digital
                product comes together from the first idea to the final result.
              </p>

              <p className="text-[15px] leading-[1.65] tracking-[-0.2px] text-white/85 sm:text-[16px]">
                I&apos;m still growing, still learning, and still figuring out
                new things every day. But that&apos;s also what I enjoy most
                about this journey, there is always something new to explore,
                build, and improve. With every project, I hope to keep becoming
                a better developer while creating digital experiences that
                people can genuinely enjoy using.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT — POLAROID
          ================================================== */}
          <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden border-b border-white/[0.16] px-[30px] py-[55px] md:min-h-[560px] md:border-b-0">
            <PolaroidStack />
          </div>
        </div>

        {/* BOTTOM BORDER */}
        <div className="border-b border-white/[0.16]" />
      </div>
    </section>
  );
}

/* =========================================================
   POLAROID STACK
========================================================= */

function PolaroidStack() {
  return (
    <div className="relative h-[330px] w-[280px] sm:h-[360px] sm:w-[305px]">
      {/* BACK POLAROID */}
      <div className="absolute left-[12px] top-[4px] h-[300px] w-[250px] rotate-[-7deg] bg-[#f4f4f1] shadow-[0_12px_35px_rgba(0,0,0,.35)] sm:left-[15px] sm:h-[330px] sm:w-[275px]" />

      {/* MIDDLE POLAROID */}
      <div className="absolute left-[22px] top-[12px] h-[300px] w-[250px] rotate-[5deg] bg-[#f7f7f4] shadow-[0_12px_35px_rgba(0,0,0,.35)] sm:left-[28px] sm:h-[330px] sm:w-[275px]" />

      {/* MAIN POLAROID */}
      <div className="absolute left-1/2 top-[15px] h-[305px] w-[250px] -translate-x-1/2 rotate-[-2deg] bg-[#fafaf7] p-[10px] pb-[18px] shadow-[0_18px_45px_rgba(0,0,0,.45)] sm:top-[12px] sm:h-[335px] sm:w-[275px] sm:p-[11px] sm:pb-[20px]">
        {/* IMAGE */}
        <div className="h-[225px] w-full overflow-hidden bg-[#ddd] sm:h-[250px]">
          <img
            src="/foto2.jpeg"
            alt="Tiara Yoga"
            className="h-full w-full object-cover"
          />
        </div>

        {/* CAPTION */}
        <div className="flex h-[52px] items-end justify-center">
          <p className="font-serif text-[20px] italic tracking-[-0.5px] text-black sm:text-[22px]">
            A little piece of me ♡
          </p>
        </div>
      </div>
    </div>
  );
}