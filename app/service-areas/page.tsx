import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Service Areas - Windsor & Essex County Exterior Contractors",
  description:
    "Windsor Exterior Pros serves all of Windsor and Essex County. Seamless eavestrough, siding, roofing, soffit & fascia across LaSalle, Tecumseh, Amherstburg, Leamington and more.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/service-areas" },
  openGraph: {
    title: "Service Areas - Windsor & Essex County Exterior Contractors",
    description: "Windsor Exterior Pros serves all of Windsor and Essex County. Seamless eavestrough, siding, roofing, soffit & fascia. Free estimates.",
    images: [{ url: "/windsor-exterior-pros-social.jpg", width: 1200, height: 630, alt: "Windsor Exterior Pros" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas - Windsor & Essex County Exterior Contractors",
    description: "Windsor Exterior Pros serves all of Windsor and Essex County. Free estimates, serving Windsor-Essex.",
    images: ["/windsor-exterior-pros-social.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.windsorexteriorpros.com/service-areas" },
  ],
};

const LINKED_AREAS = [
  {
    name: "LaSalle",
    href: "/service-areas/lasalle",
    desc: "Serving LaSalle homeowners with seamless eavestrough, siding, soffit & fascia, and all exterior services.",
    pop: "~32,000",
  },
  {
    name: "Tecumseh",
    href: "/service-areas/tecumseh",
    desc: "Complete exterior contracting services for Tecumseh and surrounding areas.",
    pop: "~24,000",
  },
  {
    name: "Amherstburg",
    href: "/service-areas/amherstburg",
    desc: "Premium exterior services for Amherstburg homeowners. Free estimates, clear project communication.",
    pop: "~23,000",
  },
  {
    name: "Leamington",
    href: "/service-areas/leamington",
    desc: "Serving Leamington and Kingsville with full exterior contracting services.",
    pop: "~30,000",
  },
  {
    name: "Lakeshore",
    href: "/service-areas/lakeshore",
    desc: "Essex County's growing community - we serve all of Lakeshore including Belle River.",
    pop: "~37,000",
  },
  {
    name: "Essex",
    href: "/service-areas/essex",
    desc: "Exterior contracting for Essex and surrounding rural communities.",
    pop: "~21,000",
  },
  {
    name: "Kingsville",
    href: "/service-areas/kingsville",
    desc: "Complete exterior services for Kingsville homeowners.",
    pop: "~21,000",
  },
];

const ALL_COMMUNITIES = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville", "Belle River",
  "Harrow", "Tilbury", "McGregor", "Cottam", "Comber",
  "Woodslee", "Maidstone", "Oldcastle", "Riverside",
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="py-20 bg-surface border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Service Areas</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Serving Windsor &amp;{" "}
            <span className="text-copper">Essex County</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Windsor Exterior Pros is based in Windsor and serves all of Essex County, Ontario. Whether
            you&rsquo;re in LaSalle, Tecumseh, Amherstburg, Leamington, or anywhere in between - we
            bring the same quality exterior contracting to your door. Free estimates, no obligation.
          </p>
        </div>
      </section>

      {/* Featured Area Cards */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-2">
              Primary Service Areas
            </h2>
            <p className="text-muted">
              Click any area to learn more about our services in that community.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LINKED_AREAS.map((area, i) => (
              <AnimatedSection key={area.name} delay={i * 0.07}>
                <Link
                  href={area.href}
                  className="group block bg-surface rounded-xl border border-[#E8E4DF] hover:border-copper p-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-text text-xl group-hover:text-copper transition-colors">
                      {area.name}
                    </h3>
                    <span className="text-xs text-muted bg-surface-2 px-2 py-1 rounded-full">
                      {area.pop} residents
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4">{area.desc}</p>
                  <span className="text-copper text-sm font-semibold group-hover:text-copper-light transition-colors">
                    View {area.name} services &rsaquo;
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Windsor (primary city) */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="font-heading font-extrabold text-3xl text-text mb-4">
                Windsor, Ontario - Home Base
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Windsor is where we got our start and where the majority of our work happens. As
                Windsor homeowners ourselves, we understand the specific challenges Windsor&rsquo;s
                climate presents - from the heavy spring rains that test eavestrough systems to the
                freeze-thaw cycles that stress soffit and fascia.
              </p>
              <p className="text-muted leading-relaxed">
                We service all Windsor neighborhoods - from Walkerville and Riverside to South Windsor,
                Forest Glade, and everything in between. If you&rsquo;re a Windsor homeowner, we&rsquo;re
                local to you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Communities */}
      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-2xl text-text mb-6">
              All Communities We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {ALL_COMMUNITIES.map((community) => (
                <span
                  key={community}
                  className="bg-surface border border-[#E8E4DF] text-text text-sm font-semibold px-4 py-2 rounded-full"
                >
                  {community}
                </span>
              ))}
            </div>
            <p className="text-muted text-sm">
              Don&rsquo;t see your community? Call or email us - we likely serve your area.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <LeadForm
        heading="Get a Free Estimate in Your Area"
        subheading="Serving Windsor-Essex. Serving Windsor and all of Essex County. No obligation."
      />
    </>
  );
}
