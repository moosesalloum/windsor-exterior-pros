import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Exterior Contractors in Amherstburg, Ontario",
  description:
    "Seamless eavestrough, siding, soffit & fascia, and roofing in Amherstburg Ontario. Windsor Exterior Pros - free estimates, serving Windsor-Essex.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/service-areas/amherstburg" },
  openGraph: {
    title: "Exterior Contractors Amherstburg Ontario | Windsor Exterior Pros",
    description: "Trusted exterior contractors serving Amherstburg. Eavestrough, siding, soffit, roofing, and more. Free estimates.",
    images: [{ url: "/windsor-exterior-pros-social.jpg", width: 1200, height: 630, alt: "Windsor Exterior Pros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Contractors Amherstburg Ontario | Windsor Exterior Pros",
    description: "Exterior contracting services in Amherstburg. Free estimates, serving Windsor-Essex.",
    images: ["/windsor-exterior-pros-social.jpg"],
  },
};

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Exterior Contracting in Amherstburg, Ontario",
  serviceType: "Exterior contracting services",
  url: "https://www.windsorexteriorpros.com/service-areas/amherstburg",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Windsor Exterior Pros",
    url: "https://www.windsorexteriorpros.com",
    telephone: "226-605-6894",
    email: "info@windsorexteriorpros.com",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Amherstburg, Ontario",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.windsorexteriorpros.com/service-areas" },
    { "@type": "ListItem", position: 3, name: "Amherstburg", item: "https://www.windsorexteriorpros.com/service-areas/amherstburg" },
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

export default function AmherstburgPage() {
  return (
    <>
      <JsonLd data={serviceAreaSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="py-20 bg-surface border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-copper transition-colors">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Amherstburg</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Exterior Contractors in{" "}
            <span className="text-copper">Amherstburg, Ontario</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-6">
            Premium exterior contracting for Amherstburg homeowners. Seamless eavestrough, siding,
            soffit & fascia, roofing, and more. Free estimates, no obligation.
          </p>
          <Link href="/contact" className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block">
            Get a Free Amherstburg Estimate
          </Link>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                Exterior Services in Amherstburg
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Amherstburg is home to a mix of heritage properties and newer residential
                  developments - each with their own exterior maintenance and improvement needs.
                  Our team regularly works throughout Amherstburg on eavestrough, siding, and
                  soffit projects.
                </p>
                <p>
                  Older homes in Amherstburg often have sectional or older eavestrough systems that
                  have reached the end of their lifespan. Upgrading to seamless aluminum eavestroughs
                  is one of the best-value improvements an Amherstburg homeowner can make - protecting
                  foundations, preserving landscaping, and eliminating maintenance headaches.
                </p>
                <p>
                  Local service throughout Windsor-Essex. We provide free, written estimates with no
                  pressure and no obligation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-heading font-bold text-xl text-text mb-5">Services in Amherstburg</h2>
              <div className="space-y-3">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="flex items-center justify-between p-4 bg-surface rounded-lg border border-[#E8E4DF] hover:border-copper group transition-all"
                  >
                    <span className="font-semibold text-text group-hover:text-copper transition-colors">
                      {svc.name} - Amherstburg
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
        heading="Free Estimate for Amherstburg Homeowners"
        subheading="Request a free, written estimate with no obligation. We come to you."
      />
    </>
  );
}
