import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Soffit & Fascia Installation Windsor Ontario",
  description:
    "Professional soffit and fascia installation in Windsor Ontario. Protect your roofline from moisture, pests, and rot. Free estimates. Licensed & insured.",
  alternates: { canonical: "https://windsorexteriorpros.ca/services/soffit-fascia" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Soffit & Fascia", item: "https://windsorexteriorpros.ca/services/soffit-fascia" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Soffit and Fascia Installation",
  provider: { "@type": "LocalBusiness", name: "Windsor Exterior Pros" },
  areaServed: "Windsor, Ontario",
  description: "Soffit and fascia installation and replacement across Windsor and Essex County. Protect your roofline, improve ventilation, and eliminate pest entry points.",
};

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville",
];

const WHY_MATTERS = [
  {
    title: "Moisture Protection",
    desc: "Damaged or missing soffit and fascia exposes raw wood rafters and roof decking to moisture. Left unaddressed, this leads to rot, mold, and structural damage that costs far more to repair.",
  },
  {
    title: "Pest Exclusion",
    desc: "Gaps in deteriorated soffit are prime entry points for birds, bats, squirrels, and wasps. New soffit seals these openings and prevents costly infestations.",
  },
  {
    title: "Attic Ventilation",
    desc: "Vented soffit is a critical component of your home's ventilation system. Proper airflow through vented soffit prevents heat buildup in summer and moisture buildup in winter.",
  },
  {
    title: "Curb Appeal",
    desc: "Oxidized, peeling, or bent fascia boards make even a well-maintained home look neglected. Fresh soffit and fascia gives your roofline a clean, sharp appearance.",
  },
];

export default function SoffitFasciaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/9733906/pexels-photo-9733906.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Soffit & Fascia</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Soffit &amp; Fascia Installation{" "}
            <span className="text-copper">Windsor Ontario</span>
          </h1>
          <p className="text-text/80 text-lg max-w-xl mb-8">
            Protect your roofline from moisture, pests, and rot. Proper soffit and fascia
            installation is one of the most important investments in your home&rsquo;s long-term
            health.
          </p>
          <Link
            href="/contact"
            className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">
              Why Soffit & Fascia Matter
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              These components are often overlooked - until there&rsquo;s a serious problem. Understanding
              what they do helps you make informed decisions about your home.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_MATTERS.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-surface rounded-xl border border-[rgba(200,122,32,0.2)]">
                  <div className="w-10 h-10 rounded-lg bg-copper/15 flex items-center justify-center text-copper flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text mb-1.5">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/9733906/pexels-photo-9733906.jpeg"
                  alt="Soffit and fascia installation Windsor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                What We Install
              </h2>
              <div className="space-y-4">
                {[
                  { name: "Aluminum Soffit", desc: "Vented and solid aluminum soffit panels. Vented panels provide critical airflow to your attic while blocking pest entry." },
                  { name: "Aluminum Fascia", desc: "Aluminum fascia wrapping over existing wood board. Eliminates painting forever and prevents moisture from reaching the substrate." },
                  { name: "Rake Boards", desc: "The fascia along the sloped edges of your roofline. Often damaged by weather and often replaced alongside standard fascia." },
                  { name: "Full Replacement", desc: "When the underlying wood is compromised, we replace it before installing new aluminum - giving you a complete, long-term solution." },
                ].map((item) => (
                  <div key={item.name} className="flex gap-3 p-4 bg-surface-2 rounded-lg border border-[rgba(200,122,32,0.15)]">
                    <div className="w-2 h-2 rounded-full bg-copper flex-shrink-0 mt-2" />
                    <div>
                      <p className="font-semibold text-text text-sm mb-0.5">{item.name}</p>
                      <p className="text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl text-text mb-4">
            Soffit &amp; Fascia Services Across Windsor-Essex
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {ALL_AREAS.map((area) => (
              <span key={area} className="bg-surface border border-[rgba(200,122,32,0.2)] text-muted text-sm px-3 py-1.5 rounded-full">
                {area}
              </span>
            ))}
          </div>
          <p className="text-muted text-sm mt-4">Licensed &amp; insured. Free estimates. No obligation.</p>
        </div>
      </section>

      <LeadForm
        heading="Get a Free Soffit & Fascia Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
