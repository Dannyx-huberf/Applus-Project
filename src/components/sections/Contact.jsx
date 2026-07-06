import { useState } from "react";
import Reveal from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 md:py-40 bg-[#030504]"
    >
      {/* ── Background atmosphere (matches WhyChooseUs) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(141,220,110,0.05)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
      />

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── LEFT SIDE ── */}
          <Reveal>
            <div>
              <span className="inline-block text-xs font-mono uppercase tracking-[0.3em] text-[#8ddc6e]/70 mb-6">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-white">
                Let’s build
                <br />
                <span className="font-semibold text-[#8ddc6e]">
                  your next project
                </span>
              </h2>
              <p className="mt-8 text-white/50 leading-relaxed max-w-xl">
                Whether you’re looking for a development partner, an investment
                opportunity, or your future home — we’re ready to bring your
                vision to life.
              </p>

              {/* Contact details with icons */}
              <div className="mt-14 space-y-8">
                {/* Lagos Office */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#8ddc6e]/70 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Lagos Office</p>
                    <p className="text-white/40 text-sm leading-relaxed">
                      E33 Gat Oboh Drive, Millennium Homes Estate, Oniru, Lagos
                      State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Benin Office */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#8ddc6e]/70 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Benin Office</p>
                    <p className="text-white/40 text-sm leading-relaxed">
                      13 Ajayi Street, off Upper Mission Road, New Benin, Benin
                      City, Edo State, Nigeria
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 mt-0.5 text-[#8ddc6e]/70 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/40 text-sm">+234 814 0540 313</p>
                    <p className="text-white/40 text-sm">+234 909 685 4184</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 mt-0.5 text-[#8ddc6e]/70 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/40 text-sm">
                      info@applusproperties.com
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2349096854184"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-12 px-6 py-3 border border-[#8ddc6e]/30 text-[#8ddc6e] hover:bg-[#8ddc6e]/10 transition-colors text-sm font-mono uppercase tracking-wider"
              >
                Chat on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* ── RIGHT SIDE – Glass form card ── */}
          <Reveal delay={0.2}>
            <div className="relative border border-white/[0.08] backdrop-blur-xl bg-black/40">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#8ddc6e]/60" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#8ddc6e]/60" />

              <div className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field — hidden from real users, bots tend to fill it in */}
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    autoComplete="off"
                    tabIndex="-1"
                    className="hidden"
                  />

                  {/* Name */}
                  <div className="relative">
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="peer w-full bg-transparent border border-white/[0.08] px-4 pt-6 pb-2 text-white outline-none focus:border-[#8ddc6e]/50 transition-colors placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label className="absolute left-4 top-2 text-xs text-white/40 peer-focus:text-[#8ddc6e] transition-colors">
                      Full Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="peer w-full bg-transparent border border-white/[0.08] px-4 pt-6 pb-2 text-white outline-none focus:border-[#8ddc6e]/50 transition-colors placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label className="absolute left-4 top-2 text-xs text-white/40 peer-focus:text-[#8ddc6e] transition-colors">
                      Email Address
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="peer w-full bg-transparent border border-white/[0.08] px-4 pt-6 pb-2 text-white outline-none focus:border-[#8ddc6e]/50 transition-colors resize-none placeholder-transparent"
                      placeholder="Your Message"
                    />
                    <label className="absolute left-4 top-2 text-xs text-white/40 peer-focus:text-[#8ddc6e] transition-colors">
                      Your Message
                    </label>
                  </div>

                  {/* Success / Error messages */}
                  {showSuccess && (
                    <div className="p-4 border border-green-500/30 bg-green-500/10 text-green-400 text-sm">
                      Message sent successfully! We’ll get back to you soon.
                    </div>
                  )}
                  {error && (
                    <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-none bg-[#8ddc6e] text-[#030504] font-medium hover:bg-[#7bc85d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
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