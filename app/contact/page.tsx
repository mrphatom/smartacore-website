import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Ready to upgrade your home? Reach out for a free consultation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <a
            href="https://wa.me/2349031942352"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition text-center"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-slate-600 text-sm">+234 903 194 2352</p>
            <p className="text-brand-600 text-sm font-medium mt-3">Chat with us →</p>
          </a>

          <a
            href="tel:+2349031942352"
            className="p-8 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-lg transition text-center"
          >
            <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-slate-600 text-sm">+234 903 194 2352</p>
            <p className="text-brand-600 text-sm font-medium mt-3">Call now →</p>
          </a>

          <div className="p-8 rounded-2xl border border-slate-200 text-center">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg mb-2">Service Areas</h3>
            <p className="text-slate-600 text-sm">Abuja & Lagos</p>
            <p className="text-slate-500 text-sm mt-3">Free site inspection available</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold mb-3">Prefer a structured quote?</h3>
          <p className="text-slate-600 mb-6">
            Fill our short quote form and we&apos;ll prepare clear options for your home.
          </p>
          <a
            href="/quote"
            className="inline-flex bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Go to Quote Form
          </a>
        </div>
      </section>
    </>
  );
}