import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Roofing Services Windsor Ontario",
  description:
    "Professional roofing services in Windsor Ontario. Shingle replacement, repairs, and inspections. Free estimates from serving Windsor-Essex roofers serving all of Essex County.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/services/roofing" },
  openGraph: {
    title: "Roofing Services Windsor Ontario | Windsor Exterior Pros",
    description: "Shingle replacement, repairs, and honest inspections from experienced local roofers in Windsor-Essex. Free estimates.",
    images: [{ url: "/asphalt-shingle-roofing-windsor-ontario.jpg", width: 1600, height: 900, alt: "Roofing services Windsor Ontario" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Services Windsor Ontario | Windsor Exterior Pros",
    description: "Shingle replacement, repairs, and inspections from local Windsor-Essex roofers. Free estimates.",
    images: ["/asphalt-shingle-roofing-windsor-ontario.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Roofing", item: "https://www.windsorexteriorpros.com/services/roofing" },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long do asphalt shingle roofs last in Windsor Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard 3-tab asphalt shingles typically last 15-20 years in Windsor's climate. Architectural (dimensional) shingles, which most homes use today, last 25-30 years. Windsor's freeze-thaw cycles, summer heat, and the occasional ice storm can shorten shingle life if the roof wasn't installed with proper ventilation and ice & water shield. Premium shingles with longer manufacturer warranties are worth considering for long-term ownership.",
      },
    },
    {
      "@type": "Question",
      name: "What are signs I need a new roof in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Warning signs include: shingles that are curling, cracking, or missing granules (you'll see dark spots and granules in your eavestroughs); shingles that are buckling or cupping; visible sagging or soft spots on the deck; daylight visible through the attic; water stains on ceilings or walls after rain; and a roof that's 20+ years old. If you're seeing any of these, get an inspection before the next Windsor winter.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an ice and water shield on my Windsor roof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - ice and water shield is essential for Windsor homes. Ontario Building Code requires it along the eaves, and we apply it in all vulnerable areas including valleys, around skylights, and at roof penetrations. Windsor gets ice damming conditions every winter - ice and water shield is what protects your roof deck and attic when melting ice backs up under shingles.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install a new roof over existing shingles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some jurisdictions allow one layer of shingles over existing, but a full tear-off makes it possible to inspect the roof deck, replace damaged sheathing where needed, and install fresh underlayment. The right approach depends on the existing roof and applicable local requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a roof replacement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Windsor residential roof replacements are completed in one to two days. Larger homes, complex rooflines, or roofs needing significant deck repair may take an additional day. We work efficiently and clean up debris daily so your property is left tidy. We'll give you a clear timeline during the estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What roofing warranties do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manufacturer warranty terms vary by shingle product. Any manufacturer or workmanship warranty that applies to your project will be identified in the written estimate or project agreement before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How does Windsor weather affect my roof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Windsor is one of Canada's most weather-diverse cities - we get humid summers that bake shingles, cold winters with freeze-thaw cycles that stress flashing and seals, ice storms that load up eaves, and wind events that can lift poorly fastened shingles. Proper installation with correct nailing patterns, quality underlayment, ice & water shield at the eaves, and proper attic ventilation is what makes a Windsor roof last.",
      },
    },
  ],
};

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville",
];

const RELATED_SERVICES = [
  { name: "Seamless Eavestrough", desc: "Custom-fabricated on-site. Zero seams means zero leak points on Windsor homes.", href: "/services/seamless-eavestrough" },
  { name: "Soffit & Fascia", desc: "Protect your roofline and improve attic ventilation with new aluminum soffit and fascia.", href: "/services/soffit-fascia" },
  { name: "Siding", desc: "Vinyl and fiber cement siding that protects your home and transforms its curb appeal.", href: "/services/siding" },
];

export default function RoofingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/asphalt-shingle-roofing-windsor-ontario.jpg)" }}
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
                  src="/asphalt-shingle-roofing-windsor-ontario.jpg"
                  alt="Roofing services Windsor Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Free Estimates", sub: "Written, detailed quotes" },
                  { label: "Local Service", sub: "Windsor and Essex County" },
                  { label: "Quality Materials", sub: "No cut-rate products" },
                  { label: "Written Project Scope", sub: "Clear work details" },
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

      {/* Related Services */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <h2 className="font-heading font-extrabold text-2xl text-text mb-2">Related Services</h2>
            <p className="text-muted">Other exterior services we provide across Windsor-Essex.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.href} delay={i * 0.08}>
                <Link href={svc.href} className="group block bg-surface-2 rounded-xl border border-[#E8E4DF] hover:border-copper p-5 transition-all">
                  <h3 className="font-heading font-bold text-text group-hover:text-copper transition-colors mb-1.5">{svc.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">{svc.desc}</p>
                  <span className="text-copper text-sm font-semibold">Explore {svc.name} &rsaquo;</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">
              Roofing FAQ - Windsor Ontario
            </h2>
            <p className="text-muted">Common questions from Windsor homeowners about roofing replacement and repairs.</p>
          </AnimatedSection>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="group bg-surface rounded-xl border border-[#E8E4DF] overflow-hidden">
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
                  <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-[#E8E4DF] pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              </AnimatedSection>
            ))}
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
