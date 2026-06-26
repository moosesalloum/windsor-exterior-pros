import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Window & Door Installation Windsor Ontario",
  description:
    "Energy-efficient replacement windows and entry doors in Windsor Ontario. Improve comfort, security, and curb appeal. Free estimates. Licensed & insured.",
  alternates: { canonical: "https://windsorexteriorpros.ca/services/windows-doors" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://windsorexteriorpros.ca" },
    { "@type": "ListItem", position: 2, name: "Windows & Doors", item: "https://windsorexteriorpros.ca/services/windows-doors" },
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

const ALL_AREAS = [
  "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
  "Lakeshore", "Leamington", "Kingsville",
];

export default function WindowsDoorsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/9733906/pexels-photo-9733906.jpeg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
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
                  src="https://images.pexels.com/photos/9733906/pexels-photo-9733906.jpeg"
                  alt="Window and door installation Windsor Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-5 p-5 bg-surface rounded-xl border border-[rgba(200,122,32,0.2)]">
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

      {/* Service Areas */}
      <section className="py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-xl text-text mb-4">
            Windows & Doors Across Windsor-Essex
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
        heading="Get a Free Window & Door Estimate"
        subheading="Serving Windsor and Essex County. Free written quotes with no obligation."
      />
    </>
  );
}
