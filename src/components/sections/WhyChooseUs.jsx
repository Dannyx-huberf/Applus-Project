import Reveal from "@/components/animations/Reveal";
import {
  Building2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Building2,
    number: "01",
    title: "Bespoke Developments",
    description:
      "Every project is thoughtfully designed to maximize functionality, comfort, and modern living requirements.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Future-Ready Spaces",
    description:
      "Our developments are adaptable and upgradeable, allowing homeowners to evolve their spaces as needs change.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality & Reliability",
    description:
      "We maintain uncompromising standards in planning, construction, and project delivery.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Strong Investment Value",
    description:
      "Properties are strategically developed to deliver long-term value and sustainable returns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-28 md:py-40 bg-[#030504]"
    >
      {/* Subtle radial glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.07)_0%,transparent_70%)]"
      />

      {/* Soft diagonal grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
      />

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
        {/* ── HEADLINE BLOCK ── */}
        <Reveal>
          <div className="grid md:grid-cols-[1fr_auto] md:items-end gap-8 mb-24 md:mb-32">
            <div>
              <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/70 mb-6">
                Why Choose APDC
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white">
                Creating value
                <br />
                <span className="font-semibold text-[#8ddc6e]">
                  beyond construction
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-base text-white/50 leading-relaxed md:text-right">
              We don&apos;t just build structures — we craft enduring assets that
              shape lifestyles and communities.
            </p>
          </div>
        </Reveal>

        {/* ── REASONS GRID (2x2 on desktop, stack on mobile) ── */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-24 md:mb-32">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.1}>
                <div className="group relative p-8 md:p-10 bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.12] transition-all duration-500">
                  {/* Top accent line that expands on hover */}
                  <div className="absolute top-0 left-0 h-px w-12 bg-[#8ddc6e]/40 group-hover:w-full transition-all duration-700 ease-out" />

                  <div className="flex items-start gap-6">
                    {/* Icon in a soft glow circle */}
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-white/[0.08] bg-white/[0.02] group-hover:border-[#8ddc6e]/30 transition-colors duration-500">
                      <Icon className="w-5 h-5 text-[#8ddc6e]/80" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <span className="text-[11px] font-mono tracking-[0.2em] text-white/25 group-hover:text-[#8ddc6e]/60 transition-colors">
                          {reason.number}
                        </span>
                        <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-[#8ddc6e] transition-colors duration-300">
                          {reason.title}
                        </h3>
                      </div>
                      <p className="text-white/45 text-sm leading-7 group-hover:text-white/65 transition-colors duration-300">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ── BOTTOM STATEMENT ── */}
        <Reveal delay={0.5}>
          <div className="relative border border-white/[0.08] backdrop-blur-xl bg-black/40">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#8ddc6e]/60" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#8ddc6e]/60" />

            <div className="p-10 md:p-16 max-w-4xl mx-auto text-center">
              <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#8ddc6e]">
                Our Commitment
              </span>
              <h3 className="mt-6 text-3xl md:text-5xl font-light leading-tight text-white">
                Building communities.
                <br />
                <span className="font-semibold text-[#8ddc6e]">Creating legacies.</span>
              </h3>
              <p className="mt-8 text-white/50 leading-8 text-sm md:text-base max-w-2xl mx-auto">
                At APDC, every project is a promise — of quality that endures, of spaces
                that adapt, and of investments that grow. We don’t just construct; we
                cultivate lasting value for generations.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}