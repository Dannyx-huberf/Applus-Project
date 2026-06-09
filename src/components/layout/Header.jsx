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
            <button className="lg:hidden text-2xl text-white">
              ☰
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-[#0b0f14] border-white/10 text-white flex flex-col"
          >
            {/* CLOSE ONLY */}
            <div className="flex justify-end">
              <SheetClose className="text-white text-2xl">
                ✕
              </SheetClose>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-8 mt-12">
              {links.map((link) => (
                <SheetClose asChild key={link.name}>
                  <a
                    href={link.href}
                    className="
                      text-white text-lg uppercase tracking-[0.2em]
                      opacity-80 hover:opacity-100 hover:text-[#1E5712]
                      transition
                    "
                  >
                    {link.name}
                  </a>
                </SheetClose>
              ))}
            </div>

            {/* CTA FULL WIDTH */}
            <div className="mt-auto pb-8">
              <SheetClose asChild>
                <Button className="w-full h-12 rounded-none bg-[#1E5712] hover:bg-[#063406] text-white">
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