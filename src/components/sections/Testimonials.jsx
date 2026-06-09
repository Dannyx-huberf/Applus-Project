import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-[#0b0f14]">
      <div className="container-custom text-center">
        <Reveal>
          {/* Label */}
          <span className="uppercase tracking-[0.35em] text-sm text-[#1E5712]">
            Client Stories
          </span>

          {/* Testimonial Box */}
          <div className="max-w-5xl mx-auto mt-14 relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <blockquote className="text-3xl md:text-5xl leading-[1.15] font-heading font-light tracking-tight text-white max-w-4xl">
                  “{testimonials[active].quote}”
                </blockquote>

                <div className="mt-10">
                  <h4 className="text-xl text-white">
                    {testimonials[active].name}
                  </h4>

                  <p className="text-white/60 mt-2">
                    {testimonials[active].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-4 mt-14">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`
                  h-1 transition-all duration-500
                  ${
                    active === index
                      ? "w-20 bg-[#1E5712]"
                      : "w-10 bg-white/20"
                  }
                `}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}