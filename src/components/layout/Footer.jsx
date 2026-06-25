import logo from "@/assets/images/Aplogo1.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#030504]">
      {/* ── Subtle atmospheric glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.04)_0%,transparent_70%)]"
      />
      {/* ── Soft grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
      />
      {/* ── Faint “A” watermark (bottom‑right) ── */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-10 -right-8 text-[300px] font-black leading-none text-white/[0.02]"
        style={{ fontFamily: "sans-serif" }}
      >
        A
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20 py-24 md:py-28">
        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img
              src={logo}
              alt="Applus Projects Logo"
              className="h-10 md:h-12 w-auto opacity-90"
            />
            <p className="mt-8 text-white/40 leading-relaxed max-w-md text-sm md:text-base">
              Building smart spaces for better living through innovative,
              adaptable, and future‑ready developments.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/70 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4 text-white/50 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#gallery", label: "Gallery" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative inline-block hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#8ddc6e]/50 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Offices */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/70 mb-8">
              Contact
            </h4>

            <div className="space-y-6 text-white/50 text-sm">
              <div>
                <p className="text-white/60 font-medium mb-1">Phone</p>
                <a
                  href="tel:+2348140540313"
                  className="block hover:text-white transition-colors"
                >
                  +234 814 0540 313
                </a>
                <a
                  href="tel:+2349096854184"
                  className="block hover:text-white transition-colors"
                >
                  +234 909 685 4184
                </a>
              </div>

              <div>
                <p className="text-white/60 font-medium mb-1">Email</p>
                <a
                  href="mailto:info@applusprojects.com"
                  className="hover:text-white transition-colors"
                >
                  info@applusprojects.com
                </a>
              </div>

              {/* Office locations */}
              <div className="pt-6 border-t border-white/[0.06] space-y-5">
                <div>
                  <p className="text-white/60 font-medium mb-1">Lagos Office</p>
                  <p className="leading-relaxed text-white/40">
                    E33 Gat Oboh Drive, Millennium Homes Estate, Oniru, Lagos State, Nigeria
                  </p>
                </div>
                <div>
                  <p className="text-white/60 font-medium mb-1">Benin Office</p>
                  <p className="leading-relaxed text-white/40">
                    13 Ajayi Street, off Upper Mission Road, New Benin, Benin City, Edo State, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>© 2026 Applus Projects. All Rights Reserved.</p>
          <p className="font-mono tracking-[0.3em] uppercase text-[#8ddc6e]/50">
            Design · Build · Deliver
          </p>
        </div>
      </div>
    </footer>
  );
}