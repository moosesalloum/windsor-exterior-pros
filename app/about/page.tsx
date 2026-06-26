import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "About Windsor Exterior Pros | Windsor-Essex Exterior Contractors",
  description:
    "Learn about Windsor Exterior Pros - locally owned exterior contracting serving Windsor and Essex County. 6+ years experience, no subcontractors, quality-first approach.",
  alternates: { canonical: "https://windsorexteriorpros.ca/about" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://windsorexteriorpros.ca/about" },
  ],
};

const VALUES = [
  {
    title: "Quality",
    desc: "We don't rush jobs to fit more in the schedule. Every home gets the time and attention it deserves. We use materials we'd install on our own homes, and we install them the way the manufacturer intended.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    desc: "You get a written, itemized quote before we start. The price you're quoted is the price you pay unless scope changes. We'll tell you exactly what we're doing and why - no mystery, no surprises.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "We're Windsor-Essex people working on Windsor-Essex homes. The money you spend with us stays in this community. We know our neighbors and we treat every home as if it belongs to one.",
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
            A Windsor-Essex exterior contracting company built on a simple foundation - do the work
            right, be honest about what homeowners need, and stand behind every job we complete.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <h2 className="font-heading font-extrabold text-3xl text-text mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-muted leading-relaxed text-base">
                <p>
                  Windsor Exterior Pros was built on a simple idea: Windsor homeowners deserve better
                  than rushed crews and generic service.
                </p>
                <p>
                  Our founder spent over 6 years mastering his trade across Windsor-Essex, working on
                  hundreds of homes and learning exactly what it takes to do exterior work the right
                  way. He saw the shortcuts being taken. The rushed installs. The vague quotes that
                  turned into surprise charges. The subcontractors showing up with no accountability.
                </p>
                <p>
                  He started Windsor Exterior Pros to bring that expertise directly to homeowners,
                  with no shortcuts and no subcontractors cutting corners on your home. Along the way,
                  he found the right partner - someone who shares the same drive for quality and handles
                  the business side so the team can stay focused entirely on the craft.
                </p>
                <p>
                  Together, they run a lean, quality-first operation where every project gets the
                  attention it deserves. The crew that quotes your job is the crew that shows up to do
                  it. The price we quote is the price you pay. And if anything isn&rsquo;t right when we&rsquo;re
                  done, we come back and make it right.
                </p>
                <p className="font-semibold text-text">
                  That&rsquo;s the Windsor Exterior Pros difference.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl text-text mb-3">Our Team</h2>
            <p className="text-muted max-w-xl mx-auto">
              A small, focused team where every member takes pride in the work.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                role: "Field Expert",
                desc: "6+ years of hands-on exterior experience across Windsor-Essex. Leads every installation and repair personally. If it gets installed wrong, he catches it before it leaves.",
              },
              {
                role: "Operations Partner",
                desc: "Manages estimates, scheduling, and customer communication so the field team can focus entirely on quality work. Every written quote and follow-up comes from this desk.",
              },
            ].map((member) => (
              <AnimatedSection key={member.role}>
                <div className="bg-surface-2 rounded-xl border border-[#E8E4DF] p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-surface mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-text text-lg mb-1">{member.role}</h3>
                  <p className="text-copper text-xs font-semibold mb-3">Windsor Exterior Pros</p>
                  <p className="text-muted text-sm leading-relaxed">{member.desc}</p>
                </div>
              </AnimatedSection>
            ))}
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

      {/* License & Insurance */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-surface-2 rounded-xl border border-[#E8E4DF] p-8 max-w-3xl">
              <h2 className="font-heading font-bold text-xl text-text mb-4">
                Licensed, Insured & WSIB Compliant
              </h2>
              <div className="space-y-3 text-muted text-sm">
                <p>
                  Windsor Exterior Pros is fully licensed to operate as a contractor in Ontario and
                  carries comprehensive general liability insurance on every job.
                </p>
                <p>
                  We are WSIB (Workplace Safety and Insurance Board) compliant, which means you are
                  protected from liability if a worker is injured on your property during our work.
                  Always ask any contractor for proof of WSIB coverage before allowing work to begin.
                </p>
                <p>
                  We are happy to provide proof of insurance and WSIB coverage upon request before
                  starting any job.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {["Fully Licensed", "General Liability Insurance", "WSIB Compliant", "Windsor & Essex County"].map((b) => (
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
