"use client";

const services = [
  {
    number: "01",
    title: "Web design",
    description:
      "I start from scratch, define goals the site actually has to achieve, then comes shape structure, navigation, and every UI element around them.",
    icon: "web",
  },
  {
    number: "02",
    title: "Development",
    description:
      "I build what I design in Framer or Webflow, down to the smallest interactions that make a site feel alive without ever pulling focus.",
    icon: "development",
  },
  {
    number: "03",
    title: "Brand identity",
    description:
      "From logo and type to colors, patterns, and graphics, delivered as one handoff your team can actually follow, so what you ship later still flows.",
    icon: "brand",
  },
  {
    number: "04",
    title: "Illustration",
    description:
      "Custom icons, product visuals, isometric scenes made for you only is the fastest way to explain the product and make people feel something.",
    icon: "illustration",
  },
];


export default function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa]">
      {/* =====================================================
          SAME GRID AS HERO
      ====================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
        "
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
          MAIN WHITE PANEL
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-[calc(100%-48px)]
          max-w-[1200px]
          border-x
          border-black/[0.08]
          bg-white
        "
      >
        {/* ===================================================
            HEADING
        ==================================================== */}
        <div
          className="
            border-b
            border-black/[0.12]
            bg-white
            px-[18px]
            pb-[26px]
            pt-[34px]
            sm:px-[28px]
            sm:pb-[30px]
            sm:pt-[42px]
            md:px-[32px]
            md:pt-[48px]
          "
        >
          <h2
            className="
              max-w-[850px]
              font-serif
              text-[45px]
              font-normal
              leading-[0.98]
              tracking-[-2.2px]
              text-black
              sm:text-[55px]
              md:text-[62px]
              lg:text-[64px]
            "
            style={{
              fontFamily:
                'Georgia, "Times New Roman", Times, serif',
            }}
          >
            Everything your product
            <br />
            needs to be taken seriously
          </h2>
        </div>

        {/* ===================================================
            SERVICES GRID
        ==================================================== */}
        <div className="grid grid-cols-1 bg-white md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceItem
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>

        

        {/* ===================================================
            BOTTOM BORDER
        ==================================================== */}
        
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE ITEM
========================================================= */

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <div
      className={`
        relative
        min-h-[290px]
        bg-white
        px-[18px]
        pb-[26px]
        pt-[24px]
        sm:min-h-[310px]
        sm:px-[28px]
        sm:pb-[30px]
        sm:pt-[28px]
        md:px-[32px]
        md:pt-[30px]
        ${
          index % 2 === 0
            ? "md:border-r md:border-black/[0.12]"
            : ""
        }
        ${
          index < 2
            ? "border-b border-black/[0.12]"
            : ""
        }
      `}
    >
      {/* ===================================================
          ICON
      ==================================================== */}
      <div className="h-[105px]">
        <ServiceIcon type={service.icon} />
      </div>

      {/* ===================================================
          TITLE
      ==================================================== */}
      <h3
        className="
          font-serif
          text-[28px]
          font-normal
          leading-none
          tracking-[-1px]
          text-black
          sm:text-[30px]
        "
        style={{
          fontFamily:
            'Georgia, "Times New Roman", Times, serif',
        }}
      >
        {service.title}
      </h3>

      {/* ===================================================
          DESCRIPTION
      ==================================================== */}
      <p
        className="
          mt-[14px]
          max-w-[500px]
          text-[14px]
          leading-[1.55]
          tracking-[-0.1px]
          text-black
          sm:text-[14px]
          md:max-w-[470px]
        "
      >
        {service.description}
      </p>
    </div>
  );
}

/* =========================================================
   SERVICE ICONS
========================================================= */

