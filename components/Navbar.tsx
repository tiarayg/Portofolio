"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isStory = pathname === "/story";

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full">
      <div
        className={`mx-auto w-[calc(100%-48px)] max-w-[1200px] border-x ${
          isStory
            ? "border-white/[0.08] bg-black"
            : "border-black/[0.08] bg-[#fafafa]"
        }`}
      >
        <div
          className={`flex h-[62px] items-center justify-between border-b px-[18px] ${
            isStory
              ? "border-white/[0.08]"
              : "border-black/[0.08]"
          }`}
        >
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
            className={`text-[25px] font-normal tracking-[-0.9px] ${
              isStory ? "text-white" : "text-black"
            }`}
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
            className={`flex items-center rounded-full border p-[2px] ${
              isStory
                ? "border-white/[0.13] bg-white/[0.06]"
                : "border-black/[0.13] bg-[#f5f5f5]"
            }`}
          >
            {/* WORKS */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className={`flex h-[34px] items-center gap-[6px] rounded-full px-[12px] text-[14px] transition-all duration-200 ${
                !isStory
                  ? "bg-[#151515] text-white shadow-[0_2px_7px_rgba(0,0,0,.25)]"
                  : "text-white/40 hover:text-white/70"
              }`}
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
              className={`flex h-[34px] items-center gap-[6px] rounded-full px-[12px] text-[14px] transition-all duration-200 ${
                isStory
                  ? "bg-white text-black shadow-[0_2px_7px_rgba(0,0,0,.25)]"
                  : "text-black/40 hover:text-black/70"
              }`}
            >
              {/* MOON */}
              <span
                className={`relative block h-[14px] w-[14px] overflow-hidden rounded-full ${
                  isStory ? "bg-black/70" : "bg-black/35"
                }`}
              >
                <span
                  className={`absolute -right-[3px] -top-[3px] h-[12px] w-[12px] rounded-full ${
                    isStory ? "bg-white" : "bg-[#f5f5f5]"
                  }`}
                />
              </span>

              <span>Story</span>
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}