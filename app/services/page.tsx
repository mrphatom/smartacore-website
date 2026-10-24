import Link from "next/link";
import { Wifi, Lightbulb, Shield, Thermometer, Curtains, Camera, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Wifi className="w-7 h-7" />,
    title: "Home Network & Mesh WiFi",
    desc: "Complete home networking with WiFi 6 mesh systems for seamless coverage, strong security and reliable internet in every room.",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Smart Lighting Control",
    desc: "Smart switches, dimmers and scene automation. Control lights from your phone or with voice commands via Alexa and Google Assistant.",
  },
  {
    icon: <Thermometer className="w-7 h-7" />,
    title: "Smart AC & Climate",
    desc: "Control your air conditioners remotely, set schedules and reduce energy waste with intelligent climate automation.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Security & Access Control",
    desc: "Smart door locks, video intercom, motion sensors and integrated security systems for real peace of mind.",
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: "CCTV & Monitoring",
    desc: "Professional CCTV installation with remote viewing so you can check on your property from anywhere.",
  },
  {
    icon: <Curtains className="w-7 h-7" />,
    title: "Smart Curtains & Blinds",
    desc: "Motorized curtains and blinds that open and close on schedule or by voice — modern comfort for your living spaces.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Everything you need to turn a regular house into a smart, secure and convenient home.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 rounded-2xl border border-slate-200 hover:border-brand-200 hover:shadow-lg transition"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-16 text-center">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3.5 rounded-full transition"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}