import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Landscaping & Hardscaping Windsor Ontario",
  description:
    "Professional landscaping and hardscaping in Windsor Ontario. Interlocking, patios, stone work, and lawn care across Essex County. Free estimates.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/services/landscaping-hardscaping" },
  openGraph: {
    title: "Landscaping & Hardscaping Windsor Ontario | Windsor Exterior Pros",
    description: "Interlocking, patios, stone work, and lawn care across Windsor and Essex County. Free estimates.",
    images: [{ url: "/landscaping-hardscaping-interlocking-windsor-ontario.jpg", width: 1600, height: 900, alt: "Landscaping and hardscaping Windsor Ontario" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping & Hardscaping Windsor Ontario | Windsor Exterior Pros",
    description: "Interlocking, patios, stone work, and lawn care in Windsor-Essex. Free estimates, serving Windsor-Essex.",
    images: ["/landscaping-hardscaping-interlocking-windsor-ontario.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Landscaping & Hardscaping", item: "https://www.windsorexteriorpros.com/services/landscaping-hardscaping" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Landscaping and Hardscaping",
  provider: { "@type": "LocalBusiness", name: "Windsor Exterior Pros" },
  areaServed: "Windsor, Ontario",
  description: "Landscaping and hardscaping services in Windsor Ontario. Interlocking, patio installation, stone work, and lawn care.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is interlocking stone and why is it popular in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interlocking stone (also called interlock or paving stone) is a system of individual concrete or natural stone pavers laid in a pattern over a compacted granular base. Unlike poured concrete, interlocking stone flexes with Windsor's freeze-thaw cycles without cracking - individual pavers can shift slightly and be reset, while a concrete slab will crack and heave permanently. It's the preferred choice for driveways, walkways, and patios across Windsor-Essex.",
      },
    },
    {
      "@type": "Question",
      name: "Does interlocking stone hold up to Windsor winters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - when installed correctly with proper base preparation, interlocking stone is ideal for Windsor's climate. The key is a deep, well-compacted granular base (typically 6-8\" for driveways) that allows for drainage and handles frost heave. Proper base prep is what separates a patio that lasts 30 years from one that shifts and settles in 3.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a patio or driveway installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical residential patio installation in Windsor takes 2-5 days depending on size, design complexity, and site conditions. Driveway replacements generally take 3-7 days. We handle excavation, base preparation, edging, laying the pavers, and final sanding and compaction. We give you a realistic timeline during the estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Can interlocking stone driveways handle the weight of vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - properly installed interlocking concrete pavers are designed for vehicle traffic and can handle the weight of standard passenger vehicles, SUVs, and light trucks. The key factors are using commercial-grade pavers (at least 60mm thick for driveways) and a properly prepared base that distributes the load. We spec the right product for the application.",
      },
    },
    {
      "@type": "Question",
      name: "How do I maintain interlocking stone in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interlocking stone is low maintenance. Sweep or blow off debris regularly. Re-sand joints with polymeric sand if weeds start coming through (typically every few years). Sealing is optional but extends the life and keeps colours vibrant. In winter, use plastic shovels to avoid scratching pavers and stick to sand for traction - avoid calcium chloride de-icers as they can damage the surface finish over time.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between interlocking stone and stamped concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both look great when new, but they perform very differently in Windsor's climate. Interlocking stone can flex and be repaired paver-by-paver. Stamped concrete is a monolithic slab - when it cracks (and in Windsor's freeze-thaw conditions, it will eventually crack), it can't be repaired invisibly. Interlocking is also easier to modify or extend later if you want to add features. For long-term value in our climate, we recommend interlocking.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle grading and drainage along with hardscaping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - proper drainage is built into every project. We grade surfaces to direct water away from your home's foundation and integrate drainage solutions like channel drains where needed. Windsor's flat terrain and clay soil means drainage planning is especially important - poor grading leads to pooling water, foundation issues, and deteriorating hardscaping over time.",
      },
    },
  ],
};

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville",
];

const RELATED_SERVICES = [
  { name: "Windows & Doors", desc: "Energy-efficient replacement windows and entry doors to complete your home's exterior.", href: "/services/windows-doors" },
  { name: "Siding", desc: "Vinyl and fiber cement siding that protects your home and transforms its curb appeal.", href: "/services/siding" },
  { name: "Seamless Eavestrough", desc: "Custom-fabricated on-site. Zero seams means zero leak points on Windsor homes.", href: "/services/seamless-eavestrough" },
];

export default function LandscapingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/landscaping-hardscaping-interlocking-windsor-ontario.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Landscaping & Hardscaping</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Landscaping &amp; Hardscaping{" "}
            <span className="text-copper">Windsor Ontario</span>
          </h1>
          <p className="text-text/80 text-lg max-w-xl mb-8">
            Interlocking, patios, stone work, and lawn care that extends your living space and
            elevates your property&rsquo;s value across Windsor and Essex County.
          </p>
          <Link
            href="/contact#estimate-form"
            className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-5">
                Landscaping & Hardscaping Services
              </h2>
              <div className="space-y-4 text-muted leading-relaxed mb-6">
                <p>
                  Your property&rsquo;s exterior isn&rsquo;t just its walls and roof - it&rsquo;s the entire picture from the street. Windsor Exterior Pros handles the ground-level work that completes your home&rsquo;s exterior transformation.
                </p>
                <p>
                  From interlocking stone driveways and walkways to custom patio spaces and professional lawn maintenance, we bring the same attention to detail to your outdoor spaces as we do to every roofline and eavestrough we install.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Interlocking Stone", desc: "Driveways, walkways, and pathways using quality interlocking pavers. Durable, attractive, and adds significant curb appeal." },
                  { name: "Patio Installation", desc: "Custom patio designs using interlocking, natural stone, or poured concrete. Extend your living space outdoors." },
                  { name: "Retaining Walls", desc: "Natural and interlocking block retaining walls for slope management and garden definition." },
                  { name: "Lawn Care", desc: "Professional lawn maintenance, seasonal cleanup, and landscaping services to keep your property looking sharp." },
                  { name: "Garden Beds", desc: "Edging, mulching, planting, and maintenance of garden areas around your home's perimeter." },
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
                  src="/landscaping-hardscaping-interlocking-windsor-ontario.jpg"
                  alt="Landscaping and hardscaping Windsor Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
              Landscaping & Hardscaping FAQ - Windsor Ontario
            </h2>
            <p className="text-muted">Common questions from Windsor homeowners about interlocking, patios, and hardscaping.</p>
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
            Landscaping Across Windsor-Essex
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
        heading="Get a Free Landscaping Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
