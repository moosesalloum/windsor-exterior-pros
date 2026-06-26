import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative bg-surface rounded-xl border border-[rgba(200,122,32,0.2)] hover:border-copper transition-all duration-300 overflow-hidden ${
        featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-copper to-copper-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />
      <div className={`p-6 flex flex-col h-full ${featured ? "lg:p-8" : ""}`}>
        <div className="w-12 h-12 rounded-lg bg-surface-2 flex items-center justify-center text-copper mb-4 group-hover:bg-copper group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3
          className={`font-heading font-bold text-text mb-2 group-hover:text-copper transition-colors ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
        <p className={`text-muted leading-relaxed flex-grow ${featured ? "text-base" : "text-sm"}`}>
          {description}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-copper font-semibold text-sm hover:text-copper-light transition-colors group/link"
        >
          Learn More
          <svg
            className="w-4 h-4 translate-x-0 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
