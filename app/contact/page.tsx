import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import JsonLd from "@/components/JsonLd";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Free Exterior Estimate",
  description:
    "Call or email Windsor Exterior Pros for a free exterior estimate in Windsor and Essex County. Eavestrough, siding, roofing, soffit, windows, doors, and hardscaping.",
  openGraph: {
    title: "Free Exterior Estimate | Windsor Exterior Pros",
    description:
      "Call or email for a free exterior estimate in Windsor-Essex.",
    url: `${BUSINESS.siteUrl}/contact`,
    images: [{ url: "/windsor-exterior-pros-social.jpg", width: 1200, height: 630, alt: "Windsor Exterior Pros - Free Estimate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Exterior Estimate | Windsor Exterior Pros",
    description: "Free estimates for exterior services in Windsor-Essex, Ontario.",
    images: ["/windsor-exterior-pros-social.jpg"],
  },
  alternates: { canonical: `${BUSINESS.siteUrl}/contact` },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Windsor Exterior Pros",
  url: `${BUSINESS.siteUrl}/contact`,
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phoneDisplay,
    email: BUSINESS.email,
    areaServed: "Windsor and Essex County, Ontario",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactForm />
    </>
  );
}
