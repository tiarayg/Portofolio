import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Tiara — Frontend Developer",
  description:
    "Frontend Developer building modern web, mobile, and AI-powered experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-[#fafafa] text-black">
        {/* GLOBAL GRID */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right,var(--grid-color) 1px,transparent 1px),linear-gradient(to bottom,var(--grid-color) 1px,transparent 1px)`,
            backgroundSize: "12px 12px",
          }}
        />

        {/* PAGE CONTENT */}
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}