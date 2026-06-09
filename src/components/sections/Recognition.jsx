import Reveal from "@/components/animations/Reveal";
import heroImage from "@/assets/images/Aplogo11.png";
import {
  Trophy,
  Award,
  Building2,
  Landmark,
} from "lucide-react";

const recognitions = [
  {
    year: "2025",
    title: "Best Residential Development",
    description:
      "Recognized for delivering innovative and future-ready residential communities.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "Excellence In Property Development",
    description:
      "Honoured for maintaining exceptional standards in design and project delivery.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Landmark Project Completion",
    description:
      "Successfully delivered a flagship mixed-use development ahead of schedule.",
    icon: Building2,
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description:
      "Recognized for quality craftsmanship, innovation, and client satisfaction.",
    icon: Landmark,
  },
];

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="py-32 bg-gradient-to-b from-white to-[#f8faf8] relative overflow-hidden"
    >
       <img
              src={heroImage}
              alt=""
              className="absolute top-10 -left-16 w-96 h-96 opacity-[0.03] pointer-events-none select-none md:w-[500px] md:h-[500px] rotate-12 object-contain"
            />
      
            {/* Middle Right Watermark */}
            <img
              src={heroImage}
              alt=""
              className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[400px] h-[400px] opacity-[0.02] pointer-events-none select-none md:w-[600px] md:h-[600px] -rotate-12 object-contain"
            />
      
            {/* Bottom Left Watermark */}
            <img
              src={heroImage}
              alt=""
              className="absolute bottom-10 -left-20 w-80 h-80 opacity-[0.03] pointer-events-none select-none md:w-[450px] md:h-[450px] rotate-45 object-contain"
            />
      <div className="container-custom">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="uppercase tracking-[0.35em] text-sm text-[#1E5712]">
              Recognition
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-display leading-tight text-[#1E5712]">
              A Legacy Of Excellence
            </h2>

            <p className="mt-6 text-black/70 leading-8">
              Through innovation, craftsmanship,
              and a commitment to exceptional living
              experiences, we continue to earn trust
              and recognition within the real estate
              industry.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-24 max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1E5712]/30 to-transparent hidden md:block" />

          {recognitions.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <Reveal
                key={item.year}
                delay={index * 0.15}
              >
                <div
                  className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                    !isLeft
                      ? "md:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  <div
                    className={
                      isLeft
                        ? "md:text-right"
                        : "md:text-left"
                    }
                  >
                    <div
                      className="
                        p-8
                        rounded-3xl
                        bg-[#1E5712]/[0.03]
                        border
                        border-[#1E5712]/10
                        transition-all
                        duration-500
                        hover:bg-[#1E5712]/[0.05]
                        hover:border-[#1E5712]/20
                        hover:-translate-y-1
                        hover:shadow-[0_15px_40px_rgba(30,87,18,0.08)]
                      "
                    >
                      <span className="text-[#1E5712] text-sm tracking-widest font-medium">
                        {item.year}
                      </span>

                      <h3 className="mt-3 text-2xl font-display text-[#1E5712]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-black/65 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div />

                  {/* Timeline Node */}
                  <div
                    className="
                      hidden
                      md:flex
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-10
                      w-14
                      h-14
                      rounded-full
                      bg-white
                      border
                      border-[#1E5712]/20
                      shadow-lg
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={24}
                      className="text-[#1E5712]"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}