import Reveal from "@/components/animations/Reveal";
import AboutSlider from "@/components/about/AboutSlider";
import { coreValues } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 md:py-40 bg-white"
    >
      {/* ── Background atmosphere (identical to Gallery) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238ddc6e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.15)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* ── Left content ── */}
          <div>
            <Reveal>
              <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e] mb-6">
                About Applus Projects
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-gray-900">
                Building smart spaces
                <br />
                <span className="font-semibold text-[#8ddc6e]">
                  for better living
                </span>
              </h2>

              <p className="mt-8 text-gray-500 leading-relaxed max-w-xl">
                Applus Properties and Development Company Limited (APDC), also
                known as Applus Projects, develops bespoke housing and property
                solutions tailored to diverse budgets, lifestyles, and future
                needs.
              </p>
              <p className="mt-5 text-gray-500 leading-relaxed max-w-xl">
                We create thoughtfully designed living spaces that maximize
                functionality, comfort, and efficient use of space. Every
                development is built with adaptability in mind, allowing
                homeowners to upgrade, expand, and evolve their properties as
                life changes.
              </p>
            </Reveal>

            {/* ── Core Values – card style identical to Gallery cards ── */}
            <div className="grid md:grid-cols-2 gap-5 mt-14">
              {coreValues.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.15}>
                  <div
                    className="
                      group relative
                      bg-white border border-gray-100
                      rounded-lg md:rounded-none
                      shadow-sm hover:shadow-2xl
                      transition-all duration-700 ease-out
                      hover:-translate-y-2 hover:border-[#8ddc6e]/40
                      p-6
                    "
                  >
                    <h3 className="text-gray-900 text-lg font-medium mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Right – Slideshow ── */}
          <Reveal delay={0.2}>
            <AboutSlider />
          </Reveal>
        </div>
      </div>
    </section>
  );
}