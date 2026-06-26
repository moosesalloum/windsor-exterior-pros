"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  "Seamless Eavestrough",
  "Eavestrough Repair",
  "Soffit & Fascia",
  "Siding",
  "Roofing",
  "Not Sure",
];

export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", phone: "", service: "" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("popup_shown")) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("popup_shown", "1");
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, source: "popup" }),
    });
    setStatus("sent");
    setTimeout(() => setVisible(false), 2000);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)}
          />

          {/* Modal - desktop center, mobile bottom sheet */}
          <motion.div
            key="modal"
            className="fixed z-[101] left-0 right-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center sm:p-4"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-surface w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl border border-[rgba(200,122,32,0.3)] shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-copper to-copper-light px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-heading font-bold text-lg leading-tight">
                    Get Your Free Quote
                  </p>
                  <p className="text-white/80 text-xs mt-0.5">
                    Windsor and Essex County&rsquo;s exterior pros - no pressure, no obligation
                  </p>
                </div>
                <button
                  onClick={() => setVisible(false)}
                  className="text-white/80 hover:text-white p-1 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="px-6 py-5">
                {status === "sent" ? (
                  <div className="text-center py-6">
                    <svg className="w-12 h-12 text-copper mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-heading font-bold text-text">We&rsquo;ll be in touch shortly!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-text mb-1.5">
                        Your Name <span className="text-copper">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-surface-2 border border-[rgba(200,122,32,0.2)] rounded-lg px-4 py-2.5 text-text placeholder-muted focus:outline-none focus:border-copper transition-colors text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text mb-1.5">
                        Phone Number <span className="text-copper">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-surface-2 border border-[rgba(200,122,32,0.2)] rounded-lg px-4 py-2.5 text-text placeholder-muted focus:outline-none focus:border-copper transition-colors text-sm"
                        placeholder="(519) 555-0100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Service Needed</label>
                      <div className="grid grid-cols-2 gap-2">
                        {SERVICES.map((svc) => (
                          <label key={svc} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="popup_service"
                              value={svc}
                              checked={form.service === svc}
                              onChange={(e) => setForm({ ...form, service: e.target.value })}
                              className="w-3.5 h-3.5 accent-copper"
                            />
                            <span className="text-xs text-muted">{svc}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-copper hover:bg-copper-light disabled:opacity-60 text-white font-heading font-bold py-3.5 rounded-lg transition-colors text-sm"
                    >
                      {status === "sending" ? "Sending..." : "Request My Free Quote"}
                    </button>
                    <p className="text-xs text-muted text-center">
                      Licensed &amp; insured. Serving Windsor and all of Essex County.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
