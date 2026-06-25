import Reveal from "@/components/animations/Reveal";

export default function ServiceBlock({ service, reverse = false, index }) {
  return (
    <div
      className={`
        grid lg:grid-cols-2
        items-stretch
        gap-0
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* ── Image panel ── */}
      <Reveal
        delay={0.1}
        className="relative overflow-hidden group cursor-pointer h-[380px] md:h-[550px] lg:h-full"
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        {/* Green overlay on hover */}
        <div className="absolute inset-0 bg-[#8ddc6e]/0 group-hover:bg-[#8ddc6e]/10 transition-colors duration-700" />
        {/* Bottom fade for depth */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#030504]/80 to-transparent pointer-events-none" />
      </Reveal>

      {/* ── Text panel (glass card) ── */}
      <Reveal
        delay={0.2}
        className={`
          relative
          flex items-center
          p-8 md:p-12 lg:p-16
          -mt-16 lg:mt-0
          z-10
          ${reverse ? "lg:mr-[-4rem]" : "lg:ml-[-4rem]"}
        `}
      >
        <div className="w-full backdrop-blur-xl bg-black/60 border border-white/[0.08] p-8 md:p-10 hover:border-[#8ddc6e]/20 transition-colors duration-500 relative">
          {/* Big transparent number behind the title */}
          <span className="absolute top-4 right-6 text-[8rem] md:text-[10rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Eyebrow */}
          <span className="relative z-10 text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/70">
            Service
          </span>

          {/* Title */}
          <h3 className="relative z-10 mt-4 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white">
            {service.title}
          </h3>

          {/* Decorative green line */}
          <div className="relative z-10 mt-6 mb-6 w-16 h-px bg-[#8ddc6e]/50" />

          {/* Description */}
          <p className="relative z-10 text-white/50 leading-relaxed max-w-xl">
            {service.description}
          </p>
        </div>
      </Reveal>
    </div>
  );
}