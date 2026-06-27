import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Windsor Exterior Pros",
  description: "Privacy policy for Windsor Exterior Pros. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://windsorexteriorpros.ca/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-muted mb-6">
          <Link href="/" className="hover:text-copper transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-copper">Privacy Policy</span>
        </nav>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted text-sm mb-10">Last updated: June 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">1. Information We Collect</h2>
            <p>
              Windsor Exterior Pros collects personal information that you voluntarily provide when
              requesting a quote or contacting us. This may include your name, phone number, email
              address, property address, and details about the services you are interested in.
            </p>
            <p className="mt-3">
              We may also collect non-personally identifiable information automatically when you
              visit our website, including browser type, pages visited, and time spent on the site.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside">
              <li>Respond to your estimate requests and inquiries</li>
              <li>Schedule and conduct on-site estimates</li>
              <li>Send project-related communication and follow-ups</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">3. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services
              and comply with legal obligations. If you would like your information removed from our
              records, please contact us at info@windsorexteriorpros.ca.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">4. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can configure
              your browser to refuse cookies, though this may limit some website functionality.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">5. Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from
              unauthorized access, disclosure, or alteration. However, no method of internet
              transmission is completely secure.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">6. Your Rights</h2>
            <p>
              Under Canadian privacy law (PIPEDA), you have the right to access, correct, or
              request deletion of your personal information held by Windsor Exterior Pros. To
              exercise these rights, please contact us at info@windsorexteriorpros.ca.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be
              posted on this page with a revised date.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-xl text-text mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, please contact
              us at{" "}
              <a href="mailto:info@windsorexteriorpros.ca" className="text-copper hover:text-copper-light">
                info@windsorexteriorpros.ca
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
