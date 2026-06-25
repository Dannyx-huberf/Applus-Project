import { useState, useRef, useEffect, useCallback } from "react";
import { galleryImages } from "@/data/gallery";
import Reveal from "@/components/animations/Reveal";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrowVisibility = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 4
    );
  }, []);

  useEffect(() => {
    updateArrowVisibility();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrowVisibility, { passive: true });
    window.addEventListener("resize", updateArrowVisibility);
    return () => {
      el.removeEventListener("scroll", updateArrowVisibility);
      window.removeEventListener("resize", updateArrowVisibility);
    };
  }, [updateArrowVisibility]);

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-28 md:py-40 bg-white"
    >
      {/* ── Subtle background atmosphere (mirrors dark sections but light) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238ddc6e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Soft green glow near the headline */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.15)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
        {/* ── HEADLINE (matching the previous sections’ typography but dark) ── */}
        <Reveal>
          <div className="text-center mb-20 md:mb-28">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e] mb-6">
              Project Gallery
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-gray-900">
              A glimpse into our
              <br />
              <span className="font-semibold text-[#8ddc6e]">
                crafted living spaces
              </span>
            </h2>
          </div>
        </Reveal>

        {/* ── GALLERY GRID / SCROLL ── */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="
              flex md:grid
              md:grid-cols-3
              gap-6 md:gap-8
              overflow-x-auto md:overflow-visible
              snap-x snap-mandatory md:snap-none
              -mx-4 px-4 md:mx-0 md:px-0
              pb-4 md:pb-0
              scrollbar-hide
            "
          >
            {galleryImages.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.15}
                className="shrink-0 w-[78%] sm:w-[55%] md:w-auto snap-start"
              >
                <div
                  className={`
                    group relative overflow-hidden cursor-pointer
                    bg-white border border-gray-100
                    rounded-lg md:rounded-none
                    shadow-sm hover:shadow-2xl
                    transition-all duration-700 ease-out
                    hover:-translate-y-2 hover:border-[#8ddc6e]/40
                    ${item.type === "video" ? "ring-1 ring-[#8ddc6e]/0 hover:ring-[#8ddc6e]/40" : ""}
                  `}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.type === "video" ? (
                    <>
                      {item.poster ? (
                        <img
                          src={item.poster}
                          alt={item.title}
                          className="h-64 md:h-80 w-full object-cover transform group-hover:scale-110 transition duration-1000 ease-out"
                        />
                      ) : (
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="h-64 md:h-80 w-full object-cover transform group-hover:scale-110 transition duration-1000 ease-out"
                        />
                      )}

                      {/* Light overlay on hover */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

                      {/* Play button with crazy pulse animation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="absolute w-16 h-16 rounded-full bg-[#8ddc6e]/30 animate-ping" />
                        <span className="absolute w-14 h-14 rounded-full border border-white/60 group-hover:scale-125 transition duration-500" />
                        <div className="relative w-14 h-14 rounded-full bg-[#8ddc6e] group-hover:bg-[#7bc85d] shadow-[0_0_25px_rgba(141,220,110,0.65)] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-6 h-6 ml-0.5"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* "Video" badge */}
                      <span className="absolute top-3 left-3 text-[10px] font-medium uppercase tracking-[0.2em] bg-[#8ddc6e] text-white px-2.5 py-1 rounded-sm">
                        ▶ Video
                      </span>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-64 md:h-80 w-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                      />
                      {/* Hover overlay with subtle green tint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-[#8ddc6e]/10 group-hover:to-transparent transition-all duration-500" />
                    </>
                  )}

                  {/* Title always visible */}
                  <p className="absolute bottom-4 left-4 text-gray-800 text-sm font-light tracking-wide bg-white/80 backdrop-blur-sm px-2 py-1 rounded group-hover:bg-white/90 transition">
                    {item.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile scroll arrows – light theme */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll gallery left"
              className="
                md:hidden
                absolute left-1 top-1/2 -translate-y-1/2 z-10
                w-9 h-9 rounded-full
                bg-white/80 backdrop-blur-sm shadow-lg
                flex items-center justify-center
                transition hover:bg-white
              "
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" className="w-4 h-4">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Scroll gallery right"
              className="
                md:hidden
                absolute right-1 top-1/2 -translate-y-1/2 z-10
                w-9 h-9 rounded-full
                bg-white/80 backdrop-blur-sm shadow-lg
                flex items-center justify-center
                transition hover:bg-white
              "
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2" className="w-4 h-4">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {/* Scroll hint – dark text */}
        <p className="md:hidden text-center text-gray-400 text-xs mt-4 tracking-wide">
          Swipe or tap the arrows to see more
        </p>
      </div>

      {/* ── LIGHTBOX (kept dark for focus) ── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light focus:outline-none transition z-50"
            onClick={() => setSelectedItem(null)}
          >
            ✕
          </button>

          <div
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.src}
                poster={selectedItem.poster || undefined}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[75vh] rounded shadow-2xl"
              />
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
              />
            )}
            <p className="mt-4 text-center text-white/90 tracking-wide text-base md:text-lg font-light">
              {selectedItem.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}