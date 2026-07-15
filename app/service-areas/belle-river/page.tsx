import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Exterior Contractors in Belle River, Ontario",
  description:
    "Seamless eavestrough, siding, soffit & fascia, roofing, and exterior services in Belle River Ontario. Windsor Exterior Pros - free estimates, serving Windsor-Essex.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/service-areas/belle-river" },
  openGraph: {
    title: "Exterior Contractors Belle River Ontario | Windsor Exterior Pros",
    description: "Trusted exterior contractors serving Belle River. Eavestrough, siding, soffit, roofing, and more. Free estimates.",
    images: [{ url: "/windsor-exterior-pros-social.jpg", width: 1200, height: 630, alt: "Windsor Exterior Pros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Contractors Belle River Ontario | Windsor Exterior Pros",
    description: "Exterior contracting services in Belle River. Free estimates, serving Windsor-Essex.",
    images: ["/windsor-exterior-pros-social.jpg"],
  },
};

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Exterior Contracting in Belle River, Ontario",
  serviceType: "Exterior contracting services",
  url: "https://www.windsorexteriorpros.com/service-areas/belle-river",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Windsor Exterior Pros",
    url: "https://www.windsorexteriorpros.com",
    telephone: "226-605-6894",
    email: "info@windsorexteriorpros.com",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Belle River, Ontario",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.windsorexteriorpros.com/service-areas" },
    { "@type": "ListItem", position: 3, name: "Belle River", item: "https://www.windsorexteriorpros.com/service-areas/belle-river" },
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

export default function BelleRiverPage() {
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
            <span className="text-copper">Belle River</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Exterior Contractors in{" "}
            <span className="text-copper">Belle River, Ontario</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mb-6">
            Windsor Exterior Pros serves Belle River and the surrounding Lakeshore area with the same
            premium exterior contracting that&rsquo;s built our reputation across Windsor-Essex County.
            Free estimates, clear project communication on core work, and a written project scope on every job.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors">
              Get a Free Belle River Estimate
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
                Serving Belle River Homeowners
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Belle River - now part of the Municipality of Lakeshore - is a community known for its
                  lakefront character and mix of established and newer homes. Our team works regularly
                  in this area on seamless eavestrough installations, soffit and fascia replacements,
                  and siding projects.
                </p>
                <p>
                  Homes near Lake St. Clair face particular exposure to wind and moisture, which means
                  quality exterior work is especially important here. We give you an honest assessment
                  of what your home needs and a written quote with no obligation to proceed.
                </p>
                <p>
                  Local service throughout Windsor-Essex.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-heading font-bold text-xl text-text mb-5">Services in Belle River</h2>
              <div className="space-y-3">
                {SERVICES.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="flex items-center justify-between p-4 bg-surface rounded-lg border border-[#E8E4DF] hover:border-copper group transition-all"
                  >
                    <span className="font-semibold text-text group-hover:text-copper transition-colors">
                      {svc.name} - Belle River
                    </span>
                    <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="mt-6 p-5 bg-surface rounded-xl border border-[#E8E4DF]">
                <div className="flex flex-wrap gap-3">
                  {["Windsor-Essex Service", "Free Estimates", "Clear Project Scope", "Written Project Scope"].map((badge) => (
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
        heading="Free Estimate for Belle River Homeowners"
        subheading="Request a free, written estimate with no obligation. We come to you."
      />
    </>
  );
}
