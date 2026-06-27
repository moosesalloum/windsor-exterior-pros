"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

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

const PROPERTY_TYPES = ["Residential", "Commercial"];
const TIMELINES = ["ASAP", "Within 1 Month", "Just Getting Quotes"];
const SOURCES = ["Google", "Referral", "Yard Sign", "Social Media", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    propertyType: "",
    timeline: "",
    source: "",
    notes: "",
  });

  function update(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };
  }

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

  const inputClass =
    "w-full bg-white border border-[#E8E4DF] rounded-lg px-4 py-3 text-[#1A1A1A] placeholder-[#9a9590] focus:outline-none focus:border-[#C87A20] focus:ring-2 focus:ring-[#C87A20]/20 transition-colors text-sm";

  const labelClass = "block text-sm font-semibold text-text mb-1.5";

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-surface border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Contact</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Get Your{" "}
            <span className="text-copper">Free Quote</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Fill out the form and we&rsquo;ll be in touch to schedule a free on-site estimate. No
            obligation, no pressure - just an honest quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-text mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-copper/15 flex items-center justify-center text-copper flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-text text-sm">Phone</p>
                        <p className="text-muted text-sm">[Phone TBD]</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-copper/15 flex items-center justify-center text-copper flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-text text-sm">Email</p>
                        <a href="mailto:info@windsorexteriorpros.com" className="text-copper text-sm hover:text-copper-light transition-colors">
                          info@windsorexteriorpros.com
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-copper/15 flex items-center justify-center text-copper flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-text text-sm">Location</p>
                        <p className="text-muted text-sm">Windsor, Ontario</p>
                        <p className="text-muted text-xs mt-0.5">Serving all of Windsor-Essex County</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-copper/15 flex items-center justify-center text-copper flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-text text-sm">Hours</p>
                        <p className="text-muted text-sm">Mon-Sat: 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-xl border border-[#E8E4DF] p-5">
                  <h3 className="font-heading font-bold text-text mb-3">What to Expect</h3>
                  <ul className="space-y-2">
                    {[
                      "We respond to all inquiries within 1 business day",
                      "We schedule a free on-site visit at your convenience",
                      "You receive a written, itemized quote",
                      "No obligation to proceed - ever",
                      "Licensed, insured, and WSIB compliant",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <svg className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              {status === "sent" ? (
                <div className="text-center py-16 px-6 bg-surface rounded-xl border border-copper">
                  <svg className="w-16 h-16 text-copper mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="font-heading font-bold text-2xl text-text mb-2">Request Received!</h2>
                  <p className="text-muted">
                    Thank you. We&rsquo;ll be in touch within 1 business day to schedule your free estimate.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface rounded-xl border border-[#E8E4DF] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <div>
                    <label className={labelClass}>First Name <span className="text-copper">*</span></label>
                    <input type="text" required value={form.firstName} onChange={update("firstName")} className={inputClass} placeholder="John" />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name <span className="text-copper">*</span></label>
                    <input type="text" required value={form.lastName} onChange={update("lastName")} className={inputClass} placeholder="Smith" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone <span className="text-copper">*</span></label>
                    <input type="tel" required value={form.phone} onChange={update("phone")} className={inputClass} placeholder="(519) 555-0100" />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="john@example.com" />
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>Service Needed</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {SERVICES.map((svc) => (
                        <label key={svc} className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="service" value={svc} checked={form.service === svc} onChange={update("service")} className="w-4 h-4 accent-copper" />
                          <span className="text-xs text-muted group-hover:text-text transition-colors">{svc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>Property Address</label>
                    <input type="text" value={form.address} onChange={update("address")} className={inputClass} placeholder="123 Main St, Windsor, ON" />
                  </div>

                  <div>
                    <label className={labelClass}>Property Type</label>
                    <div className="flex gap-4 mt-1">
                      {PROPERTY_TYPES.map((pt) => (
                        <label key={pt} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="propertyType" value={pt} checked={form.propertyType === pt} onChange={update("propertyType")} className="w-4 h-4 accent-copper" />
                          <span className="text-sm text-muted">{pt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Timeline</label>
                    <div className="flex flex-wrap gap-3 mt-1">
                      {TIMELINES.map((t) => (
                        <label key={t} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="timeline" value={t} checked={form.timeline === t} onChange={update("timeline")} className="w-4 h-4 accent-copper" />
                          <span className="text-sm text-muted">{t}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>How did you hear about us?</label>
                    <div className="flex flex-wrap gap-4 mt-1">
                      {SOURCES.map((s) => (
                        <label key={s} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="source" value={s} checked={form.source === s} onChange={update("source")} className="w-4 h-4 accent-copper" />
                          <span className="text-sm text-muted">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>Additional Notes (optional)</label>
                    <textarea
                      value={form.notes}
                      onChange={update("notes")}
                      rows={3}
                      className={inputClass}
                      placeholder="Tell us anything else that would help us prepare for your estimate..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-copper hover:bg-copper-light disabled:opacity-60 text-white font-heading font-bold text-base py-4 rounded-lg transition-colors"
                    >
                      {status === "sending" ? "Sending..." : "Request My Free Quote"}
                    </button>
                    {status === "error" && (
                      <p className="text-red-400 text-sm text-center mt-2">
                        Something went wrong. Please email us at info@windsorexteriorpros.com.
                      </p>
                    )}
                  </div>
                  <p className="md:col-span-2 text-xs text-muted text-center">
                    Licensed &amp; insured. Free estimates. No obligation. Serving Windsor and all of Essex County.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
