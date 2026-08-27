"use client";

export default function StoryOutro() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right,rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.055) 1px,transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      />

      {/* CANVAS */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] overflow-hidden border-x border-white/[0.12]">
        <div className="relative min-h-[590px] border-t border-b border-white/[0.16] sm:min-h-[650px] md:min-h-[680px]">

          {/* =================================================
              HEADLINE
          ================================================== */}
          <div className="absolute bottom-[45px] left-[28px] z-20 sm:bottom-[55px] sm:left-[36px] md:bottom-[58px] md:left-[40px]">
            <h2 className="max-w-[620px] font-serif text-[48px] font-normal leading-[.94] tracking-[-2.5px] text-white sm:text-[60px] md:text-[68px] lg:text-[74px]">
              Ready for the
              <br />
              next adventures
            </h2>
          </div>

          {/* =================================================
              COLLAGE
          ================================================== */}
          <div className="absolute right-[5%] top-[35px] h-[390px] w-[500px] sm:right-[5%] sm:top-[40px] sm:h-[450px] sm:w-[560px] md:right-[3%] md:top-[35px] md:h-[500px] md:w-[620px]">

            {/* YELLOW NOTE */}
            <div className="absolute left-[4%] top-[30%] z-20 h-[205px] w-[245px] rotate-[6deg] bg-[#f5df7b] px-[18px] py-[17px] shadow-[0_12px_30px_rgba(0,0,0,.4)] sm:h-[230px] sm:w-[275px] sm:px-[22px] sm:py-[20px]">
              {/* NOTE LINES */}
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 31px, #62a8a4 32px)" }} />

              {/* RED LINE */}
              <div className="absolute right-[42px] top-0 h-full w-px bg-red-400/50" />

              {/* HOLES */}
              <div className="absolute left-[-5px] top-[16px] h-[11px] w-[11px] rounded-full border-2 border-black/60 bg-[#f5df7b]" />
              <div className="absolute left-[-5px] top-[62px] h-[11px] w-[11px] rounded-full border-2 border-black/60 bg-[#f5df7b]" />
              <div className="absolute left-[-5px] top-[108px] h-[11px] w-[11px] rounded-full border-2 border-black/60 bg-[#f5df7b]" />
              <div className="absolute left-[-5px] top-[154px] h-[11px] w-[11px] rounded-full border-2 border-black/60 bg-[#f5df7b]" />

              {/* TEXT */}
              <div className="relative z-10 ml-[18px] font-serif text-[19px] italic leading-[1.62] text-black sm:text-[21px]">
                <p>✓ Branding</p>
                <p>✓ Web design</p>
                <p>✓ Illustration</p>
                <p>✓ Motion</p>
                <p>✓ UI / UX</p>
              </div>
            </div>

            {/* =================================================
                POLAROID
            ================================================== */}
            <div className="absolute right-[16%] top-[2%] z-30 w-[205px] rotate-[-7deg] bg-[#f7f7f4] p-[9px] pb-[18px] shadow-[0_16px_35px_rgba(0,0,0,.45)] sm:right-[15%] sm:w-[235px] sm:p-[10px] sm:pb-[20px] md:w-[255px]">

              {/* IMAGE */}
              <div className="h-[190px] w-full overflow-hidden bg-[#ddd] sm:h-[215px] md:h-[230px]">
                <img
                  src="/images/story-dog.jpg"
                  alt="A little moment"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CAPTION */}
              <p className="pt-[10px] text-center font-serif text-[14px] italic text-black sm:text-[15px]">
                Hope is ready to answer
                <br />
                all your emails! :)
              </p>
            </div>

            {/* =================================================
                RED / WHITE CARD
            ================================================== */}
            <div className="absolute bottom-[2%] right-[1%] z-20 h-[205px] w-[145px] rotate-[27deg] overflow-hidden rounded-[8px] bg-white shadow-[0_16px_35px_rgba(0,0,0,.45)] sm:h-[240px] sm:w-[170px] md:h-[270px] md:w-[190px]">

              {/* RED SIDEBAR */}
              <div className="absolute left-0 top-0 h-full w-[43px] bg-[#ef102d] sm:w-[50px]" />

              {/* RED TOP */}
              <div className="absolute left-0 top-0 h-[43px] w-full bg-[#ef102d] sm:h-[50px]" />

              {/* CARD TEXT */}
              <div className="absolute left-[4px] top-[55px] -rotate-90 origin-left font-mono text-[16px] font-bold tracking-[1px] text-white sm:top-[65px] sm:text-[18px]">
                HELLO
              </div>

              {/* SMILE */}
              <div className="absolute left-[42%] top-[38%] flex h-[72px] w-[72px] items-center justify-center rounded-full border-[7px] border-black sm:h-[88px] sm:w-[88px]">
                <div className="absolute left-[17px] top-[18px] h-[8px] w-[8px] rounded-full bg-black sm:left-[20px] sm:top-[21px]" />
                <div className="absolute right-[17px] top-[18px] h-[8px] w-[8px] rounded-full bg-black sm:right-[20px] sm:top-[21px]" />

                <div className="absolute bottom-[14px] left-1/2 h-[22px] w-[36px] -translate-x-1/2 rounded-b-full border-b-[6px] border-black sm:bottom-[18px] sm:h-[27px] sm:w-[43px]" />
              </div>

              {/* SUN RAYS */}
              <span className="absolute left-[25%] top-[30%] h-[3px] w-[18px] rotate-45 bg-black" />
              <span className="absolute right-[23%] top-[30%] h-[3px] w-[18px] -rotate-45 bg-black" />
              <span className="absolute left-[19%] top-[52%] h-[3px] w-[18px] rotate-90 bg-black" />
              <span className="absolute right-[17%] top-[52%] h-[3px] w-[18px] rotate-90 bg-black" />
            </div>
          </div>

          {/* =================================================
              SMALL DECORATIVE DOTS
          ================================================== */}
          <span className="absolute left-[8%] top-[25%] h-[3px] w-[3px] rounded-full bg-white/30" />
          <span className="absolute left-[15%] top-[15%] h-[2px] w-[2px] rounded-full bg-white/20" />
          <span className="absolute right-[35%] top-[20%] h-[3px] w-[3px] rounded-full bg-white/25" />
          <span className="absolute right-[8%] top-[12%] h-[2px] w-[2px] rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}