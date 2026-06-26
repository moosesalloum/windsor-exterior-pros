import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Roofing Services Windsor Ontario",
  description:
    "Professional roofing services in Windsor Ontario. Shingle replacement, repairs, and inspections. Free estimates from licensed & insured roofers serving all of Essex County.",
  alternates: { canonical: "https://windsorexteriorpros.ca/services/roofing" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Roofing", item: "https://windsorexteriorpros.ca/services/roofing" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Roofing Services",
  provider: { "@type": "LocalBusiness", name: "Windsor Exterior Pros" },
  areaServed: "Windsor, Ontario",
  description: "Professional roofing services including shingle replacement, repairs, and inspections across Windsor and Essex County.",
};

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville",
];

export default function RoofingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/7418277/pexels-photo-7418277.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Roofing</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Roofing Services{" "}
            <span className="text-copper">Windsor Ontario</span>
          </h1>
          <p className="text-text/80 text-lg max-w-xl mb-8">
            Shingle replacement, repairs, and honest inspections from experienced local roofers.
            We&rsquo;ll tell you what your roof actually needs - not just what makes us the most money.
          </p>
          <Link
            href="/contact"
            className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Get a Free Roof Estimate
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                Roofing Services in Windsor
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Your roof is the most critical protection your home has. When it fails, everything
                  underneath is at risk. Windsor Exterior Pros approaches every roofing job with the
                  same standard: quality materials, proper installation, and an honest assessment of
                  what your roof actually needs.
                </p>
                <p>
                  We don&rsquo;t push full replacements when a repair will do. And we don&rsquo;t
                  do repairs when you need a replacement. You get a straight answer and a fair price.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  { name: "Shingle Replacement", desc: "Full roof replacement with quality asphalt shingles. We strip the old roof, inspect the decking, and install properly with ice and water shield at all critical points." },
                  { name: "Roof Repairs", desc: "Missing or damaged shingles, flashing failures, valley repairs. We fix the source of the leak, not just the symptom." },
                  { name: "Roof Inspections", desc: "Honest, thorough inspections with photos and a written report. Know exactly what condition your roof is in." },
                  { name: "Ventilation", desc: "Ridge vents, soffit intake, attic ventilation corrections. Poor ventilation shortens roof life and increases energy costs." },
                ].map((svc) => (
                  <div key={svc.name} className="flex gap-3 p-4 bg-surface rounded-lg border border-[#E8E4DF]">
                    <div className="w-2 h-2 rounded-full bg-copper flex-shrink-0 mt-2" />
                    <div>
                      <p className="font-semibold text-text text-sm mb-0.5">{svc.name}</p>
                      <p className="text-muted text-sm">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/7418277/pexels-photo-7418277.jpeg"
                  alt="Roofing services Windsor Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Free Estimates", sub: "Written, detailed quotes" },
                  { label: "Licensed & Insured", sub: "WSIB compliant" },
                  { label: "Quality Materials", sub: "No cut-rate products" },
                  { label: "Workmanship Guarantee", sub: "We stand behind our work" },
                ].map((badge) => (
                  <div key={badge.label} className="bg-surface p-3 rounded-lg border border-[#E8E4DF]">
                    <p className="font-heading font-bold text-text text-sm">{badge.label}</p>
                    <p className="text-muted text-xs mt-0.5">{badge.sub}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl text-text mb-4">
            Roofing Services Across Windsor-Essex
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {ALL_AREAS.map((area) => (
              <span key={area} className="bg-surface-2 border border-[#E8E4DF] text-muted text-sm px-3 py-1.5 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <LeadForm
        heading="Get a Free Roofing Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
