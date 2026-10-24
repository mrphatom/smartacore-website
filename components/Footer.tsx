import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="font-bold text-white text-lg mb-3">Smartacore</div>
          <p className="text-sm leading-relaxed">
            Smart Living. Core Control. Professional smart home automation across Abuja and Lagos.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/quote" className="hover:text-white transition">Get a Quote</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Smart Lighting</li>
            <li>Home Network / Mesh WiFi</li>
            <li>Security & CCTV</li>
            <li>Full Home Automation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://wa.me/2349031942352" className="hover:text-white transition">
                WhatsApp: +234 903 194 2352
              </a>
            </li>
            <li>Abuja & Lagos, Nigeria</li>
            <li>Free consultation available</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div>© {new Date().getFullYear()} Smartacore. All rights reserved.</div>
        <div>CAC Registered · 1-Year Warranty</div>
      </div>
    </footer>
  );
}