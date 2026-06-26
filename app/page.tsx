import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ServiceCard from "@/components/ServiceCard";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialCard from "@/components/TestimonialCard";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Windsor Exterior Pros | Seamless Eavestrough & Exterior Contractors Windsor Ontario",
  description:
    "Windsor's trusted exterior contractors. Seamless eavestrough installation, siding, soffit & fascia, roofing and more across Windsor and Essex County. Free estimates.",
  alternates: { canonical: "https://windsorexteriorpros.ca" },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Windsor Exterior Pros",
  description:
    "Windsor's premium exterior contracting specialists. Seamless eavestrough installation, siding, soffit and fascia, roofing, landscaping, and windows and doors across Windsor and Essex County, Ontario.",
  url: "https://windsorexteriorpros.ca",
  telephone: "[PLACEHOLDER]",
  email: "info@windsorexteriorpros.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windsor",
    addressRegion: "Ontario",
    addressCountry: "CA",
    postalCode: "N8X",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.3149,
    longitude: -83.0364,
  },
  areaServed: [
    "Windsor", "LaSalle", "Tecumseh", "Amherstburg", "Essex",
    "Lakeshore", "Leamington", "Kingsville", "Belle River", "Harrow", "Tilbury",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
  priceRange: "$$",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Windsor Exterior Pros",
  url: "https://windsorexteriorpros.ca",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://windsorexteriorpros.ca/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const SERVICES = [
  {
    title: "Seamless Eavestrough",
    description:
      "Custom-fabricated on-site from continuous aluminum coil - zero seams means zero leak points. The most effective eavestrough system available for Windsor homeowners.",
    href: "/services/seamless-eavestrough",
    featured: true,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Siding",
    description:
      "Vinyl, fiber cement, and board & batten siding installations that protect your home and transform its curb appeal.",
    href: "/services/siding",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Soffit & Fascia",
    description:
      "Protect your roofline from moisture, pests, and rot. Proper soffit and fascia is critical for attic ventilation and long-term home health.",
    href: "/services/soffit-fascia",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Roofing",
    description:
      "Shingle replacement, repairs, and inspections by experienced local roofers. Honest assessments and quality materials.",
    href: "/services/roofing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Landscaping & Hardscaping",
    description:
      "Interlocking, patios, stone work, and lawn care that extends your living space and elevates your property value.",
    href: "/services/landscaping-hardscaping",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Windows & Doors",
    description:
      "Energy-efficient replacement windows and entry doors. Improve your home's comfort, security, and appearance.",
    href: "/services/windows-doors",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
  },
];

const WHY_US = [
  {
    title: "On-Site Seamless Fabrication",
    desc: "We bring the eavestrough machine to your home and fabricate custom-fit gutters on the spot from .032 gauge aluminum. No pre-cut sections, no weak joints.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "No Subcontractors",
    desc: "Your home gets our crew, the same experienced team that quoted you. We never hand off core exterior work to unknown third parties.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    title: "Free Written Estimates",
    desc: "We give you a detailed, itemized quote in writing. No high-pressure sales tactics, no bait-and-switch pricing. You decide if and when to proceed.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Workmanship Guarantee",
    desc: "We stand behind every installation. If something isn't right, we come back and make it right. That's the Windsor Exterior Pros commitment.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Licensed and Insured",
    desc: "Fully licensed and WSIB compliant. You're protected every step of the way when you work with Windsor Exterior Pros.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Local Windsor-Essex Owned",
    desc: "We live and work in this community. Our reputation is built here, and we stand behind every job with local pride and accountability.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The team was professional, efficient, and cleaned up after themselves completely. My eavestroughs look fantastic and I haven't had a single issue since installation. Best decision I made for my Windsor home.",
    name: "Sarah M.",
    location: "Windsor, Ontario",
  },
  {
    quote:
      "Fair pricing, excellent work quality, and they actually showed up when they said they would. If you're in LaSalle looking for eavestrough or soffit work, these are your guys.",
    name: "Mike T.",
    location: "LaSalle, Ontario",
  },
  {
    quote:
      "Had them do soffit, fascia, and all new seamless eavestroughs on my home in Tecumseh. They explained every step, the price matched the quote, and the result is outstanding.",
    name: "Jennifer R.",
    location: "Tecumseh, Ontario",
  },
];

