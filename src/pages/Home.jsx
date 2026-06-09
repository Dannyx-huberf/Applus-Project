import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Recognition from "@/components/sections/Recognition";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <About />

      <Stats />

      <Recognition />

      <Services />

      <Gallery />

      <WhyChooseUs />

      <Testimonials />

      <Contact />

      <Footer />

      <WhatsAppFloat />
    </>
  );
}