"use client";

import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"works" | "story">("works");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* =====================================================
          GLOBAL GRID
          Grid memenuhi seluruh viewport
      ====================================================== */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.055) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "12px 12px",
        }}
      />

      {/* =====================================================
          MAIN CANVAS
          
          max-width dibuat seperti screenshot.
          Pada layar besar akan muncul margin kiri-kanan
          yang cukup lebar.
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          min-h-screen
          w-[calc(100%-48px)]
          max-w-[1200px]
          overflow-hidden
          border-x
          border-black/[0.08]
        "
      >
        {/* =================================================
            YELLOW HALF CIRCLE / GRADIENT
        ================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-450px]
            h-[850px]
            w-[1350px]
            -translate-x-1/2
            rounded-full
          "
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                rgba(255, 225, 20, 0.98) 0%,
                rgba(255, 230, 30, 0.94) 16%,
                rgba(255, 237, 65, 0.84) 31%,
                rgba(255, 243, 105, 0.67) 47%,
                rgba(255, 247, 155, 0.44) 62%,
                rgba(255, 251, 205, 0.22) 76%,
                rgba(255, 255, 255, 0) 92%
              )
            `,
          }}
        >
          {/* ==============================================
              YELLOW GRAIN / DOTS
          =============================================== */}
          <div
            className="absolute inset-0 rounded-full opacity-[0.62]"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle,
                  rgba(150, 105, 0, 0.36) 0.65px,
                  transparent 0.8px
                ),
                radial-gradient(
                  circle,
                  rgba(180, 125, 0, 0.24) 0.55px,
                  transparent 0.8px
                )
              `,
              backgroundPosition: "0 0, 8px 11px",
              backgroundSize: "39px 43px, 31px 35px",
              maskImage:
                "radial-gradient(ellipse at center, black 0%, black 50%, transparent 86%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 0%, black 50%, transparent 86%)",
            }}
          />
        </div>

        {/* =================================================
            NAVBAR
            PUTIH POLOS - GRID TIDAK TERLIHAT DI SINI
        ================================================== */}
        <header
          className="
            relative
            z-30
            flex
            h-[62px]
            items-center
            justify-between
            border-b
            border-black/[0.08]
            bg-[#fafafa]
            px-[18px]
          "
        >
          {/* ==============================================
              NAME
          =============================================== */}
          <div
            className="
              text-[25px]
              font-normal
              tracking-[-0.9px]
              text-black
            "
          >
            Tiara
          </div>

          {/* ==============================================
              WORKS / STORY SWITCH
          =============================================== */}
          <div
            className="
              flex
              items-center
              rounded-full
              border
              border-black/[0.13]
              bg-[#f5f5f5]
              p-[2px]
              shadow-[0_1px_3px_rgba(0,0,0,0.08)]
            "
          >
            {/* WORKS */}
            <button
              type="button"
              onClick={() => setActiveTab("works")}
              className={`
                flex
                h-[34px]
                items-center
                gap-[6px]
                rounded-full
                px-[12px]
                text-[14px]
                transition-all
                duration-200
                ${
                  activeTab === "works"
                    ? "bg-[#151515] text-white shadow-[0_2px_7px_rgba(0,0,0,0.25)]"
                    : "text-black/40 hover:text-black/70"
                }
              `}
            >
              {/* SUN ICON */}
              <span className="relative flex h-[15px] w-[15px] items-center justify-center">
                <span
                  className="
                    absolute
                    h-[7px]
                    w-[7px]
                    rounded-full
                    border-[1.5px]
                    border-current
                  "
                />

                <span className="absolute left-1/2 top-[-1px] h-[3px] w-[1.5px] -translate-x-1/2 rounded-full bg-current" />

                <span className="absolute bottom-[-1px] left-1/2 h-[3px] w-[1.5px] -translate-x-1/2 rounded-full bg-current" />

                <span className="absolute left-[-1px] top-1/2 h-[1.5px] w-[3px] -translate-y-1/2 rounded-full bg-current" />

                <span className="absolute right-[-1px] top-1/2 h-[1.5px] w-[3px] -translate-y-1/2 rounded-full bg-current" />

                <span className="absolute left-[1px] top-[1px] h-[2px] w-[1px] rotate-[-45deg] bg-current" />

                <span className="absolute right-[1px] top-[1px] h-[2px] w-[1px] rotate-[45deg] bg-current" />

                <span className="absolute bottom-[1px] left-[1px] h-[2px] w-[1px] rotate-[45deg] bg-current" />

                <span className="absolute bottom-[1px] right-[1px] h-[2px] w-[1px] rotate-[-45deg] bg-current" />
              </span>

              <span>Works</span>
            </button>

            {/* STORY */}
            <button
              type="button"
              onClick={() => setActiveTab("story")}
              className={`
                flex
                h-[34px]
                items-center
                gap-[6px]
                rounded-full
                px-[12px]
                text-[14px]
                transition-all
                duration-200
                ${
                  activeTab === "story"
                    ? "bg-[#151515] text-white shadow-[0_2px_7px_rgba(0,0,0,0.25)]"
                    : "text-black/40 hover:text-black/70"
                }
              `}
            >
              {/* MOON ICON */}
              <span
                className={`
                  relative
                  block
                  h-[14px]
                  w-[14px]
                  overflow-hidden
                  rounded-full
                  ${
                    activeTab === "story"
                      ? "bg-white"
                      : "bg-black/35"
                  }
                `}
              >
                <span className="absolute -right-[3px] -top-[3px] h-[12px] w-[12px] rounded-full bg-[#f5f5f5]" />
              </span>

              <span>Story</span>
            </button>
          </div>
        </header>

        {/* =================================================
            HERO CONTENT
        ================================================== */}
        <main
          className="
            relative
            z-20
            flex
            min-h-[calc(100vh-62px)]
            flex-col
            justify-end
            px-[18px]
            pb-[50px]
            sm:pb-[58px]
            md:pb-[66px]
            lg:pb-[72px]
          "
        >
          <div
            className="
              max-w-[930px]
              translate-y-[22px]
              sm:translate-y-[26px]
              md:translate-y-[30px]
              lg:translate-y-[35px]
            "
          >
            {/* ==========================================
                HERO TITLE
            =========================================== */}
            <h1
              className="
                font-serif
                text-[40px]
                font-normal
                leading-[1.01]
                tracking-[-1.9px]
                text-black
                sm:text-[47px]
                md:text-[54px]
                lg:text-[60px]
                xl:text-[62px]
              "
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", Times, serif',
              }}
            >
              Hey! I&apos;m Tiara, a designer
              <br className="hidden sm:block" />
              who brings trusted clarity into
              <br className="hidden sm:block" />
              your web and brand experiences
            </h1>

            {/* ==========================================
                CTA BUTTON
            =========================================== */}
            <button
              type="button"
              className="
                group
                mt-[27px]
                flex
                h-[47px]
                items-center
                gap-[10px]
                rounded-full
                border
                border-black/[0.09]
                bg-[#f5f5f5]
                px-[18px]
                text-[15px]
                font-normal
                text-black
                shadow-[0_1px_2px_rgba(0,0,0,0.07),0_5px_15px_rgba(0,0,0,0.05)]
                transition-all
                duration-200
                hover:-translate-y-[1px]
                hover:bg-white
                hover:shadow-[0_4px_14px_rgba(0,0,0,0.11)]
              "
            >
              <span>Let&apos;s chat about new project</span>

              {/* ARROW */}
              <span
                className="
                  flex
                  h-[18px]
                  w-[18px]
                  items-center
                  justify-center
                  transition-transform
                  duration-200
                  group-hover:translate-x-[2px]
                "
              >
                <span
                  className="
                    ml-[2px]
                    h-0
                    w-0
                    border-b-[5px]
                    border-l-[7px]
                    border-t-[5px]
                    border-b-transparent
                    border-l-black
                    border-t-transparent
                  "
                />
              </span>
            </button>
          </div>
        </main>

        {/* =================================================
            CANVAS SIDE BORDERS
        ================================================== */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-black/[0.08]" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-black/[0.08]" />
      </div>
    </section>
  );
}