import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Exterior Contractors Harrow Ontario | Windsor Exterior Pros",
  description:
    "Seamless eavestrough, siding, soffit & fascia, roofing, and exterior services in Harrow Ontario. Windsor Exterior Pros - free estimates, licensed & insured.",
  alternates: { canonical: "https://windsorexteriorpros.ca/service-areas/harrow" },
  openGraph: {
    title: "Exterior Contractors Harrow Ontario | Windsor Exterior Pros",
    description: "Trusted exterior contractors serving Harrow. Eavestrough, siding, soffit, roofing, and more. Free estimates.",
    images: [{ url: "/windsor-exterior-pros-social.jpg", width: 1200, height: 630, alt: "Windsor Exterior Pros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Contractors Harrow Ontario | Windsor Exterior Pros",
    description: "Exterior contracting services in Harrow. Free estimates, licensed & insured.",
    images: ["/windsor-exterior-pros-social.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Windsor Exterior Pros",
  description: "Exterior contracting services in Harrow Ontario including seamless eavestrough, siding, soffit and fascia, roofing, and more.",
  url: "https://windsorexteriorpros.ca/service-areas/harrow",
  email: "info@windsorexteriorpros.ca",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Harrow",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.0333,
    longitude: -82.9167,
  },
  areaServed: "Harrow, Ontario",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://windsorexteriorpros.ca/service-areas" },
    { "@type": "ListItem", position: 3, name: "Harrow", item: "https://windsorexteriorpros.ca/service-areas/harrow" },
  ],
};

const SERVICES = [
  { name: "Seamless Eavestrough", href: "/services/seamless-eavestrough" },
  { name: "Siding", href: "/services/siding" },
  { name: "Soffit & Fascia", href: "/services/soffit-fascia" },
  { name: "Roofing", href: "/services/roofing" },
  { name: "Landscaping & Hardscaping", href: "/services/landscaping-hardscaping" },
  { name: "Windows & Doors", href: "/services/windows-doors" },
];

export default function HarrowPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="py-20 bg-surface border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-copper transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Harrow</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Exterior Contractors in{" "}
            <span className="text-copper">Harrow, Ontario</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-6">
            Windsor Exterior Pros proudly serves Harrow homeowners with premium exterior contracting
            built on the same standards we apply across Windsor-Essex County. Free estimates,
            no subcontractors on core work, and a workmanship guarantee on every job.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors">
              Get a Free Harrow Estimate
            </Link>
            <Link href="/services/seamless-eavestrough" className="border border-text/30 hover:border-copper text-text hover:text-copper font-semibold px-6 py-3 rounded-lg transition-colors">
              Our Primary Service
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                Serving Harrow Homeowners
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Harrow is a tight-knit Essex County community with a strong mix of older homes and
                  newer builds that all need quality exterior care. Our team makes the drive to Harrow
                  regularly for eavestrough installations, soffit and fascia work, and siding projects.
                </p>
                <p>
                  Whether you need to address damage from last season&rsquo;s ice storms or you&rsquo;re
                  planning a full exterior refresh, we come to you with an honest assessment and a
                  written quote - no obligation, no surprises.
                </p>
                <p>
                  Licensed, insured, and WSIB compliant - always.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-heading font-bold text-xl text-text mb-5">Services in Harrow</h2>
              <div className="space-y-3">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="flex items-center justify-between p-4 bg-surface rounded-lg border border-[#E8E4DF] hover:border-copper group transition-all"
                  >
                    <span className="font-semibold text-text group-hover:text-copper transition-colors">
                      {svc.name} - Harrow
                    </span>
                    <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="mt-6 p-5 bg-surface rounded-xl border border-[#E8E4DF]">
                <div className="flex flex-wrap gap-3">
                  {["Licensed & Insured", "Free Estimates", "No Subcontractors", "Workmanship Guarantee"].map((badge) => (
                    <span key={badge} className="text-xs text-copper border border-copper/30 px-3 py-1 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LeadForm
        heading="Free Estimate for Harrow Homeowners"
        subheading="Request a free, written estimate with no obligation. We come to you."
      />
    </>
  );
}
