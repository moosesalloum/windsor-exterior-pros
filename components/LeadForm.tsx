"use client";

import { useState, FormEvent } from "react";

const SERVICES = [
  "Seamless Eavestrough",
  "Eavestrough Repair",
  "Soffit & Fascia",
  "Siding",
  "Roofing",
  "Landscaping/Hardscaping",
  "Windows & Doors",
  "Not Sure",
];

interface LeadFormProps {
  heading?: string;
  subheading?: string;
  dark?: boolean;
}

export default function LeadForm({
  heading = "Get Your Free Estimate",
  subheading = "No pressure, no obligation - just an honest quote from Windsor's exterior pros.",
  dark = true,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const bg = dark ? "bg-surface-2" : "bg-surface";

  return (
    <section id="estimate" className={`${dark ? "bg-surface" : "bg-bg"} py-20`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text mb-3">
            {heading}
          </h2>
          <p className="text-muted">{subheading}</p>
        </div>

        {status === "sent" ? (
          <div className="text-center py-12 px-6 rounded-xl border border-copper bg-surface-2">
            <svg
              className="w-16 h-16 text-copper mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="font-heading font-bold text-2xl text-text mb-2">
              Request Received!
            </h3>
            <p className="text-muted">
              We will be in touch shortly to discuss your project and schedule a free on-site estimate.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`${bg} rounded-xl border border-[rgba(200,122,32,0.2)] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5`}>
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-text mb-1.5">
                Your Name <span className="text-copper">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-surface border border-[rgba(200,122,32,0.2)] rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-copper transition-colors"
                placeholder="John Smith"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-text mb-1.5">
                Phone Number <span className="text-copper">*</span>
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-surface border border-[rgba(200,122,32,0.2)] rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-copper transition-colors"
                placeholder="(519) 555-0100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-text mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-surface border border-[rgba(200,122,32,0.2)] rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:border-copper transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-text mb-2">
                Service Needed
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {SERVICES.map((svc) => (
                  <label key={svc} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="service"
                      value={svc}
                      checked={form.service === svc}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-4 h-4 accent-copper"
                    />
                    <span className="text-sm text-muted group-hover:text-text transition-colors">
                      {svc}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-copper hover:bg-copper-light disabled:opacity-60 text-white font-heading font-bold text-base py-4 rounded-lg transition-colors duration-200"
              >
                {status === "sending" ? "Sending..." : "Request My Free Quote"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center mt-2">
                  Something went wrong. Please call or email us directly.
                </p>
              )}
            </div>

            <p className="md:col-span-2 text-xs text-muted text-center">
              Licensed & insured. No obligation. We serve Windsor and all of Essex County.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
