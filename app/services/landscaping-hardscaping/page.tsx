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
  alternates: { canonical: "https://windsorexteriorpros.ca/services/landscaping-hardscaping" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Landscaping & Hardscaping", item: "https://windsorexteriorpros.ca/services/landscaping-hardscaping" },
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

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville",
];

export default function LandscapingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
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
            href="/contact"
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
                  <div key={svc.name} className="flex gap-3 p-4 bg-surface rounded-lg border border-[rgba(200,122,32,0.15)]">
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
                  src="https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg"
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

      {/* Service Areas */}
      <section className="py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl text-text mb-4">
            Landscaping Across Windsor-Essex
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {ALL_AREAS.map((area) => (
              <span key={area} className="bg-surface-2 border border-[rgba(200,122,32,0.2)] text-muted text-sm px-3 py-1.5 rounded-full">
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
