import { useEffect, useState } from "react";
import logoImage from "@/assets/images/Aplogo1.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Properties", href: "#properties" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom h-24 flex items-center justify-between px-6 md:px-12">
        {/* ── Logo ── */}
        <a href="/" className="flex items-center">
          <img
            src={logoImage}
            alt="Applus Projects Logo"
            className="h-5 sm:h-7 md:h-9 w-auto object-contain"
          />
        </a>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-mono uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#8ddc6e] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ── CTA Desktop ── */}
        <div className="hidden lg:block">
          <Button
            className="rounded-none bg-[#8ddc6e] text-[#030504] font-medium hover:bg-[#7bc85d] transition-colors px-8 h-11"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Inspection
          </Button>
        </div>

        {/* ── Mobile Menu ── */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="lg:hidden flex flex-col items-end justify-center gap-1.5 w-8 h-8"
            >
              <span className="block w-7 h-[2px] bg-white" />
              <span className="block w-5 h-[2px] bg-white" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="
              w-[78%] sm:w-[340px] max-w-sm
              bg-[#030504] border-l border-white/[0.08] text-white
              flex flex-col p-0
              [&>button]:text-white/70 [&>button]:hover:text-white
              [&>button]:top-6 [&>button]:right-6
              [&>button]:opacity-100
              [&>button_svg]:w-5 [&>button_svg]:h-5
            "
          >
            {/* Drawer header */}
            <div className="h-24 flex items-center px-8 border-b border-white/[0.08]">
              <img
                src={logoImage}
                alt="Applus Projects Logo"
                className="h-6 w-auto object-contain"
              />
            </div>

            {/* Drawer links */}
            <nav className="flex flex-col px-8 pt-10 gap-1">
              {links.map((link) => (
                <SheetClose asChild key={link.name}>
                  <a
                    href={link.href}
                    className="
                      text-white text-base font-mono uppercase tracking-[0.2em]
                      py-4 border-b border-white/[0.06]
                      opacity-70 hover:opacity-100 hover:text-[#8ddc6e]
                      transition-all
                    "
                  >
                    {link.name}
                  </a>
                </SheetClose>
              ))}
            </nav>

            {/* Drawer CTA */}
            <div className="mt-auto px-8 pb-10 pt-6">
              <SheetClose asChild>
                <Button
                  className="w-full h-12 rounded-none bg-[#8ddc6e] text-[#030504] font-medium hover:bg-[#7bc85d]"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book Inspection
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}