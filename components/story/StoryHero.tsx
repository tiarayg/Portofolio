"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function StoryHero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* DARK GRID */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.055) 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      />

      {/* TOP PURPLE GLOW */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-450px] h-[850px] w-[1350px] -translate-x-1/2 rounded-full"
        style={{
          background: `radial-gradient(ellipse at center, rgba(125,122,158,.72) 0%, rgba(89,87,116,.52) 22%, rgba(55,54,74,.34) 42%, rgba(25,25,34,.18) 62%, rgba(0,0,0,0) 88%)`,
        }}
      />

      {/* SOFT GLOW */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-100px] h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-[25px]"
        style={{
          background: `radial-gradient(ellipse at center, rgba(150,147,185,.16), transparent 70%)`,
        }}
      />

      {/* MAIN CANVAS */}
      <div className="relative z-10 mx-auto min-h-screen w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-white/[0.10]">

        {/* NAVBAR */}
        <header className="relative z-30 flex h-[62px] items-center justify-between border-b border-white/[0.10] bg-black px-[18px]">

          {/* NAME */}
          <motion.button
            type="button"
            onClick={() => router.push("/")}
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="text-[25px] font-normal tracking-[-0.9px] text-white"
          >
            Tiara
          </motion.button>

          {/* SWITCH */}
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex items-center rounded-full border border-white/[0.15] bg-white/[0.06] p-[2px] shadow-[0_1px_5px_rgba(0,0,0,.4)]"
          >
            {/* WORKS */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex h-[34px] items-center gap-[6px] rounded-full px-[12px] text-[14px] text-white/40 transition-all duration-200 hover:text-white"
            >
              {/* SUN */}
              <span className="relative flex h-[15px] w-[15px] items-center justify-center">
                <span className="absolute h-[7px] w-[7px] rounded-full border-[1.5px] border-current" />
                <span className="absolute left-1/2 top-[-1px] h-[3px] w-[1.5px] -translate-x-1/2 bg-current" />
                <span className="absolute bottom-[-1px] left-1/2 h-[3px] w-[1.5px] -translate-x-1/2 bg-current" />
                <span className="absolute left-[-1px] top-1/2 h-[1.5px] w-[3px] -translate-y-1/2 bg-current" />
                <span className="absolute right-[-1px] top-1/2 h-[1.5px] w-[3px] -translate-y-1/2 bg-current" />
                <span className="absolute left-[1px] top-[1px] h-[2px] w-[1px] rotate-[-45deg] bg-current" />
                <span className="absolute right-[1px] top-[1px] h-[2px] w-[1px] rotate-[45deg] bg-current" />
                <span className="absolute bottom-[1px] left-[1px] h-[2px] w-[1px] rotate-[45deg] bg-current" />
                <span className="absolute bottom-[1px] right-[1px] h-[2px] w-[1px] rotate-[-45deg] bg-current" />
              </span>

              <span>Works</span>
            </button>

            {/* STORY ACTIVE */}
            <button
              type="button"
              onClick={() => router.push("/story")}
              className="flex h-[34px] items-center gap-[6px] rounded-full bg-white px-[12px] text-[14px] text-black shadow-[0_2px_8px_rgba(255,255,255,.2)]"
            >
              {/* MOON */}
              <span className="relative block h-[14px] w-[14px] overflow-hidden rounded-full bg-black">
                <span className="absolute -right-[3px] -top-[3px] h-[12px] w-[12px] rounded-full bg-white" />
              </span>

              <span>Story</span>
            </button>
          </motion.div>
        </header>

        {/* HERO CONTENT */}
        <main className="relative z-20 flex min-h-[calc(100vh-62px)] flex-col justify-end px-[18px] pb-[55px] sm:pb-[65px] md:pb-[75px] lg:pb-[85px]">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              amount: 0.3,
              once: false,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="max-w-[1100px] translate-y-[15px] sm:translate-y-[20px] md:translate-y-[25px]"
          >

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
                once: false,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="font-serif text-[42px] font-normal leading-[.98] tracking-[-2px] text-white sm:text-[52px] md:text-[62px] lg:text-[68px]"
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", Times, serif',
              }}
            >
              I enjoy turning ideas into
              <br />
              clean, intuitive and functional
              <br />
              digital experiences
            </motion.h1>

            {/* CTA */}
            <motion.button
              type="button"
              onClick={() =>
                (window.location.href =
                  "mailto:tiarapratiwi889@gmail.com?subject=New%20Project%20Inquiry")
              }
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                amount: 0.3,
                once: false,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-[30px] flex h-[47px] items-center gap-[10px] rounded-full border border-black/[0.15] bg-[#f5f5f5] px-[18px] text-[15px] text-black shadow-[0_1px_2px_rgba(0,0,0,.25),0_5px_15px_rgba(0,0,0,.15)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_4px_14px_rgba(0,0,0,.25)]"
            >
              <span>Start a project with me</span>

              <span className="flex h-[18px] w-[18px] items-center justify-center transition-transform duration-200 group-hover:translate-x-[2px]">
                <span className="ml-[2px] h-0 w-0 border-b-[5px] border-l-[7px] border-t-[5px] border-b-transparent border-l-black border-t-transparent" />
              </span>
            </motion.button>

          </motion.div>
        </main>

        {/* CANVAS BORDERS */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-white/[0.10]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-white/[0.10]" />
      </div>
    </section>
  );
}