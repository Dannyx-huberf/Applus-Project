import heroImage from "@/assets/images/Aplogo11.png";
import Reveal from "@/components/animations/Reveal";
import ServiceBlock from "@/components/services/ServiceBlock";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-28 md:py-40 bg-[#030504] text-white"
    >
      {/* ── TOP DIVIDER: wavy line ── */}
      <div className="absolute top-0 inset-x-0 pointer-events-none z-10" aria-hidden>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C320,140 640,0 960,60 C1280,120 1440,20 1440,20 L1440,0 L0,0 Z"
            fill="none"
            stroke="#8ddc6e"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          <path
            d="M0,60 C320,140 640,0 960,60 C1280,120 1440,20 1440,20"
            fill="none"
            stroke="#8ddc6e"
            strokeOpacity="0.05"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* ── BOTTOM DIVIDER: mirrored wavy line ── */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10" aria-hidden>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flipped wave (curves upward at edges) for a symmetric close */}
          <path
            d="M0,60 C320,-20 640,120 960,60 C1280,0 1440,100 1440,100 L1440,120 L0,120 Z"
            fill="none"
            stroke="#8ddc6e"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          <path
            d="M0,60 C320,-20 640,120 960,60 C1280,0 1440,100 1440,100"
            fill="none"
            stroke="#8ddc6e"
            strokeOpacity="0.05"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* ── Atmospheric glow and grid (identical to other dark sections) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.06)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
      />

      {/* --- Watermark Logos (kept, very faint) --- */}
      <img
        src={heroImage}
        alt=""
        className="absolute top-10 -left-16 w-96 h-96 opacity-[0.02] pointer-events-none select-none md:w-[500px] md:h-[500px] rotate-12 object-contain"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[400px] h-[400px] opacity-[0.02] pointer-events-none select-none md:w-[600px] md:h-[600px] -rotate-12 object-contain"
      />
      <img
        src={heroImage}
        alt=""
        className="absolute bottom-10 -left-20 w-80 h-80 opacity-[0.02] pointer-events-none select-none md:w-[450px] md:h-[450px] rotate-45 object-contain"
      />

      <div className="container-custom relative z-20 px-6 md:px-12 lg:px-20">
        {/* ── Heading (matches the typographic system) ── */}
        <Reveal>
          <div className="max-w-3xl mb-28 md:mb-36">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/70 mb-6">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white">
              Creating value
              <br />
              <span className="font-semibold text-[#8ddc6e]">
                through thoughtful development
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Services list */}
        <div className="space-y-32 md:space-y-40">
          {services.map((service, index) => (
  <ServiceBlock
    key={service.id}
    service={service}
    reverse={index % 2 !== 0}
    index={index}
  />
))}
        </div>
      </div>
    </section>
  );
}