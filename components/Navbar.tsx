"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";

const SERVICES = [
  { name: "Seamless Eavestrough", href: "/services/seamless-eavestrough" },
  { name: "Siding", href: "/services/siding" },
  { name: "Soffit & Fascia", href: "/services/soffit-fascia" },
  { name: "Roofing", href: "/services/roofing" },
  { name: "Landscaping & Hardscaping", href: "/services/landscaping-hardscaping" },
  { name: "Windows & Doors", href: "/services/windows-doors" },
];

const AREAS = [
  { name: "LaSalle", href: "/service-areas/lasalle" },
  { name: "Tecumseh", href: "/service-areas/tecumseh" },
  { name: "Amherstburg", href: "/service-areas/amherstburg" },
  { name: "Leamington", href: "/service-areas/leamington" },
  { name: "Lakeshore", href: "/service-areas/lakeshore" },
  { name: "Essex", href: "/service-areas/essex" },
  { name: "Kingsville", href: "/service-areas/kingsville" },
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#E8E4DF] transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-sm shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMobile}>
          <Image
            src="/logo-horizontal.jpeg"
            alt="Windsor Exterior Pros logo"
            width={220}
            height={44}
            className="h-11 w-auto hidden sm:block"
          />
          <Image
            src="/logo-horizontal.jpeg"
            alt="Windsor Exterior Pros logo"
            width={180}
            height={36}
            className="h-9 w-auto sm:hidden"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {/* Services dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#1A1A1A] hover:text-copper transition-colors text-sm font-semibold py-2">
              Services
              <ChevronDown className="transition-transform group-hover:rotate-180 duration-200" />
            </button>
            <div
              className="absolute top-full left-0 mt-1 w-58 bg-white rounded-xl shadow-lg border border-[#E8E4DF] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2"
              style={{ minWidth: "220px" }}
            >
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-4 py-2.5 text-sm text-muted hover:text-copper hover:bg-[#F2F0ED] transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#1A1A1A] hover:text-copper transition-colors text-sm font-semibold py-2">
              Service Areas
              <ChevronDown className="transition-transform group-hover:rotate-180 duration-200" />
            </button>
            <div
              className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-[#E8E4DF] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2"
              style={{ minWidth: "190px" }}
            >
              <Link
                href="/service-areas"
                className="block px-4 py-2.5 text-sm text-copper font-semibold hover:bg-[#F2F0ED] transition-colors border-b border-[#E8E4DF] mb-1"
              >
                All Service Areas
              </Link>
              {AREAS.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="block px-4 py-2.5 text-sm text-muted hover:text-copper hover:bg-[#F2F0ED] transition-colors"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="text-[#1A1A1A] hover:text-copper transition-colors text-sm font-semibold">
            About
          </Link>
          <Link href="/faq" className="text-[#1A1A1A] hover:text-copper transition-colors text-sm font-semibold">
            FAQ
          </Link>
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="text-sm font-bold text-copper transition-colors hover:text-copper-dark"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="bg-copper hover:bg-copper-light text-white font-heading font-bold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#1A1A1A] hover:text-copper transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden bg-white border-t border-[#E8E4DF]"
          style={{ maxHeight: "calc(100vh - 4rem)", overflowY: "auto" }}
        >
          <div className="px-4 py-4 space-y-1">
            <div>
              <button
                className="w-full flex items-center justify-between text-[#1A1A1A] font-semibold py-3 text-sm hover:text-copper transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 pb-2 space-y-0.5 border-l border-[#E8E4DF] ml-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-sm text-muted hover:text-copper transition-colors"
                      onClick={closeMobile}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex items-center justify-between text-[#1A1A1A] font-semibold py-3 text-sm hover:text-copper transition-colors"
                onClick={() => setAreasOpen(!areasOpen)}
              >
                Service Areas
                <ChevronDown className={`transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`} />
              </button>
              {areasOpen && (
                <div className="pl-4 pb-2 space-y-0.5 border-l border-[#E8E4DF] ml-2">
                  <Link
                    href="/service-areas"
                    className="block py-2 text-sm text-copper font-semibold"
                    onClick={closeMobile}
                  >
                    All Areas
                  </Link>
                  {AREAS.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="block py-2 text-sm text-muted hover:text-copper transition-colors"
                      onClick={closeMobile}
                    >
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block text-[#1A1A1A] font-semibold py-3 text-sm hover:text-copper transition-colors border-t border-[#E8E4DF]"
              onClick={closeMobile}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="block text-[#1A1A1A] font-semibold py-3 text-sm hover:text-copper transition-colors"
              onClick={closeMobile}
            >
              FAQ
            </Link>
            <div className="pt-2 pb-4">
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="mb-3 block rounded-lg border border-copper py-3 text-center text-sm font-bold text-copper transition-colors hover:bg-copper hover:text-white"
                onClick={closeMobile}
              >
                Call {BUSINESS.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="block bg-copper hover:bg-copper-light text-white font-heading font-bold text-sm text-center py-3.5 rounded-lg transition-colors"
                onClick={closeMobile}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
