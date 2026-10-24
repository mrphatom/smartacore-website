import Link from "next/link";
import { Wifi, Lightbulb, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            CAC Registered · CPD Certified · 1-Year Warranty
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Take Ultimate Control<br className="hidden sm:block" /> of Your Home
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Smart lighting, security, AC control, mesh WiFi and full home automation — professionally installed across Abuja and Lagos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2349031942352?text=Hi%20Smartacore%2C%20I%20want%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-brand-700 hover:bg-slate-100 font-semibold px-8 py-3.5 rounded-full transition shadow-lg"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/quote"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Complete smart solutions designed for Nigerian homes and offices.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wifi className="w-6 h-6" />,
                title: "Home Network Solutions",
                desc: "High-speed WiFi 6 mesh coverage, network security and reliable connectivity throughout your space.",
                points: ["WiFi 6 Technology", "Mesh Network Setup", "Network Security"],
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Smart Lighting & Control",
                desc: "Intelligent lighting scenes, smart switches and voice control that work with Alexa and Google Assistant.",
                points: ["Smart Switches & Sockets", "Scene Automation", "Voice Commands"],
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Security & Access",
                desc: "CCTV, smart locks, video intercom and remote monitoring so you stay in control from anywhere.",
                points: ["Smart Door Locks", "CCTV Integration", "Video Intercom"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  {item.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all"
            >
              View all services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Smart Home Packages</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Choose the package that fits your lifestyle. Free site inspection available.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Package",
                desc: "Ideal for getting started",
                popular: false,
                features: [
                  "Home network with mesh WiFi",
                  "Smart switches",
                  "Smart AC switch",
                  "Mobile app control",
                  "Professional installation",
                ],
              },
              {
                name: "Advanced Package",
                desc: "Safety + enhanced lighting",
                popular: true,
                features: [
                  "Everything in Starter",
                  "Video intercom",
                  "Smart motion sensors",
                  "Advanced lighting scenes",
                  "Voice control (Alexa / Google)",
                ],
              },
              {
                name: "Premium Package",
                desc: "Full peace of mind",
                popular: false,
                features: [
                  "Everything in Advanced",
                  "Full home automation",
                  "Smart curtains & locks",
                  "CCTV integration",
                  "Priority support",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-2xl p-8 flex flex-col relative ${
                  pkg.popular
                    ? "border-2 border-brand-600 shadow-xl"
                    : "border border-slate-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-sm text-slate-500 mb-6">{pkg.desc}</p>
                <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`block text-center font-semibold py-3 rounded-xl transition ${
                    pkg.popular
                      ? "bg-brand-600 hover:bg-brand-700 text-white"
                      : "border-2 border-brand-600 text-brand-600 hover:bg-brand-50"
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Choose Smartacore</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "CAC Registered", desc: "Fully registered company you can trust" },
              { title: "1-Year Warranty", desc: "On all products and installations" },
              { title: "Professional Install", desc: "Neat finishing & full setup support" },
              { title: "Free Consultation", desc: "Site inspection with no obligation" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Make Your Home Smarter?</h2>
          <p className="text-slate-300 mb-10 text-lg">
            Get a free consultation and site inspection. No pressure, just clear options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="w-full sm:w-auto bg-white text-brand-700 hover:bg-slate-100 font-semibold px-8 py-4 rounded-full transition shadow-lg"
            >
              Request a Quote
            </Link>
            <a
              href="https://wa.me/2349031942352"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}