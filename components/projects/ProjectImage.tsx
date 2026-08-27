import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
};

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">
      {/* GRID */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.055)_1px,transparent_1px)] bg-[size:12px_12px]" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto w-[calc(100%-48px)] max-w-[1200px] border-x border-black/[0.08] bg-white">
        
        {/* TOP LINE */}
        <div className="border-t border-black/[0.12]" />

        {/* IMAGE AREA */}
        <div className="px-[18px] py-[30px] sm:px-[28px] sm:py-[34px] md:px-[30px] md:py-[30px]">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[18px] bg-[#eee] sm:rounded-[20px]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width:768px) calc(100vw - 84px),1140px"
              className="object-cover"
            />
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="border-b border-black/[0.12]" />
      </div>
    </section>
  );
}