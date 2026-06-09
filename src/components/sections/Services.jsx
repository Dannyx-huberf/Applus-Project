import heroImage from "@/assets/images/Aplogo11.png";
import Reveal from "@/components/animations/Reveal";
import ServiceBlock from "@/components/services/ServiceBlock";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-32 bg-white"
    >
      {/* --- Background Watermark Logos --- */}
      {/* Top Left Watermark */}
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
      {/* --------------------------------- */}

      <div className="container-custom relative z-10">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl mb-24">
            <span
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-[#1E5712]
              "
            >
              Our Expertise
            </span>

            <h2
              className="
                mt-6
                text-4xl
                md:text-6xl
                font-display
                text-[#1E5712]
              "
            >
              Creating Value Through Thoughtful Development.
            </h2>
          </div>
        </Reveal>

        {/* Services */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceBlock
              key={service.id}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}