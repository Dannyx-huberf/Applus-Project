import { useState, useRef, useEffect, useCallback } from "react";
import { galleryImages } from "@/data/gallery"; // <-- Update this path to where your gallery images data is saved
import Reveal from "../animations/Reveal"; // <-- Update this path to where your Reveal component is saved

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Checks current scroll position so we know which arrows to show
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

  // Scrolls by roughly one card's width in either direction
  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild;
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-20 bg-[#0b0f14] text-white">
      <div className="container-custom">

        {/* Heading Wrapped in Reveal */}
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">
              Project Gallery
            </h2>
            <p className="text-white/60 mt-4 text-sm md:text-base">
              A glimpse into our crafted living spaces
            </p>
          </div>
        </Reveal>

        {/*
          Mobile (default): horizontal scroll-snap row, each item a fixed
          width with a partial peek of the next card so it reads as "swipe me".
          md and up: switches back to a standard grid (arrows hidden there
          since the grid doesn't scroll).
        */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="
              flex md:grid
              md:grid-cols-3
              gap-4 md:gap-6
              overflow-x-auto md:overflow-visible
              snap-x snap-mandatory md:snap-none
              -mx-4 px-4 md:mx-0 md:px-0
              pb-4 md:pb-0
              scrollbar-hide
            "
          >
          {galleryImages.map((item, i) => (
            /* Wrap each grid item in Reveal.
              The delay={i * 0.15} creates a beautiful staggered cascade effect!
            */
            <Reveal
              key={i}
              delay={i * 0.15}
              className="shrink-0 w-[78%] sm:w-[55%] md:w-auto snap-start"
            >
              <div
                className={`relative overflow-hidden group cursor-pointer h-full rounded-md md:rounded-none ${
                  item.type === "video"
                    ? "ring-1 ring-[#1E5712]/0 hover:ring-[#1E5712]/70 transition-shadow duration-500"
                    : ""
                }`}
                onClick={() => setSelectedItem(item)} // Open Lightbox
              >
                {item.type === "video" ? (
                  <>
                    {item.poster ? (
                      <img
                        src={item.poster}
                        alt={item.title}
                        className="h-64 md:h-80 w-full object-cover transform group-hover:scale-110 transition duration-700"
                      />
                    ) : (
                      // No poster image available — render the video itself,
                      // paused, muted, showing its first frame as the thumbnail.
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-64 md:h-80 w-full object-cover transform group-hover:scale-110 transition duration-700"
                      />
                    )}

                    {/* Green-tinted wash so video tiles read differently from photo tiles at a glance */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14]/90 via-[#1E5712]/15 to-transparent" />

                    {/* Pulsing ring behind the play button — the "crazy" bit */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="absolute w-16 h-16 rounded-full bg-[#1E5712]/40 animate-ping" />
                      <span className="absolute w-14 h-14 rounded-full border border-white/30 group-hover:scale-125 transition duration-500" />
                      <div className="relative w-14 h-14 rounded-full bg-[#1E5712] group-hover:bg-[#26781a] shadow-[0_0_25px_rgba(30,87,18,0.65)] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <svg
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6 ml-0.5"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* "VIDEO" tag, top-left, like a badge */}
                    <span
                      className="
                        absolute top-3 left-3
                        text-[10px] font-medium uppercase tracking-[0.2em]
                        bg-[#1E5712] text-white
                        px-2.5 py-1 rounded-sm
                      "
                    >
                      ▶ Video
                    </span>
                  </>
                ) : (
                  <>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-64 md:h-80 w-full object-cover transform group-hover:scale-105 group-hover:animate-shake-once transition duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                  </>
                )}

                {/* Title */}
                <p className="absolute bottom-4 left-4 text-white text-sm tracking-wide opacity-80">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
          </div>

          {/* Left arrow — hidden on desktop (grid doesn't scroll) and when at the start */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll gallery left"
              className="
                md:hidden
                absolute left-1 top-1/2 -translate-y-1/2 z-10
                w-9 h-9 rounded-full
                bg-black/60 hover:bg-black/80
                flex items-center justify-center
                transition
              "
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}

          {/* Right arrow — hidden on desktop (grid doesn't scroll) and when at the end */}
          {canScrollRight && (
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Scroll gallery right"
              className="
                md:hidden
                absolute right-1 top-1/2 -translate-y-1/2 z-10
                w-9 h-9 rounded-full
                bg-black/60 hover:bg-black/80
                flex items-center justify-center
                transition
              "
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {/* Mobile-only scroll hint */}
        <p className="md:hidden text-center text-white/40 text-xs mt-3 tracking-wide">
          Swipe or tap the arrows to see more
        </p>

      </div>

      {/* Pop-out Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={() => setSelectedItem(null)} // Close when clicking backdrop
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light focus:outline-none transition z-50"
            onClick={() => setSelectedItem(null)}
          >
            ✕
          </button>

          {/* Wrapper to prevent click-through closing on the image itself */}
          <div
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.src}
                poster={selectedItem.poster || undefined}
                controls
                audio="muted"
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

            {/* Lightbox Caption */}
            <p className="mt-4 text-center text-white/90 tracking-wide text-base md:text-lg font-light">
              {selectedItem.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}