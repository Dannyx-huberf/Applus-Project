import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <About />

      <Services />

      <Gallery />

      <WhyChooseUs />

      <Contact />

      <Footer />

      <WhatsAppFloat />
    </>
  );
}