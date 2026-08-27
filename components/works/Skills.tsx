"use client";

const skills = [
  { name: "Next.js", type: "nextjs" },
  { name: "React", type: "react" },
  { name: "Vue", type: "vue" },
  { name: "Laravel", type: "laravel" },
  { name: "Tailwind CSS", type: "tailwind" },
  { name: "TypeScript", type: "typescript" },
  { name: "JavaScript", type: "javascript" },
  { name: "Git", type: "git" },
  { name: "GitHub", type: "github" },
  { name: "Figma", type: "figma" },
  { name: "Node.js", type: "node" },
  { name: "Flutter", type: "flutter" },
];

export default function Skills() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* MAIN PANEL */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-black/[.08] bg-[#fafafa]">

        {/* HEADER */}
        <div className="border-t border-black/[.12] bg-[#fafafa] px-[18px] pb-[20px] pt-[24px] sm:px-[28px] sm:pb-[22px] sm:pt-[28px] md:px-[32px]">
          <p className="font-serif text-[17px] italic tracking-[-.2px] text-black/50 sm:text-[18px]">
            Skills &amp; tools I work with:
          </p>
        </div>

        {/* SKILLS LIST */}
        <div className="border-t border-black/[.08] bg-[#fafafa] px-[18px] py-[24px] sm:px-[28px] sm:py-[28px] md:px-[32px]">
          <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[18px] sm:gap-x-[30px] sm:gap-y-[20px] md:gap-x-[34px]">
            {skills.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} type={skill.type} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function SkillItem({ name, type }: { name: string; type: string }) {
  return (
    <div className="group flex items-center gap-[8px] whitespace-nowrap text-black/45 transition-colors duration-200 hover:text-black/70">
      <SkillIcon type={type} />
      <span className="text-[15px] font-semibold tracking-[-.5px] sm:text-[16px]">
        {name}
      </span>
    </div>
  );
}

function SkillIcon({ type }: { type: string }) {
  if (type === "nextjs") {
    return (
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/45 text-[11px] font-bold text-white">
        N
      </span>
    );
  }

  if (type === "react") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] text-black/45" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="3.7" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (type === "vue") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] text-black/45" fill="currentColor">
        <path d="M2.5 4h4.2L12 12.5 17.3 4h4.2L12 19.5 2.5 4Z" />
        <path d="M7 4h3.2l1.8 3 1.8-3H17l-5 8.5L7 4Z" fill="#fafafa" />
      </svg>
    );
  }

  if (type === "laravel") {
    return (
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black/45 text-[10px] font-bold text-white">
        L
      </span>
    );
  }

  if (type === "tailwind") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] text-black/45" fill="none">
        <path d="M4 12c2.2-5 5-6.5 8.5-4.5 1.9 1.1 3.2 1.6 4.8.8 1-.5 1.8-1.3 2.7-2.3-1.2 5-4 7-8.5 5.8-1.9-.5-3.3-1.1-4.7-.2C5.8 12.1 5 13 4 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M4 18c2.2-5 5-6.5 8.5-4.5 1.9 1.1 3.2 1.6 4.8.8 1-.5 1.8-1.3 2.7-2.3-1.2 5-4 7-8.5 5.8-1.9-.5-3.3-1.1-4.7-.2C5.8 18.1 5 19 4 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "typescript") {
    return (
      <span className="flex h-[22px] w-[22px] items-end justify-end rounded-[3px] bg-black/45 pb-[2px] pr-[3px] text-[10px] font-bold text-white">
        TS
      </span>
    );
  }

  if (type === "javascript") {
    return (
      <span className="flex h-[22px] w-[22px] items-end justify-end rounded-[3px] bg-black/45 pb-[2px] pr-[3px] text-[10px] font-bold text-white">
        JS
      </span>
    );
  }

  if (type === "git") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] text-black/45" fill="currentColor">
        <path d="M21.5 11.1 12.9 2.5a1.7 1.7 0 0 0-2.4 0L8.7 4.3l2.2 2.2c.5-.2 1.1-.1 1.5.3.5.5.5 1.2.3 1.7l2.1 2.1c.5-.2 1.2-.1 1.7.3.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.2-.3-1.7l-2-2v5.3c.1.1.2.2.3.3.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-0.7-.7-.7-1.8 0-2.5.1-.1.3-.2.4-.3V9.6c-.1-.1-.3-.2-.4-.3-.7-.7-.7-1.8 0-2.5l-2.2-2.2-5.7 5.7a1.7 1.7 0 0 0 0 2.4l8.6 8.6a1.7 1.7 0 0 0 2.4 0l8.6-8.6a1.7 1.7 0 0 0 0-2.4Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] text-black/45" fill="currentColor">
        <path d="M12 .8a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .8Z" />
      </svg>
    );
  }

  if (type === "figma") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none">
        <path d="M8 2h4v5H8a2.5 2.5 0 1 1 0-5Z" fill="currentColor" opacity=".55" />
        <path d="M8 7h4v5H8a2.5 2.5 0 1 1 0-5Z" fill="currentColor" opacity=".7" />
        <path d="M8 12h4v5H8a2.5 2.5 0 1 1 0-5Z" fill="currentColor" opacity=".85" />
        <circle cx="15" cy="9.5" r="2.5" fill="currentColor" opacity=".65" />
        <circle cx="15" cy="14.5" r="2.5" fill="currentColor" opacity=".45" />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-[2px] border-black/40 text-[8px] font-bold text-black/45">
        JS
      </span>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] text-black/45" fill="currentColor">
      <path d="M14.2 3 5 12.2l3.2 3.2L20.6 3h-6.4Z" />
      <path d="m11.1 14.8 3.2-3.2 6.3 6.3h-6.4l-3.1-3.1Z" />
      <path d="m8.2 15.7 3.2-3.2 3.1 3.1-3.2 3.2-3.1-3.1Z" />
    </svg>
  );
}