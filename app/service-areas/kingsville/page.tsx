import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Exterior Contractors Kingsville Ontario | Windsor Exterior Pros",
  description:
    "Seamless eavestrough, siding, soffit & fascia, and roofing in Kingsville Ontario. Windsor Exterior Pros - free estimates, licensed & insured.",
  alternates: { canonical: "https://windsorexteriorpros.ca/service-areas/kingsville" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Windsor Exterior Pros",
  description: "Exterior contracting services in Kingsville Ontario. Seamless eavestrough, siding, soffit, fascia, and roofing.",
  url: "https://windsorexteriorpros.ca/service-areas/kingsville",
  email: "info@windsorexteriorpros.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kingsville",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.0369, longitude: -82.7276 },
  areaServed: "Kingsville, Ontario",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://windsorexteriorpros.ca/service-areas" },
    { "@type": "ListItem", position: 3, name: "Kingsville", item: "https://windsorexteriorpros.ca/service-areas/kingsville" },
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

export default function KingsvillePage() {
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
            <span className="text-copper">Kingsville</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Exterior Contractors in{" "}
            <span className="text-copper">Kingsville, Ontario</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-6">
            Premium exterior contracting for Kingsville homeowners. Seamless eavestrough, siding,
            soffit & fascia, roofing, and more. Free estimates, no obligation.
          </p>
          <Link href="/contact" className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block">
            Get a Free Kingsville Estimate
          </Link>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                Exterior Services in Kingsville
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Kingsville, situated on the north shore of Lake Erie, is known for its warm climate
                  and beautiful lakeside properties. The proximity to the lake means homes in
                  Kingsville face particular exposure to moisture and wind - making quality eavestroughs,
                  siding, and soffit especially important.
                </p>
                <p>
                  Our team travels to Kingsville regularly and understands the specific exterior needs
                  of homes in this community. Whether it&rsquo;s a heritage property near the waterfront or
                  a newer subdivision home, we bring the same quality approach and honest pricing.
                </p>
                <p>
                  Licensed, insured, WSIB compliant. Free written estimates with no pressure.
                  No subcontractors on any of our core work.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-heading font-bold text-xl text-text mb-5">Services in Kingsville</h2>
              <div className="space-y-3">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="flex items-center justify-between p-4 bg-surface rounded-lg border border-[#E8E4DF] hover:border-copper group transition-all"
                  >
                    <span className="font-semibold text-text group-hover:text-copper transition-colors">
                      {svc.name} - Kingsville
                    </span>
                    <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LeadForm
        heading="Free Estimate for Kingsville Homeowners"
        subheading="Request a free, written estimate with no obligation. We come to you."
      />
    </>
  );
}
