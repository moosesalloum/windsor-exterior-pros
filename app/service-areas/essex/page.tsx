import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Exterior Contractors Essex Ontario | Windsor Exterior Pros",
  description:
    "Seamless eavestrough, siding, soffit & fascia, and roofing in Essex Ontario. Windsor Exterior Pros - free estimates, licensed & insured.",
  alternates: { canonical: "https://windsorexteriorpros.com/service-areas/essex" },
  openGraph: {
    title: "Exterior Contractors Essex Ontario | Windsor Exterior Pros",
    description: "Trusted exterior contractors serving Essex. Eavestrough, siding, soffit, roofing, and more. Free estimates.",
    images: [{ url: "/windsor-exterior-pros-social.jpg", width: 1200, height: 630, alt: "Windsor Exterior Pros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Contractors Essex Ontario | Windsor Exterior Pros",
    description: "Exterior contracting services in Essex. Free estimates, licensed & insured.",
    images: ["/windsor-exterior-pros-social.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Windsor Exterior Pros",
  description: "Exterior contracting services in Essex Ontario. Seamless eavestrough, siding, soffit, fascia, and roofing.",
  url: "https://windsorexteriorpros.com/service-areas/essex",
  email: "info@windsorexteriorpros.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Essex",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 42.1751, longitude: -82.8316 },
  areaServed: "Essex, Ontario",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://windsorexteriorpros.com/service-areas" },
    { "@type": "ListItem", position: 3, name: "Essex", item: "https://windsorexteriorpros.com/service-areas/essex" },
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

export default function EssexPage() {
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
            <span className="text-copper">Essex</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Exterior Contractors in{" "}
            <span className="text-copper">Essex, Ontario</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-6">
            Quality exterior contracting for Essex homeowners. Seamless eavestrough, siding, soffit
            & fascia, roofing, and more. Free estimates, no obligation.
          </p>
          <Link href="/contact" className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block">
            Get a Free Essex Estimate
          </Link>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                Exterior Services in Essex
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Essex sits at the heart of Essex County and we serve the town and surrounding
                  rural communities including Harrow, McGregor, and Cottam. Whether your home is
                  in the main town or on a rural property, we come to you.
                </p>
                <p>
                  Rural and semi-rural properties often have unique exterior challenges - larger
                  roof areas, more tree coverage requiring more frequent eavestrough maintenance,
                  and exposure to open fields that accelerate wear on siding and exterior surfaces.
                </p>
                <p>
                  We provide the same licensed, insured, no-subcontractor service to Essex homeowners
                  as we do to every other community in our service area. Free written estimates,
                  no pressure, no obligation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-heading font-bold text-xl text-text mb-5">Services in Essex</h2>
              <div className="space-y-3">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="flex items-center justify-between p-4 bg-surface rounded-lg border border-[#E8E4DF] hover:border-copper group transition-all"
                  >
                    <span className="font-semibold text-text group-hover:text-copper transition-colors">
                      {svc.name} - Essex
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
        heading="Free Estimate for Essex Homeowners"
        subheading="Also serving Harrow, McGregor, Cottam, and surrounding rural communities."
      />
    </>
  );
}
