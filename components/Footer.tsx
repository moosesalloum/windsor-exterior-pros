import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  { name: "Seamless Eavestrough", href: "/services/seamless-eavestrough" },
  { name: "Siding", href: "/services/siding" },
  { name: "Soffit & Fascia", href: "/services/soffit-fascia" },
  { name: "Roofing", href: "/services/roofing" },
  { name: "Landscaping & Hardscaping", href: "/services/landscaping-hardscaping" },
  { name: "Windows & Doors", href: "/services/windows-doors" },
];

const AREAS = [
  { name: "Windsor", href: "/service-areas" },
  { name: "LaSalle", href: "/service-areas/lasalle" },
  { name: "Tecumseh", href: "/service-areas/tecumseh" },
  { name: "Amherstburg", href: "/service-areas/amherstburg" },
  { name: "Leamington", href: "/service-areas/leamington" },
  { name: "Lakeshore", href: "/service-areas/lakeshore" },
  { name: "Essex", href: "/service-areas/essex" },
  { name: "Kingsville", href: "/service-areas/kingsville" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f7f5] border-t border-[rgba(200,122,32,0.2)] text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 w-full">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/logo-stacked.png"
                  alt="Windsor Exterior Pros"
                  width={180}
                  height={180}
                />
              </div>
            </Link>
            <p className="text-[#4a4540] text-sm leading-relaxed mb-4 text-center md:text-left">
              Windsor&rsquo;s Premier Exterior Contracting. Seamless eavestroughs, siding, soffit, fascia, roofing and more across Windsor and Essex County.
            </p>
            <p className="text-xs text-[#4a4540] text-center md:text-left">
              Licensed &amp; Insured &bull; WSIB Compliant
            </p>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-heading font-bold text-[#C87A20] text-sm uppercase tracking-wider mb-4 text-center md:text-left">
              Services
            </h3>
            <ul className="space-y-2.5 flex flex-col items-center md:items-start">
              {SERVICES.map((s) => (
                <li key={s.href} className="text-center md:text-left w-full">
                  <Link
                    href={s.href}
                    className="block text-[#4a4540] hover:text-copper text-sm transition-colors text-center md:text-left"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h3 className="font-heading font-bold text-[#C87A20] text-sm uppercase tracking-wider mb-4 text-center md:text-left">
              Service Areas
            </h3>
            <ul className="space-y-2.5 flex flex-col items-center md:items-start">
              {AREAS.map((a) => (
                <li key={a.href} className="text-center md:text-left w-full">
                  <Link
                    href={a.href}
                    className="block text-[#4a4540] hover:text-copper text-sm transition-colors text-center md:text-left"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li className="text-center md:text-left w-full">
                <Link
                  href="/service-areas"
                  className="block text-copper text-sm hover:text-copper-light transition-colors font-semibold text-center md:text-left"
                >
                  View All Areas &rsaquo;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company + Contact column */}
          <div>
            <h3 className="font-heading font-bold text-[#C87A20] text-sm uppercase tracking-wider mb-4 text-center md:text-left">
              Company
            </h3>
            <ul className="space-y-2.5 mb-6 flex flex-col items-center md:items-start">
              <li className="text-center md:text-left w-full">
                <Link href="/about" className="block text-[#4a4540] hover:text-copper text-sm transition-colors text-center md:text-left">About Us</Link>
              </li>
              <li className="text-center md:text-left w-full">
                <Link href="/faq" className="block text-[#4a4540] hover:text-copper text-sm transition-colors text-center md:text-left">FAQ</Link>
              </li>
              <li className="text-center md:text-left w-full">
                <Link href="/contact" className="block text-[#4a4540] hover:text-copper text-sm transition-colors text-center md:text-left">Get a Quote</Link>
              </li>
              <li className="text-center md:text-left w-full">
                <Link href="/privacy" className="block text-[#4a4540] hover:text-copper text-sm transition-colors text-center md:text-left">Privacy Policy</Link>
              </li>
              <li className="text-center md:text-left w-full">
                <Link href="/terms" className="block text-[#4a4540] hover:text-copper text-sm transition-colors text-center md:text-left">Terms of Service</Link>
              </li>
            </ul>

            <h3 className="font-heading font-bold text-[#C87A20] text-sm uppercase tracking-wider mb-3 text-center md:text-left">
              Contact
            </h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li className="text-center md:text-left w-full">
                <Link href="/contact" className="block text-[#C87A20] hover:text-[#E09030] text-sm font-semibold transition-colors">
                  Free Estimates, Call Today
                </Link>
              </li>
              <li className="text-center md:text-left w-full">
                <a
                  href="mailto:info@windsorexteriorpros.com"
                  className="block text-[#4a4540] hover:text-copper text-sm transition-colors text-center md:text-left"
                >
                  info@windsorexteriorpros.com
                </a>
              </li>
              <li className="text-[#4a4540] text-sm text-center md:text-left w-full">Windsor, Ontario</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#e8e4df] border-t border-[rgba(200,122,32,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <p className="text-[#4a4540] text-xs text-center md:text-left">
            &copy; {year} Windsor Exterior Pros. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end items-center gap-4">
            <Link href="/privacy" className="text-[#4a4540] hover:text-copper text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#4a4540] hover:text-copper text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
