import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Professional Siding Installation Windsor Ontario",
  description:
    "Vinyl, fiber cement, and board & batten siding installation in Windsor Ontario. Expert craftsmanship, free estimates, licensed & insured. Serving all of Essex County.",
  alternates: { canonical: "https://windsorexteriorpros.ca/services/siding" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://windsorexteriorpros.ca/services" },
    { "@type": "ListItem", position: 3, name: "Siding", item: "https://windsorexteriorpros.ca/services/siding" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Siding Installation",
  provider: { "@type": "LocalBusiness", name: "Windsor Exterior Pros" },
  areaServed: "Windsor, Ontario",
  description: "Professional siding installation in Windsor Ontario. Vinyl, fiber cement, and board & batten options.",
};

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville",
];

const SIDING_TYPES = [
  {
    name: "Vinyl Siding",
    desc: "The most popular choice for Windsor homeowners. Low maintenance, excellent insulation, and available in hundreds of colors and profiles. Stands up to Windsor-Essex winters without cracking or fading.",
    features: ["Virtually maintenance-free", "Excellent insulation options", "Wide color selection", "30-50 year lifespan"],
  },
  {
    name: "Fiber Cement Siding",
    desc: "James Hardie and similar products offer the look of wood with none of the maintenance. Fire-resistant, pest-resistant, and impact-resistant - a premium upgrade for discerning Windsor homeowners.",
    features: ["Exceptional durability", "Fire and pest resistant", "Low maintenance", "Realistic wood textures"],
  },
  {
    name: "Board & Batten",
    desc: "A vertical siding style that creates a bold, modern farmhouse aesthetic. Popular for accent sections, garages, and full-home applications where distinctive curb appeal is the goal.",
    features: ["Modern and timeless look", "Works as accent or full coverage", "Available in vinyl and fiber cement", "Creates strong visual impact"],
  },
];

export default function SidingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/10038012/pexels-photo-10038012.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Siding</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Professional Siding Installation{" "}
            <span className="text-copper">Windsor Ontario</span>
          </h1>
          <p className="text-text/80 text-lg max-w-xl mb-8">
            Vinyl, fiber cement, and board & batten siding that protects your home and transforms
            its curb appeal. Free estimates across Windsor and Essex County.
          </p>
          <Link
            href="/contact"
            className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                New Siding Changes Everything
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Your home's siding is its first line of defense against Windsor's weather - and its
                  biggest visual statement to the neighborhood. Worn, faded, or damaged siding affects
                  both your home's protection and its value.
                </p>
                <p>
                  Windsor Exterior Pros installs siding the right way - with proper moisture barriers,
                  correct overlap and fastening, and meticulous attention to trim and corner details.
                  The difference between a professional installation and a rushed job shows within a
                  few seasons.
                </p>
                <p>
                  We offer three main siding types to match your budget, aesthetic preferences, and
                  long-term maintenance goals. Every quote is free, written, and comes with no
                  pressure to commit.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Licensed & Insured", "Free Written Estimates", "No Subcontractors", "Workmanship Guarantee"].map((badge) => (
                  <span key={badge} className="bg-surface border border-[#E8E4DF] text-muted text-xs font-semibold px-3 py-1.5 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/10038012/pexels-photo-10038012.jpeg"
                  alt="Professional siding installation Windsor Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Siding Types */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">
              Siding Options We Install
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Each siding type has its strengths. We help you choose the right option for your home,
              budget, and goals.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIDING_TYPES.map((type, i) => (
              <AnimatedSection key={type.name} delay={i * 0.1}>
                <div className="bg-surface-2 rounded-xl border border-[#E8E4DF] p-6 h-full flex flex-col">
                  <h3 className="font-heading font-bold text-xl text-text mb-3">{type.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-grow">{type.desc}</p>
                  <ul className="space-y-2">
                    {type.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text">
                        <svg className="w-4 h-4 text-copper flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl text-text mb-4">
            Siding Installation Across Windsor-Essex
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {ALL_AREAS.map((area) => (
              <span key={area} className="bg-surface border border-[#E8E4DF] text-muted text-sm px-3 py-1.5 rounded-full">
                {area}
              </span>
            ))}
          </div>
          <p className="text-muted text-sm mt-4">Licensed &amp; insured. Free estimates. No obligation.</p>
        </div>
      </section>

      <LeadForm
        heading="Get a Free Siding Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
