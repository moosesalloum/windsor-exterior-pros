"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const serviceCardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
    <motion.div
      variants={serviceCardVariant}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative bg-white rounded-lg border border-[#E8E4DF] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
        featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
      }`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C87A20] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      <div className={`p-6 flex flex-col h-full ${featured ? "lg:p-8" : ""}`}>
        <div className="w-12 h-12 rounded-lg bg-[#C87A20] flex items-center justify-center text-white mb-4 flex-shrink-0">
          {icon}
        </div>
        <h3
          className={`font-heading font-bold text-[#1A1A1A] mb-2 ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {title}
        </h3>
        <p className={`text-[#6B6560] leading-relaxed flex-grow ${featured ? "text-base" : "text-base"}`}>
          {description}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-[#C87A20] font-semibold text-sm hover:text-[#E09030] transition-colors group/link"
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
    </motion.div>
  );
}
