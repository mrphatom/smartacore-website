"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/quote", label: "Get Quote" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <span className="w-9 h-9 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
            SC
          </span>
          Smartacore
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/2349031942352"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition"
          >
            Free Consultation
          </a>

          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-slate-700 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/2349031942352"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center bg-brand-600 text-white font-semibold py-3 rounded-full"
          >
            Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
}