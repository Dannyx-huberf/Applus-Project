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
    title: "Bespoke Developments",
    description:
      "Every project is thoughtfully designed to maximize functionality, comfort, and modern living requirements.",
  },
  {
    icon: Sparkles,
    title: "Future-Ready Spaces",
    description:
      "Our developments are adaptable and upgradeable, allowing homeowners to evolve their spaces as needs change.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "We maintain uncompromising standards in planning, construction, and project delivery.",
  },
  {
    icon: TrendingUp,
    title: "Strong Investment Value",
    description:
      "Properties are strategically developed to deliver long-term value and sustainable returns.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="
        relative
        overflow-hidden
        py-32
        bg-gradient-to-b
        from-[#1E5712]
        via-[#2f6b22]
        via-[35%]
        to-white
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.35em] text-sm text-white/80">
              Why Choose APDC
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-display leading-tight text-white">
              Creating Value Beyond
              Construction
            </h2>

            <p className="mt-6 text-white/70 leading-8">
              We do more than develop properties.
              We create spaces that inspire
              lifestyles, support growth, and
              deliver lasting value for homeowners
              and investors alike.
            </p>
          </div>
        </Reveal>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal
                key={reason.title}
                delay={index * 0.1}
              >
                <div
                  className="
                    p-8
                    h-full
                    rounded-3xl
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/15
                    transition-all
                    duration-500
                    hover:bg-white/15
                    hover:border-white/20
                    hover:-translate-y-2
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-white/10
                      border
                      border-white/20
                    "
                  >
                    <Icon
                      size={24}
                      className="text-white"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-display text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-white/75 leading-7">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Premium Statement */}
        <Reveal delay={0.4}>
          <div className="mt-28">
            <div
              className="
                relative
                overflow-hidden
                p-12
                md:p-16
                text-center
                max-w-5xl
                mx-auto
                rounded-[2rem]
                bg-white
                border
                border-[#1E5712]/10
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              "
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-[#1E5712]" />

              <span className="uppercase tracking-[0.35em] text-xs text-[#1E5712]">
                Our Commitment
              </span>

              <h3 className="mt-6 text-3xl md:text-5xl font-display leading-tight text-[#1E5712]">
                Building Communities.
                <br />
                Creating Legacies.
              </h3>

              <p className="mt-8 text-black/70 leading-8 max-w-3xl mx-auto">
                At APDC, every development is guided
                by a commitment to exceptional
                design, sustainable value, and
                spaces that enrich the lives of
                those who live, work, and invest in
                them. We believe great developments
                are not simply built — they are
                carefully crafted to stand the test
                of time.
              </p>

              <div className="flex justify-center mt-10">
                <div className="w-24 h-px bg-[#1E5712]/30" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}