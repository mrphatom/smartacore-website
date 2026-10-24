import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">About Smartacore</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We help Nigerian homeowners and businesses enjoy the comfort, security and convenience of smart living.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Smartacore is a Nigerian smart home automation company focused on delivering reliable, neatly installed systems that actually work in real Nigerian homes.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            From mesh WiFi and smart lighting to AC control, security systems and full home automation, we design and install solutions that give you control from your phone — whether you are in the next room or another city.
          </p>
          <p className="text-slate-600 leading-relaxed mb-10">
            We are CAC registered, CPD certified, and every installation comes with a 1-year warranty plus free consultation and site inspection.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">What Sets Us Apart</h2>
          <ul className="space-y-3 mb-10">
            {[
              "Professional installation with clean finishing",
              "Systems designed to work with Nigerian power realities",
              "Clear packages and transparent communication",
              "Free consultation and site assessment",
              "1-year warranty on products and workmanship",
              "Support after installation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link
              href="/quote"
              className="inline-flex bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3.5 rounded-full transition"
            >
              Request a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}