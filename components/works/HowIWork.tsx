"use client";

import { useState } from "react";

const process = [
  { number: "01", title: "Understand", shortTitle: "Start with why.", description: "Before writing a single line of code, I try to understand the problem, the people using it, and what the product actually needs to achieve.", detail: "Problem → Users → Goals" },
  { number: "02", title: "Shape", shortTitle: "Turn ideas into structure.", description: "I break the idea into clear sections, flows, and interfaces. Good structure makes both the design and the development process easier.", detail: "Flow → Structure → Interface" },
  { number: "03", title: "Build", shortTitle: "Make it real.", description: "I translate designs into responsive, reusable interfaces with clean code and attention to the small details that make an experience feel polished.", detail: "Code → Components → Interaction" },
  { number: "04", title: "Refine", shortTitle: "Make the details count.", description: "Once everything works, I look again. Spacing, responsiveness, interaction, performance, and those little things that make the final result feel right.", detail: "Test → Polish → Ship" },
];

export default function HowIWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full overflow-hidden">
      {/* MAIN CANVAS */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-black/[0.08]">

        {/* INTRO — TRANSPARENT / GLOBAL GRID VISIBLE */}
        <div className="flex min-h-[240px] flex-col justify-end border-y border-black/[0.12] px-[18px] pb-[34px] pt-[30px] sm:min-h-[270px] sm:px-[28px] sm:pb-[40px] sm:pt-[40px] md:min-h-[300px] md:px-[32px] md:pb-[46px] md:pt-[50px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-[900px] font-serif text-[42px] font-normal leading-[.98] tracking-[-2px] text-black sm:text-[52px] md:text-[60px]">
              From idea to interface,
              <br />
              <span className="text-black/35">without skipping the details.</span>
            </h2>

            <p className="max-w-[260px] text-[13px] leading-[1.6] text-black/45">
              Every project is different, but my approach stays simple:
              understand, shape, build, and refine.
            </p>
          </div>
        </div>

        {/* PROCESS */}
        <div className="bg-[#fafafa] px-[18px] py-[30px] sm:px-[28px] sm:py-[38px] md:px-[32px]">

          {/* DESKTOP */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-[10px] right-[10px] top-[15px] h-px bg-black/[0.16]" />

              <div className="grid grid-cols-4">
                {process.map((item, index) => (
                  <button key={item.number} type="button" onMouseEnter={() => setActiveStep(index)} onFocus={() => setActiveStep(index)} className="group relative text-left">

                    {/* DOT */}
                    <div className="relative z-10 flex h-[31px] items-center">
                      <span className={`block h-[11px] w-[11px] rounded-full border border-black bg-[#fafafa] transition-all duration-300 ${activeStep === index ? "scale-[1.55] bg-black" : "group-hover:scale-[1.4]"}`} />
                    </div>

                    {/* STEP */}
                    <div className="mt-[22px] pr-6">
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-[11px] tracking-[.08em] transition-colors ${activeStep === index ? "text-black" : "text-black/35"}`}>
                          {item.number}
                        </span>

                        <span className={`text-[17px] transition-all duration-300 ${activeStep === index ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>
                          ↗
                        </span>
                      </div>

                      <h3 className={`mt-3 font-serif text-[27px] leading-none tracking-[-1px] transition-all duration-300 ${activeStep === index ? "text-black" : "text-black/45"}`}>
                        {item.title}
                      </h3>

                      <p className={`mt-2 text-[13px] leading-[1.5] transition-all duration-300 ${activeStep === index ? "text-black/65" : "text-black/30"}`}>
                        {item.shortTitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="space-y-0 md:hidden">
            {process.map((item, index) => (
              <button key={item.number} type="button" onClick={() => setActiveStep(index)} className="flex w-full items-center gap-5 border-b border-black/[0.10] py-5 text-left">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-medium transition-all ${activeStep === index ? "border-black bg-black text-white" : "border-black/[0.15] text-black/40"}`}>
                  {item.number}
                </span>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-[24px] tracking-[-.8px]">{item.title}</h3>
                    <span className="text-[16px]">↗</span>
                  </div>

                  <p className="mt-1 text-[12px] text-black/40">{item.shortTitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE DETAIL */}
        <div className="border-t border-black/[0.12] bg-[#f7f7f7]">
          <div className="grid grid-cols-1 md:grid-cols-[150px_1fr_auto]">

            <div className="border-b border-black/[0.10] px-[18px] py-[18px] font-mono text-[11px] text-black/35 md:border-b-0 md:border-r md:px-[28px] md:py-[26px]">
              STEP {process[activeStep].number}
            </div>

            <div className="px-[18px] py-[22px] md:px-[28px] md:py-[26px]">
              <p key={process[activeStep].number} className="max-w-[650px] text-[14px] leading-[1.65] text-black/65">
                {process[activeStep].description}
              </p>
            </div>

            <div className="border-t border-black/[0.10] px-[18px] py-[18px] md:border-l md:border-t-0 md:px-[28px] md:py-[26px]">
              <span className="whitespace-nowrap rounded-full border border-black/[0.12] bg-white px-3 py-2 font-mono text-[10px] text-black/50">
                {process[activeStep].detail}
              </span>
            </div>

          </div>
        </div>

        <div className="border-y border-black/[0.12]" />
      </div>
    </section>
  );
}