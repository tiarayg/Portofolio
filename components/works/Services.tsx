"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I build responsive and modern websites, from landing pages to web applications, with attention to clean structure, performance, and a seamless user experience.",
    icon: "web",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "I turn ideas and designs into responsive, interactive interfaces with reusable components, clean code, and careful attention to visual details.",
    icon: "frontend",
  },
  {
    number: "03",
    title: "Mobile Development",
    description:
      "I develop cross-platform mobile applications with responsive interfaces, reusable components, and experiences designed to work smoothly across different devices.",
    icon: "mobile",
  },
  {
    number: "04",
    title: "AI Integration",
    description:
      "I explore and integrate AI technologies into digital products by connecting generative AI, APIs, and interactive workflows to create more useful experiences.",
    icon: "ai",
  },
];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* MAIN PANEL */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-black/[.08]">

        {/* HEADING */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.4,
          }}
          className="border-y border-black/[.12] px-[18px] pb-[42px] pt-[100px] sm:px-[28px] sm:pb-[48px] sm:pt-[120px] md:px-[32px] md:pb-[55px] md:pt-[145px]"
        >
          <h2 className="max-w-[850px] font-serif text-[45px] font-normal leading-[.98] tracking-[-2.2px] text-black sm:text-[55px] md:text-[62px] lg:text-[64px]">
            From ideas to interfaces,
            <br />
            products, and experiences
          </h2>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="grid grid-cols-1 bg-[#fafafa] md:grid-cols-2"
        >
          {services.map((service, index) => (
            <ServiceItem
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className={`relative min-h-[290px] bg-[#fafafa] px-[18px] pb-[26px] pt-[24px] sm:min-h-[310px] sm:px-[28px] sm:pb-[30px] sm:pt-[28px] md:px-[32px] md:pt-[30px] ${
        index % 2 === 0
          ? "md:border-r md:border-black/[.12]"
          : ""
      } ${
        index < 2
          ? "border-b border-black/[.12]"
          : ""
      }`}
    >
      {/* ICON */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex h-[105px] items-start"
      >
        <ServiceIcon type={service.icon} />
      </motion.div>

      {/* TITLE */}
      <h3 className="font-serif text-[28px] font-normal leading-none tracking-[-1px] text-black sm:text-[30px]">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-[14px] max-w-[500px] text-[14px] leading-[1.55] tracking-[-.1px] text-black sm:text-[14px] md:max-w-[470px]">
        {service.description}
      </p>
    </motion.div>
  );
}

function ServiceIcon({ type }: { type: string }) {
  /* WEB DEVELOPMENT */
  if (type === "web") {
    return (
      <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-[12px] border border-black/[.1] bg-white shadow-[0_2px_6px_rgba(0,0,0,.08)]">
        <div className="absolute inset-[7px] rounded-[7px] border border-black/[.1]" />

        <div className="absolute left-[7px] right-[7px] top-[20px] border-t border-black/[.1]" />

        <div className="absolute left-[13px] top-[12px] flex gap-[4px]">
          <span className="h-[4px] w-[4px] rounded-full bg-black/30" />
          <span className="h-[4px] w-[4px] rounded-full bg-black/20" />
          <span className="h-[4px] w-[4px] rounded-full bg-black/10" />
        </div>

        <svg
          viewBox="0 0 24 24"
          className="h-[27px] w-[27px] text-black/65"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <rect
            x="5"
            y="5"
            width="14"
            height="14"
            rx="2"
          />

          <path d="M5 9h14M9 13h2M13 13h2M9 16h6" />
        </svg>
      </div>
    );
  }

  /* FRONTEND DEVELOPMENT */
  if (type === "frontend") {
    return (
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[13px] border border-black/[.1] bg-[#171717] shadow-[0_5px_12px_rgba(0,0,0,.2)]">
        <svg
          viewBox="0 0 48 48"
          className="h-[39px] w-[39px] text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 14 8 24l10 10M30 14l10 10-10 10M27 9l-6 30" />
        </svg>
      </div>
    );
  }

  /* MOBILE DEVELOPMENT */
  if (type === "mobile") {
    return (
      <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-[14px] border border-black/[.1] bg-white shadow-[0_3px_8px_rgba(0,0,0,.1)]">
        <svg
          viewBox="0 0 32 42"
          className="h-[45px] w-[35px] text-black/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <rect
            x="6"
            y="2"
            width="20"
            height="38"
            rx="4"
          />

          <path
            d="M12 6h8M14 35h4"
            strokeLinecap="round"
          />
        </svg>

        <span className="absolute right-[11px] top-[11px] h-[6px] w-[6px] rounded-full bg-black/20" />
      </div>
    );
  }

  /* AI INTEGRATION */
  return (
    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[14px] border border-black/[.1] bg-[#f5f5f5] shadow-[0_3px_8px_rgba(0,0,0,.08)]">
      <svg
        viewBox="0 0 48 48"
        className="h-[42px] w-[42px] text-black/75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 6 27 18l9-6-3 12 9 3-9 3 3 12-9-6-3 12-3-12-9 6 3-12-9-3 9-3-3-12 9 6 3-12Z" />

        <circle
          cx="24"
          cy="24"
          r="5"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </div>
  );
}