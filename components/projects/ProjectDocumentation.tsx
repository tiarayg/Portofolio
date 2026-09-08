import Image from "next/image";

type ProjectDocumentationProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function ProjectDocumentation({
  images,
}: ProjectDocumentationProps) {
  return (
    <section className="relative overflow-hidden">
      {/* CONTAINER */}
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1200px] border-x border-black/[0.08] bg-[#fafafa]">

        {/* TITLE */}
        <div className="border-y border-black/[0.12] px-[28px] py-[25px] sm:px-[38px] sm:py-[30px] md:px-[30px]">
          <h2 className="font-serif text-[34px] leading-none tracking-[-1.5px] sm:text-[38px]">
            Documentation
          </h2>
        </div>

        {/* GALLERY */}
        <div className="space-y-[12px] px-[18px] py-[18px] sm:px-[28px] sm:py-[24px] md:px-[30px]">

          {images.map((image, index) => {
            // Setiap 3 gambar:
            // gambar pertama = full width
            // gambar kedua + ketiga = 2 columns
            if (index % 3 === 0) {
              return (
                <DocumentationImage
                  key={`${image.src}-${index}`}
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[16/8]"
                />
              );
            }

            // Gambar kedua dan ketiga masuk ke row
            if (index % 3 === 1) {
              const nextImage = images[index + 1];

              return (
                <div
                  key={`${image.src}-${index}`}
                  className="grid grid-cols-1 gap-[12px] md:grid-cols-2"
                >
                  <DocumentationImage
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3]"
                  />

                  {nextImage && (
                    <DocumentationImage
                      src={nextImage.src}
                      alt={nextImage.alt}
                      className="aspect-[4/3]"
                    />
                  )}
                </div>
              );
            }

            // index % 3 === 2 sudah dirender
            // bersama gambar sebelumnya
            return null;
          })}

        </div>

        {/* BOTTOM BORDER */}
        <div className="border-b border-black/[0.12]" />
      </div>
    </section>
  );
}

function DocumentationImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[16px] bg-[#eee] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:768px) calc(100vw - 84px),1140px"
        className="object-cover transition-transform duration-500 hover:scale-[1.015]"
      />
    </div>
  );
}