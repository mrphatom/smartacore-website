"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    propertyType: "",
    package: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const text = encodeURIComponent(
      `Hi Smartacore, I would like a quote.\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        `Email: ${form.email || "N/A"}\n` +
        `Location: ${form.location}\n` +
        `Property: ${form.propertyType}\n` +
        `Package Interest: ${form.package || "Not sure yet"}\n` +
        `Message: ${form.message || "None"}`
    );

    window.open(`https://wa.me/2349031942352?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-24 px-4 min-h-[70vh] flex items-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Quote Request Sent</h1>
          <p className="text-slate-600 mb-8">
            We opened WhatsApp with your details. Send the message and our team will get back to you shortly.
          </p>
          <a
            href="https://wa.me/2349031942352"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Open WhatsApp Again
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Request a Quote</h1>
          <p className="text-slate-600">
            Fill the form below. We&apos;ll prepare a clear quote and free consultation for you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp *</label>
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="0803..."
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="optional"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Location / Area *</label>
              <input
                required
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="e.g. Gwarinpa, Abuja"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Property Type *</label>
              <select
                required
                name="propertyType"
                value={form.propertyType}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
              >
                <option value="">Select...</option>
                <option value="Apartment">Apartment</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Duplex">Duplex</option>
                <option value="Terrace">Terrace</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Package Interest</label>
              <select
                name="package"
                value={form.package}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
              >
                <option value="">Not sure yet</option>
                <option value="Starter Package">Starter Package</option>
                <option value="Advanced Package">Advanced Package</option>
                <option value="Premium Package">Premium Package</option>
                <option value="Custom">Custom Solution</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
              placeholder="Tell us about the rooms, devices you need, or any specific requirements..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition"
          >
            Submit & Chat on WhatsApp
          </button>

          <p className="text-xs text-slate-500 text-center">
            Submitting opens WhatsApp with your details pre-filled so our team can respond quickly.
          </p>
        </form>
      </div>
    </section>
  );
}