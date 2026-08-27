"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const socials = [
  { name: "Instagram", href: "https://instagram.com/yourusername", icon: "instagram" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  { name: "Email", href: "mailto:your@email.com", icon: "email" },
];

export default function CTA() {
  const pathname = usePathname();
  const isStory = pathname.startsWith("/story");

  return (
    <section className="relative w-full overflow-hidden pt-6">
      {/* MAIN PANEL */}
      <div className={`relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x ${isStory ? "border-white/[0.12] bg-black text-white" : "border-black/[0.08] bg-[#fafafa] text-black"}`}>

        {/* CONTENT */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isStory ? "bg-black" : "bg-[#fafafa]"}`}>

          {/* LEFT */}
          <div className={`border-b px-[18px] py-[30px] sm:px-[28px] sm:py-[34px] md:border-b-0 md:border-r md:px-[30px] md:py-[34px] ${isStory ? "border-white/[0.14] bg-black" : "border-black/[0.12] bg-[#fafafa]"}`}>
            <p className={`font-serif text-[18px] italic tracking-[-.3px] sm:text-[19px] ${isStory ? "text-white/50" : "text-black/50"}`}>
              Have a project in mind?
            </p>

            <div className="mt-[28px]">
              <h2 className={`font-serif text-[32px] font-normal leading-[1] tracking-[-1.3px] sm:text-[36px] ${isStory ? "text-white" : "text-black"}`}>
                Let&apos;s make
                <br />
                something great.
              </h2>

              <Link href="mailto:your@email.com" className={`group mt-[24px] inline-flex items-center gap-3 rounded-full border px-[18px] py-[10px] text-[14px] shadow-[0_2px_5px_rgba(0,0,0,.08)] transition-all duration-200 hover:-translate-y-[1px] ${isStory ? "border-white/[.15] bg-[#f5f5f5] text-black hover:bg-white hover:shadow-[0_5px_15px_rgba(255,255,255,.12)]" : "border-black/[.12] bg-white text-black hover:shadow-[0_5px_15px_rgba(0,0,0,.10)]"}`}>
                <span>Let&apos;s talk</span>
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black text-[12px] text-white transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`px-[18px] py-[30px] sm:px-[28px] sm:py-[34px] md:px-[30px] md:py-[34px] ${isStory ? "bg-black" : "bg-[#fafafa]"}`}>
            <p className={`font-serif text-[18px] italic tracking-[-.3px] sm:text-[19px] ${isStory ? "text-white/50" : "text-black/50"}`}>
              Connect on socials
            </p>

            <div className="mt-[28px] flex flex-wrap items-center gap-[12px]">
              {socials.map((social) => (
                <SocialButton key={social.name} {...social} isStory={isStory} />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BORDER */}
        <div className={`border-b-2 ${isStory ? "border-white/[0.18]" : "border-black"}`} />
      </div>
    </section>
  );
}

function SocialButton({
  name,
  href,
  icon,
  isStory,
}: {
  name: string;
  href: string;
  icon: string;
  isStory: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={name}
      title={name}
      target={icon === "email" ? undefined : "_blank"}
      rel={icon === "email" ? undefined : "noopener noreferrer"}
      className={`group flex h-[54px] w-[54px] items-center justify-center rounded-full border shadow-[0_2px_5px_rgba(0,0,0,.06)] transition-all duration-200 hover:-translate-y-[2px] ${isStory ? "border-white/[.14] bg-[#181818] text-white/60 shadow-[0_3px_12px_rgba(0,0,0,.45)] hover:bg-[#222] hover:text-white" : "border-black/[.10] bg-white text-black/60 hover:text-black hover:shadow-[0_5px_14px_rgba(0,0,0,.10)]"}`}
    >
      <SocialIcon type={icon} isStory={isStory} />
    </Link>
  );
}

function SocialIcon({ type, isStory }: { type: string; isStory: boolean }) {
  const iconColor = isStory ? "white" : "currentColor";

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-[23px] w-[23px]" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke={iconColor} strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke={iconColor} strokeWidth="1.8" />
        <circle cx="17.3" cy="6.8" r="1" fill={iconColor} />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <rect x="7" y="10" width="2" height="7" fill={isStory ? "black" : "white"} />
        <circle cx="8" cy="7" r="1.2" fill={isStory ? "black" : "white"} />
        <path d="M12 10h2v1c.5-.8 1.4-1.3 2.6-1.3 2.2 0 3.4 1.3 3.4 4V17h-2v-3c0-1.5-.5-2.4-1.6-2.4-1.1 0-1.7.8-1.7 2.4v3h-2v-7Z" fill={isStory ? "black" : "white"} />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-[23px] w-[23px]" fill={iconColor}>
        <path d="M12 .8a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.9 5.7-5.6 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[23px] w-[23px]" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={iconColor} strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}