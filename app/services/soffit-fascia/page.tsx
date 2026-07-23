import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Soffit & Fascia Installation Windsor Ontario",
  description:
    "Professional soffit and fascia installation in Windsor Ontario. Protect your roofline from moisture, pests, and rot. Free estimates. Serving Windsor-Essex.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/services/soffit-fascia" },
  openGraph: {
    title: "Soffit & Fascia Installation Windsor Ontario | Windsor Exterior Pros",
    description: "Aluminum soffit and fascia installation to protect your roofline and improve attic ventilation. Free estimates across Windsor-Essex.",
    images: [{ url: "/soffit-fascia-installation-windsor-ontario.jpg", width: 1600, height: 900, alt: "Roofline fascia and soffit detail beneath a gable" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soffit & Fascia Installation Windsor Ontario | Windsor Exterior Pros",
    description: "Aluminum soffit and fascia installation in Windsor-Essex. Protect your roofline, improve attic ventilation, and eliminate pest entry.",
    images: ["/soffit-fascia-installation-windsor-ontario.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Soffit & Fascia", item: "https://www.windsorexteriorpros.com/services/soffit-fascia" },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between soffit and fascia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fascia is the vertical board that runs along the edge of your roofline - it's what your eavestroughs (gutters) attach to. The soffit is the horizontal panel that covers the underside of the roof overhang, bridging the gap between your exterior wall and the fascia. Together they protect your roof structure from moisture, pests, and the elements while giving your home a finished look.",
      },
    },
    {
      "@type": "Question",
      name: "Why is soffit ventilation important in Windsor Ontario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vented soffit is critical for attic airflow. In Windsor's climate, proper soffit-to-ridge ventilation prevents two major problems: summer heat buildup that bakes shingles from below and shortens roof life, and winter moisture accumulation that causes mold, rot, and ice damming. Many older Windsor homes have unvented or blocked soffits - upgrading to perforated or vented aluminum soffit is one of the best things you can do for your roof's longevity.",
      },
    },
    {
      "@type": "Question",
      name: "What are signs my soffit and fascia need replacing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common signs include: peeling paint or visible rot on wood fascia boards; soft or spongy areas when you press on the soffit; staining, sagging, or holes in the soffit panels; evidence of birds or wasps entering through gaps; water damage or staining on the fascia behind the eavestrough; and daylight visible into the attic through soffit gaps. In Windsor, wood soffit and fascia deteriorate quickly - aluminum is the better long-term choice.",
      },
    },
    {
      "@type": "Question",
      name: "Can soffit and fascia be installed without replacing the eavestroughs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the condition of your eavestroughs and how they're attached. Often we can work around existing gutters or temporarily remove and reinstall them. If your eavestroughs are in good shape and properly attached, we may be able to keep them. However, since we're already working along the roofline, it's often smart to evaluate and address everything at once to avoid repeating the labor cost.",
      },
    },
    {
      "@type": "Question",
      name: "What material is best for soffit and fascia in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aluminum is the standard in Windsor-Essex and for good reason - it doesn't rot, holds paint (or comes pre-finished in dozens of colours), handles our freeze-thaw winters, and is low maintenance. Vinyl is also used but can become brittle in extreme cold. We stay away from wood soffit and fascia in Windsor's climate unless it's a heritage home with specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you match soffit and fascia colours to existing trim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - we carry aluminum soffit and fascia in a wide range of colours and can match or coordinate with your existing trim, siding, and eavestrough colours. We bring samples to the estimate so you can visualize the finished look before we start.",
      },
    },
  ],
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

const RELATED_SERVICES = [
  { name: "Seamless Eavestrough", desc: "Custom-fabricated on-site. Zero seams means zero leak points on Windsor homes.", href: "/services/seamless-eavestrough" },
  { name: "Roofing", desc: "Shingle replacement and repairs from experienced local roofers. Free inspections.", href: "/services/roofing" },
  { name: "Siding", desc: "Vinyl and fiber cement siding that protects your home and transforms its curb appeal.", href: "/services/siding" },
];

export default function SoffitFasciaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/soffit-fascia-installation-windsor-ontario.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
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
            href="/contact#estimate-form"
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
                <div className="flex gap-4 p-6 bg-surface rounded-xl border border-[#E8E4DF]">
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
                  src="/soffit-fascia-installation-windsor-ontario.jpg"
                  alt="Roofline fascia and soffit detail beneath a gable"
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
                  <div key={item.name} className="flex gap-3 p-4 bg-surface-2 rounded-lg border border-[#E8E4DF]">
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
              Soffit & Fascia FAQ - Windsor Ontario
            </h2>
            <p className="text-muted">Common questions from Windsor homeowners about soffit and fascia installation.</p>
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
            Soffit &amp; Fascia Services Across Windsor-Essex
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
        heading="Get a Free Soffit & Fascia Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
