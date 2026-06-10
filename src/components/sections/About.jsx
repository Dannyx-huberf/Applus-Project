import Reveal from "@/components/animations/Reveal";
import AboutSlider from "@/components/about/AboutSlider";
import {coreValues} from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <Reveal>
              <span
                className="
                  uppercase
                  tracking-[0.35em]
                  text-sm
                  text-[#1E5712]
                "
              >
                About Applus Projects
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  md:text-6xl
                  font-display
                  leading-tight
                  text-[#1E5712]
                "
              >
                Building Smart Spaces
                <br />
                For Better Living.
              </h2>

              <p
                className="
                  mt-8
                  text-black/70
                  leading-8
                "
              >
                Applus Properties and Development
                Company Limited (APDC), also known as
                Applus Projects, develops bespoke
                housing and property solutions tailored
                to diverse budgets, lifestyles, and
                future needs.
              </p>

              <p
                className="
                  mt-6
                  text-black/70
                  leading-8
                "
              >
                We create thoughtfully designed living
                spaces that maximize functionality,
                comfort, and efficient use of space.
                Every development is built with
                adaptability in mind, allowing
                homeowners to upgrade, expand, and
                evolve their properties as life
                changes.
              </p>
            </Reveal>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {coreValues.map((value, index) => (
                <Reveal
                  key={value.title}
                  delay={index * 0.1}
                >
                  <div
                    className="
                      p-8
                      h-full
                      rounded-3xl
                      bg-[#1E5712]/[0.03]
                      border
                      border-[#1E5712]/10
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      hover:bg-[#1E5712]/[0.05]
                      hover:border-[#1E5712]/20
                      hover:-translate-y-1
                      hover:shadow-[0_15px_40px_rgba(30,87,18,0.08)]
                    "
                  >
                    <h3
                      className="
                        text-[#1E5712]
                        text-lg
                        font-semibold
                        mb-3
                      "
                    >
                      {value.title}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-black/65
                        leading-7
                      "
                    >
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Slideshow */}
          <Reveal delay={0.2}>
            <AboutSlider />
          </Reveal>
        </div>
      </div>
    </section>
  );
}