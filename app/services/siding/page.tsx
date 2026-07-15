import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Professional Siding Installation Windsor Ontario",
  description:
    "Vinyl, fiber cement, and board & batten siding installation in Windsor Ontario. Expert craftsmanship, free estimates, serving Windsor-Essex. Serving all of Essex County.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/services/siding" },
  openGraph: {
    title: "Professional Siding Installation Windsor Ontario | Windsor Exterior Pros",
    description: "Vinyl, fiber cement, and board & batten siding that protects your home and transforms curb appeal. Free estimates across Windsor-Essex.",
    images: [{ url: "/vinyl-siding-installation-windsor-ontario.jpg", width: 1600, height: 900, alt: "White vertical siding with dark roofline trim" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Siding Installation Windsor Ontario | Windsor Exterior Pros",
    description: "Vinyl, fiber cement, and board & batten siding installation. Free estimates across Windsor and Essex County.",
    images: ["/vinyl-siding-installation-windsor-ontario.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Siding", item: "https://www.windsorexteriorpros.com/services/siding" },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What type of siding is best for Windsor Ontario homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vinyl siding is by far the most popular choice in Windsor-Essex because it handles our climate extremes well - hot humid summers, freeze-thaw winters, and the occasional ice storm. It doesn't rot, never needs painting, and holds its colour for decades. Fiber cement (James Hardie) is a premium alternative that's harder and more fire-resistant, though it requires more maintenance. We'll help you pick the right product for your home's style and your long-term goals.",
      },
    },
    {
      "@type": "Question",
      name: "How long does siding installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Windsor residential siding jobs take 2 to 5 days depending on the size of the home, the number of details (dormers, bay windows, trim work), and whether we're removing old siding first. We give you a realistic timeline during the estimate and stick to it.",
      },
    },
    {
      "@type": "Question",
      name: "Can you install siding over existing siding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In some cases, yes - vinyl siding can be installed over existing wood siding if the substrate is solid and flat. However, we often recommend removing old siding first so we can inspect the sheathing and house wrap underneath, address any moisture damage, and ensure a flat, solid base. Covering up hidden rot or mold is never a good idea long-term.",
      },
    },
    {
      "@type": "Question",
      name: "Does new siding improve energy efficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, especially if you're replacing older siding that has gaps, missing caulking, or damaged house wrap underneath. New siding with proper insulation backing and a continuous air barrier can noticeably reduce drafts and heating/cooling costs in Windsor's climate. Insulated vinyl siding adds a layer of rigid foam behind the panels for even better thermal performance.",
      },
    },
    {
      "@type": "Question",
      name: "What causes siding to crack or warp on Windsor homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common causes in our area are: impact damage (hail, flying debris during storms), improper installation that doesn't allow for thermal expansion, age-related brittleness, and prolonged moisture exposure from missing or failed caulking. Cheap siding products also tend to warp or fade faster in Windsor's temperature swings. Quality installation matters as much as the product.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle siding repairs or only full replacements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do both. If you have localized damage - storm damage, a cracked section, or impact damage from a lawn mower or vehicle - we can often replace just those panels. We'll give you an honest assessment of whether a targeted repair makes sense or whether the overall condition of your siding makes full replacement the better value.",
      },
    },
    {
      "@type": "Question",
      name: "What siding colours are available in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We carry a wide range of vinyl and fiber cement siding in dozens of colours - from classic whites and beiges to bold greys, charcoals, and deep blues that are trending in Windsor-Essex right now. We bring samples to your estimate appointment so you can see how colours look against your trim, roofline, and landscaping.",
      },
    },
  ],
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

const RELATED_SERVICES = [
  { name: "Soffit & Fascia", desc: "Protect your roofline and improve attic ventilation with new aluminum soffit and fascia.", href: "/services/soffit-fascia" },
  { name: "Windows & Doors", desc: "Energy-efficient replacement windows and entry doors to complete your home's exterior.", href: "/services/windows-doors" },
  { name: "Seamless Eavestrough", desc: "Custom-fabricated on-site. Zero seams means zero leak points on Windsor homes.", href: "/services/seamless-eavestrough" },
];

export default function SidingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/vinyl-siding-installation-windsor-ontario.jpg)" }}
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
                  Your home&rsquo;s siding is its first line of defense against Windsor&rsquo;s weather - and its
                  biggest visual statement to the neighborhood. Worn, faded, or damaged siding affects
                  both your home&rsquo;s protection and its value.
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
                {["Windsor-Essex Service", "Free Written Estimates", "Clear Project Scope", "Written Project Scope"].map((badge) => (
                  <span key={badge} className="bg-surface border border-[#E8E4DF] text-muted text-xs font-semibold px-3 py-1.5 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/vinyl-siding-installation-windsor-ontario.jpg"
                  alt="White vertical siding with dark roofline trim"
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

      {/* Related Services */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <h2 className="font-heading font-extrabold text-2xl text-text mb-2">Related Services</h2>
            <p className="text-muted">Other exterior services we provide across Windsor-Essex.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {RELATED_SERVICES.map((svc, i) => (
              <AnimatedSection key={svc.href} delay={i * 0.08}>
                <Link href={svc.href} className="group block bg-surface rounded-xl border border-[#E8E4DF] hover:border-copper p-5 transition-all">
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
      <section id="faq" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">
              Siding FAQ - Windsor Ontario
            </h2>
            <p className="text-muted">Common questions from Windsor homeowners about siding installation and repairs.</p>
          </AnimatedSection>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="group bg-surface-2 rounded-xl border border-[#E8E4DF] overflow-hidden">
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
          <p className="text-muted text-sm mt-4">Serving Windsor-Essex. Free estimates. No obligation.</p>
        </div>
      </section>

      <LeadForm
        heading="Get a Free Siding Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
