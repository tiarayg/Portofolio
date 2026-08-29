"use client";

const certificates = [
  {
    pdf: "/certificates/certificate-1.pdf",
  },
  {
    pdf: "/certificates/certificate-2.pdf",
  },
  {
    pdf: "/certificates/certificate-3.pdf",
  },
  {
    pdf: "/certificates/certificate-4.pdf",
  },
];

export default function Certificates() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* GRID BACKGROUND */}
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

      {/* MAIN CANVAS */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-white/[0.12]">
        {/* HEADER */}
        <div className="border-y border-white/[0.14] px-[28px] py-[28px] sm:px-[34px] sm:py-[32px]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-serif text-[21px] italic text-white/55">
                Certificates
              </p>

              <h2 className="mt-[8px] font-serif text-[34px] tracking-[-1.2px] text-white sm:text-[40px]">
                Things I&apos;ve learned along the way.
              </h2>
            </div>

            <span className="hidden font-mono text-[10px] tracking-[0.12em] text-white/30 sm:block">
              SELECTED CERTIFICATES
            </span>
          </div>
        </div>

        {/* CERTIFICATE MARQUEE */}
        <div className="overflow-hidden border-b border-white/[0.14] py-[32px] sm:py-[40px]">
          <div className="certificate-track flex w-max items-center gap-[18px] px-[18px] sm:gap-[22px]">
            {/* ORIGINAL */}
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={`first-${index}`}
                pdf={certificate.pdf}
              />
            ))}

            {/* DUPLICATE UNTUK INFINITE ANIMATION */}
            {certificates.map((certificate, index) => (
              <CertificateCard
                key={`second-${index}`}
                pdf={certificate.pdf}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .certificate-track {
          animation: scroll-certificates 28s linear infinite;
        }

        @keyframes scroll-certificates {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .certificate-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   CERTIFICATE CARD
========================================================= */

function CertificateCard({
  pdf,
}: {
  pdf: string;
}) {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block shrink-0"
    >
      <div className="relative h-[220px] w-[310px] overflow-hidden rounded-[10px] border border-white/[0.14] bg-white shadow-[0_12px_35px_rgba(0,0,0,.35)] transition-all duration-300 group-hover:-translate-y-[5px] group-hover:shadow-[0_20px_45px_rgba(0,0,0,.5)] sm:h-[260px] sm:w-[370px]">
        {/* PDF PREVIEW */}
        <iframe
          src={`${pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
          title="Certificate Preview"
          className="pointer-events-none h-full w-full border-0"
        />

        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
          <div className="translate-y-[8px] rounded-full border border-white/30 bg-black/60 px-[14px] py-[8px] text-[11px] text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View certificate ↗
          </div>
        </div>
      </div>
    </a>
  );
}