import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Window & Door Installation Windsor Ontario",
  description:
    "Energy-efficient replacement windows and entry doors in Windsor Ontario. Improve comfort, security, and curb appeal. Free estimates. Serving Windsor-Essex.",
  alternates: { canonical: "https://www.windsorexteriorpros.com/services/windows-doors" },
  openGraph: {
    title: "Window & Door Installation Windsor Ontario | Windsor Exterior Pros",
    description: "Energy-efficient replacement windows and entry doors. Improve comfort, security, and curb appeal in Windsor-Essex. Free estimates.",
    images: [{ url: "/windows-doors-installation-windsor-ontario.jpg", width: 1600, height: 900, alt: "Black-framed window installation in progress" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Window & Door Installation Windsor Ontario | Windsor Exterior Pros",
    description: "Energy-efficient replacement windows and entry doors in Windsor-Essex. Free estimates, serving Windsor-Essex.",
    images: ["/windows-doors-installation-windsor-ontario.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.windsorexteriorpros.com" },
    { "@type": "ListItem", position: 2, name: "Windows & Doors", item: "https://www.windsorexteriorpros.com/services/windows-doors" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Window and Door Installation",
  provider: { "@type": "LocalBusiness", name: "Windsor Exterior Pros" },
  areaServed: "Windsor, Ontario",
  description: "Replacement window and entry door installation in Windsor Ontario. Energy-efficient products and professional installation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if my windows need replacing in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key signs include: drafts around the frame even when the window is fully closed; condensation between the glass panes (indicates failed seal and lost gas fill); difficulty opening, closing, or locking; visible rot or deterioration on wood frames; excessive outside noise transmission; and windows that are single-pane or older aluminum-frame models. Windsor winters make inefficient windows very noticeable on your heating bill.",
      },
    },
    {
      "@type": "Question",
      name: "What type of windows are best for Windsor Ontario homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Windsor's climate, we recommend double or triple-pane vinyl-framed windows with Low-E glass coating and argon gas fill. This combination handles our humid summers, cold winters, and gives you excellent noise reduction - important in Windsor's denser neighbourhoods. Vinyl frames don't rot, don't need painting, and insulate better than aluminum frames which can conduct cold directly into your home.",
      },
    },
    {
      "@type": "Question",
      name: "What is Low-E glass and do I need it in Windsor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Low-E (low emissivity) glass has a microscopic metallic coating that reflects heat - keeping heat inside during Windsor winters and blocking solar heat gain during hot summers. It also reduces UV fading on floors and furniture. For Windsor's four-season climate, Low-E with argon gas is the standard we recommend for any window replacement.",
      },
    },
    {
      "@type": "Question",
      name: "How long does window replacement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard window replacements (insert/retrofit style, which fits into the existing frame) typically take 30-60 minutes per window. A full-house window replacement for an average Windsor home is usually a 1-2 day job. Full-frame replacements (removing the entire frame down to the rough opening) take longer but are sometimes necessary when frames are damaged or when upgrading significantly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a retrofit and full-frame window installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A retrofit (or insert) installation fits a new window unit inside your existing frame - it's faster, less invasive, and causes minimal disruption to interior finishes. A full-frame installation removes the entire existing frame down to the rough opening - it's necessary when the existing frame is rotted, out of square, or when you're changing the window size or style. We assess which approach is right for each opening during the estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install entry doors and patio doors too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - we install entry doors, storm doors, sliding patio doors, and French doors. We carry steel and fibreglass entry doors, both of which outperform wood in Windsor's climate by resisting warping and rot. A properly installed, insulated steel or fibreglass door significantly reduces drafts and heat loss compared to an aging wooden entry door.",
      },
    },
  ],
};

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville",
];

const RELATED_SERVICES = [
  { name: "Siding", desc: "Vinyl and fiber cement siding that protects your home and transforms its curb appeal.", href: "/services/siding" },
  { name: "Soffit & Fascia", desc: "Protect your roofline and improve attic ventilation with new aluminum soffit and fascia.", href: "/services/soffit-fascia" },
  { name: "Landscaping & Hardscaping", desc: "Interlocking, patios, and stone work that extends your living space and elevates property value.", href: "/services/landscaping-hardscaping" },
];

export default function WindowsDoorsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/windows-doors-installation-windsor-ontario.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted mb-6">
            <Link href="/" className="hover:text-copper transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-copper">Windows & Doors</span>
          </nav>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-text max-w-2xl leading-tight mb-4">
            Window &amp; Door Installation{" "}
            <span className="text-copper">Windsor Ontario</span>
          </h1>
          <p className="text-text/80 text-lg max-w-xl mb-8">
            Energy-efficient replacement windows and entry doors that improve comfort, reduce heating
            and cooling costs, and enhance your home&rsquo;s security and curb appeal.
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
                Window & Door Services
              </h2>
              <div className="space-y-4 text-muted leading-relaxed mb-6">
                <p>
                  Old, drafty windows and worn entry doors are among the biggest sources of energy
                  loss in Windsor homes. Modern replacement windows can significantly reduce your
                  heating and cooling costs while improving comfort and indoor noise levels.
                </p>
                <p>
                  Windsor Exterior Pros installs quality replacement windows and doors with proper
                  flashing, sealing, and trim work. Done right, a window or door installation should
                  last 20-30 years with minimal maintenance.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Replacement Windows", desc: "Vinyl and fiberglass double and triple-pane replacement windows. Energy-efficient, low-maintenance, and available in many styles and colors." },
                  { name: "Entry Doors", desc: "Steel and fiberglass entry doors with quality hardware. Improve security, insulation, and your home's first impression." },
                  { name: "Sliding Patio Doors", desc: "Sliding and French patio door replacement. Smooth operation, proper sealing, and clean installation." },
                  { name: "Storm Doors", desc: "Storm door installation to add an extra layer of protection and energy efficiency to your existing entry doors." },
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
                  src="/windows-doors-installation-windsor-ontario.jpg"
                  alt="Black-framed window installation in progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-5 p-5 bg-surface rounded-xl border border-[#E8E4DF]">
                <p className="font-heading font-bold text-text mb-2">Why upgrade your windows?</p>
                <ul className="space-y-1.5">
                  {["Lower heating and cooling bills", "Improved indoor comfort year-round", "Reduced outside noise", "Better home security", "Increased resale value"].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted">
                      <svg className="w-4 h-4 text-copper flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Windows & Doors FAQ - Windsor Ontario
            </h2>
            <p className="text-muted">Common questions from Windsor homeowners about window and door replacement.</p>
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
            Windows & Doors Across Windsor-Essex
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
        heading="Get a Free Window & Door Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
