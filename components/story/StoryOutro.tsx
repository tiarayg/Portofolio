"use client";

import { motion } from "framer-motion";

export default function StoryOutro() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,.055) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "12px 12px",
        }}
      />

      {/* CANVAS */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-white/[0.12]">
        <div className="relative min-h-[590px] border-y border-white/[0.16] sm:min-h-[650px] md:min-h-[680px]">

          {/* =================================================
              HEADLINE
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-[45px] left-[28px] z-20 sm:bottom-[55px] sm:left-[36px] md:bottom-[58px] md:left-[40px]"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 text-[11px] uppercase tracking-[0.22em] text-white/40"
            >
              What&apos;s next?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[620px] font-serif text-[48px] font-normal leading-[.94] tracking-[-2.5px] text-white sm:text-[60px] md:text-[68px] lg:text-[74px]"
            >
              Ready for the
              <br />
              <span className="text-white/45">
                next adventures.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-[390px] text-[14px] leading-[1.65] text-white/50 sm:text-[15px]"
            >
              Still learning, still building, and always excited to see
              where the next idea takes me.
            </motion.p>
          </motion.div>

          {/* =================================================
              FLOWERS
          ================================================= */}
          <div className="absolute right-[3%] top-[45px] hidden h-[520px] w-[650px] sm:block">

            {/* BIG PINK FLOWER */}
            <AnimatedFlower
              className="absolute right-[60px] top-[0px]"
              delay={0.1}
              y={8}
              rotate={3}
            >
              <Flower
                size="large"
                petalColor="bg-[#e879aa]"
                centerColor="bg-[#ffd76a]"
              />
            </AnimatedFlower>

            {/* PURPLE FLOWER */}
            <AnimatedFlower
              className="absolute left-[150px] top-[75px]"
              delay={0.25}
              y={7}
              rotate={-4}
            >
              <Flower
                size="medium"
                petalColor="bg-[#9580e8]"
                centerColor="bg-[#ffc928]"
              />
            </AnimatedFlower>

            {/* BIG BLUE FLOWER */}
            <AnimatedFlower
              className="absolute right-[20px] top-[260px]"
              delay={0.4}
              y={10}
              rotate={3}
            >
              <Flower
                size="medium"
                petalColor="bg-[#5fa5e0]"
                centerColor="bg-[#ffc928]"
              />
            </AnimatedFlower>

            {/* ORANGE FLOWER */}
            <AnimatedFlower
              className="absolute left-[270px] top-[315px]"
              delay={0.55}
              y={7}
              rotate={-3}
            >
              <Flower
                size="small"
                petalColor="bg-[#ff9d6b]"
                centerColor="bg-[#ffe07a]"
              />
            </AnimatedFlower>

            {/* SMALL PINK FLOWER */}
            <AnimatedFlower
              className="absolute left-[90px] top-[410px]"
              delay={0.7}
              y={6}
              rotate={4}
            >
              <Flower
                size="small"
                petalColor="bg-[#ec83b1]"
                centerColor="bg-[#ffe07a]"
              />
            </AnimatedFlower>

            {/* =================================================
                DECORATIVE DOTS
            ================================================= */}
            <AnimatedDot
              className="absolute left-[8%] top-[5%] h-[4px] w-[4px] rounded-full bg-[#e879aa]"
              delay={0.2}
            />

            <AnimatedDot
              className="absolute left-[42%] top-[12%] h-[7px] w-[7px] rounded-full bg-[#e879aa]"
              delay={0.35}
            />

            <AnimatedDot
              className="absolute right-[5%] top-[8%] h-[6px] w-[6px] rounded-full bg-[#5fa5e0]"
              delay={0.5}
            />

            <AnimatedDot
              className="absolute left-[35%] top-[52%] h-[5px] w-[5px] rounded-full bg-[#9580e8]"
              delay={0.65}
            />

            <AnimatedDot
              className="absolute right-[35%] top-[78%] h-[5px] w-[5px] rounded-full bg-[#e879aa]"
              delay={0.8}
            />

            <AnimatedDot
              className="absolute right-[8%] bottom-[2%] h-[7px] w-[7px] rounded-full bg-[#ffd76a]"
              delay={0.95}
            />

            <AnimatedDot
              className="absolute left-[20%] bottom-[4%] h-[6px] w-[6px] rounded-full bg-[#ffd76a]"
              delay={1.1}
            />
          </div>

          {/* =================================================
              MOBILE FLOWERS
          ================================================= */}
          <div className="absolute right-[20px] top-[35px] flex gap-3 sm:hidden">
            <AnimatedFlower delay={0.1} y={6} rotate={3}>
              <Flower
                size="small"
                petalColor="bg-[#e879aa]"
                centerColor="bg-[#ffd76a]"
              />
            </AnimatedFlower>

            <AnimatedFlower delay={0.25} y={7} rotate={-3}>
              <Flower
                size="small"
                petalColor="bg-[#9580e8]"
                centerColor="bg-[#ffc928]"
              />
            </AnimatedFlower>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ANIMATED FLOWER
========================================================= */

function AnimatedFlower({
  children,
  className = "",
  delay = 0,
  y = 8,
  rotate = 3,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: 0.7,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        amount: 0.2,
        once: false,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={{
          y: [0, -y, 0],
          rotate: [0, rotate, 0],
        }}
        transition={{
          duration: 5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   ANIMATED DOT
========================================================= */

function AnimatedDot({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={className}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      animate={{
        y: [0, -5, 0],
        opacity: [0.5, 1, 0.5],
      }}
      viewport={{
        amount: 0.2,
        once: false,
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}

/* =========================================================
   FLOWER COMPONENT
========================================================= */

function Flower({
  size,
  petalColor,
  centerColor,
}: {
  size: "small" | "medium" | "large";
  petalColor: string;
  centerColor: string;
}) {
  const sizes = {
    small: {
      container: "h-[85px] w-[85px]",
      petal: "h-[34px] w-[34px]",
      center: "h-[22px] w-[22px]",
    },

    medium: {
      container: "h-[145px] w-[145px]",
      petal: "h-[58px] w-[58px]",
      center: "h-[35px] w-[35px]",
    },

    large: {
      container: "h-[205px] w-[205px]",
      petal: "h-[82px] w-[82px]",
      center: "h-[50px] w-[50px]",
    },
  };

  const current = sizes[size];

  return (
    <div className={`relative ${current.container}`}>
      {/* TOP */}
      <div
        className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${current.petal} ${petalColor}`}
      />

      {/* TOP RIGHT */}
      <div
        className={`absolute right-[7%] top-[15%] rounded-full ${current.petal} ${petalColor}`}
      />

      {/* RIGHT */}
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 rounded-full ${current.petal} ${petalColor}`}
      />

      {/* BOTTOM RIGHT */}
      <div
        className={`absolute bottom-[7%] right-[15%] rounded-full ${current.petal} ${petalColor}`}
      />

      {/* BOTTOM */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full ${current.petal} ${petalColor}`}
      />

      {/* BOTTOM LEFT */}
      <div
        className={`absolute bottom-[7%] left-[15%] rounded-full ${current.petal} ${petalColor}`}
      />

      {/* LEFT */}
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full ${current.petal} ${petalColor}`}
      />

      {/* TOP LEFT */}
      <div
        className={`absolute left-[7%] top-[15%] rounded-full ${current.petal} ${petalColor}`}
      />

      {/* CENTER */}
      <div
        className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_5px_14px_rgba(0,0,0,.35)] ${current.center} ${centerColor}`}
      />
    </div>
  );
}