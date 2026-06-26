import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Exterior Contractors Leamington Ontario | Windsor Exterior Pros",
  description:
    "Seamless eavestrough, siding, soffit & fascia, and roofing in Leamington Ontario. Windsor Exterior Pros - free estimates, licensed & insured.",
  alternates: { canonical: "https://windsorexteriorpros.ca/service-areas/leamington" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Windsor Exterior Pros",
  description: "Exterior contracting services in Leamington Ontario. Seamless eavestrough, siding, soffit, fascia, and roofing.",
  url: "https://windsorexteriorpros.ca/service-areas/leamington",
  email: "info@windsorexteriorpros.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Leamington",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.0569, longitude: -82.599 },
  areaServed: "Leamington, Ontario",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://windsorexteriorpros.ca/service-areas" },
    { "@type": "ListItem", position: 3, name: "Leamington", item: "https://windsorexteriorpros.ca/service-areas/leamington" },
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

export default function LeamingtonPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="py-20 bg-surface border-b border-[rgba(200,122,32,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-copper transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Leamington</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Exterior Contractors in{" "}
            <span className="text-copper">Leamington, Ontario</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-6">
            Quality exterior contracting for Leamington and surrounding Essex County communities.
            Seamless eavestrough, siding, soffit & fascia, roofing, and more. Free estimates.
          </p>
          <Link href="/contact" className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block">
            Get a Free Leamington Estimate
          </Link>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                Exterior Services in Leamington
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Leamington, known as the Tomato Capital of Canada, is home to a strong community
                  of homeowners who take care of their properties. Windsor Exterior Pros travels to
                  Leamington regularly to provide the same high-quality exterior work we deliver
                  across Windsor-Essex.
                </p>
                <p>
                  The weather in Leamington - with its Lake Erie influence - can be harder on homes
                  than many realize. Proper eavestroughs, soffit ventilation, and quality siding are
                  critical to protecting your home through wet springs and cold winters.
                </p>
                <p>
                  All work is performed by our own crew. We don&rsquo;t subcontract. Licensed, insured,
                  and WSIB compliant. Free written estimates with no pressure.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-heading font-bold text-xl text-text mb-5">Services in Leamington</h2>
              <div className="space-y-3">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="flex items-center justify-between p-4 bg-surface rounded-lg border border-[rgba(200,122,32,0.2)] hover:border-copper group transition-all"
                  >
                    <span className="font-semibold text-text group-hover:text-copper transition-colors">
                      {svc.name} - Leamington
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
        heading="Free Estimate for Leamington Homeowners"
        subheading="Request a free, written estimate with no obligation. We come to you."
      />
    </>
  );
}
