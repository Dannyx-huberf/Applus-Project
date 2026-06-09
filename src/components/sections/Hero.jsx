import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import heroImage1 from "@/assets/images/hero.jpg";
import heroImage2 from "@/assets/images/hero2.jpg";
import heroImage3 from "@/assets/images/hero3.jpg";

const images = [heroImage1, heroImage2, heroImage3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Applus Projects"
            className="h-full w-full object-cover absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-[#063406]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="
          container-custom
          min-h-screen
          flex items-center justify-center
          pt-28 md:pt-0
        ">

          <div className="max-w-5xl mx-auto text-center">

            {/* LABEL */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[0.45em] text-white text-xs md:text-sm"
            >
              APPLUS PROJECTS
            </motion.span>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                mt-6
                text-4xl md:text-7xl lg:text-8xl
                font-heading font-light
                leading-[0.95]
                tracking-tight
              "
            >
              Building Smart Spaces
              <br />
              For Better Living
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-6 md:mt-8
                text-white/70
                text-sm md:text-xl
                max-w-3xl mx-auto
                leading-relaxed md:leading-loose
              "
            >
              Bespoke housing and property solutions designed for modern lifestyles,
              efficient living, adaptability, and long-term value.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mt-8 md:mt-10"
            >
              <Button
  size="lg"
  className="rounded-none bg-[#1E5712] hover:bg-[#063406] text-white px-8 h-12"
  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
>
  Explore Developments
</Button>

              <Button
  size="lg"
  variant="outline"
  className="rounded-none border-white/30 text-white hover:bg-white/10 h-12"
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
>
  Book Inspection
</Button>
            </motion.div>

            {/* VALUES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="
                mt-12 md:mt-16
                flex justify-center gap-6 md:gap-8
                flex-wrap
                text-[10px] md:text-xs
                uppercase tracking-[0.3em]
                text-white/50
              "
            >
              <span>Innovative</span>
              <span>Adaptable</span>
              <span>Future-Ready</span>
              <span>Sustainable</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}