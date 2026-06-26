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
    <footer className="bg-bg border-t border-[rgba(200,122,32,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Windsor Exterior Pros"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="leading-tight">
                <span className="block font-heading font-bold text-text text-sm">Windsor Exterior Pros</span>
                <span className="block text-copper text-xs">Premium Exterior Contracting</span>
              </div>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Windsor&rsquo;s Premier Exterior Contracting. Seamless eavestroughs, siding, soffit, fascia, roofing and more across Windsor and Essex County.
            </p>
            <p className="text-xs text-muted">
              Licensed &amp; Insured &bull; WSIB Compliant
            </p>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-heading font-bold text-text text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-muted hover:text-copper text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h3 className="font-heading font-bold text-text text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {AREAS.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-muted hover:text-copper text-sm transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-copper text-sm hover:text-copper-light transition-colors font-semibold">
                  View All Areas &rsaquo;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company + Contact column */}
          <div>
            <h3 className="font-heading font-bold text-text text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link href="/about" className="text-muted hover:text-copper text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted hover:text-copper text-sm transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-copper text-sm transition-colors">Get a Quote</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted hover:text-copper text-sm transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted hover:text-copper text-sm transition-colors">Terms of Service</Link>
              </li>
            </ul>

            <h3 className="font-heading font-bold text-text text-sm uppercase tracking-wider mb-3">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-muted text-sm">[Phone TBD]</li>
              <li>
                <a
                  href="mailto:info@windsorexteriorpros.com"
                  className="text-muted hover:text-copper text-sm transition-colors"
                >
                  info@windsorexteriorpros.com
                </a>
              </li>
              <li className="text-muted text-sm">Windsor, Ontario</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-[rgba(200,122,32,0.15)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted text-xs">
            &copy; {year} Windsor Exterior Pros. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-muted hover:text-copper text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted hover:text-copper text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
