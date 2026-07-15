import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactActions from "@/components/ContactActions";
import { BUSINESS } from "@/lib/business";

export default function ContactForm() {
  return (
    <>
      <section className="border-b border-[#E8E4DF] bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-copper">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-copper" aria-current="page">Contact</span>
          </nav>
          <h1 className="mb-4 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-text sm:text-5xl">
            Get Your <span className="text-copper">Free Quote</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Call or email us to arrange a free on-site estimate. No obligation and no pressure.
          </p>
        </div>
      </section>

      <section className="bg-bg py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <AnimatedSection className="lg:col-span-2">
              <h2 className="mb-5 font-heading text-2xl font-bold text-text">Contact Information</h2>
              <dl className="space-y-5">
                <div>
                  <dt className="text-sm font-semibold text-text">Phone</dt>
                  <dd><a href={`tel:${BUSINESS.phoneHref}`} className="text-copper transition-colors hover:text-copper-dark">{BUSINESS.phoneDisplay}</a></dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-text">Email</dt>
                  <dd><a href={`mailto:${BUSINESS.email}`} className="break-all text-copper transition-colors hover:text-copper-dark">{BUSINESS.email}</a></dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-text">Service Area</dt>
                  <dd className="text-sm text-muted">Windsor and Essex County, Ontario</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-text">Hours</dt>
                  <dd className="text-sm text-muted">{BUSINESS.hoursDisplay}</dd>
                </div>
              </dl>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <div className="rounded-xl border border-[#E8E4DF] bg-surface p-6 shadow-sm md:p-8">
                <h2 className="mb-3 font-heading text-2xl font-bold text-text">Request an Estimate</h2>
                <p className="mb-7 text-muted">
                  Tell us what your property needs by phone or email. We will arrange an on-site visit and provide a written estimate.
                </p>
                <ContactActions />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
