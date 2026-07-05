import Reveal from "@/components/animations/Reveal";
import { founder, staff } from "@/data/Staff";

export default function Staff() {
  return (
    <section id="staff" className="relative overflow-hidden py-28 md:py-40 bg-[#030504] text-white">
      {/* ── Background atmosphere (identical to other dark sections) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.06)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
      />

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
        {/* ── Heading ── */}
        <Reveal>
          <div className="text-center mb-24 md:mb-32">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/70 mb-6">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white">
              The people behind
              <br />
              <span className="font-semibold text-[#8ddc6e]">
                every project we deliver
              </span>
            </h2>
          </div>
        </Reveal>

        {/* ── FOUNDER — featured panel ── */}
        <Reveal>
          <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm mb-32">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#8ddc6e]/60" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#8ddc6e]/60" />

            <div className="grid md:grid-cols-[minmax(0,420px)_1fr]">
              {/* Photo */}
              <div className="relative h-80 sm:h-[420px] md:h-[580px] overflow-hidden">
  <img
    src={founder.image}
    alt={founder.name}
    className="w-full h-full object-cover"
    style={{ objectPosition: founder.imagePosition }}
  />

  <div className="absolute inset-y-0 left-0 w-1.5 bg-[#8ddc6e] hidden md:block" />
  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#030504]/80 to-transparent md:hidden" />
</div>

              {/* Bio */}
              <div className="flex flex-col justify-center p-8 md:p-14">
                <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e] mb-5">
                  <span className="w-6 h-px bg-[#8ddc6e]/60" />
                  Founder
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] mb-7">
                  {founder.role}
                </p>
                <p className="text-white/50 text-base md:text-[17px] leading-relaxed font-light max-w-xl">
                  {founder.bio}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── SUPPORTING STAFF — creative stacked offset cards ── */}
        <div className="flex flex-col gap-6">
          {staff.map((person, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal key={person.name} delay={i * 0.15}>
                <div
                  className={`
                    group relative flex flex-col md:flex-row
                    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                    overflow-hidden border border-white/[0.06]
                    bg-white/[0.02] backdrop-blur-sm
                    hover:border-[#8ddc6e]/30 transition-colors duration-500
                  `}
                >
                  {/* Left/right accent bar */}
                  <div
                    className={`
                      absolute top-0 w-1 h-full bg-[#8ddc6e]/70
                      ${isEven ? "left-0" : "right-0 left-auto"}
                      hidden md:block
                    `}
                  />

                  {/* Ghost number */}
                  <span
                    className={`
                      absolute top-4 text-[96px] font-black leading-none
                      text-white/[0.03] select-none pointer-events-none
                      ${isEven ? "right-6" : "left-6"}
                    `}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Photo */}
                  <div className="relative w-full md:w-64 lg:w-72 shrink-0 h-80 sm:h-96 md:h-auto overflow-hidden bg-[#0a0a0a]">
  <img
    src={person.image}
    alt={person.name}
    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    style={{
      objectPosition: person.imagePosition,
    }}
  />

  <span
    className="
      absolute bottom-3 left-3
      text-[10px] font-mono uppercase tracking-[0.2em]
      bg-[#8ddc6e] text-[#030504]
      px-2.5 py-1
    "
  >
    {person.role}
  </span>
</div>

                  {/* Text */}
                  <div
                    className={`
                      flex flex-col justify-center
                      px-8 py-8 md:py-10
                      ${isEven ? "md:pl-10 md:pr-16" : "md:pr-10 md:pl-16"}
                    `}
                  >
                    <h4 className="text-xl md:text-2xl font-light tracking-tight text-white mb-3">
                      {person.name}
                    </h4>
                    <p className="text-white/40 text-sm md:text-[15px] leading-relaxed font-light max-w-lg">
                      {person.bio}
                    </p>
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