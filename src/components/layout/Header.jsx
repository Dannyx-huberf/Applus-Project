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
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom h-24 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src={logoImage}
            alt="APPLUS Logo"
            className="h-5 sm:h-7 md:h-9 w-auto object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-sm uppercase tracking-[0.18em]
                text-white/75 hover:text-white transition-colors
              "
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden lg:block">
          <Button 
  className="rounded-none bg-[#1E5712] hover:bg-[#063406] text-white px-8"
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
>
  Book Inspection
</Button>
        </div>

        {/* MOBILE */}
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

          {/*
            shadcn's SheetContent already renders its own built-in close
            "X" in the top-right corner — that's what was causing the
            double-X. We style that built-in one via [&>button] instead
            of adding a second SheetClose button.
          */}
          <SheetContent
            side="right"
            className="
              w-[78%] sm:w-[340px] max-w-sm
              bg-[#0b0f14] border-l border-white/10 text-white
              flex flex-col p-0
              [&>button]:text-white/70 [&>button]:hover:text-white
              [&>button]:top-6 [&>button]:right-6
              [&>button]:opacity-100
              [&>button_svg]:w-5 [&>button_svg]:h-5
            "
          >
            {/* LOGO IN DRAWER HEADER */}
            <div className="h-24 flex items-center px-8 border-b border-white/10">
              <img
                src={logoImage}
                alt="APPLUS Logo"
                className="h-6 w-auto object-contain"
              />
            </div>

            {/* LINKS */}
            <nav className="flex flex-col px-8 pt-10 gap-1">
              {links.map((link) => (
                <SheetClose asChild key={link.name}>
                  <a
                    href={link.href}
                    className="
                      text-white text-base uppercase tracking-[0.2em]
                      py-4 border-b border-white/10
                      opacity-80 hover:opacity-100 hover:text-[#1E5712]
                      transition
                    "
                  >
                    {link.name}
                  </a>
                </SheetClose>
              ))}
            </nav>

            {/* CTA FULL WIDTH */}
            <div className="mt-auto px-8 pb-10 pt-6">
              <SheetClose asChild>
                <Button
                  className="w-full h-12 rounded-none bg-[#1E5712] hover:bg-[#063406] text-white"
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