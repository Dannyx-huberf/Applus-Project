import { useState } from "react";
import Reveal from "@/components/animations/Reveal";
import { properties } from "@/data/properties";

const grouped = properties.reduce((acc, prop) => {
  if (!acc[prop.project]) acc[prop.project] = [];
  acc[prop.project].push(prop);
  return acc;
}, {});

function PropertyCard({ property, isOpen, onToggle, onPhotoClick }) {
  const hasPhoto = !!property.image;

  return (
    <div
      className={`
        relative flex flex-col overflow-hidden "
        bg-white/[0.02] backdrop-blur-sm
        border transition-all duration-500
        ${isOpen ? "border-[#8ddc6e]/40" : "border-white/[0.08] hover:border-white/[0.15]"}
      `}
    >
      {/* Unit badge — now in accent green */}
      <span className="absolute top-4 left-4 z-10 text-[10px] font-mono uppercase tracking-[0.22em] bg-[#8ddc6e] text-[#030504] px-3 py-1 rounded-sm">
        {property.badge}
      </span>

      {/* ── Property Photo ── */}
      <div
        className={`relative h-56 md:h-64 overflow-hidden bg-black/50 group ${hasPhoto ? "cursor-zoom-in" : ""}`}
        onClick={() => hasPhoto && onPhotoClick(property)}
      >
        {property.image ? (
          <>
            <img
              src={property.image}
              alt={property.unit}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-md text-white text-xs font-mono tracking-[0.18em] px-4 py-2 border border-white/20">
                ⊕ View Photo
              </span>
            </div>
          </>
        ) : (
          <img
            src={`/src/assets/properties/${property.id}.jpg`}
            alt={property.unit}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
        )}
        {/* Fallback */}
        <div className="hidden w-full h-full items-center justify-center bg-black/60 text-white/20 text-sm tracking-widest uppercase">
          Photo coming soon
        </div>
        {/* Gradient overlay at bottom to keep text readable */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 px-6 pt-4 pb-6">
        <h3 className="text-xl md:text-2xl font-light tracking-tight text-white mb-1">
          {property.unit}
        </h3>
        <p className="text-white/40 text-sm mb-5 leading-relaxed">
          {property.tagline}
        </p>

        {/* Toggle Button — outlined style matching other CTAs */}
        <button
          onClick={onToggle}
          className="
            flex items-center justify-between w-full
            text-sm font-mono uppercase tracking-[0.15em]
            border border-white/[0.08] hover:border-[#8ddc6e]/40
            px-5 py-3 transition-colors duration-300
            text-white/60 hover:text-white
          "
        >
          <span>{isOpen ? "Hide Features" : "View Features"}</span>
          <span className={`text-[#8ddc6e] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>

        {/* Collapsible Features Panel */}
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-[600px] opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"}
          `}
        >
          <div className="grid grid-cols-2 gap-3">
            {property.features.map((feat) => (
              <div
                key={feat.label}
                className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] px-3 py-3"
              >
                <span className="text-lg shrink-0">{feat.icon}</span>
                <span className="text-white/60 text-sm leading-tight">{feat.value}</span>
              </div>
            ))}
          </div>

          {/* CTA — primary accent button */}
          <button
            className="mt-5 w-full h-11 bg-[#8ddc6e] text-[#030504] font-medium text-sm uppercase tracking-[0.18em] hover:bg-[#7bc85d] transition-colors duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Inspection
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Properties() {
  const [openId, setOpenId] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id= "properties" className="relative overflow-hidden py-28 md:py-40  bg-[#030504] ">
      {/* ── Background atmosphere (identical to WhyChooseUs / Contact) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.06)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
      />

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
        {/* ── Heading (matches the other sections' layout) ── */}
        <Reveal>
          <div className="text-center mb-24 md:mb-32">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/70 mb-6">
              Our Properties
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white">
              Thoughtfully designed
              <br />
              <span className="font-semibold text-[#8ddc6e]">
                apartments ready for you
              </span>
            </h2>
          </div>
        </Reveal>

        {/* ── Property Groups ── */}
        <div className="flex flex-col gap-20">
          {Object.entries(grouped).map(([projectName, units], gi) => (
            <Reveal key={projectName} delay={gi * 0.1}>
              {/* Project label header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-px bg-[#8ddc6e]/70" />
                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]">
                  {projectName}
                </h3>
                <span className="flex-1 h-px bg-white/[0.08]" />
                <span className="text-white/20 text-xs font-mono">
                  {units.length} {units.length === 1 ? "unit type" : "unit types"}
                </span>
              </div>

              {/* Cards grid */}
              <div className={`grid gap-8 ${units.length > 1 ? "md:grid-cols-2" : "grid-cols-1 max-w-xl"}`}>
                {units.map((property, i) => (
                  <Reveal key={property.id} delay={i * 0.15}>
                    <PropertyCard
                      property={property}
                      isOpen={openId === property.id}
                      onToggle={() => toggle(property.id)}
                      onPhotoClick={setLightboxItem}
                    />
                  </Reveal>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal (unchanged dark overlay) ── */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxItem(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl font-light focus:outline-none transition z-50"
            onClick={() => setLightboxItem(null)}
          >
            ✕
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxItem.image}
              alt={lightboxItem.unit}
              className="max-w-full max-h-[78vh] object-contain rounded shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white/90 tracking-wide text-base md:text-lg font-light">
                {lightboxItem.unit}
              </p>
              <p className="text-[#8ddc6e] text-xs font-mono uppercase tracking-[0.2em] mt-1">
                {lightboxItem.project}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}