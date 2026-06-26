import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Windsor Exterior Pros",
  description: "Terms of service for Windsor Exterior Pros exterior contracting services.",
  alternates: { canonical: "https://windsorexteriorpros.ca/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-muted mb-6">
          <Link href="/" className="hover:text-copper transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-copper">Terms of Service</span>
        </nav>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text mb-2">
          Terms of Service
        </h1>
        <p className="text-muted text-sm mb-10">Last updated: June 2025</p>

        <div className="space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">1. Services</h2>
            <p>
              Windsor Exterior Pros provides residential and commercial exterior contracting services
              including but not limited to seamless eavestrough installation and repair, siding,
              soffit and fascia, roofing, landscaping, hardscaping, and window and door installation
              in Windsor and Essex County, Ontario, Canada.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">2. Estimates and Quotes</h2>
            <p>
              All estimates provided by Windsor Exterior Pros are free and without obligation. Written
              quotes are valid for 30 days from the date of issue unless otherwise stated. Prices are
              subject to change after this period or if project scope changes.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">3. Project Agreement</h2>
            <p>
              Work commences upon written acceptance of a quote and payment arrangements. Windsor
              Exterior Pros reserves the right to decline projects at its discretion. All projects are
              subject to a formal written agreement or work order outlining scope, pricing, and terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">4. Payment</h2>
            <p>
              Payment terms are outlined in the project agreement. Windsor Exterior Pros may require
              a deposit prior to commencing work, with the balance due upon project completion unless
              otherwise agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">5. Workmanship Warranty</h2>
            <p>
              Windsor Exterior Pros warrants its workmanship against defects for a period specified
              in the project agreement. This warranty covers installation errors but does not cover
              damage caused by acts of nature, improper maintenance, or third-party modifications.
              Material warranties are as provided by the respective manufacturers.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">6. Liability</h2>
            <p>
              Windsor Exterior Pros carries comprehensive general liability insurance and WSIB coverage.
              Our liability is limited to the cost of the contracted work. We are not responsible for
              pre-existing conditions not disclosed during the estimate process.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">7. Website Use</h2>
            <p>
              The content on this website is provided for informational purposes. Windsor Exterior
              Pros makes no warranties about the accuracy or completeness of information on this site.
              By using this site, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">8. Changes</h2>
            <p>
              Windsor Exterior Pros reserves the right to modify these terms at any time. Continued
              use of our website following any changes constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">9. Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a href="mailto:info@windsorexteriorpros.com" className="text-copper hover:text-copper-light">
                info@windsorexteriorpros.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