function ServiceIcon({
  type,
}: {
  type: string;
}) {
  /* =======================================================
     WEB DESIGN
     
     Small Figma-like selection box with globe
  ======================================================== */
  if (type === "web") {
    return (
      <div className="relative h-[72px] w-[72px]">
        {/* selection box */}
        <div
          className="
            absolute
            left-[5px]
            top-[4px]
            h-[51px]
            w-[51px]
            border
            border-[#b7d9ec]
            bg-white
          "
        >
          {/* corner points */}
          <span className="absolute -left-[4px] -top-[4px] h-[7px] w-[7px] rounded-full border border-[#8dc8eb] bg-white" />
          <span className="absolute -right-[4px] -top-[4px] h-[7px] w-[7px] rounded-full border border-[#8dc8eb] bg-white" />
          <span className="absolute -bottom-[4px] -left-[4px] h-[7px] w-[7px] rounded-full border border-[#8dc8eb] bg-white" />
          <span className="absolute -bottom-[4px] -right-[4px] h-[7px] w-[7px] rounded-full border border-[#8dc8eb] bg-white" />

          {/* globe */}
          <svg
            viewBox="0 0 40 40"
            className="absolute left-1/2 top-1/2 h-[31px] w-[31px] -translate-x-1/2 -translate-y-1/2 text-black/10"
            fill="none"
          >
            <circle
              cx="20"
              cy="20"
              r="12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <ellipse
              cx="20"
              cy="20"
              rx="6"
              ry="12"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M8 20h24M10.5 14h19M10.5 26h19"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        {/* cursor */}
        <svg
          viewBox="0 0 35 45"
          className="
            absolute
            left-[37px]
            top-[38px]
            h-[38px]
            w-[30px]
            drop-shadow-[1px_2px_2px_rgba(0,0,0,0.3)]
          "
        >
          <path
            d="M3 2L7 36L15 27L23 42L29 39L20 24L32 22L3 2Z"
            fill="#151515"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }

  /* =======================================================
     DEVELOPMENT
     
     Two floating cards inspired by Framer/Webflow
  ======================================================== */
  if (type === "development") {
    return (
      <div className="relative h-[78px] w-[110px]">
        {/* back card */}
        <div
          className="
            absolute
            left-[31px]
            top-[16px]
            flex
            h-[47px]
            w-[58px]
            rotate-[7deg]
            items-center
            justify-center
            rounded-[11px]
            border
            border-black/[0.08]
            bg-[#f3f4f5]
            shadow-[0_4px_8px_rgba(0,0,0,0.12)]
          "
        >
          <div className="text-[27px] font-bold tracking-[-4px] text-[#2f75d8]">
            W
          </div>
        </div>

        {/* front dark card */}
        <div
          className="
            absolute
            left-[1px]
            top-[1px]
            flex
            h-[50px]
            w-[50px]
            -rotate-[7deg]
            items-center
            justify-center
            rounded-[12px]
            border
            border-white/20
            bg-gradient-to-br
            from-[#303030]
            via-[#111]
            to-[#050505]
            shadow-[0_5px_10px_rgba(0,0,0,0.25)]
          "
        >
          <svg
            viewBox="0 0 40 40"
            className="h-[28px] w-[28px]"
          >
            <path
              d="M8 8h24L21 18h8L12 33l5-11H8l10-14H8Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    );
  }

  /* =======================================================
     BRAND IDENTITY
     
     Bolt + construction grid
  ======================================================== */
  if (type === "brand") {
    return (
      <div
        className="
          relative
          h-[66px]
          w-[66px]
          overflow-hidden
          rounded-[11px]
          border
          border-black/[0.10]
          bg-white
          shadow-[0_2px_5px_rgba(0,0,0,0.05)]
        "
      >
        {/* grid */}
        <div
          className="
            absolute
            inset-0
            opacity-40
            bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)]
            bg-[size:10px_10px]
          "
        />

        {/* circles */}
        <div className="absolute inset-[7px] rounded-full border border-black/[0.08]" />

        {/* bolt */}
        <svg
          viewBox="0 0 50 60"
          className="
            absolute
            left-1/2
            top-1/2
            h-[52px]
            w-[43px]
            -translate-x-1/2
            -translate-y-1/2
            drop-shadow-[2px_3px_2px_rgba(0,0,0,0.28)]
          "
        >
          <path
            d="M30 2L5 31h16L15 58l30-35H28L30 2Z"
            fill="#171717"
            stroke="#444"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    );
  }

  /* =======================================================
     ILLUSTRATION
     
     Sticky note + pencil
  ======================================================== */
  return (
    <div className="relative h-[72px] w-[95px]">
      {/* shadow */}
      <div
        className="
          absolute
          left-[7px]
          top-[17px]
          h-[43px]
          w-[57px]
          rotate-[5deg]
          rounded-[5px]
          bg-black/10
          blur-[4px]
        "
      />

      {/* note */}
      <div
        className="
          absolute
          left-[5px]
          top-[10px]
          h-[51px]
          w-[62px]
          rotate-[4deg]
          rounded-[3px]
          border
          border-[#dfc66e]
          bg-[#fff1a8]
          shadow-[0_2px_4px_rgba(0,0,0,0.12)]
        "
      >
        {/* folded corner */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-[13px]
            w-[13px]
            border-l
            border-t
            border-[#dfc66e]
            bg-[#f8e58d]
          "
        />

        {/* face */}
        <div className="absolute left-[15px] top-[15px]">
          <div className="flex gap-[8px]">
            <span className="h-[3px] w-[3px] rounded-full bg-black/70" />
            <span className="h-[3px] w-[3px] rounded-full bg-black/70" />
          </div>

          <svg
            viewBox="0 0 30 15"
            className="mt-[3px] h-[12px] w-[25px]"
            fill="none"
          >
            <path
              d="M2 3C4 12 20 15 27 3"
              stroke="#171717"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* pencil */}
      <div
        className="
          absolute
          left-[52px]
          top-[5px]
          h-[61px]
          w-[13px]
          rotate-[42deg]
          rounded-[4px]
          border
          border-black/10
          bg-[#f4f4f4]
          shadow-[1px_2px_3px_rgba(0,0,0,0.16)]
        "
      >
        {/* yellow body */}
        <div className="absolute inset-x-[2px] top-[9px] bottom-[9px] bg-[#f0c94b]" />

        {/* eraser */}
        <div className="absolute left-[2px] top-0 h-[9px] w-[7px] rounded-t-[3px] bg-[#f4a7a7]" />

        {/* tip */}
        <div
          className="
            absolute
            bottom-[-7px]
            left-[2px]
            h-0
            w-0
            border-l-[4px]
            border-r-[4px]
            border-t-[8px]
            border-l-transparent
            border-r-transparent
            border-t-[#c5a36b]
          "
        />
      </div>
    </div>
  );
}

