import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Seamless Eavestrough Installation Windsor Ontario",
  description:
    "Professional seamless eavestrough installation in Windsor Ontario. Custom on-site fabrication, 20+ colors, 5\" and 6\" K-style aluminum. Free estimates. Licensed & insured.",
  alternates: { canonical: "https://windsorexteriorpros.ca/services/seamless-eavestrough" },
  openGraph: {
    title: "Seamless Eavestrough Installation Windsor Ontario | Windsor Exterior Pros",
    description:
      "Windsor's seamless eavestrough specialists. Custom-formed on-site, zero joints, zero leaks. Free estimates across Windsor and Essex County.",
    images: [{ url: "https://images.pexels.com/photos/7418277/pexels-photo-7418277.jpeg" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://windsorexteriorpros.ca/services" },
    { "@type": "ListItem", position: 3, name: "Seamless Eavestrough", item: "https://windsorexteriorpros.ca/services/seamless-eavestrough" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Seamless Eavestrough Installation",
  provider: { "@type": "LocalBusiness", name: "Windsor Exterior Pros" },
  areaServed: "Windsor, Ontario",
  description:
    "Custom seamless eavestrough installation fabricated on-site. 5\" and 6\" K-style aluminum, .032 gauge, 20+ colors. No seams means no leaks.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does eavestrough installation cost in Windsor Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eavestrough installation costs in Windsor typically range from $8 to $20 per linear foot for seamless aluminum, depending on the size, profile, and complexity of the job. The best way to get an accurate price is a free on-site estimate - we provide written, itemized quotes with no obligation.",
      },
    },
    {
      "@type": "Question",
      name: "What is a seamless eavestrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A seamless eavestrough is fabricated from a single continuous piece of aluminum that is custom-formed on-site to fit your home exactly. Unlike sectional gutters that are sold in pre-cut lengths and joined together, seamless gutters have no seams along straight runs - only at corners and downspout connections. This eliminates the most common source of eavestrough leaks.",
      },
    },
    {
      "@type": "Question",
      name: "How often should eavestroughs be cleaned in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Windsor-Essex County, we recommend cleaning eavestroughs at least twice a year - once in late spring after tree pollen and seeds fall, and once in late fall after leaves have dropped. Homes with trees nearby may need cleaning 3-4 times per year.",
      },
    },
    {
      "@type": "Question",
      name: "What size eavestrough do I need for my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Windsor homes use 5\" K-style eavestroughs, which handle average roof drainage effectively. Larger homes, steeply pitched roofs, or roofs with a large surface area may benefit from 6\" eavestroughs for greater water capacity. We assess your specific roof and drainage needs during the free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do seamless eavestroughs come in different colors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - we offer 20+ colors of seamless aluminum eavestrough to match or complement your home's exterior. Colors are baked-on finishes that resist fading and peeling far longer than painted gutters.",
      },
    },
    {
      "@type": "Question",
      name: "Can you repair just part of my eavestrough?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer eavestrough repairs including sealing leaking seams, re-pitching sagging sections, replacing damaged sections, and fixing or replacing downspouts. We'll give you an honest assessment of whether repair or replacement is the better value.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install gutter guards in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we supply and install eavestrough guards (also called gutter guards or leaf guards) that reduce the frequency of cleaning by blocking debris while allowing water to flow through freely. Ask about gutter guard options when you request your free estimate.",
      },
    },
  ],
};

const SERVICES_LIST = [
  { name: "Seamless Eavestrough Installation", desc: "Custom-formed on-site from continuous aluminum coil. Perfect fit, zero seams on straight runs." },
  { name: "Eavestrough Repair", desc: "Seam sealing, re-pitching, section replacement. We'll tell you honestly whether repair or replacement makes more sense." },
  { name: "Eavestrough Cleaning", desc: "Full debris removal, flush-through, and inspection. Recommended twice yearly in Windsor-Essex." },
  { name: "Gutter Guard Installation", desc: "Reduce cleaning frequency with quality leaf guards that let water in and keep debris out." },
  { name: "Downspout Replacement", desc: "2x3\" and 3x4\" downspouts properly positioned to direct water away from your foundation." },
];

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville", "Belle River", "Harrow", "Tilbury",
];

