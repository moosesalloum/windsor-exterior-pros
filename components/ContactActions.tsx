import { BUSINESS } from "@/lib/business";

interface ContactActionsProps {
  dark?: boolean;
  compact?: boolean;
}

export default function ContactActions({ dark = false, compact = false }: ContactActionsProps) {
  const subject = encodeURIComponent("Free estimate request");
  const textClass = dark ? "text-white/75" : "text-muted";

  return (
    <div className={compact ? "space-y-3" : "space-y-5"}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? "gap-3" : "gap-4"}`}>
        <a
          href={`tel:${BUSINESS.phoneHref}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-copper px-6 py-3 font-heading font-bold text-white transition-colors hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-2.26 1.14a11 11 0 005.52 5.51l1.13-2.25a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
          </svg>
          Call {BUSINESS.phoneDisplay}
        </a>
        <a
          href={`mailto:${BUSINESS.email}?subject=${subject}`}
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-6 py-3 font-heading font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 ${
            dark
              ? "border-white/40 text-white hover:border-white hover:bg-white/10"
              : "border-copper text-copper hover:bg-copper hover:text-white"
          }`}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email for an Estimate
        </a>
      </div>
      <p className={`text-center text-sm ${textClass}`}>
        Free written estimates across Windsor and Essex County. No obligation.
      </p>
    </div>
  );
}
