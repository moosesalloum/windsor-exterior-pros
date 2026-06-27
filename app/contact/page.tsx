import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Estimate | Windsor Exterior Pros",
  description:
    "Request a free, no-obligation estimate for eavestrough, siding, roofing, soffit & fascia, windows, or landscaping in Windsor and Essex County. We respond within 24 hours.",
  openGraph: {
    title: "Get a Free Estimate | Windsor Exterior Pros",
    description:
      "Request a free estimate for exterior work in Windsor-Essex. Eavestrough, siding, roofing, soffit & fascia, windows & doors, landscaping.",
    url: "https://windsorexteriorpros.com/contact",
    images: [{ url: "/windsor-exterior-pros-social.jpg", width: 1200, height: 630, alt: "Windsor Exterior Pros - Free Estimate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Estimate | Windsor Exterior Pros",
    description:
      "Free estimates for eavestrough, siding, roofing, and more in Windsor-Essex Ontario.",
    images: ["/windsor-exterior-pros-social.jpg"],
  },
  alternates: { canonical: "https://windsorexteriorpros.com/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}
