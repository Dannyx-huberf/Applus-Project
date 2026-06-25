import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import heroImage1 from "@/assets/images/hero.jpg";
import heroImage2 from "@/assets/images/hero2.jpg";
import heroImage3 from "@/assets/images/hero3.jpg";

const images = [heroImage1, heroImage2, heroImage3];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto‑slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030504]">
      {/* ── Background slideshow (preserved) ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Applus Projects"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </AnimatePresence>

        {/* Overlays – darker, more refined */}
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-[#030504]/30 to-transparent" />
      </div>

      {/* ── Decorative background elements (matching other dark sections) ── */}
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
      />
      {/* Radial green glow behind headline */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.07)_0%,transparent_70%)] z-10" />
      {/* Faint “A” watermark – top right (echoes WhyChooseUs) */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 -right-10 text-[420px] font-black leading-none text-white/[0.02] z-10"
        style={{ fontFamily: "sans-serif" }}
      >
        A
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 flex min-h-screen items-center justify-center pt-28 md:pt-0">
        <div className="container-custom px-6 md:px-12">
          <div className="mx-auto max-w-5xl text-center">
            {/* Eyebrow – mono, green, like all other sections */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs font-mono uppercase tracking-[0.35em] text-[#8ddc6e]/80"
            >
              Applus Projects
            </motion.span>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-6 text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-white"
            >
              Building smart spaces
              <br />
              <span className="font-semibold text-[#8ddc6e]">
                for better living
              </span>
            </motion.h1>

            {/* Description – softer white, matching the tone */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mx-auto mt-8 max-w-3xl text-white/50 text-base md:text-xl leading-relaxed"
            >
              Bespoke housing and property solutions designed for modern
              lifestyles, efficient living, adaptability, and long‑term value.
            </motion.p>

            {/* Buttons – primary green / secondary outline, aligned with Contact etc. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                className="h-12 rounded-none bg-[#8ddc6e] text-[#030504] font-medium hover:bg-[#7bc85d] transition-colors px-8"
                onClick={() =>
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Developments
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-none border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-colors px-8"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Inspection
              </Button>
            </motion.div>

            {/* Tagline words – same mono, muted green style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-16 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/60"
            >
              <span>Innovative</span>
              <span>Adaptable</span>
              <span>Future‑Ready</span>
              <span>Sustainable</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}