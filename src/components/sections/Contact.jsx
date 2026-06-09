import { useState, useEffect } from "react";
import Reveal from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react"; // <-- Formspree imports

export default function Contact() {
  // Initialize the official Formspree hook with your specific form ID
  const [state, handleSubmit] = useForm("xdavdkwe");
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // Automatically clear the form and show a temporary success message when sent
  useEffect(() => {
    if (state.succeeded) {
      setForm({ name: "", email: "", message: "" }); // Clears the inputs
      setShowSuccess(true);
      
      // Hide the success message after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-32 bg-[#0b0f14]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <Reveal>
            <div>
              <span className="uppercase tracking-[0.35em] text-sm text-[#1E5712]">
                Contact Us
              </span>
              <h2 className="mt-6 text-4xl md:text-6xl font-heading font-light text-white leading-tight">
                Let’s Build Your Next Project
              </h2>
              <p className="mt-8 text-white/70 leading-relaxed max-w-xl">
                Whether you're looking for a development partner,
                investment opportunity, or your future home,
                our team is ready to help you make it happen.
              </p>

              <div className="mt-12 space-y-6 text-white/80">
                <div>
                  <p className="text-white font-medium">📍 Lagos Office</p>
                  <p className="text-white/60">
                    E33 Gat Oboh Drive, Millennium Homes Estate,
                    Oniru, Lagos State, Nigeria
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium">📍 Benin Office</p>
                  <p className="text-white/60">
                    13 Ajayi Street, off Upper Mission Road,
                    New Benin, Benin City, Edo State, Nigeria
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium">📞 Phone</p>
                  <p className="text-white/60">+2348140540313</p>
                  <p className="text-white/60">+2349096854184</p>
                </div>
                <div>
                  <p className="text-white font-medium">✉ Email</p>
                  <p className="text-white/60">info@applusprojects.com</p>
                </div>
              </div>

              <a
                href="https://wa.me/2348109333969"
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-10 px-6 py-3 bg-[#1E5712] text-white hover:bg-[#063406] transition rounded-none"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* RIGHT SIDE - GLASS FORM */}
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-10">
                
                {/* Formspree handles the submission event automatically here */}
                <form onSubmit={handleSubmit}>
                  
                  {/* Floating Input: Name */}
                  <div className="relative mb-6">
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="peer w-full bg-transparent border border-white/10 px-4 pt-6 pb-2 text-white outline-none focus:border-[#1E5712]"
                    />
                    <label className="absolute left-4 top-2 text-xs text-white/50 peer-focus:text-[#1E5712]">
                      Full Name
                    </label>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  {/* Floating Input: Email */}
                  <div className="relative mb-6">
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="peer w-full bg-transparent border border-white/10 px-4 pt-6 pb-2 text-white outline-none focus:border-[#1E5712]"
                    />
                    <label className="absolute left-4 top-2 text-xs text-white/50 peer-focus:text-[#1E5712]">
                      Email Address
                    </label>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  {/* Floating Input: Message */}
                  <div className="relative mb-8">
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="peer w-full bg-transparent border border-white/10 px-4 pt-6 pb-2 text-white outline-none focus:border-[#1E5712]"
                    />
                    <label className="absolute left-4 top-2 text-xs text-white/50 peer-focus:text-[#1E5712]">
                      Your Message
                    </label>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  {/* Alert Messages */}
                  {showSuccess && (
                    <div className="mb-6 p-4 border border-green-500/30 bg-green-500/10 text-green-400 text-sm">
                      Message sent successfully! We will get back to you soon.
                    </div>
                  )}
                  
                  {/* Formspree generic error block */}
                  {state.errors && state.errors.length > 0 && (
                    <div className="mb-6 p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
                      Please check the form for errors and try again.
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full h-12 rounded-none bg-[#1E5712] hover:bg-[#063406] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}