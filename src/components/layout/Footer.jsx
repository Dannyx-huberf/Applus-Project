import logo from "@/assets/images/Aplogo1.png";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f14]">
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Brand / Logo */}
          <div className="lg:col-span-5">
            <img
              src={logo}
              alt="Applus Projects Logo"
              className="h-12 w-auto opacity-90"
            />

            <p className="mt-8 text-white/60 max-w-md leading-relaxed">
              Building smart spaces for better living through innovative,
              adaptable and future-ready developments.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm tracking-[0.3em] text-white/70 mb-8">
              NAVIGATION
            </h4>

            <div className="space-y-4 text-white/60">
              <a href="#about" className="block hover:text-white transition">
                About
              </a>
              <a href="#gallery" className="block hover:text-white transition">
                Gallery
              </a>
              <a href="#services" className="block hover:text-white transition">
                Services
              </a>
              <a href="#contact" className="block hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact + Offices */}
          <div className="lg:col-span-4">
            <h4 className="text-sm tracking-[0.3em] text-white/70 mb-8">
              CONTACT
            </h4>

            <div className="space-y-6 text-white/60 text-sm">
              <div>
                <p className="text-white/80">Phone</p>
                <p>+234 814 0540 313</p>
                <p>+234 909 685 4184</p>
              </div>

              <div>
                <p className="text-white/80">Email</p>
                <p>info@applusprojects.com</p>
              </div>


              {/* Office Locations */}
              <div className="pt-4 border-t border-white/10 space-y-5">

                <div>
                  <p className="text-white/80">Lagos Office</p>
                  <p className="leading-relaxed">
                    E33 Gat Oboh Drive, Millennium Homes Estate, Oniru, Lagos State, Nigeria
                  </p>
                </div>

                <div>
                  <p className="text-white/80">Benin Office</p>
                  <p className="leading-relaxed">
                    13 Ajayi Street, off Upper Mission Road, New Benin, Benin City, Edo State, Nigeria
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Applus Projects. All Rights Reserved.</p>

          <p className="tracking-[0.3em]">
            DESIGN • BUILD • DELIVER
          </p>
        </div>
      </div>
    </footer>
  );
}