const ALL_AREAS = [
  { name: "Windsor", slug: "windsor" },
  { name: "LaSalle", slug: "lasalle" },
  { name: "Tecumseh", slug: "tecumseh" },
  { name: "Amherstburg", slug: "amherstburg" },
  { name: "Essex", slug: "essex" },
  { name: "Lakeshore", slug: "lakeshore" },
  { name: "Leamington", slug: "leamington" },
  { name: "Kingsville", slug: "kingsville" },
  { name: "Belle River", slug: "belle-river" },
  { name: "Harrow", slug: "harrow" },
  { name: "Tilbury", slug: "tilbury" },
  { name: "McGregor", slug: "mcgregor" },
  { name: "Cottam", slug: "cottam" },
  { name: "Comber", slug: "comber" },
];

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-3">
      <span className="w-8 h-px bg-[#C87A20]" aria-hidden="true" />
      <span className="text-[#C87A20] text-sm font-semibold tracking-widest uppercase">
        {label}
      </span>
      <span className="w-8 h-px bg-[#C87A20]" aria-hidden="true" />
    </div>
  );
}

function SectionAccent() {
  return <div className="w-16 h-1 bg-[#C87A20] mt-3 mb-6 mx-auto" />;
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <JsonLd data={websiteSchema} />

      <HeroSection />

      <StatsStrip />

      {/* Services Grid */}
      <section id="services" className="py-20 bg-[#F2F0ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionEyebrow label="Our Services" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
              Complete Exterior Services
            </h2>
            <SectionAccent />
            <p className="text-[#6B6560] max-w-2xl mx-auto text-lg leading-relaxed">
              From seamless eavestrough fabrication to full exterior renovations, we handle every
              aspect of your home&rsquo;s exterior with the same commitment to quality.
            </p>
          </AnimatedSection>
          <ServicesGrid>
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </ServicesGrid>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionEyebrow label="Why Choose Us" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
              What Sets Windsor Exterior Pros Apart
            </h2>
            <SectionAccent />
            <p className="text-[#6B6560] max-w-xl mx-auto text-lg leading-relaxed">
              Not all exterior contractors are the same. Here&rsquo;s what you can expect when you work with us.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 p-6 bg-[#F2F0ED] rounded-xl h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#C87A20] flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#1A1A1A] mb-1.5">{item.title}</h3>
                    <p className="text-[#6B6560] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F2F0ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <SectionEyebrow label="Customer Reviews" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
              What Windsor Homeowners Say
            </h2>
            <SectionAccent />
            <p className="text-[#6B6560] text-lg leading-relaxed">Real customers, real results across Windsor-Essex.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <SectionEyebrow label="Service Areas" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
              Serving All of Windsor-Essex County
            </h2>
            <SectionAccent />
            <p className="text-[#6B6560] max-w-xl mx-auto text-lg leading-relaxed">
              From Windsor to Leamington, we bring the same premium service to every corner of Essex
              County.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {ALL_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group flex flex-col items-center gap-1.5 p-3 bg-white rounded-lg border border-[#E8E4DF] hover:border-[#C87A20] hover:shadow-sm transition-all duration-200 text-center"
                >
                  <svg className="w-4 h-4 text-[#C87A20] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold text-[#2C2C2C] group-hover:text-[#C87A20] transition-colors leading-tight">{area.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-center mt-8">
              <Link
                href="/service-areas"
                className="text-[#C87A20] hover:text-[#E09030] font-semibold transition-colors"
              >
                View all service area details &rsaquo;
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <LeadForm
        heading="Ready to Transform Your Home's Exterior?"
        subheading="Request a free, no-obligation estimate from Windsor's exterior pros. We serve all of Windsor and Essex County."
        dark={true}
      />
    </>
  );
}