export default function SeamlessEavestroughPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Page Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/7418277/pexels-photo-7418277.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-copper transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Seamless Eavestrough</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Seamless Eavestrough Installation{" "}
            <span className="text-copper">Windsor Ontario</span>
          </h1>
          <p className="text-text/80 text-lg max-w-xl mb-8">
            Custom-fabricated on-site. No seams on straight runs means no leak points. The best
            eavestrough system you can install on a Windsor home.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="#faq"
              className="border border-text/30 hover:border-copper text-text hover:text-copper font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes Seamless Different */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                What Makes Seamless Eavestroughs Different?
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Traditional sectional eavestroughs are sold in pre-cut lengths at hardware stores
                  and joined together with connectors. Every joint is a potential failure point where
                  water can seep through, freeze, expand, and eventually leak.
                </p>
                <p>
                  Seamless eavestroughs are different. We bring a custom roll-forming machine to
                  your property and fabricate each run of eavestrough from a single continuous coil
                  of aluminum - cut to the exact length your home needs. The result is zero seams on
                  straight runs, which means zero seam leaks.
                </p>
                <p>
                  The only joints in a seamless system are at inside corners, outside corners, and
                  downspout outlets - each of which is professionally sealed and fitted. This is why
                  seamless eavestroughs last significantly longer and require far less maintenance
                  than sectional systems.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/7418277/pexels-photo-7418277.jpeg"
                  alt="Seamless eavestrough installation Windsor Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">
              Material Specifications
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              We use quality materials that stand up to Windsor-Essex winters and handle heavy rain
              events without issue.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  label: "Profile",
                  value: "5\" and 6\" K-style",
                  desc: "The standard for residential homes. Higher capacity than half-round, handles Windsor rainfall volumes.",
                },
                {
                  label: "Material",
                  value: ".032 gauge aluminum",
                  desc: "Residential-grade aluminum. Corrosion-resistant, lightweight, and holds its shape season after season.",
                },
                {
                  label: "Colors",
                  value: "20+ standard colors",
                  desc: "Baked-on factory finish. Matches or complements virtually any exterior color scheme.",
                },
              ].map((spec) => (
                <div key={spec.label} className="bg-surface-2 rounded-xl border border-[rgba(200,122,32,0.2)] p-6">
                  <p className="text-copper font-heading font-bold text-sm uppercase tracking-wider mb-1">
                    {spec.label}
                  </p>
                  <p className="font-heading font-extrabold text-2xl text-text mb-2">{spec.value}</p>
                  <p className="text-muted text-sm">{spec.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">
              Eavestrough Services in Windsor
            </h2>
            <p className="text-muted max-w-xl">
              Full-service eavestrough company - from new installation to cleaning, repairs, and
              gutter guard systems.
            </p>
          </AnimatedSection>
          <div className="space-y-4">
            {SERVICES_LIST.map((svc, i) => (
              <AnimatedSection key={svc.name} delay={i * 0.07}>
                <div className="flex gap-4 p-5 bg-surface rounded-xl border border-[rgba(200,122,32,0.2)]">
                  <div className="w-8 h-8 rounded-full bg-copper flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-text mb-1">{svc.name}</h3>
                    <p className="text-muted text-sm">{svc.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">
              Eavestrough FAQ - Windsor Ontario
            </h2>
            <p className="text-muted">
              Common questions from Windsor homeowners about seamless eavestroughs and gutters.
            </p>
          </AnimatedSection>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="group bg-surface-2 rounded-xl border border-[rgba(200,122,32,0.2)] overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-text font-semibold hover:text-copper transition-colors">
                    {faq.name}
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-copper transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-[rgba(200,122,32,0.15)] pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl text-text mb-4">
            Seamless Eavestrough Installation Across Windsor-Essex
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {ALL_AREAS.map((area) => (
              <span key={area} className="bg-surface border border-[rgba(200,122,32,0.2)] text-muted text-sm px-3 py-1.5 rounded-full">
                {area}
              </span>
            ))}
          </div>
          <p className="text-muted text-sm mt-4">
            Licensed &amp; insured. Free estimates. Call or request online.
          </p>
        </div>
      </section>

      <LeadForm
        heading="Get a Free Eavestrough Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
