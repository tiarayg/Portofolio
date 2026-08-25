"use client";

import { useState } from "react";

const process = [
  {
    number: "01",
    title: "Understand",
    shortTitle: "Start with why.",
    description:
      "Before writing a single line of code, I try to understand the problem, the people using it, and what the product actually needs to achieve.",
    detail: "Problem → Users → Goals",
  },
  {
    number: "02",
    title: "Shape",
    shortTitle: "Turn ideas into structure.",
    description:
      "I break the idea into clear sections, flows, and interfaces. Good structure makes both the design and the development process easier.",
    detail: "Flow → Structure → Interface",
  },
  {
    number: "03",
    title: "Build",
    shortTitle: "Make it real.",
    description:
      "I translate designs into responsive, reusable interfaces with clean code and attention to the small details that make an experience feel polished.",
    detail: "Code → Components → Interaction",
  },
  {
    number: "04",
    title: "Refine",
    shortTitle: "Make the details count.",
    description:
      "Once everything works, I look again. Spacing, responsiveness, interaction, performance, and those little things that make the final result feel right.",
    detail: "Test → Polish → Ship",
  },
];

export default function HowIWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa]">
      {/* =====================================================
          GRID BACKGROUND
          Sama dengan Hero / Projects / Skills
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
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
          MAIN PANEL
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
          bg-white
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}
        <div
          className="
            border-y-2
            border-black
            bg-white
            px-[18px]
            py-[18px]
            sm:px-[28px]
            sm:py-[20px]
            md:px-[32px]
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span
                className="
                  font-mono
                  text-[11px]
                  tracking-[0.08em]
                  text-black/40
                "
              >
                05
              </span>

              <span
                className="
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.06em]
                  text-black
                "
              >
                How I Work
              </span>
            </div>

            <span className="hidden text-[12px] text-black/35 sm:block">
              My process
            </span>
          </div>
        </div>

        {/* ===================================================
            INTRO
        ==================================================== */}
        <div
          className="
            border-b
            border-black/[0.12]
            bg-white
            px-[18px]
            py-[34px]
            sm:px-[28px]
            sm:py-[42px]
            md:px-[32px]
            md:py-[48px]
          "
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2
              className="
                max-w-[760px]
                font-serif
                text-[42px]
                font-normal
                leading-[0.98]
                tracking-[-2px]
                text-black
                sm:text-[52px]
                md:text-[60px]
              "
            >
              From idea to interface,
              <br />
              <span className="text-black/35">
                without skipping the details.
              </span>
            </h2>

            <p
              className="
                max-w-[260px]
                text-[13px]
                leading-[1.6]
                text-black/45
              "
            >
              Every project is different, but my approach stays simple:
              understand, shape, build, and refine.
            </p>
          </div>
        </div>

        {/* ===================================================
            PROCESS TIMELINE
        ==================================================== */}
        <div className="bg-white px-[18px] py-[30px] sm:px-[28px] sm:py-[38px] md:px-[32px]">
          {/* DESKTOP TIMELINE */}
          <div className="hidden md:block">
            <div className="relative">
              {/* horizontal line */}
              <div className="absolute left-[10px] right-[10px] top-[15px] h-px bg-black/[0.16]" />

              <div className="grid grid-cols-4">
                {process.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    className="group relative text-left"
                  >
                    {/* DOT */}
                    <div className="relative z-10 flex h-[31px] items-center">
                      <span
                        className={`
                          block
                          h-[11px]
                          w-[11px]
                          rounded-full
                          border
                          border-black
                          bg-white
                          transition-all
                          duration-300
                          ${
                            activeStep === index
                              ? "scale-[1.55] bg-black"
                              : "group-hover:scale-[1.4]"
                          }
                        `}
                      />
                    </div>

                    {/* STEP */}
                    <div className="mt-[22px] pr-6">
                      <div className="flex items-center justify-between">
                        <span
                          className={`
                            font-mono
                            text-[11px]
                            tracking-[0.08em]
                            transition-colors
                            ${
                              activeStep === index
                                ? "text-black"
                                : "text-black/35"
                            }
                          `}
                        >
                          {item.number}
                        </span>

                        <span
                          className={`
                            text-[17px]
                            transition-all
                            duration-300
                            ${
                              activeStep === index
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-2 opacity-0"
                            }
                          `}
                        >
                          ↗
                        </span>
                      </div>

                      <h3
                        className={`
                          mt-3
                          font-serif
                          text-[27px]
                          leading-none
                          tracking-[-1px]
                          transition-all
                          duration-300
                          ${
                            activeStep === index
                              ? "text-black"
                              : "text-black/45"
                          }
                        `}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`
                          mt-2
                          text-[13px]
                          leading-[1.5]
                          transition-all
                          duration-300
                          ${
                            activeStep === index
                              ? "text-black/65"
                              : "text-black/30"
                          }
                        `}
                      >
                        {item.shortTitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE STEPS
          ================================================== */}
          <div className="space-y-0 md:hidden">
            {process.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className="
                  flex
                  w-full
                  items-center
                  gap-5
                  border-b
                  border-black/[0.10]
                  py-5
                  text-left
                "
              >
                {/* NUMBER */}
                <span
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-[10px]
                    font-medium
                    transition-all
                    ${
                      activeStep === index
                        ? "border-black bg-black text-white"
                        : "border-black/[0.15] text-black/40"
                    }
                  `}
                >
                  {item.number}
                </span>

                {/* TEXT */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3
                      className="
                        font-serif
                        text-[24px]
                        tracking-[-0.8px]
                      "
                    >
                      {item.title}
                    </h3>

                    <span className="text-[16px]">↗</span>
                  </div>

                  <p className="mt-1 text-[12px] text-black/40">
                    {item.shortTitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ===================================================
            ACTIVE DETAIL
        ==================================================== */}
        <div
          className="
            border-t
            border-black/[0.12]
            bg-[#f7f7f7]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[150px_1fr_auto]
            "
          >
            {/* NUMBER */}
            <div
              className="
                border-b
                border-black/[0.10]
                px-[18px]
                py-[18px]
                font-mono
                text-[11px]
                text-black/35
                md:border-b-0
                md:border-r
                md:px-[28px]
                md:py-[26px]
              "
            >
              STEP {process[activeStep].number}
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                px-[18px]
                py-[22px]
                md:px-[28px]
                md:py-[26px]
              "
            >
              <p
                key={process[activeStep].number}
                className="
                  max-w-[650px]
                  text-[14px]
                  leading-[1.65]
                  text-black/65
                "
              >
                {process[activeStep].description}
              </p>
            </div>

            {/* FORMULA */}
            <div
              className="
                border-t
                border-black/[0.10]
                px-[18px]
                py-[18px]
                md:border-l
                md:border-t-0
                md:px-[28px]
                md:py-[26px]
              "
            >
              <span
                className="
                  whitespace-nowrap
                  rounded-full
                  border
                  border-black/[0.12]
                  bg-white
                  px-3
                  py-2
                  font-mono
                  text-[10px]
                  text-black/50
                "
              >
                {process[activeStep].detail}
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            CLOSING STATEMENT
        ==================================================== */}
        <div
          className="
            border-t
            border-black/[0.12]
            bg-white
            px-[18px]
            py-[26px]
            sm:px-[28px]
            sm:py-[30px]
            md:px-[32px]
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="
                font-serif
                text-[18px]
                italic
                tracking-[-0.3px]
                text-black/45
              "
            >
              Good work is rarely about adding more.
            </p>

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.08em]
                text-black/30
              "
            >
              Understand → Shape → Build → Refine
            </span>
          </div>
        </div>

        {/* ===================================================
            BOTTOM LINE
        ==================================================== */}
        <div className="border-b-2 border-black" />
      </div>
    </section>
  );
}