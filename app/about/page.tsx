import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "About Our Windsor Exterior Team",
  description:
    "Learn about Windsor Exterior Pros and our exterior contracting services across Windsor and Essex County.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/about" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.windsorexteriorpros.com/about" },
  ],
};

const VALUES = [
  {
    title: "Clear Assessments",
    desc: "We assess the property, explain what we observe, and discuss appropriate exterior service options for the project.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Written Estimates",
    desc: "Project scope, material options, and pricing are documented before you decide whether to proceed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Local Service Area",
    desc: "Exterior project assessments are available in Windsor and communities throughout Essex County.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="py-20 bg-surface border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">About</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            About Windsor{" "}
            <span className="text-copper">Exterior Pros</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Exterior project assessments, service information, and estimates for homeowners across
            Windsor and Essex County.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-6">
                Our Approach
              </h2>
              <div className="space-y-5 text-muted leading-relaxed text-base">
                <p>
                  Windsor Exterior Pros helps homeowners assess roofing, eavestrough, siding, soffit,
                  fascia, window, door, landscaping, and hardscaping projects.
                </p>
                <p>
                  The process begins with a conversation about the property and the work being considered.
                  An on-site assessment can then be arranged to review conditions and discuss options.
                </p>
                <p>
                  Before work begins, the proposed scope, material selections, pricing, and any applicable
                  project-specific terms should be included in a written agreement.
                </p>
                <p>
                  Call or email us to discuss your project and determine whether an on-site estimate is
                  the right next step.
                </p>
                <p className="font-semibold text-text">
                  Serving Windsor and Essex County.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Values */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">Our Values</h2>
            <p className="text-muted max-w-xl mx-auto">
              These aren&rsquo;t marketing words. They&rsquo;re how we make decisions every day.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="bg-surface rounded-xl border border-[#E8E4DF] p-6 h-full">
                  <div className="w-12 h-12 rounded-lg bg-copper/15 flex items-center justify-center text-copper mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-text text-xl mb-3">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-surface-2 rounded-xl border border-[#E8E4DF] p-8 max-w-3xl">
              <h2 className="font-heading font-bold text-xl text-text mb-4">
                Clear Project Information
              </h2>
              <div className="space-y-3 text-muted text-sm">
                <p>
                  Every project starts with an on-site assessment and a written estimate describing
                  the recommended scope, materials, and next steps.
                </p>
                <p>
                  Product specifications and any applicable project-specific warranty terms are
                  reviewed before work begins so you can make an informed decision.
                </p>
                <p>
                  Questions are welcome. Call or email us before accepting an estimate if anything
                  in the proposed work needs clarification.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {["Written Project Scope", "Clear Communication", "Local Service", "Windsor & Essex County"].map((b) => (
                  <span key={b} className="text-xs text-copper border border-copper/30 px-3 py-1 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LeadForm
        heading="Work With Windsor's Best"
        subheading="Ready to experience the Windsor Exterior Pros difference? Request a free estimate."
      />
    </>
  );
}
