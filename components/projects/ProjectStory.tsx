type ProjectStoryProps = {
  paragraphs: string[];
  services: string[];
  tools: string[];
};

export default function ProjectStory({
  paragraphs,
  services,
  tools,
}: ProjectStoryProps) {
  return (
    <section className="relative overflow-hidden">
      
      {/* CONTAINER */}
      <div className="relative mx-auto w-[calc(100%-48px)] max-w-[1200px] border-x border-black/[0.08] bg-[#fafafa]">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          
          {/* STORY */}
          <div className="border-b border-black/[0.12] px-[28px] py-[30px] sm:px-[38px] sm:py-[36px] md:border-b-0 md:border-r md:px-[30px] lg:px-[30px]">
            <h2 className="font-serif text-[34px] leading-none tracking-[-1.5px] sm:text-[38px]">
              Long story short
            </h2>

            <div className="mt-[30px] max-w-[800px] space-y-[24px]">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[15px] leading-[1.55] tracking-[-.15px] text-black/85 sm:text-[16px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* SERVICES + TOOLS */}
          <div className="px-[28px] py-[30px] sm:px-[38px] sm:py-[36px] md:px-[30px] lg:px-[30px]">
            
            {/* SERVICES */}
            <div>
              <h2 className="font-serif text-[34px] leading-none tracking-[-1.5px]">
                Services
              </h2>

              <div className="mt-[28px] flex flex-wrap gap-[6px]">
                {services.map((service) => (
                  <Tag key={service}>{service}</Tag>
                ))}
              </div>
            </div>

            {/* TOOLS */}
            <div className="mt-[50px]">
              <h2 className="font-serif text-[34px] leading-none tracking-[-1.5px]">
                Tools
              </h2>

              <div className="mt-[28px] flex flex-wrap gap-[6px]">
                {tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BORDER */}
        <div className="border-b border-black/[0.12]" />
      </div>
    </section>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-[9px] border border-black/[0.10] bg-[#f4f4f4] px-[10px] py-[4px] text-[13px] leading-none text-black/80 shadow-[0_1px_1px_rgba(0,0,0,.04)]">
      {children}
    </span>
  );
}