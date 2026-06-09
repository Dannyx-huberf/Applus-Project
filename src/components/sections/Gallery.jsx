import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import Reveal from "../animations/Reveal";// <-- Update this path to where your Reveal component is saved

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((item, i) => (
            /* Wrap each grid item in Reveal. 
              The delay={i * 0.15} creates a beautiful staggered cascade effect!
            */
            <Reveal key={i} delay={i * 0.15}>
              <div
                className="relative overflow-hidden group cursor-pointer h-full"
                onClick={() => setSelectedImage(item)} // Open Lightbox
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-64 md:h-80 w-full object-cover transform group-hover:scale-105 group-hover:animate-shake-once transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                {/* Title */}
                <p className="absolute bottom-4 left-4 text-white text-sm tracking-wide opacity-80">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Pop-out Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)} // Close when clicking backdrop
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light focus:outline-none transition z-50"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          {/* Wrapper to prevent click-through closing on the image itself */}
          <div 
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
            />
            
            {/* Lightbox Caption */}
            <p className="mt-4 text-center text-white/90 tracking-wide text-base md:text-lg font-light">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}