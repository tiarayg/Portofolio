"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleEmailClick = () => {
    window.location.href =
      "mailto:tiarapratiwi889@gmail.com?subject=New%20Project%20Inquiry";
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* MAIN CANVAS */}
      <div className="relative z-10 mx-auto min-h-screen w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-black/[0.08]">

        {/* YELLOW HALF CIRCLE */}
        <div
          className="pointer-events-none absolute left-1/2 top-[-450px] h-[850px] w-[1350px] -translate-x-1/2 rounded-full"
          style={{
            background: `radial-gradient(ellipse at center, rgba(255,225,20,.98) 0%, rgba(255,230,30,.94) 16%, rgba(255,237,65,.84) 31%, rgba(255,243,105,.67) 47%, rgba(255,247,155,.44) 62%, rgba(255,251,205,.22) 76%, rgba(255,255,255,0) 92%)`,
          }}
        >
          {/* YELLOW GRAIN */}
          <div
            className="absolute inset-0 rounded-full opacity-[0.62]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(150,105,0,.36) .65px, transparent .8px), radial-gradient(circle, rgba(180,125,0,.24) .55px, transparent .8px)`,
              backgroundPosition: "0 0, 8px 11px",
              backgroundSize: "39px 43px, 31px 35px",
              maskImage:
                "radial-gradient(ellipse at center, black 0%, black 50%, transparent 86%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 0%, black 50%, transparent 86%)",
            }}
          />
        </div>

        {/* NAVBAR */}
        <header className="relative z-30 flex h-[62px] items-center justify-between border-b border-black/[0.08] bg-[#fafafa] px-[18px]">

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
            className="text-[25px] font-normal tracking-[-0.9px] text-black"
          >
            Tiara
          </motion.button>

          {/* WORKS / STORY */}
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
            className="flex items-center rounded-full border border-black/[0.13] bg-[#f5f5f5] p-[2px] shadow-[0_1px_3px_rgba(0,0,0,.08)]"
          >

            {/* WORKS ACTIVE */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex h-[34px] items-center gap-[6px] rounded-full bg-[#151515] px-[12px] text-[14px] text-white shadow-[0_2px_7px_rgba(0,0,0,.25)]"
            >
              {/* SUN */}
              <span className="relative flex h-[15px] w-[15px] items-center justify-center">
                <span className="absolute h-[7px] w-[7px] rounded-full border-[1.5px] border-current" />
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
              onClick={() => router.push("/story")}
              className="flex h-[34px] items-center gap-[6px] rounded-full px-[12px] text-[14px] text-black/40 transition-all duration-200 hover:text-black/70"
            >
              {/* MOON */}
              <span className="relative block h-[14px] w-[14px] overflow-hidden rounded-full bg-black/35">
                <span className="absolute -right-[3px] -top-[3px] h-[12px] w-[12px] rounded-full bg-[#f5f5f5]" />
              </span>

              <span>Story</span>
            </button>
          </motion.div>
        </header>

        {/* HERO CONTENT */}
        <main className="relative z-20 flex min-h-[calc(100vh-62px)] flex-col justify-end px-[18px] pb-[50px] sm:pb-[58px] md:pb-[66px] lg:pb-[72px]">

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
            className="max-w-[930px] translate-y-[22px] sm:translate-y-[26px] md:translate-y-[30px] lg:translate-y-[35px]"
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
              className="font-serif text-[40px] font-normal leading-[1.01] tracking-[-1.9px] text-black sm:text-[47px] md:text-[54px] lg:text-[60px] xl:text-[64px]"
              style={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
              }}
            >
              Hey! I&apos;m Tiara - Bridging the gap
              <br className="hidden sm:block" />
              between thoughtful design and clean,
              interactive code.
            </motion.h1>

            {/* CTA */}
            <motion.button
              type="button"
              onClick={handleEmailClick}
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
              className="group mt-[27px] flex h-[47px] items-center gap-[10px] rounded-full border border-black/[0.09] bg-[#f5f5f5] px-[18px] text-[15px] text-black shadow-[0_1px_2px_rgba(0,0,0,.07),0_5px_15px_rgba(0,0,0,.05)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-white hover:shadow-[0_4px_14px_rgba(0,0,0,.11)]"
            >
              <span>Let&apos;s chat about a new project</span>

              <span className="flex h-[18px] w-[18px] items-center justify-center transition-transform duration-200 group-hover:translate-x-[2px]">
                <span className="ml-[2px] h-0 w-0 border-b-[5px] border-l-[7px] border-t-[5px] border-b-transparent border-l-black border-t-transparent" />
              </span>
            </motion.button>

          </motion.div>
        </main>

        {/* CANVAS BORDERS */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-black/[0.08]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-black/[0.08]" />
      </div>
    </section>
  );
}