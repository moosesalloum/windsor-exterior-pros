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

  const sectionClass = dark ? "bg-[#1A1A1A]" : "bg-[#F2F0ED]";
  const headingClass = dark ? "text-white" : "text-[#1A1A1A]";
  const subheadingClass = dark ? "text-[#9a9590]" : "text-muted";
  const inputClass = dark
    ? "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C87A20] focus:ring-2 focus:ring-[#C87A20]/20 transition-colors text-sm"
    : "w-full bg-white border border-[#E8E4DF] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder-[#9a9590] focus:outline-none focus:border-[#C87A20] focus:ring-2 focus:ring-[#C87A20]/20 transition-colors text-sm";
  const labelClass = dark
    ? "block text-sm font-semibold text-white mb-1.5"
    : "block text-sm font-semibold text-[#1A1A1A] mb-1.5";
  const radioLabelClass = dark ? "text-white/60 group-hover:text-white" : "text-muted group-hover:text-[#1A1A1A]";

  return (
    <section id="estimate" className={`${sectionClass} py-20`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className={`font-heading font-extrabold text-3xl md:text-4xl mb-3 ${headingClass}`}>
            {heading}
          </h2>
          <p className={subheadingClass}>{subheading}</p>
        </div>

        {status === "sent" ? (
          <div className="text-center py-12 px-6 rounded-xl border border-copper bg-white">
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
            <h3 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-2">
              Request Received!
            </h3>
            <p className="text-muted">
              We will be in touch shortly to discuss your project and schedule a free on-site estimate.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${dark ? "" : "bg-white rounded-xl border border-[#E8E4DF] shadow-sm p-6 md:p-8"}`}
          >
            <div className="md:col-span-1">
              <label className={labelClass}>
                Your Name <span className="text-copper">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="John Smith"
              />
            </div>

            <div className="md:col-span-1">
              <label className={labelClass}>
                Phone Number <span className="text-copper">*</span>
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                placeholder="(519) 555-0100"
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="john@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
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
                    <span className={`text-sm transition-colors ${radioLabelClass}`}>
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
                <p className="text-red-500 text-sm text-center mt-2">
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
