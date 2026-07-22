import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "FAQ - Eavestrough & Exterior Contracting Windsor Ontario",
  description:
    "Frequently asked questions about eavestrough, siding, soffit & fascia, roofing, and exterior contracting in Windsor, Ontario.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/faq" },
};

const FAQS = [
  {
    q: "What services do you offer?",
    a: "Windsor Exterior Pros offers seamless eavestrough installation and repair, eavestrough cleaning and gutter guard installation, soffit and fascia installation, siding (vinyl, fiber cement, board & batten), roofing (shingle replacement and repair), landscaping and hardscaping (interlocking, patios, stone work), and window and door replacement.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Windsor and Essex County, Ontario. This includes Windsor, LaSalle, Tecumseh, Amherstburg, Essex, Lakeshore (including Belle River), Leamington, Kingsville, Harrow, Tilbury, McGregor, Cottam, Comber, and surrounding rural communities.",
  },
  {
    q: "How much does eavestrough installation cost in Windsor?",
    a: "The cost depends on the home, eavestrough size, accessibility, downspout layout, removal needs, and project complexity. We provide a free on-site assessment and a written, itemized estimate so you can make an informed decision with no obligation.",
  },
  {
    q: "What is the difference between seamless and sectional eavestroughs?",
    a: "Sectional eavestroughs are sold in pre-cut lengths (typically 10-12 feet) and joined together with connectors. Every connector is a potential leak point. Seamless eavestroughs are fabricated on-site from a continuous aluminum coil to the exact length needed, eliminating seams on straight runs. This means no seam leaks - the most common cause of eavestrough failure.",
  },
  {
    q: "How often should I clean my eavestroughs?",
    a: "In Windsor-Essex, we recommend cleaning eavestroughs at least twice per year - once in late spring after tree pollen and seeds fall, and once in late fall after leaves have dropped. Homes surrounded by trees may need cleaning 3-4 times per year. Clogged eavestroughs overflow and can damage foundations, landscaping, and siding.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes, always. We provide free, on-site estimates with a written, itemized quote. There is no obligation to proceed and no pressure from our end. We believe every homeowner deserves to know exactly what they're getting and what it costs before making any decision.",
  },
  {
    q: "What information is included with an estimate?",
    a: "We explain the recommended scope, material options, and expected next steps. Ask us to include any project-specific documentation or terms you need before deciding whether to proceed.",
  },
  {
    q: "How long does eavestrough installation take?",
    a: "Most residential eavestrough installations in Windsor are completed in a single day. The eavestrough machine comes on-site, we remove the old system if applicable, fabricate the new seamless runs, and install everything including downspouts and any necessary drainage extensions. Larger or more complex homes may take a day and a half.",
  },
  {
    q: "What materials do you use?",
    a: "For eavestroughs, we use .032 gauge aluminum in 5\" or 6\" K-style profile, available in 20+ factory-baked colors. For soffit and fascia, we use aluminum panels and wrap. For siding, we work with quality vinyl products and fiber cement (including James Hardie and similar). We don't use cut-rate materials.",
  },
  {
    q: "Do you offer gutter guards?",
    a: "Yes, we supply and install eavestrough guards (also called gutter guards or leaf guards). They significantly reduce the frequency of cleaning by keeping debris out while allowing water to flow freely. We'll show you the options and let you decide whether they make sense for your situation.",
  },
  {
    q: "What is soffit and fascia?",
    a: "Soffit is the horizontal material that covers the underside of your roof overhang. Fascia is the vertical board at the edge of the roof where eavestroughs mount. Together they protect the rafters and roof structure from moisture and pests, and they play a key role in attic ventilation. Most Windsor homes have aluminum soffit and fascia.",
  },
  {
    q: "Can you replace just part of my eavestrough?",
    a: "Yes. If only a section of your eavestrough is damaged or failing, we can replace just that section. We'll assess the overall condition and give you an honest recommendation on whether a partial repair or full replacement is the better value for your situation.",
  },
  {
    q: "Do you work in winter?",
    a: "We work year-round when weather permits. Cold temperatures affect aluminum installation (the material is less flexible), so we typically schedule eavestrough work from early spring through late fall. Certain jobs like soffit, fascia, and some siding work can be done in winter. Contact us and we'll let you know what's feasible.",
  },
  {
    q: "Are product or workmanship warranties available?",
    a: "Warranty terms vary by product and project scope. Any manufacturer or workmanship warranty that applies to your project will be documented in the written agreement before work begins.",
  },
  {
    q: "Who should I contact about the project crew?",
    a: "Ask during the estimate who will perform the work and who your point of contact will be. Crew details and project responsibilities should be clear before work begins.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the Free Estimate Form on our contact page, or call 226-605-6894 if you prefer. We'll follow up to arrange a property assessment and provide a written, itemized estimate with no obligation to proceed.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.windsorexteriorpros.com/faq" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="py-20 bg-surface border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">FAQ</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Frequently Asked{" "}
            <span className="text-copper">Questions</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Common questions from Windsor and Essex County homeowners about our services, pricing,
            materials, and process.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <details className="group bg-surface rounded-xl border border-[#E8E4DF] overflow-hidden">
                  <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none">
                    <span className="font-heading font-bold text-text group-hover:text-copper transition-colors">
                      {faq.q}
                    </span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-copper mt-0.5 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-muted text-sm leading-relaxed border-t border-[#E8E4DF] pt-4">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="mt-10 text-center">
            <p className="text-muted mb-4">Have a question not answered here?</p>
            <Link
              href="/contact#estimate-form"
              className="bg-copper hover:bg-copper-light text-white font-heading font-bold px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LeadForm
        heading="Ready to Get Started?"
        subheading="Request a free, no-obligation estimate. We serve all of Windsor and Essex County."
        dark={false}
      />
    </>
  );
}
