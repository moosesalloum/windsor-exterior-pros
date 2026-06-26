import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Windsor Exterior Pros | Seamless Eavestrough & Exterior Contractors Windsor Ontario",
    template: "%s | Windsor Exterior Pros",
  },
  description:
    "Windsor's trusted exterior contractors. Seamless eavestrough installation, siding, soffit & fascia, roofing and more across Windsor and Essex County. Free estimates.",
  metadataBase: new URL("https://windsorexteriorpros.ca"),
  openGraph: {
    title: "Windsor Exterior Pros | Seamless Eavestrough & Exterior Contractors Windsor Ontario",
    description:
      "Windsor's trusted exterior contractors. Seamless eavestrough installation, siding, soffit & fascia, roofing and more across Windsor and Essex County. Free estimates.",
    url: "https://windsorexteriorpros.ca",
    siteName: "Windsor Exterior Pros",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/10038012/pexels-photo-10038012.jpeg",
        width: 1200,
        height: 630,
        alt: "Windsor Exterior Pros - Premium Exterior Contracting",
      },
    ],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  alternates: {
    canonical: "https://windsorexteriorpros.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-text font-body antialiased">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <PopupForm />
      </body>
    </html>
  );
}
